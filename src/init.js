// SLeasy3-init
;(function (SLeasy, $,H) {
    var $scope = SLeasy.scope();

    //init
    SLeasy.init = function (opt) {
        var dfd = $.Deferred();
        SLeasy.checkGoto();//跳转(url/淘宝)检测
        var $config = SLeasy.config(opt);//合并自定义参数
        if ($config.debugMode == 'auto') {
            $config.debugMode = SLeasy.isHttp() ? 0 : 1;
        }
        if (!SLeasy.isHttp()) {
            //本地手机模拟器中禁止长按呼出右键菜单
            window.oncontextmenu = function () {
                return false;
            }
            //debug模式
            if ($config.debugMode) {
                var debugStyle = '.SLeasy_shadownBt{border: 1px solid #fff;box-shadow:0 0 5px #000}';
                var $defaultStyle = $('head style').eq(0);
                $defaultStyle.html($defaultStyle.html() + debugStyle);
            }
        }

        //debug模式
        if ($config.debugMode === true) {
            var debugStyle = '.SLeasy_shadownBt{border: 1px solid #fff;box-shadow:0 0 5px #000}';
            var $defaultStyle = $('head style').eq(0);
            $defaultStyle.html($defaultStyle.html() + debugStyle);
        }

        if (!$config.debugMode && !$config.VConsole) {
            //劫持console.log输出
            console.log = function () {
                return false;
            }
        } else {
            var vConsole = SLeasy.isHttp() && window.VConsole && new VConsole();
        }
        if ($config.VConsole && SLeasy.isHttp()) {
            $scope.vConsole = window.VConsole && new VConsole();
            // $scope.vConsole.hideSwitch();
        }
        console.log('config', $config);
        if ($.isEmptyObject($config.loading) || (!$.isEmptyObject($config.loading) && !$scope.loadingReady)) {
            SLeasy.viewport();//设置视口
        }

        //SLeasy容器初始化
        $scope.sliderBox = $('#' + $config.id).length ? $('#' + $config.id) : $('<div id="SLeasy"></div>').appendTo($scope.rotateMode == 'auto' ? '#SLeasy_fixBox' : 'body'), $config.id = 'SLeasy';//slide容器dom引用缓存
        $scope.sliderBox.css({
            "width": $scope.SLeasyWidth,
            "height": $scope.SLeasyHeight,
            "max-width": $scope.maxWidth + 'px',
            "max-height": $scope.maxHeight + 'px',
            // "max-width": ($scope.fixWidth || $config.viewport) + 'px',
            // "max-height": $scope.fixHeight + 'px',
            "background-image": $config.bg ? 'url(' + SLeasy.path($config.host, $config.bg) + ')' : 'none',
            "background-color": $config.bgColor || 'transparent',
            "background-size": "100% auto",
            "background-repeat": "no-repeat",
            "background-position": $config.scrollMagicMode ? "top center" : "center center",
            "overflow": $config.positionMode == "absolute" ? "hidden" : "visible",//relative模式则高度按内容自适应
            "position": "relative",
            "margin": $scope.fixMargin + "px auto",
        });

        //背景音乐
        SLeasy.music.init();

        //rotateMode
        if ($config.rotateMode) {
            var margin = $scope.isLandscape ? $scope.fixMarginW : $scope.fixMargin;
            if (device.landscape()) {
                TweenMax.set($scope.sliderBox, {
                    transformOrigin: '0 0',
                    rotation: -90,
                    y: '100vh',
                    margin: 'auto ' + margin + 'px'
                });
            } else {
                TweenMax.set($scope.sliderBox, {
                    transformOrigin: '0 0',
                    rotation: 90,
                    x: '100vw',
                    margin: margin + 'px auto'
                });
            }
        }
        if ($config.checkNavBar) SLeasy.checkNavBar();//检测微信底部导航条/强制刷新
        //loading资源加载
        var loadType = (!$.isEmptyObject($config.loading) && !$scope.loadingReady) ? 'multi' : $config.loader.loadType;
        SLeasy.loader.load(SLeasy.getLoadArr($config), loadType).done(function () {//资源加载
            console.log('loading end ----------------------------------------------');
            console.log('加载完成的图片:', $scope.totalLoad);
            SLeasy.boot(dfd);
            if (!$.isEmptyObject($config.loading) && !$scope.initReady) {
                SLeasy.subMotion($config.loading.subMotion, 'loading', 0);
                $config.loading.onComplete && $config.loading.onComplete();
                $(".SLeasy_loading").fadeIn(300, function () {
                    $config.loading.onStartLoad && $config.loading.onStartLoad();
                    SLeasy.init($config).done(function () {
                        SLeasy.exloadCache();//exLoad Cache
                        dfd.resolve();//如果有loading，第二次init完毕时，调用第一次done回调
                        console.log('loadingReady::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
                        $config.loading.onLoaded && $config.loading.onLoaded();//预加载完毕自定义loading回调
                    });
                });
            }
        });
        return dfd.promise();
    }

    //获取预加载图片url
    SLeasy.getLoadArr = function ($config) {
        var totalArr = [];

        function pushSubMotion(dataArr) {
            if (dataArr && dataArr.length) {
                for (var i = 0; i < dataArr.length; i++) {
                    dataArr[i].img && totalArr.push(SLeasy.path($config.host, dataArr[i].img));
                    if (dataArr[i].sprite) {
                        if ($.isArray(dataArr[i].sprite[0])) {
                            for (var j = 0; j < dataArr[i].sprite[0].length; j++) {
                                totalArr.push(SLeasy.path($config.host, dataArr[i].sprite[0][j]))
                            }
                        } else {
                            totalArr.push(SLeasy.path($config.host, dataArr[i].sprite[0]))
                        }
                    }
                    //ae序列帧
                    var ae = dataArr[i].ae;
                    if (ae) {
                        for (var n = 0; n < ae.layer.length; n++) {
                            var layerOpt = ae.layer[n];
                            if (layerOpt[6] === false) {
                                console.log('skip:' + ae.layer[n]);
                                continue;
                            }
                            console.log(layerOpt);
                            var bitmapArr = SLeasy.addBitmaps(null, layerOpt[1], layerOpt[2], layerOpt[3], layerOpt[4], layerOpt[5]);
                            // console.log(bitmapArr);
                            totalArr = totalArr.concat(bitmapArr);
                        }
                    }
                    //子元素递归
                    if (dataArr[i].subMotion && dataArr[i].subMotion.length) {
                        pushSubMotion(dataArr[i].subMotion);
                    }
                }
            }
        }

        //loading
        var $loading = $config.loading;
        if (!$.isEmptyObject($loading) && !$scope.loadingSourceReady) {
            $loading.bg && totalArr.push(SLeasy.path($config.host, $config.loading.bg));
            pushSubMotion($loading.subMotion);
            $scope.loadingSourceReady = true;
            $scope.totalLoad = totalArr;
            return totalArr;
        }


        //幻灯容器背景
        if ($config.bg) totalArr.push(SLeasy.path($config.host, $config.bg));

        //浮动元素
        for (var i = 0; i < $config.floats.length; i++) {
            $config.floats[i].img && totalArr.push(SLeasy.path($config.host, $config.floats[i].img));
            //ae序列帧
            var ae = $config.floats[i].ae;
            if (ae) {
                for (var n = 0; n < ae.layer.length; n++) {
                    var layerOpt = ae.layer[n];
                    if (layerOpt[6] === false) {
                        console.log('skip:' + ae.layer[n]);
                        continue;
                    }
                    console.log(layerOpt);
                    var bitmapArr = SLeasy.addBitmaps(null, layerOpt[1], layerOpt[2], layerOpt[3], layerOpt[4], layerOpt[5]);
                    // console.log(bitmapArr);
                    totalArr = totalArr.concat(bitmapArr);
                }
            }
        }

        //幻灯背景+子动画元素
        for (var i = 0; i < $config.sliders.length; i++) {
            if ($config.sliders[i].bg) {
                if ($config.sliders[i].bg && typeof $config.sliders[i].bg == 'string') {
                    totalArr.push(SLeasy.path($config.host, $config.sliders[i].bg));
                } else {
                    if ($config.sliders[i].bg) {
                        //多重背景
                        for (var j = 0; j < $config.sliders[i].bg.length; j++) {
                            $config.sliders[i].bg[j] && totalArr.push(SLeasy.path($config.host, $config.sliders[i].bg[j]));
                        }
                    }
                }
            }
            //子元素
            pushSubMotion($config.sliders[i].subMotion)
        }

        //详情页背景+子动画元素
        for (var i = 0; i < $config.details.length; i++) {
            if ($config.details[i].bg && typeof $config.details[i].bg == 'string') {
                totalArr.push(SLeasy.path($config.host, $config.details[i].bg));
            } else {
                if ($config.details[i].bg) {
                    for (var j = 0; j < $config.details[i].bg.length; j++) {//多重背景
                        $config.details[i].bg[j] && totalArr.push(SLeasy.path($config.host, $config.details[i].bg[j]));
                    }
                }
            }
            //子元素
            pushSubMotion($config.details[i].subMotion)
        }

        //额外加载项
        for (var i = 0; i < $config.exLoadArr.length; i++) {
            totalArr.push(SLeasy.path($config.host, $config.exLoadArr[i]));
        }

        //return
        if (!$config.preload) {
            $scope.totalLoad = totalArr;
            return totalArr;//是否进行预加载
        } else {
            console.log('需加载的图片:', totalArr);
            $scope.totalLoad = totalArr;
            return totalArr;
        }
    }

})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    Hammer
);