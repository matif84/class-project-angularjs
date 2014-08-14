'use strict';

/**
 * @ngdoc function
 * @name Appointment1app.controller:AppointmentmakerCtrl
 * @description
 * # AppointmentmakerCtrl
 * Controller of the Appointment1app
 */
angular.module('Appointment1app',["firebase"]);
  .controller('AppointmentMakerCtrl', function ($scope,$firebase) {
  
var Firebase = require("firebase");

    var ref = new Firebase("http://dazzling-fire-6922.firebaseIO.com");

      // create a synchronized array for use in our HTML code
    $scope.messages = sync.$asArray();

        $scope.newAppointment = {
            name: ""
        };

        //Check out https://github.com/tewen/angular-fire-polls
        $scope.onSubmitAppointment = function () {
            console.log("SENDING " + JSON.stringify($scope.newAppointment) + " TO FIREBASE");
        };
  });
