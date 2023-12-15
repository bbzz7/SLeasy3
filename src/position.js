// SLeasy3-fix
;(function (SLeasy) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();


    //子元素视口缩放动画坐标变换,参数为需要变换的slider/detail配置对象数组
    SLeasy.fixPosition = function (opt) {
        //console.log(opt)
        //背景对齐模式导致的子元素y轴偏移策略
        var yOffset = $scope.yOffset = {
                "top": $config.alignOffset,
                "center": ($scope.fixHeight - $config.height * $scope.viewScale) / 2 + $config.alignOffset,
                "bottom": $scope.fixHeight - $config.height * $scope.viewScale + $config.alignOffset
            },
            xOffset = $scope.xOffset = {
                "top": $config.alignOffset * $scope.viewScale,
                "center": (($scope.maxWidth || $scope.fixWidth || $config.viewport) - $config.width * $scope.viewScale) / 2 + $config.alignOffset * $scope.viewScale,
                "bottom": ($scope.maxWidth || $scope.fixWidth || $config.viewport) - $config.width * $scope.viewScale + $config.alignOffset * $scope.viewScale
            },
            sliders = opt || $config.sliders;

        $scope.yOffsetOrigin = {
            "top": $config.alignOffset,
            "center": ($scope.fixHeight / $scope.viewScale - $config.height) / 2 + $config.alignOffset,
            "bottom": $scope.fixHeight / $scope.viewScale - $config.height + $config.alignOffset
        };
        $scope.xOffsetOrigin = {
            "top": $config.alignOffset,
            "center": (($scope.fixWidth || $config.viewport) / $scope.viewScale - $config.width) / 2 + $config.alignOffset,
            "bottom": ($scope.fixWidth || $config.viewport) / $scope.viewScale - $config.width + $config.alignOffset
        };

        //中心原点坐标
        $scope.originX = $config.width / 2;
        $scope.originY = $config.height / 2;

        function fixSubMotionProps(subMotions,recursiveMode) {
            for (var j = 0; j < (subMotions && subMotions.length || 0); j++) {
                //处理shadownBt的情况
                if (subMotions[j].shadownBt) {
                    var bt = subMotions[j].shadownBt;
                    subMotions[j].set = $.extend((typeof bt[3] == 'number' ? {
                        x: bt[2],
                        y: bt[3]
                    } : {x: bt[2]}), subMotions[j].set);
                }

                var subIn = subMotions[j].in || {},
                    subShow = subMotions[j].show || {},
                    subSet = subMotions[j].set || {},
                    subTo = subMotions[j].to || {};

                //fix -------------------------------------------------------------------
                if (sliders[i].scroll) {
                    subIn.isScroll = subShow.isScroll = subSet.isScroll = subTo.isScroll = true;
                }
                subMotions[j].in = SLeasy.fixProps(subIn);
                subMotions[j].show = SLeasy.fixProps(subShow);
                subMotions[j].set = SLeasy.fixProps(subSet);
                subMotions[j].to = SLeasy.fixProps(subTo);

                //scrollMagic模式下除首屏外，其他不修正 -------------------------------------
                if ((!$config.scrollMagicMode || i == 0) && $scope.rotateMode != 'auto' && !recursiveMode) {
                    //根据幻灯对齐方式参数，进行y轴自适应修正
                    var alignMode = subMotions[j].alignMode || sliders[i].alignMode || $config.alignMode;
                    //y
                    if (subIn.y >= 0 || subIn.y <= 0) subIn.y += yOffset[alignMode];
                    if (subShow.y >= 0 || subShow.y <= 0) subShow.y += yOffset[alignMode];
                    if (subSet.y >= 0 || subSet.y <= 0) subSet.y += yOffset[alignMode];
                    if (subTo.y >= 0 || subTo.y <= 0) subTo.y += yOffset[alignMode];
                    //x
                    if (subIn.x >= 0 || subIn.x <= 0) subIn.x += xOffset[alignMode];
                    if (subShow.x >= 0 || subShow.x <= 0) subShow.x += xOffset[alignMode];
                    if (subSet.x >= 0 || subSet.x <= 0) subSet.x += xOffset[alignMode];
                    if (subTo.x >= 0 || subTo.x <= 0) subTo.x += xOffset[alignMode];
                }

                //子元素递归
                if (subMotions[j].subMotion && subMotions[j].subMotion.length) {
                    fixSubMotionProps(subMotions[j].subMotion,true)
                }
            }
        }

        for (var i = 0; i < sliders.length; i++) {
            fixSubMotionProps(sliders[i].subMotion);//当前幻灯子动画数组
        }
    }

    //属性缩放变换
    SLeasy.fixProps = function fixProps(transObj, yOffset, xOffset) {
        //原点对齐坐标转换
        if ($scope.rotateMode == 'auto' && !transObj.isScroll) {
            if (!$.isEmptyObject(transObj)) {
                if (typeof transObj.x == 'number') {
                    transObj = $.extend({left: '50%'}, transObj);
                    transObj.x -= $scope.originX;
                }
                if (typeof transObj.y == 'number') {
                    transObj = $.extend({top: '50%'}, transObj);
                    transObj.y -= $scope.originY;
                }
            }
        } else if (transObj.isScroll) delete transObj.isScroll;

        var addPX = {//需要添加px单位的属性
            'lineHeight': true,
            'backgroundPositionX': true,
            'backgroundPositionY': true,
            'letterSpacing': true
        }
        // console.log(transObj);
        for (var i = 0; i < $scope.fixPropsArr.length; i++) {
            var props = transObj[$scope.fixPropsArr[i]],
                postfix;
            if (props) {
                //func
                if ($.isFunction(props)) {
                    // transObj[$scope.fixPropsArr[i]] = props() * $scope.viewScale;
                    transObj[$scope.fixPropsArr[i]] = props;
                    continue;
                }
                if (typeof props == 'string') {
                    //clip
                    if (props.indexOf('rect') != -1) {
                        props = props.split('(')[1].replace(')', '').split(' ');
                        for (var n = 0; n < props.length; n++) {
                            props[n] = parseInt(props[n]) * $scope.viewScale + 'px';
                        }
                        transObj[$scope.fixPropsArr[i]] = 'rect(' + props.join(' ') + ')';
                        continue;
                    }
                    //px
                    if (props.indexOf('rect') == -1 && props.lastIndexOf('px') != -1) {
                        props = parseInt(props);//去掉px后缀
                        postfix = addPX[$scope.fixPropsArr[i]] ? 'px' : 0;//确定后缀值
                        transObj[$scope.fixPropsArr[i]] = props * $scope.viewScale + postfix;//按照viewScale等比缩放
                        continue;
                    }
                    //%
                    if (props.lastIndexOf('%') != -1) {
                        props = parseInt(props);//去掉%后缀
                        postfix = '%';//确定后缀值
                        transObj[$scope.fixPropsArr[i]] = props + postfix;//百分比不缩放
                        continue;
                    }
                    //+=
                    if (props.lastIndexOf('+=') != -1) {
                        props = parseInt(props.replace('+=', ''));//去掉%后缀
                        postfix = '+=';//确定后缀值
                        transObj[$scope.fixPropsArr[i]] = postfix + props * $scope.viewScale;//按照viewScale等比缩放
                        continue;
                    }
                    //-=
                    if (props.lastIndexOf('-=') != -1) {
                        props = parseInt(props.replace('-=', ''));//去掉%后缀
                        postfix = '-=';//确定后缀值
                        transObj[$scope.fixPropsArr[i]] = postfix + props * $scope.viewScale;//按照viewScale等比缩放
                        console.log(transObj[$scope.fixPropsArr[i]])
                        continue;
                    }
                } else {
                    props = parseInt(props);
                    postfix = addPX[$scope.fixPropsArr[i]] ? 'px' : 0;//确定后缀值
                    transObj[$scope.fixPropsArr[i]] = props * $scope.viewScale + postfix;//按照viewScale等比缩放
                }
            }
        }
        //yOffset
        var alignMode = transObj.alignMode || $config.alignMode;
        if (yOffset && (typeof transObj.y != 'undefined' && !$.isFunction(transObj.y)) && (typeof transObj.y == 'number' || transObj.y.lastIndexOf('px') != -1)) {
            transObj.y = parseFloat(transObj.y) + $scope.yOffset[alignMode];
        }
        if (xOffset && (typeof transObj.x != 'undefined' && !$.isFunction(transObj.x)) && (typeof transObj.x == 'number' || transObj.x.lastIndexOf('px') != -1)) {
            transObj.x = parseFloat(transObj.x) + ($scope.xOffset[alignMode] || 0);
        }
        return transObj;
    }

    //添加/获取缩放属性
    SLeasy.fixPropsArr = function (arr) {
        if (arr) {
            for (var i = 0; i < arr.length; i++) {
                if ($scope.fixPropsArr.join('').indexOf(arr[i]) == -1) $scope.fixPropsArr.push(arr[i]);//如果新添加的属性不存在,则添加
            }
        } else {
            return $scope.fixPropsArr;
        }
    }

})(
    window.SLeasy = window.SLeasy || {}
);