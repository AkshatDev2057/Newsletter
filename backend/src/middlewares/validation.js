const validationMiddleware = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      const message = error.details && error.details.length > 0
        ? error.details[0].message
        : 'Validation failed';
      return res.status(400).json({ error: message });
    }
    next();
  };
};

module.exports = validationMiddleware;