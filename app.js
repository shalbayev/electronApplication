const {app, BrowserWindow, ipcMain} = require('electron')

serialize = function(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

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
  startTest()
  exports.openWindow = (filename,data,maximize=false,frame=true,width=800,height=600) =>{

    let win = new BrowserWindow({
      webPreferences: {
        nodeIntegration: true
      },
      parent:null,
      modal:true,
      width:width,
      height:height,
      frame:frame,
      focus:true
    })
    win.setMenuBarVisibility(false)
    win.focus()
    win.openDevTools()

    win.loadURL(`file://${__dirname}/` + filename + `.html?${data}`)
    if (maximize)
      win.maximize()

    }

  })

  function startTest(data) {
    var testWindow = new BrowserWindow({
      webPreferences: {
        nodeIntegration: true
      },
      width: 400,
      height: 100,
      show: false,
    })
    testWindow.maximize()
    testWindow.hide()
    testWindow.loadURL('file://' + __dirname + '/test.html?')
    testWindow.setMenuBarVisibility(false)
    ipcMain.on('start-test', function () {
      if (testWindow.isVisible())
        testWindow.hide()
      else
        testWindow.show()
    })
  }
