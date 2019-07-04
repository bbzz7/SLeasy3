// SLeasy3-slider
;(function (SLeasy, $, T) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();

    //html
    SLeasy.slider = function (opt) {

        //背景对齐策略
        var bgAlign = {
            "top": 'center ' + $config.alignOffset + 'px',
            "center": 'center ' + (($scope.fixHeight - $config.height * $scope.viewScale) / 2 + $config.alignOffset) + 'px',
            "bottom": 'center ' + ($scope.fixHeight - $config.height * $scope.viewScale + $config.alignOffset) + 'px',
            "photo": 'center center'
        }

        //slider label hash
        if (typeof opt.label != 'undefined') {
            $scope.labelHash[opt.label] = opt.index;
        }

        //slider
        var html = '\
			<div class="SLeasy_' + (opt.type || 'sliders') + ' ' + (opt.class || '') + '"\
			style="\
			width:' + $config.viewport + 'px;\
			height:' + ($config.positionMode == "absolute" || opt.type != 'sliders' ? $scope.fixHeight : '') + 'px;\
			background-image:' + sliderBg() + ';\
			background-repeat:' + (opt.bgRepeat || "no-repeat") + ';\
			background-size:100% auto;\
			background-position:' + bgAlign[(opt.alignMode || $config.alignMode)] + ';\
			background-color:' + (opt.bgColor || "transparent") + ';\
			overflow:' + (opt.scroll ? "auto" : ($config.positionMode == "absolute" ? "hidden" : "visible")) + ';\
			position:absolute; display:' + (opt.display || 'none') + ';\
			-webkit-overflow-scrolling:touch;\
			">';

        function sliderBg() {
            if (!opt.bg) return 'none';
            if (typeof opt.bg == 'string') {
                return 'url(' + SLeasy.path($config.host, opt.bg) + ');'
            } else {//多重背景
                var bgString = '';
                for (var i = 0; i < opt.bg.length; i++) {
                    bgString += 'url(' + SLeasy.path($config.host, opt.bg[i]) + ')' + (i == opt.bg.length - 1 ? ';' : ',')//如果是最后一个则添加;号 不是则添加,号
                }
                console.log(bgString);
                return bgString;
            }
        }

        //subMotion element
        //console.log(opt.index);
        html += SLeasy.subElement(opt.syncMotion || [], 'test', opt.index);
        html += SLeasy.subElement(opt.subMotion || [], opt.type, opt.index) + '</div>';//子动画元素

        return html
    }

    SLeasy.subElement = function (subArr, type, sliderIndex, display) {
        //不同类型幻灯对应的子元素关键字标识
        var subName = {
            "sliders": "subMotion",
            "details": "detailMotion",
            "floats": 'floatElement',
            "loading": 'loadingElement'
        }

        //不同类型子动画元素生成策略
        var subElement = {
            //img -------------------------------------------------------
            "img": function (opt) {
                //img to div
                return '<div\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_' + (subName[opt.type] || opt.type) + ' ' + (typeof opt.toDiv != 'undefined' && !opt.toDiv ? 'noDiv' : 'toDiv') + '"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';-webkit-overflow-scrolling:touch">\
				<img src="' + SLeasy.path($config.host, opt.img) + '">\
				</div>';
            },
            //shadownBt -------------------------------------------------
            "shadownBt": function (opt) {
                return '<div\
                id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				name="' + (opt.name || 'SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index) + '"\
				class="' + (opt.class || '') + ' SLeasy_' + (subName[opt.type] || opt.type) + ' SLeasy_shadownBt toDiv"\
				style="position:absolute; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
				<img src="' + SLeasy.shadownBt + '" width="' + opt.shadownBt[0] + '" height="' + opt.shadownBt[1] + ' ' + (opt.class || '') + '">\
				</div>';
            },
            //dom -------------------------------------------------------
            "dom": function (opt) {
                return '<div\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_' + (subName[opt.type] || opt.type) + '"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
				<div id="' + opt.dom + '"></div>\
				</div>';
            },
            //html ------------------------------------------------------
            "html": function (opt) {
                return '<div\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_' + (subName[opt.type] || opt.type) + '"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
				' + opt.html + '\
				</div>';
            },
            //svg -------------------------------------------------------
            "svg": function (opt) {
                return '<div\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_svg SLeasy_' + (subName[opt.type] || opt.type) + ' noDiv"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
				<img src="' + SLeasy.path($config.host, opt.svg) + '">\
				</div>';
            },
            //canvas ----------------------------------------------------
            "canvas": function (opt) {
                return '<div\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_' + (subName[opt.type] || opt.type) + '"\
				style="transform: matrix(1, 0, 0, 1, 0, 0);position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
				<canvas id="' + opt.canvas[0] + '" class="SLeasy_canvas" width="' + opt.canvas[1] + '" height="' + opt.canvas[2] + '" style="position:absolute;top:0px;left:0px;width:' + opt.canvas[1] * $scope.viewScale + 'px;height:' + opt.canvas[2] * $scope.viewScale + 'px"></canvas>\
				</div>';
            },
            //text ------------------------------------------------------
            "text": function (opt) {
                return '<div\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_text SLeasy_' + (subName[opt.type] || opt.type) + '"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
				' + opt.text + '\
				</div>';
            },
            //audio -----------------------------------------------------
            'audio': function (opt) {
                return '<audio\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_audio SLeasy_' + (subName[opt.type] || opt.type) + '"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';" \
				src="' + SLeasy.path($config.host, opt.audio) + '" preload="auto" ' + (opt.loop ? 'loop="loop"' : '') + '>\
				</audio>';
            },
            //video -----------------------------------------------------
            'video': function (opt) {
                return '<div\
                id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
                class="' + (opt.class || '') + ' SLeasy_video SLeasy_' + (subName[opt.type] || opt.type) + '" style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + '">\
                \<video\
				style="' + (opt.poster ? 'background-image:url(' + SLeasy.path($config.host, opt.poster) + ');background-size:100% auto;' : 'background:#000000;') + 'object-fit:fill;" \
				src="' + SLeasy.path($config.host, opt.video, opt.timeStamp || false) + '" type="' + (opt.mediaType || 'video/mp4') + '" poster="' + (SLeasy.path($config.host, opt.poster) || '') + '" ' + (typeof opt.x5 == 'undefined' || opt.x5 ? 'x5-video-player-type="h5" x5-video-player-fullscreen="true" x5-video-orientation="landscape|portrait"' : '') + 'width="' + (opt.width * $scope.viewScale || '100%') + '" ' + (opt.height ? 'height="' + opt.height * $scope.viewScale + '"' : '') + (typeof opt.controls != 'undefined' && !opt.controls ? '' : 'controls') + (typeof opt.playsinline != 'undefined' && !opt.playsinline ? '' : '-webkit-playsinline webkit-playsinline playsinline') + (typeof opt.playsinline != 'undefined' && opt.playsinline && opt.white ? '' : ' x5-playsinline') + ' preload="' + (opt.preload || 'auto') + '">\
				</video></div>';
            },
            //iframe ----------------------------------------------------
            'iframe': function (opt) {
                return '<iframe\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_iframe SLeasy_' + (subName[opt.type] || opt.type) + '"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';" \
				src="' + opt.iframe + '" frameborder="0">\
				</iframe>';
            },
            //input -----------------------------------------------------
            "input": function (opt) {
                //
                var inputHtml = {
                    'text': function () {
                        return '<input type="' + opt.input + '"\
						id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
						class="' + (opt.class || '') + ' SLeasy_input SLeasy_' + (subName[opt.type] || opt.type) + '"\
						style="border:0;padding:0;position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';"\
						value="' + (typeof opt.value != "undefined" ? opt.value : "") + '"\
                        placeholder="' + (opt.placeholder || '') + '"\
                        >';
                    },
                    'textArea': function () {
                        return '<textArea type="' + opt.input + '"\
						id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
						class="' + (opt.class || '') + ' SLeasy_input SLeasy_' + (subName[opt.type] || opt.type) + '"\
						style="border:0;position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';"\
						value="' + (typeof opt.value != "undefined" ? opt.value : "") + '"></textArea>';
                    },
                    'select': function () {
                        var opitionHtml = '';
                        for (var i = 0; i < opt.opition.length; i++) {
                            var row = '<option value="' + opt.opition[i][1] + '">' + opt.opition[i][0] + '</option>';
                            opitionHtml += row;
                        }
                        return '<select\
						id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
						class="' + (opt.class || '') + ' SLeasy_input SLeasy_' + (subName[opt.type] || opt.type) + '"\
						style="text-align:center;text-align-last:center;-webkit-appearance:none;appearance:none;border:0px solid;background:transparent;position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
						' + opitionHtml + '</select>';
                    }
                }

                return inputHtml[opt.input]();
            },
            //plugin ----------------------------------------------------
            "plugin": function (opt) {
                var id = 'SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index;
                //把插件初始化函数以及挂载点id(node)以及插件初始化回调注入到$scope.pluginList,在SLeasy.domReady后统一初始化
                $scope.pluginList.push([opt.plugin[0], $.extend(opt.plugin[1], {node: id}), opt.plugin[2]]);
                return '<div id="' + id + '" \
				class="' + (opt.class || '') + ' SLeasy_' + (subName[opt.type] || opt.type) + '"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
				</div>';
            },
            //ae --------------------------------------------------------
            "ae": function (opt) {
                //添加ae渲染层 --------------------------------------------
                SLeasy.addAeLayer = function (stageObj, layerName, addAt, prefix, start, end, suffix, bit, engine, preload) {
                    SLeasy.addBitmaps(layerName, prefix, start, end, suffix, bit);
                    $scope.aeLayer[layerName] = createAeLayer(layerName, engine, preload);
                    $scope.aeLayer[layerName].frame = 0;
                    $scope.aeLayer[layerName].start = $scope.aeLayer[layerName] ? 0 : start;
                    $scope.aeLayer[layerName].end = end;
                    $scope.aeLayer[layerName].name = layerName;//设置该渲染层name,以便回调中获取
                    $scope.aeLayer[layerName].sliderIndex = stageObj.sliderIndex;
                    if (addAt == 'auto') {
                        stageObj.addChild($scope.aeLayer[layerName]);
                    } else {
                        stageObj.addChildAt($scope.aeLayer[layerName], addAt);
                    }

                    // TweenMax.ticker.addEventListener("tick", $scope.aeLayer[layerName].flash);
                    return $scope.aeLayer[layerName];
                }

                //ae序列帧加载
                SLeasy.loadAeLayer = function (layerName, start, end, thread) {
                    var dfd = $.Deferred();
                    var thread = thread || 10;
                    var loaded = 0;
                    var percent = 0;
                    var imgs = $scope.bitmaps[layerName].slice(start, end + 1)

                    loadImg(imgs);

                    function loadImg(loadArr) {
                        var threadLoaded = 0;
                        for (var i = 0; i < thread; i++) {
                            if (!loadArr[i + loaded]) return;
                            var img = new Image();
                            img.src = loadArr[i + loaded];
                            console.log(':::::开始加载：' + img.src);
                            img.onload = function () {
                                loaded++;
                                threadLoaded++;
                                percent = Math.round(loaded * 100 / (end - start + 1));
                                // console.log('float:' + loaded * 100 / (end - start + 1))
                                // console.log('loaded:' + loaded)
                                dfd.notify(percent);
                                if (percent >= 100) {
                                    console.log(layerName + '加载完毕~');
                                    createAeBitmaps(layerName, start, end);
                                    dfd.resolve(layerName);
                                } else if (threadLoaded == thread) {
                                    console.log('thread loaded~')
                                    loadImg(loadArr);
                                }
                            }
                        }
                    }

                    function createAeBitmaps(layerName, start, end) {
                        if (!$scope.aeBitmaps[layerName]) $scope.aeBitmaps[layerName] = [];
                        var layerMode = {
                            'easel': function () {
                                //渲染层初始化
                                for (var i = start; i <= end; i++) {
                                    var bitmap = new createjs.Bitmap($scope.bitmaps[layerName][i]);
                                    $scope.aeBitmaps[layerName][i] = bitmap;
                                }
                            },
                            'pixi': function () {
                                //渲染层初始化
                                for (var i = start; i <= end; i++) {
                                    var bitmap = new PIXI.Sprite.fromImage($scope.bitmaps[layerName][i]);
                                    $scope.aeBitmaps[layerName][i] = bitmap;
                                }
                            },
                            'img': function () {
                                //渲染层初始化
                                for (var i = start; i <= end; i++) {
                                    var bitmap = new Image();
                                    bitmap.src = $scope.bitmaps[layerName][i];
                                    $scope.aeBitmaps[layerName][i] = bitmap;
                                }
                            }
                        }
                        return layerMode[$scope.aeLayer[layerName].engine]();
                    }

                    return dfd.promise();
                }

                //ae层初始化
                function createAeLayer(layerName, engine, preload) {
                    var layerMode = {
                        'easel': function () {
                            //序列初始化
                            if (preload) {
                                $scope.aeBitmaps[layerName] = [];
                                for (var i = 0; i < $scope.bitmaps[layerName].length; i++) {
                                    var bitmap = new createjs.Bitmap($scope.bitmaps[layerName][i]);
                                    $scope.aeBitmaps[layerName].push(bitmap);
                                }
                            }
                            //渲染层初始化
                            var aeLayer = new createjs.Container();
                            aeLayer.engine = 'easel';
                            return aeLayer;
                        },
                        'pixi': function () {
                            //序列初始化
                            if (preload) {
                                $scope.aeBitmaps[layerName] = [];
                                for (var i = 0; i < $scope.bitmaps[layerName].length; i++) {
                                    var bitmap = new PIXI.Sprite.fromImage($scope.bitmaps[layerName][i]);
                                    $scope.aeBitmaps[layerName].push(bitmap);
                                }
                            }
                            //渲染层初始化
                            var aeLayer = new PIXI.Container();
                            aeLayer.engine = 'pixi';
                            return aeLayer;
                        },
                        'img': function () {
                            ///序列初始化
                            if (preload) {
                                $scope.aeBitmaps[layerName] = [];
                                for (var i = 0; i < $scope.bitmaps[layerName].length; i++) {
                                    var bitmap = new Image();
                                    bitmap.src = $scope.bitmaps[layerName][i]
                                    $scope.aeBitmaps[layerName].push(bitmap);
                                }
                            }
                            //渲染层初始化
                            var aeLayer = new Image();
                            aeLayer.engine = 'img';
                            aeLayer.style.position = 'absolute';
                            aeLayer.style.left = 0;
                            aeLayer.style.top = 0;
                            aeLayer.style.width = '100%';
                            aeLayer.className = 'SLeasy_ae';
                            aeLayer.removeAllChildren = function () {
                                aeLayer.src = '';
                            }
                            return aeLayer;
                        }
                    }
                    return layerMode[engine || 'img']();
                }

                //帧刷新 -------------------------------------------------------
                SLeasy.flashAeLayer = function (aeLayer) {
                    //根据当前序列容器的frame值添加相应索引值的位图对象
                    var frameIndex = Math.round(aeLayer.frame);
                    if (frameIndex < aeLayer.start) {
                        frameIndex = aeLayer.frame = aeLayer.start;
                    } else if (frameIndex > aeLayer.end) {
                        frameIndex = aeLayer.frame = aeLayer.end;
                    }
                    var imgUrl = $scope.bitmaps[aeLayer.name][frameIndex];

                    var engineMode = {
                        'easel': function () {
                            aeLayer.removeAllChildren();
                            var aeFrame = $scope.aeBitmaps[aeLayer.name][frameIndex];
                            aeLayer.addChild(aeFrame);
                            aeLayer.parent.update();
                        },
                        'pixi': function () {
                            aeLayer.removeChildren();
                            var aeFrame = $scope.aeBitmaps[aeLayer.name][frameIndex];
                            aeLayer.addChild(aeFrame);
                            var stage = aeLayer.parent;
                            var app = stage.parent;
                            app.renderer.render(stage);
                        },
                        'img': function () {
                            aeLayer.src = $scope.aeBitmaps[aeLayer.name][frameIndex].src;
                        }
                    }
                    return engineMode[aeLayer.engine || 'img']();
                }

                //播放渲染层 -----------------------------------------------------
                SLeasy.playAeLayer = function (aeOpt) {
                    //单个tween
                    if (!aeOpt.length) {
                        var aeLayer = aeOpt.aeLayer || $scope.aeLayer[aeOpt.name];
                        TweenMax.killTweensOf(aeLayer);//清除当前层所有tween
                        var startFrame = (typeof aeOpt.start != 'undefined') ? aeOpt.start : aeLayer.frame;
                        var frameCount = Math.abs(aeOpt.end - startFrame),
                            time = frameCount / (aeOpt.fps || 25);
                        var aeTl = $scope.aeTimeLine[aeOpt.timeline] = $scope.aeTimeLine[aeOpt.timeline] || new TimelineMax();
                        aeLayer.preFrame = startFrame;
                        var tweenData = {
                            alpha: 1,
                            autoAlpha: 1,
                            roundProps: "frame",
                            frame: aeOpt.end,
                            ease: SteppedEase.config(frameCount),
                            repeat: aeOpt.repeat,
                            yoyo: !!aeOpt.yoyo,
                            onStart: aeOpt.onStart,
                            onUpdate: function () {
                                // if (aeLayer.preFrame != aeLayer.frame) {
                                //     console.info(aeLayer.frame);
                                //     SLeasy.flashAeLayer(aeLayer);
                                //     aeLayer.preFrame = aeLayer.frame;
                                // }
                                SLeasy.flashAeLayer(aeLayer);
                                aeOpt.onUpdate && aeOpt.onUpdate(aeLayer.frame);
                            },
                            onComplete: function () {
                                aeOpt.onComplete && aeOpt.onComplete();
                            },
                        };

                        if (typeof aeOpt.start != 'undefined') {
                            aeTl.fromTo(aeLayer, time, {
                                frame: aeOpt.start,
                                autoAlpha: 1,
                                alpha: 1
                            }, tweenData, '+=' + (aeOpt.offsetTime || 0));
                        } else {
                            aeTl.set(aeLayer, {autoAlpha: 1, alpha: 1});
                            aeTl.to(aeLayer, time, tweenData, '+=' + (aeOpt.offsetTime || 0));
                        }
                        //多个tween
                    } else if (aeOpt.length && aeOpt.length > 0) {
                        var aeTl = $scope.aeTimeLine[aeOpt[0].timeline] = $scope.aeTimeLine[aeOpt[0].timeline] || new TimelineMax();
                        //清除当前层所有tween
                        for (var i = 0; i < aeOpt.length; i++) {
                            var aeLayer = aeOpt[i].aeLayer || $scope.aeLayer[aeOpt[i].name];
                            TweenMax.killTweensOf(aeLayer);//清除当前层所有tween
                        }
                        //add所有tween
                        for (var i = 0; i < aeOpt.length; i++) {
                            var $aeOpt = aeOpt[i];
                            var aeLayer = $aeOpt.aeLayer || $scope.aeLayer[$aeOpt.name];
                            var startFrame = (typeof $aeOpt.start != 'undefined') ? $aeOpt.start : aeLayer.frame;
                            var frameCount = Math.abs($aeOpt.end - startFrame),
                                time = frameCount / ($aeOpt.fps || 25);
                            aeLayer.preFrame = startFrame;
                            var tweenData = {
                                alpha: 1,
                                autoAlpha: 1,
                                roundProps: "frame",
                                frame: $aeOpt.end,
                                ease: SteppedEase.config(frameCount),
                                repeat: $aeOpt.repeat,
                                yoyo: !!$aeOpt.yoyo,
                                onStart: $aeOpt.onStart,
                                onUpdate: (function (n) {
                                    return function () {
                                        var $aeOpt = aeOpt[n];
                                        var aeLayer = $aeOpt.aeLayer || $scope.aeLayer[$aeOpt.name];
                                        SLeasy.flashAeLayer(aeLayer);
                                        $aeOpt.onUpdate && $aeOpt.onUpdate(aeLayer.frame);
                                    }
                                })(i),
                                onComplete: (function (n) {
                                    return function () {
                                        var $aeOpt = aeOpt[n];
                                        var aeLayer = $aeOpt.aeLayer || $scope.aeLayer[$aeOpt.name];
                                        $aeOpt.onComplete && $aeOpt.onComplete();
                                    }
                                })(i),
                            };
                            // aeTl.eventCallback('onComplete', function () {
                            //     aeLayer.parent._updating = false;
                            // })
                            if (typeof $aeOpt.start != 'undefined') {
                                aeTl.add(TweenMax.fromTo(aeLayer, time, {
                                    immediateRender: false,//防止立即刷新frame值
                                    frame: $aeOpt.start,
                                    autoAlpha: 1,
                                    alpha: 1
                                }, tweenData, '+=' + ($aeOpt.offsetTime || 0)));
                            } else {
                                aeTl.set(aeLayer, {autoAlpha: 1, alpha: 1});
                                aeTl.add(TweenMax.to(aeLayer, time, tweenData, '+=' + ($aeOpt.offsetTime || 0)));
                            }
                        }
                    }
                    return SLeasy;
                }

                //暂停渲染层 -----------------------------------------------------
                SLeasy.pauseAeLayer = function (name) {
                    if (name && name != 'all') {
                        $(TweenMax.getTweensOf(SLeasy.$scope.aeLayer[name])).each(function (index, tween) {
                            tween.pause();
                        })
                    } else {
                        for (n in $scope.aeLayer) {
                            $(TweenMax.getTweensOf($scope.aeLayer[n])).each(function (index, tween) {
                                tween.pause();
                            })
                        }
                    }
                    return SLeasy;
                }

                //恢复播放渲染层 -----------------------------------------------------
                SLeasy.resumeAeLayer = function (name) {
                    if (name && name != 'all') {
                        $(TweenMax.getTweensOf(SLeasy.$scope.aeLayer[name])).each(function (index, tween) {
                            tween.resume();
                        })
                    } else {
                        for (n in $scope.aeLayer) {
                            $(TweenMax.getTweensOf($scope.aeLayer[n])).each(function (index, tween) {
                                tween.resume();
                            })
                        }
                    }
                    return SLeasy;
                }

                //停止渲染层 -----------------------------------------------------
                SLeasy.stopAeLayer = function (name, clear) {
                    if (name && name != 'all') {
                        T.killTweensOf($scope.aeLayer[name]);
                        if (clear) {
                            $scope.aeLayer[name].removeAllChildren();
                            $scope.aeLayer[name].parent && $scope.aeLayer[name].parent.update();
                        }
                    } else {
                        for (n in $scope.aeLayer) {
                            T.killTweensOf($scope.aeLayer[n]);
                            if (clear) {
                                $scope.aeLayer[n].removeAllChildren()
                                $scope.aeLayer[n].parent && $scope.aeLayer[n].parent.update();
                            }
                        }
                    }
                    return SLeasy;
                }

                //gotoAndPlay渲染层 -----------------------------------------------------
                SLeasy.gotoAeLayer = function (name, frame) {
                    var aeLayer = $scope.aeLayer[name];
                    TweenMax.killTweensOf(aeLayer);//清除当前层所有tween
                    TweenMax.set(aeLayer, {
                        frame: frame, onComplete: function () {
                            SLeasy.flashAeLayer(aeLayer);
                        }
                    });
                    return SLeasy;
                }

                var config = {
                    stage: '_stage_',
                    width: 640,
                    height: 1136,
                    fps: 25,
                    repeat: 0,
                    layer: [],
                    autoPlay: true,
                    onInit: function () {
                    }
                }
                $.extend(config, opt.ae);

                //内置ae插件初始化函数 -----------------------------------------------------
                function aeMotion(aeOpt) {
                    //AE
                    var stage = $scope.aeStage[aeOpt.stage] = createStage(aeOpt);
                    stage.sliderIndex = aeOpt.sliderIndex;
                    stage.name = aeOpt.stage;

                    var engine = aeOpt.engine;

                    for (var i = 0; i < aeOpt.layer.length; i++) {
                        var layerArg = aeOpt.layer[i],
                            layerName = layerArg[0],
                            addAt = 'auto',
                            prefix = layerArg[1],
                            start = layerArg[2],
                            end = layerArg[3],
                            suffix = layerArg[4],
                            bit = layerArg[5],
                            preload = layerArg[6] === false ? false : true;

                        $scope.aeLayer[layerName] = SLeasy.addAeLayer(stage, layerName, addAt, prefix, start, end, suffix, bit, engine, preload);

                        var frame = end - start,
                            time = frame / (aeOpt.fps || 25);

                        $scope.aeLayer[layerName].time = time;
                        $scope.aeLayer[layerName].autoPlay = aeOpt.autoPlay;
                        $scope.aeLayer[layerName].tweenData = {
                            frame: frame,
                            roundProps: "frame",
                            ease: SteppedEase.config(frame),
                            repeat: aeOpt.repeat,
                            yoyo: !!aeOpt.yoyo,
                            onStart: aeOpt.onStart,
                            onUpdate: function () {
                                SLeasy.flashAeLayer($scope.aeLayer[layerName]);
                                aeOpt.onUpdate && aeOpt.onUpdate($scope.aeLayer[layerName].frame);
                            },
                            onComplete: aeOpt.onComplete
                        }
                    }
                    //ticker
                    // TweenMax.ticker.addEventListener("tick", stage.update, stage);
                    console.log(stage);
                    return stage;

                }

                //舞台初始化
                function createStage(aeOpt) {
                    var stageMode = {
                        'easel': function () {
                            return new createjs.Stage(aeOpt.node);
                        },
                        'pixi': function () {
                            var app = new PIXI.Application({
                                view: $('#' + aeOpt.node)[0],
                                forceCanvas: true,
                                width: aeOpt.width,
                                height: aeOpt.width
                            })
                            app.ticker.stop();
                            app.stage.parent = app;
                            return app.stage;
                        },
                        'img': function () {
                            var stage = $('#' + aeOpt.node).parent();
                            stage.html('');
                            stage.addChild = function (child) {
                                stage.append(child);
                            }
                            stage.addChildAt = function (child, zIndex) {
                                stage.append(child);
                                $(child).css('zIndex', zIndex);
                            }
                            stage.css({
                                'width': aeOpt.width * $scope.viewScale,
                                'height': aeOpt.height * $scope.viewScale
                            })
                            return stage;
                        }
                    }
                    return stageMode[aeOpt.engine || 'img']();
                }

                // -----------------------------------------------------
                //把ae内置插件,初始化函数以及挂载点id(node)以及插件初始化回调注入到$scope.pluginList,在SLeasy.domReady后统一初始化
                config.node = config.stage;
                config.sliderIndex = sliderIndex;//并入当前ae插件所在的幻灯索引值
                $scope.pluginList.push([aeMotion, config, config.onInit]);

                // console.info(config);
                return '<div\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_canvas SLeasy_' + (subName[opt.type] || opt.type) + '"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
				<canvas id="' + config.stage + '" class="SLeasy_canvas SLeasy_ae" width="' + config.width + '" height="' + config.height + '" style="width:' + config.width * $scope.viewScale + 'px;height:' + config.height * $scope.viewScale + 'px"></canvas>\
				</div>';
                // -----------------------------------------------------
            },
            //sprite ----------------------------------------------------
            "sprite": function (opt) {
                var spriteHtml = {
                    'img': function () {
                        return '<div\
				        id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				        class="' + (opt.class || '') + ' SLeasy_sprite SLeasy_' + (subName[opt.type] || opt.type) + ' toDiv"\
				        style="-webkit-overflow-scrolling:touch;position:' + $config.positionMode + ';display:' + (display || (opt.set && opt.set.display) || 'none') + ';width:' + (opt.sprite[1] - (opt.sprite[3] || 0)) * $scope.viewScale + 'px;height:' + (opt.sprite[2] - (opt.sprite[3] || 0)) * $scope.viewScale + 'px;overflow:hidden">\
				<div class="SLeasy_spriteSheet"><img src="' + SLeasy.path($config.host, opt.sprite[0]) + '"></div>\
				        </div>';
                    }
                }

                //playSprite
                SLeasy.playSprite = function (selector, opt) {
                    var $sprite = $(selector)[0],
                        $spriteImg = $(selector).find('.SLeasy_spriteSheet')[0],
                        spriteDetailStyle = window.getComputedStyle($(selector)[0]),
                        spriteImgDetailStyle = window.getComputedStyle($spriteImg);

                    TweenMax.killTweensOf($spriteImg);
                    $sprite.w = $sprite.w || parseFloat(spriteDetailStyle.width);
                    $sprite.h = $sprite.h || parseFloat(spriteDetailStyle.height);

                    var j = Math.round(parseFloat(spriteImgDetailStyle.width) / $sprite.w),
                        k = Math.round(parseFloat(spriteImgDetailStyle.height) / $sprite.h);
                    var frameCount = Math.abs((opt && opt.end ? opt.end : j * k) - (opt && opt.start ? opt.start : 0));
                    var duration = frameCount / (opt && opt.fps || 25);

                    console.log(duration + '===' + $sprite.w + '/' + $sprite.h + '===' + j + '/' + k + '===' + frameCount);

                    $spriteImg.frame = 0;
                    //设置sprite padding
                    if (paddingOrCrop) {
                        $(selector).css({
                            width: $sprite.w - ($scope.viewScale * (paddingOrCrop || 0)),
                            height: $sprite.h - ($scope.viewScale * (paddingOrCrop || 0)),
                        });
                    }
                    TweenMax.fromTo($spriteImg, duration,
                        {
                            frame: (opt && opt.start) || 0
                        },
                        {
                            ease: SteppedEase.config(frameCount),
                            roundProps: "frame",
                            frame: frameCount,
                            repeat: opt && opt.repeat,
                            onUpdate: function () {
                                TweenMax.set($spriteImg, {
                                    x: -$sprite.w * ($spriteImg.frame % j),
                                    force3D: true
                                });
                                TweenMax.set($spriteImg, {
                                    y: -$sprite.h * Math.floor($spriteImg.frame / j),
                                    force3D: true
                                });
                                opt && opt.onUpdate && opt.onUpdate();
                                // console.log($spriteImg.frame + '::' + (-$sprite.w * ($spriteImg.frame % j)) + '/' + (-$sprite.h * Math.floor($spriteImg.frame / j)));

                            },
                            onStart: (opt && opt.onStart) || null,
                            onComplete: (opt && opt.onComplete) || null
                        });
                    return SLeasy;
                }

                //gotoSprite
                SLeasy.gotoSprite = function (selector, frame, motionTime, paddingOrCrop, scaleX, scaleY, onComplete) {
                    var $sprite = $(selector)[0],
                        $spriteImg = $(selector).find('.SLeasy_spriteSheet')[0],
                        spriteDetailStyle = window.getComputedStyle($(selector)[0]),
                        spriteImgDetailStyle = window.getComputedStyle($spriteImg);

                    var sx = scaleX || 1,
                        sy = scaleY || 1;

                    TweenMax.killTweensOf($spriteImg);
                    $sprite.w = ($sprite.w || parseFloat(spriteDetailStyle.width)) * sx;
                    $sprite.h = ($sprite.h || parseFloat(spriteDetailStyle.height)) * sy;

                    var j = Math.round(parseFloat(spriteImgDetailStyle.width) / $sprite.w),
                        k = Math.round(parseFloat(spriteImgDetailStyle.height) / $sprite.h);

                    if ($spriteImg.frame === undefined) $spriteImg.frame = 0;
                    //设置sprite padding
                    if (paddingOrCrop) {
                        $(selector).css({
                            width: $sprite.w - ($scope.viewScale * (paddingOrCrop || 0)),
                            height: $sprite.h - ($scope.viewScale * (paddingOrCrop || 0)),
                        });
                        // console.warn($sprite.w - ($scope.viewScale * (paddingOrCrop || 0)));
                        // console.warn($sprite.h - ($scope.viewScale * (paddingOrCrop || 0)));
                    }
                    if (motionTime) {
                        TweenMax.to($spriteImg, motionTime, {
                            x: -$sprite.w * ((frame ? frame : $spriteImg.frame) % j),
                            y: -$sprite.h * Math.floor((frame ? frame : $spriteImg.frame) / j),
                            force3D: true,
                            onComplete: onComplete
                        });
                    } else {
                        TweenMax.set($spriteImg, {
                            x: -$sprite.w * ((frame ? frame : $spriteImg.frame) % j),
                            y: -$sprite.h * Math.floor((frame ? frame : $spriteImg.frame) / j),
                            onComplete: onComplete
                        });
                    }
                    // console.warn(-$sprite.w * ((frame ? frame : $spriteImg.frame) % j));
                    // console.warn(-$sprite.h * Math.floor((frame ? frame : $spriteImg.frame) / j));
                    // console.warn(-$sprite.h);
                    // console.warn($spriteImg.frame);
                    // console.warn(j);
                    // console.log(spriteImgDetailStyle.width + '/' + $sprite.w + '=' + j);
                    // console.log((frame || $spriteImg.frame) + '::' + $sprite.w * ((frame ? frame : $spriteImg.frame) % j) + '/' + $sprite.h * Math.floor((frame ? frame : $spriteImg.frame) / j));
                    if (frame === undefined) {
                        $spriteImg.frame++
                        if ($spriteImg.frame >= j * k) {
                            $spriteImg.frame = 0;
                        }
                    }
                    return SLeasy;
                }

                //loopSprite
                SLeasy.loopSprite = function (selector, start, end, motionTime, delay, paddingOrCrop, scaleX, scaleY) {
                    var $sprite = $(selector)[0];
                    $sprite.loop = true;
                    $sprite.frame = start;
                    SLeasy.gotoSprite(selector, $sprite.frame, 0, paddingOrCrop, scaleX, scaleY);
                    loop();

                    function loop() {
                        setTimeout(function () {
                            if (end > start) {
                                $sprite.frame++;
                            } else {
                                $sprite.frame--;
                            }
                            if ($sprite.frame == end) {
                                var onComplete = function () {
                                    SLeasy.gotoSprite(selector, start, 0, paddingOrCrop);
                                }
                                SLeasy.gotoSprite(selector, $sprite.frame, motionTime, paddingOrCrop, 1, 1, onComplete);
                                $sprite.frame = start;
                            } else {
                                SLeasy.gotoSprite(selector, $sprite.frame, motionTime, paddingOrCrop);
                            }
                            if ($sprite.loop) loop();
                        }, delay * 1000);
                    }

                    return SLeasy;
                }

                //noopSprite
                SLeasy.noopSprite = function (selector) {
                    var $sprite = $(selector)[0];
                    $sprite.loop = false;
                    return SLeasy;
                }

                //spriteFrame
                SLeasy.spriteFrame = function (selector, frame) {
                    var $sprite = $(selector)[0],
                        $spriteImg = $(selector).find('.SLeasy_spriteSheet')[0];
                    if (frame === undefined) {
                        return $spriteImg.frame;
                    } else {
                        $spriteImg.frame = frame;
                        return SLeasy;
                    }
                }

                return spriteHtml[opt.engine || 'img']();
            }
        }


        //sub element html
        var html = '';

        //subMotion element
        for (var i = 0; i < subArr.length; i++) {
            //console.log(index);
            var subMotion = subArr[i];
            $.extend(subMotion, {index: (sliderIndex || 0) + '_' + i});//合并slider初始化索引及当前子元素初始化索引，以便生成唯一id

            //subMotion label hash
            if (typeof subMotion.label != 'undefined') {
                $scope.labelHash[subMotion.label] = '#SLeasy_' + (subName[type] || type) + '_' + subMotion.index;
            }

            //遍历子元素生成策略并执行
            $.each(subElement, function (index, value) {
                if (subMotion[index]) {
                    var row = subElement[index]($.extend(subMotion, {type: type, sliderIndex: sliderIndex}));//并入子动画所属页面的类型值
                    html += row;
                    return;
                }
            });


            if (subMotion['event']) {
                var info = {
                    id: 'SLeasy_' + (subName[type] || type) + '_' + subMotion.index,
                    event: subMotion.event,
                    onEvent: subMotion.onEvent,
                }
                $scope.eventArr.push(info);//需绑定事件的子元素相关信息入栈
            }
            if (subMotion['on']) {
                for (event in subMotion['on']) {
                    var info = {
                        id: 'SLeasy_' + (subName[type] || type) + '_' + subMotion.index,
                        event: event,
                        onEvent: subMotion['on'][event],
                    }
                    $scope.eventArr.push(info);//需绑定事件的子元素相关信息入栈
                }
            }

        }

        return html
    }

})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    TweenMax || TweenLite
);