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
    SLeasy.eventBind = function () {
        sliderBox = new H(document.getElementById($config.id) || document.getElementById('SLeasy'));
        sliderBox.get('swipe').set({velocity: 0.2, direction: Hammer.DIRECTION_ALL});

        //禁止触摸默认行为
        SLeasy.touchScroll(false);

        if ($config.stageMode == 'scroll') {
            SLeasy.touchScroll(true);
            sliderBox.get('swipe').set({enable: false});
        }

        //todo:修正ios下微信双击上移

        //swipe eventBind
        if ($config.swipeMode == 'x' || $config.swipeMode == 'xy') {//水平左右
            $scope.FXDirection = 'leftRight';//设置切换式样方向

            sliderBox.on('swipeleft', function (e) {
                $scope.swipe && SLeasy.goSlider('+=1');
            });
            sliderBox.on('swiperight', function (e) {
                $scope.swipe && SLeasy.goSlider('-=1');
            });

        } else if ($config.swipeMode == 'y' || $config.swipeMode == 'xy') {//垂直上下
            $scope.FXDirection = 'upDown';//设置切换式样方向

            sliderBox.on('swipeup', function (e) {
                console.log($scope.swipe);
                $scope.swipe && SLeasy.goSlider('+=1');
            });
            sliderBox.on('swipedown', function (e) {
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
                callback = el.onEvent
            ;

            dom.style.cursor = "pointer";//鼠标手势
            //console.log(document.getElementById(id));
            if (e == 'click') {//点击事件,方便某些广告监测代码
                $(dom).on('click', callback);
            } else if (e == 'hold') {//长按事件
                HDom.get('press').set({time: 1000});
                HDom.on('press', callback);
            } else {
                HDom.on(e, callback);//事件绑定
            }

        }

        //箭头事件绑定
        if ($config.arrowMode) {
            $("#SLeasy_arrow").css("cursor", "pointer");
            new H($("#SLeasy_arrow")[0]).on('tap', function (e) {
                SLeasy.goSlider('+=1');
            })
        }

        //安卓微信video全屏resize
        /*var ow = window.innerWidth,
         oh = window.innerHeight;
         var videoSizeArr = [];

         $("video").each(function () {
         //videoSizeArr.push({width: $(this).css('width'), height: $(this).css('height')});
         videoSizeArr.push(SLeasy.fixProps({width: 556, height: 312, x: 41, y: 162}));
         });
         console.log(ow + ':' + oh);
         console.log(videoSizeArr);

         function resetVideoSize() {
         //alert(ow+':'+oh+'###'+window.innerWidth+':'+window.innerHeight);
         if (window.innerWidth == ow && window.innerHeight == oh) {
         $("video").each(function () {
         var index = $("video").index($(this));
         //alert(videoSizeArr[index].width + ':' + videoSizeArr[index].height);
         T.set($(this), {
         "width" : videoSizeArr[index].width + 'px',
         "height": videoSizeArr[index].height + 'px',
         "x"     : videoSizeArr[index].x,
         "y"     : videoSizeArr[index].y
         })
         })
         } else {
         T.set($("video"), {
         "width"     : window.innerWidth + "px",
         "height"    : window.innerHeight + "px",
         "background": "#000",
         x           : 0,
         y           : 0
         })
         }
         }

         window.onresize = function () {
         resetVideoSize();
         //setTimeout(resetVideoSize, 50);
         }*/
    }
})(
    window.SLeasy = window.SLeasy || {},
    Hammer,
    jQuery,
    TweenMax || TweenLite
);