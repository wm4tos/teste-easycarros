const axiosGoogleApi = require('../helpers/axios')('https://maps.googleapis.com/maps/api');
const { GOOGLE_MAPS_API_KEY } = require('../config');

module.exports.getCoordsFromAddress = async (address) => {
  if (!GOOGLE_MAPS_API_KEY) {
    const error = {
      message: 'Google API key not found',
      name: 'FORBIDDEN',
    };

    throw error;
  }

  try {
    const { data } = await axiosGoogleApi.get(`/geocode/json?address=${address}&key=${GOOGLE_MAPS_API_KEY}`);

    if (data.error_message) {
      const error = {
        message: data.error_message,
      };

      throw error;
    }

    const { results } = data;

    const [result] = results;

    const { location } = result.geometry;

    return location;
  } catch (error) {
    throw error;
  }
};
