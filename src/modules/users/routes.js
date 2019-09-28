const { Router } = require('express');
const { auth } = require('./controller');
const contracts = require('./contract');
const validator = require('../../middlewares/validator');

module.exports = () => {
  const router = Router();

  router.post('/auth', validator(contracts.auth, 'body'), async (req, res, next) => {
    try {
      const { body } = req;
      const data = await auth(body);

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });

  return { router, endpoint: '/user' };
};
