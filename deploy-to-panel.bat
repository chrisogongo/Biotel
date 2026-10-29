@echo off
REM ============================================
REM Biotel DNA - Deploy to Hosting Panel Script
REM ============================================
REM Target: https://102.68.98.222:2222/evo/login
REM Domain: dnatest.co.ke
REM ============================================

echo.
echo ==========================================
echo   Biotel DNA - Deployment Script
echo ==========================================
echo.

REM Configuration
set REMOTE_HOST=102.68.98.222
set REMOTE_USER=your-username
set REMOTE_PATH=/path/to/public_html
set LOCAL_DIST=dist

REM Check if dist folder exists
if not exist "%LOCAL_DIST%" (
    echo [ERROR] dist folder not found!
    echo Please run 'npm run build' first.
    pause
    exit /b 1
)

echo [OK] Build folder found
echo.

REM Display deployment info
echo Deployment Information:
echo    Remote Host: %REMOTE_HOST%
echo    Remote User: %REMOTE_USER%
echo    Remote Path: %REMOTE_PATH%
echo    Local Source: %LOCAL_DIST%
echo.

echo [WARNING] This will upload files to your server.
set /p CONFIRM=Continue? (y/n): 

if /i not "%CONFIRM%"=="y" (
    echo Deployment cancelled.
    pause
    exit /b 0
)

echo.
echo Uploading files...
echo.

REM Check if scp is available
where scp >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo Using SCP for deployment...
    scp -r %LOCAL_DIST%\* %REMOTE_USER%@%REMOTE_HOST%:%REMOTE_PATH%/
    
    if %ERRORLEVEL% EQU 0 (
        echo.
        echo [OK] Deployment successful!
    ) else (
        echo.
        echo [ERROR] Deployment failed!
        pause
        exit /b 1
    )
) else (
    echo [WARNING] SCP not found.
    echo.
    echo Please use one of these methods:
    echo.
    echo 1. Use FileZilla (FTP client):
    echo    - Download: https://filezilla-project.org/
    echo    - Connect to: %REMOTE_HOST%
    echo    - Upload all files from dist/ folder
    echo.
    echo 2. Use your hosting panel File Manager:
    echo    - Login: https://%REMOTE_HOST%:2222/evo/login
    echo    - Navigate to File Manager
    echo    - Upload files from dist/ folder
    echo.
    echo 3. Install Git for Windows (includes SCP):
    echo    - Download: https://git-scm.com/download/win
    echo    - Run this script again
    echo.
)

echo.
echo ==========================================
echo   Deployment Instructions
echo ==========================================
echo.
echo Your website: https://dnatest.co.ke
echo.
echo Next steps:
echo    1. Clear browser cache (Ctrl+F5)
echo    2. Test all pages and features
echo    3. Check browser console (F12)
echo.
echo If blank screen appears:
echo    - Verify .htaccess was uploaded
echo    - Check file permissions (644 for files)
echo    - Clear CDN cache if using Cloudflare
echo.
pause
