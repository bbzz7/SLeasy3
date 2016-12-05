// SLeasy3-subMotion
;(function (SLeasy, $, T) {
    var $config = SLeasy.config(),
        $scope  = SLeasy.scope();


    //subMotion,参数:为单个slider/detail配置对象数据
    SLeasy.subMotion = function (subMotionArr, type) {
        console.log('subMotion~~~');
        if (!subMotionArr || !subMotionArr.length) return;

        //不同类型幻灯对应的子元素关键字标识
        var subName = {
            "sliders": "subMotion",
            "details": "detailMotion",
            'floats' : 'floatElement',
        }


        //console.log($scope.sliderIndex);
        var count = subMotionArr.length;//子动画数量

        var subCallback = {
            "sliders": function () {
                $config.on['subMotion']($scope.sliderIndex)
            },//子元素动画开始回调,
            "details": function () {
                $config.on['detailMotion']($scope.detailIndex)
            },//详情页子元素动画开始回调
            'floats' : ''
        }

        //console.log(subMotionArr);
        subCallback[type] && subCallback[type]();//执行config相应类型的子动画回调


        //根据不同类型（幻灯或详情页），初始化timeLine及设置子动画开始、完成状态
        if (type && type != 'sliders') {
            var tl = new TimelineMax({autoRemoveChildren: $config.autoRemoveChildren, paused: true});
            $scope.isDetailMotion = 0;//详情页子动画开始、完成状态
        } else {
            var tl = $scope.timeLine;
            $scope.isSubMotion = 0;//子动画是否正在播放状态
        }


        var totalTime = 0, startTime = 0;
        for (var i = 0; i < count; i++) {
            var subMotion    = subMotionArr[i],//当前子动画
                preSubMotion = subMotionArr[i - 1],//上一子动画
                $dom         = $('#SLeasy_' + (subName[type] || type) + '_' + subMotion.index),//当前子动画元素dom
                time         = subMotion.time || 0,//time
                preTime      = preSubMotion && preSubMotion.time ? preSubMotion.time : 0;
            totalTime = preSubMotion ? (totalTime + (subMotion.start ? (preTime - subMotion.start > subMotion.time ? 0 : subMotion.time - (preTime - subMotion.start)) : subMotion.time)) : time,
                startTime = preSubMotion ? (startTime + (time ? (typeof subMotion.start != 'undefined' ? subMotion.start : preTime) : 0)) : $config.motionTime,
                // offsetTime   = preSubMotion ? (typeof subMotion.start != 'undefined' ? preSubMotion.time - subMotion.start : 0) : (typeof subMotion.start != 'undefined' ? -subMotion.start : -$config.motionTime),//和上个子动画之间的间隔时间
                subIn = $.extend({force3D: true}, subMotion.in || {}),//in
                subShow = $.extend({display: 'block', force3D: true}, subMotion.show || {}),//show
                set = subMotion.set ? $.extend({position: 'absolute'}, subMotion.set) : {position: 'absolute'};//set

            //判断当前幻灯是否包含ae渲染层
            if ($dom.find('.SLeasy_ae').length) {
                //如果渲染层所属的sliderIndex等于当前幻灯索引,则在子元素动画开始时播放ae渲染层时间线
                $.extend(subShow, {
                    onStart: function () {
                        $.each($scope.aeLayer, function (index, aeLayer) {
                            if (aeLayer.sliderIndex == $scope.sliderIndex) {
                                aeLayer.frame = 0;//重置帧时间线
                                T.to(aeLayer, aeLayer.time, aeLayer.tweenData);
                            }
                        });
                    }
                })
            }

            //console.log(subMotion);
            //set
            subMotion.set && T.set($dom, subMotion.set);

            //add label
            subMotion.label && tl.addLabel(subMotion.label);

            //add pause
            subMotion.pause && tl.addPause();

            //add motion
            tl.add(T.fromTo($dom, time, subIn, subShow), startTime);


            $scope.isSubMotion = 1;//子动画是否正在播放状态


            //add pause to
            subMotion.pauseTo && tl.addPause();

            //to
            if (subMotion.to) {
                for (
                    var j = 0; j < subMotion.to.length; j++) {
                    var to         = $.extend({force3D: true}, subMotion.to[j]),
                        preTo      = subMotion.to[j - 1] || {},
                        time       = to.time || 0.4,
                        offsetTime = preTo && (preTo.time - to.start) || 0//和上个子动画之间的间隔时间
                        ;

                    var dom = $(SLeasy.label(to.el));
                    //console.log('===========================');
                    //console.log(dom);
                    tl.add(T.to(dom, time, to.to), '-=' + offsetTime);
                }
            }


        }

        //relative模式处理
        if ($config.positionMode == 'relative') {
            tl.eventCallback('onStart', function () {
                $("html,body").css("overflow", "hidden")
            });
            tl.eventCallback('onComplete', function () {
                $("html,body").css("overflow", "visible")
            });
        }

        //play
        //tl.progress(0.999).progress(0);
        tl.play();


    }

    //play
    SLeasy.play = function (from) {
        $scope.timeLine.play(from);
    }

    //pause
    SLeasy.pause = function (atTime) {
        $scope.timeLine.pause(atTime);
    }


})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    TweenMax || TweenLite
);