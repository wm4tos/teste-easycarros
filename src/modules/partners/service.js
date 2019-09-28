const { withDistance } = require('./mapper');
const { findByService, findAll } = require('./repository');

module.exports.onePartner = async (service, coords) => {
  try {
    const partners = await findByService(service);

    const partnersWithDistance = partners.map(withDistance(coords));

    const partner = partnersWithDistance.find(({ distance }) => distance <= 10);

    delete partner.distance;
    return partner;
  } catch (error) {
    throw error;
  }
};

module.exports.allPartners = async (coords) => {
  try {
    const partners = await findAll();

    const partnersWithDistance = partners.map(withDistance(coords));

    const partnersAround = partnersWithDistance.filter(({ distance }) => distance <= 10);

    return partnersAround;
  } catch (error) {
    throw error;
  }
};
