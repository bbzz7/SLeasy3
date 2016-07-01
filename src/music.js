// SLeasy3-music
;(function (SLeasy, $, H, T) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope()

    SLeasy.music = SLeasy.music || {};

    //music
    SLeasy.music.init = function (opt) {
        if (!$config.musicUrl) return '';

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


    //play
    SLeasy.music.play = function () {
        if($("#SLeasy_music").length){
            $("#SLeasy_music")[0].play();
            //hack部分机型无法自动播放的bug
            document.addEventListener("WeixinJSBridgeReady", function () {
                $("#SLeasy_music")[0].play();
            }, false);
        }
        //兼容安卓
        $("#SLeasy_music").on('playing', function () {
            $scope.isMusic = 1;
            T.to($("#SLeasy_musicBt"), 0.5, {backgroundPosition: 'center 0px', ease: Power4.easeOut});
        })

        setTimeout(function () {//不支持自动播放情况
            if (!$scope.isMusic) {
                T.to($("#SLeasy_musicBt"), 0.5, {
                    backgroundPosition: 'center -' + $config.musicBt[3] * $scope.viewScale + 'px',
                    ease: Power4.easeOut
                });
            }
        }, 50)
    }

    //pause
    SLeasy.music.pause = function () {
        $("#SLeasy_music")[0].pause();
        //兼容安卓
        $("#SLeasy_music").on('pause', function () {
            $scope.isMusic = 0;
            T.to($("#SLeasy_musicBt"), 0.5, {
                backgroundPosition: 'center -' + $config.musicBt[3] * $scope.viewScale + 'px',
                ease: Power4.easeOut
            });
        })

    }

    //musicBt:[1,'http://xxx/musicBt.png',30,30,'topRight',10,10],//背景音乐按钮[开启状态，sprite图片url，宽度，高度，对齐方式，x轴偏移，y轴偏移]
    SLeasy.music.bt = function () {
        var base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAB6CAYAAADj/TADAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDNCNzI5ODQ3NkQ3MTFFNDk0RTBDN0FEQzAxQ0I2Q0EiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDNCNzI5ODM3NkQ3MTFFNDk0RTBDN0FEQzAxQ0I2Q0EiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEOEE3Njc5NDYyNjcxMUU0ODE0NUQ4OTMyQjgxMzFFOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEOEE3Njc5NTYyNjcxMUU0ODE0NUQ4OTMyQjgxMzFFOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp4tr78AAA3ASURBVHja7Fx7TFTZGb8zAyIMD0UEBQ2PRTCKiFbBoqJZrfiIi6+uoFFMtmsqitr6qP5jU2NTRV1BBRPW12pw0VqwmkI1ai0iVVYFBeMDFdlFRojyHhEGZ/p9eA653rl33sM84Eu+eC9z7rnf755zvsc536eIMR+JgaWEnYGdgB2BHchvSErgTmAFcDtwG7CcsNIcQolM3B+CGUhYygKmLykJ6AbCndYG2AV4CPAAM3xEFXAj8Bvg95YGjEB9gT2YnqEm4BpjgBsKWAI8DNiLsQy9Ba4G/qg2HVSqzwGKREYDdgMOJArIkoSKrhK4xZyAh5AprNNzsbGx7uvWrZswcuTI8AEDBgRIpdLhjo6OAyUSSX/8/ePHjx8UCkWDXC6vbmxsrHzy5MnDw4cP3718+XKzHuu7hqxvkwLGdgHAntoajh8/3mX//v0zxo0bN9/d3T0CXqivplY2NTWVlpSUXNq0adO1+/fv67JeG8hoq0wBGAX+AthdU6OpU6e6ZmRkJMBoJjg4OLibYs7CDGh+/Pjxj8nJydk3btxo0dIcZ8ULAKw0BjD+HqwJLExREUzBuQB4IwAdyFlPH5ubmx/V1NT8VFlZ+fTu3buvioqK3paXl6ODwYSFhTlHR0d7TZgwISAwMDDU19d3IsyK0SCkhN1PZ2dnw82bN1NhieTBElBpAf2cPcxcwNoIldOvhDguLm7mu3fvilQcev/+/SsAt3/hwoW/0fQ8H+Mz+Cz2we0X34Xv1NJHIOKlrI9Z8iGmh5dAuYStXr06BUbYm/7tw4cPrwsKCtJB6KsgsFGuoYuLizg3N3dmTEzM2v79+/t1q2aFoi4zM3MrKMNyDY9XA9hafaY0OhQjhX7PysqKjI+P3ycWi13I1FU+e/bshwULFhwFTdtuStsDOsHpwoULvwsJCUmkClCpVLadPXt287Jly+5o0N5PcLJxAYsFlFSQENhTp05NTEhISKNgYX3Vnzhx4vcgWLqpwSJhn9g3vgNGt75LQLHYGT54KsqiQfcE8VkICU9jX+ITq9GuXbuC16xZcxhfSKZwzbZt21Zv3779qbm9jIsXL8paW1v/M23atBhQjm6o2EDpTe/Xr1/h9evX6wUCGRHXMeECdiKKSm1058yZ43Hw4MFMWLOD8L69vb127dq13xw5ckTWU67V7du3m2Uy2TXQ1tPR9MGH7xcVFTX53r17ec+fP+ebXRix1bNdUBGPVuZ1Lmpra1O8vb2/JNO4CUZ2FTgYv1jCpwSHZPju3btPAuiuoKWuru66j4/PVoHm9cQpUVvDTkJgc3JyYihYVAiXLl36i6XAIuG7UQainBiUDRRbjEBzT4JNbYSH47Pc1sHBwf3KysrOg2nAtc1UVVX9IyAg4G+MFdCrV6+2+/v7L6b6ZMyYMUtganfwNK0D/oU9wiKh0QVN+BUFix7PqlWrDjNWQigLyoTXKOOZM2cWaxhlERuwB9Fqn9GgQYMkEASspPfgyH+vg0+rs2MBTspX4FUtM7QPlAVlovfh4eHLUWYBje3BBsw7usePH5/KGt36xMTEf5oCbHp6+hhQgifB/97h5ubmaUxfKBO1z05OTkNQZg2j3AVYJBQcgMqfS68rKiouGOtYgGfkVV1dvTMpKem4q6vrKF2fQzc2Ly9vppBjAuv2Ar2fNGnSXIFuEGOXJ+LM54D4+fk5Dh48OJreZ2dn/9tQoNhXaWlp4unTp3Pgeq6+Gw+LFi2KBz9gt9DvbNm8vLwmgyLrJ7At5Uz3jtVo586dY8Cwd+1MtLW1/Qz3Lw0Be/78+SkwAufGjh2bTN1RXUgul2e/ffv2oC5tUTaQsYq4nU47duwIE2gqdSAjrEaRkZHjunV6Xd1dbS+F0C2D+zdw+1x1nbowzX03bNiw+OrVqzfAgyuTSCSu4Fi06vqBQMZ7MLL+LNnv8zRzdmAbZTbBdA5h2btybS/09PSMNGZ9gzXwxogIPhy6qmUG2ORywLuIyB4q0Kw/Tmm++c7AyAyn1xD6VTFWTmwZQXahON5RzGd/iYrv3nMuLCyUWTtgtoxs2bmKSywQIjKwhrpNFSgdubUDBvPUypLdTWhDUixkIiDe7B75oqIiqwdcXFz8niW7o6YR5t0FVKlU3Sd20dHRUmsHDJrZhbW9K7SX/VHM8JzP0D1heh0UFORi7YBBw3cPilKpFJqRSgTMe/YK4VYt6+t528AId8vY3t7+VtMI88WPTEtLy8/0OiwsLMDaAYOM/nyyc0iBgNsFPKduVzIwMHC0tQMGGcP4ZOdOXNTEbQJarwS+Wte1j4/PRG0vrK+vLzbGtSwpKanDvW3416AdUJBxAlt2gWZdWFEhqR1ZgJv2azzOpMcc4JD/ltHz2AQ5JyfnDxh8qATo6dOnJ/ieg+ChAoKHW3hdU1OTT86LeN+BstH+UGaUXaCti5igVtPUVVVVHeSFXRQfHz/bkC8PoV1BcHDw1w8ePEgH7alzqoJUKo2HUG+9Lm3ZsqHMKDufwkKs1A7zHkDfvn07j16PGDFiAR57GAL69evXioiIiBMrVqxYJJPJ8oVsvxDBLMnOz8/fxvcbygQfdAG9v3PnTr5AN4hRRb0sPGn4gm9Pq7q6Opdu88DaSImKijpnii2elStX/gnW90hYtydDQ0MN3hgEgF+DSdpKzNEbPz+/OFBafL7FC+BGuqfVxGeP8cHS0tLT9H78+PHfTp8+3c1YwBjvgpJZefPmzZ2tra2NhvaDsqBM9P7hw4dZAmA7CUb996Uh7vw7mIA91mCKQJZtoKCWEEdJr31p+kc1wg6uXLmyn94HBAQswZMIS4NFGegmPBLI+J0A2M+wsQGjA8J3CsfExcX9F89vaDAyf/78P+P5jqXA4rtRBjpDUTaQ8YaQi8B2riQ8hnkwX8j46NGj4iVLlsQ6ODi44uZeTEzM5MrKymsw3d/3JFjc6k1LSzsCTo03VVQJCQkbBU4P0Rq8ZJtdCY+twlF35Zna7bCOiydPnjwbjynx5G7evHlfgtIpAE3Z0hNgN2zY4Hfo0KHvQY5hJKJrTUlJScrMzJRpmMoNnwXEfDukzKdderWtHzx4BiX2KDw8PBYPpPFgesaMGbGwlsovXrz4xpxgjx49Om7Lli2HnZycvEm8rsjKyvpjcnKy0AZjOxndz2y+QTkeZ86ciVq6dOk+mgmAHh3J8ThmjhwPUFDfwL+JNJ3JmBwPU2fxVBcUFGSYOIsniU7hrvjOyCwebeTPWC5Pq5InT+t/OuRp+Ruap0V/D2IEkly6NnodHUVgA+dNmTIFM/EGcPbFMBOvHKKdYtDoFexMvM7OThX41y6sTLwRvr6+ke7u7mE8mXiNhYWFqbNmzfqXlkw89NpeasrE0zXXEkF7aHPzYJpjrmU8e4vXGMJ9NdAJ2TB9f+ypXEt2uwBGz2xaDw+PCEb/ugeLZ9OySe986fXr108ICQnBfOlAiHGHkXxpZzKCbZgvDev1dUNDw8uKiooycCp+0jNfWkaYLiOTAkbqVRnxbIel19Q8cB2UXlHVwge8V9QtccmBaHIEborKtEYS3lldZZqQ/ZaSyAtzRZzIB+GrPewkzv4H4FbGjLWHDj2w7lScDyxifWgR56OrzC1MX7Fln9Kyd7PEF1KpPfQpmrEKx0ObvFodDx06sCrXEuRtMRtgeNgqiy1B5jcmBSz69JTe4WFPF1uqeITXGzAR2H6LLdmAycjad7ElZwPM/ostaSP4Mr2j2BIBQ6PeU2xJOu0rtkTqK7a0QLFleHj4q1GjRs1GC2L3xZZ79+4N3bhxYwYtsqRkl8WWXLAkRVjvYks2YN6MWUxqgem8md5XVVXlYLKZJcHCDGs+cODAtygLy2/fjLIKdOHNBWy1xZZ8YFNTU9ds2bLlqd0VW2oCi/d2VWypDSwluyi25FFQcgg4fuCCpY6JTRdb8o1sY2Pjg4iIiGShZ2y22JKAPULBYmVNWlpaUkdHh8YdEJsstsQPA1HWHhSY7nzI5fIXmzdvfgJLQevzNlVsiSMLkdZfKVicxhARKfDAXNc+bKbYUiqVeuI0lkgkUhL6fcBpjIln+vRjM8WWQ4cOjWXvgYE1yMZprG8/NlNsSacxmp4uT7++3qAURpsqtsQ1e+vWre+M6cNmii1hzbbjmjVWT9hMsaVMJrtiyJrlks0UW4KtfWeKfvqKLfmpr9iSrfWMLrZ0dnb2Ag7SReCeKrbEEZYLOOTlqEGJ4IHgkGsUHALvJDZDXJrm6Oio84F5RkZGTWho6CEs4iJKsxXMlU4n/Sgb/bAoM8oupDLMUmzJinrcqZ2trKw8Z5fFlnxg0c6CaUuxhmJLeoMnDWoncTA1IyHOfE1P76CzPYyGkzsAu0yhUDTR9ni9b9++5dx26enpq0CTPtZUP6wro0z0fWBKZSizQNsB7D0to4sthUaWz6mw+WJLfcCakixSbGkpsIYWWxp1tjRkyBAXS4A15j/y5AJGLTyaETg9zM3NzcK9X7zv6OiohbjThcaePQUWt3qPHTuG9YfDid/8ZuHChctBizfxBX3AjxgN1aU6F1vi/2jG3oPqCbAWL7akXxGC970JCQm3zAnWbMWWuuR42FWxpZFZPLZXbMnJcbL/YkueTDz7LrYUyLW032JLU2bT9nSxpUmyaTkPW2WxJcgs0yCz4YBJB70nI57Vif3UPOhrLpm+Ysu+YktDqK/Y0lT0fwEGAImjrCobt88kAAAAAElFTkSuQmCC',
            imgUrl = $config.musicBt[1] || base64;

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
			background-size:100% auto">\
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
    TweenMax || TweenLite
);