/**
 * @ngdoc service
 * @name assetsApp.operationsService
 * @description
 * # dataService
 * Service in the assetsApp.
 */
(function () {
    'use strict';

    var serviceId = 'operationsService';

    angular.module('assetsApp').factory(serviceId, ['$http', 'myHostObject', operationsService]);

    function operationsService($http, myHostObject) {

        var deleteAll = function () {
            return $http.get(myHostObject.url + '/api/Operation/DeleteAll')
                .success(function () {
                    alert('success deleteAll');
                })
                .error(function (err) {
                    alert('error deleteAll : ' + JSON.stringify(err));
                });
        };

        var getAll = function (typeOperation) {
            return $http.get(myHostObject.url + '/api/Operation/GetAll' + '?typeOperation=' + typeOperation)
                .success(function () {
                    //alert('success getAll');
                })
                .error(function (err) {
                    alert('error getAll : ' + JSON.stringify(err));
                });
        };

        var getAggregatedOperations = function (typeOperation) {
            return $http.get(myHostObject.url + '/api/Operation/GetAggregatedOperations' + '?typeOperation=' + typeOperation)
                .success(function () {
                    //alert('success getAll');
                })
                .error(function (err) {
                    alert('error getAggregatedOperations : ' + JSON.stringify(err));
                });
        };        

        var generateData = function (count) {
            return $http.get(myHostObject.url + '/api/Operation/GenerateRandomData' + '?count=' + count)
                .success(function () {
                    //alert('success generateData');
                })
                .error(function (err) {
                    alert('error generateData : ' + JSON.stringify(err));
                });
        };

        var service = {
            deleteAll: deleteAll,
            getAll: getAll,
            getAggregatedOperations: getAggregatedOperations,
            generateData: generateData
        };

        return service;
    }
})();