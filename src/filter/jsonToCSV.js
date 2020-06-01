Vue.filter('jsonToCSV', function (value) {

	var array = typeof value != 'object' ? JSON.parse(value) : value;
	var txt = '';

	for (var i = 0; i < array.length; i++) {

		var line = '';

		for (var index in array[i]) {

			if (line != '') line += ','

			line += array[i][index];

		}

		txt += line + '\r\n';

	}

	return txt;

});
