// http://jsonschema.net/#/
// http://json-schema-faker.js.org

module.exports = {
    "type": "object",
    "properties": {
        "jobs": {
            "type": "array",
            "minItems": 1,
            "maxItems": 6,
            "items": {
                "type": "object",
                "properties": {
                    "title": {
                        "type": "string",
                        "faker": "name.jobTitle"
                    },
                    "position": {
                        "type": "string",
                        "faker": "name.jobType"
                    }
                },
                "required": ["title", "position"]
            }
        },
        "peoples": {
            "type": "array",
            "minItems": 1,
            "maxItems": 3,
            "items": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "faker": "name.firstName"
                    },
                    "lastname": {
                        "type": "string",
                        "faker": "name.lastName"
                    },
                    "email": {
                        "type": "string",
                        "faker": "internet.email"
                    }
                },
                "required": ["name", "lastname", "email"]
            }
        }
    },
    "required": [
        "jobs", "peoples"
    ]
};