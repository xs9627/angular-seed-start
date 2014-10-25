'use strict';
var servicesConfig = [
    {
        name: 'WXMIS007',
        url: 'http://localhost/WEB.MonitorService/MonitorService.svc/XMLService/AppList'
    }
];

angular.module('myApp.ApplicationManagement', ['ui.utils', 'ngResource', 'ui.grid', 'ui.bootstrap'])

.controller('AppMgmt', ['$scope', '$resource', '$stateParams',
    function ($scope, $resource, $stateParams) {

        $scope.serverName = $stateParams.serverName;

        loadServicesConfig(servicesConfig);
        initView();
        loadData();

        function loadServicesConfig(servicesConfig) {
            $scope.serverNames = [];
            $scope.serviceList = [];
            servicesConfig.forEach(function (service) {
                $scope.serviceList.push({
                    name: service.name,
                    resource: $resource(service.url, null, {
                        'get': {
                            isArray: true
                        }
                    })
                });
                $scope.serverNames.push(service.name);
            });
        }

        function initView() {
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

        }

        function loadData() {
            if ($scope.serverName != 'All') {
                $scope.serviceList.forEach(function (service) {
                    if (service.name == $scope.serverName) {
                        getData(service.resource);
                    }
                });
            }

        }

        function getData(resource) {
            resource.get({}, function (appList) {
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
        }

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