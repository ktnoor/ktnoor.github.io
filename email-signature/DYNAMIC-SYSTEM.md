# Dynamic Email Signature Asset Management

## How It Works

Instead of hardcoding 2 samples, the system now automatically displays ALL PNG and JPG files in the `email-signature` folder using Jekyll's data system.

## File Structure

```
email-signature/
├── *.png, *.jpg           # Your image files
├── index.html             # Dynamic demo page
└── ...

_data/
└── email-signature.yml    # Data file listing all images
```

## Adding New Images

### Method 1: Automatic Update (Recommended)

1. Add your new PNG/JPG files to the `email-signature/` folder
2. Run the update script:
   ```bash
   ./update-email-signature-data.sh
   ```
3. Edit `_data/email-signature.yml` to improve descriptions if needed
4. Your new images will automatically appear on the demo page

### Method 2: Manual Update

1. Add your image files to `email-signature/` folder
2. Edit `_data/email-signature.yml` manually:
   ```yaml
   images:
     - filename: "your-new-image.png"
       name: "Your New Image"
       description: "Description of the image"
       type: "png"
   ```

## Current Images

The system automatically detects and displays:
- ProfilePicture.png
- deakin-logo.png  
- deakin.jpg
- github.png
- ktnoor.png
- linkedin.png
- orcid.png
- researchgate.png
- scholar.png
- scopus.jpg

## Benefits

✅ **Dynamic**: Automatically shows all available images  
✅ **Scalable**: Easy to add new images  
✅ **Organized**: Clean presentation with descriptions  
✅ **Consistent**: Both Jekyll and direct URLs provided  
✅ **Maintainable**: Simple data file system  

## Demo Page

Visit `/email-signature/index.html` to see all images dynamically listed with:
- Preview thumbnails
- Jekyll template URLs
- Direct URLs for email clients
- File type and descriptions
