'use strict';

/* Services */
angular.module('assetsApp')
    .value("appEvents", {
        workout: { exerciseStarted: "event:workout:exerciseStarted" }
    });

angular.module('assetsApp')
    .provider("mongolabService", function () {
        var apiUrl = "https://api.mongolab.com/api/1/databases/";
        var collectionsUrl = null;
        var database = null;
        var apiKey = null;

        this.configure = function (dbName) {
            database = database;
            collectionsUrl = apiUrl + dbName + "/collections";
        }

        this.$get = ['Restaurant', '$http', '$q', '$resource', function (Restaurant, $http, $q, $resource) {
            var service = {};
            var workouts = [];
            var exercises = [];

            service.Restaurants = $resource(collectionsUrl + "/restaurants/:id", {}, { update: { method: 'PUT' } });

            service.getRestaurants = function () {
                return $http.get(collectionsUrl + "/restaurants")
                        .then(function (response) {
                            return response.data.map(function (rest) {
                                return new Restaurant(rest);
                            });
                        });
            };

            //service.updateWorkout = function (workout) {
            //    return service.getWorkout(workout.name)
            //        .then(function (original) {
            //            if (original) {
            //                var workoutToSave = angular.copy(workout);
            //                workoutToSave.exercises = workoutToSave.exercises.map(function (exercise) { return { name: exercise.details.name, duration: exercise.duration } });
            //                return $http.put(collectionsUrl + "/workouts/" + original.name, workoutToSave);
            //            }
            //        })
            //        .then(function (response) {
            //            return workout;
            //        });
            //};

            service.addRestaurant = function (restaurant) {
                if (restaurant.name) {
                    var restaurantToSave = angular.copy(restaurant);
                    return $http.post(collectionsUrl + "/restaurants", restaurantToSave)
                                .then(function (response) {
                                    return restaurant;
                                });
                }
            };

            service.deleteRestaurant = function (restaurantId) {
                return $http.delete(collectionsUrl + "/restaurants/" + restaurantId);
            };

            return service;
        }];

        var init = function () {
        };

        init();
    });

angular.module('assetsApp')
    .provider('ApiKeyAppenderInterceptor', function () {
        var apiKey = null;
        this.setApiKey = function (key) {
            apiKey = key;
        }
        this.$get = ['$q', function ($q) {
            return {
                'request': function (config) {
                    if (apiKey && config && config.url.toLowerCase().indexOf("https://api.mongolab.com") >= 0) {
                        config.params = config.params || {};
                        config.params.apiKey = apiKey;
                    }
                    return config || $q.when(config);
                }
            }
        }];
    });