'use strict';

describe('Service: weatherText', function () {

  // load the service's module
  beforeEach(module('mwgaApp'));

  // instantiate service
  var weatherText;
  beforeEach(inject(function (_weatherText_) {
    weatherText = _weatherText_;
  }));

  it('should do something', function () {
    expect(!!weatherText).toBe(true);
  });

});
