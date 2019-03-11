var crypto = require('crypto');

var sha256 = crypto.createHash('sha256');
var hash = sha256.update('password');
var hex = hash.digest('hex');
console.log(`sha256 = ${hex}`);

var md5 = crypto.createHash('md5');
var hash = md5.update('password');
var hex = hash.digest('hex');
console.log(`md5 = ${hex}`);
