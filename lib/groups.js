module.exports = new (function () {
    var url = require('./url');
    var network = require('./network');
    this.create_group = function (group, cb) {
        return new Promise(function (res) {
            network.post(url.GROUPS_URL, group, cb || res);
        });
    };
    this.get_group = function (gid, cb) {
        return new Promise(function (res) {
            network.get(url.GROUPS_URL + gid, cb || res);
        });
    };
    this.put_group = function (gid, group, cb) {
        return new Promise(function (res) {
            network.put(url.GROUPS_URL + gid, group, cb || res);
        });
    };
    this.delete_group = function (gid, cb) {
        return new Promise(function (res) {
            network.delete(url.GROUPS_URL + gid, cb || res);
        });
    };
    this.put_group_members = function (gid, add, remove, cb) {
        return new Promise(function (res) {
            var data = { add: add };
            network.post(url.GROUPS_URL + gid + "/members", data, cb || res);
        });
    };
    this.get_group_members = function (gid, cb) {
        return new Promise(function (res) {
            network.get(url.GROUPS_URL + gid + "/members", cb || res);
        });
    };
    this.get_groups_by_username = function (username, cb) {
        return new Promise(function (res) {
            network.get(url.GROUPS_URL + username + "/groups/", cb || res);
        });
    };
    this.get_groups_list = function (start, count, cb) {
        return new Promise(function (res) {
            network.get(url.GROUPS_URL + "?start=" + start + "&count=" + count, cb || res);
        });
    };
})();