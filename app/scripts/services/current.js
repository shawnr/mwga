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
        if (weatherData.weather[0].id === 800 && weatherData.wind.speed<15 && weatherData.main.temp > 58){
          weatherData.golf = true;
          //console.log('Good weather for golf.');
        } else {
          //console.log('Bad weather for golf.');
          weatherData.golf = false;
        }
        weatherData.wind.dir = getWindDirection(weatherData.wind.deg);
        //console.log("Wind direction is: "+weatherData.wind.dir);
        return weatherData;
      }
    }
  });
});

var getWindDirection = function(deg){
  //   N
  // 348.75 - 11.25
  if (deg > 348.75 || deg <= 11.25){
    return "N";
  }
  // NNE
  // 11.25 - 33.75
  else if (deg > 11.25 && deg <= 33.75){
    return "NNE";
  }
  // NE
  // 33.75 - 56.25
  else if (deg > 33.75 && deg <= 56.25){
    return "NE";
  }
  // ENE
  // 56.25 - 78.75
  else if (deg > 56.25 && deg <= 78.75){
    return "ENE";
  }
  // E
  // 78.75 - 101.25
  else if (deg > 78.75 && deg <= 101.25){
    return "E";
  }
  // ESE
  // 101.25 - 123.75
  else if (deg > 101.25 && deg <= 123.75){
    return "ESE";
  }
  // SE
  // 123.75 - 146.25
  else if (deg > 123.75 && deg <= 146.25){
    return "SE";
  }
  // SSE
  // 146.25 - 168.75
  else if (deg > 146.25 && deg <= 168.75){
    return "SSE";
  }
  // S
  // 168.75 - 191.25
  else if (deg > 168.75 && deg <= 191.25){
    return "S";
  }
  // SSW
  // 191.25 - 213.75
  else if (deg > 191.25 && deg <= 213.75){
    return "SSW";
  }
  // SW
  // 213.75 - 236.25
  else if (deg > 213.75 && deg <= 236.25){
    return "SW";
  }
  // WSW
  // 236.25 - 258.75
  else if (deg > 236.25 && deg < 258.75){
    return "WSW";
  }
  // W
  // 258.75 - 281.25
  else if (deg > 258.75 && deg < 281.25){
    return "W";
  }
  // WNW
  // 281.25 - 303.75
  else if (deg > 281.25 && deg < 303.75){
    return "WNW";
  }
  // NW
  // 303.75 - 326.25
  else if (deg > 303.75 && deg < 326.25){
    return "NW";
  }
  // NNW
  // 326.25 - 348.75
  else if (deg > 326.75 && deg < 348.25){
    return "NNW";
  }
  else {
    return "???";
  }
}
