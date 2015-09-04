'use strict';

angular.module('toolMeanApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('example', {
        url: '/example',
        templateUrl: 'app/example/example.html',
        controller: 'ExampleCtrl'
      });
  });