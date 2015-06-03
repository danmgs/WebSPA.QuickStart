'use strict';

/**
 * @ngdoc filter
 * @name assetsApp.filter:filters
 * @function
 * @description
 * # filters
 * Filter in the assetsApp.
 */
angular.module('assetsApp')
  .filter('filters', function () {
    return function (input) {
      return 'filters filter: ' + input;
    };
  });
