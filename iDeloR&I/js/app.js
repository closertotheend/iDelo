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
	}).otherwise({
		redirectTo : '/allComplaints'
	});
} ]);

iDeloApp.factory('Auth', function() {
	var user;
	return {
		setUser : function(aUser) {
			user = aUser;
		},
		isLoggedIn : function() {
			return (user) ? user : false;
		}
	}
})

iDeloApp.run([ '$rootScope', '$location', 'Auth',
		function($rootScope, $location, Auth) {
			$rootScope.$on('$routeChangeStart', function() {
				if (!Auth.isLoggedIn()) {
					$(function() {
						$("li#citizen-registry").hide();
						$("li#all-citizens").hide();
					});
					console.log('DENY');
					$location.path('/search');
				} else {
					console.log('ALLOW');
					$location.path('/home');
				}
			});
		} ]);