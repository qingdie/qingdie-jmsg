var user = new (function () {
    var Jmsg = require('../index');
    var jm = new Jmsg('6be9204c30b9473e87bad4dc', 'e62664ad421b67270e5c9d5b');
    this.send_msg_txt = function () {
        jm.msg.send_msg({
            "version": 1,
            "target_type": "single",
            "target_id": "qingdie.me",
            "from_type": "admin",
            "from_id": "admin",
            "msg_type": "text",
            "msg_body": {
                "extras": {
                    "action": "neworder"
                },
                "text": "hello qingdie !"
            }
        }, function (r) {
            if (!r||!r.msg_id) throw JSON.stringify(r);
        });
    };
    this.send_msg_txt_async = async () => {
        var r = await jm.msg.send_msg({
            "version": 1,
            "target_type": "single",
            "target_id": "qingdie.me",
            "from_type": "admin",
            "from_id": "admin",
            "msg_type": "text",
            "msg_body": {
                "extras": {
                    "action": "neworder"
                },
                "text": "hello qingdie !"
            }
        });
        if (!r || !r.msg_id) throw JSON.stringify(r);
    };
    this.send_msg_image_async = async () => {
        var r = await jm.msg.send_msg({
            "version": 1,
            "target_type": "single",
            "target_id": "javen",
            "from_type": "admin",
            "from_id": "fang",
            "msg_type": "image",
            "msg_body": {
                "media_id": "qiniu/image/CE0ACD035CBF71F8",
                "media_crc32": 2778919613,
                "width": 3840,
                "height": 2160,
                "fsize": 3328738,
                "format": "jpg"
            }
        });
        if (!r || !r.msg_id) throw JSON.stringify(r);
    };

})();
user.send_msg_txt();
user.send_msg_txt_async();
user.send_msg_image_async();