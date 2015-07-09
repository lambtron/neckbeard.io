
/**
 * Module dependencies.
 */

var tools = require('./tools');

/**
 * Render index html page.
 */

exports.index = function *() {
  return this.body = yield tools.get();
};
