angular.module('managementCenter.iisController',['ui.bootstrap'])
.controller('AppPoolCtrl', 
            ['$scope', '$modal', function($scope, $modal){
                $scope.serverNames = ['1','2'];
                $scope.open = function(type){
                    var items;
                    if(type=='Add'){
                        items = [{server:'08', poolName:''}];
                    }else if(type=='Edit'){
                        items = [{server:'08', poolName:'Default'}];
                    }
                    $modal.open({
                        templateUrl:'applicationPoolEdit.html',
                        controller:'AppPoolEditCtrl',
                        resolve:{
                            items: function(){
                                return items;
                            }
                        }
                    });
                };
                
                
            }])
.controller('AppPoolEditCtrl',
           ['$scope', '$modalInstance', 'items', function($scope, $modalInstance, items){
               $scope.items = items;
               $scope.selected = {
                   item: null
               };
               $scope.ok = function(){
                   $modalInstance.close();
               };
               
               $scope.cancel = function(){
                   $modalInstance.dismiss('cancel');
                  
               };
           }])