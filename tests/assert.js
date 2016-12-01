var assert = require('assert');

function httpCall (url) {	

	request.open("GET", url , true);

}
var request = new XMLHttpRequest();
request.onreadystatechange = function() {
	if (request.readyState === 4) {
		if (request.status === 200) {
			document.body.className = 'ok';
			console.log(request.responseText);
		} else {
			document.body.className = 'error';
		}
	}
};
var url = "http://apilayer.net/api/historical?access_key=bfbb3baa3a9fa924ef69d83cebb2111a&date=2016-11-24&currencies=BRL,EUR,ARS&format=1"


var expected = httpCall(url);

assert.ok(expected != null, 'Request realizado');