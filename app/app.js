'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'myApp.main',
    'ui.router'
])
//.config(['$routeProvider', function($routeProvider) {
//  //$routeProvider.otherwise({redirectTo: '/view2'});
//}]);
.run(['$rootScope','$state','$stateParams',
      function ($rootScope, $state, $stateParams) {
          $rootScope.$state = $state;
          $rootScope.$stateParams = $stateParams;
      }
     ]
)
.config(['$stateProvider','$urlRouterProvider',
        function($stateProvider,$urlRouterProvider){
            
        }
        ]
);

