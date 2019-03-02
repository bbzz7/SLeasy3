// SLeasy3-imgToDiv
;(function (SLeasy, $) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();

    SLeasy.imgToDiv = function ($myDom, dfd) {
        var $dom = $myDom || $scope.sliderBox;
        var transformTotal = $myDom ? $myDom.find('.toDiv img').length : $scope.sliderBox.find('.toDiv img').length,
            transformedCount = 0;

        //no any subImg
        if($.isEmptyObject($config.loading) ? (transformTotal==0) : ($scope.loadingReady && transformTotal==0)){
            setTimeout(function () {
                console.log('SLeasy初始化完毕!~~~~~~~~~~~~~~~~~~~~')
                dfd.resolve();//初始化完毕
            },0)
        }

        //to div
        $dom.find(".toDiv img").each(function (index, element) {//获取所有图片宽度
            $(this).load(function (e) {
                var w = $(this)[0].width,
                    h = $(this)[0].height,
                    style = {
                        'backgroundImage': 'url(' + $(this).attr("src") + ')',
                        'backgroundRepeat': 'no-repeat',
                        'backgroundSize': w * $scope.viewScale + 'px',
                        'width': w * $scope.viewScale + 'px',
                        'height': h * $scope.viewScale + 'px'
                    }

                $(this).parent().css(style);
                $(this).remove();
                transformedCount++;
                // console.log('============'+w+':'+h+'==============');
                if ($scope.initReady && transformedCount == transformTotal) {
                    console.log('SLeasy初始化完毕!~~~~~~~~~~~~~~~~~~~~')
                    dfd.resolve();//初始化完毕
                }
            });
        });
        //no to div
        $dom.find(".noDiv img").each(function (index, element) {//获取所有图片宽度
            $(this).one('load', function (e) {
                var w = $(this)[0].width,
                    h = $(this)[0].height,
                    style = {
                        'width': w * $scope.viewScale + 'px',
                        'height': h * $scope.viewScale + 'px'
                    }
                // console.log('============'+w+':'+h+'==============');
                $(this).css(style);
            });
        });
    }
})(
    window.SLeasy = window.SLeasy || {},
    jQuery
);