# 🚀 Quick Deploy Guide for Your Hosting Panel

## Your Hosting Panel
**URL:** https://102.68.98.222:2222/evo/login  
**Domain:** dnatest.co.ke

---

## 📦 Files Ready for Deployment

All files are built and ready in the `dist/` folder:

```
dist/
├── index.html              ✅ Main HTML (10.36 KB)
├── .htaccess               ✅ Server config - FIXES MIME TYPE ERROR
├── robots.txt              ✅ SEO file
├── sitemap.xml             ✅ SEO file
└── assets/
    ├── index-DFZ-KbPu.js   ✅ JavaScript (334.30 KB)
    └── index-DW0eqyKY.css  ✅ CSS styles (34.84 KB)
```

**Total Size:** ~380 KB

---

## 🎯 Step-by-Step Deployment

### Option 1: Via Hosting Panel File Manager (Easiest)

#### Step 1: Login to Your Panel
1. Open browser
2. Go to: **https://102.68.98.222:2222/evo/login**
3. Enter your username and password
4. Click **Login**

#### Step 2: Find File Manager
1. Look for **"File Manager"** or **"Files"** icon
2. Click on it
3. Navigate to your domain's root folder:
   - Usually: `public_html`, `www`, or `htdocs`
   - For `dnatest.co.ke` domain

#### Step 3: Backup Existing Files
1. Select all existing files (Ctrl+A)
2. Right-click → **Compress** or **Download**
3. Save backup to your computer

#### Step 4: Delete Old Files
1. Select all files (except your backup)
2. Right-click → **Delete**
3. Confirm deletion

#### Step 5: Upload New Files
Upload these files one by one:

**First, upload root files:**
- ✅ `dist/index.html`
- ✅ `dist/.htaccess` (CRITICAL - fixes MIME type error)
- ✅ `dist/robots.txt`
- ✅ `dist/sitemap.xml`

**Then, create assets folder:**
1. Click **"+ Folder"** or **"New Folder"**
2. Name: `assets`
3. Click **Create**

**Upload into assets folder:**
- ✅ `dist/assets/index-DFZ-KbPu.js`
- ✅ `dist/assets/index-DW0eqyKY.css`

#### Step 6: Set Permissions
- Right-click on files → **Permissions** or **Change Permissions**
- Set files to: **644**
- Set folders to: **755**

#### Step 7: Test Your Website
1. Open: **https://dnatest.co.ke**
2. Press **Ctrl+F5** (hard refresh)
3. Website should load! ✅

---

### Option 2: Via FTP (Recommended for Large Files)

#### Step 1: Get FTP Credentials
1. Login to panel: https://102.68.98.222:2222/evo/login
2. Look for **"FTP Accounts"** or **"FTP Manager"**
3. Note down:
   - **Host:** 102.68.98.222
   - **Username:** [your FTP username]
   - **Password:** [your FTP password]
   - **Port:** 21 (FTP) or 22 (SFTP)

#### Step 2: Download FileZilla
1. Go to: https://filezilla-project.org/
2. Download **FileZilla Client**
3. Install it

#### Step 3: Connect via FileZilla
1. Open FileZilla
2. Enter credentials:
   ```
   Host: 102.68.98.222
   Username: [your-ftp-username]
   Password: [your-ftp-password]
   Port: 21
   ```
3. Click **Quickconnect**

#### Step 4: Upload Files
1. **Left side (Local):** Navigate to `dist/` folder
2. **Right side (Remote):** Navigate to `public_html/` or your domain root
3. **Select all files** from left side
4. **Drag and drop** to right side
5. **Overwrite** when prompted
6. Wait for upload to complete

#### Step 5: Verify Upload
Check that these files are present:
- ✅ index.html
- ✅ .htaccess
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ assets/ folder with JS and CSS files

#### Step 6: Test Website
1. Open: https://dnatest.co.ke
2. Press **Ctrl+F5**
3. Should load correctly! ✅

---

### Option 3: Via SSH (Fastest)

If your panel provides SSH access:

#### Step 1: Get SSH Credentials
1. Login to panel
2. Look for **"SSH Access"** or **"Terminal"**
3. Note down:
   - **Username:** [your SSH username]
   - **Password:** [your SSH password]
   - **Port:** 22 (usually)

#### Step 2: Use Deployment Script

**On Mac/Linux:**
```bash
# Make script executable
chmod +x deploy-to-panel.sh

# Edit the script with your details
nano deploy-to-panel.sh
# Change: REMOTE_USER, REMOTE_PATH

# Run deployment
./deploy-to-panel.sh
```

