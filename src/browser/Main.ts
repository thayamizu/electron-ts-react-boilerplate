import Electron = require("electron");

/**
 * Electron Program Main
 *
 * @class Main
 */
class Main {
    private app: Electron.App;
    private mainWindow: Electron.BrowserWindow | null = null;

    private mainURL = `file://${__dirname}/index.html`;

    /**
     *Creates an instance of Main.
     * @param {Electron.App} app
     * @memberof Main
     */
    public constructor(app: Electron.App) {
        this.app = app;

        // on window-all-closed event handler.
        this.app.on("window-all-closed", (): void => {
            this.app.quit();
            return;
        });

        // on ready event handler.
        this.app.on("ready", (): void => {
            this.createWindow();
        });

        // on activate event handler.
        this.app.on("activate", (): void => {
            if (this.mainWindow === null) {
                this.createWindow();
            }
        });
    }

    /**
     * Create BrowserWindow
     *
     * @private
     * @memberof Main
     */
    private createWindow(): void {
        this.mainWindow = new Electron.BrowserWindow({
            width: 800,
            height: 400,
            minWidth: 500,
            minHeight: 200,
            acceptFirstMouse: true,
            titleBarStyle: "hidden",
        });

        this.mainWindow.loadURL(this.mainURL);

        this.mainWindow.on("closed", (): void => {
            this.mainWindow = null;
        });
    }

    public addLisnter(
        channel: string,
        callback: (event: Electron.IpcMainEvent, ...args: any[]) => void
    ): void {
        Electron.ipcMain.on(channel, callback);
    }
}

export const main: Main = new Main(Electron.app);
