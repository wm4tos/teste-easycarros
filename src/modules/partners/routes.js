const { Router } = require('express');
const { requirePartner, allPartners } = require('./controller');
const contract = require('./contract');
const validator = require('../../middlewares/validator');
const auth = require('../../middlewares/auth');

module.exports = () => {
  const router = Router();

  router.use(auth);

  router.post('/require', validator(contract.requireService, 'body'), async (req, res, next) => {
    try {
      const { body } = req;
      const data = await requirePartner(body);

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });

  router.get('/', validator(contract.getPartners, 'query'), async (req, res, next) => {
    try {
      const { query } = req;
      const data = await allPartners(query);

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });

  return { router, endpoint: '/partner' };
};
