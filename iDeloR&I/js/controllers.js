var complaintsControllers = angular.module('complaintsControllers', []);

iDeloApp.controller('ComplaintsCtrl', [ '$scope', '$http',
		function($scope, $http) {
			$http.get('json/allComplaints.json').success(function(data) {
				$scope.complaints = data;
			});
			$scope.orderProp = 'type';
		} ]);

iDeloApp.controller('CitizensCtrl', [ '$scope', '$http',
		function($scope, $http) {
			$http.get('json/allCitizens.json').success(function(data) {
				$scope.citizens = data;
			});
			$scope.orderProp = 'type';
		} ]);
