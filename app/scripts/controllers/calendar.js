'use strict';

/**
 * @ngdoc function
 * @name appointment1App.controller:CalendarCtrl
 * @description
 * # CalendarCtrl
 * Controller of the appointment1App
 */
angular.module('Appointment1app')
  .controller('CalendarCtrl', function ($scope) {

        function dayClick() {
            console.log("DAY WAS CLICKED");
        }

        function eventDrop() {

        }

        function alertOnResize() {

        }

        $scope.eventSources = [];
        $scope.uiConfig = {
            calendar:{
                height: 450,
                editable: true,
                header:{
                    left: 'month basicWeek basicDay agendaWeek agendaDay',
                    center: 'title',
                    right: 'today prev,next'
                },
                dayClick: dayClick,
                eventDrop: eventDrop,
                eventResize: alertOnResize
            }
        };
  });
