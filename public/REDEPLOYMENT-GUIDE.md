# 🚀 Redeploy Biotel DNA Website from GitHub to cPanel

## Quick Redeployment Guide

This guide will help you redeploy the latest version of the Biotel DNA website from GitHub to your cPanel hosting.

---

## 📋 Prerequisites

Before starting, ensure you have:
- ✅ GitHub repository access
- ✅ cPanel login credentials
- ✅ SSH/FTP access to your server (optional but recommended)
- ✅ Git installed on your local machine
- ✅ Node.js and npm installed

---

## 🔄 Step-by-Step Redeployment Process

### Step 1: Pull Latest Code from GitHub

**Option A: Using Git (Recommended)**

```bash
# Navigate to your project directory
cd /path/to/biotel-dna-website

# Pull latest changes from GitHub
git pull origin main

# If you have local changes, you might need to:
# git stash          # Save local changes
# git pull origin main
# git stash pop      # Restore local changes
```

**Option B: Download from GitHub**

1. Go to your GitHub repository: `https://github.com/yourusername/biotel-dna-website`
2. Click the green "Code" button
3. Select "Download ZIP"
4. Extract the ZIP file to your project directory

---

### Step 2: Install Dependencies

```bash
# Install all required packages
npm install

# This will install all dependencies from package.json
# If you encounter errors, try:
# npm install --legacy-peer-deps
```

---

### Step 3: Build the Project

```bash
# Build the production version
npm run build

# This creates the dist/ folder with optimized files
# You should see output like:
# ✓ built in X.XXs
```

**Verify the build:**
```bash
# Check if dist/ folder exists
ls -la dist/

# You should see:
# - index.html
# - assets/
#   - index-*.js
#   - index-*.css
# - .htaccess
# - robots.txt
# - sitemap.xml
```

---

### Step 4: Create Deployment Package

**Option A: Create ZIP Archive (Easiest)**

```bash
# Navigate to the dist folder
cd dist

# Create ZIP file (Linux/Mac)
zip -r ../biotel-dna-deployment.zip .

# Or on Windows PowerShell
Compress-Archive -Path * -DestinationPath ../biotel-dna-deployment.zip

# Go back to project root
cd ..
```

**Option B: Use Tar (Linux/Mac)**

```bash
# Create tar.gz archive
tar -czf biotel-dna-deployment.tar.gz -C dist .
```

---

### Step 5: Backup Current cPanel Files

**⚠️ IMPORTANT: Always backup before deploying!**

**Option A: Using cPanel File Manager**

