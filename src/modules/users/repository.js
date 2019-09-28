const User = require('./model.js');
const { transformInJSON } = require('../../helpers/mongoose');

module.exports.findByEmail = async (email) => {
  const query = { email: { $regex: new RegExp(`^${email}$`, 'i') } };

  try {
    const user = await User.findOne(query);

    return transformInJSON(user);
  } catch (error) {
    throw error;
  }
};
