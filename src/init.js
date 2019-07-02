// SLeasy3-init
;(function (SLeasy, $) {
    var $scope = SLeasy.scope();

    //init
    SLeasy.init = function (opt) {
        var dfd = $.Deferred();
        SLeasy.checkGoto();//跳转(url/淘宝)检测
        var $config = SLeasy.config(opt);//合并自定义参数
        $scope.viewScale = $config.viewport / $config.width;//刷新幻灯缩放比例因子
        if ($config.debugMode == 'auto') {
            $config.debugMode = SLeasy.isHttp() ? 0 : 1;
        }
        if (!SLeasy.isHttp() || $config.debugMode) {//debug模式
            var debugStyle = '.SLeasy_shadownBt{border: 1px solid #fff;box-shadow:0 0 5px #000}';
            var $defaultStyle = $('head style').eq(0);
            $defaultStyle.html($defaultStyle.html() + debugStyle);
        }
        if (!$config.debugMode) {
            console.log = function () {
            };//设置console.log输出
        } else {
            var vConsole = SLeasy.isHttp() && window.VConsole && new VConsole();
        }
        if ($config.VConsole) {
            var vConsole = SLeasy.isHttp() && window.VConsole && new VConsole();
        }
        console.log($config);
        if ($.isEmptyObject($config.loading) || (!$.isEmptyObject($config.loading) && !$scope.loadingReady)) {
            SLeasy.viewport();//设置视口
        }

        //SLeasy容器初始化
        $scope.sliderBox = $('#' + $config.id).length ? $('#' + $config.id) : $('<div id="SLeasy"></div>').prependTo('body'), $config.id = 'SLeasy';//slide容器dom引用缓存
        $scope.sliderBox.css({
            "width": $config.viewport + 'px',
            "height": $scope.fixHeight + 'px',
            "background-image": $config.bg ? 'url(' + SLeasy.path($config.host, $config.bg) + ')' : 'none',
            "background-color": $config.bgColor || 'transparent',
            "background-size": "100% auto",
            "background-repeat": "no-repeat",
            "background-position": "center",
            "overflow": $config.positionMode == "absolute" ? "hidden" : "visible",//relative模式则高度按内容自适应
            "position": "relative",
            "margin": "0 auto",
        });

        //loading资源加载
        var loadType = (!$.isEmptyObject($config.loading) && !$scope.loadingReady) ? 'multi' : $config.loader.loadType;
        SLeasy.loader.load(SLeasy.getLoadArr($config), loadType).done(function () {//资源加载
            console.log('loading end ----------------------------------------------');
            console.log($scope.totalLoad);
            SLeasy.boot(dfd);
            if (!$.isEmptyObject($config.loading) && !$scope.initReady) {
                $(".SLeasy_loading").fadeIn(300,function () {
                    $config.loading.onComplete && $config.loading.onComplete()
                });
                SLeasy.subMotion($config.loading.subMotion, 'loadingElement',0);
                $config.loading.onStartLoad && $config.loading.onStartLoad();
                SLeasy.init($config).done(function () {
                    dfd.resolve();//如果有loading，第二次init完毕时，调用第一次done回调
                    console.log('loadingReady::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
                    $config.loading.onLoaded && $config.loading.onLoaded();//预加载完毕自定义loading回调
                });
            }
        });
        return dfd.promise();
    }


    //获取预加载图片url
    SLeasy.getLoadArr = function ($config) {
        var totalArr = [];

        //loading
        var $loading = $config.loading;
        if (!$.isEmptyObject($loading) && !$scope.loadingSourceReady) {
            $loading.bg && totalArr.push(SLeasy.path($config.host, $config.loading.bg));
            for (var l = 0; l < ($loading.subMotion && $loading.subMotion.length); l++) {
                console.log($loading.subMotion[l].img && totalArr.push(SLeasy.path($config.host, $loading.subMotion[l].img))
                );
                //ae序列帧
                var ae = $loading.subMotion[l].ae;
                if (ae) {
                    for (var n = 0; n < ae.layer.length; n++) {
                        var layerOpt = ae.layer[n];
                        console.log(layerOpt);
                        var bitmapArr = SLeasy.addBitmaps(null, layerOpt[1], layerOpt[2], layerOpt[3], layerOpt[4], layerOpt[5]);
                        // console.log(bitmapArr);
                        totalArr = totalArr.concat(bitmapArr);
                    }
                }
            }
            $scope.loadingSourceReady = true;
            $scope.totalLoad = totalArr;
            return totalArr;
        }


        //幻灯容器背景
        if ($config.bg) totalArr.push(SLeasy.path($config.host, $config.bg));

        //幻灯背景+子动画元素
        for (var i = 0; i < $config.sliders.length; i++) {
            if ($config.sliders[i].bg) {
                if (typeof $config.sliders[i].bg == 'string') {
                    totalArr.push(SLeasy.path($config.host, $config.sliders[i].bg));
                } else {
                    if ($config.sliders[i].bg) {
                        for (var j = 0; j < $config.sliders[i].bg.length; j++) {//多重背景
                            $config.sliders[i].bg[j] && totalArr.push(SLeasy.path($config.host, $config.sliders[i].bg[j]));
                        }
                    }
                }
            }
            for (var k = 0; k < ($config.sliders[i].subMotion && $config.sliders[i].subMotion.length); k++) {
                $config.sliders[i].subMotion[k].img && totalArr.push(SLeasy.path($config.host, $config.sliders[i].subMotion[k].img));
            }
        }

        //详情页背景+子动画元素
        for (var i = 0; i < $config.details.length; i++) {
            if (typeof $config.details[i].bg == 'string') {
                totalArr.push(SLeasy.path($config.host, $config.details[i].bg));
            } else {
                if ($config.details[i].bg) {
                    for (var j = 0; j < $config.details[i].bg.length; j++) {//多重背景
                        $config.details[i].bg[j] && totalArr.push(SLeasy.path($config.host, $config.details[i].bg[j]));
                    }
                }
            }
            for (var k = 0; k < ($config.details[i].subMotion && $config.details[i].subMotion.length); k++) {
                $config.details[i].subMotion[k].img && totalArr.push(SLeasy.path($config.host, $config.details[i].subMotion[k].img));
            }
        }

        //浮动元素
        for (var i = 0; i < $config.floats.length; i++) {
            $config.floats[i].img && totalArr.push(SLeasy.path($config.host, $config.floats[i].img));
        }

        //额外加载项
        for (var i = 0; i < $config.exLoadArr.length; i++) {
            totalArr.push(SLeasy.path($config.host, $config.exLoadArr[i]));
        }

        //幻灯ae
        for (var i = 0; i < $config.sliders.length; i++) {
            for (var k = 0; k < ($config.sliders[i].subMotion && $config.sliders[i].subMotion.length); k++) {
                //ae序列帧
                var ae = $config.sliders[i].subMotion[k].ae;
                if (ae) {
                    for (var n = 0; n < ae.layer.length; n++) {
                        var layerOpt = ae.layer[n];
                        console.log(layerOpt);
                        var bitmapArr = SLeasy.addBitmaps(null, layerOpt[1], layerOpt[2], layerOpt[3], layerOpt[4], layerOpt[5]);
                        // console.log(bitmapArr);
                        totalArr = totalArr.concat(bitmapArr);
                    }
                }
            }
        }

        //幻灯ae
        for (var i = 0; i < $config.details.length; i++) {
            for (var k = 0; k < ($config.details[i].subMotion && $config.details[i].subMotion.length); k++) {
                //ae序列帧
                var ae = $config.details[i].subMotion[k].ae;
                if (ae) {
                    for (var n = 0; n < ae.layer.length; n++) {
                        var layerOpt = ae.layer[n];
                        console.log(layerOpt);
                        var bitmapArr = SLeasy.addBitmaps(null, layerOpt[1], layerOpt[2], layerOpt[3], layerOpt[4], layerOpt[5]);
                        // console.log(bitmapArr);
                        totalArr = totalArr.concat(bitmapArr);
                    }
                }
            }
        }


        //return
        if (!$config.preload) {
            $scope.totalLoad = totalArr;
            return totalArr;//是否进行预加载
        } else {
            //console.log(totalArr);
            $scope.totalLoad = totalArr;
            return totalArr;
        }
    }

})(
    window.SLeasy = window.SLeasy || {},
    jQuery
);