const {app, BrowserWindow, ipcMain} = require('electron')

app.on('ready', function () {
  var mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width: 800,
    height: 600
  })
  mainWindow.loadURL('file://' + __dirname + '/main.html')
  mainWindow.openDevTools()

  var secondWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width: 400,
    height: 100,
    show: false,
  })
  secondWindow.loadURL('file://' + __dirname + '/prefs.html')
  secondWindow.setMenuBarVisibility(false)
  ipcMain.on('toggle-prefs', function () {
    if (secondWindow.isVisible())
      secondWindow.hide()
    else
      secondWindow.show()
  })
  })
  exports.openWindow = (filename) =>{

    let win = new BrowserWindow({
      webPreferences: {
        nodeIntegration: true
      },
      width:800,
      height:600
    })
    win.loadURL(`file://${__dirname}/` + filename + `.html`)
    win.openDevTools()


  }
