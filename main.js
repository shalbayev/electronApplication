const {remote, ipcRenderer} = require('electron')
const {Menu, MenuItem} = remote

const menu = new Menu()

menu.append(new MenuItem(
  {
    label: 'Electron',
    submenu: [
      {
        label: 'Admin',
        click: function () {
            ipcRenderer.send('toggle-prefs')
        }
      }
    ]
  })
)

Menu.setApplicationMenu(menu)
