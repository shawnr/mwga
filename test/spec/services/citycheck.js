'use strict';

describe('Service: citycheck', function () {

  // load the service's module
  beforeEach(module('mwgaApp'));

  // instantiate service
  var citycheck;
  beforeEach(inject(function (_citycheck_) {
    citycheck = _citycheck_;
  }));

  it('should do something', function () {
    expect(!!citycheck).toBe(true);
  });

});
