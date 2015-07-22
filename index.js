var fs = require('fs');
var stripComments = require('strip-json-comments');

var content = fs.readFileSync('.eslintrc', {encoding: 'utf-8'});
var contentNoComments = stripComments(content);
var parse = JSON.parse(contentNoComments);

module.exports = parse;
