
/**
 * Module dependencies.
 */

var get = require('./request').get;
var _ = require('lodash');

/**
 * Static.
 */

var hnapi = 'http://node-hnapi.herokuapp.com/show';

/**
 * Get tools.
 */

exports.get = function *() {
  var res = yield get(hnapi);
  var res2 = yield get(hnapi + 'new');
  var stories = res.body.concat(res2.body);
  return _.filter(stories, function(story) {
    return ~story.url.indexOf('github');
  });
};
