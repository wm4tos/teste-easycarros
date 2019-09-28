const { auth } = require('./controller');

module.exports = (router) => {
  router.post('/login', async (req, res, next) => {
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
