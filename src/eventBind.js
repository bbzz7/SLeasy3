// SLeasy3-eventBind
;(function (SLeasy, H, $, T) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope(),
        sliderBox;//hammerObj

    //get hammerObj
    SLeasy.hammerObj = function () {
        return sliderBox ? sliderBox : alert('hammerObj尚未初始化~！');
    }

    //event bind
    SLeasy.eventBind = function (globalBinding) {
        if (globalBinding) {
            //全局 -------------------------
            sliderBox = new H(document.getElementById(($scope.rotateMode=='auto' && 'SLeasy_fixBox') || $config.id || 'SLeasy'));
            sliderBox.get('swipe').set({velocity: 0.2, direction: Hammer.DIRECTION_ALL});

            //禁止触摸默认行为
            SLeasy.touchScroll(false, true);

            if ($config.stageMode == 'scroll') {
                SLeasy.touchScroll(true, false);
                sliderBox.get('swipe').set({enable: false});
            }

            //todo:修正ios下微信双击上移

            //swipe eventBind
            if ($config.swipeMode == 'x' || $config.swipeMode == 'xy') {//水平左右
                $scope.FXDirection = 'leftRight';//设置切换式样方向

                sliderBox.on('swipeleft', function (e) {
                    var slidersEvent = $config.sliders[$scope.sliderIndex].on;
                    if (slidersEvent && slidersEvent['swipeleft']) return;
                    $scope.swipe && SLeasy.goSlider('+=1');
                });
                sliderBox.on('swiperight', function (e) {
                    var slidersEvent = $config.sliders[$scope.sliderIndex].on;
                    if (slidersEvent && slidersEvent['swiperight']) return;
                    $scope.swipe && SLeasy.goSlider('-=1');
                });

            } else if ($config.swipeMode == 'y' || $config.swipeMode == 'xy') {//垂直上下
                $scope.FXDirection = 'upDown';//设置切换式样方向

                sliderBox.on('swipeup', function (e) {
                    var slidersEvent = $config.sliders[$scope.sliderIndex].on;
                    if (slidersEvent && slidersEvent['swipeup']) return;
                    console.log($scope.swipe);
                    $scope.swipe && SLeasy.goSlider('+=1');
                });
                sliderBox.on('swipedown', function (e) {
                    var slidersEvent = $config.sliders[$scope.sliderIndex].on;
                    if (slidersEvent && slidersEvent['swipedown']) return;
                    $scope.swipe && SLeasy.goSlider('-=1');
                });
            }

            //子画元素事件绑定策略
            for (var i = 0; i < $scope.eventArr.length; i++) {
                var el = $scope.eventArr[i],
                    id = el.id,
                    dom = document.getElementById(id),
                    HDom = new H(dom),
                    e = el.event,
                    callback = el.onEvent.bind(SLeasy);

                if ($config.debugMode) $(dom).addClass('SLeasy_shadownBt');
                dom.style.cursor = "pointer";//鼠标手势
                //console.log(document.getElementById(id));
                if (e == 'click') {//点击事件,方便某些广告监测代码
                    $(dom).off('click').on('click', callback);
                } else if (e == 'hold') {//长按事件
                    HDom.get('press').set({time: 1000});
                    HDom.off('press').on('press', callback);
                } else {
                    HDom.get('pan').set({direction: Hammer.DIRECTION_ALL});
                    HDom.get('swipe').set({direction: Hammer.DIRECTION_ALL});
                    HDom.off(e).on(e, callback);//事件绑定
                }

            }

            //箭头事件绑定
            if ($config.arrowMode) {
                $("#SLeasy_arrow").css("cursor", "pointer");
                new H($("#SLeasy_arrow")[0]).on('tap', function (e) {
                    SLeasy.goSlider('+=1');
                })
            }
        } else {
            //仅动画子元素 -------------------------
            //禁止触摸默认行为
            SLeasy.touchScroll(false);

            //子画元素事件绑定策略
            for (var i = 0; i < $scope.eventArr.length; i++) {
                var el = $scope.eventArr[i],
                    id = el.id,
                    dom = document.getElementById(id),
                    HDom = new H(dom),
                    e = el.event,
                    callback = el.onEvent;

                dom.style.cursor = "pointer";//鼠标手势
                //console.log(document.getElementById(id));
                if (e == 'click') {//点击事件,方便某些广告监测代码
                    $(dom).off('click').on('click', callback);
                } else if (e == 'hold') {//长按事件
                    HDom.get('press').set({time: 1000});
                    HDom.off('press').on('press', callback);
                } else {
                    HDom.get('pan').set({direction: Hammer.DIRECTION_ALL});
                    HDom.get('swipe').set({direction: Hammer.DIRECTION_ALL});
                    HDom.off(e).on(e, callback);//事件绑定
                }

            }
        }
        //loading幻灯
        if ($('.SLeasy_loading ').length && $config.loading.on) {
            $.each($config.loading.on, function (e, callback) {
                var HDom = new H($('.SLeasy_loading')[0]);
                HDom.get('swipe').set({velocity: 0.2, direction: Hammer.DIRECTION_ALL});
                HDom.off(e).on(e, callback);//事件绑定
            })
        }

        //slider幻灯
        for (var i = 0; i < $('.SLeasy_sliders').length; i++) {
            if ($config.sliders[i].on) {
                $.each($config.sliders[i].on, function (e, callback) {
                    var HDom = new H($('.SLeasy_sliders')[i]);
                    HDom.get('swipe').set({velocity: 0.2, direction: Hammer.DIRECTION_ALL});
                    HDom.off(e).on(e, callback);//事件绑定
                })
            }
        }
    }
})(
    window.SLeasy = window.SLeasy || {},
    Hammer,
    jQuery,
    TweenMax || TweenLite
);