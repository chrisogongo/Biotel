# 🚀 Deploy to Your Hosting Panel

## Your Hosting Panel Details
- **URL:** https://102.68.98.222:2222/evo/login
- **Type:** Custom Hosting Control Panel (Evo Panel)

---

## 📦 What You Need to Deploy

### Built Files Location
All files are ready in the `dist/` folder:

```
dist/
├── index.html              (10.36 KB)
├── .htaccess               (MIME type fix included)
├── robots.txt              (SEO)
├── sitemap.xml             (SEO)
└── assets/
    ├── index-DFZ-KbPu.js   (334.30 KB)
    └── index-DW0eqyKY.css  (34.84 KB)
```

**Total Size:** ~380 KB

---

## 🎯 Deployment Methods

### Method 1: Via Web File Manager (Easiest)

#### Step 1: Login to Your Panel
1. Open: https://102.68.98.222:2222/evo/login
2. Enter your credentials
3. Look for **"File Manager"** or **"Files"** section

#### Step 2: Navigate to Website Root
- Find your domain's root directory (usually `public_html`, `www`, or `htdocs`)
- For domain: `dnatest.co.ke`
- Navigate to the correct folder

#### Step 3: Backup Existing Files
- Select all existing files
- Download them as a backup
- Or compress them into a ZIP file

#### Step 4: Upload New Files
Upload these files one by one:

1. **index.html** - Main HTML file
2. **.htaccess** - Server configuration (CRITICAL for MIME types)
3. **robots.txt** - SEO file
4. **sitemap.xml** - SEO file
5. **Create `assets/` folder**
6. **Upload into assets folder:**
   - `index-DFZ-KbPu.js`
   - `index-DW0eqyKY.css`

#### Step 5: Set Permissions
- Files: 644
- Folders: 755

#### Step 6: Test
- Visit: https://dnatest.co.ke
- Clear browser cache (Ctrl+F5)
- Check if website loads

---

### Method 2: Via FTP/SFTP

#### FTP Connection Details
You'll need to find these in your panel:
- **Host:** 102.68.98.222
- **Port:** 21 (FTP) or 22 (SFTP)
- **Username:** Your FTP username
- **Password:** Your FTP password

#### Using FileZilla (Recommended)

1. **Download FileZilla:** https://filezilla-project.org/

2. **Connect:**
   ```
   Host: 102.68.98.222
   Username: [your-ftp-username]
   Password: [your-ftp-password]
   Port: 21 (or 22 for SFTP)
   ```

3. **Navigate to website root** (public_html or similar)

4. **Upload files:**
   - Drag and drop all files from `dist/` folder
   - Overwrite existing files when prompted

5. **Verify upload:**
   - Check all files are present
   - Verify `assets/` folder exists with JS and CSS files

---

### Method 3: Via SSH (If Available)

If your panel provides SSH access:

```bash
# Connect via SSH
ssh username@102.68.98.222

# Navigate to your website directory
cd /path/to/your/website/public_html

# Backup existing files
tar -czf backup-$(date +%Y%m%d).tar.gz *

# Remove old files (except backup)
rm -rf * --exclude=backup-*.tar.gz

# Upload files via SCP (from your local machine)
# Open new terminal and run:
scp -r dist/* username@102.68.98.222:/path/to/your/website/public_html/

# Set permissions
chmod 644 index.html .htaccess robots.txt sitemap.xml
chmod 755 assets
chmod 644 assets/*

# Exit SSH
exit
```

---

## 📋 File Upload Checklist

### Essential Files (Must Upload)

- [ ] `index.html` - Main HTML file
- [ ] `.htaccess` - Server configuration (FIXES MIME TYPE ERROR)
- [ ] `robots.txt` - SEO directives
- [ ] `sitemap.xml` - XML sitemap
- [ ] `assets/index-DFZ-KbPu.js` - JavaScript bundle
- [ ] `assets/index-DW0eqyKY.css` - CSS styles

### File Structure After Upload

```
public_html/ (or your domain root)
├── index.html
├── .htaccess
├── robots.txt
├── sitemap.xml
└── assets/
    ├── index-DFZ-KbPu.js
    └── index-DW0eqyKY.css
```

---

## 🔧 Critical: .htaccess File

The `.htaccess` file is **CRITICAL** - it fixes the MIME type error that was causing the blank screen.

