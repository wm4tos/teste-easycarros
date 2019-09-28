const getDistance = require('../../helpers/distance');

module.exports.withDistance = coords => ({
  location, name, _id, availableServices,
}) => ({
  location, name, _id, distance: getDistance(location, coords), availableServices,
});
