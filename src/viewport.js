// SLeasy3-viewport
;(function (SLeasy, $, device, T) {
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
                    if (!$config.rotateMode) $scope.viewWidth = width / ratio;
                    return viewportContent;
                },
                'height': function (thresholdHeight) {
                    var height = thresholdHeight || ($config.viewport > minWidth ? $config.viewport : minWidth);
                    $scope.viewScale = (thresholdHeight || height) / $config.height;//刷新幻灯缩放比例因子
                    var viewWidth = $scope.viewWidth = ($config.rotateMode && $config.stageMode == 'height') ? height / ratio : height * ratio;

                    $scope.fixWidth = viewWidth > $config.width * $scope.viewScale ? $config.width * $scope.viewScale : viewWidth;
                    var viewportContent = 'width=' + viewWidth + ',user-scalable=no';
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
                    // var viewportContent = $config.width / threshold >= ratio ? viewport.width() : viewport.height(threshold);
                    var viewportContent = viewport.height(threshold);
                    return viewportContent;
                },
                'device-width': function () {
                    viewportContent = 'width=device-width,user-scalable=no';
                    return viewportContent;
                }
            };

        //rotateMode
        if ($config.rotateMode == 'auto') {
            $scope.rotateMode = 'auto';
            if (device.portrait() && $config.width / $config.height < 1) $config.rotateMode = false;
            if (device.portrait() && $config.width / $config.height > 1) $config.rotateMode = true;
            if (device.landscape() && $config.width / $config.height > 1) $config.rotateMode = false;
            if (device.landscape() && $config.width / $config.height < 1) $config.rotateMode = true;
        }
        //设置viewport-content
        var _content = (typeof $config.stageMode == 'number') ? viewport['threshold']($config.stageMode) : viewport[$config.stageMode]();
        if ($config.rotateMode) {
            _content = device.landscape() ? viewport['height']() : viewport['width']();
        }
        $("#SLeasy_viewport").attr('content', _content);

        var sliderBoxHeight = sliderBoxHeight * $scope.viewScale || $config.height * $scope.viewScale;
        var $fixBox = $('<div id="SLeasy_fixBox" style="width:100vw;height: 100vh;position: relative;overflow: hidden;"></div>').appendTo('body');
        var fixHeight = $fixBox.height() + 1;//+1以避免小数，导致底部有背景缝隙
        //rotateMode
        // alert(fixHeight);
        if ($config.rotateMode) {
            if (device.landscape() && !device.desktop()) {
                $scope.fixWidth = fixHeight > sliderBoxHeight ? sliderBoxHeight : fixHeight;
                $scope.fixHeight = $fixBox.width();
                $scope.viewScale = $scope.fixWidth / $config.width;//刷新幻灯缩放比例因子
                $scope.fixMargin = 0;
            } else {
                $scope.fixWidth = fixHeight > $config.width * $scope.viewScale ? $config.width * $scope.viewScale : fixHeight;
                $scope.fixHeight = $fixBox.width();
                $scope.fixMargin = fixHeight > $config.width * $scope.viewScale ? (fixHeight - $config.width * $scope.viewScale) / 2 : 0;
            }
        } else {
            $scope.fixHeight = fixHeight > sliderBoxHeight ? sliderBoxHeight : fixHeight;
            $scope.fixMargin = fixHeight - 1 > sliderBoxHeight ? (fixHeight - 1 - sliderBoxHeight) / 2 : 0;
        }
        if (!$scope.rotateMode) $fixBox.remove();
        console.log('fixHeight:' + $scope.fixHeight)

        //初始态横竖屏提示
        if (!$.isEmptyObject($config.rotateTips)) {
            $('<div id="SLeasy_rotateTips"></div>').appendTo($config.rotateMode ? '#SLeasy_fixBox' : 'body').css({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '101vw',
                height: '101vh',
                backgroundImage: 'url(' + SLeasy.path($config.host, $config.rotateTips.bg) + ')',
                backgroundSize: 'cover',
                backgroundColor: $config.rotateTips.bgColor,
                backgroundPosition: 'center center',
                zIndex: $config.rotateTips.zIndex || 99,
                display: ($config.rotateTips.orientation === 0 && device.portrait() || $config.rotateTips.orientation === 90 && device.landscape()) ? 'block' : 'none'
            });
            if ($config.rotateTips.orientation === 0 && device.portrait() || $config.rotateTips.orientation === 90 && device.landscape()) {
                $config.reloadMode = true;
            }
        }
        SLeasy.onResize = function (oMode) {
            if (device.desktop()) return;
            setTimeout(function () {
                $config.reloadMode && window.location.reload();
            }, 250);

            //横竖屏旋转自适应
            if ($scope.rotateMode == 'auto') {
                if (oMode == '竖屏') {
                    // $('#SLeasy_viewport').attr('content', 'width=device-width,user-scalable=no');
                    T.set($scope.sliderBox, {
                        xPercent: -50,
                        yPercent: -50,
                        top: '50%',
                        left: '50%',
                        rotation: '+=90',

                    });
                    setTimeout(function () {
                        $('#SLeasy_viewport').attr('content', 'width=' + $config.viewport + ',user-scalable=no');
                    }, 100)
                } else {
                    T.set($scope.sliderBox, {
                        xPercent: 0,
                        yPercent: 0,
                        top: '0%',
                        left: '0%',
                        rotation: '-=90',
                    });
                    if ($config.stageMode == 'width') {
                        T.set($scope.sliderBox, {
                            top: -($scope.fixHeight - $config.viewport) / 2,
                            marginTop: 0
                        });
                    }
                    setTimeout(function () {
                        $('#SLeasy_viewport').attr('content', 'width=' + $scope.viewWidth + ',user-scalable=no');
                    }, 100)
                }
            }

            //旋转态横竖屏提示
            if (!$.isEmptyObject($config.rotateTips)) {
                if (oMode == ($config.rotateTips.orientation === 0 ? '竖屏' : '横屏')) {
                    setTimeout(function () {
                        $('#SLeasy').hide();
                        $('#SLeasy_rotateTips').show();
                    }, 50);
                } else {
                    // $('#SLeasy_rotateTips').remove();
                    $('#SLeasy').show();
                    $('#SLeasy_rotateTips').hide();
                }
            }

            //横竖屏回调
            if ($config.on['resize']) {
                $config.on['resize'](oMode);
            }
            //hack ios微信下横竖屏切换布局显示不能复位
            if (device.ios() && SLeasy.isWechat()) {
                if (oMode == '横屏') {
                    // $('#SLeasy_viewport').attr('content', 'width=device-width,user-scalable=no');
                } else {
                    $('#SLeasy_viewport').attr('content', 'width=device-width,user-scalable=no');
                    setTimeout(function () {
                        $('#SLeasy_viewport').attr('content', 'width=' + $config.viewport + ',user-scalable=no');
                    }, 180)
                }
            }
        }

        //scroll
        if ($config.stageMode == 'scroll') {
            $scope.fixHeight = sliderBoxHeight;
        }

    }
})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    device,
    TweenMax
);