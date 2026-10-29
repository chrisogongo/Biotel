# 🔧 Fix: MIME Type Error on cPanel

## ❌ Error Message
```
Failed to load module script: Expected a JavaScript-or-Wasm module script 
but the server responded with a MIME type of "". 
Strict MIME type checking is enforced for module scripts per HTML spec.
```

## ✅ Root Cause
cPanel/Apache server doesn't know how to serve `.js` files with the correct MIME type (`application/javascript`). This is a common issue on shared hosting.

## 🛠️ Solution Applied

### 1. Updated `.htaccess` with MIME Type Declarations
The new `.htaccess` file now includes:
```apache
<IfModule mod_mime.c>
  AddType application/javascript js mjs
  AddType text/css css
  AddType application/json json
  # ... more MIME types
</IfModule>
```

### 2. Removed `crossorigin` Attribute
The script tag no longer has `crossorigin` which can cause CORS issues:
```html
<!-- Before (broken) -->
<script type="module" crossorigin src="./assets/index.js"></script>

<!-- After (fixed) -->
<script type="module" src="./assets/index.js"></script>
```

### 3. Added CORS Headers for Assets
```apache
<FilesMatch "\.(js|css|mjs)$">
  Header set Access-Control-Allow-Origin "*"
</FilesMatch>
```

---

## 🚀 How to Apply the Fix

### Step 1: Download the Updated Files

You need to replace these files in your cPanel `public_html`:

1. **`.htaccess`** - The most important fix
2. **`index.html`** - Updated with fixed script tags
3. **`assets/`** folder - The JS and CSS files

### Step 2: Upload via cPanel File Manager

1. Login to cPanel
2. Go to **File Manager** → `public_html`
3. **Backup** current files first!
4. Replace these files:
   - Upload new `.htaccess` (overwrite existing)
   - Upload new `index.html` (overwrite existing)
   - Replace contents of `assets/` folder

### Step 3: Clear Cache

**Browser Cache:**
- Press `Ctrl + Shift + Delete` (Windows) or `Cmd + Shift + Delete` (Mac)
- Select "Cached images and files"
- Click "Clear data"

**OR Hard Refresh:**
- Windows: `Ctrl + F5`
- Mac: `Cmd + Shift + R`

### Step 4: Test

Visit: https://dnatest.co.ke

The website should now load correctly!

---

## 🔍 Verify the Fix

### Check 1: Verify MIME Type
Open browser DevTools (F12) → Network tab → Refresh page → Click on the JS file

Look for:
- **Status:** 200 OK ✅
- **Content-Type:** `application/javascript` ✅

If you see:
- **Content-Type:** (empty) ❌ → MIME type still not working
- **Status:** 403 Forbidden ❌ → File permissions issue
- **Status:** 404 Not Found ❌ → File path issue

### Check 2: Verify Script Tag
Right-click → View Page Source → Look for:

```html
<!-- Should see this (no crossorigin) -->
<script type="module" src="./assets/index-DFZ-KbPu.js"></script>
```

### Check 3: Check Console
F12 → Console tab → Should be no errors

---

## 🆘 If Still Not Working

### Issue: MIME Type Still Empty

**Solution:** Contact your hosting provider and ask them to:
1. Enable `mod_mime` Apache module
2. Add MIME types for `.js` files in Apache config
3. Or add this to your main Apache config:
```apache
AddType application/javascript .js
```

### Issue: 403 Forbidden Error

**Solution:** Fix file permissions via SSH:
```bash
ssh username@dnatest.co.ke
cd ~/public_html
chmod 644 index.html .htaccess
chmod 644 assets/*
chmod 755 assets/
```

### Issue: 404 Not Found

**Solution:** Verify file structure:
```bash
ssh username@dnatest.co.ke
cd ~/public_html
ls -la
ls -la assets/
```

Should show:
```
public_html/
├── index.html
├── .htaccess
├── robots.txt
├── sitemap.xml
└── assets/
    ├── index-DFZ-KbPu.js
    └── index-DW0eqyKY.css
```

### Issue: Still Blank Screen

**Solution:** Check error logs:
```bash
# In cPanel: Metrics → Errors
# Or via SSH:
tail -f /home/username/logs/error.log
```

---

## 📋 Quick Command Sequence to Fix

### Via SSH (Fastest Method)

```bash
# Connect to server
ssh username@dnatest.co.ke

# Navigate to public_html
cd ~/public_html

# Backup current .htaccess
cp .htaccess .htaccess.backup.$(date +%Y%m%d)

# Download new .htaccess (if you have it hosted somewhere)
# OR create it manually:
nano .htaccess
# Paste the new .htaccess content
# Save: Ctrl+O, Enter, Ctrl+X

# Fix permissions
chmod 644 .htaccess index.html
chmod 644 assets/*
chmod 755 assets/

# Exit
exit
```

### Via cPanel File Manager (Easiest)

1. Login to cPanel
2. File Manager → `public_html`
3. Right-click `.htaccess` → Edit
4. Replace entire content with new `.htaccess`
5. Save changes
6. Clear browser cache
7. Test website

---

## ✅ Success Indicators

Your fix is working when:

- ✅ Website loads without blank screen
- ✅ No MIME type errors in console
- ✅ Network tab shows `application/javascript` for JS files
- ✅ All pages navigate correctly
- ✅ AI chatbot works
- ✅ WhatsApp button works
- ✅ Mobile responsive

---

## 📞 Support

If the issue persists after applying these fixes:

1. **Check with hosting provider** - They may need to enable MIME types server-wide
2. **Check Apache error logs** - In cPanel: Metrics → Errors
3. **Verify file permissions** - Files should be 644, folders 755
4. **Clear CDN cache** - If using Cloudflare or similar

**Contact:**
- Email: dna@bioteldna.co.ke
- Phone: +254 711 371092
- WhatsApp: +254 711 371092

---

## 🎯 Summary

**Problem:** cPanel not serving JS files with correct MIME type  
**Solution:** Updated `.htaccess` with MIME type declarations + removed `crossorigin` attribute  
**Status:** ✅ Fixed and ready to deploy  

**Action Required:** Upload new `.htaccess` and `index.html` to cPanel `public_html`

---

*Last Updated: 2026*  
*For: Biotel DNA Kenya (dnatest.co.ke)*  
*Issue: MIME type error on cPanel*  
*Status: ✅ Resolved*
