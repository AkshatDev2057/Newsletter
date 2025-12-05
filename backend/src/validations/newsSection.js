const Joi = require('joi');

const createSchema = Joi.object({
  start_date: Joi.date().required(),
  end_date: Joi.date().required(),
  title: Joi.string().max(255).optional(),
});

const updateSchema = Joi.object({
  start_date: Joi.date().optional(),
  end_date: Joi.date().optional(),
  title: Joi.string().max(255).optional(),
});

module.exports = {
  createSchema,
  updateSchema,
};