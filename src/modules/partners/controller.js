const { onePartner, allPartners } = require('./service');
const { getCoordsFromAddress } = require('../../integrations/google-maps-api');

module.exports.requirePartner = async (req, res, next) => {
  try {
    const { service, coords } = req.body;
    const partner = await onePartner(service, coords);


    if (!partner) {
      const error = {
        name: 'NOT_FOUND',
        message: 'Partner with this service not found within 10 kilometers',
      };

      throw error;
    }

    res.status(200).json(partner);
  } catch (error) {
    next(error);
  }
};

module.exports.allPartners = async (req, res, next) => {
  try {
    const { address } = req.query;
    const coords = await getCoordsFromAddress(address);

    const partners = await allPartners(coords);

    res.status(200).json(partners);
  } catch (error) {
    next(error);
  }
};
