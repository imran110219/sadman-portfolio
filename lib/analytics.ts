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

// Get analytics data (simplified version for demo)
export const getAnalyticsData = async () => {
  // In a real implementation, you would use Google Analytics Reporting API
  // For now, we'll simulate realistic data
  const baseViews = 8432;
  const baseVisitors = 2156;

  // Add some realistic variance
  const variance = Math.floor(Math.random() * 100) - 50;

  return {
    pageViews: baseViews + variance,
    visitors: baseVisitors + Math.floor(variance / 2),
    sessionsToday: Math.floor(Math.random() * 50) + 25,
    averageSessionDuration: Math.floor(Math.random() * 60) + 120, // seconds
  };
};
