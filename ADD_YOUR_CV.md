# Quick Start: Add Your CV

## Step 1: Prepare Your CV

1. Export or save your CV as a PDF file
2. Rename it to: **`Sadman_Sobhan_CV.pdf`**
3. Optimize the file size (keep it under 5MB)

## Step 2: Add to Project

```bash
# Navigate to your project
cd "/Users/imran/Documents/Repo/Cipher Text/sadman-portfolio"

# Copy your CV to the public/cv directory
# Replace 'path/to/your/cv.pdf' with your actual CV location
cp path/to/your/cv.pdf public/cv/Sadman_Sobhan_CV.pdf
```

## Step 3: Test

1. The dev server is already running at http://localhost:3000
2. Refresh your browser
3. Click the "Download Resume" button in:
   - Hero section (homepage)
   - Recruiter view (click "I'm a Recruiter" card)

## Step 4: Verify

- The CV should download automatically
- Check that the downloaded file opens correctly
- Verify the filename is correct

## Alternative: Use Finder

1. Open Finder
2. Navigate to: `/Users/imran/Documents/Repo/Cipher Text/sadman-portfolio/public/cv/`
3. Drag and drop your PDF file here
4. Rename it to: `Sadman_Sobhan_CV.pdf`

## That's it! 🎉

Your portfolio now has a working CV download feature.

---

## Need Help?

See the full documentation in:

- `/CV_FEATURE_SUMMARY.md` - Complete implementation details
- `/public/cv/README.md` - CV management guide

## Want to customize?

Edit `/components/download-cv-button.tsx` to:

- Change the default filename
- Modify button styling
- Adjust analytics tracking
