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
    })
    .filter('qsDateFilter', function ($filter) {
        return function (input) {
            if (input == null) { return ""; }
            var _date = $filter('date')(new Date(input), 'MMM dd yyyy');
            return _date.toUpperCase();
        };
    })
    .filter('qsTimeFilter', function ($filter) {
        return function (input) {
            if (input == null) { return ""; }
            var _date = $filter('date')(new Date(input), 'HH:mm:ss');
            return _date.toUpperCase();
        };
    })
    .filter('qsTypeOpeFilter', function ($filter) {
        return function (input) {
            if (input == null) { return "N/A"; }
            var _typOpe = (input == 0) ? "Credit":"Debit";
            return _typOpe.toUpperCase();
        };
    });



