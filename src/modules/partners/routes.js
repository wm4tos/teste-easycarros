const { Router } = require('express');
const { requirePartner, allPartners } = require('./controller');
// const contracts = require('./contracts');
// const validator = require('../../middlewares/validator');

module.exports = () => {
  const router = Router();

  router.post('/require', async (req, res, next) => {
    try {
      const { body } = req;
      const data = await requirePartner(body);

      res.status(200).json(data);
    } catch (error) {
      next(error);
    }
  });

  router.get('/', async (req, res, next) => {
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
