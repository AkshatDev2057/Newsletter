const Joi = require('joi');

const createSchema = Joi.object({
  section_id: Joi.number().integer().required(),
  headline: Joi.string().max(500).required(),
  news_date: Joi.date().required(),
  event_start_date: Joi.date().optional(),
  event_end_date: Joi.date().optional(),
  content: Joi.string().optional(),
  media_urls: Joi.array().items(Joi.string()).optional(),
  source_links: Joi.array().items(Joi.object({
    title: Joi.string().required(),
    url: Joi.string().uri().required(),
  })).optional(),
});

const updateSchema = Joi.object({
  section_id: Joi.number().integer().optional(),
  headline: Joi.string().max(500).optional(),
  news_date: Joi.date().optional(),
  event_start_date: Joi.date().optional(),
  event_end_date: Joi.date().optional(),
  content: Joi.string().optional(),
  media_urls: Joi.array().items(Joi.string()).optional(),
  source_links: Joi.array().items(Joi.object({
    title: Joi.string().required(),
    url: Joi.string().uri().required(),
  })).optional(),
});

module.exports = {
  createSchema,
  updateSchema,
};