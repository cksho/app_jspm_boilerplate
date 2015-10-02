var jsf = require('json-schema-faker');
var fs = require('fs');

jsf.extend('faker', function() {
  var faker = require('faker/locale/pl');
  return faker;
});

var schema = {
  type: 'array',
  minItems: 30,
  items: {
    user: {
      type: 'object',
      properties: {
        id: {
          $ref: '#/definitions/positiveInt'
        },
        name: {
          type: 'string',
          faker: 'name.findName'
        },
        email: {
          type: 'string',
          format: 'email',
          faker: 'internet.email'
        }
      },
      required: ['id', 'name', 'email']
    }
  },
  required: ['user'],
  definitions: {
    positiveInt: {
      type: 'integer',
      minimum: 0,
      exclusiveMinimum: true
    }
  }
};

var sample = jsf(schema);

fs.writeFile('../home.json', JSON.stringify(sample), function (err) {
       if (err) throw err;
       console.log(sample);
});
