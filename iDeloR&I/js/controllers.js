var complaintsControllers = angular.module('complaintsControllers', []);

iDeloApp.controller('ComplaintsCtrl', function($scope) {
	$scope.complaints = [ {
		'author' : {
			'id' : '1',
			'name' : 'Mark Otto',
			'nick' : '@mdo'
		},
		'type' : 'Anti-Government talks'
	}, {
		'author' : {
			'id' : '2',
			'name' : 'Ilja Brno',
			'nick' : '@ilbr'
		},
		'type' : 'Anti-Government talks'
	}, {
		'author' : {
			'id' : '3',
			'name' : 'Roman KK',
			'nick' : '@romkk'
		},
		'type' : 'Dangerous Philosophing'
	}, {
		'author' : {
			'id' : '4',
			'name' : 'Valeri 007',
			'nick' : '@val'
		},
		'type' : 'BlackMailing'
	}, {
		'author' : {
			'id' : '5',
			'name' : 'Tonis teh Great',
			'nick' : '@ton'
		},
		'type' : 'Anti-Government talks'
	} ];
	$scope.orderProp = 'type';
});