var item_select = document.getElementById('dynamic-select')
var btn = document.getElementById('openFile')
const {app, BrowserWindow, ipcMain} = require('electron')
var pagethreeWindow = new BrowserWindow({
  webPreferences: {
    nodeIntegration: true
  },
  width: 400,
  height: 100,
  show: false,
})
pageThreeWindow.loadURL('file://' + __dirname + '/createTheme.html')
//
//
//
//
// const dialog=remote.dialog
// const an_dialog=remote.dialog
// let filePaths=[]
//
//     btn.addEventListener('click',()=>{
//       dialog.showOpenDialog({
//         properties:['openFile'],
//         filters:[
//           { name: 'Изображения', extensions: ['jpg', 'png', 'gif'] },
//
//         ]
//       }
//     ).then(result=>{
//       filePaths=result.filePaths;
//       read_image()
//     })
//     })
//     function read_image() {
//       fs.readFile(filePaths[0],(err,data)=>{
//         if(err)
//           console.log(err);
//         save_image(data)
//       })
//
//     }
//     function get_fileName(path){
//       var fileName=fs.readdirSync(path)
//
//
//
//       console.log(fileName);
//       return path + "/" + (fileName.length + 1)
//     }
//     function save_image(image_data) {
//       let vaf = filePaths[0].split("\\")
//       let word = vaf[vaf.length-1]
//       let res = word.split('.')
//       let extension=res[res.length-1]
//       console.log(extension);
//       let fileName = get_fileName('./')
//
//
//         fs.writeFile(fileName +"."+ extension,image_data,(err)=>{
//           if(err)
//             return console.log(err);
//           console.log('success');
//           console.log(filePaths[0])
//         })
//
//
//       }
//       console.log(filePaths[0])
serialize = function(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}


      function openThemeWindow(data){
         main.openWindow('createTheme',serialize(data),true,false)
      }
