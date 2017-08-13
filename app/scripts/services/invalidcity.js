'use strict';

/**
 * @ngdoc service
 * @name mwgaApp.invalidCity
 * @description
 * # invalidCity
 * Factory in the mwgaApp.
 */
angular.module('mwgaApp')
  .factory('invalidCity', function () {
    // Service logic
    // ...

    var messages = [
      'The weather there will never be great. Unless I move there and they elect me President.',
      'They might have weather there. They might have bad weather. They might have good weather. Who knows?',
      'The weather there is bad, bad, bad. Bad, dark clouds. Bad rain. Thunder. It could be good, but it isn\'t. We know that.',
      'They could have good weather. But they don\'t send us their best weather. They send us cold, clouds, rain. Probably.',
      'The weather there is not great. But it\'s better than the weather here sometimes! But we\'ll make the weather here so great that you will get sick of sunny days and moderate temps!',
      'The weather there is great. I wish we could have such good weather. But that\'s how things are now. Sad.',
      'They have the worst weather. I can\'t even imagine it. How bad could it be? Really bad.',
      'They are not sending us their best weather. They send us clouds. They send us rain. Rain is good sometimes, but not usually.'
    ];

    // Public API here
    return {
      getMessage: function () {
        return messages[Math.floor(Math.random()*messages.length)];
      }
    };
  });
