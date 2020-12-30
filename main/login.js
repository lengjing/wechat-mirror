const { BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const loadRoute = require('./utils/route');

let loginWindow;

const openLoginWindow = () => {
  if (loginWindow) {
    loginWindow.show();
    return;
  }

  loginWindow = new BrowserWindow({
    width: 300,
    height: 400,
    resizable: false,
    maximizable: false,
    minimizable: false,
    fullscreenable: false,
    title: '',
    center: true,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: !isDev
    },
    show: false
  });

  loadRoute(loginWindow, 'login');

  loginWindow.show();

  loginWindow.on('close', () => {
    loginWindow = null;
  });
};

module.exports = {
  openLoginWindow
};
