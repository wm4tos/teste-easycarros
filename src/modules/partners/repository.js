const Partner = require('./model');

module.exports.findByService = async (service) => {
  try {
    const partners = await Partner.find({ availableServices: service });

    return partners;
  } catch (error) {
    throw error;
  }
};
