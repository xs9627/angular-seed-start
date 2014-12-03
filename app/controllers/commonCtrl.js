angular.module('managementCenter.commonCtrl', []).controller('navCollapseCtrl', ['$scope', function($scope) {
    $scope.isCollapsed = true;
}]).controller('menuCtrl', ['$scope', '$state',
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
}]);