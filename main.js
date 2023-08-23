const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

// main初始化remote模块
require('@electron/remote/main').initialize();

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1600,
    height: 1000,
    minWidth: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // 判断开发和生产环境
  const urlLocation = isDev ? 'http://localhost:8000' : '';
  mainWindow.loadURL(urlLocation);
});
