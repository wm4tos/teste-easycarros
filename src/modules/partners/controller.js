const { onePartner, allPartners } = require('./service');
const { getCoordsFromAddress } = require('../../integrations/google-maps-api');

module.exports.requirePartner = async ({ service, coords }) => {
  try {
    const partner = await onePartner(service, coords);

    return partner;
  } catch (error) {
    throw error;
  }
};

module.exports.allPartners = async ({
  service, address, lat, long,
}) => {
  try {
    let obj = {
      lat, long,
    };

    if (address) {
      const { lat: latitude, lng } = await getCoordsFromAddress(address);

      obj = {
        lat: latitude,
        long: lng,
      };
    }

    const partner = await allPartners(service, obj);

    return partner;
  } catch (error) {
    throw error;
  }
};
