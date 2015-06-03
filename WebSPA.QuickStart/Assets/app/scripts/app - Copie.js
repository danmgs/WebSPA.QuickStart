'use strict';

/**
 * @ngdoc overview
 * @name assetsApp
 * @description
 * # assetsApp
 *
 * Main module of the application.
 */
angular
  .module('assetsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/Assets/app/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: '/Assets/app/views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
