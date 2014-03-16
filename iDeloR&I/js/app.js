var iDeloApp = angular.module('iDeloApp',
		[ 'ngRoute', 'complaintsControllers' ]);

iDeloApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'indexInfo.html',
		controller : 'ComplaintsCtrl'
	}).when('/allComplaints', {
		templateUrl : 'allComplaints.html',
		controller : 'ComplaintsCtrl'
	}).when('/allCitizens', {
		templateUrl : 'allCitizens.html',
		controller : 'ComplaintsCtrl'
	}).when('/myComplaints', {
		templateUrl : 'myComplaints.html',
		controller : 'ComplaintsCtrl'
	}).when('/newComplaint', {
		templateUrl : 'newComplaint.html',
		controller : 'ComplaintsCtrl'
	}).when('/citizen', {
		templateUrl : 'citizen.html',
		controller : 'ComplaintsCtrl'
	}).when('/complaint', {
		templateUrl : 'complaint.html',
		controller : 'ComplaintsCtrl'
	}).when('/search', {
		templateUrl : 'search.html',
		controller : 'ComplaintsCtrl'
	}).otherwise({
		redirectTo : '/allComplaints'
	});
} ]);