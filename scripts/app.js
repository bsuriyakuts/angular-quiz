var myApp = angular.module('myApp', [ 'ngRoute','ngSanitize' ]);
myApp.config(['$httpProvider', function ($httpProvider) {
	  //Reset headers to avoid OPTIONS request (aka preflight)
	  $httpProvider.defaults.headers.common = {};
	  $httpProvider.defaults.headers.post = {};
	  $httpProvider.defaults.headers.put = {};
	  $httpProvider.defaults.headers.patch = {};
	}]);
	
myApp.config([ '$routeProvider', '$locationProvider','$httpProvider',
		function($routeProvider, $locationProvider, $routeParams,$httpProvider) {
	$routeProvider
			.when('/quiz',{
				templateUrl: '/quiz.html',
				controller: 'quizCtrl'
			})			
			.otherwise({
				redirectTo : '/',
			});

			$locationProvider.html5Mode({
				enabled : false,
				requireBase : false
			});
			
		} ]);