### What it does:
1. ✅ Tells server how to serve JavaScript files
2. ✅ Sets correct MIME types
3. ✅ Enables CORS for assets
4. ✅ Enables compression
5. ✅ Sets up caching
6. ✅ Handles SPA routing

### If you can't upload .htaccess:
Contact your hosting provider and ask them to add this to Apache config:
```apache
AddType application/javascript .js .mjs
AddType text/css .css
```

---

## ✅ Post-Deployment Checklist

### Immediate Tests
- [ ] Visit https://dnatest.co.ke
- [ ] Homepage loads correctly
- [ ] No blank screen
- [ ] Logo displays
- [ ] Navigation works
- [ ] All pages accessible

### Browser Console Check
- [ ] Press F12 to open DevTools
- [ ] Go to Console tab
- [ ] No red errors
- [ ] No MIME type errors

### Network Tab Check
- [ ] Press F12 → Network tab
- [ ] Refresh page
- [ ] Click on JS file
- [ ] Status: 200 OK
- [ ] Content-Type: application/javascript

### Feature Tests
- [ ] Contact form works
- [ ] WhatsApp button works
- [ ] AI chatbot works
- [ ] Mobile responsive
- [ ] All links work

---

## 🆘 Troubleshooting

### Issue: Still Blank Screen

**Solution 1: Check .htaccess**
```bash
# Via SSH
cat .htaccess | grep "AddType application/javascript"
```
Should show the MIME type declaration.

**Solution 2: Check File Permissions**
```bash
# Via SSH
ls -la
# Files should be 644
# Folders should be 755
```

**Solution 3: Clear Cache**
- Clear browser cache (Ctrl+Shift+Delete)
- Clear CDN cache if using Cloudflare
- Hard refresh (Ctrl+F5)

### Issue: 404 Errors

**Solution:** Check file paths
```bash
# Via SSH
ls -la assets/
# Should show JS and CSS files
```

### Issue: MIME Type Still Wrong

**Solution:** Contact hosting provider
> "Please enable mod_mime and add 'AddType application/javascript .js' to Apache configuration"

---

## 📞 Getting FTP/SSH Credentials

If you don't have FTP/SSH access:

1. **Login to your panel:** https://102.68.98.222:2222/evo/login
2. **Look for:**
   - "FTP Accounts" or "FTP Manager"
   - "SSH Access" or "Terminal"
   - "File Manager"
3. **Create FTP account** if needed
4. **Note down credentials:**
   - Username
   - Password
   - Host (usually your domain or IP)
   - Port (21 for FTP, 22 for SFTP/SSH)

---

## 🎯 Quick Deployment Commands

### If you have SSH access:

```bash
# From your local machine (where the project is)
cd dist

# Upload all files via SCP
scp -r * username@102.68.98.222:/path/to/public_html/

# Or use rsync (faster for updates)
rsync -avz --progress ./ username@102.68.98.222:/path/to/public_html/
```

### If you have FTP access:

Use FileZilla or similar FTP client:
1. Connect to 102.68.98.222
2. Navigate to public_html
3. Upload all files from dist/
4. Overwrite when prompted

---

## 📊 Deployment Summary

| Item | Status |
|------|--------|
| Build | ✅ Complete |
| Files Ready | ✅ 6 files |
| Total Size | ✅ ~380 KB |
| MIME Type Fix | ✅ Included in .htaccess |
| SEO Files | ✅ robots.txt, sitemap.xml |
| Error Boundary | ✅ Added |
| Ready to Deploy | ✅ Yes |

---

## 🚀 Next Steps

1. **Login to your panel:** https://102.68.98.222:2222/evo/login
2. **Choose deployment method:**
   - File Manager (easiest)
   - FTP/SFTP (recommended)
   - SSH (fastest)
3. **Upload all files** from dist/ folder
4. **Verify .htaccess** is uploaded
5. **Test website:** https://dnatest.co.ke
6. **Clear browser cache**
7. **Verify all features work**

---

## 📞 Support

If you encounter issues:

1. **Check error logs** in your panel
2. **Verify file permissions** (644 for files, 755 for folders)
3. **Confirm .htaccess** is present and correct
4. **Clear all caches** (browser, CDN, server)
5. **Contact hosting support** if MIME type issues persist

**Your Website:** https://dnatest.co.ke  
**Hosting Panel:** https://102.68.98.222:2222/evo/login

---

**Status:** ✅ Ready to Deploy  
**Last Updated:** 2026  
**Build:** Successful  
**Files:** 6 essential files ready
