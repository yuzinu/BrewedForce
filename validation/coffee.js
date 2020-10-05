const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateCoffeeInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : '';
    data.origin = validText(data.origin) ? data.origin : '';
    data.source = validText(data.source) ? data.source : '';

    if (Validator.isEmpty(data.name)) {
        errors.text = 'Name field is required';
    }
    if (Validator.isEmpty(data.origin)) {
        errors.text = 'Origin field is required';
    }
    if (Validator.isEmpty(data.source)) {
        errors.text = 'Source field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};