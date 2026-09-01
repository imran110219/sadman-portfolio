// Analytics utilities for Google Analytics and metrics tracking

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const GA_TRACKING_ID = "G-VSQQQDSJXV";

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track specific portfolio interactions
export const trackViewChange = (viewType: string) => {
  event("view_change", "portfolio", viewType);
};

export const trackProjectView = (projectName: string) => {
  event("project_view", "portfolio", projectName);
};

export const trackContactClick = (platform: string) => {
  event("contact_click", "social", platform);
};

export const trackDownload = (type: string) => {
  event("download", "resume", type);
};