1. Login to cPanel
2. Go to "File Manager"
3. Navigate to `public_html` (or your domain's root directory)
4. Select all files and folders
5. Right-click → "Compress"
6. Choose "ZIP Archive"
7. Name it: `backup-YYYY-MM-DD.zip`
8. Click "Compress"
9. Download the backup to your local machine

**Option B: Using SSH/FTP**

```bash
# Connect to your server via SSH
ssh username@yourdomain.com

# Navigate to public_html
cd ~/public_html

# Create backup
tar -czf ~/backup-$(date +%Y-%m-%d).tar.gz .

# Download backup to local machine
scp username@yourdomain.com:~/backup-*.tar.gz /local/backup/path/
```

---

### Step 6: Upload to cPanel

**Option A: Using cPanel File Manager (Easiest)**

1. Login to cPanel
2. Go to "File Manager"
3. Navigate to `public_html` (or your domain's root directory)
4. **Delete old files** (except backup):
   - Select all files and folders
   - Right-click → "Delete"
   - Confirm deletion
5. Click "Upload" button
6. Select your `biotel-dna-deployment.zip` file
7. Wait for upload to complete
8. Right-click the ZIP file → "Extract"
9. Extract to current directory
10. Delete the ZIP file after extraction

**Option B: Using FTP/SFTP**

```bash
# Using FileZilla or similar FTP client

# Connect to your server:
# Host: yourdomain.com
# Username: your FTP username
# Password: your FTP password
# Port: 21 (FTP) or 22 (SFTP)

# Navigate to public_html on remote server
# Delete old files (keep backup)
# Upload all files from dist/ folder
```

**Option C: Using SSH/SCP**

```bash
# Upload ZIP file to server
scp biotel-dna-deployment.zip username@yourdomain.com:~/public_html/

# Connect to server
ssh username@yourdomain.com

# Navigate to public_html
cd ~/public_html

# Remove old files (keep backup)
rm -rf * --exclude=backup-*.zip

# Extract new files
unzip biotel-dna-deployment.zip

# Remove ZIP file
rm biotel-dna-deployment.zip

# Set correct permissions
chmod 644 index.html
chmod 644 .htaccess
chmod 644 robots.txt
chmod 644 sitemap.xml
chmod -R 755 assets/
```

---

### Step 7: Verify Deployment

**Check File Structure:**

```bash
# Your public_html should contain:
public_html/
├── index.html
├── .htaccess
├── robots.txt
├── sitemap.xml
└── assets/
    ├── index-*.js
    └── index-*.css
```

**Test the Website:**

1. Open your browser
2. Visit: `https://yourdomain.com`
3. Check:
   - ✅ Homepage loads correctly
   - ✅ Logo displays properly
   - ✅ Navigation works
   - ✅ All pages accessible
   - ✅ Contact form works
   - ✅ WhatsApp button works
   - ✅ AI chatbot functional
   - ✅ Mobile responsive

**Check Browser Console:**

1. Press F12 to open Developer Tools
2. Go to "Console" tab
3. Look for any errors (should be none)
4. Go to "Network" tab
5. Refresh page
6. Check all resources load successfully (no 404 errors)

---

### Step 8: Clear Cache

**Browser Cache:**
- Press `Ctrl + Shift + Delete` (Windows) or `Cmd + Shift + Delete` (Mac)
- Select "Cached images and files"
- Click "Clear data"

**cPanel Cache (if applicable):**
- Some hosting providers have server-side caching
- Check cPanel for "Cache Manager" or similar
- Clear all caches

**Cloudflare (if using):**
- Login to Cloudflare dashboard
- Go to "Caching" → "Configuration"
- Click "Purge Everything"

---

## 🔧 Troubleshooting

### Issue: Website Shows Old Version

**Solution:**
```bash
# Hard refresh browser
Ctrl + F5 (Windows) or Cmd + Shift + R (Mac)

# Or clear browser cache completely
# Then check if files were actually uploaded
```

### Issue: 404 Errors on Pages

**Solution:**
1. Check if `.htaccess` file exists in public_html
2. Verify file permissions:
   ```bash
   chmod 644 .htaccess
   ```
3. Check .htaccess content is correct

### Issue: CSS/JS Not Loading

**Solution:**
1. Check if `assets/` folder exists
2. Verify file paths in index.html
3. Check file permissions:
   ```bash
   chmod -R 755 assets/
   chmod 644 assets/*
   ```

### Issue: Build Errors

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

---

## 📊 Post-Deployment Checklist

- [ ] Website loads at your domain
- [ ] All pages accessible
- [ ] No console errors
- [ ] Images load correctly
- [ ] Forms work properly
- [ ] WhatsApp integration works
- [ ] AI chatbot functional
- [ ] Mobile responsive
- [ ] SSL certificate active (HTTPS)
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] robots.txt accessible at `/robots.txt`

---

## 🔄 Automated Deployment (Advanced)

If you want to automate this process, consider:

**Option 1: GitHub Actions + cPanel**
```yaml
# .github/workflows/deploy.yml
name: Deploy to cPanel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to cPanel
        uses: SamKirkland/FTP-Deploy-Action@v4.3.4
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./dist/
          server-dir: ./public_html/
```

**Option 2: Use cPanel Git Deployment**
1. Enable Git in cPanel
2. Connect your GitHub repository
3. Set up automatic deployment on push

---

## 📞 Support

If you encounter issues:

1. **Check cPanel error logs:**
   - cPanel → "Metrics" → "Errors"

2. **Check file permissions:**
   - Files should be 644
   - Folders should be 755

3. **Contact hosting support:**
   - Provide error messages
   - Share what you've tried

---

## ✅ Success Indicators

Your redeployment is successful when:

- ✅ Latest code is live
- ✅ All features working
- ✅ No errors in console
- ✅ Fast loading times
- ✅ All pages accessible
- ✅ Mobile responsive
- ✅ SEO elements intact

---

## 🎯 Quick Command Reference

```bash
# Complete redeployment workflow
git pull origin main
npm install
npm run build
cd dist
zip -r ../deployment.zip .
cd ..
# Upload deployment.zip to cPanel
# Extract in public_html
# Test website
```

---

**Last Updated:** 2026  
**For:** Biotel DNA Kenya  
**Version:** Latest from GitHub  
**Status:** Ready for Deployment
