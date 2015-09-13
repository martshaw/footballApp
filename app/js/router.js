var AmpersandRouter = require('ampersand-router');

module.exports = AmpersandRouter.extend({
  routes: {
      '' :      'initialize',
      'football/:id' :   'fixtures'
  }
});