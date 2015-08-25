'use strict';

/**
 * @ngdoc function
 * @name toolTrialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the toolTrialApp
 */
//var app = 
angular.module('toolTrialApp')
.controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.languages = [
    {name:"English", value:0},
    {name:"Spanish", value:1},
    {name:"German", value:3},
    {name:"Russian", value:2},
    {name:"Korean", value:1}
  ];

  $scope.msg="vav";
  $scope.save = function() {
    /*$http.post('path/to/server/file/to/save/json', $scope.languages).then(function(data) {
      $scope.msg = 'Data saved';
    });*/
    $scope.msg = 'Data sent: '+ JSON.stringify($scope.languages);
    console.log($scope.msg);
  };

console.log($scope.languages);
  console.log($scope.msg);

});

    var test="Hola!";
  console.log(test);
  angular.toJson(test,true);
  //or
  JSON.stringify(test);

