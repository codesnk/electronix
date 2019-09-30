const {
    app,
    BrowserWindow
} = require('electron')

function mainInterface() {
    let mainWindow = new BrowserWindow({ // Create the window
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.loadFile('app/index.html') // load the index.html file in main window
}

app.on('ready', mainInterface)