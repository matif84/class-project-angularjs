'use strict';

/**
 * @ngdoc function
 * @name Appointment1app.controller:AppointmentmakerCtrl
 * @description
 * # AppointmentmakerCtrl
 * Controller of the Appointment1app
 */
angular.module('Appointment1app')
    .controller('AppointmentMakerCtrl', ['$scope', 'syncData', function ($scope, syncData) {

        var ref = syncData('/messages');

        // create a synchronized array for use in our HTML code
        $scope.messages = ref.$asArray();

        $scope.newAppointment = {
            name: "",
            email: "",
            notes: ""
        };

        //Check out https://github.com/tewen/angular-fire-polls
        $scope.onSubmitAppointment = function () {
            ref.$push($scope.newAppointment);
        };
    }]);
