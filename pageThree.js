var app = angular.module('app',['ngRoute']);
const{remote} = require('electron');
app.config(function($routeProvider){
  $routeProvider.when('/',{
    templateUrl: `${__dirname}/components/home/home.html`,
    controller:'homeCtrl'
  })
});
app.controller('homeCtrl',function($scope){
  $scope.pickFile = function(){
    var{dialog} = remote;
    dialog.showOpenDialog({
      properties:['openFile'],
      filters:[{
        name:'Images',
        extensions:['jpg','jpeg','png']
      }]
    },function(file){
      console.log(file);
    });
  };
});
