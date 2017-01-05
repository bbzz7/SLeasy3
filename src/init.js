// SLeasy3-init
;(function (SLeasy, $) {
    var $scope = SLeasy.scope();

    //init
    SLeasy.init = function (opt) {
        SLeasy.checkGoto();//跳转(url/淘宝)检测
        var $config = SLeasy.config(opt);//合并自定义参数
        $scope.viewScale=$config.viewport / $config.width;//刷新幻灯缩放比例因子
        if (!SLeasy.isHttp()) {//debug模式
            var debugStyle = '.SLeasy_shadownBt{border: 1px solid #fff;box-shadow:0 0 5px #000}';
            $('head style').html($('head style').html() + debugStyle);
        }
        if (!$config.debugMode) {
            console.log = function () {
            };//设置console.log输出
        }
        console.log($config);
        SLeasy.viewport();//设置视口

        //SLeasy容器初始化
        $scope.sliderBox = $('#' + $config.id).length ? $('#' + $config.id) : $('<div id="SLeasy"></div>').prependTo('body');//slide容器dom引用缓存
        $scope.sliderBox.css({
            "width"            : $config.viewport + 'px',
            "height"           : $scope.fixHeight + 'px',
            "background-image" : $config.bg ? 'url(' + $config.host + $config.bg + ')' : 'none',
            "background-color" : $config.bgColor || 'transparent',
            "background-size"  : "100% auto",
            "background-repeat": "no-repeat",
            "overflow"         : $config.positionMode == "absolute" ? "hidden" : "visible",//relative模式则高度按内容自适应
            "position"         : "relative",
            "margin"           : "0 auto",
            "display"          : "none"
        }).fadeIn($config.motionTime * 1000);

        //loading资源加载
        return SLeasy.loader.load(getLoadArr()).done(function () {//资源加载
            console.log(getLoadArr());
            SLeasy.boot();
        });


        //获取预加载图片url
        function getLoadArr() {
            var totalArr = [];

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

            //位图序列
            $.each($scope.bitmaps, function (index, value) {
                totalArr = totalArr.concat($scope.bitmaps[index]);
            })

            //return
            if (!$config.preload) {
                $scope.totalLoad = totalArr;
                return;//是否进行预加载
            } else {
                //console.log(totalArr);
                return totalArr;
            }
        }

    }

})(
    window.SLeasy = window.SLeasy || {},
    jQuery
);