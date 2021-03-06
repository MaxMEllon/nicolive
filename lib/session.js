// Generated by CoffeeScript 1.10.0
var Session;

Session = (function() {
  function Session(path) {
    this.path = path;
    this.cache = {};
    this.cache.cookie = localStorage.getItem('cookie');
  }

  Session.prototype.set = function(cookie) {
    return this.cache.cookie = cookie;
  };

  Session.prototype.get = function() {
    return this.cache.cookie;
  };

  Session.prototype.save = function() {
    return localStorage.setItem('cookie', this.cache.cookie);
  };

  Session.prototype.destroy = function() {
    this.cache = {};
    return localStorage.removeItem('cookie');
  };

  return Session;

})();

module.exports = Session;
