const { sign, verify } = require('jsonwebtoken');
const { SECRET, TOKEN_EXPIRES_IN } = require('../config');

module.exports.sign = data => sign(data, SECRET, {
  expiresIn: TOKEN_EXPIRES_IN,
});

module.exports.decode = token => verify(token, SECRET);
