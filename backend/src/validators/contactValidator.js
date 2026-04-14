const Joi = require('joi');

const contactSchema = Joi.object({
  name: Joi.string().trim().min(2).max(80).required(),
  email: Joi.string().trim().email().required(),
  phone: Joi.string().trim().pattern(/^[0-9+\-()\s]{7,20}$/).allow(''),
  message: Joi.string().trim().min(5).max(2000).required(),
});

module.exports = {
  contactSchema,
};
