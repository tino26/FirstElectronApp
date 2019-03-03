const { app, BrowserWindow } = require('electron')
var path = require('path')

function createWindow(){
	let win=new BrowserWindow({
		width: 1000, 
		heght: 1000,
		minWidth: 1281,
     	minHeight: 800,
     	backgroundColor: '#312450',
	    icon: path.join(__dirname, 'icons/favicon-32x32.png')
	});
	win.loadFile('index.html');

	win.on('closed', function () {
       // Dereference the window object, usually you would store windows
       // in an array if your app supports multi windows, this is the time
       // when you should delete the corresponding element.
       win = null
    })

    require('./menu/mainmenu')

}
app.on('ready', createWindow);
