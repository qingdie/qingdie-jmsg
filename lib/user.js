module.exports = new (function () {
    var url = require('./url');
    var util = require('./util');
    var network = require('./network');
    this.auth = function () {
        var timestamp = new Date().getTime();
        var random = util.getNonce();
        var content = 'appkey=' + network.app.appkey + '&timestamp=' + timestamp + '&random_str=' + random + '&key=' + network.app.secret;
        var signature = util.md5(content);
        return {
            appkey: network.app.appkey,
            random_str: random,
            signature: signature,
            timestamp: timestamp
        };
    };
    this.regist_admin = function (user, cb) {
        return new Promise(function (res) {
            network.post(url.REGIST_ADMIN_URL, user, cb || res);
        });
    };
    this.regist_user = function (users, cb) {
        return new Promise(function (res) {
            network.post(url.REGIST_USER_URL, users, cb || res);
        });
    };
    this.get_user_by_username = function (username, cb) {
        return new Promise(function (res) {
            network.get(url.REGIST_USER_URL + username, cb || res);
        });
    };
    this.put_user_password = function (username, password, cb) {
        return new Promise(function (res) {
            var data = { new_password: password };
            network.put(url.REGIST_USER_URL + username + "/password", data, cb || res);
        });
    };
    this.delete_user_by_username = function (username, cb) {
        return new Promise(function (res) {
            network.delete(url.REGIST_USER_URL + username, {}, cb || res);
        });
    };
    this.blacklist_user_by_username = function (username, cb) {
        return new Promise(function (res) {
            network.put(url.REGIST_USER_URL + username + "/blacklist", {}, cb || res);
        });
    };
    this.delete_blacklist_by_username = function (username, cb) {
        return new Promise(function (res) {
            network.delete(url.REGIST_USER_URL + username + "/blacklist", {}, cb || res);
        });
    };
    this.get_blacklist = function (username, cb) {
        return new Promise(function (res) {
            network.get(url.REGIST_USER_URL + username + "/blacklist", cb || res);
        });
    };
    this.get_users = function (start, count, cb) {
        return new Promise(function (res) {
            network.get(url.REGIST_USER_URL + "?start=" + start + "&count=" + count, cb || res);
        });
    };
})();