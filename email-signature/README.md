# Email Signature Assets

This folder contains email signature assets that can be accessed via direct hyperlinks.

## Usage

Files in this folder can be accessed using the following URL patterns:

**For Jekyll templates:**
```liquid
{% include base_path %}
{{ base_path }}/email-signature/filename
```

**For direct access:**
`https://ktnoor.github.io/email-signature/filename`

### Examples

- `deakin-logo.png` → `{{ base_path }}/email-signature/deakin-logo.png`
- `profile-signature.png` → `{{ base_path }}/email-signature/profile-signature.png`
- `deakin.jpg` → `{{ base_path }}/email-signature/deakin.jpg`

## Available Files

- `deakin-logo.png` - Deakin University logo (PNG format)
- `profile-signature.png` - Profile picture for email signature
- `deakin.jpg` - Deakin University logo (JPG format)
- `index.html` - Demo page showing how to use these assets
- `jekyll-template.html` - Jekyll template with proper `base_path` usage

## Supported File Types

- Images: `.jpg`, `.jpeg`, `.png`, `.gif`, `.svg`
- Documents: `.pdf`
- Other assets as needed

## How to Add New Files

1. Place your files directly in this folder (`/email-signature/`)
2. For Jekyll templates: Use `{% include base_path %}{{ base_path }}/email-signature/filename`
3. For email clients: Use direct URL `https://ktnoor.github.io/email-signature/filename`

## Demo

Visit `/email-signature/index.html` for a live demonstration of how to use these assets in email signatures.

Place your email signature files directly in this folder for easy access.
