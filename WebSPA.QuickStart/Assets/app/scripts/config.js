'use strict';

/**
 * @ngdoc overview
 * @name assetsApp
 * @description
 * # assetsApp
 *
 * Main module of the application.
 */
angular.module('assetsApp')
    .config(function ($routeProvider, dashboardProvider, localStorageServiceProvider, $translateProvider, $translatePartialLoaderProvider, $httpProvider, ApiKeyAppenderInterceptorProvider, mongolabServiceProvider) {
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
            .when('/dashboard', {
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl',
                controllerAs: 'vm'
            })
            .when('/restaurants', {
                templateUrl: 'views/restaurants.html',
                controller: 'RestaurantCtrl',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });

            //adf config
            dashboardProvider.widgetsPath('widgets/');
            localStorageServiceProvider.setPrefix('adf');

            //i18n translation config
            $translatePartialLoaderProvider.addPart('myresources1');
            $translatePartialLoaderProvider.addPart('myresources2');
            $translateProvider.useLoader('$translatePartialLoader', {
                urlTemplate: '/i18n/{lang}/{part}.json'
            });

            $translateProvider.preferredLanguage('en');

            $translateProvider.useSanitizeValueStrategy('sanitize');

            // IMPORTANT: Set the database name and API Key here before running the application
            ApiKeyAppenderInterceptorProvider.setApiKey("qXg3Zf4O9Tag45iO7Rn3RTRWsi7djfj2");

            $httpProvider.interceptors.push('ApiKeyAppenderInterceptor');

            // configure mongolab database.
            mongolabServiceProvider.configure("spa_mongodb");

    }) // declare global constant to inject as service.
    .value('myHostObject', {
        url: 'http://localhost:33652',
        port: "33652"
    });
