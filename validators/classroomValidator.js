const Joi = require('joi');

exports.createClassroomSchema = Joi.object({
  name: Joi.string().min(3).required(),
  capacity: Joi.number().integer().min(1).required(),
  school: Joi.string().hex().length(24).required()
});

exports.updateClassroomSchema = Joi.object({
  name: Joi.string().min(3),
  capacity: Joi.number().integer().min(1)
});
