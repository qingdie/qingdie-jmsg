var user = new (function () {
    var Jmsg = require('../index');
    var jm = new Jmsg('6be9204c30b9473e87bad4dc', 'e62664ad421b67270e5c9d5b');
    this.auth = function () {
        var r = jm.user.auth();
        if (r.appkey != '6be9204c30b9473e87bad4dc') throw JSON.stringify(r);
    };
    this.regist_admin = function () {
        jm.user.regist_admin({
            username: 'qingdie.me',
            password: 'qd2017'
        }, function (r) {
            if (r) throw JSON.stringify(r);
        });
    };
    this.regist_admin_async = async () => {
        var r = await jm.user.regist_admin({
            username: 'qingdie.me',
            password: 'qd2017'
        });
        if (r) throw JSON.stringify(r);
    };
    this.regist_user = function () {
        jm.user.regist_user([{
            username: 'qingdie.me',
            password: 'qd2017'
        }], function (r) {
            if (JSON.stringify(r) != '[{"username":"qingdie"}]') throw JSON.stringify(r);
        });
    };
    this.regist_user_async = async () => {
        var r = await jm.user.regist_user([{
            username: 'qingdie',
            password: 'qd2017'
        }]);
        if (JSON.stringify(r) != '[{"username":"qingdie"}]') throw JSON.stringify(r);
    };

})();
user.regist_admin();
user.regist_admin_async();
user.regist_user();
user.regist_user_async();