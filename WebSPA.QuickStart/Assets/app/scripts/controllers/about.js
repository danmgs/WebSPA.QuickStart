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
    angular.module('assetsApp').controller(controllerId, ['$scope', '$http', 'dataService', AboutController]);

    function AboutController($scope, $http, dataService) {
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

            dataService.deleteAllCars().then(function (res) {
                    vm.gridData = [];
            });            
        };

        vm.getAllCars = function () {
            dataService.getAllCars();
        };

        vm.insertCarsData = function () {
            dataService.insertCarsData(vm.countData).then(function (res) {
                vm.gridData = res.data;
            });
        };

        activate();

        function activate() {
         }
    }
})();
