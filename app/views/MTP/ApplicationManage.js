'use strict';
var servicesConfig = [
    {
        name: 'WXMIS007',
        url: 'http://localhost/WEB.MonitorService/MonitorService.svc/XMLService/AppList'
    }
];

angular.module('myApp.ApplicationManagement', ['ui.utils', 'ngResource', 'ui.grid', 'ui.bootstrap'])

.controller('AppMgmt', ['$scope', '$resource',
    function ($scope, $resource) {
        $scope.blurCallback = function (evt) {
            alert("haha, input:" + evt.target.value);
        };

        $scope.servicesConfig = servicesConfig;
        $scope.hstep = 1;
        
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
                    displayName: 'Enabled Processors',
                    width: 180
                },
                {
                    field: 'Actions',
                    displayName: 'Actions',
                    width: 200,
                    cellTemplate: '<input class="btn btn-default" click="getExternalScopes().startApp(row.entity)" type="button" value="Start">'
                    //                    cellTemplate: '<div class="btn-group"><label class="btn btn-primary" ng-click="getExternalScopes().startApp(row.entity)" ng-model="radioModel" btn-radio="\'Left\'">Left</label>'+
                    //        '<label class="btn btn-primary" ng-model="radioModel" btn-radio="\'Middle\'">Middle</label>'+
                    //        '<label class="btn btn-primary" ng-model="radioModel" btn-radio="\'Right\'">Right</label></div>'
                }
            ]
        };

        $scope.startApp = function (row) {
            console.log(row);
        };
        
        $scope.getServiceInfo = function (serviceName) {
            console.log(serviceName);
        };

        var serviceList = [];
        servicesConfig.forEach(function (service) {
            serviceList.push({
                name: service.name,
                resource: $resource(service.url, null, {
                    'get': {
                        isArray: true
                    }
                })
            });
        });

        var entry = serviceList[0].resource.get({}, function (appList) {
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