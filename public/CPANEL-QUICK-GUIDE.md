# 🚀 cPanel Deployment - Quick Visual Guide

## 📦 What You Have

```
Your Computer                    cPanel Hosting
┌─────────────────┐              ┌─────────────────┐
│ biotel-dna-     │              │ public_html/    │
│ website/        │   BUILD      │                 │
│                 │ ──────────>  │ (empty)         │
│ ├── src/        │              │                 │
│ ├── dist/       │              │                 │
│ └── package.json│              │                 │
└─────────────────┘              └─────────────────┘
```

---

## 🎯 5-Step Process

### Step 1: Build Your Website
```bash
npm run build
```
**Result:** Creates `dist/` folder with your website

---

### Step 2: Create ZIP File
```
dist/ folder
├── index.html
├── assets/
│   ├── index-abc123.js
│   └── index-def456.css
├── robots.txt
└── sitemap.xml

↓ Compress to ZIP ↓

bioteldna-website.zip
```

---

### Step 3: Login to cPanel
```
https://yourdomain.com/cpanel
         ↓
    Enter credentials
         ↓
    Click "File Manager"
         ↓
    Navigate to "public_html"
```

---

### Step 4: Upload & Extract
```
public_html/
    ↓
Click "Upload" button
    ↓
Select bioteldna-website.zip
    ↓
Wait for upload
    ↓
Right-click ZIP → Extract
    ↓
Delete ZIP file
```

---

### Step 5: Test Your Site
```
Open browser
    ↓
Go to: https://yourdomain.com
    ↓
Check:
✅ Homepage loads
✅ Logo shows
✅ Pages work
✅ Forms work
✅ Mobile works
```

---

## 📁 Final File Structure

```
public_html/
│
├── index.html              ← Main file (MUST be here)
│
├── assets/                 ← CSS & JavaScript
│   ├── index-abc123.js
│   └── index-def456.css
│
├── .htaccess               ← Server configuration
│
├── robots.txt              ← SEO file
│
├── sitemap.xml             ← Sitemap
│
└── backup-old.zip          ← Your backup (optional)
```

---

## ⚠️ Common Mistakes to Avoid

### ❌ WRONG: Files in subfolder
```
public_html/
└── dist/              ← WRONG!
    └── index.html
```

### ✅ CORRECT: Files in root
```
public_html/
└── index.html         ← CORRECT!
```

---

## 🔧 Quick Fixes

### Problem: Blank page
**Fix:** Check `index.html` is in `public_html` root

### Problem: No styles
**Fix:** Check `assets/` folder exists with CSS/JS files

### Problem: Links don't work
**Fix:** Upload `.htaccess` file to `public_html`

### Problem: Slow loading
**Fix:** Enable Gzip in `.htaccess` (already included)

---

## 📋 Pre-Upload Checklist

- [ ] Run `npm run build` successfully
- [ ] Test `dist/index.html` locally
- [ ] Create ZIP of dist contents
- [ ] Backup existing files in cPanel
- [ ] Have cPanel login ready
- [ ] Know your domain name

---

## 🎉 Success Checklist

After upload, verify:

- [ ] Website loads at your domain
- [ ] Logo displays correctly
- [ ] All navigation works
- [ ] Contact form works
- [ ] WhatsApp button works
- [ ] AI chatbot works
- [ ] Mobile responsive
- [ ] HTTPS working (if SSL enabled)

---

## 🆘 Need Help?

### cPanel Issues
- Contact your hosting provider
- Check cPanel documentation: https://docs.cpanel.net/

### Website Issues
- Check browser console (F12)
- Verify file structure
- Re-upload files if needed

### Contact Support
- Email: dna@bioteldna.co.ke
- Phone: +254 711 371092
- WhatsApp: +254 711 371092

---

## 📊 Time Estimate

| Task | Time |
|------|------|
| Build website | 1 minute |
| Create ZIP | 1 minute |
| Login to cPanel | 1 minute |
| Upload files | 2-5 minutes |
| Extract ZIP | 1 minute |
| Test website | 5 minutes |
| **TOTAL** | **~10-15 minutes** |

---

## 🎯 That's It!

Your website is now live on cPanel! 🚀

**Next Steps:**
1. Submit sitemap to Google Search Console
2. Set up Google Analytics
3. Test on mobile devices
4. Share your new website!

---

*Quick Reference Guide v1.0*  
*For: Biotel DNA Kenya*  
*Last Updated: 2026*
