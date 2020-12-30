const { app, BrowserWindow } = require('electron');
const { openLoginWindow } = require('./login');
const { openWorkbenchWindow } = require('./workbench');
const wc = require('./common/wechat');

async function main() {
  await app.whenReady();
  // await wc.init();

  wc.on('login', () => {
    console.log(wc);
    openWorkbenchWindow();
  });

  // wc.on('logout', () => {
  //   openLoginWindow();
  // })

  openWorkbenchWindow();
}

main();
