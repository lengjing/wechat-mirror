const { BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');
const loadRoute = require('./utils/route');

let workbenchWindow;

const openWorkbenchWindow = () => {
  if (workbenchWindow) {
    workbenchWindow.show();
    return;
  }

  workbenchWindow = new BrowserWindow({
    // width: 300,
    // height: 400,
    // resizable: false,
    // maximizable: false,
    // minimizable: false,
    // fullscreenable: false,
    title: '',
    center: true,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: !isDev
    },
    show: false,
  });

  loadRoute(workbenchWindow, 'workbench');

  workbenchWindow.show();

  workbenchWindow.on('close', () => {
    workbenchWindow = null;
  });
};

module.exports = {
  openWorkbenchWindow
};
