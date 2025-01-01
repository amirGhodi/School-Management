const Joi = require('joi');

exports.createSchoolSchema = Joi.object({
  name: Joi.string().min(3).required(),
  address: Joi.string().min(3).required(),
  phone: Joi.string().min(10).required()
});

exports.updateSchoolSchema = Joi.object({
  name: Joi.string().min(3),
  address: Joi.string().min(3),
  phone: Joi.string().min(10)
});
