/**
 * @ngdoc service
 * @name assetsApp.customerService
 * @description
 * # dataService
 * Service in the assetsApp.
 */
(function () {
    'use strict';

    var serviceId = 'customerService';

    angular.module('assetsApp').factory(serviceId, ['$http', 'myHostObject', customerService]);

    function customerService($http, myHostObject) {

        var submit = function (dto) {
            return $http.post(myHostObject.url + "/api/Customer/Submit", dto)
                .success(function () {
                    //alert('success insertCarsData');
                })
                .error(function (err) {
                    alert('error submit : ' + JSON.stringify(err));
                });
        };

        var service = {
            submit: submit
        };

        return service;
    }
})();