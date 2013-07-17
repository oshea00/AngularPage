'use strict';

eventsApp.factory('eventData', function () {
    return {
        event: {
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
    };
});
