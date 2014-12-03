angular.module('managementCenter.commonCtrl', [])
.controller('menuCtrl', ['$scope', '$state',
        function ($scope, $state) {
            var isMTP = $state.includes('MTP');
            if (isMTP) {
                $scope.menuList = [
                    {
                        label: 'Application Manage',
                        href: 'MTP.ApplicationManage'
                    },
                    {
                        label: 'Application Deploy',
                        href: 'MTP.empty({temp:1})'
                    },
                    {
                        label: 'Manage Config',
                        href: 'MTP.empty({temp:2})'
                    },
                    {
                        label: 'Dispatch',
                        href: 'MTP.empty({temp:3})'
                    },
                    {
                        label: 'View Config',
                        href: 'MTP.empty({temp:4})'
                    }
                ];
            }
}])
.controller('navbarController',['$scope', function($scope){
    $scope.collapsed = true;
    $scope.getCtrlScope = function() {
         return $scope;   
    }
    $scope.menus = [{"name":"IIS Management", "state" : "IIS", "items" : [{"label" : "Application Pool", "href" : "view2"}]}
                   ,{"name" : "MTP", "state" : "MTP", "items" : [{"label" : "Application Manage", "href" : "ApplicationManage"},
                                                                 {"label" : "Application Deploy", "href" : "empty({temp:1})"},
                                                                 {"label" : "Manage Config", "href" : "empty({temp:2})"},
                                                                 {"label" : "Dispatch", "href" : "empty({temp:3})"},
                                                                 {"label" : "View Config", "href" : "empty({temp:4})"},]}
                   ];
}]);