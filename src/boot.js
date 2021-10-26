// SLeasy3-boot
;(function (SLeasy, $) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();


    //boot
    SLeasy.boot = function (dfd) {
        var loadingHtml = '',
            sliderHtml = '',
            detailHtml = '',
            musicHtml = '',
            floatHtml = '';


        if (!$.isEmptyObject($config.loading) && !$scope.loadingReady) {
            //loading初始化
            $config.loading.onInit && $config.loading.onInit();
            $config.loading.type = 'loading';
            loadingHtml = SLeasy.slider($config.loading);
            //音乐初始化
            musicHtml = SLeasy.music.init();
            $scope.sliderBox.html($scope.sliderBox.html() + loadingHtml + musicHtml);
            SLeasy.float();//浮动元素初始化
            $config.musicBt[0] && SLeasy.music.bt();//背景音乐按钮初始化

            SLeasy.fixPosition([$config.loading]);
            //img to div
            SLeasy.imgToDiv($scope.sliderBox, dfd);

            //默认显示渲染
            // $config.musicAutoPlay && typeof $config.musicUrl == 'string' ? SLeasy.music.play() : SLeasy.music.pause();//播放背景音乐

            //插件初始化
            for (var j = 0; j < $scope.pluginList.length; j++) {
                //console.log($scope.pluginList[j]);
                var SLeasyPlugin = $scope.pluginList[j][0],
                    //把初始化时注入的挂载点id转换成挂载点dom,合并入plugin参数
                    pluginArg = $.extend($scope.pluginList[j][1], {dom: $('#' + $scope.pluginList[j][1].node)}),
                    pluginInitCallback = $scope.pluginList[j][2],//插件初始化回调
                    pluginObj = SLeasyPlugin(pluginArg);//执行插件初始化

                pluginInitCallback(pluginObj);//执行插件初始化后的回调
                $scope.pluginList[j].push('loadingPlugin');
            }

            // SLeasy.eventBind(false);//事件绑定
            $scope.loadingReady = true;
            $config.loading.onReady && $config.loading.onReady()
        } else {
            //幻灯初始化
            sliderHtml = pageInit($config.sliders, 'sliders');

            //详情页初始化
            detailHtml = pageInit($config.details, 'details');


            //类型页面初始化函数
            function pageInit(jsonArr, type) {
                var tmpHtml = '';
                for (var i = 0; i < jsonArr.length; i++) {
                    $.extend(jsonArr[i], {index: i, type: type});//并入当前幻灯索引值,及类型
                    tmpHtml += SLeasy.slider(jsonArr[i]);
                }
                return tmpHtml;
            }

            //音乐初始化
            musicHtml = SLeasy.music.init();

            //框架初始化($scope.sliderBox.html()包含了loading结构代码)
            $scope.sliderBox.append(sliderHtml + detailHtml + musicHtml);
            //微博下iphone-inline-video
            SLeasy.enableInlineVideo();
            //在可以的环境下自动播放-暂停，以缓存video
            if ($config.videoCache) {
                document.addEventListener("WeixinJSBridgeReady", function () {
                    SLeasy.initMedia($('video').eq(0));
                }, false)
            }

            SLeasy.loader.hidden();//隐藏loading
            $.isEmptyObject($config.loading) && SLeasy.float();//浮动元素初始化
            SLeasy.arrow.init($config.arrowColor);//箭头初始化
            $config.musicBt[0] && SLeasy.music.bt();//背景音乐按钮初始化

            SLeasy.fixPosition($config.sliders);//全部幻灯子动画自适应坐标值修正转换
            SLeasy.fixPosition($config.details);//全部详情页子动画自适应坐标值修正转换

            //img to div
            SLeasy.imgToDiv($scope.sliderBox, dfd);
            //默认显示渲染
            // $config.musicAutoPlay && typeof $config.musicUrl == 'string' ? SLeasy.music.play() : SLeasy.music.pause();

            //dom缓存
            $scope.sliders = $(".SLeasy_sliders");//幻灯引用缓存
            $scope.subMotion = $(".SLeasy_subMotion");//子动画元素合集引用缓存
            $scope.details = $(".SLeasy_details");//详情页引用缓存
            $scope.detailMotion = $(".SLeasy_detailMotion");//详情页子动画元素缓存
            $scope.loader = $("#SLeasy_loader");//loading元素dom缓存
            $scope.floats = $(".SLeasy_floatElement");//浮动元素dom缓存
            $scope.canvas = $(".SLeasy_canvas");//画布元素dom缓存
            // $config.on['domReady']();//SLeasy dom初始化完毕回调
            // $scope.canvas.length && TweenMax.set($scope.canvas.parent(), {y: 0});//修正安卓下,画布元素默认不左上对齐的bug

            //插件初始化
            for (var j = 0; j < $scope.pluginList.length; j++) {
                //console.log($scope.pluginList[j]);
                if ($scope.pluginList[j][$scope.pluginList[j].length - 1] == 'loadingPlugin') continue;//剔除自定义loading已经初始化过的插件
                var SLeasyPlugin = $scope.pluginList[j][0],
                    //把初始化时注入的挂载点id转换成挂载点dom,合并入plugin参数
                    pluginArg = $.extend($scope.pluginList[j][1], {dom: $('#' + $scope.pluginList[j][1].node)}),
                    pluginInitCallback = $scope.pluginList[j][2],//插件初始化回调
                    pluginObj = SLeasyPlugin(pluginArg);//执行插件初始化

                pluginInitCallback(pluginObj);//执行插件初始化后的回调
            }

            //渲染启动
            $scope.timeline = new TimelineMax({//子动画主时间线初始化
                autoRemoveChildren: $config.autoRemoveChildren,
                paused: true,
                onComplete: function () {
                    //orientationPX();//重力感应视差效果
                    console.log('子动画完成~~~！');
                    //$scope.isSubMotion=1;//子动画是否正在播放状态
                }
            });
            $config.on['timeline']($scope.timeline);//子动画时间轴ready回调
            //onWeixin
            document.addEventListener("WeixinJSBridgeReady", function () {
                $config.on['weixin'];
            }, false);

            SLeasy.eventBind('global');//事件绑定
            SLeasy.router();//路由初始化

            //scrollMagic -----------------------------------------------------------------------------
            if ($config.scrollMagicMode) {
                TweenMax.set('#' + $config.id, {backgroundPosition: 'center ' + $scope.yOffset.center + 'px'})
                for (var i = 0; i < $config.sliders.length; i++) {
                    if (i == 0) continue;
                    var sl = $config.sliders[i];
                    for (var j = 0; j < sl.subMotion.length; j++) {
                        var sub = sl.subMotion[j];
                        var el = $('#SLeasy_subMotion_' + sub.index);
                        TweenMax.set(el, sub.set);
                        console.log(sub.set);
                    }
                }
                SLeasy.touchScroll(true, false);
                //
                var ctrl = new ScrollMagic.Controller();
                // Create scenes in jQuery each() loop
                $(".SLeasy_sliders").each(function (i) {
                    if (i == 0) return;
                    console.log('magic~~')
                    var tl = new TimelineMax();
                    $.each($config.sliders[i].subMotion, function (index, sub) {
                        var tween;
                        var el = $('#SLeasy_subMotion_' + sub.index);
                        var preSub = index != 0 ? $config.sliders[i].subMotion[index - 1] : null;
                        if (sub.from) tween = TweenMax.from(el, sub.time, SLeasy.fixProps(sub.from));
                        if (sub.fromTo) tween = TweenMax.fromTo(el, sub.time, SLeasy.fixProps(sub.fromTo));
                        var timePosition = '-=' + (preSub && sub.start ? (preSub.time - sub.start > 0 ? preSub.time - sub.start : preSub.time) : 0);
                        // console.log($config.sliders[i].subMotion[index-1]);
                        tween && tl.add(tween, timePosition);
                    })
                    var SM = new ScrollMagic.Scene({
                        triggerElement: this,
                        triggerHook: $config.sliders[i].triggerHook || 0.3,
                        reverse: $config.sliders[i].reverse || false
                    })
                        .setTween(tl)
                        .addTo(ctrl);

                    if ($config.debugMode) {
                        SM.addIndicators({
                            colorTrigger: "white",
                            colorStart: "white",
                            colorEnd: "white",
                            indent: 0
                        })
                    }
                });
            }

            //------------------------------------------------------------------------------------------

            //如果幻灯设置了自动开始，而且没有开启自动路由，且url没有路由哈希参数，则默认显示第一页:::见imgToDiv.js
            // $.isEmptyObject($config.loading) && TweenMax.set($('.SLeasy_sliders').eq(0), {autoAlpha: 0});
            // !$scope.loadingReady && (!$config.routerMode && !$scope.router.getRoute()[0]) && SLeasy.goSlider(0);
            $scope.initReady = true;
        }
    }
})(
    window.SLeasy = window.SLeasy || {},
    jQuery
);