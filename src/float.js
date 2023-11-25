// SLeasy3-float
;(function (SLeasy, $, T) {
    var $config = SLeasy.config(),//全局配置
        $scope = SLeasy.scope();//公有变量

    //
    SLeasy.float = function () {
        SLeasy.fixPosition([{subMotion: $config.floats}]);//全部浮动元素自适应坐标值修正转换
        var html = SLeasy.subElement($config.floats, 'floats');
        $(html).appendTo($scope.sliderBox);
        $('.SLeasy_floatElement').each(function (index, element) {
            T.set($(this), $.extend({zIndex: $config.floatZIndex || 10}, $config.floats[index].set));
        });
    }


})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    TweenMax || TweenLite
);