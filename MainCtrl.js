var app = angular.module('ngDemo');

app.controller('MainCtrl', function($scope){
	$scope.test = 'Hello World';
	$scope.devStudents = ['Ryan', 'Kelsey', 'Tom', 'Josh', 'Ron', 'Rick'];
	$scope.toggleSearch = function(){
		$scope.showSearch = !$scope.showSearch;
	}


});