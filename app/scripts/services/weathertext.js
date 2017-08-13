'use strict';

/**
 * @ngdoc service
 * @name mwgaApp.weatherText
 * @description
 * # weatherText
 * Factory in the mwgaApp.
 */
angular.module('mwgaApp')
  .factory('weatherText', function () {
    var weatherMessages = {
      // thunderstorm 232, 231, 202, 201, 200
      thunderstorm: [
        'text'
      ],
      // lightning 221, 212, 211, 210
      lightning: [
        'text'
      ],
      // sprinkle 500, 321, 301, 300
      sprinkle: [
        'text'
      ],
      // rain 504, 503, 502, 501, 314, 312, 311, 302
      rain: [
        'text'
      ],
      // rain-mix 620, 616, 615, 612, 611, 511, 310
      rainMix: [
        'text'
      ],
      // showers 701, 522, 521, 520, 313
      showers: [
        'text'
      ],
      // storm-showers 901, 521
      stormShowers: [
        'text'
      ],
      // snow 903, 622, 621, 601, 600
      snow: [
        'text'
      ],
      // sleet 602
      sleet: [
        'text'
      ],
      // smoke 711
      smoke: [
        'text'
      ],
      // day-haze 721
      dayHaze: [
        'text'
      ],
      // dust 762, 761, 731
      dust: [
        'text'
      ],
      // fog 741
      fog: [
        'text'
      ],
      // cloudy-gusts 801, 802, 803, 771
      cloudyGusts: [
        'text'
      ],
      // tornado 900, 781
      tornado: [
        'text'
      ],
      // day-sunny 800
      daySunny: [
        'text'
      ],
      // cloudy 804
      cloudy: [
        'text'
      ],
      // hurricane 902
      hurricane: [
        'text'
      ],
      // hot 904
      hot: [
        'text'
      ],
      // windy 957, 905
      windy: [
        'text'
      ],
      // hail 906
      hail: [
        'text'
      ]
    }

    var mapText = function(id){
      var returnMessage = "The weather there is going to be very unknown. Unknowable even. Who really knows? Nobody. But we're gonna figure it out.";
      // id should be weather condition ID from OWM.org

      // thunderstorm 232, 231, 202, 201, 200

      // lightning 221, 212, 211, 210

      // sprinkle 500, 321, 301, 300

      // rain 504, 503, 502, 501, 314, 312, 311, 302

      // rain-mix 620, 616, 615, 612, 611, 511, 310

      // showers 701, 522, 521, 520, 313

      // storm-showers 901, 521

      // snow 903, 622, 621, 601, 600

      // sleet 602

      // smoke 711

      // day-haze 721

      // dust 762, 761, 731

      // fog 741

      // cloudy-gusts 801, 802, 803, 771

      // tornado 900, 781

      // day-sunny 800

      // cloudy 804

      // hurricane 902

      // hot 904

      // windy 957, 905

      // hail 906

      return returnMessage;
    }

    // Public API here
    return {
      getWeatherDescription: function (id) {
        return mapText(id);
      }
    };
  });
