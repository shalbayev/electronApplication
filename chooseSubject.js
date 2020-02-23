const {remote, ipcRenderer} = require('electron')
const {Menu, MenuItem} = remote
const main = remote.require('./app.js')
const fs=require('fs')
var startTest = document.getElementById('goOn')
var item_select = document.getElementById('subjects')
var gyb = document.getElementById('value')
let categories = fs.readdirSync('./categories')
for(let category of categories){
  option='<option>'+category+'</option>'
  item_select.innerHTML+=option
}
