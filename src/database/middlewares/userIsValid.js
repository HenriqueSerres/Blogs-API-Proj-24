const Joi = require('joi');

const USER = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const validateUser = (req, _res, next) => {
  const { error } = USER.validate(req.body);

  if (error) {
    next({ status: 400, message: error.details[0].message });
  }
  next();
};

module.exports = validateUser;