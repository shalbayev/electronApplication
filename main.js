const {remote, ipcRenderer} = require('electron')
const {Menu, MenuItem} = remote
const fs = require('fs');
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
function get_subjects(){
  let categories = fs.readdirSync('./categories')
  return categories
  }
function get_themes_by_subjects(subject){
  let themes = []
  let folder_themes = fs.readdirSync('./categories/' + subject)
  for(let i=0;i<folder_themes.length;i++){
    let theme_name=folder_themes[i]
    // themes.push({theme:fs.readdirSync('./categories/' + subject + '/'+ theme)})
    themes.push({theme: theme_name,sub_theme:fs.readdirSync('./categories/' + subject + '/' + theme_name)})
    // console.log(folder_themes[i]);
  }
  return themes;


}
