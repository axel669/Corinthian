var zlib = require('zlib');
var fs = require('fs');

console.log(zlib.gzipSync(fs.readFileSync('corinthian.min.js')).length);
