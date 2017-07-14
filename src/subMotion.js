// SLeasy3-subMotion
;(function (SLeasy, $, T) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();


    //subMotion,参数:为单个slider/detail配置对象数据
    SLeasy.subMotion = function (subMotionArr, type) {
        console.log('subMotion~~~');
        if (!subMotionArr || !subMotionArr.length) return;

        //不同类型幻灯对应的子元素关键字标识
        var subName = {
            "sliders": "subMotion",
            "details": "detailMotion",
            'floats': 'floatElement',
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
            'floats': ''
        }

        //console.log(subMotionArr);
        subCallback[type] && subCallback[type]();//执行config相应类型的子动画回调


        //根据不同类型（幻灯或详情页），初始化timeLine及设置子动画开始、完成状态
        if (type && type != 'sliders') {
            var tl = new TimelineMax({autoRemoveChildren: $config.autoRemoveChildren, paused: true});
            $scope[type + 'TimeLine'] = tl;
            $scope.isDetailMotion = 0;//详情页子动画开始、完成状态
        } else {
            var tl = $scope.timeLine;
            $scope.isSubMotion = 0;//子动画是否正在播放状态
        }


        var totalTime = 0, startTime = 0;
        for (var i = 0; i < count; i++) {
            var subMotion = subMotionArr[i],//当前子动画
                preSubMotion = subMotionArr[i - 1],//上一子动画
                $dom = $('#SLeasy_' + (subName[type] || type) + '_' + subMotion.index),//当前子动画元素dom
                time = subMotion.time || 0,//time
                preTime = preSubMotion && preSubMotion.time ? preSubMotion.time : 0,
                /*
                 如果是第一个子动画，则当前子动画总时间累加值为，当前子动画时间，
                 如果不是第一个子动画，则当前子动画总时间累加值为，当前子动画时间:
                 如果当前子动画有设置start值:
                 如果preTime - subMotion.start > subMotion.time，累加0
                 否则累加subMotion.time - (preTime - subMotion.start)
                 如果当前子动画没有设置start值，则累加上一子动画的运动时间
                 */
                totalTime = preSubMotion ? (totalTime + (subMotion.start ? (preTime - subMotion.start > subMotion.time ? 0 : subMotion.time - (preTime - subMotion.start)) : subMotion.time)) : subMotion.time,
                /*
                 如果是第一个子动画，则子动画开始时间为幻灯页运动完成的时间，
                 如果不是第一个子动画，则之前累加的startTime，加上当前的start值:
                 如果当前子动画没有设置start值，则累加上一子动画的运动时间，以连接其后
                 如果当前子动画没有设置运动时间time，则直接加0
                 */
                startTime = preSubMotion ? (startTime + (time ? (typeof subMotion.start != 'undefined' ? subMotion.start : preTime) : 0)) : $config.motionTime,
                subIn = $.extend({force3D: true}, subMotion.in || {}),//in
                subShow = $.extend({display: 'block', force3D: true}, subMotion.show || {}),//show
                set = subMotion.set ? $.extend({position: 'absolute'}, subMotion.set) : {position: 'absolute'};//set

            //判断当前幻灯是否包含ae渲染层
            if ($dom.find('.SLeasy_ae').length) {
                //如果渲染层所属的sliderIndex等于当前幻灯索引,则在子元素动画开始时播放ae渲染层时间线
                $.extend(subShow, {
                    onStart: (function (_$dom,_subMotion) {
                        return function () {
                            console.log(_$dom);
                            console.log(_subMotion);
                            $.each(_subMotion.ae.layer, function (index, layer) {
                                console.log(layer);
                                var layerName = layer[0];
                                var aeLayer = $scope.aeLayer[layerName];
                                if (aeLayer.sliderIndex == $scope.sliderIndex) {
                                    aeLayer.frame = 0;//重置帧时间线
                                    console.log(aeLayer)
                                    aeLayer.autoPlay && T.to(aeLayer, aeLayer.time, aeLayer.tweenData);
                                }
                            });
                        }
                    })($dom,subMotion)
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
                    var to = $.extend({force3D: true}, subMotion.to[j]),
                        preTo = subMotion.to[j - 1] || {},
                        time = to.time || 0.4,
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