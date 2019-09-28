const User = require('./model.js');

module.exports.findByEmail = async (email) => {
  const query = { email: { $regex: new RegExp(`^${email}$`, 'i') } };

  try {
    const user = await User.findOne(query);

    return user.toJSON();
  } catch (error) {
    throw error;
  }
};
