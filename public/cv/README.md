# CV Directory

This directory contains the downloadable CV/Resume file.

## Setup Instructions

1. **Add your CV file here**:

   - File name: `Sadman_Sobhan_CV.pdf`
   - Format: PDF (recommended)
   - Maximum size: 2-5 MB (for optimal web performance)

2. **File naming convention**:

   - Current: `Sadman_Sobhan_CV.pdf`
   - You can also maintain versions: `Sadman_Sobhan_CV_2024.pdf`, `Sadman_Sobhan_CV_2025.pdf`

3. **To update the filename**:
   - If you want to use a different filename, update the `fileName` prop in the `DownloadCVButton` component
   - Default location: `components/download-cv-button.tsx`

## Current Implementation

The CV download feature is implemented in:

- **Button Component**: `/components/download-cv-button.tsx`
- **Usage**: `/components/recruiter-view.tsx`

### Features:

- ✅ One-click download
- ✅ Google Analytics tracking
- ✅ Responsive design
- ✅ Theme-aware styling
- ✅ Accessible button

### Analytics Tracking

When a user downloads the CV, it automatically tracks:

- Event: `download`
- Category: `CV`
- Label: `Sadman_Sobhan_CV.pdf`

## Usage in Other Components

To add the download button elsewhere in your portfolio:

```tsx
import { DownloadCVButton } from "@/components/download-cv-button";

// Basic usage
<DownloadCVButton />

// With custom size and styling
<DownloadCVButton size="lg" className="gap-2" />

// With custom filename
<DownloadCVButton fileName="My_Custom_CV.pdf" />

// Disable analytics tracking
<DownloadCVButton trackDownload={false} />

// Custom button text
<DownloadCVButton>Get My Resume</DownloadCVButton>
```

## Next Steps

1. Place your PDF file in this directory: `/public/cv/Sadman_Sobhan_CV.pdf`
2. Test the download functionality
3. Verify analytics tracking (check Google Analytics console)
