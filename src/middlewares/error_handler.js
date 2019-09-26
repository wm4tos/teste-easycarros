const httpStatus = require('http-status-codes');
const errorHelper = require('../helpers/error');

module.exports = (err, req, res) => {
  if (err.name in httpStatus) {
    return res.status(httpStatus[err.name]).json(errorHelper(err.name, err.message));
  }

  const internalError = errorHelper();

  return res.status(internalError.status).json(internalError);
};
