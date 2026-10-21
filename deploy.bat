@echo off
REM ============================================
REM Biotel DNA Website - Quick Deploy Script
REM ============================================
REM This script builds the project and creates
REM a deployment-ready ZIP file for cPanel
REM ============================================

echo.
echo ============================================
echo   Biotel DNA - Starting Deployment Build
echo ============================================
echo.

REM Check if package.json exists
if not exist "package.json" (
    echo ERROR: package.json not found!
    echo Please run this script from the project root directory.
    pause
    exit /b 1
)

REM Step 1: Pull latest code
echo Step 1: Pulling latest code from GitHub...
git pull origin main
if errorlevel 1 (
    echo Warning: Git pull failed. Continuing with current code...
)
echo.

REM Step 2: Install dependencies
echo Step 2: Installing dependencies...
call npm install
if errorlevel 1 (
    echo ERROR: npm install failed!
    pause
    exit /b 1
)
echo.

REM Step 3: Build the project
echo Step 3: Building the project...
call npm run build
if errorlevel 1 (
    echo ERROR: Build failed!
    pause
    exit /b 1
)
echo.

REM Step 4: Verify build
echo Step 4: Verifying build...
if not exist "dist" (
    echo ERROR: dist folder not found!
    pause
    exit /b 1
)

if not exist "dist\index.html" (
    echo ERROR: dist\index.html not found!
    pause
    exit /b 1
)
echo.

REM Step 5: Create deployment package
echo Step 5: Creating deployment package...

REM Get current date and time for filename
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set TIMESTAMP=%datetime:~0,8%_%datetime:~8,6%
set ZIP_NAME=biotel-dna-deployment-%TIMESTAMP%.zip

REM Create ZIP using PowerShell
cd dist
powershell -Command "Compress-Archive -Path * -DestinationPath ..\%ZIP_NAME% -Force"
cd ..

if errorlevel 1 (
    echo ERROR: Failed to create ZIP file!
    pause
    exit /b 1
)
echo.

REM Step 6: Show results
echo ============================================
echo   BUILD SUCCESSFUL!
echo ============================================
echo.
echo Deployment package created:
echo    %ZIP_NAME%
echo.
echo Package size:
for %%A in (%ZIP_NAME%) do echo    %%~zA bytes
echo.
echo Files included:
echo    - index.html
echo    - .htaccess
echo    - robots.txt
echo    - sitemap.xml
echo    - assets/ (JS ^& CSS)
echo.
echo ============================================
echo   NEXT STEPS:
echo ============================================
echo.
echo 1. Login to cPanel
echo 2. Go to File Manager
echo 3. Navigate to public_html
echo 4. Backup current files (IMPORTANT!)
echo 5. Delete old files
echo 6. Upload: %ZIP_NAME%
echo 7. Extract the ZIP file
echo 8. Test your website
echo.
echo ============================================
echo   TIP: Use FTP/SFTP for faster upload
echo ============================================
echo.
pause
