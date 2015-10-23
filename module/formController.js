         var mainApp = angular.module("mainApp", []);
         
         mainApp.controller('formController', function($scope) {
            $scope.reset = function(){
               $scope.firstName = "Mahesh";
               $scope.lastName = "Parashar";
               $scope.email = "MaheshParashar@tutorialspoint.com";
            }
            
            $scope.reset();
         });