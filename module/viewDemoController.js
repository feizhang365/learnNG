var mainApp = angular.module("mainApp", ['ngRoute']);
mainApp.config(['$routeProvider', ['$routeProvider',function($routeProvider) {
	$routeProvider.when('/addStudent', {
	   templateUrl: 'addStudent.html',
	   controller: 'AddStudentController'
	}).when('/viewStudents', {
	   templateUrl: 'viewStudents.html',
	   controller: 'ViewStudentsController'
	}).otherwise({
	   redirectTo: '/addStudent'
	});
}]);

mainApp.controller('AddStudentController', ['$scope',function($scope) {
	$scope.message = "This page will be used to display add student form";
}]);

mainApp.controller('ViewStudentsController', ['$scope',function($scope) {
	$scope.message = "This page will be used to display all the students";
}]);