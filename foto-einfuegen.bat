@echo off
echo.
echo Bitte speichern Sie Ihr Foto hier:
echo %~dp0public\images\mariia-ochs.png
echo.
echo Dateiname muss exakt sein: mariia-ochs.png
echo (Nicht mariia-ochs.png.PNG oder .jpg)
echo.
explorer "%~dp0public\images"
pause
