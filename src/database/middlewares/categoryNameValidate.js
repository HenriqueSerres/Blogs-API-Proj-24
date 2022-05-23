const Joi = require('joi');

const CATEGORY = Joi.object({
  name: Joi.string().required(),
});

const validateCategory = (req, _res, next) => {
  const { error } = CATEGORY.validate(req.body);

  if (error) {
    next({ status: 400, message: error.details[0].message });
  }
  next();
};

module.exports = validateCategory;