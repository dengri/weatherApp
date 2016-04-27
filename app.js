//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function($routeProvider){
	$routeProvider

		.when('/', {
			templateUrl: 'pages/home.htm',
			controller: 'homeController'
		})


		.when('/forecast', {
			templateUrl: 'pages/forecast.htm',
			controller: 'forecastController'
		})
});


weatherApp.controller('homeController', ['$scope', function($scope){
	$scope.test = 'test 1';
	console.log($scope.test);
}]);


weatherApp.controller('forecastController', ['$scope', function($scope){
	$scope.test = 'test 2';
	console.log($scope.test);
}]);
