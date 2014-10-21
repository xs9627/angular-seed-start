angular.module('myApp.main', [
    'ui.router',
    'myApp.main',
    'myApp.view1',
    'myApp.view2',
    'myApp.version',
])

.config(
    ['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise("");
            $stateProvider.state("main", {
                url: '',
                templateUrl: 'views/main.html'
            })
                .state("main.view1", {
                    url: '/view1',
                    templateUrl: 'view1/view1.html',
                    controller: 'View1Ctrl'

                })
                .state("main.view2", {
                    url: '/',
                    templateUrl: 'view2/view2.html',
                    controller: 'View2Ctrl'
                })
        }
        ]

);