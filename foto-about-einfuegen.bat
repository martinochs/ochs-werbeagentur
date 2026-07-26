@echo off
cd /d "%~dp0"
echo.
echo Bitte das Ganzkoerper-Foto fuer "Ueber mich" hier speichern:
echo %~dp0public\images\mariia-ochs-about.png
echo.
echo Dateiname muss exakt sein: mariia-ochs-about.png
echo.
explorer "%~dp0public\images"
pause
