module.exports = function (key, secret) {
    this.url = require('./lib/url');
    this.util = require('./lib/util');
    this.network = require('./lib/network');
    this.msg = require('./lib/msg');
    this.user = require('./lib/user');
    this.network.app = {
        appkey: key,
        secret: secret
    };
    return this;
};