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
        'ngTouch',
        'ui.grid',
        'ngMaterial',
        'chart.js'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'vm'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'vm'
            })
            .when('/myoperations', {
                templateUrl: 'views/operations.html',
                controller: 'OperationsCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }) // declare global constant to inject as service.
    .value('myHostObject', {
        url: 'http://localhost:33652',
        port: "33652"
    });
