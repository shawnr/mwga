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
        "It's going to rain very hard. It will be a little bit scary. A little bit noisy. But we will do OK.",
        "If Obama had done his job, we wouldn't have this thunderstorm to worry about. But here we are.",
        "We will use the full force of the American military to fight this thunderstorm.",
        "I will present a plan in 30 days for eliminating this thunderstorm once and for all."
      ],
      // lightning 221, 212, 211, 210
      lightning: [
        "There will be lightning. Which is electricity. I know all about it because my grandfather was an electrician back in World War II and he told me everything.",
        "Electricity is very powerful stuff. It's hot. And tingly. I know, because I have a very good brain."
      ],
      // sprinkle 500, 321, 301, 300
      sprinkle: [
        "There will be small showers. Sprinkles. It will sprinkle, but only a small amount.",
        "The rain will be so hard today because the Democrats continue to refuse to work with me.",
        "Unlike my own strong hands, these sprinkles will be very small rain showers."
      ],
      // rain 504, 503, 502, 501, 314, 312, 311, 302
      rain: [
        "It's going to be wet. Rainy. The rain will fall. Be careful out there.",
        "It's not going to rain. The main stream media says it will, but it won't. Trust me. I know.",
        "If it DOES rain today, it's because the Democrats failed to work with us on healthcare.",
        "Maybe if Obama had been more like Putin then we wouldn't have all this rain now."
      ],
      // rain-mix 620, 616, 615, 612, 611, 511, 310
      rainMix: [
        "It will be rain, but not just rain. Rain and something else. Rain plus something extraordinary. Because it is America, and that's who we do.",
        "It might be rainy. It might not. Depends on which side you believe. There are many sides to this issues. We will figure it out.",
        "This great military of ours is so great. This rain will not keep them from winning!"
      ],
      // showers 701, 522, 521, 520, 313
      showers: [
        "There will be showers. It will shower us with wealth. Showers of gold. Golden showers. For all of us. So wonderful.",
        "The main stream media is continuing to promote the LIE that there will be showers today. Do not believe it. There will be no showers.",
        "Unlike my hands, which are beautiful and larger than normal, showers are smaller than rain."
      ],
      // storm-showers 901, 521
      stormShowers: [
        "There will be showers, but there will also be storms. We will enjoy the showers. But we will not enjoy the loud storms.",
        "There will be thunderstorms. And there will be showers. There will be some of both. This is an issue with many sides."
      ],
      // snow 903, 622, 621, 601, 600
      snow: [
        "Snow will fall and it will be white and pure. So beautiful.",
        "As my father taught me: Snow is cold."
      ],
      // sleet 602
      sleet: [
        "Nobody likes sleet. But we must live with it because this is the system we have. For now.",
        "Is it ice? Or is it rain? Is it very wet snow? There are many sides to this issue. It's a bad time for America."
      ],
      // smoke 711
      smoke: [
        "It will be smokey. I remember smoking Cuban cigars rolled by seven-year-old girls in 1984 with Fidel Castro. What a guy, that Fidel. A leader!",
        "You know what they say: Where there's smoke there's fire. I don't know who made that up, but I know they were one of our greatest patriots. It was my grandfather.",
        "Covfefe."
      ],
      // day-haze 721
      dayHaze: [
        "Today will be hazy. Nobody will really know what's out there. But do any of us really know? What is out there? Who knows? Maybe someday we will. But not now. Let's figure that out.",
        "The main stream media wants you to believe it will be hazy today. But that is just what it looks like when we put America first!"
      ],
      // dust 762, 761, 731
      dust: [
        "The dust will be terrible today. Just horrible. Bad hombre dust that will make you have to use that nose thing.",
        "Why worry about a little dust? I'm a very intelligent guy, and I'm not bothered by dust. We won't let them keep telling us to be worried about dust!"
      ],
      // fog 741
      fog: [
        "It's foggy out there. Can't see a thing. Terrible for golf.",
        "Some people like fog. And I respect fog. But I like sunshine better."
      ],
      // cloudy-gusts 801, 802, 803, 771
      cloudyGusts: [
        "The clouds are out and the wind is blowing hard. Might be a good day for a hat. I sell those. Best hats ever made. Made in America. From REAL cotton.",
        "We have problems with sunshine and cloudiness on both sides. This is bad for our country."
      ],
      // tornado 900, 781
      tornado: [
        "A tornado may happen. Or it may be happening. I'm not sure. I don't pay attention to that sort of thing. Good luck.",
        "The main stream media will tell you to take shelter from this tornado, but that's FAKE NEWS. It will be windy, but we will make it.",
        "If this tornado keeps threatening the area, it will feel the full fire and fury of the US military."
      ],
      // day-sunny 800
      daySunny: [
        "It's a lovely, sunny day. I'd go golfing, but I have too much work to do. Well, maybe in the afternoon. We'll see.",
        "It's a great day for a round of golf at one of my many lovely golf courses. We have the best greens. They are the best.",
        "Let me tell you, folks, you're going to get sick and tired of all this sunshine.",
        "This is what it looks like when we put America First!"
      ],
      // cloudy 804
      cloudy: [
        "The clouds are out, but it's OK: There is no rain in the forecast. We will be OK, and we will make it.",
        "It could be cloudy. It could be sunny. It could be something else. Who knows?",
        "Some people like clouds. Some people do not. At least we can agree: we all hate rain."
      ],
      // hurricane 902
      hurricane: [
        "A hurricane might be happening. Or maybe not. I would tell you to check with the weather guys, but I think I cut that budget. Good luck!",
        "Hurricanes are a story made up by the Chinese to get back at our great country for our success. Hillary would tell you to take cover from it, but I know those things and they're not that bad. Very big. Very windy. But not that bad."
      ],
      // hot 904
      hot: [
        "It's going to be hot. Really hot. No good for working, but it's a great day to take out the yacht. Oh, and the ladies on these hot days. Let me tell you: They wear, like, almost NOTHING!",
        "How did it get so hot? Was it Russia? They say it was. Maybe. But maybe not.",
        "You know who is good at dealing with heat like this? The Iranians."
      ],
      // windy 957, 905
      windy: [
        "Wind is blowing around everywhere. Be careful out there. Might want to buy a MAGA hat. #MAGA",
        "Sure, it's windy. But look at us: Are we so innocent?"
      ],
      // hail 906
      hail: [
        "There is hail. It might be the size of a pea. It might be more like a golf ball. Nobody knows. But we're going to find out.",
        "Once a hail stone broke the window of my limo. I had to use a different limo for, like, two weeks. It was my personal Vietnam."
      ]
    }

    var mapText = function(id){
      var returnMessage = "The weather there is going to be very unknown. Unknowable even. Who really knows? Nobody. But we're gonna figure it out.";
      // id should be weather condition ID from OWM.org


      if ([232, 231, 202, 201, 200].indexOf(id) >= 0){
        // thunderstorm 232, 231, 202, 201, 200
        returnMessage = weatherMessages.thunderstorm[Math.floor(Math.random()*weatherMessages.thunderstorm.length)];
      } else if ([221, 212, 211, 210].indexOf(id) >= 0){
        // lightning 221, 212, 211, 210
        returnMessage = weatherMessages.lightning[Math.floor(Math.random()*weatherMessages.lightning.length)];
      } else if ([500, 321, 301, 300].indexOf(id) >= 0){
        // sprinkle 500, 321, 301, 300
        returnMessage = weatherMessages.sprinkle[Math.floor(Math.random()*weatherMessages.sprinkle.length)];
      } else if ([500, 321, 301, 300].indexOf(id) >= 0){
        // rain 504, 503, 502, 501, 314, 312, 311, 302
        returnMessage = weatherMessages.rain[Math.floor(Math.random()*weatherMessages.rain.length)];
      } else if ([620, 616, 615, 612, 611, 511, 310].indexOf(id) >= 0){
        // rain-mix 620, 616, 615, 612, 611, 511, 310
        returnMessage = weatherMessages.rainMix[Math.floor(Math.random()*weatherMessages.rainMix.length)];
      } else if ([701, 522, 521, 520, 313].indexOf(id) >= 0){
        // showers 701, 522, 521, 520, 313
        returnMessage = weatherMessages.showers[Math.floor(Math.random()*weatherMessages.showers.length)];
      } else if ([901, 521].indexOf(id) >= 0){
        // storm-showers 901, 521
        returnMessage = weatherMessages.stormShowers[Math.floor(Math.random()*weatherMessages.stormShowers.length)];
      } else if ([903, 622, 621, 601, 600].indexOf(id) >= 0){
        // snow 903, 622, 621, 601, 600
        returnMessage = weatherMessages.snow[Math.floor(Math.random()*weatherMessages.snow.length)];
      } else if ([602].indexOf(id) >= 0){
        // sleet 602
        returnMessage = weatherMessages.sleet[Math.floor(Math.random()*weatherMessages.sleet.length)];
      } else if ([711].indexOf(id) >= 0){
        // smoke 711
        returnMessage = weatherMessages.smoke[Math.floor(Math.random()*weatherMessages.smoke.length)];
      } else if ([711].indexOf(id) >= 0){
        // day-haze 721
        returnMessage = weatherMessages.dayHaze[Math.floor(Math.random()*weatherMessages.dayHaze.length)];
      } else if ([762, 761, 731].indexOf(id) >= 0){
        // dust 762, 761, 731
        returnMessage = weatherMessages.dust[Math.floor(Math.random()*weatherMessages.dust.length)];
      } else if ([741].indexOf(id) >= 0){
        // fog 741
        returnMessage = weatherMessages.fog[Math.floor(Math.random()*weatherMessages.fog.length)];
      } else if ([801, 802, 803, 771].indexOf(id) >= 0){
        // cloudy-gusts 801, 802, 803, 771
        returnMessage = weatherMessages.cloudyGusts[Math.floor(Math.random()*weatherMessages.cloudyGusts.length)];
      } else if ([900, 781].indexOf(id) >= 0){
        // tornado 900, 781
        returnMessage = weatherMessages.tornado[Math.floor(Math.random()*weatherMessages.tornado.length)];
      } else if ([800].indexOf(id) >= 0){
        // day-sunny 800
        returnMessage = weatherMessages.daySunny[Math.floor(Math.random()*weatherMessages.daySunny.length)];
      } else if ([804].indexOf(id) >= 0){
        // cloudy 804
        returnMessage = weatherMessages.cloudy[Math.floor(Math.random()*weatherMessages.cloudy.length)];
      } else if ([902].indexOf(id) >= 0){
        // hurricane 902
        returnMessage = weatherMessages.hurricane[Math.floor(Math.random()*weatherMessages.hurricane.length)];
      } else if ([904].indexOf(id) >= 0){
        // hot 904
        returnMessage = weatherMessages.hot[Math.floor(Math.random()*weatherMessages.hot.length)];
      } else if ([957, 905].indexOf(id) >= 0){
        // windy 957, 905
        returnMessage = weatherMessages.windy[Math.floor(Math.random()*weatherMessages.windy.length)];
      } else if ([906].indexOf(id) >= 0){
        // hail 906
        returnMessage = weatherMessages.hail[Math.floor(Math.random()*weatherMessages.hail.length)];
      }
      return returnMessage;
    }

    // Public API here
    return {
      getWeatherDescription: function (id) {
        return mapText(id);
      }
    };
  });
