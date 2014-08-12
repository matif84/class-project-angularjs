'use strict';

/**
 * @ngdoc function
 * @name appointment1App.controller:AppointmentmakerCtrl
 * @description
 * # AppointmentmakerCtrl
 * Controller of the appointment1App
 */
angular.module('Appointment1App')
  .controller('AppointmentMakerCtrl', function ($scope) {

        $scope.newAppointment = {
            name: ""
        };

        //Check out https://github.com/tewen/angular-fire-polls
        $scope.onSubmitAppointment = function () {
            console.log("SENDING " + JSON.stringify($scope.newAppointment) + " TO FIREBASE");
        };
  });
