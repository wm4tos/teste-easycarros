const Partner = require('./model');

module.exports.findByService = async (service) => {
  try {
    const partners = await Partner.find({ availableServices: service });

    return partners;
  } catch (error) {
    throw error;
  }
};

module.exports.findAll = async () => {
  try {
    const partners = await Partner.find();

    return partners;
  } catch (error) {
    throw error;
  }
};
