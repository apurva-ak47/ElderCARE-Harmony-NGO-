const Joi = require('joi');
const { EMERGENCY_STATUS_VALUES } = require('../constants/emergencyStatus');

const mongoIdSchema = Joi.object({
  id: Joi.string().length(24).hex().required(),
});

const createEmergencySchema = Joi.object({
  name: Joi.string().trim().min(2).max(80).required(),
  contactNumber: Joi.string().trim().pattern(/^[0-9+\-()\s]{7,20}$/).required(),
  address: Joi.string().trim().min(5).max(200).required(),
  incident: Joi.string().trim().min(5).max(2000).required(),
});

const updateEmergencyStatusSchema = Joi.object({
  status: Joi.string().valid(...EMERGENCY_STATUS_VALUES).required(),
  note: Joi.string().trim().max(250).allow(''),
});

module.exports = {
  mongoIdSchema,
  createEmergencySchema,
  updateEmergencyStatusSchema,
};
