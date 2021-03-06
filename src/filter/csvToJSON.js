Vue.filter('csvToJSON', function (value) {

	var lines = value.split('\n');

	var result = [];

	var headers=lines[0].split(',');
	lines.splice(0, 1);

	lines.forEach(function(line) {

		var obj = {};

		var currentline = line.split(',');

		headers.forEach(function(header, i) {

			obj[header] = currentline[i];

		});

		result.push(obj);

	});

	return result;

});
