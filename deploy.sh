#!/bin/bash

# ============================================
# Biotel DNA Website - Quick Deploy Script
# ============================================
# This script builds the project and creates
# a deployment-ready ZIP file for cPanel
# ============================================

echo "🚀 Biotel DNA - Starting Deployment Build..."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found!"
    echo "Please run this script from the project root directory."
    exit 1
fi

# Step 1: Pull latest code
echo "📥 Step 1: Pulling latest code from GitHub..."
git pull origin main
if [ $? -ne 0 ]; then
    echo "⚠️  Warning: Git pull failed. Continuing with current code..."
fi
echo ""

# Step 2: Install dependencies
echo "📦 Step 2: Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ Error: npm install failed!"
    exit 1
fi
echo ""

# Step 3: Build the project
echo "🔨 Step 3: Building the project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Error: Build failed!"
    exit 1
fi
echo ""

# Step 4: Verify build
echo "✅ Step 4: Verifying build..."
if [ ! -d "dist" ]; then
    echo "❌ Error: dist/ folder not found!"
    exit 1
fi

if [ ! -f "dist/index.html" ]; then
    echo "❌ Error: dist/index.html not found!"
    exit 1
fi
echo ""

# Step 5: Create deployment package
echo "📦 Step 5: Creating deployment package..."
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
ZIP_NAME="biotel-dna-deployment-${TIMESTAMP}.zip"

cd dist
zip -r "../${ZIP_NAME}" .
cd ..

if [ $? -ne 0 ]; then
    echo "❌ Error: Failed to create ZIP file!"
    exit 1
fi
echo ""

# Step 6: Show results
echo "============================================"
echo "✅ BUILD SUCCESSFUL!"
echo "============================================"
echo ""
echo "📦 Deployment package created:"
echo "   ${ZIP_NAME}"
echo ""
echo "📊 Package size:"
ls -lh "${ZIP_NAME}" | awk '{print "   " $5}'
echo ""
echo "📁 Files included:"
echo "   - index.html"
echo "   - .htaccess"
echo "   - robots.txt"
echo "   - sitemap.xml"
echo "   - assets/ (JS & CSS)"
echo ""
echo "============================================"
echo "🚀 NEXT STEPS:"
echo "============================================"
echo ""
echo "1. Login to cPanel"
echo "2. Go to File Manager"
echo "3. Navigate to public_html"
echo "4. Backup current files (IMPORTANT!)"
echo "5. Delete old files"
echo "6. Upload: ${ZIP_NAME}"
echo "7. Extract the ZIP file"
echo "8. Test your website"
echo ""
echo "============================================"
echo "💡 TIP: Use FTP/SFTP for faster upload"
echo "============================================"
echo ""
