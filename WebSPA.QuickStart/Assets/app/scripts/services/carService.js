/**
 * @ngdoc service
 * @name assetsApp.carService
 * @description
 * # dataService
 * Service in the assetsApp.
 */
(function () {
    'use strict';

    var serviceId = 'carService';

    angular.module('assetsApp').factory(serviceId, ['$http', 'myHostObject', carService]);

    function carService($http, myHostObject) {

        var deleteAllCars = function () {
            return $http.get(myHostObject.url + '/api/Garage/DeleteAllCars')
                .success(function () {
                    alert('success deleteAllCars');
                })
                .error(function (err) {
                    alert('error deleteAllCars : ' + JSON.stringify(err));
                });
        };

        var getAllCars = function (count) {
            return $http.get(myHostObject.url + '/api/Garage/GetAllCars')
                .success(function () {
                    //alert('success getAllCars');
                })
                .error(function (err) {
                    alert('error getAllCars : ' + JSON.stringify(err));
                });
        };

        var getData = function (count) {
            return $http.get(myHostObject.url + '/api/Values/GetData' + '?count=' + count)
                .success(function () {
                    //alert('success getData');
                })
                .error(function (err) {
                    alert('error getData : ' + JSON.stringify(err));
                });
        };

        var insertCarsData = function (count) {
            //alert(hostapi + '/api/Garage/InsertCarsData' + '?count=' + count);
            return $http.get(myHostObject.url + '/api/Garage/InsertCarsData' + '?count=' + count)
                .success(function () {
                    //alert('success insertCarsData');
                })
                .error(function (err) {
                    alert('error insertCarsData : ' + JSON.stringify(err));
                });
        };

        var service = {
            deleteAllCars: deleteAllCars,
            getAllCars: getAllCars,
            getData: getData,
            insertCarsData: insertCarsData
        };

        return service;
    }
})();