const Joi = require('joi');

module.exports = {
  getPartners: {
    query: {
      address: Joi.string().required(),
    },
  },
  requireService: {
    body: {
      service: Joi.string().required(),
      coords: Joi.object({
        lat: Joi.number().required(),
        long: Joi.number().required(),
      }).required(),
    },
  },
};
