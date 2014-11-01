'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'ui.router',
        'myApp.ApplicationManagement',
    'myApp.view2',
    'myApp.version'
])
//.config(['$routeProvider', function($routeProvider) {
//  //$routeProvider.otherwise({redirectTo: '/view2'});
//}]);
.run(['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }
     ])
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("MTP");
            $stateProvider.state("MTP", {
                url: '/MTP',
                //template: '<div ui-view class="container">'
                templateUrl: 'views/MTP/main.html',
            })
                .state("MTP.ApplicationManage", {
                    url: '/ApplicationManage/:serverName',
                    templateUrl: 'views/MTP/applicationManage.html',
                    controller: 'AppMgmt'

                })
                .state("view2", {
                    url: '/view2',
                    templateUrl: 'view2/view2.html',
                    controller: 'View2Ctrl'
                })
        }
        ]);