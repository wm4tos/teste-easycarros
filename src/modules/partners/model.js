const { Schema, model } = require('mongoose');

const partnerSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  location: {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    lat: {
      type: String,
      required: true,
    },
    long: {
      type: String,
      required: true,
    },
  },
  availableServices: {
    type: [String],
    required: true,
  },
});

module.exports.partnerSchema = partnerSchema;

module.exports = model('partners', partnerSchema);
