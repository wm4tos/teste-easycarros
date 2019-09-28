const { withDistance } = require('./mapper');
const { findByService } = require('./repository');

module.exports.onePartner = async (service, coords) => {
  try {
    const partners = await findByService(service);

    const partnersWithDistance = partners.map(withDistance(coords));

    const partner = partnersWithDistance.find(({ distance }) => distance <= 10);

    if (!partner) {
      const error = {
        name: 'NOT_FOUND',
        message: 'Partner with this service not found within 10 kilometers',
      };

      throw error;
    }

    delete partner.distance;
    return partner;
  } catch (error) {
    throw error;
  }
};

module.exports.allPartners = async (service, coords) => {
  try {
    const partners = await findByService(service);

    const partnersWithDistance = partners.map(withDistance(coords));

    const partnersAround = partnersWithDistance.filter(({ distance }) => distance <= 10);

    if (!partnersAround.length) {
      const error = {
        name: 'NOT_FOUND',
        message: 'Partner with this service not found within 10 kilometers',
      };

      throw error;
    }

    return partnersAround;
  } catch (error) {
    throw error;
  }
};
