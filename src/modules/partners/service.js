const { withDistance } = require('./mapper');
const { findByService, findAll } = require('./repository');

/**
 * @description Find a partner with a service in 10kms.
 * @param {String} service String with the name of service searched.
 * @param {Object} coords Object who contains latitude and longitude of address.
 * @returns {Partner}
 */
const onePartner = async (service, coords) => {
  try {
    const partners = await findByService(service);

    const partnersWithDistance = partners.map(withDistance(coords));

    const partner = partnersWithDistance.find(({ distance }) => distance <= 10);

    if (partner) delete partner.distance;
    return partner;
  } catch (error) {
    throw error;
  }
};

/**
 * @description Find any partner in 10kms.
 * @param {Object} coords Object with latitude and longitude props.
 * @returns {Array}
 */
const allPartners = async (coords) => {
  try {
    const partners = await findAll();

    const partnersWithDistance = partners.map(withDistance(coords));

    const partnersAround = partnersWithDistance.filter(({ distance }) => distance <= 10);

    return partnersAround;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  onePartner,
  allPartners,
};
