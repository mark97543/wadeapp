const { app, BrowserWindow, Menu } = require('electron');
const path = require('node:path');
const ejse = require('ejs-electron');
const {mainMenu} = require(path.join(__dirname, '/startUp/menumaker.js'));
const { createMainWindow } = require(path.join(__dirname, '/startUp/windows.js')); // Import the createMainWindow function



//Menu for the windows
Menu.setApplicationMenu(mainMenu);



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(() => {
  const mainWindow = createMainWindow(); 
});



// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
