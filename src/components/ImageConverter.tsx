import React, { useState, useCallback } from 'react';
import { Upload, Download, Image as ImageIcon, Zap, Check, Settings, Sliders, FileImage } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';
import { trackImageConversion, trackDownload, trackBatchConversion, trackEngagement } from '@/utils/analytics';

interface ConvertedImage {
  id: string;
  originalFile: File;
  convertedBlob: Blob;
  format: string;
  originalFormat: string;
  originalSize: number;
  convertedSize: number;
  compressionRatio: number;
}

interface ConversionOptions {
  quality: number;
  width?: number;
  height?: number;
  maintainAspectRatio: boolean;
  removeMetadata: boolean;
}

const SUPPORTED_FORMATS = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp', 'ico'] as const;
type SupportedFormat = typeof SUPPORTED_FORMATS[number];

const PRESET_SIZES = [
  { name: 'Original', width: 0, height: 0 },
  { name: 'HD (1920x1080)', width: 1920, height: 1080 },
  { name: 'Instagram Square (1080x1080)', width: 1080, height: 1080 },
  { name: 'Facebook Cover (820x312)', width: 820, height: 312 },
  { name: 'Twitter Header (1500x500)', width: 1500, height: 500 },
  { name: 'Medium (800x600)', width: 800, height: 600 },
  { name: 'Small (400x300)', width: 400, height: 300 },
];

