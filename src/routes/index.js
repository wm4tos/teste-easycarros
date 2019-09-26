const loadRoutes = require('../helpers/load_routes');

module.exports = (router) => {
  const routes = loadRoutes(['users']);

  routes.forEach(route => route(router));

  return router;
};
