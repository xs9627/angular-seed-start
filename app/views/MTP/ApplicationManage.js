'use strict';

angular.module('myApp.view3', ['ngRoute', 'ui.utils', 'ngResource', 'ui.grid','ui.bootstrap'])

.factory("AppList", function ($resource) {
    return $resource("http://localhost/WEB.MonitorService/MonitorService.svc/XMLService/AppList", null, {
        'get': {
            isArray: true
        }
    });
})

.controller('AppMgmt', ['$scope', 'AppList',
    function ($scope, AppList) {
        $scope.blurCallback = function (evt) {
            alert("haha, input:" + evt.target.value);
        };

        $scope.$scope = $scope;
        $scope.gridOptions = {
            columnDefs: [
                {
                    field: 'Server',
                    displayName: 'Server',
                    width: 100
                },
                {
                    field: 'ApplicationName',
                    displayName: 'Application Name',
                    width: 180
                },
                {
                    field: 'Status',
                    displayName: 'Status',
                    width: 80
                },
                {
                    field: 'EnabledProcessors',
                    displayName: 'Enabled Processors'
                },
                {
                    field: 'Actions',
                    displayName: 'Actions',
                    width: 200,
                    //cellTemplate: '<button ng-click="getExternalScopes().startApp(row.entity)">Start</button>'
                    cellTemplate: '<div class="btn-group"><label class="btn btn-primary" ng-click="getExternalScopes().startApp(row.entity)" ng-model="radioModel" btn-radio="\'Left\'">Left</label>'+
        '<label class="btn btn-primary" ng-model="radioModel" btn-radio="\'Middle\'">Middle</label>'+
        '<label class="btn btn-primary" ng-model="radioModel" btn-radio="\'Right\'">Right</label></div>'
                }
            ]
        };

        $scope.startApp = function (row) {
            console.log(row);
        };

        var entry = AppList.get({}, function (appList) {
            console.log(appList);
            var myData = [];
            appList.forEach(function (app) {
                myData.push({
                    Server: app.ServerName,
                    ApplicationName: app.Name,
                    Status: app.Status,
                    EnabledProcessors: findActiveProcessor(app.Processors)

                });
            });
            $scope.gridOptions.data = myData;
        });

        function findActiveProcessor(processList) {
            var version;
            processList.forEach(function (proc) {
                if (proc.Enabled) {
                    version = proc.Version;
                    return;
                }
            });
            return version;
        }
}]);