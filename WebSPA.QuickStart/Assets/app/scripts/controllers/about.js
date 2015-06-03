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

        vm.title = "MainCtrl";

        vm.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];

        vm.cars = [];

        vm.countData = 5;

        vm.getAllCars = function () {
            dataService.getAllCars().then(function (res) {
                vm.cars = res.data;
            });            
        };

        vm.insertCarsData = function () {
            dataService.insertCarsData(vm.countData);
        };        

        activate();

        function activate() {
            //alert("About");
        }
    }
})();
