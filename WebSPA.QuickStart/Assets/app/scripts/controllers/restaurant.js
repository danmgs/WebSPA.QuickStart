/**
 * @ngdoc function
 * @name assetsApp.controller:RestaurantCtrl
 * @description
 * # AboutCtrl
 * Controller of the assetsApp
 */

angular.module('assetsApp')
    .value("appEvents", {
        restaurant: { added: "event:restaurant:added" }
    });

(function () {
    'use strict';

    var controllerId = 'RestaurantCtrl';
    angular.module('assetsApp').controller(controllerId, ['$rootScope', '$scope', '$http', '$uibModal', 'mongolabService', '$timeout', 'appEvents', RestaurantCtrl]);

    function RestaurantCtrl($rootScope, $scope, $http, $uibModal, mongolabService, $timeout, appEvents) {
        var vm = this;

        vm.dataLoaded = false;

        vm.title = "RestaurantCtrl";

        vm.restaurants = [];

        var PopupController = function ($rootScope, $scope, $modalInstance, Restaurant) {

            var d = new Date().formatMMDDYYYY();
            $scope.newrestaurant = {                
                name: 'name' + '_' + d,
                borough: 'borough' + '_' + d,
                cuisine: 'cuisine' + '_' + d
            }
            $scope.addRestaurant = function () {

                var restaurantToSave = new Restaurant($scope.newrestaurant);
                mongolabService.addRestaurant(restaurantToSave).then(function (data) {
                    $modalInstance.close();
                    $rootScope.$broadcast(appEvents.restaurant.added, 'myarg');
                });                
            };
        };
        PopupController['$inject'] = ['$rootScope', '$scope', '$modalInstance', 'Restaurant'];

        vm.showRestaurant = function () {
            var dialog = $uibModal.open({
                templateUrl: 'views/partials/popup/addRestaurant.html',
                controller: PopupController,
                size: 'lg'
            });
        };

        $rootScope.$on(appEvents.restaurant.added, function (event, arg) {
            alert('Emit received !!');
            console.log(arg);
            init();
        });

        function init() {

            vm.dataLoaded = false;

            mongolabService.getRestaurants().then(function (data) {
                vm.restaurants = data;
                
                $timeout(function () {
                    vm.dataLoaded = true;
                    $scope.$apply();
                }, 1000);
            });
        }

        init();
    }
})();
