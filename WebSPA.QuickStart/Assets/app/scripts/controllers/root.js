'use strict';

angular.module('assetsApp')
  .controller('RootController', ['$scope', '$uibModal', '$translate', '$location', function ($scope, $uibModal, $translate, $location) {
      $scope.showWorkoutHistory = function () {
          var dialog = $uibModal.open({
              templateUrl: 'views/partials/popup/popup.html',
              controller: PopupController,
              size: 'lg'
          });
      };

      var PopupController = function ($scope, $modalInstance/*, workoutHistoryTracker*/) {
          $scope.search = {};
          $scope.search.completed = '';
          //$scope.history = workoutHistoryTracker.getHistory();

          $scope.ok = function () {
              $modalInstance.close();
          };
      };
      PopupController['$inject'] = ['$scope', '$modalInstance'/*, 'workoutHistoryTracker'*/];

      $scope.$on('$routeChangeSuccess', function (event, current, previous) {
          $scope.currentRoute = current;
          $scope.routeHasError = false;
      });

      $scope.$on('$routeChangeError', function (event, current, previous, error) {
          if (error.status === 404) {
              $scope.routeHasError = true;
              $scope.routeError = current.routeErrorMessage;
          }

      });

      $scope.setLanguage = function (languageKey) {
          $translate.use(languageKey);
          $scope.language = languageKey;

      };

      $scope.navClass = function (page) {
          var currentRoute = $location.path().substring(1) || 'home';
          //console.log(currentRoute);
          return page === currentRoute || new RegExp(page).test(currentRoute) ? 'active' : '';
      };
      
      var init = function () {
          $scope.language = $translate.preferredLanguage();
      };
      init();
  }]);
