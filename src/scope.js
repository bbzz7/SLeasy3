// SLeasy3-scope
;(function (SLeasy, $) {
    var $config = SLeasy.config();
    //scope
    var $scope = {//全域变量
        title: $config.title,//当前title
        body: $('body'),//body标签dom
        viewScale: device.landscape() ? window.innerHeight / $config.height : window.innerWidth / $config.width,//幻灯缩放比例因子
        fixHeight: 0,//全屏自适应高度变量，SLeasy.viewport()执行后，会将该值设置为当前自适应全屏高度
        fixWidth: $config.viewport,
        eventArr: [],//需要绑定的事件及元素数据数组
        sliderBox: null,//幻灯框架dom缓存变量
        swipe: 1,//是否允许滑动幻灯

        sliders: null,//幻灯dom缓存变量
        sliderIndex: 0,//幻灯当前索引
        subMotion: null,//幻灯子动画元素dom缓存变量

        details: null,//详情页dom缓存变量
        detailIndex: 0,//当前详情页索引
        detailMotion: null,//详情页子动画元素dom缓存变量

        loader: null,//loading dom元素缓存变量
        floats: null,//浮动元素dom缓存变量
        canvas: null,//画布元素dom缓存变量

        isMusic: 0,//音乐状态
        isAnim: 0,//当前幻灯切换状态
        isDetail: 0,//详情页是否打开
        isSubMotion: 0,//当前子动画完成状态
        isDetailMotion: 0,//当前详情页子动画完成状态

        timeline: null,//子动画时间线
        fixPropsArr: ['x', 'y', 'width', 'height', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'left', 'right', 'top', 'bottom', 'lineHeight', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'fontSize', 'clip', 'backgroundPositionX', 'backgroundPositionY', 'letterSpacing', 'borderRadius'],//需要修正的属性
        FXDirection: 'upDown',//幻灯切换效果方向
        clearProps: 'x,y,scale,rotationX,rotationY,rotationZ,transform,transformPerspective,webkitTransformOrigin,WebkitTransformOrigin,transformOrigin,zIndex',//动画完成之后需要清除的属性值

        labelHash: {},//标签哈希表
        router: {},//路由
        preHash: '',//上一路由哈希值

        userData: {},//用户自定义数据
        media: {},//用户初始化media dom缓存
        pluginList: [],//插件初始化函数列表

        bitmaps: {},//ae原生位图序列
        aeBitmaps: {},//ae位图对象序列
        aeLayer: {},//ae渲染层
        aeStage: {},//ae渲染舞台
        aeTimeLine: {},//ae时间线
        audios: {},//webAudio

        totalLoad: [],//应用要加载的图片总数组
    }


    SLeasy.$scope = $scope;//全局状态
    SLeasy.scope = function () {
        return $scope;
    }

    //get label
    SLeasy.label = function (key, sliderOrDetail) {//参数getSliderIndex为true:则如果是幻灯label,返回幻灯索引值,false返回幻灯dom
        if (key) {
            var value = typeof $scope.labelHash[key] != 'undefined' ? $scope.labelHash[key] : null;
            if (typeof value == 'string') {
                return $(value);
            } else {
                if (sliderOrDetail) {
                    if (sliderOrDetail == 'slider' || sliderOrDetail == 'sliders') return $scope.sliders.eq(value);
                    if (sliderOrDetail == 'detail' || sliderOrDetail == 'details') return $scope.details.eq(value);
                } else {
                    return value;
                }

            }
        } else {
            return $scope.labelHash;
        }
    }

    //check weChat
    SLeasy.isWechat = SLeasy.isWeixin = SLeasy.isWX = function (noDevTools) {
        var ua = window.navigator.userAgent.toLowerCase();
        if (noDevTools && ua.match(/wechatdevtools/i) == 'wechatdevtools') return false;
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }

    //check wexin miniprogram
    SLeasy.isWmp = function (noDevTools) {
        var ua = window.navigator.userAgent.toLowerCase();
        if (noDevTools && ua.match(/wechatdevtools/i) == 'wechatdevtools') return false;
        if (ua.match(/MicroMessenger/i) == 'micromessenger' && ua.match(/miniprogram/i) == 'miniprogram') {
            return true;
        } else {
            return false;
        }
    }

    //check weibo
    SLeasy.isWeibo = SLeasy.isWB = function () {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/weibo/i) == 'weibo') {
            return true;
        } else {
            return false;
        }
    }

    //check xiaohongshu
    SLeasy.isXiaoHongShu = SLeasy.isXHS = function () {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/discover/i) == 'discover') {
            return true;
        } else {
            return false;
        }
    }

    //check 钉钉
    SLeasy.isDingding = SLeasy.isDD = function () {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/dingtalk/i) == 'dingtalk') {
            return true;
        } else {
            return false;
        }
    }

    //weChat share
    SLeasy.share = function (opt) {
        var imgHtml = '<img src="' + opt.imgUrl + '" width="300" height="300" style="position:absolute;top:-9999px">',
            linkUrl = opt.link || location.href;
        $('body').prepend(imgHtml);
        opt.title && setTimeout(function () {
            document.title = opt.title
        }, 1000);
        //location.hash='/goTo/'+linkUrl.replace('http://','').replace('https://','');
        $scope.referrer = opt.referrer;
        $scope.goLink = opt.link || location.href;
    }

    //check http
    SLeasy.isHttp = function (url) {
        if (url) {
            return (url.indexOf('http') == 0 && url.indexOf('http://localhost') == -1) ? true : false;
        } else {
            return (location.href.indexOf('http') == 0 && location.href.indexOf('http://localhost') == -1) ? true : false;
        }
    }

    //check localhost
    SLeasy.isLocalHost = function (url) {
        if (url) {
            return (url.indexOf('http://127.0.0.1') != -1 || url.indexOf('http://localhost') != -1) ? true : false;
        } else {
            return (location.href.indexOf('http://127.0.0.1') != -1 || location.href.indexOf('http://localhost') != -1) ? true : false;
        }
    }

    //SLeasy 检测函数,检测支持见:https://github.com/matthewhudson/device.js
    SLeasy.is = function (key, callback) {
        console.log(key);
        var res = '检测参数错误~！';
        if (key == 'wechat' || key == 'weixin') {
            res = SLeasy.isWechat();
        } else if (key == 'weibo') {
            res = SLeasy.isWeibo();
        } else if (key == 'http') {
            res = SLeasy.isHttp();
        } else if (key == 'localhost') {
            res = SLeasy.isLocalHost();
        } else {
            res = device[key]();
        }
        callback && callback(res);
        return res;
    }

    //set title
    $(document).ready(function (e) {
        $scope.body = $('body');
        SLeasy.title = function (title) {
            document.title = title;
            if (SLeasy.is('weixin')) {
                // hack在微信等webview中无法修改document.title的情况
                var $iframe = $('<iframe src="' + window.location.href + '" style="display:none"></iframe>').on('load', function () {
                    setTimeout(function () {
                        $iframe.off('load').remove();
                    }, 0)
                }).appendTo($scope.body)
            }
        }
    });

    //goto url
    SLeasy.goUrl = function (url) {
        window.location.href = url || '#';
    }

    //go taobao
    SLeasy.goTaobao = SLeasy.goTmall = function (shop) {
        $scope.preHash = '/' + $scope.router.getRoute().join('/');
        //$scope.router.setRoute('goTaobao/'+shop);
        //return $scope.preHash;
        location.href = 'tmall.html#/goTaobao/' + shop;
    }

    //check goto
    SLeasy.checkGoto = function () {
        //
        //alert(!document.referrer || document.referrer.indexOf($scope.referrer)==-1);

        if (!document.referrer || document.referrer.indexOf($scope.referrer) == -1) {
            //console.log($scope.referrer);
            //console.log($scope.goLink);
            //console.log(location.href.indexOf($scope.referrer)==-1);
            if (SLeasy.isHttp() && $scope.referrer && $scope.goLink && location.href.indexOf($scope.goLink) == -1) {
                location.href = $scope.goLink;
            }
        }

        var _router = new Router();
        _router.init();

        var isGoto = _router.getRoute(0),
            url = _router.getRoute(1);

        //普通跳转探测
        if (isGoto == 'goTo') {
            //SLeasy.goUrl('http://'+url);
        }

        //淘宝跳转探测
        if (isGoto == 'goTmall' || isGoto == 'goTaobao') {
            if (!SLeasy.isWeixin()) {
                setTimeout(function () {
                    SLeasy.goUrl('http://' + url);
                }, 500);
                SLeasy.is('ios') && SLeasy.goUrl('taobao://' + url);
            }
        }
        //alert(isGoto);
        delete _router;

        //
    }

    //资源路径拼接
    SLeasy.path = function (host, url, addTimeStamp) {
        if (!url) return '';
        var timeStamp = ($config && $config.timeStamp ? $config.timeStamp : '');
        //从app.js?12345678上获取时间戳
        if (timeStamp !== false && !timeStamp && $('script[src*="app.js"]').length) {
            timeStamp = $('script[src*="app.js"]').attr('src').split('?')[1] || '';
        }
        timeStamp = timeStamp ? ('?' + timeStamp) : '';
        if (timeStamp) SLeasy.timeStamp = $scope.timeStamp = timeStamp;
        //
        if (SLeasy.isHttp(url) || SLeasy.isLocalHost(url)) {
            return url + (addTimeStamp === false ? '' : timeStamp);
        } else if (url.search(/^\/\//) !== -1) {
            return url;
        } else if (url.search(/^file:/) == -1) {
            return host + url + (addTimeStamp === false ? '' : timeStamp);
        } else {
            return url.replace(/^\/\//, '');
        }
    }

    //获取url参数
    SLeasy.getRequest = function (name, debug) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        //参数查找
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]);
        //哈希查找
        var h = window.location.hash.substr(1).replace(/^\//, '&').replace(/\?/g, '&').match(reg);
        if (h != null) return decodeURIComponent(h[2]);
        //调试返回时间错字符串
        if (debug) return ('test' + $.now());
        return '';
    }

    //获取url所有参数键值对，包含hash中的参数
    SLeasy.getURLParams = function (url) {
        var params = {};

        // 创建一个URL对象
        var urlObj = new URL(url || location.href);

        // 获取URL中的查询参数
        var searchParams = urlObj.searchParams;

        // 遍历查询参数，保存到对象中
        searchParams.forEach(function (value, key) {
            params[key] = value;
        });

        // 获取URL中的哈希参数
        var hashParams = urlObj.hash.substring(1); // 去掉开头的 #
        if (hashParams) {
            // 解析哈希参数
            var hashParamsArray = hashParams.split('&');
            hashParamsArray.forEach(function (param) {
                var keyValue = param.split('=');
                if (keyValue.length === 2) {
                    var key = decodeURIComponent(keyValue[0]);
                    var value = decodeURIComponent(keyValue[1]);
                    params[key] = value;
                }
            });
        }
        return params;
    }

    //禁止触摸默认滚动
    function stopDefaultScroll(e) {
        if (e.target.id == 'SLeasy_loading' || e.target.id == 'SLeasy_fixBox' || e.target.id == 'SLeasy_rotateTips' || $(e.target).hasClass('SLeasy_sliders') || $(e.target).hasClass('SLeasy_detail')) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.stopPropagation();
        }
    }

    SLeasy.touchScroll = function (allowTouchmove, allowSwipe) {
        //触摸滑动默认行为
        if (allowTouchmove) {
            window.removeEventListener("touchmove", stopDefaultScroll, false);
        } else {
            window.addEventListener("touchmove", stopDefaultScroll, false);
        }

        //幻灯全局swipe
        if (!SLeasy.hammerObj().element) return;
        if ($.isEmptyObject($config.loading)) {
            if (allowSwipe) {
                SLeasy.hammerObj().get('swipe').set({enable: true});
            } else {
                SLeasy.hammerObj().get('swipe').set({enable: false});
            }
        } else if (!$.isEmptyObject($config.loading) && $scope.loadingReady) {
            if (allowSwipe) {
                SLeasy.hammerObj().get('swipe').set({enable: true});
            } else {
                SLeasy.hammerObj().get('swipe').set({enable: false});
            }
        }

    }

    //生成图片序列
    SLeasy.addBitmaps = function (layerName, prefix, start, end, suffix, bit) {
        var picUrlArr = [];
        for (var i = start; i <= end; i++) {
            var picUrl = SLeasy.path($config.host, (prefix + SLeasy.bitConvent(i, bit) + suffix));
            picUrlArr.push(picUrl);
        }

        if (!layerName) return picUrlArr;

        //合并位图序列
        if ($scope.bitmaps[layerName] && $scope.bitmaps[layerName].length) {
            $scope.bitmaps[layerName] = $scope.bitmaps[layerName].concat(picUrlArr);
            return $scope.bitmaps[layerName];
        } else {
            $scope.bitmaps[layerName] = picUrlArr;
            return picUrlArr;
        }
    }

    SLeasy.bitConvent = function (num, bit) {
        var numBit = num.toString().length;
        var bits = '', numString;
        for (var n = 0; n < bit - numBit; n++) {//前置填充'0'
            bits += '0';
            numString = bits + num;
        }
        //console.log(numString)
        if (numString) {
            return numString;
        } else {
            return num.toString();
        }
    }

    //摇一摇事件封装
    SLeasy.shake = function (start, callback, tips) {
        if (window.DeviceOrientationEvent) {
            if (device.ios() && window.DeviceOrientationEvent.requestPermission) {
                window.DeviceOrientationEvent.requestPermission().then(function (state) {
                    if (state == 'granted') {
                        var myShakeEvent = new Shake({
                            threshold: 15, // optional shake strength threshold
                            timeout: 1000 // optional, determines the frequency of event generation
                        });

                        if (start == 'start') {
                            myShakeEvent.start();
                            window.addEventListener('shake', callback, false);
                        } else if (start == 'stop') {
                            window.removeEventListener('shake', callback, false);
                            myShakeEvent.stop();
                        }
                    } else {
                        alert('需要授权摇一摇,请刷新或关闭微信后,再次打开进行授权!');
                    }
                }).catch(function (err) {
                    alert('error: ' + err);
                });
            }
        } else {
            alert("您的浏览器不支持HTML5 DeviceOrientation接口");
        }
    }

    //显示元素
    SLeasy.show = function (el, time, onComplete, onUpdate) {
        //arr全部转换为jq $dom数组
        if (Object.prototype.toString.call(el) === '[object Array]') {
            el = el.map(function (item) {
                return (typeof item == 'string' ? $(item) : item);
            });
        }
        if (time) {
            TweenMax.to(el, time >= 100 ? time / 1000 : time, {
                autoAlpha: 1,
                alpha: 1,
                display: 'block',
                ease: Power0.easeNone,
                onComplete: (onComplete || function () {
                }),
                onUpdate: function () {
                    onUpdate && onUpdate();
                    if (Object.prototype.toString.call(el) === '[object Array]') {
                        $.each(el, function (index, target) {
                            target.parent && target.parent.update && target.parent.update();
                        })
                    } else {
                        el.parent && el.parent.update && el.parent.update();
                    }
                }
            });
        } else {
            TweenMax.set(el, {
                autoAlpha: 1, alpha: 1, display: 'block', onComplete: function () {
                    if (Object.prototype.toString.call(el) === '[object Array]') {
                        $.each(el, function (index, target) {
                            target.parent && target.parent.update && target.parent.update();
                        })
                    } else {
                        el.parent && el.parent.update && el.parent.update();
                    }
                }
            });
        }
        return SLeasy;
    }
    //隐藏元素
    SLeasy.hide = function (el, time, onComplete, onUpdate) {
        //arr全部转换为jq $dom数组
        if (Object.prototype.toString.call(el) === '[object Array]') {
            el = el.map(function (item) {
                console.log(typeof item);
                return (typeof item == 'string' ? $(item) : item);
            });
        }
        TweenMax.killTweensOf(el);
        if (time) {
            TweenMax.to(el, time >= 100 ? time / 1000 : time, {
                autoAlpha: 0, alpha: 0, ease: Power0.easeNone, onComplete: (onComplete || function () {
                }), onUpdate: function () {
                    onUpdate && onUpdate();
                    if (Object.prototype.toString.call(el) === '[object Array]') {
                        $.each(el, function (index, target) {
                            target.parent && target.parent.update && target.parent.update();
                        })
                    } else {
                        el.parent && el.parent.update && el.parent.update();
                    }
                }
            });
        } else {
            TweenMax.set(el, {
                autoAlpha: 0, alpha: 0, onComplete: function () {
                    if (Object.prototype.toString.call(el) === '[object Array]') {
                        $.each(el, function (index, target) {
                            target.parent && target.parent.update && target.parent.update();
                        })
                    } else {
                        el.parent && el.parent.update && el.parent.update();
                    }
                }
            });
        }
        return SLeasy;
    }

    //kill元素Tween
    SLeasy.kill = function (el) {
        TweenMax.killTweensOf(el);
        return SLeasy;
    }

    //闪烁元素
    SLeasy.blink = function (el, time, alpha, repeatDealy, count) {
        SLeasy.kill(el);
        TweenMax.to(el, time >= 100 ? time / 1000 : time, {
            autoAlpha: alpha,
            ease: Power0.easeOut,
            yoyo: true,
            repeat: count || -1,
            repeatDelay: (repeatDealy >= 100 ? repeatDealy / 1000 : repeatDealy) || 0,
        });
        return SLeasy;
    }

    //初始化media为可立即播放状态(暂停)
    SLeasy.initMedia = function (mediaSelector, callback, muted) {
        $((mediaSelector || 'audio')).each(function (index, target) {
            $(this).off();
            var $media = $(this)[0];
            console.log($media);
            $media.muted = (muted === false ? false : true);
            if (device.ios() && SLeasy.isWeibo()) $media.muted = false;//微博静音bug
            $media.play();
            if (device.android() && SLeasy.isWechat() && SLeasy.isHttp()) {
                var videoReady = false;
                $(this).one('durationchange', function () {
                    if (videoReady) return;
                    videoReady = true;
                    console.log($media.paused)
                    if ($media.paused) return;
                    $media.pause();
                    $media.currentTime = 0;
                    $media.muted = false;
                    console.log('🎵：media paused~!');
                    callback && callback($media);
                });
                $(this).one('playing', function () {
                    if (videoReady) return;
                    videoReady = true;
                    console.log($media.paused)
                    if ($media.paused) return;
                    $media.pause();
                    $media.currentTime = 0;
                    $media.muted = false;
                    console.log('🎵：media paused~!');
                    callback && callback($media);
                });
            } else if (device.ios() && SLeasy.isHttp()) {
                var videoReady = false;
                $(this).one('canplaythrough', function () {
                    if (videoReady) return;
                    videoReady = true;
                    $media.pause();
                    $media.currentTime = 0;
                    $media.muted = false;
                    console.log('🎵：media paused~!');
                    callback && callback($media);
                });
                $(this).one('playing', function () {
                    if (videoReady) return;
                    videoReady = true;
                    $media.pause();
                    $media.currentTime = 0;
                    $media.muted = false;
                    console.log('🎵：media paused~!');
                    callback && callback($media);
                });
            } else {
                $(this).one('playing', function () {
                    $media.muted = false;
                    $media.pause();
                    $media.currentTime = 0;
                    $media.muted = false;
                    console.log('🎵：media paused~!');
                    callback && callback($media);
                });
            }
            // $(this).on('loadstart', function () {
            //     console.warn('loadstart:' + $media.currentTime + '/' + $media.duration + '::' + $media.readyState);
            // });
            // $(this).on('durationchange', function () {
            //     console.warn('durationchange:' + $media.currentTime + '/' + $media.duration + '::' + $media.readyState);
            // })
            // $(this).on('loadeddata', function () {
            //     console.warn('loadeddata:' + $media.currentTime + '/' + $media.duration + '::' + $media.readyState);
            // })
            // $(this).on('progress', function () {
            //     console.warn('progress:' + $media.currentTime + '/' + $media.duration + '::' + $media.readyState);
            // })
            // $(this).on('canplay', function () {
            //     console.warn('canplay:' + $media.currentTime + '/' + $media.duration + '::' + $media.readyState);
            // })
            // $(this).on('canplaythrough', function () {
            //     console.warn('canplaythrough:' + $media.currentTime + '/' + $media.duration + '::' + $media.readyState);
            // })
            // $(this).on('playing', function () {
            //     console.warn('playing:' + $media.currentTime + '/' + $media.duration + '::' + $media.readyState);
            // })
            // $(this).on('timeupdate', function () {
            //     console.warn('timeupdate:' + $media.currentTime + '/' + $media.duration + '::' + $media.readyState);
            // })
        });
        return SLeasy;
    }

    //初始化media队列
    SLeasy.initMedias = function (els, callback, muted) {
        var i = 0;

        function _initMedia(el, toMuted) {
            SLeasy.initMedia(els[i], function () {
                i = i + 1;
                if (els[i]) {
                    _initMedia(els[i], toMuted);
                } else {
                    callback && callback();
                }
            }, toMuted)
        }

        //
        _initMedia(els[i], (muted || false));
    }

    //获取meida
    SLeasy.media = function (mediaSelector) {
        if ($(mediaSelector).length) {
            return $(mediaSelector)[0];
        } else if ($scope.audios[mediaSelector]) {
            return $scope.audios[mediaSelector];
        } else if ($('.' + mediaSelector).length) {
            $('.' + mediaSelector)[0].stop = $('.' + mediaSelector)[0].pause;
            $('.' + mediaSelector)[0].playing = function () {
                return !$('.' + mediaSelector)[0].paused;
            };
            if (Howler) {
                Howler.mute = function (isMute) {
                    $('audio').each(function () {
                        $(this)[0].muted = isMute;
                    });
                }
            }
            return $('.' + mediaSelector)[0];
        } else {
            alert('未找到对应音频节点~::' + mediaSelector)
        }
    }

    //设置media
    SLeasy.setMedia = function (mediaSelector, url, callback) {
        SLeasy.media(mediaSelector).src = SLeasy.path($config.host, url);
        setTimeout(function () {
            SLeasy.initMedia(mediaSelector, callback);
        }, 50);
        return SLeasy;
    }

    //循环media
    SLeasy.loopMedia = function (mediaSelector, loop, offset, delay) {
        var $media = SLeasy.media(mediaSelector);
        var total = $media.duration;
        var buff = offset || 0.1;
        $media.looper = 0;

        TweenMax.to($media, $media.duration - buff, {
            looper: $media.duration - buff, repeat: loop,
            onRepeat: function () {
                $media.currentTime = 0
            },
            onStart: function () {
                $media.play();
            },
            delay: delay
        });
        return SLeasy;
    }

    SLeasy.noopMedia = function (mediaSelector) {
        var $media = SLeasy.media(mediaSelector);
        SLeasy.kill($media);
        $media.pause();
        return SLeasy;
    }

    SLeasy.playMedia = function (mediaSelector) {
        var $media = SLeasy.media(mediaSelector);
        $media.pause();
        $media.currentTime = 0;
        $media.muted = false;
        $media.play();
        return SLeasy;
    }

    SLeasy.pauseMedia = function (mediaSelector) {
        var $media = SLeasy.media(mediaSelector);
        $media.pause();
        return SLeasy;
    }

    SLeasy.muteMedia = function (mediaSelector, muted) {
        var $media = SLeasy.media(mediaSelector);
        $media.muted = (muted == 0 ? false : true);
        return SLeasy;
    }

    //长按选中
    SLeasy.userSelect = function (el, canSelect) {
        if (canSelect == false) {
            $(el).css({
                'user-select': 'none',
                '-webkit-user-select': 'none',
                '-webkit-touch-callout': 'none',
            })
        } else if (canSelect == true) {
            $(el).css({
                'user-select': 'auto',
                '-webkit-user-select': 'auto',
                '-webkit-touch-callout': 'default',
            })
        }
    }

    //安卓微信同层全屏resize
    SLeasy.resize = function (callback) {
        var oldWidth = window.innerWidth;
        var oldHeight = window.innerHeight;
        window.onresize = function () {
            $('#SLeasy,.SLeasy_sliders').css({
                width: window.innerWidth + 'px',
                height: window.innerHeight + 'px'
            });
            var offsetX = (window.innerWidth - oldWidth) / 2;
            var offsetY = (window.innerHeight - oldHeight) / 2;
            callback(window.innerWidth, window.innerHeight, offsetX, offsetY);
        }
    }

    //
    SLeasy.viewScale = function (num, reverse) {
        return reverse ? num / $scope.viewScale : num * $scope.viewScale;
    }

    //
    SLeasy.respY = function (y, margin, height, offset) {
        return function (index, target) {
            var m = SLeasy.viewScale(margin) || 0;
            var yBottom = y * $scope.viewScale + $(target).height() + $scope.yOffset.center;
            var yTop = y * $scope.viewScale + $scope.yOffset.center;
            if (yBottom > $scope.fixHeight) {
                return $scope.fixHeight - $(target).height() - m;
            } else if (yTop < 0) {
                return m;
            } else if (height && $scope.fixHeight > SLeasy.viewScale(height)) {
                //offset百分比
                if (offset < 1 && offset > -1) {
                    var offsetY = ($scope.fixHeight - SLeasy.viewScale(height)) / 2 * offset;
                } else {
                    var offsetY = offset || ($scope.fixHeight - SLeasy.viewScale(height)) / 4;
                }
                return y * $scope.viewScale + $scope.yOffset.center + offsetY;
            } else {
                return y * $scope.viewScale + $scope.yOffset.center;
            }
        }
    }

    //
    SLeasy.inHeight = function (height) {
        return function () {
            return $scope.fixHeight >= SLeasy.viewScale(height) ? 1 : 0;
        }
    }

    //
    SLeasy.checkPhone = function (phoneNum) {
        return (/^1[3456789]\d{9}$/.test(phoneNum));
    }

    //微信底部导航条高度检测处理
    SLeasy.checkNavBar = function () {
        $scope.hasNavBar = (SLeasy.isWechat() && history.length > 1) ? true : false;
        if ($scope.hasNavBar && !SLeasy.getRequest('SLReload')) {
            if (location.hash) {
                location.hash = location.hash + '&SLReload=1';
            } else {
                location.hash = 'SLReload=1';
            }
            location.reload();
        }
        return $scope.hasNavBar;
    }

    //给当前url添加时间戳
    SLeasy.timeStampURL = function () {
        var search = '';
        if (!location.search) {
            search = ('?ts=' + (new Date().getTime()));
        } else {
            search = location.search;
            var reg = new RegExp("(^|&)ts=([^&]*)(&|$)");
            var r = search.substr(1).match(reg);
            if (r != null) {
                search = search.replace(r[0], ('ts=' + (new Date().getTime())))
            } else {
                search = search + ('&ts=' + (new Date().getTime()));
            }
        }
        var url = location.origin + location.pathname + search + location.hash;
        return url;
    }

    //insert
    SLeasy.insert = function (el, data, noFix) {
        var type = el.replace('.', '').replace('#', '');

        function _imgToDiv() {
            var dfd = new $.Deferred();
            var html = SLeasy.subElement(data, type, null, 'block');
            $(html).appendTo(el);
            $scope.loadingReady = true;
            SLeasy.imgToDiv($(el), dfd, true);
            // console.info(data)
            return dfd;
        }

        return _imgToDiv().done(function () {
            function setEl(elData) {
                for (var i = 0; i < elData.length; i++) {
                    var el = elData[i];
                    var $dom = $('#SLeasy_' + type + '_' + el.index);//当前子动画元素dom
                    //处理shadownBt的情况
                    if (el.shadownBt) {
                        var bt = el.shadownBt;
                        el.set = $.extend((typeof bt[3] == 'number' ? {
                            x: bt[2],
                            y: bt[3]
                        } : {x: bt[2]}), el.set);
                    }
                    SLeasy.set($dom, el.set, noFix === false ? false : true);
                    if (el.event) {
                        SLeasy.on($dom[0], el.event, el.onEvent);
                    }
                    if (el.on) {
                        for (event in el.on) {
                            SLeasy.on($dom[0], event, el.on[event]);
                        }
                    }
                    //子元素递归
                    if (el.subMotion && el.subMotion.length) {
                        setEl(el.subMotion);
                    }
                }
            }
            setEl(data);
        })
    }

    //旋转状态判断
    SLeasy.isRotated = function () {
        //是否旋转判断
        if ((device.landscape() && $config.width > $config.height) || (device.portrait() && $config.width < $config.height)) {
            $scope.isRotated = false;
        } else {
            $scope.isRotated = true;
        }
        return $scope.isRotated;
    }

    //wrap gsap
    SLeasy.set = function (el, set, noFix) {
        var _set = $.extend({}, set);
        TweenMax.set(el, noFix ? SLeasy.fixProps(_set) : SLeasy.fixProps(_set, true, true));
        return SLeasy;
    }

    SLeasy.to = function (el, to, noFix) {
        var _to = $.extend({}, to);
        TweenMax.to(el, noFix ? SLeasy.fixProps(_to) : SLeasy.fixProps(_to, true, true));
        return SLeasy;
    }

    SLeasy.from = function (el, from, noFix) {
        var _from = $.extend({}, from);
        TweenMax.from(el, noFix ? SLeasy.fixProps(_from) : SLeasy.fixProps(_from, true, true));
        return SLeasy;
    }

    SLeasy.fromTo = function (el, from, to, noFix) {
        var _from = $.extend({}, from);
        var _to = $.extend({}, to);
        TweenMax.fromTo(el, noFix ? SLeasy.fixProps(_from) : SLeasy.fixProps(_from, true, true), noFix ? SLeasy.fixProps(_to) : SLeasy.fixProps(_to, true, true));
        return SLeasy;
    }

    SLeasy.enableInlineVideo = function () {
        if (SLeasy.isWeibo()) {
            $('video').each(function () {
                enableInlineVideo(this);
            });
        }
    }

    SLeasy.on = function (el, event, callback) {
        $(el).each(function (index) {
            var dom = this;
            var HDom = new Hammer(dom),
                e = event;

            if ($config.debugMode) $(dom).addClass('SLeasy_shadownBt');
            dom.style.cursor = "pointer";//鼠标手势

            if ('click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave contextmenu touchstart touchmove touchend'.indexOf(e) != -1) {//点击事件,方便某些广告监测代码
                $(dom).off(e).on(e, function (ev) {
                    callback(ev, index, dom);
                });
            } else if (e == 'hold') {//长按事件
                HDom.get('press').set({time: 1000});
                HDom.off('press').on('press', function (ev) {
                    callback(ev, index, dom);
                });
            } else {
                HDom.get('pan').set({direction: Hammer.DIRECTION_ALL});
                HDom.get('swipe').set({direction: Hammer.DIRECTION_ALL});
                HDom.off(e).on(e, function (ev) {
                    callback(ev, index, dom);
                });//事件绑定
            }
        })
    }

    SLeasy.bg = function (el, url, isImgSrc, isBase64, type) {
        if (el && !url) {
            var bg = $(el).css('backgroundImage').replace('url("', '').replace('")', '').replace('url(', '').replace(')', '');
            return bg;
        }
        var mt = '';
        if (type) {
            var types = {
                'jpg': 'data:image/jpeg;base64,',
                'png': 'data:image/png;base64,',
                'gif': 'data:image/gif;base64,',
            }
            mt = types[type] || '';
        }
        if (isImgSrc) {
            if (url) {
                var bgUrl = isBase64 ? mt + url : SLeasy.path($config.host, url);
                if (url === 'none') bgUrl = '#';
                $(el).attr('src', bgUrl);
            } else {
                $(el).removeAttr("src");
            }
        } else {
            var bgUrl = 'url(' + (isBase64 ? mt + url : SLeasy.path($config.host, url)) + ')';
            if (url === 'none') bgUrl = 'none';
            $(el).css({backgroundImage: bgUrl});
        }
        return SLeasy;
    }

    //加载图片
    SLeasy.loadImg = SLeasy.loadImage = function (url, successCallback, errorCallback) {
        var dfd = new $.Deferred();
        var img = new Image();

        img.onload = function () {
            // 图片成功加载
            if (typeof successCallback === 'function') {
                successCallback(img);
            }
            dfd.resolve(img);
        };

        img.onerror = function (e) {
            // 图片加载错误
            if (typeof errorCallback === 'function') {
                errorCallback(e);
            }
            dfd.reject(e);
        };
        img.src = SLeasy.path($config.host, url);
        return dfd;
    }

    //解决div设置contenteditable为true时，获取焦点后光标位置放在最后
    SLeasy.keepLastIndex = function (obj) {
        if (window.getSelection) {//ie11 10 9 ff safari
            obj.focus(); //解决ff不获取焦点无法定位问题
            var range = window.getSelection();//创建range
            range.selectAllChildren(obj);//range 选择obj下所有子内容
            range.collapseToEnd();//光标移至最后
        } else if (document.selection) {//ie10 9 8 7 6 5
            var range = document.selection.createRange();//创建选择对象
            //var range = document.body.createTextRange();
            range.moveToElementText(obj);//range定位到obj
            range.collapse(false);//光标移至最后
            range.select();
        }
    }

    //复制文字功能函数
    // 必须手动触发 点击事件或者其他事件，不能直接使用js调用！！！
    //  copyText('h5实现一键复制到粘贴板 兼容ios')
    /*兼容性补充：
     移动端：
     安卓手机：微信（chrome）和几个手机浏览器都可以用。
     苹果手机：微信里面和sarafi浏览器里也都可以，
     PC:sarafi版本必须在10.2以上，其他浏览器可以.
     兼容性测试网站：https://www.caniuse.com/*/
    SLeasy.copyText = function (text, msg, callBack) {
        var element = document.createElement('textarea');
        var previouslyFocusedElement = document.activeElement;

        element.value = text;

        // Prevent keyboard from showing on mobile
        element.setAttribute('readonly', '');

        element.style.contain = 'strict';
        element.style.position = 'absolute';
        element.style.top = '-999px';
        element.style.fontSize = '12pt'; // Prevent zooming on iOS

        var selection = document.getSelection();
        var originalRange = false;
        if (selection.rangeCount > 0) {
            originalRange = selection.getRangeAt(0);
        }

        $('#SLeasy').append(element);
        element.select();

        // Explicit selection workaround for iOS
        element.selectionStart = 0;
        element.selectionEnd = text.length;

        var isSuccess = false;
        try {
            isSuccess = document.execCommand('copy');
        } catch (_) {
        }

        element.remove();

        if (originalRange) {
            selection.removeAllRanges();
            selection.addRange(originalRange);
        }

        // Get the focus back on the previously focused element, if any
        if (previouslyFocusedElement) {
            previouslyFocusedElement.focus();
        }
        if (isSuccess) {
            callBack ? callBack() : alert(msg || '已复制到粘贴板~');
        } else {
            alert('该机型不兼容复制函数，请手动复制~');
        }
        return isSuccess;
    }

    // 时间线控制,用于'时间轴模式'下
    SLeasy.play = function (position) {
        $scope.timeline.play(position);
    }

    SLeasy.timeline = function (timelineName) {
        return timelineName ? $scope[timelineName] : $scope.timeline;
    }

    //scrollMagic模式
    SLeasy.unfold = function (duration, height) {
        if (!window.ScrollMagic) return alert('请确认是否开启ScrollMagic模式~')
        var h = 0;
        for (i = 0; i < $config.sliders.length; i++) {
            console.log($config.sliders[i].height);
            if (!$config.sliders[i].height) {
                h += $scope.fixHeight;
            } else {
                h += $config.sliders[i].height * $scope.viewScale;
            }
        }
        var firstSlider = $('.SLeasy_sliders').eq(0);
        var secondSlider = $('.SLeasy_sliders').eq(2);
        TweenMax.set(firstSlider, {height: $config.height * $scope.viewScale + $scope.yOffset.center});
        TweenMax.set('#' + $config.id, {height: height - $scope.yOffset.center || h - $scope.yOffset.center});
        TweenMax.to(window, duration || 1.5, {scrollTo: height || 150, delay: 0.15});
    }

    //shadown button
    SLeasy.shadownBt = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTQ2MEFENzAxNzEzMTFFNUFGRkJFN0NENjYxNTY2QkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTQ2MEFENzExNzEzMTFFNUFGRkJFN0NENjYxNTY2QkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NDYwQUQ2RTE3MTMxMUU1QUZGQkU3Q0Q2NjE1NjZCRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NDYwQUQ2RjE3MTMxMUU1QUZGQkU3Q0Q2NjE1NjZCRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg+JIfMAAAAQSURBVHjaYvj//z8DQIABAAj8Av7bok0WAAAAAElFTkSuQmCC'

})(
    window.SLeasy = window.SLeasy || {},
    jQuery
);