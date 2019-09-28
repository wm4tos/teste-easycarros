const { onePartner, allPartners } = require('./service');
const { getCoordsFromAddress } = require('../../integrations/google-maps-api');

module.exports.requirePartner = async ({ service, coords }) => {
  try {
    const partner = await onePartner(service, coords);

    if (!partner) {
      const error = {
        name: 'NOT_FOUND',
        message: 'Partner with this service not found within 10 kilometers',
      };

      throw error;
    }

    return partner;
  } catch (error) {
    throw error;
  }
};

module.exports.allPartners = async ({ address }) => {
  try {
    const coords = await getCoordsFromAddress(address);

    const partners = await allPartners(coords);

    return partners;
  } catch (error) {
    throw error;
  }
};
