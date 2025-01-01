const Joi = require('joi');

exports.createStudentSchema = Joi.object({
  name: Joi.string().min(3).required(),
  age: Joi.number().integer().min(1).required(),
  classroom: Joi.string().hex().length(24).required()
});

exports.updateStudentSchema = Joi.object({
  name: Joi.string().min(3),
  age: Joi.number().integer().min(1)
});
