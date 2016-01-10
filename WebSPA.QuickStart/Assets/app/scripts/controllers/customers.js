/**
 * @ngdoc function
 * @name assetsApp.controller:CustomersCtrl
 * @description
 * # CustomersCtrl
 * Controller of the assetsApp
 */
(function () {
    'use strict';

    var controllerId = 'CustomersCtrl';
    angular.module('assetsApp').controller(controllerId, ['$scope', '$http', 'customerService', CustomersController]);

    function CustomersController($scope, $http, customerService) {
        var vm = this;

        vm.title = "CustomersCtrl";

        vm.step1 = {
            firstname: null,
            lastname: null,
            age: null
        };

        vm.step2 = {
            favfood: null
        };

        vm.step3 = {
            
        };

        vm.submitform = function () {

            var dto = {
                step1: vm.step1,
                step2: vm.step2,
                step3: vm.step3
            };

            customerService.submit(dto).then(function (data) {
                alert('data submit in database !');
            });
        };

        function init() {
        };

        init();
    }
})();
