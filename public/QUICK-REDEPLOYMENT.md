# 🚀 Quick Redeployment Guide - GitHub to cPanel

## ⚡ Fast Track Deployment (5 Minutes)

### For Users with Git Access

```bash
# 1. Pull latest code
git pull origin main

# 2. Install & build
npm install
npm run build

# 3. Create deployment ZIP
cd dist && zip -r ../deploy.zip . && cd ..

# 4. Upload to cPanel public_html and extract
```

### For Windows Users

**Option 1: Use the automated script**
```cmd
deploy.bat
```

**Option 2: Manual steps**
```cmd
git pull origin main
npm install
npm run build
cd dist
powershell Compress-Archive -Path * -DestinationPath ..\deploy.zip
```

### For Mac/Linux Users

**Option 1: Use the automated script**
```bash
chmod +x deploy.sh
./deploy.sh
```

**Option 2: Manual steps**
```bash
git pull origin main
npm install
npm run build
cd dist && zip -r ../deploy.zip . && cd ..
```

---

## 📋 Complete Redeployment Checklist

### Before Deployment
- [ ] Backup current cPanel files
- [ ] Pull latest code from GitHub
- [ ] Build project successfully
- [ ] Create deployment ZIP

### During Deployment
- [ ] Login to cPanel
- [ ] Navigate to public_html
- [ ] Delete old files (keep backup)
- [ ] Upload deployment ZIP
- [ ] Extract ZIP file
- [ ] Delete ZIP after extraction

### After Deployment
- [ ] Test homepage loads
- [ ] Check all pages work
- [ ] Verify contact forms
- [ ] Test WhatsApp button
- [ ] Check AI chatbot
- [ ] Verify mobile responsive
- [ ] Clear browser cache
- [ ] Check for console errors

---

## 🎯 Deployment Methods

### Method 1: cPanel File Manager (Easiest)

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Create ZIP:**
   ```bash
   cd dist && zip -r ../deploy.zip . && cd ..
   ```

3. **Upload to cPanel:**
   - Login to cPanel
   - File Manager → public_html
   - Upload `deploy.zip`
   - Right-click → Extract
   - Delete ZIP file

4. **Test website**

### Method 2: FTP/SFTP (Faster for Large Files)

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Connect via FTP:**
   - Host: yourdomain.com
   - Username: your FTP username
   - Password: your FTP password
   - Port: 21 (FTP) or 22 (SFTP)

3. **Upload files:**
   - Navigate to public_html
   - Delete old files
   - Upload all files from dist/ folder

4. **Test website**

### Method 3: SSH/SCP (Most Efficient)

```bash
# Build locally
npm run build

# Create tar archive
tar -czf deploy.tar.gz -C dist .

# Upload to server
scp deploy.tar.gz username@yourdomain.com:~/public_html/

# Connect to server
ssh username@yourdomain.com

# Extract files
cd ~/public_html
rm -rf * --exclude=deploy.tar.gz
tar -xzf deploy.tar.gz
rm deploy.tar.gz

# Set permissions
chmod 644 index.html .htaccess robots.txt sitemap.xml
chmod -R 755 assets/
```

---

## 🔧 Troubleshooting Common Issues

### Issue: Old Version Still Showing

**Solution:**
```bash
# Hard refresh browser
Ctrl + F5 (Windows) or Cmd + Shift + R (Mac)

# Clear browser cache
# Or use incognito/private mode to test
```

### Issue: 404 Errors

**Solution:**
1. Check .htaccess exists in public_html
2. Verify file permissions:
   ```bash
   chmod 644 .htaccess
   ```
3. Check .htaccess content

### Issue: CSS/JS Not Loading

**Solution:**
1. Check assets/ folder exists
2. Verify permissions:
   ```bash
   chmod -R 755 assets/
   chmod 644 assets/*
   ```
3. Check file paths in index.html

### Issue: Build Fails

**Solution:**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm run build
```

---

## 📊 Verification Commands

### Check File Structure
```bash
# List files in public_html
ls -la public_html/

# Should show:
# index.html
# .htaccess
# robots.txt
# sitemap.xml
# assets/
```

### Check File Permissions
```bash
# Check permissions
ls -l public_html/

# Should show:
# -rw-r--r-- index.html (644)
# -rw-r--r-- .htaccess (644)
# drwxr-xr-x assets/ (755)
```

### Check Build Output
```bash
# Verify dist folder
ls -la dist/

# Check file sizes
du -sh dist/*
```

---

## 🔄 Automated Deployment (Advanced)

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
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
      
      - name: Build project
        run: npm run build
      
      - name: Deploy via FTP
        uses: SamKirkland/FTP-Deploy-Action@v4.3.4
        with:
          server: ${{ secrets.FTP_SERVER }}
          username: ${{ secrets.FTP_USERNAME }}
          password: ${{ secrets.FTP_PASSWORD }}
          local-dir: ./dist/
          server-dir: ./public_html/
          dangerous-clean-slate: true
```

**Setup:**
1. Go to GitHub repository → Settings → Secrets
2. Add:
   - `FTP_SERVER`: yourdomain.com
   - `FTP_USERNAME`: your FTP username
   - `FTP_PASSWORD`: your FTP password

---

## 📞 Quick Reference

### Essential Commands

```bash
# Pull latest code
git pull origin main

# Install dependencies
npm install

# Build project
npm run build

# Create ZIP (Linux/Mac)
cd dist && zip -r ../deploy.zip . && cd ..

# Create ZIP (Windows PowerShell)
cd dist
Compress-Archive -Path * -DestinationPath ..\deploy.zip
cd ..

# Preview build locally
npm run preview
```

### cPanel Quick Actions

1. **File Manager** → public_html
2. **Backup** current files
3. **Delete** old files
4. **Upload** deploy.zip
5. **Extract** ZIP
6. **Test** website

### File Permissions

```bash
# Files: 644 (rw-r--r--)
chmod 644 index.html .htaccess robots.txt sitemap.xml

# Folders: 755 (rwxr-xr-x)
chmod -R 755 assets/
```

---

## ✅ Success Criteria

Your redeployment is successful when:

- ✅ Latest code is live
- ✅ All pages load correctly
- ✅ No console errors
- ✅ All features working
- ✅ Mobile responsive
- ✅ Fast loading times
- ✅ SEO elements intact
- ✅ Contact forms work
- ✅ WhatsApp integration works
- ✅ AI chatbot functional

---

## 🆘 Need Help?

### Check These First

1. **Browser Console** (F12)
   - Look for errors
   - Check network tab for 404s

2. **cPanel Error Logs**
   - cPanel → Metrics → Errors

3. **File Permissions**
   - Files: 644
   - Folders: 755

4. **.htaccess File**
   - Must exist in public_html
   - Must have correct content

### Contact Support

- **Email:** dna@bioteldna.co.ke
- **Phone:** +254 711 371092
- **WhatsApp:** +254 711 371092

---

## 📚 Additional Resources

- **Full Deployment Guide:** `public/REDEPLOYMENT-GUIDE.md`
- **cPanel Guide:** `public/CPANEL-DEPLOYMENT-GUIDE.md`
- **Troubleshooting:** `public/CPANEL-TROUBLESHOOTING.md`

---

**Last Updated:** 2026  
**For:** Biotel DNA Kenya  
**Status:** Ready for Deployment
