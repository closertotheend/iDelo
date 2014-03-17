var iDeloApp = angular.module('iDeloApp',
		[ 'ngRoute', 'complaintsControllers' ]);

iDeloApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'indexInfo.html',
	}).when('/allComplaints', {
		templateUrl : 'allComplaints.html',
		controller : 'ComplaintsCtrl'
	}).when('/allCitizens', {
		templateUrl : 'allCitizens.html',
		controller : 'CitizensCtrl'
	}).when('/myComplaints', {
		templateUrl : 'myComplaints.html',
		controller : 'ComplaintsCtrl'
	}).when('/newComplaint', {
		templateUrl : 'newComplaint.html',
	}).when('/citizen', {
		templateUrl : 'citizen.html',
	}).when('/complaint', {
		templateUrl : 'complaint.html',
	}).when('/search', {
		templateUrl : 'search.html',
	}).otherwise({
		redirectTo : '/allComplaints'
	});
} ]);