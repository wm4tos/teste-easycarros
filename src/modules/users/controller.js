const { signIn } = require('./services');

module.exports.auth = async (data) => {
  try {
    const user = await signIn(data);

    return user;
  } catch (error) {
    throw error;
  }
};
