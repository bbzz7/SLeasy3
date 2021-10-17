//jssdk for wechat 1.0.1 by 庄宇 2020-01-18 email:30755405
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
            url: encodeURIComponent(window.location.href.split('#')[0]),
            debug: false,
            time: new Date().getTime(),
            // signUrl: 'http://www.zhuzhouzhixin.com/CI/index.php/jssdk',//签名后端
            // signUrl:'https://h5.lrbnews.com/CI/index.php/Jssdk'//签名后端
            signUrl: 'https://h5.timaworks.com/CI/index.php/Jssdk'//签名后端
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
                'updateAppMessageShareData',
                'updateTimelineShareData',
                'onMenuShareTimeline',//（即将废弃）
                'onMenuShareAppMessage',//（即将废弃）
                'onMenuShareQQ',//（即将废弃）
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
            openTagList: [
                '<wx-open-launch-weapp>',
                '<wx-open-launch-app>',
                '<wx-open-subscribe>',
                '<wx-open-audio>'
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
                $config.cancel();
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
                $config.cancel();
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
                $config.cancel();
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
                $config.cancel();
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
            apiUrl: 'https://h5.timaworks.com/CI/index.php/weChatPic/'//图片上传地址
        };
        $.extend($config, opt);
        return jssdk._uploadImage($config).then(function (serverId) {
            console.log(serverId);
            return $.get($config.apiUrl, {mediaId: serverId}, '', 'jsonp');
        })
    };

    //隐藏复制链接、用浏览器打开、阅读模式、邮件等菜单
    jssdk.hide = function (itemArr) {
        var $config = {
            menuList: [
                'menuItem:copyUrl',//复制链接
                'menuItem:openWithQQBrowser',//在QQ浏览器中打开
                'menuItem:openWithSafari',//在Safari中打开
                'menuItem:readMode',//阅读模式
                'menuItem:share:email',//邮件

            ] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
        };
        if (itemArr == 'strict') {
            var strictMenu = [
                'menuItem:share:qq',
                'menuItem:share:weiboApp',
                'menuItem:share:facebook',
                'menuItem:share:QZone'
            ];
            $config.menuList = $config.menuList.concat(strictMenu);
        } else {
            $.extend($config, {menuList: itemArr});
        }
        wx.hideMenuItems($config);
    }

    //开始录音
    jssdk.startRecord = wx.startRecord;

    //停止录音
    jssdk.stopRecord = function (translate, uploadVoice) {
        var dfd = $.Deferred();
        wx.stopRecord({
            success: function (res) {
                var localId = res.localId;
                if (translate) {
                    wx.translateVoice({
                        localId: localId, // 需要识别的音频的本地Id，由录音相关接口获得
                        isShowProgressTips: 1, // 默认为1，显示进度提示
                        success: function (res) {
                            dfd.resolve(res.translateResult); // 语音识别的结果
                        }
                    });
                } else if (uploadVoice) {
                    wx.uploadVoice({
                        localId: localId, // 需要上传的音频的本地ID，由stopRecord接口获得
                        isShowProgressTips: 1, // 默认为1，显示进度提示
                        success: function (res) {
                            var serverId = res.serverId; // 返回音频的服务器端ID
                            dfd.resolve(serverId);
                        }
                    });
                } else {
                    dfd.resolve(localId);
                }
            }
        });
        return dfd.promise();
    }

    //播放语音
    jssdk.playVoice = function (localId) {
        wx.playVoice({
            localId: localId // 需要播放的音频的本地ID，由stopRecord接口获得
        });
    }

    //暂停播放语音
    jssdk.pauseVoice = function (localId) {
        wx.pauseVoice({
            localId: localId // 需要播放的音频的本地ID，由stopRecord接口获得
        });
    }

    //停止播放语音
    jssdk.stopVoice = function (localId) {
        wx.stopVoice({
            localId: localId // 需要播放的音频的本地ID，由stopRecord接口获得
        });
    }

    //上传语音
    jssdk.uploadVoice = function (localId, showProgress) {
        var dfd = $.Deferred();
        wx.uploadVoice({
            localId: localId, // 需要上传的音频的本地ID，由stopRecord接口获得
            isShowProgressTips: (typeof showProgress == 'undefined') ? 1 : showProgress, // 默认为1，显示进度提示
            success: function (res) {
                var serverId = res.serverId; // 返回音频的服务器端ID
                dfd.resolve(serverId);
            }
        });
        return dfd.promise();
    }

    //录音自动停止事件
    jssdk.onVoiceRecordEnd = function () {
        var dfd = $.Deferred();
        wx.onVoiceRecordEnd({
            // 录音时间超过一分钟没有停止的时候会执行 complete 回调
            complete: function (res) {
                var localId = res.localId;
                dfd.resolve(localId);
            }
        });
        return dfd.promise();
    }

    //语音播放完毕事件
    jssdk.onVoicePlayEnd = function () {
        var dfd = $.Deferred();
        wx.onVoicePlayEnd({
            success: function (res) {
                var localId = res.localId; // 返回音频的本地ID
                dfd.resolve(localId);
            }
        });
        return dfd.promise();
    }
