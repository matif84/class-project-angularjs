'use strict';

/**
 * @ngdoc function
 * @name Appointment1app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the Appointment1app
 */
angular.module('Appointment1app', ["firebase"])
  .controller('MainCtrl', function ($scope,$firebase) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

