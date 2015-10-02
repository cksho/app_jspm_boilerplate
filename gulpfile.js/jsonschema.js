// Generate JSON files from json schemas
// https://www.npmjs.com/package/json-schema-faker

var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var glob = require('glob');
var jsf = require('json-schema-faker');
var requireDir = require('require-dir');

jsf.extend('faker', function () {
    var faker = require('faker/locale/pl');
    return faker;
});

gulp.task('jsonschema', function () {

    var schemas = requireDir('../src/+schema');

    for (var schema in schemas) {
        var schemaObj = schemas[schema];
        fs.writeFile(global.path.json + schema + '.json', JSON.stringify(jsf(schemaObj)), function (err) {
            if (err) throw err;
        });
    }
});
