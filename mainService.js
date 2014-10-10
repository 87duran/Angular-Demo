var app = angular.module('ngDemo');

app.factory('mainService', function() {
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
					devStudents[i].status = student.status
				}
			}
			console.log(devStudents);
		}
	};



});