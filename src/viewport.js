// SLeasy3-viewport
;(function (SLeasy, $, device, T) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();

    //设置视口
    SLeasy.viewport = function (sliderBoxHeight) {
        //重置body
        $("body").css({"padding": 0, "margin": "0 0"});
        $('meta[name="viewport"]').remove();
        $("head").prepend('<meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="format-detection" content="telephone=no, email=no,adress=no"/><meta id="SLeasy_viewport" name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no,viewport-fit=cover,minimal-ui">');
        //初始化横竖屏状态
        $scope.isLandscape = device.landscape();
        $scope.isDesktop = device.desktop();
        //获取是否旋转状态
        SLeasy.isRotated();
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
                    var viewportContent = 'width=device-width, initial-scale=1.0,user-scalable=no,viewport-fit=cover';
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
                $scope.fixMargin = 0;
                $scope.fixMarginW = boxWidth > sliderBoxHeight ? (boxWidth - sliderBoxHeight) / 2 : 0;
            } else {
                $scope.viewScale = boxWidth / $config.height;//刷新幻灯缩放比例因子
                var sliderBoxHeight = sliderBoxHeight * $scope.viewScale || $config.width * $scope.viewScale;
                $scope.fixWidth = boxHeight > sliderBoxHeight ? sliderBoxHeight : boxHeight;
                $scope.fixHeight = boxWidth;
                $scope.fixMargin = boxHeight > sliderBoxHeight ? (boxHeight - sliderBoxHeight) / 2 : 0;
                $scope.fixMarginW = 0;

            }
        } else {
            $scope.SLeasyWidth = '100vw';
            $scope.SLeasyHeight = '100vh';
            //
            var sliderBoxHeight = sliderBoxHeight * $scope.viewScale || $config.height * $scope.viewScale;
            console.log('viewScale:', $scope.viewScale);
            console.log('sliderBoxHeight:', sliderBoxHeight);
            console.log('boxHeight:', boxHeight);
            $scope.fixWidth = boxWidth > $config.width * $scope.viewScale ? $config.width * $scope.viewScale : boxWidth;
            $scope.fixHeight = boxHeight > sliderBoxHeight ? sliderBoxHeight : boxHeight;
            $scope.fixMargin = boxHeight > sliderBoxHeight ? (boxHeight - sliderBoxHeight) / 2 : 0;
            $scope.fixMarginW = boxWidth > $scope.fixWidth ? (boxWidth - $scope.fixWidth) / 2 : 0;

            //初始化为横屏模式时
            if ($scope.isLandscape && !$scope.isDesktop) {
                $scope.SLeasyWidth = '100vw';
                if (device.iphone() && SLeasy.isWeixin()) {
                    //在iphone的微信内，横屏时window.screen.availWidth不变(2020.12.29)
                    // $scope.SLeasyHeight = window.screen.availWidth;
                    $scope.SLeasyHeight = boxHeight;
                } else {
                    $scope.SLeasyHeight = boxHeight;
                }
                // $scope.viewScale = $scope.SLeasyHeight / $config.height;//刷新幻灯缩放比例因子
                var viewportScale = $fixBox.height() / $scope.SLeasyHeight;
                $scope.landscapeViewportScale = viewportScale = Math.ceil(viewportScale * 1000) / 1000;
                var viewportContent = 'width=device-width, initial-scale=' + viewportScale + ',user-scalable=no,viewport-fit=cover';
                $("#SLeasy_viewport").attr('content', viewportContent);
                // alert(viewportScale + '/' + $scope.SLeasyHeight + '/');
            }
        }
        if (!$scope.rotateMode) $fixBox.remove();
        if (device.desktop() && typeof $config.stageMode != 'number') {
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
            $scope.SLeasyWidth = '100vw';
            $scope.SLeasyHeight = '100vh';
        }
        $scope.maxWidth = $config.width * $scope.viewScale;
        $scope.maxHeight = $config.height * $scope.viewScale;
        if ($scope.fixHeight > window.innerHeight) $scope.fixHeight = window.innerHeight;
        if ($scope.maxHeight > window.innerHeight) $scope.fixMargin = 0;
        if ($scope.maxHeight > window.innerHeight) $scope.maxHeight = window.innerHeight;

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
        SLeasy.onResize = function (oMode, eType) {
            if ($scope.isDesktop) return setTimeout(function () {
                location.reload();
            }, 250);
            setTimeout(function () {
                $config.reloadMode && window.location.reload();
            }, 250);

            //刷新是否旋转状态
            SLeasy.isRotated();

            //横竖屏旋转自适应
            if ($scope.rotateMode == 'auto') {
                var margin = $scope.isLandscape ? $scope.fixMarginW : $scope.fixMargin;
                //
                if (oMode == '竖屏') {
                    //
                    if ($config.width / $config.height >= 1) {
                        //原生横屏
                        T.set($scope.sliderBox, {
                            transformOrigin: '0 0',
                            width: '100vh',
                            height: '100vw',
                            x: $scope.sliderBox.height(),
                            margin: margin + 'px auto',
                            rotation: 90,
                        });
                    } else {
                        //原生竖屏
                        T.set($scope.sliderBox, {
                            transformOrigin: '0 0',
                            width: '100vw',
                            height: '100vh',
                            x: 0,
                            y: 0,
                            margin: margin + 'px auto ',
                            rotation: 0,
                        });
                    }
                    //
                    setTimeout(function () {
                        var viewportContent = 'width=device-width, initial-scale=1,user-scalable=no,viewport-fit=cover';
                        $("#SLeasy_viewport").attr('content', viewportContent);
                    }, 50)
                } else if (oMode == '横屏') {
                    //
                    if ($config.width / $config.height >= 1) {
                        //原生横屏
                        T.set($scope.sliderBox, {
                            transformOrigin: '0 0',
                            width: '100vw',
                            height: '100vh',
                            x: 0,
                            y: 0,
                            margin: '0 auto',
                            rotation: 0,
                        });
                    } else {
                        //原生竖屏
                        T.set($scope.sliderBox, {
                            width: '100vh',
                            height: '100vw',
                            transformOrigin: '0 0',
                            y: $scope.sliderBox.width(),
                            margin: 'auto ' + margin + 'px',
                            rotation: -90,
                        });
                    }
                    //
                    setTimeout(function () {
                        var viewportScale = $scope.isLandscape ? ($scope.landscapeViewportScale || 1) : window.innerHeight / boxWidth;
                        // alert($fixBox.height() + ':' + boxWidth + ':' + viewportScale + ':' + window.innerHeight);
                        var viewportContent = 'width=device-width, initial-scale=' + viewportScale + ',user-scalable=no,viewport-fit=cover';
                        $("#SLeasy_viewport").attr('content', viewportContent);
                    }, 300)
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