'use strict';

// Declare app level module which depends on views, and components
angular.module('controlCenter', [
    'ui.router',
    'controlCenter.mtpController',
    'controlCenter.view2',
    'controlCenter.mainController',
    'controlCenter.version'
]).run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
  }
]).config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("MTP");
        $stateProvider.state("MTP", {
            url: '/MTP',
            template: '<div ui-view class="container">'
            //templateUrl: 'views/menu.html',
            //controller: 'mainController'
        }).state("MTP.ApplicationManage", {
            url: '/ApplicationManage/:serverName',
            templateUrl: 'views/MTP/applicationManage.html',
            controller: 'AppMgmt'
        }).state("MTP.empty",{
            url:'/empty/:temp',
            templateUrl:''
        }).state("IIS", {
            url: "/IIS",
            template: '<div ui-view class="container">'
        })
        .state("IIS.view2", {
            url: '/view2',
            templateUrl: 'views/view2.html',
            controller: 'View2Ctrl'
        })
    }
]);