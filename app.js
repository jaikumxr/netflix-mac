const electron = require("electron");
const url = require("url");
const path = require("path");

const {app, BrowserWindow} = electron;

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL("https://www.netflix.com/login", {userAgent: 'Chrome'});
    mainWindow.on('closed', ()=>{
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', ()=>{
    if (process.platform=='darwin') {
        app.quit();
    }
});

app.on('activate', ()=>{
    if (mainWindow===null) {
        createWindow();
    }
})