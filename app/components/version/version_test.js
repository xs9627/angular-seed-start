'use strict';

describe('controlCenter.version module', function() {
  beforeEach(module('controlCenter.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
