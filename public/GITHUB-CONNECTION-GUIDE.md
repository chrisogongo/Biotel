# GitHub Connection Guide - Biotel DNA Website

## 🚀 Step-by-Step GitHub Setup

This guide will help you connect your Biotel DNA website to GitHub and deploy it.

---

## 📋 Prerequisites

Before you begin, ensure you have:

1. **Git installed** on your computer
   - Download from: https://git-scm.com/downloads
   - Verify installation: `git --version`

2. **GitHub account**
   - Sign up at: https://github.com/signup
   - Verify your email address

3. **Node.js and npm installed**
   - Download from: https://nodejs.org/
   - Verify installation: `node --version` and `npm --version`

---

## 🔧 Step 1: Configure Git

Open your terminal and configure Git with your information:

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email (use the same email as your GitHub account)
git config --global user.email "your.email@example.com"

# Verify configuration
git config --list
```

---

## 📦 Step 2: Initialize Git Repository

Navigate to your project directory and initialize Git:

```bash
# Navigate to your project folder
cd path/to/biotel-dna-website

# Initialize Git repository
git init

# Add all files to staging
git add .

# Create first commit
git commit -m "Initial commit: Biotel DNA website with AI chatbot and SEO optimization"
```

---

## 🌐 Step 3: Create GitHub Repository

### Option A: Using GitHub Website (Recommended)

1. Go to https://github.com/new
2. Fill in the details:
   - **Repository name**: `biotel-dna-website`
   - **Description**: `Professional DNA Testing Services Website for Biotel DNA Kenya`
   - **Public** or **Private** (your choice)
   - ❌ **Do NOT** initialize with README, .gitignore, or license (we already have these)
3. Click **Create repository**

### Option B: Using GitHub CLI

```bash
# Install GitHub CLI (if not installed)
# macOS: brew install gh
# Windows: winget install GitHub.cli
# Linux: https://cli.github.com/

# Authenticate
gh auth login

# Create repository
gh repo create biotel-dna-website --public --description "Professional DNA Testing Services Website for Biotel DNA Kenya"
```

---

## 🔗 Step 4: Connect Local Repository to GitHub

After creating the repository on GitHub, connect your local repository:

```bash
# Add GitHub as remote origin
git remote add origin https://github.com/YOUR_USERNAME/biotel-dna-website.git

# Verify remote
git remote -v

# Rename main branch (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

---

## 🔄 Step 5: Push Your Code

```bash
# Push your code to GitHub
git push -u origin main
```

Your code is now on GitHub! 🎉

---

## 🚀 Step 6: Deploy Your Website

### Option 1: Deploy to Vercel (Recommended)

**Vercel** is the easiest way to deploy React applications.

1. **Go to Vercel**
   - Visit: https://vercel.com/signup
   - Sign up with your GitHub account

2. **Import Your Repository**
   - Click "Add New Project"
   - Select your `biotel-dna-website` repository
   - Click "Import"

3. **Configure Build Settings**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete (usually 2-3 minutes)
   - Your site will be live at: `https://biotel-dna-website.vercel.app`

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain: `bioteldna.co.ke`
   - Follow DNS configuration instructions

### Option 2: Deploy to Netlify

1. **Go to Netlify**
   - Visit: https://www.netlify.com/
   - Sign up with your GitHub account

2. **Import Your Repository**
   - Click "Add new site" → "Import an existing project"
   - Select your `biotel-dna-website` repository

3. **Configure Build Settings**
   - Build Command: `npm run build`
   - Publish Directory: `dist`

4. **Deploy**
   - Click "Deploy site"
   - Your site will be live at: `https://random-name.netlify.app`

5. **Custom Domain (Optional)**
   - Go to Site Settings → Domain Management
   - Add your custom domain
   - Configure DNS settings

### Option 3: Deploy to GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Update package.json**
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/biotel-dna-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy**
```bash
npm run deploy
```

4. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Save

---

## 🌍 Step 7: Connect Custom Domain

To connect `bioteldna.co.ke` to your deployed site:

### For Vercel:
1. Go to Project Settings → Domains
2. Add domain: `bioteldna.co.ke`
3. Vercel will provide DNS records
4. Update DNS at your domain registrar:
   - Add A record pointing to Vercel IP
   - Or add CNAME record: `cname.vercel-dns.com`

