const Joi = require('joi');

const POST = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

const validatePostEdit = (req, _res, next) => {
  const { error } = POST.validate(req.body);

  if (error) {
    next({ status: 400, message: 'Some required fields are missing' });
  }
  next();
};

module.exports = validatePostEdit;