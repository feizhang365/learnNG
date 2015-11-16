var mainApp = angular.module("mainApp", ['ui.router']);

mainApp.controller('MainCtrl', ['$stateProvider',function($stateProvider) {
	$stateProvider.state('contacts', {
  		template: '<h1>My Contacts</h1>'
	});
}]);