// SLeasy3-subMotion
;(function (SLeasy, $, T) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();


    //subMotion,参数:为单个slider/detail配置对象数据
    SLeasy.subMotion = function (subMotionArr, type, motionTime) {
        console.log('subMotion~~~');
        if (!subMotionArr || !subMotionArr.length) return;

        //不同类型幻灯对应的子元素关键字标识
        var subName = {
            "sliders": "subMotion",
            "details": "detailMotion",
            "floats": 'floatElement',
            "loading": 'loadingElement'
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
            $scope[type + 'Timeline'] = tl;
            console.warn(type + 'Timeline')
            $scope.isDetailMotion = 0;//详情页子动画开始、完成状态
        } else {
            var tl = $scope.timeline = new TimelineMax({autoRemoveChildren: $config.autoRemoveChildren, paused: true});
            $scope.isSubMotion = 0;//子动画是否正在播放状态
        }

        var totalTime = 0;
        for (var i = 0; i < count; i++) {
            var subMotion = subMotionArr[i],//当前子动画
                preSubMotion = subMotionArr[i - 1],//上一子动画
                $dom = $('#SLeasy_' + (subName[type] || type) + '_' + subMotion.index),//当前子动画元素dom
                time = subMotion.time || 0,//time
                preTime = preSubMotion && preSubMotion.time ? preSubMotion.time : 0;
            /*
             如果是第一个子动画，则当前子动画总时间累加值为，当前子动画时间，
             如果不是第一个子动画，则当前子动画总时间累加值为，当前子动画时间:
             如果当前子动画有设置start值:
             如果preTime - subMotion.start > subMotion.time，累加0
             否则累加subMotion.time - (preTime - subMotion.start)
             如果当前子动画没有设置start值，则累加上一子动画的运动时间
             */
            // totalTime = preSubMotion ? (totalTime + (subMotion.start ? (preTime - subMotion.start > subMotion.time ? 0 : subMotion.time - (preTime - subMotion.start)) : subMotion.time)) : subMotion.time;
            /*
             如果是第一个子动画，则子动画开始时间为幻灯页运动完成的时间，
             如果不是第一个子动画，则之前累加的startTime，加上当前的start值:
             如果当前子动画没有设置start值，则累加上一子动画的运动时间，以连接其后
             如果当前子动画没有设置运动时间time，则直接加0
             */
            // console.warn(subMotion.class);
            // console.warn('preSubMotion:' + (preSubMotion ? true : false));
            // console.warn('startTime01:' + startTime);
            // console.warn(subMotion);
            // console.warn('subMotion.time:' + subMotion.time);
            // console.warn('time:' + time);

            // console.warn('=============================================');
            // subMotion.pause && console.log('pasue:' + startTime);
            // console.log('name:' + subMotion.class);
            // console.log('preTime:' + preTime);
            // console.log(totalTime == 0 && (time && subMotion.start == undefined));

            if (totalTime == 0 && (time && subMotion.start == undefined)) {
                //第一个有time,没有start的子元素
                // console.warn('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
                //+preTime是考虑首尾页情况下，motionTime为0，totalTime会连续为0的问题
                totalTime = totalTime + motionTime + preTime;
                var startTime = totalTime;
                // console.warn(totalTime)
            } else if (time && subMotion.start && typeof subMotion.start == 'string') {
                //有time，有start，且start值为'+=n,-=n'字符串时
                // console.warn('2------------------')
                // console.warn('preTime:' + preTime);
                // console.warn(totalTime + '+' + (preTime + parseFloat(subMotion.start.split('+=')[1])));
                // console.warn('------------------')
                if (subMotion.start.indexOf('+=') != -1) totalTime = totalTime + preTime + parseFloat(subMotion.start.split('+=')[1]);
                if (subMotion.start.indexOf('-=') != -1) totalTime = totalTime + preTime - parseFloat(subMotion.start.split('-=')[1]);
                var startTime = totalTime;
            } else {
                //有/无time，有/无start为数字时
                // console.warn('1-----------------')
                // console.warn('preTime:' + preTime)
                // console.warn(totalTime + '+' + (time ? (subMotion.start !== undefined ? subMotion.start : preTime) : 0))
                // console.warn('-----------------')
                totalTime = totalTime + (time ? (subMotion.start !== undefined ? subMotion.start : preTime) : preTime);
                var startTime = time ? totalTime : 0;//无time的set子元素，startTime值为0
            }

            var subIn = $.extend({force3D: $config.force3D}, subMotion.in || {}),//in
                subShow = $.extend({display: 'block', force3D: $config.force3D}, subMotion.show || {}),//show
                set = subMotion.set ? $.extend({
                    position: 'absolute',
                    display: 'block'
                }, subMotion.set) : {position: 'absolute', display: 'block'};//set
            // console.warn('totalTime:::' + totalTime);
            // console.warn('startTime:::::::' + startTime);
            // console.warn('----------------------------------');
            //判断当前幻灯是否包含ae渲染层
            if ($dom.find('.SLeasy_ae').length) {
                console.log($dom);
                //如果渲染层所属的sliderIndex等于当前幻灯索引,则在子元素动画开始时播放ae渲染层时间线
                $.extend(subShow, {
                    onStart: (function (_$dom, _subMotion) {
                        return function () {
                            console.log(_$dom);
                            console.log(_subMotion);
                            $.each(_subMotion.ae.layer, function (index, layer) {
                                console.log('AELayer:' + layer);
                                var layerName = layer[0];
                                var aeLayer = $scope.aeLayer[layerName];
                                if (aeLayer.sliderIndex == $scope.sliderIndex || $dom.find('.SLeasy_loading')) {
                                    aeLayer.frame = 0;//重置帧时间线
                                    console.log(aeLayer)
                                    aeLayer.autoPlay && T.to(aeLayer, aeLayer.time, aeLayer.tweenData);
                                }
                            });
                        }
                    })($dom, subMotion)
                });
                if (typeof subMotion.set.y == 'undefined') subMotion.set.y = 0;
            }

            // console.log($dom);
            //set
            subMotion.set && T.set($dom, subMotion.set);

            //add label
            subMotion.label && tl.addLabel(subMotion.label);

            //add pause
            subMotion.pause && tl.addPause(startTime);

            //add motion
            if (subMotion.to) {
                subMotion.set && tl.add(T.set($(subMotion.el), subMotion.set));
                tl.add(T.to($(subMotion.el), time, $.extend({force3D: $config.force3D}, subMotion.to)), startTime);
            } else {
                if (set.display && set.display == 'none') subShow.display = 'none';
                tl.add(T.fromTo($dom, time, subIn, subShow), startTime);
                // console.log(subMotion.class)
                // console.dir(set)
                // console.log(subIn)
                // console.log(subShow)
            }
            // console.log($dom)
            // console.log('time:' + time)
            // console.log('totalTime:' + totalTime)
            // console.log('startTime:' + startTime)
            // console.log(subIn)
            // console.log(subShow)
            // console.log(subMotion.to)
            // console.log(';;;;;;;;;;;;;;;;;;;;;;;;;')

            $scope.isSubMotion = 1;//子动画是否正在播放状态

            //add pause to
            subMotion.pauseTo && tl.addPause();
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
        tl.play();
        console.log(';;;;;;;;;;;;;;;;;;;;;;;;;')
    }
})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    TweenMax || TweenLite
);