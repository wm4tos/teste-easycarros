const { auth } = require('./controller');

module.exports = (router) => {
  router.post('/login', auth);

  return router;
};
