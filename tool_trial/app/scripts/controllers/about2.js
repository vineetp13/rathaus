'use strict';

/**
 * @ngdoc function
 * @name toolTrialApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the toolTrialApp
 */
angular.module('toolTrialApp')
  .controller('About2Ctrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

 $scope.msg="About2";
  $scope.save = function() {
    /*$http.post('path/to/server/file/to/save/json', $scope.languages).then(function(data) {
      $scope.msg = 'Data saved';
    });*/
    $scope.msg = 'Data sent: '+ JSON.stringify($scope.languages);
    console.log($scope.msg);
  };

  });
