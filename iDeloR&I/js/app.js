var iDeloApp = angular.module('iDeloApp',
		[ 'ngRoute', 'complaintsControllers' ]);

iDeloApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/allComplaints', {
		templateUrl : 'allComplaints.html',
		controller : 'ComplaintsCtrl'
	}).when('/citizen', {
		templateUrl : 'citizen.html',
		controller : 'ComplaintsCtrl'
	}).otherwise({
		redirectTo : '/allComplaints'
	});
} ]);