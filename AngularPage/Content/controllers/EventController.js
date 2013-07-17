'use strict';

eventsApp.filter('firstupper', function () {
    return function (input) {
        var firstLetter = input.substring(0, 1).toUpperCase();
        return firstLetter + input.substring(1, input.length);
    }
});


eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.sortOrder = 'name';
        $scope.query = '';
        $scope.event = {
            name: "Angular Boot Camp",
            date: new Date(),
            time: '10:30 am',
            rating: 3.2,
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/Content/images/russell_logo.gif',
            sessions: [
                {
                    name: 'Directives Masterclass Beginner',
                    creatorName: "Mike O'Shea",
                    duration: '1 hour',
                    level: 'advanced',
                    abstract: 'This is a sample description for the session abstract',
                    upVoteCount: 10
                },
                {
                    name: 'scopes for fun and profit',
                    level: 'beginner',
                    upVoteCount: 0
                },
                {
                    name: 'well-behaved Controllers',
                    level: 'advanced',
                    upVoteCount: 0
                }
            ]
        }

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    });
