#!/bin/bash

# ============================================
# Biotel DNA - Deploy to Hosting Panel Script
# ============================================
# Target: https://102.68.98.222:2222/evo/login
# Domain: dnatest.co.ke
# ============================================

echo "🚀 Biotel DNA - Deployment Script"
echo "=================================="
echo ""

# Configuration
REMOTE_HOST="102.68.98.222"
REMOTE_USER="your-username"  # Change this to your SSH username
REMOTE_PATH="/path/to/public_html"  # Change this to your website path
LOCAL_DIST="./dist"

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if dist folder exists
if [ ! -d "$LOCAL_DIST" ]; then
    echo -e "${RED}❌ Error: dist/ folder not found!${NC}"
    echo "Please run 'npm run build' first."
    exit 1
fi

echo -e "${GREEN}✅ Build folder found${NC}"
echo ""

# Display deployment info
echo "📋 Deployment Information:"
echo "   Remote Host: $REMOTE_HOST"
echo "   Remote User: $REMOTE_USER"
echo "   Remote Path: $REMOTE_PATH"
echo "   Local Source: $LOCAL_DIST"
echo ""

# Confirm deployment
echo -e "${YELLOW}⚠️  This will upload files to your server.${NC}"
read -p "Continue? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Deployment cancelled."
    exit 0
fi

echo ""
echo "📤 Starting deployment..."
echo ""

# Method 1: Using rsync (recommended)
if command -v rsync &> /dev/null; then
    echo "Using rsync for deployment..."
    rsync -avz --progress --delete \
        "$LOCAL_DIST/" \
        "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/"
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Deployment successful!${NC}"
    else
        echo -e "${RED}❌ Deployment failed!${NC}"
        exit 1
    fi
else
    # Method 2: Using scp (fallback)
    echo "rsync not found, using scp..."
    
    # Upload files
    scp -r "$LOCAL_DIST/"* "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/"
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Deployment successful!${NC}"
    else
        echo -e "${RED}❌ Deployment failed!${NC}"
        exit 1
    fi
fi

echo ""
echo "🔧 Setting permissions..."

# Set permissions via SSH
ssh "$REMOTE_USER@$REMOTE_HOST" << EOF
    cd $REMOTE_PATH
    chmod 644 index.html .htaccess robots.txt sitemap.xml
    chmod 755 assets
    chmod 644 assets/*
    echo "Permissions set successfully"
EOF

echo ""
echo "=================================="
echo -e "${GREEN}✅ Deployment Complete!${NC}"
echo "=================================="
echo ""
echo "🌐 Your website should now be live at:"
echo "   https://dnatest.co.ke"
echo ""
echo "📝 Next steps:"
echo "   1. Clear your browser cache (Ctrl+F5)"
echo "   2. Test all pages and features"
echo "   3. Check browser console for errors (F12)"
echo ""
echo "🆘 If you see a blank screen:"
echo "   - Verify .htaccess was uploaded"
echo "   - Check file permissions"
echo "   - Clear CDN cache if using Cloudflare"
echo ""
