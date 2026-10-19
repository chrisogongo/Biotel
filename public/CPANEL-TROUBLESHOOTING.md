# 🔧 cPanel Deployment Troubleshooting Guide

## Common Issues & Solutions

---

## Issue 1: Blank White Page

### Symptoms
- Website URL loads but shows nothing
- No error messages
- Browser shows loading then blank

### Possible Causes
1. `index.html` not in correct location
2. JavaScript errors preventing render
3. Incorrect file paths

### Solutions

**Solution 1: Check File Location**
```bash
# Correct structure:
public_html/
├── index.html          ← Must be HERE
└── assets/
    └── index-abc.js

# Wrong structure:
public_html/
└── dist/               ← WRONG!
    └── index.html
```

**Fix:** Move `index.html` to `public_html` root

**Solution 2: Check Browser Console**
1. Press `F12` to open DevTools
2. Click "Console" tab
3. Look for red error messages
4. Common errors:
   - `Failed to load resource: 404` → Missing files
   - `Uncaught SyntaxError` → Corrupted JS file
   - `CORS policy` → Cross-origin issue

**Solution 3: Verify File Permissions**
In cPanel File Manager:
1. Right-click `index.html` → Change Permissions
2. Set to: `644` (Owner: Read/Write, Group: Read, Public: Read)
3. Apply to all files

---

## Issue 2: CSS/JavaScript Not Loading (404 Errors)

### Symptoms
- Page loads but looks unstyled
- Console shows 404 errors for CSS/JS files
- Buttons don't work

### Possible Causes
1. `assets/` folder missing
2. Incorrect file paths in `index.html`
3. File permissions wrong

### Solutions

**Solution 1: Verify assets Folder**
```bash
# Check if assets folder exists:
public_html/
├── index.html
└── assets/              ← Must exist
    ├── index-abc.js
    └── index-def.css
```

**Solution 2: Check File Paths**
Open `index.html` and look for:
```html
<script type="module" crossorigin src="/assets/index-abc.js"></script>
<link rel="stylesheet" href="/assets/index-def.css">
```

Paths should start with `/assets/`

**Solution 3: Re-upload Files**
1. Delete existing `assets/` folder
2. Re-upload from your local `dist/assets/`
3. Verify files are present

---

## Issue 3: Images Not Showing

### Symptoms
- Broken image icons
- Console shows 404 for images
- Logo not displaying

### Possible Causes
1. Images are external URLs (from bioteldna.co.ke)
2. Image paths incorrect
3. Images not uploaded

### Solutions

**Solution 1: Check Image Sources**
The website uses images from:
```
https://bioteldna.co.ke/wp-content/uploads/2026/09/bioteldna-logo.png
```

If your domain is different, you need to:
1. Download images from original site
2. Upload to your `public_html/images/` folder
3. Update image paths in the code

**Solution 2: Update Image URLs**
In the source code, find and replace:
```javascript
// Change from:
src="https://bioteldna.co.ke/wp-content/uploads/..."

// To:
src="/images/bioteldna-logo.png"
```

Then rebuild and re-upload.

---

## Issue 4: Links Return 404 Error

### Symptoms
- Clicking navigation links shows 404 page
- Direct URL access fails
- Page refresh breaks routing

### Possible Causes
1. Missing `.htaccess` file
2. Incorrect routing configuration
3. HashRouter not working

### Solutions

**Solution 1: Upload .htaccess File**
1. Create `.htaccess` in `public_html`
2. Add this content:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Solution 2: Verify HashRouter**
The website uses HashRouter, so URLs should be:
```
✅ Correct: https://yourdomain.com/#/services
❌ Wrong: https://yourdomain.com/services
```

If URLs don't have `#`, check `src/App.tsx`:
```typescript
// Should be:
<HashRouter>
  <Routes>
    ...
  </Routes>
</HashRouter>
```

---

## Issue 5: Website Very Slow

### Symptoms
- Page takes 5+ seconds to load
- Images load slowly
- Poor performance on mobile

### Possible Causes
1. No Gzip compression
2. No browser caching
3. Large unoptimized files
4. Server not optimized

### Solutions

**Solution 1: Enable Gzip Compression**
Add to `.htaccess`:
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/json
</IfModule>
```

**Solution 2: Enable Browser Caching**
Add to `.htaccess`:
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
</IfModule>
```

**Solution 3: Check File Sizes**
In cPanel File Manager:
1. Check `assets/` folder size
2. JavaScript should be < 500KB
3. CSS should be < 100KB
4. If larger, rebuild with optimization

---

## Issue 6: SSL/HTTPS Not Working

### Symptoms
- Browser shows "Not Secure" warning
- HTTPS URL doesn't load
- Mixed content warnings

### Possible Causes
1. SSL certificate not installed
2. Not forcing HTTPS
3. Mixed content (HTTP resources on HTTPS page)

### Solutions

**Solution 1: Install SSL Certificate**
In cPanel:
1. Search for "SSL/TLS" or "Let's Encrypt"
2. Select your domain
3. Click "Issue" or "Install"
4. Wait 5-10 minutes

