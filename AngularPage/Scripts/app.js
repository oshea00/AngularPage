'use strict';

// Setup console.log for IE 
//if (typeof console.log == "object" && Function.prototype.bind && console)
//{
//   ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"]
//        .forEach(function (method) {
//                     console[method] = this.call(console[method], console);
//        }, Function.prototype.bind);
//}

// Register application module
var eventsApp = angular.module('eventsApp', ['ngResource','ngCookies'])
    .factory('myCache', function ($cacheFactory) {
        return $cacheFactory('myCache', { capacity: 3 });
    });

