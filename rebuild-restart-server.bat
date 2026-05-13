@echo off
setlocal

set "SCRIPT_DIR=%~dp0"
set "PORT=%PORT%"
if "%PORT%"=="" set "PORT=3000"

pushd "%SCRIPT_DIR%" >nul || exit /b 1

where npm >nul 2>nul
if errorlevel 1 (
  echo npm was not found. Install Node.js 18 or newer and try again.
  popd >nul
  exit /b 1
)

set "NEED_INSTALL="
if not exist node_modules set "NEED_INSTALL=1"
if not exist "node_modules\@docusaurus\faster" set "NEED_INSTALL=1"

if defined NEED_INSTALL (
  echo Installing documentation dependencies...
  call npm ci --cache .npm-cache --prefer-offline
  if errorlevel 1 (
    popd >nul
    exit /b 1
  )
)

echo Stopping any documentation server on port %PORT%...
powershell -NoProfile -ExecutionPolicy Bypass -Command "$ErrorActionPreference = 'SilentlyContinue'; Get-NetTCPConnection -LocalPort %PORT% -State Listen | Select-Object -ExpandProperty OwningProcess -Unique | Where-Object { $_ } | ForEach-Object { Stop-Process -Id $_ -Force }"

echo Rebuilding documentation...
call npm run build
if errorlevel 1 (
  popd >nul
  exit /b 1
)

echo Starting documentation server on http://localhost:%PORT% ...
start "Easeam Docs Server" /D "%SCRIPT_DIR%" cmd /k "npm run serve -- --host 0.0.0.0 --port %PORT%"

popd >nul
endlocal
