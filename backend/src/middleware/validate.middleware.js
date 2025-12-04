const { validationResult } = require('express-validator');
const { ValidationError } = require('../utils/errors');

function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const details = errors.array().map((err) => ({
      field: err.path,
      message: err.msg,
    }));
    return next(new ValidationError('Invalid input data', details));
  }
  next();
}

module.exports = { validate };
