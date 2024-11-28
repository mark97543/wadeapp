const {Menu}= require ('electron');
const path =require('path');
const mainWindow = require('..');
const { createWadeOLater, createWadeOConvert } = require(path.join(__dirname, 'windows.js'));


const template = [
    //File Menu
    {
        label: 'File',
        submenu:[
            {role:'quit' }
        ]        
    },
    //Calclulaters
    {
        label:'calculaters',
        submenu:[
            {
                label: 'Wade-O-Later',
                click: async ()=>{
                    createWadeOLater(mainWindow);
                }
            },
            {
                label: 'Wade-O-Convert',
                click: async ()=>{
                    createWadeOConvert(mainWindow);
                }
            }
        ]
    }
];



module.exports.mainMenu = Menu.buildFromTemplate(template);