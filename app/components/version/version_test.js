'use strict';

describe('managementCenter.version module', function() {
  beforeEach(module('managementCenter.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
