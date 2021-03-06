'use strict';

/**
 * @ngdoc service
 * @name mwgaApp.forecast
 * @description
 * # forecast
 * Factory in the mwgaApp.
 */
angular.module('mwgaApp')
  .factory('forecast', function ($resource, weatherText) {
    // Service logic
    // ...

    // Public API here
    return $resource('http://api.openweathermap.org/data/2.5/forecast/daily?id=:cityID&cnt=16&units=imperial&APPID=d9947bfbe4d5f42fa39c0d5e08ff915f', {}, {
      query: {
        method:'GET',
        params:{
          cityID: '524901' // Moscow, Russia
        },
        isArray:false,
        transformResponse: function(data, headers){
          var weatherData = angular.fromJson(data);
          for (var i=0; i<weatherData.list.length; i++){
              weatherData.list[i].weather[0].description = weatherText.getWeatherDescription(weatherData.list[i].weather[0].id);
              if (weatherData.list[i].weather[0].id === 800 && weatherData.list[i].speed<15 && weatherData.list[i].temp.max > 58){
                weatherData.list[i].weather[0].golf = true;
              } else {
                weatherData.list[i].weather[0].golf = false;
              }
          }
          return weatherData;
        }
      }
    });
  });
