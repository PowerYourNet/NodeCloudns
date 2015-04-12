'use strict';
var t = require('./index.js');
var c = t.createClient(370, 'q6q54dq6sd54qsd');

var a1 = c.recordsList('mcn.sx', function (error, data) {
	if (data && ! error) { console.log(data); }
});
var a1 = c.recordsList('mcn.sx', function (error, data) {
	if (data && ! error) { console.log(data); }
});