**Solution 2: Force HTTPS**
Add to `.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

**Solution 3: Fix Mixed Content**
1. Open browser DevTools (F12)
2. Check Console for "Mixed Content" warnings
3. Update all HTTP URLs to HTTPS in code
4. Rebuild and re-upload

---

## Issue 7: Contact Form Not Working

### Symptoms
- Form submits but no email received
- Form shows error message
- Form doesn't submit at all

### Possible Causes
1. Form not connected to backend
2. Email configuration issue
3. JavaScript error

### Solutions

**Solution 1: Check Form Implementation**
The current form is frontend-only. To make it work:
1. Connect to email service (EmailJS, Formspree)
2. Or create backend API
3. Or use WhatsApp redirect (already implemented)

**Solution 2: Use WhatsApp Instead**
The website has WhatsApp integration:
```javascript
<a href="https://wa.me/254711371092?text=Hello...">
  Chat on WhatsApp
</a>
```

This works without backend setup.

---

## Issue 8: Mobile Layout Broken

### Symptoms
- Layout looks wrong on mobile
- Elements overflow screen
- Text too small/large
- Menu doesn't work

### Possible Causes
1. Viewport meta tag missing
2. CSS not responsive
3. Touch events not working

### Solutions

**Solution 1: Check Viewport Meta**
In `index.html`, ensure:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Solution 2: Test on Real Device**
1. Open website on mobile phone
2. Check all pages
3. Test navigation menu
4. Verify forms work

**Solution 3: Use Chrome DevTools**
1. Press F12
2. Click device icon (Ctrl+Shift+M)
3. Select mobile device
4. Test responsive layout

---

## Issue 9: Website Shows Old Version After Update

### Symptoms
- Changes not visible
- Old content still showing
- Browser shows cached version

### Possible Causes
1. Browser cache
2. CDN cache
3. Server cache

### Solutions

**Solution 1: Clear Browser Cache**
- Press `Ctrl + Shift + R` (Windows)
- Or `Cmd + Shift + R` (Mac)
- Or clear cache manually

**Solution 2: Add Cache Busting**
In `index.html`, update file names:
```html
<!-- Old -->
<script src="/assets/index-abc123.js"></script>

<!-- New (after rebuild) -->
<script src="/assets/index-xyz789.js"></script>
```

Vite automatically adds hash to filenames.

**Solution 3: Disable Cache Temporarily**
In Chrome DevTools:
1. Press F12
2. Go to Network tab
3. Check "Disable cache"
4. Refresh page

---

## Issue 10: File Upload Fails in cPanel

### Symptoms
- Upload stops at certain percentage
- Error message appears
- Files incomplete

### Possible Causes
1. File size limit
2. Timeout issue
3. Connection problem

### Solutions

**Solution 1: Increase Upload Limits**
In cPanel:
1. Go to "Select PHP Version"
2. Click "Options"
3. Increase:
   - `upload_max_filesize` to 64M
   - `post_max_size` to 64M
   - `max_execution_time` to 300

**Solution 2: Use FTP Instead**
1. Download FileZilla
2. Get FTP credentials from cPanel
3. Connect and upload files
4. More reliable for large files

**Solution 3: Upload in Smaller Batches**
1. Upload `index.html` first
2. Then upload `assets/` folder
3. Then upload other files separately

---

## 🆘 Still Having Issues?

### Step 1: Check Browser Console
1. Press F12
2. Click "Console" tab
3. Look for red errors
4. Note error messages

### Step 2: Check Network Tab
1. Press F12
2. Click "Network" tab
3. Refresh page
4. Look for failed requests (red)
5. Note 404 or 500 errors

### Step 3: Verify File Structure
```bash
public_html/
├── index.html          ← Check exists
├── assets/             ← Check exists
│   ├── *.js           ← Check files present
│   └── *.css          ← Check files present
├── .htaccess          ← Check exists
├── robots.txt         ← Check exists
└── sitemap.xml        ← Check exists
```

### Step 4: Contact Support

**cPanel/Hosting Issues:**
- Contact your hosting provider
- Provide error messages
- Share screenshots

**Website Issues:**
- Email: dna@bioteldna.co.ke
- Phone: +254 711 371092
- WhatsApp: +254 711 371092

---

## 📊 Quick Diagnostic Checklist

Run through this checklist:

- [ ] `index.html` in `public_html` root?
- [ ] `assets/` folder exists with files?
- [ ] `.htaccess` file present?
- [ ] File permissions correct (644)?
- [ ] SSL certificate installed?
- [ ] HTTPS forced?
- [ ] No console errors?
- [ ] No 404 errors in Network tab?
- [ ] Mobile responsive?
- [ ] Forms working?

---

## 🎯 Most Common Solutions

**90% of issues can be fixed by:**

1. ✅ Ensuring `index.html` is in `public_html` root
2. ✅ Verifying `assets/` folder exists
3. ✅ Uploading `.htaccess` file
4. ✅ Clearing browser cache
5. ✅ Checking file permissions

---

*Troubleshooting Guide v1.0*  
*For: Biotel DNA Kenya*  
*Last Updated: 2026*