//
})(window.jssdk = window.jssdk || {}, jQuery);

//Base64.min.js =====================================================================
(function (global) {
    "use strict";
    var _Base64 = global.Base64;
    var version = "2.1.9";
    var buffer;
    if (typeof module !== "undefined" && module.exports) {
        try {
            buffer = require("buffer").Buffer
        } catch (err) {
        }
    }
    var b64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var b64tab = function (bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    var cb_utob = function (c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 128 ? c : cc < 2048 ? fromCharCode(192 | cc >>> 6) + fromCharCode(128 | cc & 63) : fromCharCode(224 | cc >>> 12 & 15) + fromCharCode(128 | cc >>> 6 & 63) + fromCharCode(128 | cc & 63)
        } else {
            var cc = 65536 + (c.charCodeAt(0) - 55296) * 1024 + (c.charCodeAt(1) - 56320);
            return fromCharCode(240 | cc >>> 18 & 7) + fromCharCode(128 | cc >>> 12 & 63) + fromCharCode(128 | cc >>> 6 & 63) + fromCharCode(128 | cc & 63)
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function (u) {
        return u.replace(re_utob, cb_utob)
    };
    var cb_encode = function (ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
            ord = ccc.charCodeAt(0) << 16 | (ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8 | (ccc.length > 2 ? ccc.charCodeAt(2) : 0),
            chars = [b64chars.charAt(ord >>> 18), b64chars.charAt(ord >>> 12 & 63), padlen >= 2 ? "=" : b64chars.charAt(ord >>> 6 & 63), padlen >= 1 ? "=" : b64chars.charAt(ord & 63)];
        return chars.join("")
    };
    var btoa = global.btoa ? function (b) {
        return global.btoa(b)
    } : function (b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode)
    };
    var _encode = buffer ? function (u) {
        return (u.constructor === buffer.constructor ? u : new buffer(u)).toString("base64")
    } : function (u) {
        return btoa(utob(u))
    };
    var encode = function (u, urisafe) {
        return !urisafe ? _encode(String(u)) : _encode(String(u)).replace(/[+\/]/g, function (m0) {
            return m0 == "+" ? "-" : "_"
        }).replace(/=/g, "")
    };
    var encodeURI = function (u) {
        return encode(u, true)
    };
    var re_btou = new RegExp(["[À-ß][-¿]", "[à-ï][-¿]{2}", "[ð-÷][-¿]{3}"].join("|"), "g");
    var cb_btou = function (cccc) {
        switch (cccc.length) {
            case 4:
                var cp = (7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3),
                    offset = cp - 65536;
                return fromCharCode((offset >>> 10) + 55296) + fromCharCode((offset & 1023) + 56320);
            case 3:
                return fromCharCode((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));
            default:
                return fromCharCode((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1))
        }
    };
    var btou = function (b) {
        return b.replace(re_btou, cb_btou)
    };
    var cb_decode = function (cccc) {
        var len = cccc.length, padlen = len % 4,
            n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0) | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0) | (len > 2 ? b64tab[cccc.charAt(2)] << 6 : 0) | (len > 3 ? b64tab[cccc.charAt(3)] : 0),
            chars = [fromCharCode(n >>> 16), fromCharCode(n >>> 8 & 255), fromCharCode(n & 255)];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join("")
    };
    var atob = global.atob ? function (a) {
        return global.atob(a)
    } : function (a) {
        return a.replace(/[\s\S]{1,4}/g, cb_decode)
    };
    var _decode = buffer ? function (a) {
        return (a.constructor === buffer.constructor ? a : new buffer(a, "base64")).toString()
    } : function (a) {
        return btou(atob(a))
    };
    var decode = function (a) {
        return _decode(String(a).replace(/[-_]/g, function (m0) {
            return m0 == "-" ? "+" : "/"
        }).replace(/[^A-Za-z0-9\+\/]/g, ""))
    };
    var noConflict = function () {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64
    };
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict
    };
    if (typeof Object.defineProperty === "function") {
        var noEnum = function (v) {
            return {value: v, enumerable: false, writable: true, configurable: true}
        };
        global.Base64.extendString = function () {
            Object.defineProperty(String.prototype, "fromBase64", noEnum(function () {
                return decode(this)
            }));
            Object.defineProperty(String.prototype, "toBase64", noEnum(function (urisafe) {
                return encode(this, urisafe)
            }));
            Object.defineProperty(String.prototype, "toBase64URI", noEnum(function () {
                return encode(this, true)
            }))
        }
    }
    if (global["Meteor"]) {
        Base64 = global.Base64
    }
})(this);