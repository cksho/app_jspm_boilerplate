{
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
                    }
                },
                "required": ["title"]
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
                "required": ["name", "lastname", "email"]
            }
        }
    },
    "required": [
        "jobs", "peoples"
    ]
}
