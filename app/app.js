'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
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
            $urlRouterProvider.otherwise("/view1");
            $stateProvider.state("view1",{
                url:'/view1',
                templateUrl:'view1/view1.html',
                controller: 'View1Ctrl'
            })
            .state("view2",{
                url:'/view2',
                templateUrl:'view2/view2.html'
            })
        }
        ]
);

