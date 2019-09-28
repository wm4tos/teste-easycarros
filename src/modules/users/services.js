const { sign } = require('../../helpers/jwt.js');
const { findByEmail } = require('./repository');

module.exports.signIn = async ({ email, password }) => {
  try {
    const error = { name: 'UNAUTHORIZED' };
    const user = await findByEmail(email);

    if (!user) {
      error.message = 'Invalid e-mail';
      throw error;
    } else if (password !== user.password) {
      error.message = 'Invalid password';
      throw error;
    }

    delete user.password;
    user.token = await sign(user);

    return user;
  } catch (error) {
    throw error;
  }
};
