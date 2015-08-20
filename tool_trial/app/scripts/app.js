'use strict';

//the require keyword cannot be used here
//var express = require('express');
//var app = express();

/**
 * @ngdoc overview
 * @name toolTrialApp
 * @description
 * # toolTrialApp
 *
 * Main module of the application.
 */
angular
  .module('toolTrialApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
