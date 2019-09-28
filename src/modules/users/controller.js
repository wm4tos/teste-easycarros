const { signIn } = require('./service');

module.exports.auth = async (data) => {
  try {
    const user = await signIn(data);

    return user;
  } catch (error) {
    throw error;
  }
};
