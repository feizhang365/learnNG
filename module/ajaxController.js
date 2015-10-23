var ajaxApp =  angular.module("ajaxApp",[]);
ajaxApp.controller("studentController",function($scope,$http){
   var url = "/data/student.txt";
   $http.get(url).success( function(response) {
      $scope.students = response; 
   });
});