### For Netlify:
1. Go to Site Settings → Domain Management
2. Add custom domain: `bioteldna.co.ke`
3. Netlify will provide DNS settings
4. Update DNS at your domain registrar

### For GitHub Pages:
1. Add `CNAME` file in `public/` folder with content: `bioteldna.co.ke`
2. Update DNS at your domain registrar:
   - Add A records for GitHub Pages IPs
   - Or add CNAME record: `YOUR_USERNAME.github.io`

---

## 📊 Step 8: Verify Deployment

After deployment, verify everything works:

1. **Visit your live site**
   - Check all pages load correctly
   - Test contact forms
   - Verify WhatsApp button works
   - Test AI chatbot
   - Check mobile responsiveness

2. **Check SEO**
   - View page source to verify meta tags
   - Test with Google Rich Results Test
   - Submit sitemap to Google Search Console

3. **Test functionality**
   - All links work
   - Forms submit correctly
   - Images load properly
   - Schema markup is valid

---

## 🔄 Step 9: Set Up Continuous Deployment

Your site will automatically deploy when you push to GitHub!

### Automatic Deployment Flow:
```bash
# Make changes to your code
git add .
git commit -m "Update description"
git push origin main

# Vercel/Netlify will automatically:
# 1. Detect the push
# 2. Build your site
# 3. Deploy the new version
# 4. Your site is updated!
```

---

## 🛠️ Troubleshooting

### Issue: "Permission denied (publickey)"

**Solution:**
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your.email@example.com"

# Add SSH key to GitHub
cat ~/.ssh/id_ed25519.pub
# Copy the output and add to GitHub → Settings → SSH and GPG keys
```

### Issue: "fatal: remote origin already exists"

**Solution:**
```bash
# Remove existing remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/YOUR_USERNAME/biotel-dna-website.git
```

### Issue: Build fails on Vercel/Netlify

**Solution:**
- Check build logs for errors
- Ensure all dependencies are in `package.json`
- Verify build command is correct: `npm run build`
- Check that output directory is `dist`

### Issue: Custom domain not working

**Solution:**
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check SSL certificate status
- Clear browser cache

---

## 📝 Useful Git Commands

```bash
# Check status
git status

# View commit history
git log

# Create new branch
git checkout -b feature/new-feature

# Switch branches
git checkout main

# Merge branch
git merge feature/new-feature

# Pull latest changes
git pull origin main

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all changes
git reset --hard HEAD
```

---

## 🎯 Next Steps After Deployment

1. **Submit to Google Search Console**
   - Add your property
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`
   - Verify ownership

2. **Set up Google Analytics**
   - Create GA4 property
   - Add tracking code to `index.html`

3. **Configure Google Business Profile**
   - Create/claim your business listing
   - Add website URL
   - Verify business information

4. **Monitor Performance**
   - Check Google Search Console regularly
   - Monitor site speed
   - Track user engagement

5. **Regular Updates**
   - Keep dependencies updated: `npm update`
   - Add new content as needed
   - Monitor and respond to user feedback

---

## 📞 Support

If you encounter any issues:

- **GitHub Documentation**: https://docs.github.com/
- **Vercel Documentation**: https://vercel.com/docs
- **Netlify Documentation**: https://docs.netlify.com/
- **Contact**: dna@bioteldna.co.ke

---

## ✅ Checklist

Before going live, verify:

- [ ] Code pushed to GitHub
- [ ] Site deployed successfully
- [ ] All pages load correctly
- [ ] Mobile responsive
- [ ] Contact forms working
- [ ] WhatsApp button functional
- [ ] AI chatbot working
- [ ] Custom domain connected (if applicable)
- [ ] SSL certificate active (HTTPS)
- [ ] SEO meta tags present
- [ ] Sitemap accessible
- [ ] Google Search Console configured
- [ ] Google Analytics tracking (optional)

---

## 🎉 Congratulations!

Your Biotel DNA website is now live on GitHub and deployed to the world!

**Your Repository**: https://github.com/YOUR_USERNAME/biotel-dna-website  
**Live Site**: https://your-deployment-url.com

---

**Last Updated**: 2026  
**For**: Biotel DNA Kenya  
**Status**: ✅ Ready for GitHub Connection
