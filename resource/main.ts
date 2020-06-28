import path from 'path';
import { app, BrowserWindow } from 'electron';

app.allowRendererProcessReuse = true;

app.on('ready', async (): Promise<void> => {

    let window: BrowserWindow = new BrowserWindow({
        frame: false,
        show: false
    });

    window.on('ready-to-show', (): void => {
        window.webContents.openDevTools();
        window.maximize();
        window.show();
    });

    window.on('closed', (): void => {
        window = null;
    });

    await window.loadFile(path.join(__dirname, 'index.html'));

});

app.on('window-all-closed', (): void => {
    if (process.platform !== 'darwin')
    {
        app.quit();
    }
});