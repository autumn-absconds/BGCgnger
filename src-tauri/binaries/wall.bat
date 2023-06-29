@REM @echo off

@REM set "wallpaperPath=C:\Users\shubh\OneDrive\Desktop\R.jpg"

@REM REM Update wallpaper registry key
@REM reg add "HKCU\Control Panel\Desktop" /v Wallpaper /t REG_SZ /d "%wallpaperPath%" /f

@REM REM Refresh the wallpaper
@REM RUNDLL32.EXE user32.dll,UpdatePerUserSystemParameters

@REM echo Wallpaper changed successfully.
@echo off

rem This script opens a new cmd window.

start cmd
