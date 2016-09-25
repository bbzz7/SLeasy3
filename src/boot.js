// SLeasy3-boot
;(function (SLeasy, $) {
    var $config = SLeasy.config(),
        $scope  = SLeasy.scope();


    //boot
    SLeasy.boot = function () {
        //var dfd=$.Deferred();

        var sliderHtml = '',
            detailHtml = '',
            musicHtml  = 'xxx',
            floatHtml  = '';


        //幻灯初始化
        sliderHtml = pageInit('sliders');

        //详情页初始化
        detailHtml = pageInit('details');


        //类型页面初始化函数
        function pageInit(type) {
            var tmpHtml = '';
            for (var i = 0; i < $config[type].length; i++) {
                $.extend($config[type][i], {index: i, type: type});//并入当前幻灯索引值,及类型
                tmpHtml += SLeasy.slider($config[type][i]);
            }
            return tmpHtml;
        }

        //音乐初始化
        musicHtml = SLeasy.music.init();

        //框架初始化($scope.sliderBox.html()包含了loading结构代码)
        $scope.sliderBox.html($scope.sliderBox.html() + sliderHtml + detailHtml + musicHtml);

        SLeasy.loader.hidden();//隐藏loading
        SLeasy.float();//浮动元素初始化
        SLeasy.arrow.init($config.arrowColor);//箭头初始化
        $config.musicBt[0] && SLeasy.music.bt();//背景音乐按钮初始化

        SLeasy.fixPosition($config.sliders);//全部幻灯子动画自适应坐标值修正转换
        SLeasy.fixPosition($config.details);//全部详情页子动画自适应坐标值修正转换

        //img to div
        SLeasy.imgToDiv();

        //dom缓存
        $scope.sliders = $(".SLeasy_sliders");//幻灯引用缓存
        $scope.subMotion = $(".SLeasy_subMotion");//子动画元素合集引用缓存
        $scope.details = $(".SLeasy_details");//详情页引用缓存
        $scope.detailMotion = $(".SLeasy_detailMotion");//详情页子动画元素缓存
        $scope.loader = $("#SLeasy_loader");//loading元素dom缓存
        $scope.floats = $(".SLeasy_floatElement");//浮动元素dom缓存
        $scope.canvas = $(".SLeasy_canvas");//画布元素dom缓存
        $config.on['domReady']();//SLeasy dom初始化完毕回调

        $scope.canvas.length && TweenMax.set($scope.canvas.parent(), {y: 0});//修正安卓下,画布元素默认不左上对齐的bug

        //插件初始化
        for (var j = 0; j < $scope.pluginList.length; j++) {
            //console.log($scope.pluginList[j]);
            var SLeasyPlugin       = $scope.pluginList[j][0],
                //把初始化时注入的挂载点id转换成挂载点dom,合并入plugin参数
                pluginArg          = $.extend($scope.pluginList[j][1], {dom: $('#' + $scope.pluginList[j][1].node)}),
                pluginInitCallback = $scope.pluginList[j][2],//插件初始化回调
                pluginObj          = SLeasyPlugin(pluginArg);//执行插件初始化

            pluginInitCallback(pluginObj);//执行插件初始化后的回调
        }

        //渲染启动
        $scope.timeLine = new TimelineMax({//子动画主时间线初始化
            autoRemoveChildren: $config.autoRemoveChildren,
            paused: true,
            onComplete: function () {
                //orientationPX();//重力感应视差效果
                console.log('子动画完成~~~！');
                //$scope.isSubMotion=1;//子动画是否正在播放状态
            }
        });
        $config.on['timeline']($scope.timeLine);//子动画时间轴ready回调

        SLeasy.eventBind();//事件绑定
        SLeasy.router();//路由初始化
        //dfd.resolve();//初始化完毕


        //默认显示渲染
        SLeasy.music.play();//播放背景音乐
        //如果幻灯设置了自动开始，而且没有开启自动路由，且url没有路由哈希参数，则默认显示第一页
        $config.autoStart && (!$config.routerMode && !$scope.router.getRoute()[0]) && SLeasy.goSlider(0);


        //return dfd.promise();
    }
})(
    window.SLeasy = window.SLeasy || {},
    jQuery
);