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
        'chart.js',
        'adf',
        'LocalStorageModule',
        'pascalprecht.translate',
        'lumx',
        'siyfion.sfTypeahead',
        'myDashboardModule',
        'mgo-angular-wizard'
    ]);

angular
    .module('myDashboardModule', []);
