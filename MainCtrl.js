var app = angular.module('ngDemo');

app.controller('MainCtrl', function($scope, mainService){
	$scope.test = 'Hello World';
	$scope.devStudents = mainService.getStudents();
	$scope.toggleSearch = function(){
		$scope.showSearch = !$scope.showSearch;
	};
	$scope.updateEnrollmentStatus = function(student) {
		mainService.updateStudent(student);
	}


});