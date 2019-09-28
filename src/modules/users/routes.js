const { auth } = require('./controller');
const contracts = require('./contracts');
const validator = require('../../middlewares/validator');

module.exports = (router) => {
  router.post('/login', validator(contracts.auth, 'body'), async (req, res, next) => {
    try {
      const { body } = req;
      const data = await auth(body);

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });

  return router;
};
