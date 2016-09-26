// SLeasy3-detail
;(function (SLeasy, $, T) {
    var $config = SLeasy.config(),
        $scope  = SLeasy.scope();


    //goDetail
    SLeasy.goDetail = function (index) {
        var nextIndex = SLeasy.nextDetailIndex(index);
        if ($config.routerMode) {
            $scope.router.setRoute(1, nextIndex + '');//设置路由
        } else {
            SLeasy.detailTransit(nextIndex);
        }
    }

    SLeasy.nextDetailIndex = function (index) {
        return index = (typeof index == 'number') ? index : SLeasy.label(index, true);//如果是label标签，则获取标签对应的索引值
    }

    SLeasy.detailFX = function (index) {
        var detail   = $config.details[index] || (alert('详情页索引参数错误~！')),
            motionFX = detail.motionFX || null,
            motionFX = motionFX ? SLeasy.getMotionFX(motionFX[0], motionFX[1]) : SLeasy.getMotionFX('leftRight', 0),
            _in      = $.extend(motionFX.in, {display: 'block'}),
            _show    = $.extend(motionFX.show, {
                onStart: function (e) {
                    detail.onStart && detail.onStart();
                    SLeasy.hammerObj().get('swipe').set({enable: false});//禁止slider滑动手势
                    SLeasy.touchScroll(false);//禁止触摸默认滚动
                    SLeasy.subMotion(detail.subMotion, 'details');
                    $scope.isDetail = 1;//详情页已打开
                },
                onComplete:function (e) {
                    detail.onComplete && detail.onComplete();
                }
            }),
            _set     = $.extend({zIndex: 1}, detail.set) || {};


        return {
            in: _in,
            show: _show,
            set: _set
        }

    }

    SLeasy.detailTransit = function (index) {
        //如果详情页处于打开状态未关闭，则return
        if ($scope.isDetail) return;
        //索引边界检查
        if (typeof index == 'undefined' || index < 0 || index > $config.details.length - 1) return;

        $scope.detailIndex = index;

        var detail = $config.details[index],
            dom    = $scope.details.eq(index),
            FX     = SLeasy.detailFX(index),
            time   = detail.time || $config.motionTime
            ;

        //详情页打开回调
        $config.on['detailOpen'](index);

        //设置该页标题
        var title = $config.details[$scope.detailIndex].title || $config.title;
        if (title && title != $scope.title) {
            SLeasy.title(title);
            $scope.title = title;
        }

        //如果positionMod为relative情况
        if ($config.positionMode == 'relative') {
            dom.css("top", $(window).scrollTop());
            $scope.sliderBox.height($(document).height()).css("overflow", "hidden");
        }

        T.set(dom, FX.set);//自定义set，主要是z-index等
        T.fromTo(dom, time, FX.in, FX.show);

    }


    //closeDetail
    SLeasy.closeDetail = function (index) {
        var nextIndex = SLeasy.nextDetailIndex(index);
        if ($config.routerMode) {
            var sliderHash = $scope.router.getRoute(1)
            $scope.router.setRoute(1, 'html');//设置路由
        } else {
            SLeasy.closeDetailTransit(nextIndex);
        }
    }

    SLeasy.closeDetailTransit = function (index) {
        //如果详情页处于打开状态未关闭，则return
        if (!$scope.isDetail) return;
        //索引边界检查
        if (typeof index == 'undefined' || index < 0 || index > $config.details.length - 1) return;

        var detail     = $config.details[index],
            dom        = $scope.details.eq(index),
            onComplete = {
                onComplete: function () {
                    console.log(dom);
                    dom.data['onClose'] && dom.data['onClose']();//回调hack
                    //启用slider滑动手势/恢复触摸默认滚动
                    $config.stageMode != 'scroll' ? SLeasy.hammerObj().get('swipe').set({enable: true}) : SLeasy.touchScroll(true);
                    T.set(dom, {clearProps: $scope.clearProps, display: 'none'});//清除幻灯内联式样
                    T.set($scope.detailMotion, {clearProps: $scope.clearProps, display: 'none'});//清除子动画图片内联式样
                    $scope.isDetail = 0;//详情页已关闭
                    //如果positionMod为relative情况
                    $config.positionMode == 'relative' && $scope.sliderBox.css("overflow", "visible");
                }
            },
            FX         = SLeasy.detailFX(index),
            time       = detail.time || $config.motionTime
            ;

        //详情页关闭回调
        $config.on['detailClose'](index);

        //设置该页标题
        var title = $config.sliders[$scope.sliderIndex].title || $config.title;
        if (title && title != $scope.title) {
            SLeasy.title(title);
            $scope.title = title;
        }


        delete FX.show.onComplete;
        $.extend(FX.in, onComplete);
        T.fromTo(dom, time, FX.show, FX.in);
    }


})(
    window.SLeasy = window.SLeasy,
    jQuery,
    TweenMax || TweenLite
);