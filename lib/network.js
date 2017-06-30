var request = require('request');
module.exports = {
    app: {},
    get: function (url, cb) {
        request.get({
            url: url,
            json: true
        }, function (error, response, body) {
            cb(body || error);
            }).auth(this.app.appkey, this.app.secret);
    },
    post: function (url, data, cb) {
        request.post({
            url: url,
            body: data,
            json: true,
            headers: {
                'user-agent': 'jpush-api-python-client',
                'connection': 'keep-alive',
                'content-type': 'application/json;charset:utf-8'
            }
        }, function (error, response, body) {
            cb(body || error);
            }).auth(this.app.appkey, this.app.secret);
    },
    put: function (url, data, cb) {
        request.put({
            url: url,
            body: data,
            json: true,
            headers: {
                'user-agent': 'jpush-api-python-client',
                'connection': 'keep-alive',
                'content-type': 'application/json;charset:utf-8'
            }
        }, function (error, response, body) {
            cb(body || error);
            }).auth(this.app.appkey, this.app.secret);
    },
    delete: function (url, data, cb) {
        request.delete({
            url: url,
            body: data,
            json: true,
            headers: {
                'user-agent': 'jpush-api-python-client',
                'connection': 'keep-alive',
                'content-type': 'application/json;charset:utf-8'
            }
        }, function (error, response, body) {
            cb(body || error);
            }).auth(this.app.appkey, this.app.secret);
    }
};