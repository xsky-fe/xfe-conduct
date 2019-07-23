import Ajv from 'ajv';

const schemas = {
    QAForm: {
        "properties": {
            "link": {
                "type": "string",
                "format": "path",
                "minLength": 1,
            },
            "name": {
                "type": "string",
                "minLength": 1,
            },
        }
    },
    CardForm: {
        "properties": {
            "link": {
                "type": "string",
                "format": "url",
                "minLength": 1,
            },
            "name": {
                "type": "string",
                "minLength": 1,
            },
            "intro": {
                "type": "string",
                "minLength": 10,
            },
        }
    }
}

export default function valid(schema, data) {
    const ajv = new Ajv({$data: true, allErrors: true});
    ajv.addFormat('path', /^\/\w+/)
    const validate = ajv.compile(schemas[schema]);
    const valid = validate(data);
    return [valid, validate];
}