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
.controller('MainCtrl', function ($scope, $http) {
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

//let's assume you took some user input here and marshalled it as a json
  var json_ob_req = {action: "click", taste: "poor"};
  console.log(json_ob_req);
  //req.send(json_ob_req);

  $http.defaults.useXDomain = true; //trying to fix the errors
  console.log($http.defaults.useXDomain);
  $http({
        url: 'http://localhost/user',
        method: "POST",
        data: JSON.stringify({json_ob_req: json_ob_req}),
        headers: {'Content-Type': 'application/json'}
      }).success(function (data) {
        //success(function (data, status, headers, config) {
          console.log("post success");
            $scope.users = data.users; // assign  $scope.persons here as promise is resolved here 
        }).error(function (status, headers) {
          //}).error(function (data, status, headers, config) {
            console.log("post failure");
            $scope.status = status + ' LALA  ' + headers;
            console.log($scope.status);
            console.trace();
            console.log($http.defaults.useXDomain);
        }); 

  };

console.log($scope.languages);
  console.log($scope.msg);


});

    var test="Hola!";
  console.log(test);
  angular.toJson(test,true);
  //or
  JSON.stringify(test);

