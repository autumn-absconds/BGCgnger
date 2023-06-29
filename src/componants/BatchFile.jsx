import React from 'react'
import { writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';
import { join, pictureDir } from '@tauri-apps/api/path';
import { shell } from '@tauri-apps/api';
import { open } from '@tauri-apps/api/shell';
// const fs = require('fs');

const BatchFile = () => {


    const writeWallpaperScript = async () => {
        const scriptContent = `@echo off\nset "wallpaperPath=path"\nreg add "HKCU\\Control Panel\\Desktop" /v Wallpaper /t REG_SZ /d "%wallpaperPath%" /f\nRUNDLL32.EXE user32.dll,UpdatePerUserSystemParameters`;

        try {
            await writeTextFile('wallpaper.bat', scriptContent, { dir: BaseDirectory.Picture, encoding: 'ansi' });

            console.log('wallpaper.bat file saved successfully');
        } catch (error) {
            console.error('Error saving wallpaper.bat file:', error);
        }
    };

    const runWallpaperScript = async () => {
        const pictureDirPath = await pictureDir();
        const path = await join(pictureDirPath, 'wallpaper.bat');
        open(path)
            .then(() => console.log('wallpaper.bat script executed successfully'))
            .catch((error) => console.error('Error executing wallpaper.bat script:', error));
    };





    return (
        <div>
            <button onClick={writeWallpaperScript}>Save wallpaper.bat</button>
            <button onClick={runWallpaperScript}>Run wallpaper.bat</button>
        </div>
    )
}

export default BatchFile
