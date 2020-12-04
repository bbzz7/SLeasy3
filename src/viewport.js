// SLeasy3-viewport
;(function (SLeasy, $, device, T) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();

    //设置视口
    SLeasy.viewport = function (sliderBoxHeight) {
        //重置body
        $("body").css({"padding": 0, "margin": "0 0"});
        $('meta[name="viewport"]').remove();
        $("head").prepend('<meta id="SLeasy_viewport" name="viewport" content="width=device-width, initial-scale=1.0,viewport-fit=cover"><meta name="format-detection" content="telephone=no, email=no,adress=no"/>');
        //初始化横竖屏状态
        $scope.isLandscape = device.landscape();
        //适配策略
        var ratio = device.desktop() ? $config.width / $config.height : $(window).width() / $(window).height(),//当前设备屏幕高宽比
            viewport = {
                'width': function () {
                    //刷新幻灯缩放比例因子
                    $scope.viewScale = window.innerWidth / $config.width;
                    $scope.fixWidth = window.innerWidth;
                    return;
                },
                'height': function (thresholdHeight) {
                    var height = window.innerHeight;
                    $scope.viewScale = height / $config.height;//刷新幻灯缩放比例因子
                    if (thresholdHeight) {
                        if (height > thresholdHeight * window.innerWidth / $config.width) {
                            $scope.viewScale = window.innerWidth / $config.width;
                        } else {
                            $scope.viewScale = height / thresholdHeight;
                        }
                    }
                    $scope.viewWidth = window.innerWidth;
                    $scope.fixWidth = $scope.viewWidth > $config.width * $scope.viewScale ? $config.width * $scope.viewScale : $scope.viewWidth;
                    return;
                },
                'auto': function () {
                    $config.width / $config.height >= ratio ? viewport.width() : viewport.height();
                    return;
                },
                'scroll': function () {
                    viewport.width();
                    return viewportContent;
                },
                'threshold': function (threshold) {//阈值模式,当stageMode为指定数值的时候,按阈值高度等比缩放
                    viewport.height(threshold);
                    return;
                },
                'device-width': function () {
                    var viewportContent = 'width=device-width, initial-scale=1.0,viewport-fit=cover';
                    $("#SLeasy_viewport").attr('content', viewportContent);
                    return;
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
        if (device.desktop()) $config.rotateMode = false;
        //设置viewport-content
        if (typeof $config.stageMode == 'number') {
            viewport['threshold']($config.stageMode)
        } else {
            viewport[$config.stageMode]();
        }
        if ($config.rotateMode) {
            device.landscape() ? viewport.height() : viewport.width();
        }

        var $fixBox = $('<div id="SLeasy_fixBox" style="width:100vw;height: 100vh;position: relative;overflow: hidden;margin: auto"></div>').appendTo('body');
        var boxWidth = $fixBox.width();
        var boxHeight = $fixBox.height();

        //rotateMode
        if ($config.rotateMode) {
            $scope.SLeasyWidth = '100vh';
            $scope.SLeasyHeight = '100vw';
            //
            if (device.landscape()) {
                $scope.viewScale = boxHeight / $config.width;//刷新幻灯缩放比例因子
                var sliderBoxHeight = sliderBoxHeight * $scope.viewScale || $config.height * $scope.viewScale;
                $scope.fixWidth = boxHeight;
                $scope.fixHeight = boxWidth > sliderBoxHeight ? sliderBoxHeight : boxWidth;
                $scope.fixMargin = boxWidth > sliderBoxHeight ? (boxWidth - sliderBoxHeight) / 2 : 0;
            } else {
                $scope.viewScale = boxWidth / $config.height;//刷新幻灯缩放比例因子
                var sliderBoxHeight = sliderBoxHeight * $scope.viewScale || $config.width * $scope.viewScale;
                $scope.fixWidth = boxHeight > sliderBoxHeight ? sliderBoxHeight : boxHeight;
                $scope.fixHeight = boxWidth;
                $scope.fixMargin = 0;
            }
        } else {
            $scope.SLeasyWidth = '100vw';
            $scope.SLeasyHeight = '100vh';
            //
            var sliderBoxHeight = sliderBoxHeight * $scope.viewScale || $config.height * $scope.viewScale;
            $scope.fixWidth = boxWidth > $config.width * $scope.viewScale ? $config.width * $scope.viewScale : boxWidth;
            $scope.fixHeight = boxHeight > sliderBoxHeight ? sliderBoxHeight : boxHeight;
            $scope.fixMargin = boxHeight > sliderBoxHeight ? (boxHeight - sliderBoxHeight) / 2 : 0;
        }
        if (!$scope.rotateMode) $fixBox.remove();
        if (device.desktop()) {
            $scope.viewScale = $config.viewport / (ratio > 1 ? $config.height : $config.width);//刷新幻灯缩放比例因子
            $scope.fixWidth = ratio > 1 ? $config.viewport * ratio : $config.viewport;
            $scope.fixHeight = ratio < 1 ? $config.viewport / ratio : $config.viewport;
            $scope.fixMargin = 0;
            var fixBoxPadding = (window.innerHeight - $scope.fixHeight) / 2 > 0 ? (window.innerHeight - $scope.fixHeight) / 2 : 0;
            $('#SLeasy_fixBox').css({
                width: $scope.fixWidth,
                height: $scope.fixHeight,
                // padding: fixBoxPadding + 'px 0'
            });
            $scope.SLeasyWidth = '100%';
            $scope.SLeasyHeight = '100%';
        }
        $scope.maxWidth = $config.width * $scope.viewScale;
        $scope.maxHeight = $config.height * $scope.viewScale;
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
        }
        //横竖屏旋转切换事件 --------------------------------------------------
        SLeasy.onResize = function (oMode) {
            if (device.desktop()) return;
            setTimeout(function () {
                $config.reloadMode && window.location.reload();
            }, 250);

            //横竖屏旋转自适应
            if ($scope.rotateMode == 'auto') {
                if (oMode == '竖屏') {
                    T.set($scope.sliderBox, {
                        xPercent: -50,
                        yPercent: -50,
                        top: '50%',
                        left: '50%',
                        rotation: '+=90',

                    });
                    if ($config.width / $config.height >= 1) {
                        $scope.sliderBox.css({
                            width: '100vh',
                            height: '100vw',
                        });
                    } else {
                        $scope.sliderBox.css({
                            width: '100vw',
                            height: '100vh',
                        });
                    }
                    setTimeout(function () {
                        var viewportScale = '';
                        var viewportContent = 'width=device-width, initial-scale=1.0,viewport-fit=cover';
                        $("#SLeasy_viewport").attr('content', viewportContent);
                    }, 160)
                } else if (oMode == '横屏') {
                    T.set($scope.sliderBox, {
                        xPercent: 0,
                        yPercent: 0,
                        top: '0%',
                        left: '0%',
                        rotation: '-=90',
                    });

                    if ($config.width / $config.height >= 1) {
                        //原生横屏
                        $scope.sliderBox.css({
                            width: '100vw',
                            height: '100vh',
                        });
                    } else {
                        //原生竖屏
                        $scope.sliderBox.css({
                            width: '100vh',
                            height: '100vw',
                            top:'-50%',
                            // marginTop: 0
                        });
                    }
                    setTimeout(function () {
                        var viewportScale = ($fixBox.height() - 52) / ($scope.isLandscape ? boxHeight : boxWidth);
                        // alert($fixBox.height() + ':' + boxWidth + ':' + viewportScale + ':' + window.innerHeight);
                        var viewportContent = 'width=device-width, initial-scale=' + viewportScale + ',viewport-fit=cover';
                        $("#SLeasy_viewport").attr('content', viewportContent);
                    }, 160)
                }
            }

            //旋转态横竖屏提示 -----------------------------
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
            if ($config.on['resize']) $config.on['resize'](oMode);
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