'use strict';

eventsApp.filter('firstupper', function () {
    return function (input) {
        var firstLetter = input.substring(0, 1).toUpperCase();
        return firstLetter + input.substring(1, input.length);
    }
});


eventsApp.controller('EventController',
    function EventController($scope,eventData) {

        $scope.sortOrder = 'name';
        $scope.query = '';
        $scope.event = eventData.event;

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    });
