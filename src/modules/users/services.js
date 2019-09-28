const { sign } = require('../../helpers/jwt.js');
const Users = require('./model');

module.exports.signIn = async ({ email, password }) => {
  const query = { email: { $regex: new RegExp(`^${email}$`, 'i') } };
  try {
    const error = { name: 'UNAUTHORIZED' };
    const user = await Users.findOne(query);

    if (!user) {
      error.message = 'Invalid e-mail';
      throw error;
    } else if (password !== user.password) {
      error.message = 'Invalid password';
      throw error;
    }

    delete user.password;
    user.token = sign(user);

    return user;
  } catch (error) {
    throw error;
  }
};
