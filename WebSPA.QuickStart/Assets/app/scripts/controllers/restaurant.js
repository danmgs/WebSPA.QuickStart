/**
 * @ngdoc function
 * @name assetsApp.controller:RestaurantCtrl
 * @description
 * # AboutCtrl
 * Controller of the assetsApp
 */
(function () {
    'use strict';

    var controllerId = 'RestaurantCtrl';
    angular.module('assetsApp').controller(controllerId, ['$scope', '$http', 'mongolabService', RestaurantCtrl]);

    function RestaurantCtrl($scope, $http, mongolabService) {
        var vm = this;

        vm.title = "RestaurantCtrl";

        vm.restaurants = [];

        function init() {

            mongolabService.getRestaurants().then(function (data) {
                 vm.restaurants = data;
            });
        }

        init();
    }
})();
