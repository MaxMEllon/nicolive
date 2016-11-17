// Generated by CoffeeScript 1.10.0
var cheerio, request, url;

request = require('request');

cheerio = require('cheerio');

url = require('../api').url;

module.exports = function(user_id, callback) {
  var options;
  if (this.knownNicknames == null) {
    this.knownNicknames = {};
  }
  if (this.knownNicknames[user_id] != null) {
    process.nextTick((function(_this) {
      return function() {
        return callback(null, _this.knownNicknames[user_id]);
      };
    })(this));
    return;
  }
  options = {
    url: url.fetchNickname + user_id
  };
  return request(options, (function(_this) {
    return function(error, res, body) {
      var result;
      result = cheerio(body);
      if (error != null) {
        return callback(error);
      }
      if (result.find('error').text().length) {
        return callback(result.find('error').text());
      }
      _this.knownNicknames[user_id] = result.find('nickname').text();
      return callback(null, _this.knownNicknames[user_id]);
    };
  })(this));
};