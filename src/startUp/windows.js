const { BrowserWindow, ipcMain , app, Menu} = require('electron');
const path =require('path');


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
  //mainWindow.webContents.openDevTools();

  mainWindow.on('closed', ()=>{
    app.quit();
  })

  return mainWindow;
}

function createWadeOLater(mainWindow){
   
    const wadeOLater = new BrowserWindow({
        parent: mainWindow, 
        width: 290,
        height: 375,
        resizable:false, //Need to make this false in production
        webPreferences: {
            nodeIntegration: true
        }
    })
    wadeOLater.loadFile("views/calculater/wadeolater.ejs");
    wadeOLater.setMenuBarVisibility(false); //Need Custom Menu
    return wadeOLater;
}

function createWadeOConvert(mainWindow){

  const wadeOConvert = new BrowserWindow({
    parent: mainWindow,
    width: 500,
    height: 150,
    resizable: false, //need to be false in production
    webPreferences:{
      nodeIntegration: true
    } 
  })
  wadeOConvert.loadFile("views/calculater/wadeoconvert.ejs")
  wadeOConvert.setMenuBarVisibility(false); //need custom menu
  //wadeOConvert.webContents.openDevTools();
  return wadeOConvert;
}


module.exports = { 
    createMainWindow:createMainWindow, 
    createWadeOLater:createWadeOLater,
    createWadeOConvert: createWadeOConvert
};
