# qingdie-jmsg
极光IM服务端nodejs版sdk

```

var Jmsg = require('qingdie-jmsg');
var jm = new Jmsg('6be9204c30b9473e87bad4dc', 'e62664ad421b67270e5c9d5b');

//用于客户端的授权
this.auth = function () {
    var r = jm.user.auth();
       
};
//注册admin用户
this.regist_admin = function () {
    jm.user.regist_admin({
        username: 'qingdie.me',
        password: 'qd2017'
    }, function (r) {
        if (r) throw JSON.stringify(r);
    });
};
//异步注册admin用户
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

```
