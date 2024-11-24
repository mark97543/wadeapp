const { BrowserWindow } = require('electron');

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Enable if you need Node.js APIs in the renderer process
      contextIsolation: false, // Disable if you are using nodeIntegration
      //preload: path.join(__dirname, '../preload.js')
    }
  });

  mainWindow.loadFile("views/index.ejs");
  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  return mainWindow;
}

module.exports = { createMainWindow };

