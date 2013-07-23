'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope,restEventData) {
        $scope.saveEvent = function (event, newEventForm) {
            //console.log(newEventForm);
            if (newEventForm.$valid) {
                //window.alert('saved');
                restEventData.save(event);
            }
        };

        $scope.cancelEdit = function () {
            window.location = "/Home/Index";
        };

    }

);