const { signIn } = require('./service');

/**
 * Function to authenticate in app.
 * @param {Object} data Email and password.
 * @returns {Object}
 */
const auth = async (req, res, next) => {
  try {
    const { body } = req;
    const data = await signIn(body);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  auth,
};
