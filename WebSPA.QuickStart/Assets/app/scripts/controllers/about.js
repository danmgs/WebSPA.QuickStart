/**
 * @ngdoc function
 * @name assetsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the assetsApp
 */
(function () {
    'use strict';

    var controllerId = 'AboutCtrl';
    angular.module('assetsApp').controller(controllerId, ['$scope', '$http', 'carService', AboutController]);

    function AboutController($scope, $http, carService) {
        var vm = this;

        vm.title = "AboutCtrl";

        vm.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];

        vm.cars = [];

        vm.countData = 5;

        vm.deleteAllCars = function () {

            // TO REFACTO
            //dataService.deleteAllCars().then(function (res) {
            //    dataService.getAllCars().then(function (res) {
            //        vm.gridData = res.data;
            //    });                
            //});

            carService.deleteAllCars().then(function (res) {
                    vm.gridData = [];
            });            
        };

        vm.getAllCars = function () {
            carService.getAllCars().then(function (res) {
                vm.gridData = res.data;
            });
        };

        vm.insertCarsData = function () {
            carService.insertCarsData(vm.countData).then(function (res) {
                vm.gridData = res.data;
            });
        };

        activate();

        function activate() {
         }
    }
})();
