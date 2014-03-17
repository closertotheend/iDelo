var iDeloApp = angular.module('iDeloApp',
		[ 'ngRoute', 'complaintsControllers' ]);

iDeloApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'indexInfo.html'
	}).when('/complaints/:citizenId', {
		templateUrl : 'complaints.html',
		controller : 'ComplaintsCtrl'
	}).when('/allCitizens', {
		templateUrl : 'allCitizens.html',
		controller : 'CitizensCtrl'
	}).when('/myComplaints', {
		templateUrl : 'myComplaints.html',
		controller : 'ComplaintsCtrl'
	}).when('/newComplaint', {
		templateUrl : 'newComplaint.html'
	}).when('/citizen/:citizenId', {
		templateUrl : 'citizen.html',
		controller : 'CitizenCtrl'
	}).when('/complaint', {
		templateUrl : 'complaint.html'
	}).when('/search/:query', {
		templateUrl : 'search.html',
		controller : 'SearchCtrl'
	}).when('/search', {
		templateUrl : 'search.html',
		controller : 'SearchCtrl'
	}).when('/newComplaintType', {
        templateUrl : 'newCrimeTypeAddition.html'
    }).otherwise({
		redirectTo : '/allComplaints'
	});
} ]);