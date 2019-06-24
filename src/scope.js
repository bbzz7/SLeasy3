// SLeasy3-scope
;(function (SLeasy, $) {
    var $config = SLeasy.config();

    //scope
    var $scope = {//全域变量
        title: $config.title,//当前title
        body: $('body'),//body标签dom
        viewScale: $config.viewport / $config.width,//幻灯缩放比例因子
        fixHeight: 0,//全屏自适应高度变量，SLeasy.viewport()执行后，会将该值设置为当前自适应全屏高度
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

        timeLine: null,//子动画时间线
        fixPropsArr: ['x', 'y', 'width', 'height', 'left', 'right', 'top', 'bottom', 'lineHeight', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'fontSize', 'clip', 'backgroundPositionX', 'backgroundPositionY'],//需要修正的属性
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
    SLeasy.isWechat = SLeasy.isWeixin = function () {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }

    //check weibo
    SLeasy.isWeibo = function () {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/weibo/i) == 'weibo') {
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
            return (url.indexOf('http') == 0) ? true : false;
        } else {
            return (location.href.indexOf('http') == 0) ? true : false;
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
        var timeStamp = $config && $config.timeStamp ? '?' + $config.timeStamp : '';
        if (SLeasy.isHttp(url)) {
            return url + (addTimeStamp === false ? '' : timeStamp);
        } else if (url.search(/^\/\//) == -1) {
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
        if (r != null) return r[2];
        //哈希查找
        var h = window.location.hash.substr(1).match(reg);
        if (h != null) return h[2];
        //调试返回时间错字符串
        if (debug) return ('test' + $.now());
        return '';
    }

    //禁止触摸默认滚动
    function stopDefaultScroll(e) {
        // console.log(e.target)
        if ($(e.target).hasClass('SLeasy_sliders') || $(e.target).hasClass('SLeasy_detail')) {
            e.preventDefault();
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
            var picUrl = SLeasy.path($config.host, (prefix + bitConvent(i, bit) + suffix));
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

        function bitConvent(num, bit) {
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
    }

    //摇一摇事件封装
    SLeasy.shake = function (start, callback) {
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
            TweenMax.to(el, time > 100 ? time / 1000 : time, {
                autoAlpha: 1, alpha: 1, ease: Power0.easeNone, onComplete: (onComplete || function () {
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
                autoAlpha: 1, alpha: 1, onComplete: function () {
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
        if (time) {
            TweenMax.to(el, time > 100 ? time / 1000 : time, {
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

    //初始化media为可立即播放状态(暂停)
    SLeasy.initMedia = function (mediaSelector, callback, muted) {
        $(mediaSelector).each(function (index, target) {
            $(this).off();
            var $media = $(this)[0];
            // if (muted) $media.muted = true;
            if (!(device.ios() && SLeasy.isWeibo())) $media.muted = true;//微博静音bug
            $media.play();
            if (device.android() && SLeasy.isWechat() && SLeasy.isHttp()) {
                $(this).one('durationchange', function () {
                    console.log($media.paused)
                    if ($media.paused) return;
                    $media.currentTime = 0;
                    $media.pause();
                    $media.muted = false;
                    console.log('🎵：media paused~!');
                    callback && callback($media);
                });
                $(this).one('playing', function () {
                    console.log($media.paused)
                    if ($media.paused) return;
                    $media.currentTime = 0;
                    $media.pause();
                    $media.muted = false;
                    console.log('🎵：media paused~!');
                    callback && callback($media);
                });
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
            } else if (device.ios() && SLeasy.isHttp()) {
                $(this).one('canplaythrough', function () {
                    $media.currentTime = 0;
                    $media.pause();
                    $media.muted = false;
                    console.log('🎵：media paused~!');
                    callback && callback($media);
                });
            } else {
                $(this).one('playing', function () {
                    $media.currentTime = 0;
                    $media.pause();
                    $media.muted = false;
                    console.log('🎵：media paused~!');
                    callback && callback($media);
                });
            }
        });
        return SLeasy;
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
        $media.currentTime = 0;
        $media.play();
        return SLeasy;
    }

    // 时间线控制,用于'时间轴模式'下
    SLeasy.play = function (position) {
        $scope.timeline.play(position);
    }

    SLeasy.timeline = function (timelineName) {
        return timelineName ? $scope[timelineName] : $scope.timeline;
    }

    //shadown button
    SLeasy.shadownBt = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTQ2MEFENzAxNzEzMTFFNUFGRkJFN0NENjYxNTY2QkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTQ2MEFENzExNzEzMTFFNUFGRkJFN0NENjYxNTY2QkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NDYwQUQ2RTE3MTMxMUU1QUZGQkU3Q0Q2NjE1NjZCRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NDYwQUQ2RjE3MTMxMUU1QUZGQkU3Q0Q2NjE1NjZCRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg+JIfMAAAAQSURBVHjaYvj//z8DQIABAAj8Av7bok0WAAAAAElFTkSuQmCC'

})(
    window.SLeasy = window.SLeasy || {},
    jQuery
);