//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.controller('homeController', ['$scope', function($scope){
	$scope.test = 'test 1';
	console.log($scope.test);
}]);


weatherApp.controller('forecastController', ['$scope', function($scope){
	$scope.test = 'test 2';
	console.log($scope.test);
}]);
