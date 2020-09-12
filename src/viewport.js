// SLeasy3-viewport
;(function (SLeasy, $, device) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();

    //设置视口
    SLeasy.viewport = function (sliderBoxHeight) {
        //刷新幻灯缩放比例因子
        $scope.viewScale = $config.viewport / $config.width;
        //重置body
        $("body").css({"padding": 0, "margin": "0 0"});
        $("head").append('<meta id="SLeasy_viewport" name="viewport" content="width=device-width"><meta name="format-detection" content="telephone=no, email=no,adress=no"/>');
        //适配策略
        var minWidth = SLeasy.is('ios') ? 320 : 321,//最小宽度
            minHeight = 480,//最小高度
            ratio = device.desktop() ? $config.width / $config.height : $(window).width() / $(window).height(),//当前设备屏幕高宽比
            viewport = {
                'width': function () {
                    var width = $config.viewport > minWidth ? $config.viewport : minWidth,
                        viewportContent = 'width=' + width + ',user-scalable=no';
                    return viewportContent;
                },
                'height': function (thresholdHeight) {

                    var width = $config.viewport > minWidth ? $config.viewport : minWidth;

                    var viewHeight = (thresholdHeight || $config.height) * (width / $config.width),
                        height = viewHeight > minHeight ? viewHeight : minHeight;

                    $scope.fixWidth = height * ratio;
                    var viewportContent = 'width=' + $scope.fixWidth + ',user-scalable=no';
                    //height模式下，重置viewScale
                    if ($config.width / $config.height < ratio) {
                        if ($config.fixWidthMode) {
                            $scope.viewScale = $scope.fixWidth / $config.width;//刷新幻灯缩放比例因子
                        } else {
                            $scope.viewScale = height / $config.stageMode;//刷新幻灯缩放比例因子
                            $scope.fixWidth = $config.width * $scope.viewScale;
                        }
                    }
                    return viewportContent;
                },
                'auto': function () {
                    var viewportContent = $config.width / $config.height >= ratio ? viewport.width() : viewport.height();
                    return viewportContent;
                },
                'scroll': function () {
                    var width = $config.viewport > minWidth ? $config.viewport : minWidth,
                        viewportContent = 'width=' + width + ',user-scalable=no';
                    return viewportContent;
                },
                'threshold': function (threshold) {//阈值模式,当stageMode为指定数值的时候,按阈值高度等比缩放
                    var viewportContent = $config.width / threshold >= ratio ? viewport.width() : viewport.height(threshold);
                    return viewportContent;
                },
                'device-width': function () {
                    viewportContent = 'width=device-width,user-scalable=no';
                    return viewportContent;
                }
            };


        var _content = (typeof $config.stageMode == 'number') ? viewport['threshold']($config.stageMode) : viewport[$config.stageMode]();
        $("#SLeasy_viewport").attr('content', _content);

        // if ($config.stageMode == 'auto' || typeof $config.stageMode == 'number') {
        SLeasy.onResize = function (oMode) {
            $config.reloadMode && window.location.reload();
            //横竖屏回调
            if ($config.on['resize']) {
                $config.on['resize'](oMode);
            }
            //hack ios微信下横竖屏切换布局显示不能复位
            if (device.ios() && SLeasy.isWechat()) {
                if (oMode == '横屏') {
                    $('#SLeasy_viewport').attr('content', 'width=' + $scope.fixHeight + ',user-scalable=no');
                } else {
                    setTimeout(function () {
                        $('#SLeasy_viewport').attr('content', 'width=' + $config.viewport + ',user-scalable=no');
                    }, 150)
                }
            }
        }
        //}


        var sliderBoxHeight = sliderBoxHeight * $scope.viewScale || $config.height * $scope.viewScale;
        var fixHeight = $('<div id="SLeasy_fixHeight" style="height: 100vh"></div>').appendTo('body').height() + 1;//+1以避免小数，导致底部有背景缝隙
        $('#SLeasy_fixHeight').remove();
        $scope.fixHeight = fixHeight > sliderBoxHeight ? sliderBoxHeight : fixHeight;
        console.log('fixHeight:' + $scope.fixHeight)
        if ($config.stageMode == 'scroll') {
            $scope.fixHeight = sliderBoxHeight;
        }

    }
})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    device
);