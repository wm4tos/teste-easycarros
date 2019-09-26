const { auth } = require('../controllers');

module.exports = (router) => {
  router.post('/login', auth);

  return router;
};
