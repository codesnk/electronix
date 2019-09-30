const {
    app,
    BrowserWindow
} = require('electron')

function mainInterface() {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        }
    })
    mainWindow.loadFile('app/index.html')
}

app.on('ready', mainInterface)