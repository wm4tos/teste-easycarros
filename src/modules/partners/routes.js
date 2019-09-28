const { Router } = require('express');
const { requirePartner, allPartners } = require('./controller');
const contract = require('./contract');
const validator = require('../../middlewares/validator');
const auth = require('../../middlewares/auth');

module.exports = () => {
  const router = Router();

  router.use(auth);

  router.post('/require', validator(contract.requireService, 'body'), requirePartner);

  router.get('/', validator(contract.getPartners, 'query'), allPartners);

  return { router, endpoint: '/partner' };
};
