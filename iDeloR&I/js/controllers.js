var complaintsControllers = angular.module('complaintsControllers', []);

iDeloApp.controller('ComplaintsCtrl', [
		'$scope',
		'$routeParams',
		'$http',
		function($scope, $routeParams, $http) {
			$http.get('json/complaints/' + $routeParams.citizenId + '.json')
					.success(function(data) {
						$scope.complaints = data;
					});
		} ]);

iDeloApp.controller('CitizensCtrl', [ '$scope', '$http',
		function($scope, $http) {
			$http.get('json/allCitizens.json').success(function(data) {
				$scope.citizens = data;
			});
			$scope.orderProp = 'type';
		} ]);

iDeloApp.controller('CitizenCtrl', [
		'$scope',
		'$routeParams',
		'$http',
		function($scope, $routeParams, $http) {
			$http.get('json/citizens/' + $routeParams.citizenId + '.json')
					.success(function(data) {
						$scope.citizen = data;
					});
		} ]);

iDeloApp.controller('SearchCtrl', [ '$scope', '$routeParams', '$http',
		function($scope, $routeParams, $http) {
			if ($routeParams.query.indexOf("sa") != -1) {
				$http.get('json/search/0.json').success(function(data) {
					$scope.result = data;
				});
			} else {
				$http.get('json/search/1.json').success(function(data) {
					$scope.result = data;
				});
			}
		} ]);

iDeloApp.controller('AuthCtrl', [ '$scope', '$routeParams', '$http',
		function($scope, $routeParams, $http) {
			$http.get('json/search/0.json').success(function(data) {
				$scope.result = data;
			});
		} ]);
