module.exports = new (function () {
    this.getNonce = function (length) {
        length = length || 32;
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var pos = chars.length;
        var nonces = [];
        var i;
        for (i = 0; i < length; i++) {
            nonces.push(chars.charAt(Math.floor(Math.random() * pos)));
        }
        return nonces.join('');
    };
    this.md5 = function (content) {
        var crypto = require('crypto');
        var md5 = crypto.createHash('md5');
        md5.update(content);
        return md5.digest('hex');
    };
})();