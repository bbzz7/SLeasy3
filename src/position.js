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
                "left": $config.alignOffset,
                "center": (($scope.fixWidth || $config.viewport) - $config.width * $scope.viewScale) / 2 + $config.alignOffset,
                "right": ($scope.fixWidth || $config.viewport) - $config.width * $scope.viewScale + $config.alignOffset
            },
            sliders = opt || $config.sliders;

        for (var i = 0; i < sliders.length; i++) {
            var subMotions = sliders[i].subMotion;//当前幻灯子动画数组
            for (var j = 0; j < (subMotions && subMotions.length || 0); j++) {
                //console.log(subMotions[j]);
                if (subMotions[j].shadownBt) {//处理shadownBt的情况
                    var bt = subMotions[j].shadownBt;
                    //subMotions[j].in={x:bt[2],y:bt[3]};
                    //subMotions[j].show={x:bt[2],y:bt[3]};
                    subMotions[j].set = $.extend((typeof bt[3] == 'number' ? {
                        x: bt[2],
                        y: bt[3]
                    } : {x: bt[2]}), subMotions[j].set);
                }

                var subIn = subMotions[j].in || {},
                    subShow = subMotions[j].show || {},
                    subSet = subMotions[j].set || {},
                    subTo = subMotions[j].to || {};

                SLeasy.fixProps(subIn);
                SLeasy.fixProps(subShow);
                SLeasy.fixProps(subSet);
                SLeasy.fixProps(subTo);

                //scrollMagic模式下除首屏外，其他不修正
                if (!$config.scrollMagicMode || i == 0) {
                    //根据幻灯对齐方式参数，进行y轴自适应修正
                    var alignMode = subMotions[j].alignMode || sliders[i].alignMode || $config.alignMode;
                    //y
                    if (subIn.y || subIn.y === 0) subIn.y += yOffset[alignMode];
                    if (subShow.y || subShow.y === 0) subShow.y += yOffset[alignMode];
                    if (subSet.y || subSet.y === 0) subSet.y += yOffset[alignMode];
                    if (subTo.y || subTo.y === 0) subTo.y += yOffset[alignMode];
                    //x
                    if (subIn.x || subIn.x === 0) subIn.x += xOffset[alignMode];
                    if (subShow.x || subShow.x === 0) subShow.x += xOffset[alignMode];
                    if (subSet.x || subSet.x === 0) subSet.x += xOffset[alignMode];
                    if (subTo.x || subTo.x === 0) subTo.x += xOffset[alignMode];
                }
            }
        }
    }

    //属性缩放变换
    SLeasy.fixProps = function fixProps(transObj, yOffset, xOffset) {
        var addPX = {//需要添加px单位的属性
            'lineHeight': true,
            'backgroundPositionX': true,
            'backgroundPositionY': true,
            'letterSpacing': true
        }
        //console.log(transObj);
        for (var i = 0; i < $scope.fixPropsArr.length; i++) {
            var props = transObj[$scope.fixPropsArr[i]],
                postfix;
            if (props) {
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
                        transObj[$scope.fixPropsArr[i]] = props + postfix;//按照viewScale等比缩放
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
        var alignMode = $config.alignMode;
        if (yOffset && (typeof transObj.y != 'undefined')) transObj.y = parseFloat(transObj.y) + $scope.yOffset[alignMode];
        if (xOffset && (typeof transObj.x != 'undefined')) transObj.x = parseFloat(transObj.x) + ($scope.xOffset[alignMode] || 0);
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