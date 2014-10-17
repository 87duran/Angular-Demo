var app = angular.module('ngDemo');

app.factory('mainService', function($http, $q) {


	var devStudents = [{

		name: 'Ryan',
		status: 'Enrolled'
	},
	{
		name: 'Kelsey',
		status: 'Enrolled'
	},
	{
		name: 'Tom',
		status: 'Enrolled'
	},
	{
		name:'Peter',
		status:'Dropped'
	}];

	return  {
		getStudents: function() {
			return devStudents;
		},
		updateStudent: function(student) {
			for (var i = 0; i < devStudents.length; i++) {
				if(devStudents[i].name === student.name) {
					devStudents[i].status = student.status;
				}
			}
			console.log(devStudents);
		},
		getSmurfs: function() {
			return $http({
				method: 'GET',
				url: 'http://smurfs.devmounta.in/smurfs/'
			}).then(function(response){
				return response.data;
			});
		},
		getSmurfsWithQ: function() {
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: 'http://smurfs.devmounta.in/smurfs/'
			}).then(function(response){
				return deferred.resolve(response.data)
			});
			return deferred.promise;
		}
	};



});