//jssdk for wechat 1.0.0 by 庄宇 2015-01-25 email:30755405
;(function (jssdk, $) {

    //check weChat
    jssdk.isWechat = jssdk.isWeixin = function () {
        var ua = window.navigator.userAgent.toLowerCase();
        return (ua.match(/MicroMessenger/i) == 'micromessenger');
    };

    //初始化
    jssdk.init = function (myOpt) {
        var dfd = $.Deferred();
        var $config = {
            url: window.location.href.split('#')[0],
            debug: false,
            time: new Date().getTime(),
            signUrl: 'http://h5.zhuzhouzhixin.com/CI/index.php/jssdk'//签名后端
            //signUrl:'http://zhuzhouzhixin.com/CI/index.php/jssdk'//签名后端
        };
        $.extend($config, myOpt);
        if (jssdk.isWechat() || $config.debug) {
            $.get($config.signUrl, $config, function (json) {
                if (json.code && json.code == 400) {
                    dfd.reject(json);
                } else {
                    wx.config(json);//注入权限验证配置
                    wx.ready(function () {//验证成功
                        dfd.resolve();
                    });
                    wx.error(function (res) {//验证失败处理
                        //alert('验证失败:'+res.errMsg);
                        dfd.reject(res);
                    });
                }
            }, 'jsonp');
        }
        return dfd.promise();
    };


    //接口检测
    jssdk.check = function () {
        wx.checkJsApi({
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone',
                'startRecord',
                'stopRecord',
                'onVoiceRecordEnd',
                'playVoice',
                'pauseVoice',
                'stopVoice',
                'onVoicePlayEnd',
                'uploadVoice',
                'downloadVoice',
                'chooseImage',
                'previewImage',
                'uploadImage',
                'downloadImage',
                'translateVoice',
                'getNetworkType',
                'openLocation',
                'getLocation',
                'hideOptionMenu',
                'showOptionMenu',
                'hideMenuItems',
                'showMenuItems',
                'hideAllNonBaseMenuItem',
                'showAllNonBaseMenuItem',
                'closeWindow',
                'scanQRCode',
                'chooseWXPay',
                'openProductSpecificView',
                'addCard',
                'chooseCard',
                'openCard'
            ],
            success: function (res) {
                alert("检测通过：" + JSON.stringify(res));
            },
            fail: function (res) {
                alert("检测失败：" + JSON.stringify(res));
            },
            complete: function (res) {
                alert("检测结束:" + JSON.stringify(res));
            }
        });
    };


    //分享
    jssdk.share = function (opt) {
        var $config = {
            title: '', // 分享标题
            desc: '', // 分享描述
            link: '', // 分享链接
            imgUrl: '', // 分享图标
            type: '', // 分享类型,music、video或link，不填默认为link
            dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
            }
        };

        $.extend($config, opt);

        //朋友圈
        wx.onMenuShareTimeline({
            title: $config.title, // 分享标题
            link: $config.link, // 分享链接
            imgUrl: $config.imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
                $config.success();
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                $config.cancle();
            }
        });

        //分享给朋友
        wx.onMenuShareAppMessage({
            title: $config.title, // 分享标题
            desc: $config.desc, // 分享描述
            link: $config.link, // 分享链接
            imgUrl: $config.imgUrl, // 分享图标
            type: $config.type, // 分享类型,music、video或link，不填默认为link
            dataUrl: $config.dataUrl, // 如果type是music或video，则要提供数据链接，默认为空
            success: function () {
                // 用户确认分享后执行的回调函数
                $config.success();
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                $config.cancle();
            }
        });

        //分享到qq
        wx.onMenuShareQQ({
            title: $config.title, // 分享标题
            desc: $config.desc, // 分享描述
            link: $config.link, // 分享链接
            imgUrl: $config.imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
                $config.success();
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                $config.cancle();
            }
        });

        //分享到腾讯微博
        wx.onMenuShareWeibo({
            title: $config.title, // 分享标题
            desc: $config.desc, // 分享描述
            link: $config.link, // 分享链接
            imgUrl: $config.imgUrl, // 分享图标
            success: function () {
                // 用户确认分享后执行的回调函数
                $config.success();
            },
            cancel: function () {
                // 用户取消分享后执行的回调函数
                $config.cancle();
            }
        });

    };

    //选择图片
    jssdk.chooseImage = function (opt) {
        var dfd = $.Deferred();
        var $config = {
            count: 1, // 默认9
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                console.log(res);
                var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                dfd.resolve(localIds);
            }
        };
        $.extend($config, opt);
        wx.chooseImage($config);
        return dfd.promise();
    };


    //上传图片
    jssdk._uploadImage = function (opt) {
        var dfd = $.Deferred();
        var $config = {
            localId: opt.localId, // 需要上传的图片的本地ID，由chooseImage接口获得
            isShowProgressTips: 1, // 默认为1，显示进度提示
            success: function (res) {
                console.log(res);
                var serverId = res.serverId; // 返回图片的服务器端ID
                dfd.resolve(serverId);
            }
        };
        $.extend($config, opt);
        wx.uploadImage($config);
        return dfd.promise();
    };


    //上传单张图片,并下载到本地服务器
    jssdk.uploadImage = function (opt) {
        var $config = {
            localId: '', // 需要上传的图片的本地ID，由chooseImage接口获得
            apiUrl: 'http://www.zhuzhouzhixin.com/CI/index.php/weChatPic/'//图片上传地址
        };
        $.extend($config, opt);
        return jssdk._uploadImage($config).then(function (serverId) {
            return $.get($config.apiUrl, {mediaId: serverId}, '', 'jsonp');
        })
    };


//
})(window.jssdk = window.jssdk || {}, jQuery);