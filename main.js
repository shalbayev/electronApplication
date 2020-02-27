const {remote, ipcRenderer} = require('electron')
const BrowserWindow=require('electron').remote.BrowserWindow
const {Menu, MenuItem} = remote
const fs = require('fs');
const menu = new Menu()


function createWindow(filename,frame,menu,data=[],maximize=false,path='',width=400,height=350){
  var createWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    width: width,
    height: height ,
    show: false,
    frame:frame
  })
  createWindow.setMenuBarVisibility(menu)
  createWindow.openDevTools()
  if(maximize)
    createWindow.maximize()
  if(path)
    createWindow.loadURL('file://' + __dirname + "/"+filename+".html?"+serialize(data)+"&path"+path)
  else
    createWindow.loadURL('file://' + __dirname + "/"+filename+".html?"+serialize(data))
    return createWindow
}



menu.append(new MenuItem(
  {
    label: 'Основное',
    submenu: [
      {
        label: 'Добавить/Изменить вопрос',
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
serialize = function(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

function openTestWindow(data){
   createWindow('test',false,false,data,true).show()
}
