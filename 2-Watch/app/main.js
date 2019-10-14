const {
    app,
    BrowserWindow,
    dialog
} = require('electron') // dialog is for opening system dialog boxes
const fs = require('fs') // for reading files

let mainWindow = null

function mainInterface() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 500,
        webPreferences: {
            nodeIntegration: true
        },
        show: false
    })
    mainWindow.loadFile('app/index.html')
    mainWindow.once('ready-to-show', () => {
        mainWindow.show()
        //getFiles()
    })

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

// This func is only here coz I was testing dialogboxes. Not needed for the watch app
const getFiles = () => {
    const files = dialog.showOpenDialog(mainWindow, {
        properties: ['openFile'],
        filters: [{
                name: 'Text Files',
                extensions: ['txt']
            },
            {
                name: 'Markdown Files',
                extensions: ['md', 'markdown']
            }
        ]
    })
    if (!files) {
        return
    }
    console.log(files)

}

app.on('ready', mainInterface)