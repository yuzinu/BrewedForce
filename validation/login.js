const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.identifier = validText(data.identifier) ? data.identifier : '';
  data.password = validText(data.password) ? data.password : '';

  if (data.identifier.includes('@')) {
    if (!Validator.isEmail(data.identifier)) {
      errors.email = 'Email is invalid';
    }
  }

  if (Validator.isEmpty(data.identifier)) {
    errors.identifier = 'Username or email field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};