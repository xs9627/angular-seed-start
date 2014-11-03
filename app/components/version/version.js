'use strict';

angular.module('controlCenter.version', [
  'controlCenter.version.interpolate-filter',
  'controlCenter.version.version-directive'
])

.value('version', '0.1');
