// SLeasy3-imgToDiv
;(function (SLeasy, $) {
    var $config = SLeasy.config(),
        $scope  = SLeasy.scope();

    SLeasy.imgToDiv = function ($myDom) {
        var $dom = $myDom || $scope.sliderBox;
        //to div
        $dom.find(".toDiv img").each(function (index, element) {//获取所有图片宽度
            $(this).load(function (e) {
                var w     = $(this)[0].width,
                    h     = $(this)[0].height,
                    style = {
                        'backgroundImage': 'url(' + $(this).attr("src") + ')',
                        'backgroundRepeat': 'no-repeat',
                        'backgroundSize': w * $scope.viewScale + 'px',
                        'width': w * $scope.viewScale + 'px',
                        'height': h * $scope.viewScale + 'px'
                    }

                $(this).parent().css(style);
                $(this).remove();
            });
        });
        //no to div
        $dom.find(".noDiv img").each(function (index, element) {//获取所有图片宽度
            $(this).load(function (e) {
                var w     = $(this)[0].width,
                    h     = $(this)[0].height,
                    style = {
                        'width': w * $scope.viewScale + 'px',
                        'height': h * $scope.viewScale + 'px'
                    }
                $(this).css(style);
            });
        });
    }

})(
    window.SLeasy = window.SLeasy || {},
    jQuery
);