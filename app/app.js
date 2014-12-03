'use strict';

// Declare app level module which depends on views, and components
angular.module('managementCenter', [
    'ui.router',
    'ui.bootstrap',
    'managementCenter.commonCtrl',
    'managementCenter.mtpController',
    'managementCenter.view2',
    'managementCenter.version'
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
<<<<<<< HEAD
            //template: '<div ui-view class="container">'
            templateUrl: 'views/menu.html',
            controller: 'menuCtrl'
=======
            template: '<div ui-view class="container">'
            //templateUrl: 'views/menu.html',
            //controller: 'mainController'
>>>>>>> 96ed7cde8e1dc79e2f16cd841a57fdc63feeda6e
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