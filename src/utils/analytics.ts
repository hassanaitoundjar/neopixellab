// Google Analytics 4 utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Track page views
export const trackPageView = (page_title: string, page_location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title,
      page_location,
      send_page_view: true
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    });
  }
};

// Track image conversions
export const trackImageConversion = (fromFormat: string, toFormat: string, fileSize: number) => {
  trackEvent('image_conversion', 'converter', `${fromFormat}_to_${toFormat}`, fileSize);
};

// Track file downloads
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('file_download', 'converter', `${fileType}_download`);
};

// Track batch conversions
export const trackBatchConversion = (fileCount: number, totalSize: number) => {
  trackEvent('batch_conversion', 'converter', `${fileCount}_files`, totalSize);
};

// Track user engagement
export const trackEngagement = (action: string, element: string) => {
  trackEvent(action, 'engagement', element);
};

// Track search console related events
export const trackSearchConsoleEvent = (action: string, details?: string) => {
  trackEvent(action, 'search_console', details);
};
