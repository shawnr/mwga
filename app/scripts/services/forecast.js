'use strict';

/**
 * @ngdoc service
 * @name mwgaApp.forecast
 * @description
 * # forecast
 * Factory in the mwgaApp.
 */
angular.module('mwgaApp')
  .factory('forecast', function ($resource) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=d9947bfbe4d5f42fa39c0d5e08ff915f', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '524901' // Moscow, Russia
        },
        isArray:false
      }
    });
  });
