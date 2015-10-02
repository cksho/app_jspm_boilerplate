module.exports = {
    "type": "object",
    "properties": {
        "jobs": {
            "type": "array",
            "minItems": 10,
            "maxItems": 20,
            "items": {
                "type": "object",
                "properties": {
                    "title": {
                        "type": "string",
                        "faker": "name.jobTitle"
                    },
                    "type": {
                        "type": "string",
                        "faker": "name.jobType"
                    }
                },
                "required": [
                    "title",
                    "type"
                ]
            }
        },
        "peoples": {
            "type": "array",
            "minItems": 10,
            "maxItems": 20,
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
                "required": [
                    "name",
                    "email"
                ]
            }
        }
    }
};