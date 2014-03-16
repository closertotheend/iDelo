var iDeloApp = angular.module('iDeloApp', ['ngRoute','complaintsControllers' ]);

iDeloApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/allComplaints.html', {
		controller : 'PhoneListCtrl'
	}).when('/phones/:phoneId', {
		templateUrl : 'partials/phone-detail.html',
		controller : 'PhoneDetailCtrl'
	}).otherwise({
		redirectTo : '/phones'
	});
} ]);