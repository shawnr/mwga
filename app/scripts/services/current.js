'use strict';

/**
 * @ngdoc service
 * @name mwgaApp.current
 * @description
 * # current
 * Factory in the mwgaApp.
 */
angular.module('mwgaApp')
  .factory('current', function ($resource, weatherText) {
  // Service logic
  // ...

  // Public API here
  return $resource('http://api.openweathermap.org/data/2.5/weather?id=:id&units=imperial&APPID=d9947bfbe4d5f42fa39c0d5e08ff915f', {}, {
    query: {
      method:'GET',
      params:{
        id: '524901' // Moscow, Russia
      },
      isArray:false,
      transformResponse: function(data, headers){
        var weatherData = angular.fromJson(data);
        weatherData.weather[0].description = weatherText.getWeatherDescription(weatherData.weather[0].id);
        // console.log('updated CURRENT description to: ' + weatherData.weather[0].description);
        return weatherData;
      }
    }
  });
});
