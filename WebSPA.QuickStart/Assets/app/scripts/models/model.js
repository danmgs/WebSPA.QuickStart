'use strict';

/* Model classes */
angular.module('assetsApp')
    .factory('Exercise', function () {
        function Exercise(args) {
            this.name = args.name;
            this.title = args.title;
            this.description = args.description;
            this.image = args.image;
            this.related = {};
            this.related.videos = (args.related && args.related.videos) ? args.related.videos : [];
            this.nameSound = args.nameSound;
            this.procedure = args.procedure;
        }
        return Exercise;
    });

angular.module('assetsApp')
    .factory('WorkoutPlan', function () {
        function WorkoutPlan(args) {
            this.exercises = args.exercises || [];
            this.name = args.name;
            this.title = args.title;
            this.description = args.description;
            this.restBetweenExercise = args.restBetweenExercise;
        };
        WorkoutPlan.prototype.totalWorkoutDuration = function () {
            if (this.exercises.length == 0) return 0;
            var total = 0;
            angular.forEach(this.exercises, function (exercise) {
                total = total + (exercise.duration ? exercise.duration : 0);
            });
            return (this.restBetweenExercise ? this.restBetweenExercise : 0) * (this.exercises.length - 1) + total;
        }
        return WorkoutPlan;
    });

angular.module('assetsApp')
    .factory('Restaurant', function () {
        function Restaurant(args) {
            this.name = args.name;
            this.borough = args.borough;
            this.cuisine = args.cuisine;
        }
        return Restaurant;
    });