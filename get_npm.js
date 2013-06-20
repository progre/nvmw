var util = require('util'),
    fs = require('fs'),
    path = require('path'),
    wget = require('./wget');

var NPM_PKG_JSON_FILE = "%s/package.json";
var BASE_URL = 'http://nodejs.org/dist/npm/npm-%s.zip';

var targetDir = process.argv[2];
var nodeVersion = process.argv[3];

fs.readFile(util.format(NPM_PKG_JSON_FILE, targetDir), function(err, data){
    if (filename === null) {
        console.error('node %s is not include npm', nodeVersion);
        process.exit(1);
    }
    var npmVersion = JSON.parse(pkg).version;
    var uri = util.format(BASE_URL, npmVersion);
    wget(uri, function (filename, data) {
        fs.writeFile(path.join(targetDir, 'npm.zip'), data, function (err) {
            if (err) {
                return console.log(err.message);
            }
            console.log('Download npm %s is done', npmVersion);
        });
    });
});
