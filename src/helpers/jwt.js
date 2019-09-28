const { sign, decode } = require('jsonwebtoken');
const { SECRET, TOKEN_EXPIRES_IN } = require('../config');

module.exports.sign = data => sign(data, SECRET, {
  expiresIn: TOKEN_EXPIRES_IN || 3600,
});

module.exports.decode = token => decode(token);
