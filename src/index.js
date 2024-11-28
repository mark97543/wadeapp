const { app, BrowserWindow, Menu, ipcMain } = require('electron');
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



app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    
    app.quit()
   
  }
  
})

