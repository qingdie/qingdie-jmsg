module.exports = new (function () {
    var url = require('./url');
    var network = require('./network');
    this.send_msg = function (msg, cb) {
        return new Promise(function (res) {
            network.post(url.MESSAGES_URL, msg, cb || res);
        });
    };
})();