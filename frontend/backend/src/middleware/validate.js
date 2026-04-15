const validate = (schema, source = 'body') => {
  return (req, res, next) => {
    const dataToValidate = req[source];
    const { error, value } = schema.validate(dataToValidate, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const err = new Error(error.details.map((item) => item.message).join(', '));
      err.statusCode = 400;
      return next(err);
    }

    req[source] = value;
    return next();
  };
};

module.exports = validate;
