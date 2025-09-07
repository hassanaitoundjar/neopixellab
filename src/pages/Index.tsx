import React from 'react';
import { ArrowRight, Zap, Shield, Download, Sparkles, Image, Sliders, FileDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ImageConverter from '@/components/ImageConverter';
import SEOHead from '@/components/SEOHead';

const Index = () => {
  const scrollToConverter = () => {
    document.getElementById('converter')?.scrollIntoView({ behavior: 'smooth' });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Neo Pixel Lab",
    "url": "https://neopixellab.com",
    "description": "Free online image converter supporting JPG, PNG, WEBP, GIF, BMP, ICO, and TIFF formats. Convert, resize, and optimize images with advanced features.",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1247"
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Neo Pixel Lab - Free Online Image Converter | JPG, PNG, WEBP, GIF"
        description="Convert images between 7+ formats instantly with Neo Pixel Lab. Free, fast, and 100% private image converter with advanced resizing, compression, and batch processing. No signup required."
        keywords="image converter, photo converter, JPG to PNG, PNG to WEBP, WEBP converter, GIF converter, BMP converter, ICO converter, TIFF converter, image optimization, resize images, compress images, batch image converter, free image tools, online image editor"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass-surface mb-8 hover:scale-105 smooth-transition">
            <Sparkles className="w-5 h-5 mr-2 text-primary" />
            <span className="text-sm font-medium">Free • Fast • Private</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Convert Images
            <br />
            <span className="gradient-text">Like Magic</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-glass mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your images between multiple formats with our lightning-fast, 
            privacy-first converter. Advanced options included, no signup required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-lg px-10 py-6 shadow-glass hover:scale-105 smooth-transition"
              onClick={scrollToConverter}
            >
              Start Converting
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="glass-surface text-lg px-10 py-6 hover:scale-105 smooth-transition"
            >
              View Features
              <Sparkles className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose Our <span className="gradient-text">Converter</span>?
          </h2>
          <p className="text-xl text-muted-glass max-w-3xl mx-auto">
            Professional-grade image conversion with modern features and uncompromising privacy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="glass-surface p-8 text-center group hover:scale-105 smooth-transition cursor-pointer">
            <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 smooth-transition">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
            <p className="text-muted-glass leading-relaxed">
              Client-side processing means instant conversions without uploading to servers. 
              Convert hundreds of images in seconds.
            </p>
          </Card>
          
          <Card className="glass-surface p-8 text-center group hover:scale-105 smooth-transition cursor-pointer">
            <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 smooth-transition">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">100% Private</h3>
            <p className="text-muted-glass leading-relaxed">
              Your images never leave your device. Complete privacy and security guaranteed. 
              No data collection, no tracking.
            </p>
          </Card>
          
          <Card className="glass-surface p-8 text-center group hover:scale-105 smooth-transition cursor-pointer">
            <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 smooth-transition">
              <Image className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Multiple Formats</h3>
            <p className="text-muted-glass leading-relaxed">
              Support for JPG, PNG, WEBP, GIF, BMP, ICO and more. 
              Convert between any formats with ease.
            </p>
          </Card>

          <Card className="glass-surface p-8 text-center group hover:scale-105 smooth-transition cursor-pointer">
            <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 smooth-transition">
              <Sliders className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Advanced Options</h3>
            <p className="text-muted-glass leading-relaxed">
              Resize, compress, adjust quality, remove metadata. 
              Professional tools for every need.
            </p>
          </Card>
          
          <Card className="glass-surface p-8 text-center group hover:scale-105 smooth-transition cursor-pointer">
            <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 smooth-transition">
              <Download className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Batch Processing</h3>
            <p className="text-muted-glass leading-relaxed">
              Convert multiple images at once and download them individually 
              or as a bundle. Bulk operations made simple.
            </p>
          </Card>

          <Card className="glass-surface p-8 text-center group hover:scale-105 smooth-transition cursor-pointer">
            <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 smooth-transition">
              <FileDown className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Size Optimization</h3>
            <p className="text-muted-glass leading-relaxed">
              Automatically optimize file sizes while maintaining quality. 
              Perfect for web and mobile applications.
            </p>
          </Card>
        </div>
      </section>

      {/* Supported Formats Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="gradient-text">Supported Formats</span>
          </h2>
          <p className="text-xl text-muted-glass mb-12">
            Convert between all popular image formats with professional quality results.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {['JPG', 'PNG', 'WEBP', 'GIF', 'BMP', 'ICO', 'TIFF'].map((format, index) => (
              <div 
                key={format} 
                className="glass-surface p-6 rounded-2xl hover:scale-105 smooth-transition cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Image className="w-6 h-6 text-white" />
                </div>
                <p className="font-semibold text-sm">{format}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Converter Tool Section */}
      <section id="converter" className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Start Converting</span>
          </h2>
          <p className="text-xl text-muted-glass max-w-3xl mx-auto">
            Drag & drop your images or click to browse. Convert between formats instantly 
            with our advanced conversion engine.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <ImageConverter />
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-20">
        <Card className="glass-surface p-12 text-center">
          <h2 className="text-3xl font-bold mb-8 gradient-text">
            Trusted by Creators Worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2 gradient-text">100%</div>
              <p className="text-muted-glass">Client-Side Processing</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 gradient-text">7+</div>
              <p className="text-muted-glass">Supported Formats</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 gradient-text">∞</div>
              <p className="text-muted-glass">Free Conversions</p>
            </div>
          </div>
        </Card>
      </section>

    </div>
  );
};

export default Index;