//SLeasy3-config
;
(function (SLeasy, $) {
    //config
    var $config = { //默认配置
        //SLeasy------------------------------------------
        id: 'SLeasy',//幻灯容器id
        bg: '',//幻灯容器背景图片
        bgColor: '',//幻灯容器背景颜色
        host: 'images/',//资源目录url
        width: 750,//幻灯宽度
        height: 1500,//幻灯高度
        viewport: 375,//视口大小
        motionTime: 0.8,//切换动画时间
        motionStyle: 0,//动画风格，默认随机
        motionDirection: 'upDown',//动画运动方向
        motionEase: '',//
        force3D: true,//
        loopMode: false,//启用首尾循环模式
        swipeMode: 'y',//滑动模式，xy：上下左右，x：水平，y：垂直
        routerMode: false,//路由开启模式
        routerNotFound: function () {
            return;
            SLeasy.goSlider(0);
        },//路由未匹配执行回调
        arrowMode: true,//是否显示滑动指示箭头
        arrowColor: '#fff',//箭头颜色
        rotateMode: false,//旋转模式
        alignMode: 'center',//幻灯背景对齐方式
        alignOffset: 0,//对齐偏移值
        floatZIndex: 10,//浮动元素默认zIndex
        detailZIndex: 10,//详情幻灯默认zIndex
        preload: true,//是否对素材预加载
        autoStart: true,//自动开始跳转默认幻灯
        autoRemoveChildren: true,//每张幻灯子动画全部完毕后，自动删除子动画tween
        debugMode: 'auto',//默认仅当本地环境开启debug模式
        reloadMode: false,//屏幕旋转自动刷新页面重新适配
        checkNavBar: false,//检测微信底部导航条/强制刷新
        stageMode: 'width',//舞台适配模式，int数值:小于该指定高度则自动缩放,反之按宽度匹配,width:根据宽度缩放，height:根据高度缩放，auto:根据高宽比例，自动缩放;
        fixWidthMode: false,//舞台的宽度自适应模式
        positionMode: 'absolute',//舞台子元素position模式
        scrollMagicMode: false,//是否开启scrollmagic模式
        timeStamp: window.SLeasyTimeStamp || null,
        //music-------------------------------------------
        musicUrl: '',//背景音乐url
        musicLoop: true,//背景音乐是否循环
        musicAutoPlay: true,//背景音乐自动播放
        musicTouchPlay: false,//触摸自动播放(仅1次),
        musicMuteMode: 'global',
        musicBt: [1, '', 50, 50, 'topRight', 15, 15],//背景音乐按钮[开启状态，sprite图片url，宽度，高度，对齐方式，x轴偏移，y轴偏移]

        //audios-------------------------------------------
        audios: {},//webAudio+Howler
        audioType: 'webAudio',

        //video-------------------------------------------
        videoCache: false,

        //slider------------------------------------------
        sliders: [], //幻灯json数组

        //detail-------------------------------------------
        details: [],//幻灯详情页json数组

        //float-------------------------------------------
        floats: [],//固定漂浮元素

        //loader------------------------------------------
        loader: {
            bg: 'none',//loading页背景
            size: [38, 38],//宽高
            style: 0,//loading内置式样索引或自定义html
            color: '#fff',//loading svg颜色
            bg: 'rgba(0,0,0,0.9)',//loading遮罩背景颜色
            textStyle: 'font-size:12px;color:#fff', //字体式样
            endAt: 100,
            loadType: 'multi',
            loadedTips: false,
            show: true//是否显示默认loading
        },

        //其他----------------------------------------------
        exLoadArr: [], //额外加载项数组
        title: document.title,//全局网页标题

        //事件回调-------------------------------------------
        on: {
            'loadProgress': function (percent) { //预加载进行时回调
                SLeasy.loader.progress(percent);
                console.log('当前加载进度' + percent + '~！');
            },
            'loaded': function () {//预加载完毕回调
                console.log('======================================加载完毕~！');
            },
            'sliderChange': function (sliderIndex) {//幻灯切换回调
                console.log('切换到第' + (sliderIndex + 1) + '张幻灯~！')
            },
            'subMotion': function (sliderIndex) {//子动画开始播放回调
                console.log('第' + (sliderIndex + 1) + '张幻灯的子动画开始运行~');
            },
            'detailMotion': function (sliderIndex) {//详情页子动画开始播放回调
                console.log('第' + (sliderIndex + 1) + '张详情页的子动画开始运行~');
            },
            'detailOpen': function (sliderIndex) {//详情页打开回调
                console.log('第' + (sliderIndex + 1) + '张详情页打开~');
            },
            'detailClose': function (sliderIndex) {//详情页关闭回调
                console.log('第' + (sliderIndex + 1) + '张详情页关闭~');
            },
            'timeline': function (tl) {//子动画时间轴ready回调
                console.log('子动画timeline ready~')
            },
            'weixin': function (tl) {//子动画时间轴ready回调
                console.log('Weixin JSBridge Ready~')
            },
        }


    }

    SLeasy.config = function (opt) {
        if (arguments.length > 0) {
            return $.extend(true, $config, opt);
        } else {
            //console.log($config);
            return $config;
        }
    }


})(
    window.SLeasy = window.SLeasy || {},
    jQuery
);

/*
 <meta http-equiv=”Cache-Control” content=”no-transform” />
 <meta http-equiv=”Cache-Control” content=”no-siteapp” />
 <meta name="applicable-device" content="pc,mobile">
 <meta name="MobileOptimized" content="width"/>
 <meta name="HandheldFriendly" content="true"/>
 */