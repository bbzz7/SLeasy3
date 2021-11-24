// SLeasy3-imgToDiv
;(function (SLeasy, $, T) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();

    SLeasy.imgToDiv = function ($myDom, dfd) {
        var $dom = $myDom || $scope.sliderBox;
        var transformTotal = $myDom ? $myDom.find('.toDiv img').length : $scope.sliderBox.find('.toDiv img').length,
            transformedCount = 0;

        //no any subImg
        if ($.isEmptyObject($config.loading) ? (transformTotal == 0) : ($scope.loadingReady && transformTotal == 0)) {
            setTimeout(function () {
                console.log('SLeasy初始化完毕!~~~~~~~~~~~~~~~~~~~~')
                dfd.resolve();//初始化完毕
                //如果幻灯设置了自动开始，而且没有开启自动路由，且url没有路由哈希参数，则默认显示第一页
                $.isEmptyObject($config.loading) && TweenMax.set($('.SLeasy_sliders').eq(0), {autoAlpha: 0});
                !$scope.loadingReady && (!$config.routerMode && !$scope.router.getRoute()[0]) && SLeasy.goSlider(0);
                $scope.initReady = true;
            }, 0)
        }

        //to div
        $dom.find(".toDiv img").each(function (index, element) {//获取所有图片宽度
            $(this).load(function (e) {
                var w = $(this)[0].width,
                    h = $(this)[0].height,
                    style = {
                        'backgroundImage': 'url(' + $(this).attr("src") + ')',
                        'backgroundRepeat': 'no-repeat',
                        'backgroundSize': '100% auto',
                        'width': w * $scope.viewScale + 'px',
                        'height': h * $scope.viewScale + 'px'
                    }

                $(this).parent().css(style);
                $(this).remove();
                transformedCount++;
                // console.log('============'+w+':'+h+'==============');
                if ($scope.initReady && transformedCount == transformTotal) {
                    console.log('SLeasy初始化完毕!~~~~~~~~~~~~~~~~~~~~');
                    //重新set float元素以获得正确的尺寸
                    $('.SLeasy_floatElement').each(function (index, element) {
                        T.set($(this), $.extend({zIndex: 10}, $config.floats[index].set));
                    });
                    $('.SLeasy_loadingElement').each(function (index, element) {
                        T.set($(this), $config.loading.subMotion[index].set);
                    });
                    dfd && dfd.resolve();//初始化完毕
                    //如果幻灯设置了自动开始，而且没有开启自动路由，且url没有路由哈希参数，则默认显示第一页
                    $.isEmptyObject($config.loading) && TweenMax.set($('.SLeasy_sliders').eq(0), {autoAlpha: 0});
                    !$scope.loadingReady && (!$config.routerMode && !$scope.router.getRoute()[0]) && SLeasy.goSlider(0);
                    $scope.initReady = true;
                }
            });
        });
        //no to div
        $dom.find(".noDiv img").each(function (index, element) {//获取所有图片宽度
            $(this).one('load', function (e) {
                //naturalWidth、naturalHeight图片原始尺寸
                var w = $(this)[0].naturalWidth,
                    h = $(this)[0].naturalHeight,
                    style = {
                        'width': w * $scope.viewScale + 'px',
                        'height': h * $scope.viewScale + 'px',
                        'display': 'block'
                    }
                console.log('============' + w + ':' + h + '==============');
                $(this).css(style);
                // $(this).parent().css(style);
            });
        });
        //svg
        $dom.find('svg').not('.SLeasy_loadingSVG').each(function (index, element) {
            var w = parseFloat($(this).attr('width')) || parseFloat($(this).width()),
                h = parseFloat($(this).attr('height')) || parseFloat($(this).height());
            $(this).attr({
                // viewBox: '0 0 ' + w + ' ' + h,
                width: Math.round(w * $scope.viewScale) + 'px',
                height: Math.round(h * $scope.viewScale) + 'px',
            }).css({display: 'block'});
            if ($(this)[0].viewBox.baseVal.width == 0 && $(this)[0].viewBox.animVal.width == 0) alert('请设置svg的viewBox属性值~')
        })
    }
})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    TweenMax || TweenLite
);