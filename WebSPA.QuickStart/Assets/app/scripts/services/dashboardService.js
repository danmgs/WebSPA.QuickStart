/**
 * @ngdoc service
 * @name assetsApp.dashboardService
 * @description
 * # dataService
 * Service in the assetsApp.
 */
(function () {
    'use strict';

    var serviceId = 'dashboardService';

    angular.module('assetsApp').factory(serviceId, ['$http', 'myHostObject', dashboardService]);

    function dashboardService($http, myHostObject) {

        var get = function () {
            return $http.get(myHostObject.url + '/api/XXX/get')
                .success(function () {
                    alert('success get');
                })
                .error(function (err) {
                    alert('error get : ' + JSON.stringify(err));
                });
        };


        var get = {
            get: get,
        };

        return service;
    }
})();