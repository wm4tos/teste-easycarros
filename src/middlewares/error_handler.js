const httpStatus = require('http-status-codes');
const error = require('../helpers/error');

module.exports = (err, req, res) => {
  if (err.message in httpStatus) {
    return res.status(httpStatus[err.message]).json(error[err.message]);
  }

  const internalError = error();

  return res.status(internalError.status).json(internalError);
};
