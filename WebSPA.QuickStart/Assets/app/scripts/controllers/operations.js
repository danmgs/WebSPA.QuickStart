/**
 * @ngdoc function
 * @name assetsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the assetsApp
 */
(function () {
    'use strict';

    var controllerId = 'OperationsCtrl';
    angular.module('assetsApp').controller(controllerId, ['$scope', '$http', 'operationsService', OperationsCtrl]);

    function OperationsCtrl($scope, $http, operationsService) {
        var vm = this;

        vm.title = "OperationsCtrl";

        vm.countData = 5;

        vm.typeOperation = -1;

        vm.statuslbl = "";

        var initChartComponents = function (res) {

            vm.showChart = true;
            vm.gridOptions.data = res.data;

            operationsService.getAggregatedOperations(vm.typeOperation).then(function (aggres) {

                vm.labels = [];
                vm.series = ['Serie Time', 'Serie Amount'];
                vm.data = [[], []];

                angular.forEach(aggres.data, function (value) {
                    this.push(new Date(value.Date).getTime());
                }, vm.labels);

                angular.forEach(aggres.data, function (value) {
                    if (value.Type === 0) {
                        vm.data[0].push(value.Amount);
                    }
                    else {
                        vm.data[1].push(value.Amount);
                    }
                });

                //vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
                //vm.data = [
                //  [65, 59, 80, 81, 56, 55, 40],
                //  [28, 48, 40, 19, 86, 27, 90]
                //];
                vm.onClick = function (points, evt) {
                    console.log(points, evt);
                };
            });

        };

        vm.resetGui = function () {
            vm.statuslbl = "";
        };

        vm.deleteAll = function () {
            operationsService.deleteAll().then(function (res) {
                vm.gridOptions.data = [];
                vm.showChart = false;
            });            
        };

        vm.getAll = function () {
            operationsService.getAll(vm.typeOperation).then(function (res) {
                initChartComponents(res);
            });
        };

        vm.generateData = function () {
            operationsService.generateData(vm.countData).then(function (res) {
                initChartComponents(res);
                vm.statuslbl = "Random data generated !";
                vm.status = true;
            }, function (err) {
                vm.statuslbl = "An error has occured !";
                vm.status = false;
            });
        };

        vm.typeOpeData = [
          { label: 'All', value: -1 },
          { label: 'Credit', value: 0 },
          { label: 'Debit', value: 1 }          
        ];

        vm.gridOptions = {
            enableSorting: true,
            columnDefs: [
              { name:'Label', field: 'Label' },
              { name:'Amount', field: 'Amount' },
              { name: 'Date', field: 'Date', cellFilter: 'qsDateFilter' },
              { name: 'Type', field: 'Type', cellFilter: 'qsTypeOpeFilter' }
            ],
            data : []
        };

        $scope.$watch("vm.typeOperation", function () {
            vm.resetGui();
            vm.getAll();
        });

        //vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
        //vm.series = ['Series A', 'Series B'];
        //vm.data = [
        //  [65, 59, 80, 81, 56, 55, 40],
        //  [28, 48, 40, 19, 86, 27, 90]
        //];
        //vm.onClick = function (points, evt) {
        //    console.log(points, evt);
        //};

        function init() {
        }

        init();
    }
})();
