var url = require('url');
var querystring = require('querystring');

var parsedObject = url.parse('http://www.hanb.co.kr/trackback?isbn=978-89-7914-874-9', true);

console.log(parsedObject);
console.log(querystring.parse(parsedObject.query));