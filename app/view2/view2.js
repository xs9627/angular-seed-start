'use strict';

angular.module('myApp.view2', ['ngRoute', 'ui.utils'])

.controller('View2Ctrl', ['$scope', function($scope) {
    $scope.blurCallback = function(evt) {
        alert("haha, input:" + evt.target.value);
    };
}]);