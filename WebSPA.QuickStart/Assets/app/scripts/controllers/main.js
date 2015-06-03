/**
 * @ngdoc function
 * @name assetsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assetsApp
 */
(function () {
    'use strict';

    var controllerId = 'MainCtrl';
    angular.module('assetsApp').controller(controllerId, ['$scope', '$http', 'scrollService', 'dataService', MainController]);

    function MainController($scope, $http, scrollService, dataService) {
        var vm = this;

        vm.title = "MainCtrl";

        vm.awesomeThings = [
          'HTML5 Boilerplate',
          'AngularJS',
          'Karma'
        ];        

        vm.countData = 5;

        vm.getData = function () {
            dataService.getData(vm.countData);
        };

        vm.scrollTo = function (idElt) {
            scrollService.scrollTo(idElt);
        };

        activate();

        function activate() {
            alert("toto");
        }
    }
})();
