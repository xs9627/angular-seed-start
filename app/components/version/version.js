'use strict';

angular.module('managementCenter.version', [
  'managementCenter.version.interpolate-filter',
  'managementCenter.version.version-directive'
])

.value('version', '0.1');
