const {remote, ipcRenderer} = require('electron')
const {Menu, MenuItem} = remote
const main = remote.require('./app.js')
const fs=require('fs')


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
var goTest = document.getElementById('start')
console.log(goTest);
function mainOpenWindow(){
  main.openWindow('test')
}
//-------------------------------------------------

// const {remote, ipcRenderer} = require('electron')
// const {Menu, MenuItem} = remote
// const main = remote.require('./app.js')
// const fs=require('fs')
// var startTest = document.getElementById('start')
// var item_select = document.getElementById('subjects')
// var gyb = document.getElementById('value')
// startTest.addEventListener('click',()=>{
//   let br = item_select.options[item_select.selectedIndex].text;
//   main.openWindow('test',br)
// });
// let categories = fs.readdirSync('./categories')
// for(let category of categories){
//   option='<option>'+category+'</option>'
//   item_select.innerHTML+=option
// }
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

   main.openWindow('test',serialize(data))
}
