const { sign, decode } = require('jsonwebtoken');
const { SECRET, TOKEN_EXPIRES_IN } = require('../config');

module.exports.sign = data => sign(data, SECRET, {
  expiresIn: TOKEN_EXPIRES_IN || 3600,
});

module.exports.decode = token => new Promise((resolve, reject) => {
  const data = decode(token);

  return data ? resolve(data) : reject(new Error('Invalid token'));
});
