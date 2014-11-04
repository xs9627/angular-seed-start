angular.module('controlCenter.mainController',[])
.controller('mainController',['$state', function($state){
    var isMTP = $state.includes('MTP');
}]);