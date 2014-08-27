'use strict';

/**
 * @ngdoc function
 * @name appointment1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appointment1App
 */
angular.module('Appointment1app')
  .controller('MainCtrl', function ($scope) {

        $scope.templates = {
            myTemplate: "views/calendar.html"
        };

  });


