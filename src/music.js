// SLeasy3-music
;(function (SLeasy, $, H, T) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope()

    SLeasy.music = SLeasy.music || {};

    //music
    SLeasy.music.init = function (opt) {
        if (window.Howl && $config.musicUrl instanceof Howl) {
            document.addEventListener("WeixinJSBridgeReady", function () {
                $config.musicUrl.play();
            }, false);

            $config.musicUrl.off();

            $config.musicUrl.on('play', function () {
                $scope.isMusic = 1;
                SLeasy.music.isPlaying = true;
                T.to($("#SLeasy_musicBt"), 0.5, {backgroundPosition: 'center 0px', ease: Power4.easeOut});
                document.removeEventListener('touchstart', SLeasy.music.play);
            });

            $config.musicUrl.on('pause', function () {
                $scope.isMusic = 0;
                SLeasy.music.isPlaying = false;
                T.to($("#SLeasy_musicBt"), 0.5, {
                    backgroundPosition: 'center -' + $config.musicBt[3] * $scope.viewScale + 'px',
                    ease: Power4.easeOut
                });
            });
            return '';
        } else {
            if (!$config.musicUrl || $('#SLeasy_music').length) return '';

            //=============微信webview背景音乐及视频行内播放======================================
            if ("wView" in window) {
                window.wView.allowsInlineMediaPlayback = "YES";
                window.wView.mediaPlaybackRequiresUserAction = "NO";
            }

            var mediaTypes = {
                mp3: 'audio/mpeg',
                ogg: 'audio/ogg',
                wav: 'audio/wav'
            }
            var tmpHtml = '\
			<audio id="SLeasy_music" preload="auto" loop="loop">\
			<source src="' + SLeasy.path($config.host, $config.musicUrl) + '" type="' + mediaTypes[$config.musicUrl.split('.')[1]] + '">\
			</audio>';

            return tmpHtml;
        }
    }


    //isPlaying
    SLeasy.music.isPlaying = false;

    //play
    SLeasy.music.play = function () {
        setTimeout(function () {//不支持自动播放情况
            if (!$scope.isMusic) {
                T.to($("#SLeasy_musicBt"), 0.5, {
                    backgroundPosition: 'center -' + $config.musicBt[3] * $scope.viewScale + 'px',
                    ease: Power4.easeOut
                });
            }
        }, 100)

        //howler
        if (window.Howl && $config.musicUrl instanceof Howl) {
            return $config.musicUrl.play();
        }

        //audio
        if ($("#SLeasy_music").length) {
            $("#SLeasy_music")[0].play();
            //hack部分机型无法自动播放的bug
            document.addEventListener("WeixinJSBridgeReady", function () {
                $("#SLeasy_music")[0].play();
            }, false);
        }
        //兼容安卓
        $("#SLeasy_music").on('playing', function () {
            $scope.isMusic = 1;
            SLeasy.music.isPlaying = true;
            T.to($("#SLeasy_musicBt"), 0.5, {backgroundPosition: 'center 0px', ease: Power4.easeOut});
            document.removeEventListener('touchstart', SLeasy.music.play);
        })
    }

    //auto playHack
    document.addEventListener('touchstart', SLeasy.music.play, false);

    //pause
    SLeasy.music.pause = function () {
        //howler
        if (window.Howl && $config.musicUrl instanceof Howl) {
            return $config.musicUrl.pause();
        }
        //audio
        $("#SLeasy_music")[0].pause();
        //兼容安卓
        $("#SLeasy_music").on('pause', function () {
            $scope.isMusic = 0;
            SLeasy.music.isPlaying = false;
            T.to($("#SLeasy_musicBt"), 0.5, {
                backgroundPosition: 'center -' + $config.musicBt[3] * $scope.viewScale + 'px',
                ease: Power4.easeOut
            });
        })

    }

    //musicBt:[1,'http://xxx/musicBt.png',60,60,'topRight',10,10],//背景音乐按钮[开启状态，sprite图片url，宽度，高度，对齐方式，x轴偏移，y轴偏移]
    SLeasy.music.bt = function () {
        if ($("#SLeasy_musicBt").length) return;

        var base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAABYCAYAAACONxXWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEUxQUE2RjlFODUyMTFFNThCQzNDMkEyRUVFRkQxNUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEUxQUE2RkFFODUyMTFFNThCQzNDMkEyRUVFRkQxNUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RTFBQTZGN0U4NTIxMUU1OEJDM0MyQTJFRUVGRDE1RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RTFBQTZGOEU4NTIxMUU1OEJDM0MyQTJFRUVGRDE1RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjjeU1sAAAcmSURBVHja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',
            imgUrl = SLeasy.path($config.host, $config.musicBt[1]) || base64;

        var position = {
            'topLeft': 'left:' + $config.musicBt[5] * $scope.viewScale + 'px; top:' + $config.musicBt[6] * $scope.viewScale + 'px;',
            'topRight': 'right:' + $config.musicBt[5] * $scope.viewScale + 'px; top:' + $config.musicBt[6] * $scope.viewScale + 'px;',
            'bottomLeft': 'left:' + $config.musicBt[5] * $scope.viewScale + 'px; bottom:' + $config.musicBt[6] * $scope.viewScale + 'px;',
            'bottomRight': 'right:' + $config.musicBt[5] * $scope.viewScale + 'px; bottom:' + $config.musicBt[6] * $scope.viewScale + 'px;'
        }

        $('<div id="SLeasy_musicBt"\
			style="position:absolute;' + position[$config.musicBt[4]] + 'display:block;\
			width:' + $config.musicBt[2] * $scope.viewScale + 'px;height:' + $config.musicBt[3] * $scope.viewScale + 'px;\
			background-image:url(' + imgUrl + ');\
			background-repeat:no-repeat;\
			background-position:center 0px;\
			background-size:100% auto;\
			z-index:1">\
			</div>')
            .appendTo($('#' + $config.id).length ? '#' + $config.id : '#SLeasy').css("cursor", "pointer");

        H($("#SLeasy_musicBt")[0]).on('tap', function () {
            if (!$scope.isMusic) {
                SLeasy.music.play();
            } else {
                SLeasy.music.pause();
            }
        });
    }


})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    Hammer,
    TweenMax
);