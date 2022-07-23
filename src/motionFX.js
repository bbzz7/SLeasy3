// SLeasy3-motionFX
;
(function (SLeasy) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();

    //getFX 参数为方向和风格索引，默认方向为scope中的FXDirection,风格为config中的motionStyle
    SLeasy.getMotionFX = function (direction, style, reverse) {
        //内置动画式样数组
        var motionFX = {
            leftRight: [//左右
                // 0
                {
                    set: {},
                    in: {x: $scope.fixWidth, y: 0, autoAlpha: 0, ease: Expo.easeInOut},
                    show: {x: 0, y: 0, autoAlpha: 1, ease: Expo.easeInOut},
                    out: {x: -$scope.fixWidth, y: 0, autoAlpha: 0, ease: Expo.easeInOut}
                },
                // 1
                {
                    set: {
                        transformPerspective: 400,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        webkitBackfaceVisibility: 'hidden'
                    },
                    in: {x: 0, y: 0, rotationY: 90, autoAlpha: 0, ease: Expo.easeInOut},
                    show: {x: 0, y: 0, rotationY: 0, autoAlpha: 1, ease: Expo.easeInOut},
                    out: {x: 0, y: 0, rotationY: -90, autoAlpha: 0, ease: Expo.easeInOut}
                },
                // 2
                {
                    set: {transformOrigin: '50% 120%'},
                    in: {x: 0, y: 0, rotationZ: 90, autoAlpha: 0, ease: Expo.easeInOut},
                    show: {x: 0, y: 0, rotationZ: 0, autoAlpha: 1, ease: Expo.easeInOut},
                    out: {x: 0, y: 0, rotationZ: -90, autoAlpha: 0, ease: Expo.easeInOut}
                },
                // 3
                {
                    set: {
                        transformOrigin: '50% 50% -' + $config.width * $scope.viewScale / 2,
                        transformPerspective: 400,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        webkitBackfaceVisibility: 'hidden'
                    },
                    in: {
                        x: 0, y: 0,
                        rotationY: 90,
                        autoAlpha: 1,
                        ease: Expo.easeInOut,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        webkitBackfaceVisibility: 'hidden'
                    },
                    show: {
                        x: 0, y: 0,
                        rotationY: 0,
                        autoAlpha: 1,
                        ease: Expo.easeInOut,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        webkitBackfaceVisibility: 'hidden'
                    },
                    out: {
                        rotationY: -90,
                        autoAlpha: 1,
                        ease: Expo.easeInOut,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        webkitBackfaceVisibility: 'hidden',
                    }
                },
                // 4
                {
                    in: {x: 0, y: 0, autoAlpha: 0, ease: Power0.easeOut},
                    show: {x: 0, y: 0, autoAlpha: 1, ease: Power0.easeOut},
                    out: {x: 0, y: 0, autoAlpha: 0, ease: Power0.easeOut}
                },
                // 5
                {
                    in: {x: 0, y: 0, autoAlpha: 0, ease: Power0.easeOut},
                    show: {x: 0, y: 0, autoAlpha: 1, ease: Power0.easeOut},
                    out: {x: 0, y: 0, autoAlpha: 1, ease: Power0.easeOut}
                },
                // 6
                {
                    set: {},
                    in: {x: $scope.fixWidth, y: 0, autoAlpha: 1, ease: $config.motionEase || Expo.easeInOut},
                    show: {x: 0, y: 0, autoAlpha: 1, ease: $config.motionEase || Expo.easeInOut},
                    out: {x: -$scope.fixWidth, y: 0, autoAlpha: 1, ease: $config.motionEase || Expo.easeInOut}
                },
            ],
            upDown: [//上下
                // 0
                {
                    set: {},
                    in: {x: 0, y: $scope.fixHeight, autoAlpha: 0, ease: Expo.easeInOut},
                    show: {x: 0, y: 0, autoAlpha: 1, ease: Expo.easeInOut},
                    out: {x: 0, y: -$scope.fixHeight, autoAlpha: 0, ease: Expo.easeInOut}
                },
                // 1
                {
                    set: {
                        transformPerspective: 400,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        webkitBackfaceVisibility: 'hidden'
                    },
                    in: {x: 0, y: 0, rotationX: -90, autoAlpha: 0, ease: Expo.easeInOut},
                    show: {x: 0, y: 0, rotationX: 0, autoAlpha: 1, ease: Expo.easeInOut},
                    out: {x: 0, y: 0, rotationX: 90, autoAlpha: 0, ease: Expo.easeInOut}
                },
                // 2
                {
                    set: {transformOrigin: '120% 50%'},
                    in: {x: 0, y: 0, rotationZ: -90, autoAlpha: 0, ease: Expo.easeInOut},
                    show: {x: 0, y: 0, rotationZ: 0, autoAlpha: 1, ease: Expo.easeInOut},
                    out: {x: 0, y: 0, rotationZ: 90, autoAlpha: 0, ease: Expo.easeInOut}
                },
                // 3
                {
                    set: {
                        transformOrigin: '50% 50% -' + $scope.fixHeight / 2,
                        transformPerspective: 400,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        webkitBackfaceVisibility: 'hidden'
                    },
                    in: {
                        x: 0, y: 0,
                        rotationX: -90,
                        autoAlpha: 1,
                        ease: Expo.easeInOut,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        webkitBackfaceVisibility: 'hidden'
                    },
                    show: {
                        x: 0, y: 0,
                        rotationX: 0,
                        autoAlpha: 1,
                        ease: Expo.easeInOut,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        webkitBackfaceVisibility: 'hidden'
                    },
                    out: {
                        x: 0, y: 0,
                        rotationX: 90,
                        autoAlpha: 1,
                        ease: Expo.easeInOut,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        webkitBackfaceVisibility: 'hidden'
                    }
                },
                // 4
                {
                    in: {x: 0, y: 0, autoAlpha: 0, ease: Power0.easeOut},
                    show: {x: 0, y: 0, autoAlpha: 1, ease: Power0.easeOut},
                    out: {x: 0, y: 0, autoAlpha: 0, ease: Power0.easeOut}
                },
                // 5
                {
                    in: {x: 0, y: 0, autoAlpha: 0, ease: Power0.easeOut},
                    show: {x: 0, y: 0, autoAlpha: 1, ease: Power0.easeOut},
                    out: {x: 0, y: 0, autoAlpha: 1, ease: Power0.easeOut}
                },
                // 6
                {
                    set: {},
                    in: {x: 0, y: $scope.fixHeight, autoAlpha: 1, ease: $config.motionEase || Expo.easeInOut},
                    show: {x: 0, y: 0, autoAlpha: 1, ease: $config.motionEase || Expo.easeInOut},
                    out: {x: 0, y: -$scope.fixHeight, autoAlpha: 1, ease: $config.motionEase || Expo.easeInOut}
                },
            ]
        };

        //获取切换式样
        var FXIndex = ($config.motionStyle == 'rand') ? Math.round(Math.random() * (motionFX.leftRight.length - 1)) : $config.motionStyle;
        FXIndex = typeof style != 'undefined' ? style : FXIndex;
        var FXDirection = direction || $config.motionDirection || $scope.FXDirection;

        //反向动效
        if (reverse) {
            var fx = {};
            fx.set = motionFX[FXDirection][FXIndex].set;
            fx.in = motionFX[FXDirection][FXIndex].out;
            fx.show = motionFX[FXDirection][FXIndex].show;
            fx.out = motionFX[FXDirection][FXIndex].in;
            return fx;
        } else {
            return motionFX[FXDirection][FXIndex];
        }

    }


})(window.SLeasy = window.SLeasy || {});