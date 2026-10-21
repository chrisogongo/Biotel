# cPanel Deployment Guide - Biotel DNA Website

## 📋 Overview

This guide walks you through deploying the Biotel DNA website to cPanel hosting. The website is built with React/Vite and outputs static files that work perfectly on any standard web hosting.

**Estimated Time:** 15-20 minutes  
**Difficulty:** Easy  
**Requirements:** cPanel hosting account with File Manager access

---

## 🎯 What You'll Need

1. ✅ **cPanel login credentials** (from your hosting provider)
2. ✅ **Built website files** (we'll create these)
3. ✅ **Domain name** pointing to your hosting (e.g., bioteldna.co.ke)
4. ✅ **FTP client** (optional - FileZilla, Cyberduck) OR use cPanel File Manager

---

## 🚀 Step-by-Step Deployment

### Step 1: Build the Production Website

Open your terminal/command prompt and navigate to your project folder:

```bash
# Navigate to your project
cd path/to/biotel-dna-website

# Install dependencies (if not already done)
npm install

# Build the production version
npm run build
```

This creates a `dist/` folder with all your website files. You should see:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
├── robots.txt
├── sitemap.xml
└── [other public files]
```

**✅ Verify the build worked:**
- Open `dist/index.html` in your browser
- The website should load correctly
- All pages should be accessible

---

### Step 2: Access cPanel File Manager

#### Option A: Via cPanel Dashboard

1. **Log in to cPanel**
   - Go to: `https://yourdomain.com/cpanel` or `https://yourhosting.com:2083`
   - Enter your cPanel username and password

2. **Open File Manager**
   - In cPanel, find and click **"File Manager"** (usually under "Files" section)
   - Or search for "File Manager" in the search bar

3. **Navigate to public_html**
   - In the left sidebar, click on **`public_html`**
   - This is your website's root directory
   - **Important:** If your domain is a subdomain (e.g., `bioteldna.co.ke`), navigate to that folder instead

#### Option B: Via FTP (Alternative)

If you prefer FTP:
1. Download **FileZilla** (https://filezilla-project.org/)
2. Get FTP credentials from cPanel:
   - Go to cPanel → "FTP Accounts"
   - Note the server, username, password, and port
3. Connect with FileZilla
4. Navigate to `public_html` folder

---

### Step 3: Backup Existing Files (Important!)

**⚠️ Before uploading, backup any existing files:**

1. In File Manager, select all existing files in `public_html`
2. Right-click → **Compress** → Choose **ZIP Archive**
3. Name it: `backup-[date].zip`
4. Click **Compress**
5. Download the backup to your computer (just in case)

**Why backup?**
- In case something goes wrong
- To restore if needed
- Peace of mind

---

### Step 4: Clean Up public_html

1. **Delete old files** (but keep the backup ZIP)
   - Select all files EXCEPT your backup ZIP
   - Right-click → **Delete**
   - Confirm deletion

2. **Your public_html should now be empty** (except the backup)

---

### Step 5: Upload Website Files

#### Method 1: Upload ZIP File (Recommended for large sites)

1. **Create ZIP of your dist folder:**
   - On your computer, go to the `dist/` folder
   - Select ALL files inside `dist/` (not the folder itself)
   - Right-click → **Send to** → **Compressed (zipped) folder** (Windows)
   - Or right-click → **Compress** (Mac/Linux)
   - Name it: `bioteldna-website.zip`

2. **Upload to cPanel:**
   - In File Manager, make sure you're in `public_html`
   - Click **Upload** button (top toolbar)
   - Select your `bioteldna-website.zip` file
   - Wait for upload to complete (may take 1-2 minutes)

3. **Extract the ZIP:**
   - Right-click on `bioteldna-website.zip`
   - Click **Extract**
   - Confirm extraction to `public_html`
   - Click **Extract Files**

4. **Delete the ZIP file:**
   - Right-click on `bioteldna-website.zip`
   - Click **Delete**

#### Method 2: Upload Files Individually

1. **Upload index.html:**
   - In File Manager, click **Upload**
   - Select `dist/index.html`
   - Wait for upload

2. **Create assets folder:**
   - Click **+ Folder** (top toolbar)
   - Name: `assets`
   - Click **Create New Folder**

3. **Upload CSS and JS files:**
   - Navigate into the `assets` folder
   - Click **Upload**
   - Select all files from `dist/assets/`
   - Upload them

4. **Upload other files:**
   - Go back to `public_html`
   - Upload `robots.txt`, `sitemap.xml`, etc.

---

### Step 6: Verify File Structure

Your `public_html` should now contain:

```
public_html/
├── index.html              ✅ Main HTML file
├── assets/                 ✅ Folder with CSS and JS
│   ├── index-[hash].js
│   └── index-[hash].css
├── robots.txt              ✅ SEO file
├── sitemap.xml             ✅ Sitemap
├── *.md                    ✅ Documentation files (optional)
└── backup-[date].zip       ✅ Your backup (can delete later)
```

**✅ Verify structure:**
- `index.html` should be in the ROOT of `public_html` (not in a subfolder)
- `assets/` folder should be in the ROOT
- All files should be at the top level

---

### Step 7: Test Your Website

1. **Open your browser**
2. **Go to:** `https://yourdomain.com` (e.g., https://bioteldna.co.ke)
3. **Check:**
   - ✅ Homepage loads
   - ✅ Logo displays correctly
   - ✅ Navigation works
   - ✅ All pages accessible
   - ✅ Contact form works
   - ✅ WhatsApp button works
   - ✅ AI chatbot works
   - ✅ Mobile responsive

**🎉 If everything works, your site is live!**

---

## 🔧 Troubleshooting Common Issues

### Issue 1: Website Shows Blank Page

**Cause:** Files not in correct location

**Solution:**
1. Check that `index.html` is in `public_html` (not in a subfolder)
2. Check that `assets/` folder is in `public_html`
3. Verify file paths in `index.html`

### Issue 2: CSS/JS Not Loading (404 Errors)

**Cause:** Incorrect file paths or missing files

**Solution:**
1. Open browser DevTools (F12) → Console tab
2. Check for 404 errors
3. Verify `assets/` folder exists in `public_html`
4. Check that CSS and JS files are inside `assets/`

### Issue 3: Images Not Showing

**Cause:** Images are loaded from external URLs

**Solution:**
- The website uses images from `https://bioteldna.co.ke/wp-content/uploads/...`
- If your domain is different, update image URLs in the code
- Or download images and upload to your server

### Issue 4: Links Not Working (404 on Page Refresh)

**Cause:** SPA routing issue

**Solution:**
- The website uses **HashRouter** (URLs like `/#/services`)
- This should work without server configuration
- If issues persist, add `.htaccess` file (see below)

### Issue 5: Slow Loading

**Cause:** No caching or compression

**Solution:**
- Add `.htaccess` file with caching rules (see next section)
- Enable Gzip compression in cPanel

---

## ⚡ Optimize Performance (Recommended)

### Create .htaccess File

Create a file named `.htaccess` in `public_html` with this content:

```apache
# Enable Gzip Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/json
  AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 1 hour"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>

# Prevent directory browsing
Options -Indexes

# Custom 404 page (optional)
ErrorDocument 404 /index.html
```

**How to create .htaccess:**
1. In cPanel File Manager, go to `public_html`
2. Click **+ File** (top toolbar)
3. Name: `.htaccess` (include the dot!)
4. Click **Create New File**
5. Right-click → **Edit**
6. Paste the code above
7. Click **Save Changes**

---

## 🔒 Enable SSL/HTTPS (Important!)

### Check if SSL is Already Active

1. Visit: `https://yourdomain.com`
2. If it loads with a padlock icon → ✅ SSL is active
3. If you get an error → Follow steps below

### Enable Free SSL (Let's Encrypt)

1. **In cPanel, search for "SSL/TLS"**
2. **Look for "Let's Encrypt" or "AutoSSL"**
3. **Click on it**
4. **Select your domain**
5. **Click "Issue" or "Install"**
6. **Wait 5-10 minutes**
7. **Test:** Visit `https://yourdomain.com`

### Force HTTPS

Add this to your `.htaccess` file (at the top):

```apache
# Force HTTPS
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

---

## 📊 Post-Deployment Checklist

### Immediate Tasks

- [ ] Website loads at `https://yourdomain.com`
- [ ] All pages accessible
- [ ] Logo displays correctly
- [ ] Contact forms work
- [ ] WhatsApp button works
- [ ] AI chatbot functional
- [ ] Mobile responsive
- [ ] SSL certificate active (HTTPS)
- [ ] No broken links
- [ ] Images load correctly

### SEO Tasks

- [ ] Submit sitemap to Google Search Console
  - Go to: https://search.google.com/search-console
  - Add your property
  - Submit: `https://yourdomain.com/sitemap.xml`
  
- [ ] Verify site in Google Search Console
  - Add HTML tag to `<head>` in index.html
  - Or use DNS verification

- [ ] Set up Google Analytics (optional)
  - Go to: https://analytics.google.com
  - Create property
  - Add tracking code to index.html

### Business Tasks

- [ ] Update Google Business Profile with new website URL
- [ ] Test all contact methods (phone, WhatsApp, email)
- [ ] Verify business hours display correctly
- [ ] Check location pages work

---

## 🔄 How to Update Your Website

When you make changes to the code:

### Step 1: Rebuild Locally

```bash
# Make your changes in the code
# Then rebuild
npm run build
```

### Step 2: Upload New Files

**Option A: Upload Entire ZIP**
1. Create new ZIP of `dist/` folder
2. Upload to cPanel
3. Extract (overwrite existing files)
4. Delete ZIP

**Option B: Upload Changed Files Only**
1. Identify changed files in `dist/`
2. Upload only those files to cPanel
3. Overwrite when prompted

### Step 3: Clear Browser Cache

- Press `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Or clear browser cache manually

---

## 📞 Support & Resources

### cPanel Documentation
- **Official Docs:** https://docs.cpanel.net/
- **File Manager:** https://docs.cpanel.net/knowledge-base/file-manager/

### Hosting Provider Support
- Contact your hosting provider for:
  - cPanel login issues
  - SSL certificate problems
  - Domain configuration
  - Server-side issues

### Website Support
- **Email:** dna@bioteldna.co.ke
- **Phone:** +254 711 371092
- **WhatsApp:** +254 711 371092

---

## 🎯 Quick Reference Commands

### Local Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

### File Management
```bash
# Create ZIP (Linux/Mac)
cd dist && zip -r ../website.zip . && cd ..

# Create ZIP (Windows PowerShell)
Compress-Archive -Path dist\* -DestinationPath website.zip
```

---

## ✅ Success Indicators

Your deployment is successful when:

1. ✅ Website loads at your domain
2. ✅ All pages work correctly
3. ✅ No console errors (check F12 → Console)
4. ✅ Mobile responsive
5. ✅ SSL certificate active (HTTPS)
6. ✅ Fast loading (< 3 seconds)
7. ✅ All features functional

---

## 🎉 Congratulations!

Your Biotel DNA website is now live on cPanel hosting!

**Next Steps:**
1. Test thoroughly on different devices
2. Submit to Google Search Console
3. Set up Google Analytics
4. Monitor performance
5. Collect user feedback

---

**Deployment Date:** _______________  
**Domain:** _______________  
**Hosting Provider:** _______________  
**Status:** _______________

---

*Last Updated: 2026*  
*For: Biotel DNA Kenya*  
*Guide Version: 1.0*
