// SLeasy3-arrow
;(function (SLeasy, $, T) {
    var $config = SLeasy.config(),//全局配置
        $scope = SLeasy.scope()


    SLeasy.arrow = SLeasy.arrow || {};

    //init
    SLeasy.arrow.init = function (color) {
        var arrowColor = color || $config.arrowColor || '#fff';//箭头颜色

        if ($config.arrowMode) {
            if ($config.swipeMode == 'x') {
                var arrowHtml = '\
				<svg id="SLeasy_arrow" style="position:fixed;width:40px;height:20px;color:#fff;margin-top:-14px;top:50%;display:none">\
				<polyline points="5,15 20,5, 35,15" fill-opacity="0" stroke="' + arrowColor + '" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>\
				</svg>';

                $(arrowHtml).appendTo('#' + ($config.id || 'SLeasy'));
                T.set($("#SLeasy_arrow"), {rotation: -90, right: 0, display: 'block', opacity: 0.8});
                T.from($("#SLeasy_arrow"), 1.5, {
                    opacity: 0,
                    x: '+=10',
                    repeat: -1,
                    // zIndex: 10,
                    ease: Power3.easeOut,
                    delay: 1
                });
            } else {

                var arrowHtml = '\
				<svg id="SLeasy_arrow" style="position:fixed;width:40px;height:20px; margin-left:-20px;left:50%;color:#fff;display:none">\
				<polyline points="5,15 20,5, 35,15" fill-opacity="0" stroke="' + arrowColor + '" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>\
				</svg>';
                var arrowBox = $config.stageMode == 'scroll' ? 'body' : '#' + ($config.id || 'SLeasy');
                $(arrowHtml).appendTo(arrowBox);
                T.set($("#SLeasy_arrow"), {bottom: 10, display: 'block', opacity: 0.8});
                T.from($("#SLeasy_arrow"), 1.5, {
                    opacity: 0,
                    y: '+=10',
                    repeat: -1,
                    // zIndex: 10,
                    ease: Power3.easeOut,
                    delay: 1
                });
            }
        }
    }

    //show
    SLeasy.arrow.show = function () {
        T.set($("#SLeasy_arrow"), {autoAlpha: 0.8});
    }

    //hide
    SLeasy.arrow.hide = function () {
        T.set($("#SLeasy_arrow"), {autoAlpha: 0});
    }
})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    TweenMax || TweenLite
);