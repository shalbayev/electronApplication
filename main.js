
const {remote, ipcRenderer} = require('electron')
const main = remote.require('./app.js');
let mainWindow=remote.getGlobal('mainWindow')
const {Menu, MenuItem} = remote
const fs = require('fs');
const menu = new Menu()
menu.append(new MenuItem(
  {
    label: 'Основное',
    submenu: [
      {
        label: 'Добавить/Изменить вопрос',
        click: function () {
            main.openWindow('prefs',[],false,false,500,150)
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
serialize = function(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

function openTestWindow(data){
   main.openWindow('test',serialize(data),true,false)
}