**On Windows:**
```cmd
# Edit the script with your details
notepad deploy-to-panel.bat
# Change: REMOTE_USER, REMOTE_PATH

# Run deployment
deploy-to-panel.bat
```

#### Step 3: Manual SSH Upload (Alternative)
```bash
# Connect to server
ssh username@102.68.98.222

# Navigate to your website
cd /path/to/public_html

# Backup
tar -czf backup-$(date +%Y%m%d).tar.gz *

# Remove old files
rm -rf * --exclude=backup-*.tar.gz

# Exit SSH
exit

# Upload files from your computer
scp -r dist/* username@102.68.98.222:/path/to/public_html/

# Set permissions
ssh username@102.68.98.222 "cd /path/to/public_html && chmod 644 * && chmod 755 assets && chmod 644 assets/*"
```

---

## ✅ Post-Deployment Checklist

### Immediate Tests
- [ ] Visit https://dnatest.co.ke
- [ ] Homepage loads (no blank screen)
- [ ] Logo displays correctly
- [ ] Navigation menu works
- [ ] All pages accessible

### Browser Console Check
- [ ] Press F12 → Console tab
- [ ] No red errors
- [ ] No MIME type errors

### Network Tab Check
- [ ] Press F12 → Network tab
- [ ] Refresh page
- [ ] Click on JS file
- [ ] Status: 200 OK ✅
- [ ] Content-Type: application/javascript ✅

### Feature Tests
- [ ] Contact form works
- [ ] WhatsApp button works
- [ ] AI chatbot works
- [ ] Mobile responsive
- [ ] All internal links work

---

## 🆘 Troubleshooting

### Problem: Blank Screen

**Solution 1: Check .htaccess**
```bash
# Via SSH
cat .htaccess | head -20
```
Should show MIME type declarations.

**Solution 2: Check File Permissions**
```bash
# Via SSH
ls -la
```
Files should be 644, folders 755.

**Solution 3: Clear All Caches**
- Browser cache (Ctrl+Shift+Delete)
- CDN cache (if using Cloudflare)
- Server cache (via panel)

### Problem: MIME Type Error Still Appears

**Solution:** Contact hosting support
> "Please add 'AddType application/javascript .js' to Apache configuration"

### Problem: 404 Errors

**Solution:** Verify file structure
```bash
# Via SSH
ls -la
ls -la assets/
```
All files should be present.

### Problem: Can't Access Panel

**Solution:** 
- Check URL: https://102.68.98.222:2222/evo/login
- Verify IP address is correct
- Check if port 2222 is open
- Contact hosting provider

---

## 📋 Quick Reference

### Your Details
- **Panel URL:** https://102.68.98.222:2222/evo/login
- **Website:** https://dnatest.co.ke
- **Files Location:** dist/ folder
- **Total Files:** 6 essential files
- **Total Size:** ~380 KB

### Essential Files
1. ✅ index.html
2. ✅ .htaccess (CRITICAL)
3. ✅ robots.txt
4. ✅ sitemap.xml
5. ✅ assets/index-DFZ-KbPu.js
6. ✅ assets/index-DW0eqyKY.css

### File Permissions
- Files: 644
- Folders: 755

---

## 🎯 What to Do Right Now

### If you have File Manager access:
1. Login to panel
2. Go to File Manager
3. Navigate to public_html
4. Upload all 6 files from dist/
5. Test website

### If you have FTP access:
1. Download FileZilla
2. Connect to 102.68.98.222
3. Upload dist/ contents
4. Test website

### If you have SSH access:
1. Use deploy-to-panel.sh (Mac/Linux)
2. Or deploy-to-panel.bat (Windows)
3. Test website

---

## 📞 Need Help?

### Contact Your Hosting Provider
If you can't find:
- File Manager
- FTP credentials
- SSH access

Ask them:
> "How do I upload files to my website? I need FTP or File Manager access."

### Check Documentation
Look in your panel for:
- "Getting Started" guide
- "File Upload" instructions
- "FTP Setup" guide

---

## ✅ Success Indicators

Your deployment is successful when:

- ✅ Website loads at https://dnatest.co.ke
- ✅ No blank screen
- ✅ No console errors
- ✅ All pages work
- ✅ All features functional
- ✅ Mobile responsive
- ✅ Fast loading

---

**Status:** ✅ Ready to Deploy  
**Files:** 6 essential files prepared  
**Size:** ~380 KB  
**MIME Fix:** ✅ Included in .htaccess

**Next Step:** Login to your panel and upload the files! 🚀
