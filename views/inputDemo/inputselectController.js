var app = angular.module('mainApp',[]);
app.controller('MainCtrl',['$scope',function($scope){

	$scope.sourceList = [
       {'id': '10005', 'name': "Anne"},
       {'id': '10006', 'name': "Brian"},
       {'id': '10007', 'name': "Charlie"}
     ];
     $scope.selectedItemExact = $scope.sourceList[0];
     $scope.selectedItemSimilar = {'id': '10007', 'name': "Charlie"};

}]);