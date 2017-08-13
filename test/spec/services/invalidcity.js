'use strict';

describe('Service: invalidCity', function () {

  // load the service's module
  beforeEach(module('mwgaApp'));

  // instantiate service
  var invalidCity;
  beforeEach(inject(function (_invalidCity_) {
    invalidCity = _invalidCity_;
  }));

  it('should do something', function () {
    expect(!!invalidCity).toBe(true);
  });

});
