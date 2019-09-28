module.exports.comparePassword = (
  { password: userPassword },
  { password: reqPassword },
) => (userPassword === reqPassword);
