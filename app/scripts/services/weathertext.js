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
        "I will present a plan in 30 days for eliminating this thunderstorm once and for all.",
        "There was a thunderstorm on Inauguration Day until God parted the clouds to let me speak. I was beautiful. And my words were the best.",
        "I have stopped more thunderstorms during my administration than any other US President. Only Mussolini ranked higher than me!"
      ],
      // lightning 221, 212, 211, 210
      lightning: [
        "There will be lightning. Which is electricity. I know all about it because my grandfather was an electrician back in World War II and he told me everything.",
        "Electricity is very powerful stuff. It's hot. And tingly. I know, because I have a very good brain.",
        "The lightning strikes like we will strike North Korea (or Venezuala, or Iran, or Syria, etc.): With Fire and Fury!",
        "Fire and fury!"
      ],
      // sprinkle 500, 321, 301, 300
      sprinkle: [
        "There will be small showers. Sprinkles. It will sprinkle, but only a small amount.",
        "The rain will be so hard today because the Democrats continue to refuse to work with me.",
        "Unlike my own strong hands, these sprinkles will be very small rain showers.",
        "On Inauguration Day a light sprinkle turned into a raging storm until I began to speak."
      ],
      // rain 504, 503, 502, 501, 314, 312, 311, 302
      rain: [
        "It's going to be wet. Rainy. The rain will fall. Be careful out there.",
        "It's not going to rain. The main stream media says it will, but it won't. Trust me. I know.",
        "If it DOES rain today, it's because the Democrats failed to work with us on healthcare.",
        "Maybe if Obama had been more like Putin then we wouldn't have all this rain now.",
        "It's definitely not raining today, no matter what the main stream media wants us to believe."
      ],
      // rain-mix 620, 616, 615, 612, 611, 511, 310
      rainMix: [
        "It will be rain, but not just rain. Rain and something else. Rain plus something extraordinary. Because it is America, and that's who we do.",
        "It might be rainy. It might not. Depends on which side you believe. There are many sides to this issues. We will figure it out.",
        "This great military of ours is so great. This rain will not keep them from winning!",
        "The rain is really terrible. A new low for Mother Nature. She's just a nasty woman. She rains out of her sky, she rains out of her wherever.",
        "Inauguration Day was a mix of rain and lies from the main stream media about the largest crowd ever assembled."
      ],
      // showers 701, 522, 521, 520, 313
      showers: [
        "There will be showers. It will shower us with wealth. Showers of gold. Golden showers. For all of us. So wonderful.",
        "The main stream media is continuing to promote the LIE that there will be showers today. Do not believe it. There will be no showers.",
        "Unlike my hands, which are beautiful and larger than normal, showers are smaller than rain.",
        "Showers are coming, they say. The showers will get us all damp, they say. Well, who do they think they are? We won't have showers. We will have sunshine!",
        "These showers will be stronger than Hillary Clinton's tears after she realized I won the popular election."
      ],
      // storm-showers 901, 521
      stormShowers: [
        "There will be showers, but there will also be storms. We will enjoy the showers. But we will not enjoy the loud storms.",
        "There will be thunderstorms. And there will be showers. There will be some of both. This is an issue with many sides.",
        "With the rain, and the wind, and the thunder and lightning. It's like Vietnam out there. Except worse.",
        "These showers will rain down like the tears from my many, many enemies. Happy Mother's Day."
      ],
      // snow 903, 622, 621, 601, 600
      snow: [
        "Snow will fall and it will be white and pure. So beautiful.",
        "As my father taught me: Snow is cold. So we don't want that. Let's take care of it.",
        "I love snow, so beautiful and white. Some people don't. But some people know what I mean. I love whites.",
        "The snow is just gorgeous. Big, big drifts remind me of, well, you know. The things we like best about women. Right?",
        "It's cold. It's frigid. It's not a good day for us. This is what happens when we don't put America First."
      ],
      // sleet 602
      sleet: [
        "Nobody likes sleet. But we must live with it because this is the system we have. For now.",
        "Is it ice? Or is it rain? Is it very wet snow? There are many sides to this issue. It's a bad time for America.",
        "It's wet. It's cold. It's icy. No more questions.",
        "Today will be beautiful beyond belief."
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
        "The main stream media wants you to believe it will be hazy today. But that is just what it looks like when we put America first!",
        "Covfefe."
      ],
      // dust 762, 761, 731
      dust: [
        "The dust will be terrible today. Just horrible. Bad hombre dust that will make you have to use that nose thing.",
        "Why worry about a little dust? I'm a very intelligent guy, and I'm not bothered by dust. We won't let them keep telling us to be worried about dust!",
        "Covfefe."
      ],
      // fog 741
      fog: [
        "It's foggy out there. Can't see a thing. Terrible for golf.",
        "Some people like fog. And I respect fog. But I like sunshine better.",
        "It's so foggy that the main stream media couldn't even see the full size of the audience at my rally. Biggest audience yet."
      ],
      // cloudy-gusts 801, 802, 803, 771
      cloudyGusts: [
        "The clouds are out and the wind is blowing hard. Might be a good day for a hat. I sell those. Best hats ever made. Made in America. From REAL cotton.",
        "We have problems with sunshine and cloudiness on both sides. This is bad for our country.",
        "We have the clouds. We have the wind. What else? Who really knows?"
      ],
      // tornado 900, 781
      tornado: [
        "A tornado may happen. Or it may be happening. I'm not sure. I don't pay attention to that sort of thing. Good luck.",
        "The main stream media will tell you to take shelter from this tornado, but that's FAKE NEWS. It will be windy, but we will make it.",
        "If this tornado keeps threatening the area, it will feel the full fire and fury of the US military.",
        "Covfefe.",
        "I have stopped more tornadoes during my administration than any other US President. Only Putin ranks higher than me!"
      ],
      // day-sunny 800
      daySunny: [
        "It's a lovely, sunny day. I'd go golfing, but I have too much work to do. Well, maybe in the afternoon. We'll see.",
        "It's a great day for a round of golf at one of my many lovely golf courses. We have the best greens. They are the best.",
        "Let me tell you, folks, you're going to get sick and tired of all this sunshine.",
        "This is what it looks like when we put America First!",
        "It's sunny. Let's take the boat out. I have a friend who bought a boat after he sold his company and made a lot of money. He did things on that boat, well, I won't repeat. But you can imagine. You're a person of the world.",
        "Good sun. Very warm. Good genes.",
        "This is the kind of day when we can make a lot of money. I mean a lot of money. Like, lots. You won't believe it.",
        "It's warm. Too warm? Or not warm enough? There are many sides to this issue."
      ],
      // cloudy 804
      cloudy: [
        "The clouds are out, but it's OK: There is no rain in the forecast. We will be OK, and we will make it.",
        "It could be cloudy. It could be sunny. It could be something else. Who knows?",
        "Some people like clouds. Some people do not. At least we can agree: we all hate rain.",
        "Clouds are like Democrats coming to ruin an otherwise great healthcare bill. The greatest. Sad.",
        "The clouds are bad, people. They bring rain. They bring bad air. They are bad hombres."
      ],
      // hurricane 902
      hurricane: [
        "A hurricane might be happening. Or maybe not. I would tell you to check with the weather guys, but I think I cut that budget. Good luck!",
        "Hurricanes are a story made up by the Chinese to get back at our great country for our success. Hillary would tell you to take cover from it, but I know those things and they're not that bad. Very big. Very windy. But not that bad.",
        "Sad!",
        "I have stopped more hurricanes during my administration than any other US President. Only Pol Pot ranked higher than me!"
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
        "Sure, it's windy. But look at us: Are we so innocent?",
        "Not a good day for golfing."
      ],
      // hail 906
      hail: [
        "There is hail. It might be the size of a pea. It might be more like a golf ball. Nobody knows. But we're going to find out.",
        "Once a hail stone broke the window of my limo. I had to use a different limo for, like, two weeks. It was my personal Vietnam.",
        "A terrible day for golf. And America.",
        "I have stopped more hail during my administration than any other US President. Only Mussolini ranked higher than me!"
      ]
    };
    var usedText = [];
    var mapText = function(id){
      var returnMessage = "The weather there is going to be very unknown. Unknowable even. Who really knows? Nobody. But we're gonna figure it out.";
      // id should be weather condition ID from OWM.org
      var textCounter = 0;
      var stopTrying = false;
      var tryLimit = 0;
      while (!stopTrying){
        if ([232, 231, 202, 201, 200].indexOf(id) >= 0){
          // thunderstorm 232, 231, 202, 201, 200
          tryLimit = weatherMessages.thunderstorm.length;
          returnMessage = weatherMessages.thunderstorm[Math.floor(Math.random()*weatherMessages.thunderstorm.length)];
        } else if ([221, 212, 211, 210].indexOf(id) >= 0){
          // lightning 221, 212, 211, 210
          tryLimit = weatherMessages.lightning.length;
          returnMessage = weatherMessages.lightning[Math.floor(Math.random()*weatherMessages.lightning.length)];
        } else if ([500, 321, 301, 300].indexOf(id) >= 0){
          // sprinkle 500, 321, 301, 300
          tryLimit = weatherMessages.sprinkle.length;
          returnMessage = weatherMessages.sprinkle[Math.floor(Math.random()*weatherMessages.sprinkle.length)];
        } else if ([500, 321, 301, 300].indexOf(id) >= 0){
          // rain 504, 503, 502, 501, 314, 312, 311, 302
          tryLimit = weatherMessages.rain.length;
          returnMessage = weatherMessages.rain[Math.floor(Math.random()*weatherMessages.rain.length)];
        } else if ([620, 616, 615, 612, 611, 511, 310].indexOf(id) >= 0){
          // rain-mix 620, 616, 615, 612, 611, 511, 310
          tryLimit = weatherMessages.rainMix.length;
          returnMessage = weatherMessages.rainMix[Math.floor(Math.random()*weatherMessages.rainMix.length)];
        } else if ([701, 522, 521, 520, 313].indexOf(id) >= 0){
          // showers 701, 522, 521, 520, 313
          tryLimit = weatherMessages.showers.length;
          returnMessage = weatherMessages.showers[Math.floor(Math.random()*weatherMessages.showers.length)];
        } else if ([901, 521].indexOf(id) >= 0){
          // storm-showers 901, 521
          tryLimit = weatherMessages.stormShowers.length;
          returnMessage = weatherMessages.stormShowers[Math.floor(Math.random()*weatherMessages.stormShowers.length)];
        } else if ([903, 622, 621, 601, 600].indexOf(id) >= 0){
          // snow 903, 622, 621, 601, 600
          tryLimit = weatherMessages.snow.length;
          returnMessage = weatherMessages.snow[Math.floor(Math.random()*weatherMessages.snow.length)];
        } else if ([602].indexOf(id) >= 0){
          // sleet 602
          tryLimit = weatherMessages.sleet.length;
          returnMessage = weatherMessages.sleet[Math.floor(Math.random()*weatherMessages.sleet.length)];
        } else if ([711].indexOf(id) >= 0){
          // smoke 711
          tryLimit = weatherMessages.smoke.length;
          returnMessage = weatherMessages.smoke[Math.floor(Math.random()*weatherMessages.smoke.length)];
        } else if ([711].indexOf(id) >= 0){
          // day-haze 721
          tryLimit = weatherMessages.dayHaze.length;
          returnMessage = weatherMessages.dayHaze[Math.floor(Math.random()*weatherMessages.dayHaze.length)];
        } else if ([762, 761, 731].indexOf(id) >= 0){
          // dust 762, 761, 731
          tryLimit = weatherMessages.dust.length;
          returnMessage = weatherMessages.dust[Math.floor(Math.random()*weatherMessages.dust.length)];
        } else if ([741].indexOf(id) >= 0){
          // fog 741
          tryLimit = weatherMessages.fog.length;
          returnMessage = weatherMessages.fog[Math.floor(Math.random()*weatherMessages.fog.length)];
        } else if ([801, 802, 803, 771].indexOf(id) >= 0){
          // cloudy-gusts 801, 802, 803, 771
          tryLimit = weatherMessages.cloudyGusts.length;
          returnMessage = weatherMessages.cloudyGusts[Math.floor(Math.random()*weatherMessages.cloudyGusts.length)];
        } else if ([900, 781].indexOf(id) >= 0){
          // tornado 900, 781
          tryLimit = weatherMessages.tornado.length;
          returnMessage = weatherMessages.tornado[Math.floor(Math.random()*weatherMessages.tornado.length)];
        } else if ([800].indexOf(id) >= 0){
          // day-sunny 800
          tryLimit = weatherMessages.daySunny.length;
          returnMessage = weatherMessages.daySunny[Math.floor(Math.random()*weatherMessages.daySunny.length)];
        } else if ([804].indexOf(id) >= 0){
          // cloudy 804
          tryLimit = weatherMessages.cloudy.length;
          returnMessage = weatherMessages.cloudy[Math.floor(Math.random()*weatherMessages.cloudy.length)];
        } else if ([902].indexOf(id) >= 0){
          // hurricane 902
          tryLimit = weatherMessages.hurricane.length;
          returnMessage = weatherMessages.hurricane[Math.floor(Math.random()*weatherMessages.hurricane.length)];
        } else if ([904].indexOf(id) >= 0){
          // hot 904
          tryLimit = weatherMessages.hot.length;
          returnMessage = weatherMessages.hot[Math.floor(Math.random()*weatherMessages.hot.length)];
        } else if ([957, 905].indexOf(id) >= 0){
          // windy 957, 905
          tryLimit = weatherMessages.windy.length;
          returnMessage = weatherMessages.windy[Math.floor(Math.random()*weatherMessages.windy.length)];
        } else if ([906].indexOf(id) >= 0){
          // hail 906
          tryLimit = weatherMessages.hail.length;
          returnMessage = weatherMessages.hail[Math.floor(Math.random()*weatherMessages.hail.length)];
        } else {
          stopTrying = true;
        }

        // Verify we got a unique line (if possible).
        if (usedText.indexOf(returnMessage) === -1) {
          // This is an acceptable new message.
          //console.log('Successful text selection: ' + returnMessage);
          usedText.push(returnMessage);
          stopTrying = true;
        } else {
          if (textCounter < tryLimit){
            textCounter++;
            //console.log('Trying again to select good text.');
          } else {
            //console.log('Hit try limit. Going with: ' + returnMessage);
            stopTrying = true;
          }
        }

      }


      return returnMessage;
    };

    // Public API here
    return {
      getWeatherDescription: function (id) {
        return mapText(id);
      }
    };
  });
