import path from 'path';
import { app, ipcMain, BrowserWindow, IpcMainEvent } from 'electron';

app.allowRendererProcessReuse = true;

app.on('ready', async (): Promise<void> => {

    let window: BrowserWindow = new BrowserWindow({
        fullscreen: true,
        show: false,
        webPreferences: {
            nodeIntegration: true
        }
    });

    window.on('ready-to-show', (): void => {
        window.webContents.openDevTools();
        window.setMenu(null);
        window.maximize();
        window.show();
    });

    window.on('closed', (): void => {
        window = null;
    });

    await window.loadFile(path.join(__dirname, 'index.html'));

    ipcMain.on('graphics:fullscreen', (event: IpcMainEvent, value: boolean): void => {
        window.setFullScreen(value);
    });

});

app.on('window-all-closed', (): void => {
    if (process.platform !== 'darwin')
    {
        app.quit();
    }
});