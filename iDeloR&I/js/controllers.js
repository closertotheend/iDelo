var complaintsControllers = angular.module('complaintsControllers', []);

iDeloApp.controller('ComplaintsCtrl', [ '$scope', '$http',
		function($scope, $http) {
			$http.get('json/allComplaints.json').success(function(data) {
				$scope.complaints = data;
			});

			$scope.orderProp = 'type';
		} ]);

