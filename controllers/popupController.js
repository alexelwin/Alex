
alexApp.controller('staffController',['$scope', '$modal', function($scope,$modal){

                function openStaffEdit(){
                    var popup = $modal.open({
                        animation: $scope.animationsEnabled,
                        controller: 'testCtrl',
                        templateUrl: '/templates/popup.html'
                    });
                    popup.result.then(function (selectedItem) { return;});
            }
            init();
        }]);