const { sign } = require('../../helpers/jwt');
const { findByEmail } = require('./repository');
const { passwordsAreEquals } = require('./helper');

/**
 * @description Search user, compare passwords and return user with token.
 * @param {Object} data Object with email and password.
 * @returns {Object}
 */
const signIn = async ({ email, password }) => {
  try {
    const error = { name: 'UNAUTHORIZED' };
    const user = await findByEmail(email);

    if (!user) {
      error.message = 'Invalid e-mail';
      throw error;
    } else if (!passwordsAreEquals(user, { password })) {
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

module.exports = {
  signIn,
};
