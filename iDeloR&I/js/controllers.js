var complaintsControllers = angular.module('complaintsControllers', []);

iDeloApp.controller('ComplaintsCtrl', [ '$scope', '$http',
		function($scope, $http) {
			$http.get('json/allComplaints.json').success(function(data) {
				$scope.complaints = data;
			});

			$scope.orderProp = 'type';
		} ]);

// function($scope, $http) {
// $http.get('json/allComplaints.json').success(function(data) {
// $scope.complaints = data;
// });

// $scope.complaints = [ {
// 'author' : {
// 'id' : '1',
// 'name' : 'Mark Otto',
// 'nick' : '@mdo'
// },
// 'type' : 'Anti-Government talks'
// }, {
// 'author' : {
// 'id' : '2',
// 'name' : 'Ilja Brno',
// 'nick' : '@ilbr'
// },
// 'type' : 'Anti-Government talks'
// }, {
// 'author' : {
// 'id' : '3',
// 'name' : 'Roman KK',
// 'nick' : '@romkk'
// },
// 'type' : 'Dangerous Philosophing'
// }, {
// 'author' : {
// 'id' : '4',
// 'name' : 'Valeri 007',
// 'nick' : '@val'
// },
// 'type' : 'BlackMailing'
// }, {
// 'author' : {
// 'id' : '5',
// 'name' : 'Tonis teh Great',
// 'nick' : '@ton'
// },
// 'type' : 'Anti-Government talks'
// } ];
// $scope.orderProp = 'type';
// });
