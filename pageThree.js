const {app,remote, ipcMain} = require('electron')
const {Menu, MenuItem} = remote


const main = remote.require('./app.js')
const menu = new Menu()
menu.append(new MenuItem(
  {}))



var item_select = document.getElementById('dynamic-select')
var btn = document.getElementById('openFile')

var add = document.getElementById('addFile')
add.addEventListener('click',()=>{
  main.openWindow('createFolder')

});

const fs=require('fs')

updating()

function updating(){
  let categories = fs.readdirSync('./categories')
  for(let category of categories){
    option='<option>'+category+'</option>'
    item_select.innerHTML+=option

  }
}


const dialog=remote.dialog
const an_dialog=remote.dialog
let filePaths=[]

    btn.addEventListener('click',()=>{
      dialog.showOpenDialog({
        properties:['openFile'],
        filters:[
          { name: 'Изображения', extensions: ['jpg', 'png', 'gif'] },

        ]
      }
    ).then(result=>{
      filePaths=result.filePaths;
      read_image()
    })
    })
    function read_image() {
      fs.readFile(filePaths[0],(err,data)=>{
        if(err)
          console.log(err);
        save_image(data)
      })

    }
    function get_fileName(path){
      var fileName=fs.readdirSync(path)



      console.log(fileName);
      return path + "/" + (fileName.length + 1)
    }
    function save_image(image_data) {
      let vaf = filePaths[0].split("\\")
      let word = vaf[vaf.length-1]
      let res = word.split('.')
      let extension=res[res.length-1]
      console.log(extension);
      let fileName = get_fileName('./')


        fs.writeFile(fileName +"."+ extension,image_data,(err)=>{
          if(err)
            return console.log(err);
          console.log('success');
          console.log(filePaths[0])
        })


      }
      console.log(filePaths[0])
