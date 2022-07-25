// SLeasy3-loader
;
(function (SLeasy, $) {
    var $config = SLeasy.config(),//全局配置
        $scope = SLeasy.scope();//公有变量

    SLeasy.loader = SLeasy.loader || {}

    //html
    SLeasy.loader.html = function () {
        //loading-style
        var loaderColor = $config.loader.color;
        var loaderBg = $config.loader.bg;
        var loaderStyle = [
            '<svg class="SLeasy_loadingSVG" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="' + loaderColor + '" style="position: absolute;left: 50%;top:50%;margin-left: -' + $config.loader.size[0] / 2 + 'px;margin-top: -' + $config.loader.size[1] / 2 + 'px">\
            <g fill="none" fill-rule="evenodd">\
                <g transform="translate(1 1)" stroke-width="2">\
                    <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>\
                    <path d="M36 18c0-9.94-8.06-18-18-18">\
                        <animateTransform\
                            attributeName="transform"\
                            type="rotate"\
                            from="0 18 18"\
                            to="360 18 18"\
                            dur="1s"\
                            repeatCount="indefinite"/>\
                    </path>\
                </g>\
            </g>\
        </svg>',

            //==================================================================================

            '<svg class="SLeasy_loadingSVG" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" style="position: absolute;left: 50%;top:50%">\
                <defs>\
                <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">\
                    <stop stop-color="' + loaderColor + '" stop-opacity="0" offset="0%"/>\
                <stop stop-color="' + loaderColor + '" stop-opacity=".631" offset="63.146%"/>\
                <stop stop-color="' + loaderColor + '" offset="100%"/>\
            </linearGradient>\
            </defs>\
            <g fill="none" fill-rule="evenodd">\
                <g transform="translate(1 1)">\
                    <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">\
                        <animateTransform\
                            attributeName="transform"\
                            type="rotate"\
                            from="0 18 18"\
                            to="360 18 18"\
                            dur="0.9s"\
                            repeatCount="indefinite" />\
                    </path>\
                    <circle fill="#fff" cx="36" cy="18" r="1">\
                        <animateTransform\
                            attributeName="transform"\
                            type="rotate"\
                            from="0 18 18"\
                            to="360 18 18"\
                            dur="0.9s"\
                            repeatCount="indefinite" />\
                    </circle>\
                </g>\
            </g>\
        </svg>'

            //==================================================================================
        ];

        var loadingStyle = 'position:absolute;z-index:9999;overflow:hidden;width:100%;height:100%;';

        var percentStyle = 'position:absolute;text-align:center;left: 50%;top:50%;' +
            'width:' + $config.loader.size[0] + 'px;' +
            'height:' + $config.loader.size[1] + 'px;' +
            'margin-left:-' + ($config.loader.size[0] / 2) + 'px;' +
            'margin-top:-' + ($config.loader.size[1] / 2) + 'px;' +
            'line-height:' + $config.loader.size[1] + 'px;' +
            $config.loader.textStyle;

        var msgStyle = 'position:absolute;text-align:center;width:100%;top:50%;' +
            'margin-top:' + ($config.loader.size[1] / 2) + 'px;' +
            'height:' + $config.loader.size[1] + 'px;' +
            'line-height:' + $config.loader.size[1] + 'px;' +
            $config.loader.textStyle;

        var overLayStyle = 'width:100%;height:100%;' +
            'background:' + loaderBg + ';position:absolute;';

        var percentHtml = '<div id="SLeasy_loader_percent" style="' + percentStyle + '"></div>';
        var msgHtml = '<div id="SLeasy_loader_msg" style="' + msgStyle + '"></div>';
        var overLayHtml = '<div id="SLeasy_loader_overLay" style="' + overLayStyle + '"></div>'

        return '<div id="SLeasy_loader" style=' + loadingStyle + '>' + overLayHtml + (typeof $config.loader.style == 'number' ? loaderStyle[$config.loader.style] : $config.loader.style) + percentHtml + msgHtml + '</div>';
    }

    //percent
    SLeasy.loader.progress = function (percent) {
        $("#SLeasy_loader_percent").text(percent);
    }

    //show
    SLeasy.loader.show = function (msg, overLayBg) {
        if ($("#SLeasy_loader").length) { //如果loader已初始化
            msg && $("#SLeasy_loader_msg").text(msg) && SLeasy.loader.progress('');//设置msg
            overLayBg && $("#SLeasy_loader_overLay").css({background: overLayBg});//设置背景
            $("#SLeasy_loader").fadeIn(300);
        } else {
            var loaderBox = $config.stageMode == 'scroll' ? $("body") : $scope.sliderBox;
            loaderBox.prepend(SLeasy.loader.html());
            msg && $("#SLeasy_loader_msg").text(msg) && SLeasy.loader.progress('');//设置msg
            overLayBg && $("#SLeasy_loader_overLay").css({background: overLayBg});//设置背景
            $("#SLeasy_loader").fadeIn(300);
        }
        return SLeasy;
    }

    //hide
    SLeasy.loader.hide = SLeasy.loader.hidden = function () {
        $("#SLeasy_loader").fadeOut(300);
        return SLeasy;
    }

    //load
    SLeasy.loader.load = function (urlArr, loadType, showLoading, callback) {
        var stime = new Date().getTime();
        var dfd = $.Deferred();
        var _showLoading = typeof showLoading == 'undefined' ? ($.isEmptyObject($config.loading) ? $config.preload : false) : showLoading;
        var _loadType = loadType || 2;
        _showLoading && $config.loader.show !== false && SLeasy.loader.show();

        var loaded = 0;
        SLeasy.loader.percent = 0;
        var hasCustomLoading = !$.isEmptyObject($config.loading);//是否有自定义loading

        (urlArr && urlArr.length) ? (loadType == 'multi' ? _multiLoad(urlArr) : _load(urlArr)) : (SLeasy.loader.hidden(), dfd.resolve($config, $scope));//如果加载数组为空则立即返回

        function _load(loadArr, callback) {
            var threadLoaded = 0;
            for (var j = 0; j < loadType; j++) {
                (function (i) {
                    if (!loadArr[loaded + i]) return;
                    var img = new Image();
                    // img.crossOrigin = "Anonymous";
                    img.src = loadArr[loaded + i];
                    // console.log(':::::load开始加载：' + img.src);
                    img.onload = function () {
                        console.log(':::' + (loaded + i) + '::加载完毕：' + img.src);
                        loaded++;
                        threadLoaded++;
                        //console.log(loaded);
                        SLeasy.loader.percent = Math.round(loaded * 100 / loadArr.length / ((!$.isEmptyObject($config.loading) && !$scope.loadingReady ? 100 : $config.loader.endAt) / 100));
                        SLeasy.loader.percent = SLeasy.loader.percent > 100 ? 100 : SLeasy.loader.percent;
                        if (hasCustomLoading && $scope.loadingReady) {
                            //自定义loading的onProgress回调
                            // console.log('========================='+percent+'========================')
                            $config.loading.onProgress && $config.loading.onProgress(SLeasy.loader.percent);
                        } else {
                            $config.on['loadProgress'](SLeasy.loader.percent); //预加载进行时回调
                        }
                        // dfd.notify(SLeasy.loader.percent);
                        if (SLeasy.loader.percent >= 100) {
                            console.log('加载共::>>>>>【' + (new Date().getTime() - stime) / 1000 + '秒】')
                            if ($scope.loadingReady || (!hasCustomLoading)) {
                                callback ? callback() : $config.on['loaded'](); //预加载完毕回调
                            } else {
                                //自定义loading自身加载完毕回调
                                $config.loading && $config.loading.onLoadingLoaded && $config.loading.onLoadingLoaded();
                            }
                            dfd.resolve($config, $scope);
                        } else {
                            if (threadLoaded == loadType) {
                                _load(loadArr);
                                console.log('-------------------------------');
                            }
                        }
                    }
                })(j)
            }
        }

        function _multiLoad(loadArr, callback) {
            for (var j = 0; j < loadArr.length; j++) {
                (function (i) {
                    // setTimeout(function () {
                    var img = new Image();
                    // img.crossOrigin = "Anonymous";
                    img.src = loadArr[i];
                    console.log(':::::multiLoad开始加载：' + img.src);
                    img.onload = function () {
                        console.log(':::' + i + '::加载完毕：' + img.src);
                        loaded++;
                        //console.log(loaded);
                        SLeasy.loader.percent = Math.round(loaded * 100 / loadArr.length / ((!$.isEmptyObject($config.loading) && !$scope.loadingReady ? 100 : $config.loader.endAt) / 100));
                        SLeasy.loader.percent = SLeasy.loader.percent > 100 ? 100 : SLeasy.loader.percent;
                        $config.on['loadProgress'](SLeasy.loader.percent); //预加载进行时回调
                        //自定义loading百分比显示
                        if (hasCustomLoading && $scope.loadingReady) {
                            //自定义loading的onProgress回调
                            // console.log('========================='+percent+'========================')
                            $config.loading.onProgress && $config.loading.onProgress(SLeasy.loader.percent);
                        }
                        // dfd.notify(SLeasy.loader.percent);
                        if (SLeasy.loader.percent >= 100) {
                            console.log('加载共::>>>>>【' + (new Date().getTime() - stime) / 1000 + '秒】');
                            if ($scope.loadingReady || (!hasCustomLoading)) {
                                callback ? callback() : $config.on['loaded'](); //预加载完毕回调
                            } else {
                                //自定义loading自身加载完毕回调
                                $config.loading && $config.loading.onLoadingLoaded && $config.loading.onLoadingLoaded();
                            }
                            dfd.resolve($config, $scope);
                        }

                    }
                    // }, 1000 / 50 * i)
                })(j)
            }
        }

        return dfd.promise();
    }

    //exLoadCache
    SLeasy.exloadCache = function () {
        $scope.exLoad = [];
        for (var i = 0; i < $config.exLoadArr.length; i++) {
            var img = new Image();
            img.src = SLeasy.path($config.host, $config.exLoadArr[i]);
            $scope.exLoad.push(img);
        }
    }

    //percent
    SLeasy.percent = function (opt) {
        var faker = {percent: 0};
        _percent(opt);

        function _percent() {
            setTimeout(function () {
                gsap.to(faker, {
                    percent: SLeasy.loader.percent,
                    snap: 'percent',
                    ease: 'none',
                    duration: opt.smoothTime || 2,
                    onUpdate: function () {
                        if (opt.onUpdate) {
                            opt.onUpdate();
                        } else {
                            $('.percent').length && $('.percent').text(faker.percent + '%');
                        }
                    },
                    onComplete: function () {
                        if (SLeasy.loader.percent >= 100 && faker.percent == 100) {
                            opt.onComplete && opt.onComplete();
                        } else {
                            _percent(opt);
                        }
                    }
                })
            }, opt.loopTime || 300);
        }
    }
    //
})(
    window.SLeasy = window.SLeasy || {},
    jQuery
);