const { app } = require('electron');
const isDev = require('electron-is-dev');

const loadRoute = (win, routeName) => {
  if (isDev) {
    win.loadURL(`http://localhost:3000/${routeName}`);
    win.openDevTools({ mode: 'detach' });
  } else {
    win.loadFile(`${app.getAppPath()}/renderer/out/${routeName}/index.html`);
  }
};

module.exports = loadRoute;
