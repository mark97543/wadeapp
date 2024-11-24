const {app, Menu}= require ('electron');

const template = [
    //File Menu
    {
        label: 'File',
        submenu:[
            {role:'quit' }
        ]
    }
];

module.exports.mainMenu = Menu.buildFromTemplate(template);