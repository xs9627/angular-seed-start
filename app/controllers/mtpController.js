angular.module('managementCenter.mtpController',['ui.utils', 'ui.grid', 'ui.grid.autoResize', 'ui.grid.selection'
    , 'managementCenter.mtpServers'])
.controller('AppMgmt', ['$scope', 'monServerList', '$stateParams', '$http',
    function ($scope, monServerList, $stateParams, $http) {
        $scope.serverName = $stateParams.serverName;

        loadServicesConfig();
        initView();
        loadData();

        function loadServicesConfig() {
            $scope.serverNames = [];
            monServerList.forEach(function (service) {
                $scope.serverNames.push(service.name);
            });
            $scope.serverNames.push('All');
        }

        function initView() {
            $scope.$scope = $scope;
            $scope.gridOptions = {
                enableRowSelection: true,
                enableSelectAll: true,
                multiSelect: true,
                data: []
            };
            $scope.gridOptions.columnDefs = [
                {
                    field: 'Server',
                    displayName: 'Server',
                    width: '25%'
                },
                {
                    field: 'ApplicationName',
                    displayName: 'Application Name',
                    width: '35%'
                },
                {
                    field: 'Status',
                    displayName: 'Status',
                    width: '15%'
                },
                {
                    field: 'EnabledProcessors',
                    displayName: 'Enabled Processors',
                    width: '*'
                },
 //                    {
 //                        field: 'Actions',
 //                        displayName: 'Actions',
 //                        width: 200,
 //                        cellTemplate: '<input class="btn btn-default" click="getExternalScopes().startApp(row.entity)" type="button" value="Start">'
 //                        //                    cellTemplate: '<div class="btn-group"><label class="btn btn-primary" ng-click="getExternalScopes().startApp(row.entity)" ng-model="radioModel" btn-radio="\'Left\'">Left</label>'+
 //                        //        '<label class="btn btn-primary" ng-model="radioModel" btn-radio="\'Middle\'">Middle</label>'+
 //                        //        '<label class="btn btn-primary" ng-model="radioModel" btn-radio="\'Right\'">Right</label></div>'
 //                }
            ];

            $scope.gridOptions.onRegisterApi = function (gridApi) {
                //set gridApi on scope
                $scope.gridApi = gridApi;
                gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                    var msg = 'row selected ' + row.isSelected;
                    $log.log(msg);
                });

                //                gridApi.selection.on.rowSelectionChangedBatch($scope, function (rows) {
                //                    var msg = 'rows changed ' + rows.length;
                //                    $log.log(msg);
                //                });
            };
            $scope.startApp = function (row) {
                console.log(row);
            };


        }

        function loadData() {
            monServerList.forEach(function (service) {
                if ($scope.serverName == 'All' || service.name == $scope.serverName) {
                    getData(service);
                }
            });
        }

        function getData(service) {
            if (service.name == 'WXMIS008') {
                $http.get('data/wxmis008_data.json').success(function (data) {
                    if ($scope.gridOptions.data == undefined) {
                        $scope.gridOptions.data = [];
                    }
                    data.forEach(function (app) {
                        $scope.gridOptions.data.push({
                            Server: app.ServerName,
                            ApplicationName: app.Name,
                            Status: app.Status,
                            EnabledProcessors: findActiveProcessor(app.Processors)

                        });
                    });
                });
            } else {
                service.resource.get({}, function (appList) {
                    console.log(appList);
                    if ($scope.gridOptions.data == undefined) {
                        $scope.gridOptions.data = [];
                    }
                    appList.forEach(function (app) {
                        $scope.gridOptions.data.push({
                            Server: app.ServerName,
                            ApplicationName: app.Name,
                            Status: app.Status,
                            EnabledProcessors: findActiveProcessor(app.Processors)

                        });
                    });
                });
            }
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