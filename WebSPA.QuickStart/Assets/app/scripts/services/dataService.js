/**
 * @ngdoc service
 * @name assetsApp.dataService
 * @description
 * # dataService
 * Service in the assetsApp.
 */
(function () {
    'use strict';

    var serviceId = 'dataService';

    angular.module('assetsApp').factory(serviceId, ['$http', dataService]);

    function dataService($http) {

        var getAllCars = function (count) {
		    alert(hostapi);
            return $http.get(hostapi + '/api/Garage/GetAllCars')
                .success(function (dto) {
                    alert('success getAllCars');
                })
                .error(function (err) {
                    alert('error getAllCars : ' + JSON.stringify(err));
                });
        };

        var getData = function (count) {
            return $http.get(hostapi + '/api/Values/GetData' + '?count=' + count)
                .success(function (dto) {
                    alert('success getData');
                })
                .error(function (err) {
                    alert('error getData : ' + JSON.stringify(err));
                });
        };

        var insertCarsData = function (count) {
            return $http.post(hostapi + '/api/Garage/InsertCarsData' + '?count=' + count)
                .success(function (dto) {
                    alert('success insertCarsData');
                })
                .error(function (err) {
                    alert('error insertCarsData : ' + JSON.stringify(err));
                });
        };

        var service = {
            getAllCars: getAllCars,
            getData: getData,
            insertCarsData: insertCarsData
        };

        return service;
    }
})();