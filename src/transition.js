// SLeasy3-transition
;(function (SLeasy, $, T) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();

    //go slider
    SLeasy.goSlider = function (index, duration) {
        var nextIndex = SLeasy.nextIndex(index);
        if ($config.routerMode) {
            //var detailHash=$scope.router.getRoute(1);
            $scope.router.setRoute(0, nextIndex + '');//设置路由
        } else {
            SLeasy.transit(nextIndex, duration);
        }
        return SLeasy;
    }

    SLeasy.nextIndex = function (index) {
        //如果是label标签，并且不包含‘—=’或者‘+=’,则获取标签对应的索引值
        var index = (typeof index == 'number' || index.indexOf('-=') != -1 || index.indexOf('+=') != -1) ? index : SLeasy.label(index);
        console.log(index);
        var totalIndex = $scope.sliders.length - 1,//最大索引值
            total = totalIndex + 1,//幻灯总数
            nextIndex;

        //非循环模式
        if (!$config.loopMode) {
            //不同参数类型策略，获取下一页索引，int或者string,如：‘+=1，-=1’
            var indexType = {
                "number": function () {
                    if (index >= 0 && index <= totalIndex) {//索引边界内
                        $scope.isSliderEdge = false;
                        nextIndex = index;
                    } else {//索引边界外
                        $scope.isSliderEdge = true;
                        if (index > totalIndex) {
                            nextIndex = totalIndex;
                        } else {
                            nextIndex = 0;
                        }
                    }
                },
                "string": function () {
                    var _arr = index.split('=');
                    if (_arr[0] == '-') {
                        nextIndex = ($scope.sliderIndex - parseInt(_arr[1]) < 0) ? 0 : $scope.sliderIndex - parseInt(_arr[1]);
                        $scope.isSliderEdge = ($scope.sliderIndex - parseInt(_arr[1]) < 0) ? true : false;
                    } else if (_arr[0] == '+') {
                        nextIndex = ($scope.sliderIndex + parseInt(_arr[1]) > totalIndex) ? totalIndex : $scope.sliderIndex + parseInt(_arr[1]);
                        $scope.isSliderEdge = ($scope.sliderIndex + parseInt(_arr[1]) > totalIndex) ? true : false;
                    } else {
                        SLeasy.goSlider(0);
                        return console.warn('幻灯跳转索引值错误！');
                    }
                },
            }

            if (typeof indexType[(typeof index)] == 'undefined') {
                SLeasy.goSlider(0);
                return console.warn('幻灯索引参数错误~！');
            }
            indexType[(typeof index)]();//策略执行
            //$scope.sliderIndex=nextIndex;//更新当前slider索引
            return nextIndex;

        } else {
            //循环模式
            var indexType = {
                "number": function () {
                    nextIndex = index % total >= 0 ? index % total : total + index % total;
                },
                "string": function () {
                    var _arr = index.split('=');
                    if (_arr[0] == '-') {
                        nextIndex = ($scope.sliderIndex - parseInt(_arr[1])) < 0 ? total + ($scope.sliderIndex - parseInt(_arr[1])) % total : ($scope.sliderIndex - parseInt(_arr[1])) % total;//索引取模

                    } else if (_arr[0] == '+') {
                        nextIndex = ($scope.sliderIndex + parseInt(_arr[1])) % total;
                    } else {
                        SLeasy.goSlider(0);
                        return console.warn('幻灯跳转索引值错误！');
                    }
                },
            }
            if (typeof indexType[(typeof index)] == 'undefined') {
                SLeasy.goSlider(0);
                return console.warn('幻灯索引参数错误~！');
            }
            indexType[(typeof index)]();//策略执行
            //$scope.sliderIndex=nextIndex;//更新当前slider索引
            return nextIndex;
        }

    }

    SLeasy.transitFX = function (nextIndex, duration) {
        var _in,
            _out,
            _show,
            _set,
            motionFX = SLeasy.getMotionFX(),//获取全局配置切换效果
            customFX
        ;

        //如果当前幻灯索引小于下一页索引,则按预设效果切换，反之，反转切换效果
        console.log($scope.sliderIndex + ':' + nextIndex);


        //自定义切换效果
        customFXAguments = $config.sliders[nextIndex].motionFX || $config.sliders[nextIndex].fx || $config.sliders[nextIndex].FX || null;
        customFX = customFXAguments ? SLeasy.getMotionFX(customFXAguments[0], customFXAguments[1], customFXAguments[2]) : {};


        //in
        if ($scope.sliderIndex < nextIndex) {
            if ($scope.sliderIndex == 0 && nextIndex == $config.sliders.length - 1 && $config.loopMode) {//为最首，最末页情况
                _in = $.extend({display: 'block'}, (customFX.out || motionFX.out));
            } else {
                _in = $.extend({display: 'block'}, (customFX.in || motionFX.in));
            }
        } else {
            if ($scope.sliderIndex == $config.sliders.length - 1 && nextIndex == 0 && $config.loopMode) {//为最首，最末页情况
                _in = $.extend({display: 'block'}, (customFX.in || motionFX.in));
            } else {
                _in = $.extend({display: 'block'}, (customFX.out || motionFX.out));
            }
        }

        //out
        if ($scope.sliderIndex < nextIndex) {
            if ($scope.sliderIndex == 0 && nextIndex == $config.sliders.length - 1 && $config.loopMode) {//为最首，最末页情况
                _out = $.extend({display: 'none'}, (customFX.in || motionFX.in));
            } else {
                _out = $.extend({display: 'none'}, (customFX.out || motionFX.out));
            }
        } else {
            if ($scope.sliderIndex == $config.sliders.length - 1 && nextIndex == 0 && $config.loopMode) {//为最首，最末页情况
                _out = $.extend({display: 'none'}, (customFX.out || motionFX.out));
            } else {
                _out = $.extend({display: 'none'}, (customFX.in || motionFX.in));
            }

        }

        if ($config.sliders.length == 2) {
            if ($scope.sliderIndex < nextIndex) {
                _in = $.extend({display: 'block'}, (customFX.in || motionFX.in));
                _out = $.extend({display: 'none'}, (customFX.out || motionFX.out));
            } else {
                _in = $.extend({display: 'block'}, (customFX.out || motionFX.out));
                _out = $.extend({display: 'none'}, (customFX.in || motionFX.in));
            }
        }

        //show
        if ($scope.sliderIndex == nextIndex) {//相同幻灯索引标识
            $scope.isSameSlider = true;
        } else {
            $scope.isSameSlider = false;
        }
        _show = $.extend({//show FX
            onStart: function () {
                var currentSlider = $scope.sliders.eq($scope.sliderIndex),//当前幻灯
                    currentSubMotion = currentSlider.find($scope.subMotion);//当前幻灯子元素
                var nextSlider = $scope.sliders.eq(nextIndex);//下一幻灯
                console.log($scope.sliderIndex + ':' + nextIndex);

                //如果下一页是scroll模式
                if ($config.sliders[nextIndex].scroll || $config.scrollMagicMode) {
                    SLeasy.touchScroll(true, false);
                    nextSlider.scroll(function (e) {
                        //console.log(e);
                        var scrollTop = e.target.scrollTop,
                            scrollTopMax = e.target.scrollTopMax || Math.floor(e.target.scrollHeight - $scope.fixHeight);
                        //console.log(scrollTop + ':' + scrollTopMax);
                        //如果autoSwitch参数未设置（即默认状态），或者切换方向上的参数值为false，则自动切换幻灯页
                        if (scrollTop <= 0) {
                            $scope.isAtTop = true;
                            if (!$config.sliders[nextIndex].autoSwitch || $config.sliders[nextIndex].autoSwitch[0]) {
                                SLeasy.goSlider(nextIndex - 1);
                                $scope.isAtTop = false;
                            }
                        } else if (scrollTop >= scrollTopMax) {
                            $scope.isAtBottom = true;
                            if (!$config.sliders[nextIndex].autoSwitch || $config.sliders[nextIndex].autoSwitch[1]) {
                                SLeasy.goSlider(nextIndex + 1);
                                $scope.isAtBottom = false;
                            }
                        } else {
                            $scope.scrollEdge = false;
                        }
                    })
                } else {
                    SLeasy.touchScroll(false, true);
                    console.log('can swipe~!')
                }
                if ($config.sliders[nextIndex].onStart) $config.sliders[nextIndex].onStart();//单页onStart回调

                //清除幻灯内联式样,!!!!~~~~(幻灯一定要去除zIndex和transform:matrix3d属性,不然在移动设备上,带有3d属性的子元素会出现穿透幻灯(父元素)现象)
                T.set(currentSubMotion, {clearProps: $scope.clearProps, display: 'none'});//清除子动画图片内联式样
                T.set(currentSlider, {clearProps: $scope.clearProps});
                T.set(currentSlider, $.extend(motionFX.set, $config.sliders[$scope.sliderIndex].set || {}));

                //sub motion
                var subMotionArr = $config.sliders[nextIndex].subMotion;
                var motionTime = $config.sliders[nextIndex].time || $config.sliders[nextIndex].motionTime || $config.motionTime;
                //如果有自定义loading，第一页幻灯子元素起始时间为0，不等待页面切换时间
                if ($scope.sliderIndex == 0 && !$.isEmptyObject($config.loading) && 'xy'.indexOf($config.swipeMode) == -1) motionTime = 0;
                //如果无自定义loading，幻灯页面切换超过边界，子元素起始时间为0，不等待页面切换时间
                if ($scope.isSliderEdge && $.isEmptyObject($config.loading)) motionTime = 0;
                //如果是通过路由标识进来
                if (typeof duration != 'undefined') motionTime = duration;
                //scrollMagic
                if ($config.scrollMagicMode) motionTime = 0;
                //相同一页幻灯
                if ($scope.isSameSlider) motionTime = 0;

                // alert(motionTime)
                SLeasy.subMotion(subMotionArr, 'sliders', motionTime);
                console.log(duration)
                console.log(motionTime)
                console.log($scope.isSliderEdge)
            },
            onComplete: function () {
                $scope.isAnim = 0;//重置运动状态
                if ($config.sliders[nextIndex].onComplete) $config.sliders[nextIndex].onComplete();//单页onComplete回调
                //console.log($scope.labelHash);
            },
        }, (customFX.show || motionFX.show));
        _set = customFX.set || motionFX.set;

        //force3D
        _in = $.extend({force3D: $config.force3D}, _in);
        _out = $.extend({force3D: $config.force3D}, _out);
        _show = $.extend({force3D: $config.force3D,clearProps: $scope.clearProps}, _show);

        return {
            in: _in,
            show: _show,
            out: _out,
            set: _set
        }

    }

    SLeasy.transit = function (nextIndex, duration) {
        if ($scope.sliders.length == 0) return alert('当前没有任何幻灯json数据~!');
        if ($scope.isAnim) return;
        $scope.isAnim = 1;//重置运动状态

        var currentSlider = $scope.sliders.eq($scope.sliderIndex),//当前幻灯
            //nextIndex=SLeasy.nextIndex(index),//下一幻灯索引
            nextSlider = $scope.sliders.eq(nextIndex),//下一幻灯
            FX = SLeasy.transitFX(nextIndex, duration);//切换效果

        //设置该页标题
        var title = $config.sliders[nextIndex].title || $config.title;
        if (title && title != $scope.title) {
            SLeasy.title(title);
            $scope.title = title;
        }


        //set
        // T.set(currentSlider, $.extend(FX.set, $config.sliders[$scope.sliderIndex].set || {}));
        T.set(nextSlider, $.extend(FX.set, $config.sliders[nextIndex].set || {}));
        $config.on['sliderChange'](nextIndex);//幻灯切换回调


        //冻结并清除当前子动画
        if (currentSlider[0] != nextSlider[0]) $scope.timeline.clear();

        //动画切换执行
        var motionTime = parseFloat(duration) || $config.sliders[nextIndex].time || $config.sliders[nextIndex].motionTime || $config.motionTime;
        if (currentSlider[0] == nextSlider[0]) {
            //如果上下页是同一页，则只执行to动画及子动画
            // $(currentSlider).fadeIn(300);
            // T.to(currentSlider, motionTime, FX.show);
            T.to(currentSlider, motionTime, $.extend({display: 'block'}, FX.show));
        } else {
            //清除所有ae渲染层tween
            if (duration >= 0.1) {
                $.each($scope.aeLayer, function (index, aeLayer) {
                    T.killTweensOf(aeLayer);
                })
            }
            //slider切换
            preFXAguments = $config.sliders[nextIndex].preMotionFX || null;
            //自定义切换效果
            preFX = preFXAguments ? SLeasy.getMotionFX(preFXAguments[0], preFXAguments[1], preFXAguments[2]) : FX;
            preMotionTime = motionTime;
            T.set(currentSlider, $.extend(FX.set, $config.sliders[$scope.sliderIndex].set || {}));
            T.to(currentSlider, preMotionTime || motionTime, preFX.out || FX.out);
            T.fromTo(nextSlider, motionTime, FX.in, FX.show);
        }
        //更新当前slider索引
        $scope.sliderIndex = nextIndex;
    }

})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    TweenMax || TweenLite
);