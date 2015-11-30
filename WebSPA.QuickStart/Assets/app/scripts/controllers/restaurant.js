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
            $scope.cancel = function () {
                $modalInstance.close();
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

        // ---------------- Search Engine ----------------

        // Instantiate the bloodhound suggestion engine
        var searchRestaurantsList = new Bloodhound({
            datumTokenizer: function (d) { return Bloodhound.tokenizers.whitespace(d.name); },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: [
              // default list items
              //{ name: 'one' },
              //{ name: 'two' },
              //{ name: 'three' },
              //{ name: 'four' },
              //{ name: 'five' },
              //{ name: 'six' },
              //{ name: 'seven' },
              //{ name: 'eight' },
              //{ name: 'nine' },
              //{ name: 'ten' }
            ]
        });

        // Allows the addition of local datum
        // values to a pre-existing bloodhound engine.
        vm.addValue = function (data) {
            angular.forEach(data, function (value, key) {
                searchRestaurantsList.add(value);
            });
        };

        // Typeahead options object
        vm.exampleOptions = {
            highlight: true
        };

        // Single dataset example
        vm.exampleData = {
            displayKey: 'name',
            source: searchRestaurantsList.ttAdapter()
        };

        vm.resultSearchSelected = null;

        $scope.$watch("vm.resultSearchSelected", function (value) {
            if (value != null && value != '') {
                console.log('You choose ' + vm.resultSearchSelected);
            }
        });

        // ---------------- Search Engine ----------------


        function init() {

            vm.dataLoaded = false;

            // initialize the bloodhound suggestion engine
            searchRestaurantsList.initialize();

            mongolabService.getRestaurants().then(function (data) {
                vm.restaurants = data;
                vm.addValue(data);
                
                $timeout(function () {
                    vm.dataLoaded = true;
                    $scope.$apply();
                }, 1000);
            });
        }

        init();
    }
})();
