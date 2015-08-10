'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloApp
 */
angular.module('helloApp')
  /*.controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'VineetAddedOneMore'
    ];*/
    .controller('MainCtrl', function ($scope) {
	this.awesomeThings = [
    	'XYZ',
    	'123',
    	'1221'
    ];

    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
    $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function () {
    	$scope.todos.pop();
    	$scope.todo = 'dsvwwc';
    	console.log("clicked yo");
    };


  });