const ImageConverter = () => {
  const [dragOver, setDragOver] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [convertedImages, setConvertedImages] = useState<ConvertedImage[]>([]);
  const [selectedFormat, setSelectedFormat] = useState<SupportedFormat>('webp');
  const [converting, setConverting] = useState(false);
  const [conversionProgress, setConversionProgress] = useState(0);
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  const [options, setOptions] = useState<ConversionOptions>({
    quality: 90,
    width: undefined,
    height: undefined,
    maintainAspectRatio: true,
    removeMetadata: true,
  });

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // High-quality image resizing with progressive scaling
  const resizeImageHighQuality = (
    sourceCanvas: HTMLCanvasElement,
    targetWidth: number,
    targetHeight: number
  ): HTMLCanvasElement => {
    const sourceWidth = sourceCanvas.width;
    const sourceHeight = sourceCanvas.height;
    
    // If no resizing needed, return original
    if (sourceWidth === targetWidth && sourceHeight === targetHeight) {
      return sourceCanvas;
    }
    
    // Calculate scale factors
    const scaleX = targetWidth / sourceWidth;
    const scaleY = targetHeight / sourceHeight;
    
    // For large downscaling (> 50% reduction), use progressive scaling
    if (scaleX < 0.5 || scaleY < 0.5) {
      return progressiveResize(sourceCanvas, targetWidth, targetHeight);
    }
    
    // For upscaling or small downscaling, use high-quality single-step
    return singleStepResize(sourceCanvas, targetWidth, targetHeight);
  };

  // Progressive resizing for large scale reductions
  const progressiveResize = (
    sourceCanvas: HTMLCanvasElement,
    targetWidth: number,
    targetHeight: number
  ): HTMLCanvasElement => {
    let currentCanvas = sourceCanvas;
    let currentWidth = sourceCanvas.width;
    let currentHeight = sourceCanvas.height;
    
    // Progressively scale down by 50% until we're close to target
    while (currentWidth > targetWidth * 2 || currentHeight > targetHeight * 2) {
      const nextWidth = Math.max(Math.floor(currentWidth * 0.5), targetWidth);
      const nextHeight = Math.max(Math.floor(currentHeight * 0.5), targetHeight);
      
      currentCanvas = singleStepResize(currentCanvas, nextWidth, nextHeight);
      currentWidth = nextWidth;
      currentHeight = nextHeight;
    }
    
    // Final resize to exact target dimensions
    if (currentWidth !== targetWidth || currentHeight !== targetHeight) {
      currentCanvas = singleStepResize(currentCanvas, targetWidth, targetHeight);
    }
    
    return currentCanvas;
  };

  // Single-step high-quality resize
  const singleStepResize = (
    sourceCanvas: HTMLCanvasElement,
    targetWidth: number,
    targetHeight: number
  ): HTMLCanvasElement => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d')!;
    
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    
    // Enable high-quality scaling
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    
    // Use different algorithms based on scale factor
    const scaleX = targetWidth / sourceCanvas.width;
    const scaleY = targetHeight / sourceCanvas.height;
    
    if (scaleX > 1 || scaleY > 1) {
      // Upscaling: use bicubic-like interpolation
      ctx.drawImage(sourceCanvas, 0, 0, targetWidth, targetHeight);
      
      // Apply sharpening filter for upscaled images
      applySharpeningFilter(ctx, targetWidth, targetHeight);
    } else {
      // Downscaling: use high-quality smoothing
      ctx.drawImage(sourceCanvas, 0, 0, targetWidth, targetHeight);
    }
    
    return canvas;
  };

  // Apply sharpening filter for upscaled images
  const applySharpeningFilter = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number
  ) => {
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;
    const output = new Uint8ClampedArray(data);
    
    // Sharpening kernel
    const kernel = [
      0, -1, 0,
      -1, 5, -1,
      0, -1, 0
    ];
    
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        for (let c = 0; c < 3; c++) { // RGB channels only
          let sum = 0;
          for (let ky = -1; ky <= 1; ky++) {
            for (let kx = -1; kx <= 1; kx++) {
              const idx = ((y + ky) * width + (x + kx)) * 4 + c;
              sum += data[idx] * kernel[(ky + 1) * 3 + (kx + 1)];
            }
          }
          const outputIdx = (y * width + x) * 4 + c;
          output[outputIdx] = Math.max(0, Math.min(255, sum));
        }
      }
    }
    
    const outputImageData = new ImageData(output, width, height);
    ctx.putImageData(outputImageData, 0, 0);
  };

  const convertImage = useCallback(async (
    file: File, 
    targetFormat: SupportedFormat, 
    conversionOptions: ConversionOptions
  ): Promise<{ blob: Blob; originalSize: number; convertedSize: number }> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      
      img.onload = () => {
        let { width, height } = conversionOptions;
        const originalWidth = img.naturalWidth;
        const originalHeight = img.naturalHeight;
        
        // Calculate dimensions
        if (!width && !height) {
          width = originalWidth;
          height = originalHeight;
        } else if (width && !height && conversionOptions.maintainAspectRatio) {
          height = Math.round((originalHeight * width) / originalWidth);
        } else if (!width && height && conversionOptions.maintainAspectRatio) {
          width = Math.round((originalWidth * height) / originalHeight);
        } else if (!width) {
          width = originalWidth;
        } else if (!height) {
          height = originalHeight;
        }
        
        try {
          // Create initial canvas with original image
          const sourceCanvas = document.createElement('canvas');
          const sourceCtx = sourceCanvas.getContext('2d');
          
          if (!sourceCtx) {
            reject(new Error('Could not get canvas context'));
            return;
          }
          
          sourceCanvas.width = originalWidth;
          sourceCanvas.height = originalHeight;
          
          // Draw original image
          sourceCtx.imageSmoothingEnabled = true;
          sourceCtx.imageSmoothingQuality = 'high';
          sourceCtx.drawImage(img, 0, 0);
          
          // Apply high-quality resizing if needed
          const finalCanvas = resizeImageHighQuality(sourceCanvas, width, height);
          
          const mimeType = targetFormat === 'jpg' || targetFormat === 'jpeg' 
            ? 'image/jpeg' 
            : targetFormat === 'ico'
            ? 'image/x-icon'
            : `image/${targetFormat}`;
          
          const quality = conversionOptions.quality / 100;
          
          finalCanvas.toBlob((blob) => {
            if (blob) {
              resolve({
                blob,
                originalSize: file.size,
                convertedSize: blob.size
              });
            } else {
              reject(new Error('Conversion failed'));
            }
          }, mimeType, quality);
        } catch (error) {
          reject(error);
        }
      };
      
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = URL.createObjectURL(file);
    });
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = Array.from(e.dataTransfer.files).filter(file => 
      file.type.startsWith('image/')
    );
    
    if (files.length > 0) {
      setUploadedImages(prev => [...prev, ...files]);
      toast({
        title: "Images uploaded",
        description: `${files.length} image(s) ready for conversion`,
      });
    }
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setUploadedImages(prev => [...prev, ...files]);
      toast({
        title: "Images uploaded",
        description: `${files.length} image(s) ready for conversion`,
      });
    }
  }, []);

  const convertImages = async () => {
    if (uploadedImages.length === 0) return;
    
    setConverting(true);
    setConversionProgress(0);
    const converted: ConvertedImage[] = [];
    
    try {
      for (let i = 0; i < uploadedImages.length; i++) {
        const file = uploadedImages[i];
        const originalFormat = file.type.split('/')[1] || 'unknown';
        
        const result = await convertImage(file, selectedFormat, options);
        
        const compressionRatio = ((result.originalSize - result.convertedSize) / result.originalSize) * 100;
        
        // Track conversion analytics
        trackImageConversion(originalFormat, selectedFormat, result.originalSize);
        
        converted.push({
          id: Math.random().toString(36).substr(2, 9),
          originalFile: file,
          convertedBlob: result.blob,
          format: selectedFormat,
          originalFormat,
          originalSize: result.originalSize,
          convertedSize: result.convertedSize,
          compressionRatio: Math.max(0, compressionRatio)
        });
        
        setConversionProgress(((i + 1) / uploadedImages.length) * 100);
      }
      
      setConvertedImages(converted);
      const totalSavings = converted.reduce((acc, img) => acc + (img.originalSize - img.convertedSize), 0);
      const totalSize = converted.reduce((acc, img) => acc + img.originalSize, 0);
      
      // Track batch conversion if multiple files
      if (converted.length > 1) {
        trackBatchConversion(converted.length, totalSize);
      }
      
      toast({
        title: "Conversion complete!",
        description: `${converted.length} image(s) converted. Saved ${formatFileSize(totalSavings)}`,
      });
    } catch (error) {
      toast({
        title: "Conversion failed",
        description: "Please try again with valid image files",
        variant: "destructive",
      });
    } finally {
      setConverting(false);
      setConversionProgress(0);
    }
  };

  const downloadImage = (convertedImage: ConvertedImage) => {
    const url = URL.createObjectURL(convertedImage.convertedBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${convertedImage.originalFile.name.split('.')[0]}.${convertedImage.format}`;
    a.click();
    URL.revokeObjectURL(url);
    
    // Track download analytics
    trackDownload(convertedImage.originalFile.name, convertedImage.format);
  };

  const downloadAll = async () => {
    // Track bulk download analytics
    trackEngagement('download_all', 'bulk_download');
    
    // For now, download each file individually
    // In a real app, you might want to create a ZIP file
    convertedImages.forEach((img, index) => {
      setTimeout(() => downloadImage(img), index * 100);
    });
  };

  const clearAll = () => {
    setUploadedImages([]);
    setConvertedImages([]);
    setConversionProgress(0);
  };

  const applyPresetSize = (preset: typeof PRESET_SIZES[0]) => {
    setOptions(prev => ({
      ...prev,
      width: preset.width || undefined,
      height: preset.height || undefined,
    }));
  };

  return (
    <div className="space-y-8">
      {/* Upload Section */}
      <Card className="glass-surface p-8 text-center">
        <div
          className={`upload-zone p-12 ${dragOver ? 'drag-over' : ''}`}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
        >
          <Upload className="w-16 h-16 mx-auto mb-4 text-primary" />
          <h3 className="text-2xl font-semibold mb-2 gradient-text">
            Drop your images here
          </h3>
          <p className="text-muted-glass mb-6">
            Or click to browse files • Supports JPG, PNG, WEBP, GIF, BMP, ICO
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="glass-surface hover:bg-primary/10"
            onClick={() => document.getElementById('file-input')?.click()}
          >
            <ImageIcon className="w-5 h-5 mr-2" />
            Choose Files
          </Button>
          <input
            id="file-input"
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={handleFileInput}
          />
        </div>
      </Card>

      {/* Settings Panel */}
      {uploadedImages.length > 0 && (
        <Card className="glass-surface p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Conversion Settings</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="glass-surface"
              >
                <Settings className="w-4 h-4 mr-2" />
                {showAdvanced ? 'Hide' : 'Show'} Advanced
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={clearAll}
                className="glass-surface"
              >
                Clear All
              </Button>
            </div>
          </div>

          {/* Format Selection */}
          <div className="mb-6">
            <Label className="text-sm font-medium mb-3 block">Output Format</Label>
            <div className="flex flex-wrap gap-3">
              {SUPPORTED_FORMATS.map((format) => (
                <Button
                  key={format}
                  variant={selectedFormat === format ? "default" : "outline"}
                  className={selectedFormat === format ? "bg-gradient-primary" : "glass-surface"}
                  onClick={() => setSelectedFormat(format)}
                >
                  {format.toUpperCase()}
                </Button>
              ))}
            </div>
          </div>

          {/* Advanced Settings */}
          {showAdvanced && (
            <div className="space-y-6 p-6 glass-surface rounded-xl">
              {/* Quality Slider */}
              <div>
                <Label className="text-sm font-medium mb-3 block">
                  Quality: {options.quality}%
                </Label>
                <Slider
                  value={[options.quality]}
                  onValueChange={([value]) => setOptions(prev => ({ ...prev, quality: value }))}
                  max={100}
                  min={10}
                  step={5}
                  className="w-full"
                />
              </div>

              {/* Size Presets */}
              <div>
                <Label className="text-sm font-medium mb-3 block">Size Presets</Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {PRESET_SIZES.map((preset) => (
                    <Button
                      key={preset.name}
                      variant="outline"
                      size="sm"
                      className="glass-surface text-xs"
                      onClick={() => applyPresetSize(preset)}
                    >
                      {preset.name}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Custom Dimensions */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium mb-2 block">Width (px)</Label>
                  <input
                    type="number"
                    placeholder="Auto"
                    value={options.width || ''}
                    onChange={(e) => setOptions(prev => ({ 
                      ...prev, 
                      width: e.target.value ? parseInt(e.target.value) : undefined 
                    }))}
                    className="w-full px-3 py-2 glass-surface rounded-lg border border-glass-border"
                  />
                </div>
                <div>
                  <Label className="text-sm font-medium mb-2 block">Height (px)</Label>
                  <input
                    type="number"
                    placeholder="Auto"
                    value={options.height || ''}
                    onChange={(e) => setOptions(prev => ({ 
                      ...prev, 
                      height: e.target.value ? parseInt(e.target.value) : undefined 
                    }))}
                    className="w-full px-3 py-2 glass-surface rounded-lg border border-glass-border"
                  />
                </div>
              </div>

              {/* Options */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="aspect-ratio"
                    checked={options.maintainAspectRatio}
                    onCheckedChange={(checked) => 
                      setOptions(prev => ({ ...prev, maintainAspectRatio: !!checked }))
                    }
                  />
                  <Label htmlFor="aspect-ratio" className="text-sm">
                    Maintain aspect ratio
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remove-metadata"
                    checked={options.removeMetadata}
                    onCheckedChange={(checked) => 
                      setOptions(prev => ({ ...prev, removeMetadata: !!checked }))
                    }
                  />
                  <Label htmlFor="remove-metadata" className="text-sm">
                    Remove metadata (EXIF data)
                  </Label>
                </div>
              </div>
            </div>
          )}

          {/* Convert Button */}
          <div className="flex items-center justify-between mt-6">
            <p className="text-sm text-muted-glass">
              {uploadedImages.length} image(s) ready
            </p>
            <Button 
              onClick={convertImages}
              disabled={converting}
              className="bg-gradient-primary"
              size="lg"
            >
              <Zap className="w-5 h-5 mr-2" />
              {converting ? 'Converting...' : 'Convert Images'}
            </Button>
          </div>

          {/* Progress Bar */}
          {converting && (
            <div className="mt-4">
              <Progress value={conversionProgress} className="w-full" />
              <p className="text-sm text-muted-glass mt-2 text-center">
                Converting... {Math.round(conversionProgress)}%
              </p>
            </div>
          )}
        </Card>
      )}

      {/* Results */}
      {convertedImages.length > 0 && (
        <Card className="glass-surface p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold flex items-center">
              <Check className="w-5 h-5 mr-2 text-success" />
              Conversion Complete
            </h3>
            <Button onClick={downloadAll} className="bg-gradient-primary">
              <Download className="w-4 h-4 mr-2" />
              Download All ({convertedImages.length})
            </Button>
          </div>
          
          <div className="space-y-4">
            {convertedImages.map((image) => (
              <div key={image.id} className="glass-surface p-4 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <FileImage className="w-4 h-4 mr-2 text-primary" />
                      <p className="font-medium">{image.originalFile.name}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-glass">
                      <div>
                        Format: {image.originalFormat.toUpperCase()} → {image.format.toUpperCase()}
                      </div>
                      <div>
                        Size: {formatFileSize(image.originalSize)} → {formatFileSize(image.convertedSize)}
                      </div>
                      <div className={image.compressionRatio > 0 ? "text-success" : "text-warning"}>
                        {image.compressionRatio > 0 
                          ? `${image.compressionRatio.toFixed(1)}% smaller` 
                          : `${Math.abs(image.compressionRatio).toFixed(1)}% larger`}
                      </div>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => downloadImage(image)}
                    className="glass-surface ml-4"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default ImageConverter;