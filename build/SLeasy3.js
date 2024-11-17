/*!
 SLeasy 3.9.23 by 宇文互动 庄宇 2023-12-05 email:30755405@qq.com
 3.9.23(2024-11-17):SLeasy.inset()支持递归;
 3.9.22(2024-06-03):更新默认背景音乐及音乐按钮支持webaudio;添加SLeasy.initMedias();
 3.9.21(2023-12-13):更新添加分组系统-subMotion自动递归;SLeasy.path()自动获取app.js的时间戳;
 3.9.20(2023-12-05):更新gulpfile生产部署deploy、deploy-noMin任务;整合添加vconsole;添加SLeasy.goPre();
 3.9.19(2023-11-26):添加floatZIndex、detailZIndex配置参数;添加$scope.loadingTotalTime/SLeasy.isWmp()/SLeasy.isLocalHost()/SLeasy.getURLParams();完善scroll模式下，水平滑动的场景;修复自定义loading时，自动跳转幻灯首页的问题;更新优化SLeasy.insert(),使其支持set中的所有属性;
 3.9.18(2023-06-14):重构SLeasy.music初始化逻辑;新增SLeasy.spriteNext()、jssdk.previewImage();img元素添加content选项;修复一些小bug;
 3.9.17(2022-07-25):新增SLeasy.percent,SLeasy.userSelect函数;添加hold、holdup事件;一些小优化;
 3.9.16(2021-11-25):jssdk添加关闭当前网页窗口api;更新shake摇一摇事件的ios授权逻辑;input添加password参数;所有幻灯无子元素时，更新跳转首页的逻辑;
 3.9.15(2021-10-28):更新首页出现逻辑，在所有img加载完毕，SLeasy.init().done()之后;添加regions全国三级省区json数据;
 3.9.14(2021-10-14):添加SLeasy.keepLastIndex();更新SLeasy.viewScale()/SLeasy.insert();
 3.9.13(2021-05-25):修正:幻灯子元素在Safari中执行3d变换显示的问题;新增:x,y自适应偏移条件;SLeasy.pauseMedia()/SLeasy.music.volume();
 3.9.12(2021-04-27):增强SLeasy.respY()自适应功能函数，允许detail页多层叠加~
 3.9.11(2020-12-01):增加横竖屏旋转模式(config.rotateMode)~
 3.9.10(2020-09-12):增加fixWidthMode自适应宽度模式开关，更新完善stageMode的阈值模式~
 3.9.9(2020-09-06):fixHeight+1以避免小数，导致底部有背景缝隙;增加SLeasy.respY()功能函数，解决顶部/底部元素超出安全区域时自适应定位~
 3.9.8(2020-07-26):修正x,y自适应偏移判断bug;回滚config函数值计算的返回值为原生值;添加SortableJS库~
 3.9.7(2020-05-20):重构subMotion的timeline起始时间点定位~
 3.9.6(2020-05-17):更新自定义loading和slider本身添加on事件绑定参数选项~
 3.9.5(2020-05-12):更新完善height模式下的元素自适应~
 3.9.4(2020-05-04):更新优化完全按config配置顺序预加载图片，包括ae类型;webAudio模式下，内置音乐按钮增加全局静音功能~
 3.9.3(2020-04-26):更新完善ScrollMagic模式;
 3.9.2(2020-04-22):借鉴ios-inner-height.js，内置获取iphone等全面屏机型下，钉钉、手淘中全屏高度的兼容方法;
 3.9.1(2020-04-22):更新添加iosInnerHeight()，以解决兼容iphone等全面屏机型下，钉钉、手淘中全屏高度的问题;
 3.9.0(2020-04-22):更新添加ScrollMagic模式;
 3.8.23(2020-03-18):添加SLeasy.resize()自适应x5同层模式，更新video元素object-fit默认为cover;
 3.8.22(2020-01-19):更新、添加、修复了一些……;
 3.8.21(2020-01-16):更新幻灯子元素起始时间为0的场景及边界判断，不等待页面切换时间;
 3.8.20(2019-10-31):新增letter-spacing属性缩放变换;单独提取SLeasy.bitConvent()函数;
 3.8.19(2019-08-31):新增SLeasy.copyText()函数，修正video元素controls属性，幻灯页新增preMotionFX选项~;
 3.8.18(2019-07-03):新增SLeasy.loadAelayer()，按需加载~;
 3.8.17(2019-07-02):调整资源加载顺序，ae序列帧资源放置最后;
 3.8.16(2019-05-29):增加支持指定n线程下载，进一步完善SLeasy.playAeLayer/show/hide()等系列函数;
 3.8.15(2019-04-17):初步集成webAudio/howler;
 3.8.14(2019-04-14):进一步强化sprite元素功能，及media系列功能函数;
 3.8.13(2019-04-09):添加sprite元素及相关功能函数;
 3.8.12(2019-04-03):添加SLeasy.intiMedia/media/pauseAeLayer/resumeAeLayer函数，修复SLeasy.playAeLayer函数参数为数组对象时，某些情况下跳帧的bug;
 3.8.11(2019-03-31):自定义loading添加onComplete钩子，更新修复subMotion中addPause()时间定位不准确的问题;
 3.8.10(2019-03-02):更新添加对subMotion.to的全功能支持,更新幻灯页可单独分别设置入场和出场的动画效果,以及对'+='、'-='相对值的自动缩放支持;
 3.8.9(2019-02-22):内置ae插件支持同一个aeLayer的多种不同格式序列合并，支持同时传递aeLayer播放对象数组参数;
 3.8.8(2019-02-20):更新完善内置ae插件img渲染引擎，支持多层aeLayer;
 3.8.7(2019-02-17):进一步完善更新自定义loading模块，移除noFade，autoStart参数相关控制逻辑;
 3.8.6(2019-01-29):修复top值错误计算的问题;
 3.8.5(2019-01-23):内置ae插件增加SLeasy.gotoAeLayer功能;
 3.8.3(2019-01-21):更新添加文件timeStamp时间戳以刷新cdn缓存;
 3.8.2(2019-01-16):修复更新SLeasy初始化回调（元素imgToDiv）计数错误的问题;
 3.8.1(2019-01-08):更新有自定义loading选项，SLeasy二次初始化时，最外层SLeasy.init().done()回调触发失效的问题;
 3.8.0(2019-01-07):内置ae插件重大升级，重构新增为3种渲染引擎(easel、pixi、img);
 3.7.7(2019-01-06):更新真·SLeasy.init().done();
 3.7.6(2019-01-05):修正musicBt图片地址没经过SLeasy.path处理的问题，更新SLeasy.isHttp()函数和SLeasy.path()函数;
 3.7.5(2018-12-30):重构内置ae插件，提升性能;
 3.7.4(2018-12-29):解决ios微信中，横竖屏切换导致布局尺寸异常不能复位的问题;
 3.7.3(2018-12-13):支持单页幻灯alignMode参数;
 3.7.2(2018-06-21):大幅优化ae插件资源释放效果，支持自定义loading自动播放ae序列，添加横竖屏旋转回调等;
 3.7.1(2018-06-19):优化debug模式，force3D全局配置，修复alignMode相关定位bug等;
 3.7.0(2017-07-19):更新高级自定义loading功能模块;
 3.6.0(2017-06-19):更新依赖库，第三方库，以及gulp构建工具链;
 3.5.6(2017-01-06):添加安卓微信h5同层播放器相关代码，viewport添加device-width模式;
 3.5.5(2016-12-05):添加幻灯页scroll模式，修正子动画时间为0时，开始时间定位错误的bug;
 3.5.0(2016-12-03):重构子动画timeline开始时间为绝对时间值,添加loaderMsg模块;
 3.4.0(2016-09-25):子动画队列播放重构为与场景切换动效前置对齐的模式，添加audio、video、iframe等内置元素;
 3.3.1(2016-08-14):添加传统click事件支持,方便兼容某些广告监测代码,shadownBt添加name属性,以及debug模式下的对比阴影;
 3.3.0(2016-04-17):backfaceVisiblity bug修复,添加阈值高度(threshold)适配模式,优化gulpfile自动化构建;
 3.2.7(2015-12-23):SLeasy.cache方法bug修复，添加更多fixProps;
 3.2.6(2015-08-20):修正幻灯切换效果索引不为0时，详情页默认切换效果获取不正确的bug; loading结构优化;
 3.2.5(2015-08-18):调整模块分布目录，使构架更清晰，增加mask涂抹遮罩插件，修正幻灯切换状态锁定，优化gulpfile自动化构建
 3.2.0(2015-07-22):路由功能优化加强，动画模块解耦重构，增加打开淘宝天猫客户端跳转功能
 3.1.0(2015-06-28):全新路由功能，支持所有切换及详情页开关状态
 3.0.0:全新构架，重大升级
 2.8.7:微信背景音乐自动播放及视频行内播放兼容
 2.8.5:增加子动画to配置参数（同一元素连动功能）
 2.8：大幅升级，内部初始化重构，
 增加预加载模块包括：可配置的内置loading式样，2种加载模式（多线程异步乱序加载，和单线程顺序加载），
 增加固定浮动元素功能，
 添加加载回调及幻灯切换回调，
 其他显示体验提升
 * https://github.com/bbzz7/SLeasy
 * Licensed under the MIT license 
 */
/*! howler.js v2.2.4 | (c) 2013-2020, James Simpson of GoldFire Studios | MIT License | howlerjs.com */
!function(){"use strict";var e=function(){this.init()};e.prototype={init:function(){var e=this||n;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var o=this||n;if(e=parseFloat(e),o.ctx||_(),void 0!==e&&e>=0&&e<=1){if(o._volume=e,o._muted)return o;o.usingWebAudio&&o.masterGain.gain.setValueAtTime(e,n.ctx.currentTime);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),a=0;a<r.length;a++){var u=o._howls[t]._soundById(r[a]);u&&u._node&&(u._node.volume=u._volume*e)}return o}return o._volume},mute:function(e){var o=this||n;o.ctx||_(),o._muted=e,o.usingWebAudio&&o.masterGain.gain.setValueAtTime(e?0:o._volume,n.ctx.currentTime);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),a=0;a<r.length;a++){var u=o._howls[t]._soundById(r[a]);u&&u._node&&(u._node.muted=!!e||u._muted)}return o},stop:function(){for(var e=this||n,o=0;o<e._howls.length;o++)e._howls[o].stop();return e},unload:function(){for(var e=this||n,o=e._howls.length-1;o>=0;o--)e._howls[o].unload();return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,_()),e},codecs:function(e){return(this||n)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||n;if(e.state=e.ctx?e.ctx.state||"suspended":"suspended",e._autoSuspend(),!e.usingWebAudio)if("undefined"!=typeof Audio)try{var o=new Audio;void 0===o.oncanplaythrough&&(e._canPlayEvent="canplay")}catch(n){e.noAudio=!0}else e.noAudio=!0;try{var o=new Audio;o.muted&&(e.noAudio=!0)}catch(e){}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||n,o=null;try{o="undefined"!=typeof Audio?new Audio:null}catch(n){return e}if(!o||"function"!=typeof o.canPlayType)return e;var t=o.canPlayType("audio/mpeg;").replace(/^no$/,""),r=e._navigator?e._navigator.userAgent:"",a=r.match(/OPR\/(\d+)/g),u=a&&parseInt(a[0].split("/")[1],10)<33,d=-1!==r.indexOf("Safari")&&-1===r.indexOf("Chrome"),i=r.match(/Version\/(.*?) /),_=d&&i&&parseInt(i[1],10)<15;return e._codecs={mp3:!(u||!t&&!o.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!t,opus:!!o.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(o.canPlayType('audio/wav; codecs="1"')||o.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!o.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!o.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(o.canPlayType("audio/x-m4a;")||o.canPlayType("audio/m4a;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(o.canPlayType("audio/x-m4b;")||o.canPlayType("audio/m4b;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(o.canPlayType("audio/x-mp4;")||o.canPlayType("audio/mp4;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!(_||!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!(_||!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!o.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(o.canPlayType("audio/x-flac;")||o.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||n;if(!e._audioUnlocked&&e.ctx){e._audioUnlocked=!1,e.autoUnlock=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var o=function(n){for(;e._html5AudioPool.length<e.html5PoolSize;)try{var t=new Audio;t._unlocked=!0,e._releaseHtml5Audio(t)}catch(n){e.noAudio=!0;break}for(var r=0;r<e._howls.length;r++)if(!e._howls[r]._webAudio)for(var a=e._howls[r]._getSoundIds(),u=0;u<a.length;u++){var d=e._howls[r]._soundById(a[u]);d&&d._node&&!d._node._unlocked&&(d._node._unlocked=!0,d._node.load())}e._autoResume();var i=e.ctx.createBufferSource();i.buffer=e._scratchBuffer,i.connect(e.ctx.destination),void 0===i.start?i.noteOn(0):i.start(0),"function"==typeof e.ctx.resume&&e.ctx.resume(),i.onended=function(){i.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",o,!0),document.removeEventListener("touchend",o,!0),document.removeEventListener("click",o,!0),document.removeEventListener("keydown",o,!0);for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("unlock")}};return document.addEventListener("touchstart",o,!0),document.addEventListener("touchend",o,!0),document.addEventListener("click",o,!0),document.addEventListener("keydown",o,!0),e}},_obtainHtml5Audio:function(){var e=this||n;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var o=(new Audio).play();return o&&"undefined"!=typeof Promise&&(o instanceof Promise||"function"==typeof o.then)&&o.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(e){var o=this||n;return e._unlocked&&o._html5AudioPool.push(e),o},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&void 0!==e.ctx.suspend&&n.usingWebAudio){for(var o=0;o<e._howls.length;o++)if(e._howls[o]._webAudio)for(var t=0;t<e._howls[o]._sounds.length;t++)if(!e._howls[o]._sounds[t]._paused)return e;return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){if(e.autoSuspend){e._suspendTimer=null,e.state="suspending";var n=function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())};e.ctx.suspend().then(n,n)}},3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&void 0!==e.ctx.resume&&n.usingWebAudio)return"running"===e.state&&"interrupted"!==e.ctx.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state||"running"===e.state&&"interrupted"===e.ctx.state?(e.ctx.resume().then(function(){e.state="running";for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};var n=new e,o=function(e){var n=this;if(!e.src||0===e.src.length)return void console.error("An array of source files must be passed with any new Howl.");n.init(e)};o.prototype={init:function(e){var o=this;return n.ctx||_(),o._autoplay=e.autoplay||!1,o._format="string"!=typeof e.format?e.format:[e.format],o._html5=e.html5||!1,o._muted=e.mute||!1,o._loop=e.loop||!1,o._pool=e.pool||5,o._preload="boolean"!=typeof e.preload&&"metadata"!==e.preload||e.preload,o._rate=e.rate||1,o._sprite=e.sprite||{},o._src="string"!=typeof e.src?e.src:[e.src],o._volume=void 0!==e.volume?e.volume:1,o._xhr={method:e.xhr&&e.xhr.method?e.xhr.method:"GET",headers:e.xhr&&e.xhr.headers?e.xhr.headers:null,withCredentials:!(!e.xhr||!e.xhr.withCredentials)&&e.xhr.withCredentials},o._duration=0,o._state="unloaded",o._sounds=[],o._endTimers={},o._queue=[],o._playLock=!1,o._onend=e.onend?[{fn:e.onend}]:[],o._onfade=e.onfade?[{fn:e.onfade}]:[],o._onload=e.onload?[{fn:e.onload}]:[],o._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],o._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],o._onpause=e.onpause?[{fn:e.onpause}]:[],o._onplay=e.onplay?[{fn:e.onplay}]:[],o._onstop=e.onstop?[{fn:e.onstop}]:[],o._onmute=e.onmute?[{fn:e.onmute}]:[],o._onvolume=e.onvolume?[{fn:e.onvolume}]:[],o._onrate=e.onrate?[{fn:e.onrate}]:[],o._onseek=e.onseek?[{fn:e.onseek}]:[],o._onunlock=e.onunlock?[{fn:e.onunlock}]:[],o._onresume=[],o._webAudio=n.usingWebAudio&&!o._html5,void 0!==n.ctx&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(o),o._autoplay&&o._queue.push({event:"play",action:function(){o.play()}}),o._preload&&"none"!==o._preload&&o.load(),o},load:function(){var e=this,o=null;if(n.noAudio)return void e._emit("loaderror",null,"No audio support.");"string"==typeof e._src&&(e._src=[e._src]);for(var r=0;r<e._src.length;r++){var u,d;if(e._format&&e._format[r])u=e._format[r];else{if("string"!=typeof(d=e._src[r])){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}u=/^data:audio\/([^;,]+);/i.exec(d),u||(u=/\.([^.]+)$/.exec(d.split("?",1)[0])),u&&(u=u[1].toLowerCase())}if(u||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),u&&n.codecs(u)){o=e._src[r];break}}return o?(e._src=o,e._state="loading","https:"===window.location.protocol&&"http:"===o.slice(0,5)&&(e._html5=!0,e._webAudio=!1),new t(e),e._webAudio&&a(e),e):void e._emit("loaderror",null,"No codec support for selected audio sources.")},play:function(e,o){var t=this,r=null;if("number"==typeof e)r=e,e=null;else{if("string"==typeof e&&"loaded"===t._state&&!t._sprite[e])return null;if(void 0===e&&(e="__default",!t._playLock)){for(var a=0,u=0;u<t._sounds.length;u++)t._sounds[u]._paused&&!t._sounds[u]._ended&&(a++,r=t._sounds[u]._id);1===a?e=null:r=null}}var d=r?t._soundById(r):t._inactiveSound();if(!d)return null;if(r&&!e&&(e=d._sprite||"__default"),"loaded"!==t._state){d._sprite=e,d._ended=!1;var i=d._id;return t._queue.push({event:"play",action:function(){t.play(i)}}),i}if(r&&!d._paused)return o||t._loadQueue("play"),d._id;t._webAudio&&n._autoResume();var _=Math.max(0,d._seek>0?d._seek:t._sprite[e][0]/1e3),s=Math.max(0,(t._sprite[e][0]+t._sprite[e][1])/1e3-_),l=1e3*s/Math.abs(d._rate),c=t._sprite[e][0]/1e3,f=(t._sprite[e][0]+t._sprite[e][1])/1e3;d._sprite=e,d._ended=!1;var p=function(){d._paused=!1,d._seek=_,d._start=c,d._stop=f,d._loop=!(!d._loop&&!t._sprite[e][2])};if(_>=f)return void t._ended(d);var m=d._node;if(t._webAudio){var v=function(){t._playLock=!1,p(),t._refreshBuffer(d);var e=d._muted||t._muted?0:d._volume;m.gain.setValueAtTime(e,n.ctx.currentTime),d._playStart=n.ctx.currentTime,void 0===m.bufferSource.start?d._loop?m.bufferSource.noteGrainOn(0,_,86400):m.bufferSource.noteGrainOn(0,_,s):d._loop?m.bufferSource.start(0,_,86400):m.bufferSource.start(0,_,s),l!==1/0&&(t._endTimers[d._id]=setTimeout(t._ended.bind(t,d),l)),o||setTimeout(function(){t._emit("play",d._id),t._loadQueue()},0)};"running"===n.state&&"interrupted"!==n.ctx.state?v():(t._playLock=!0,t.once("resume",v),t._clearTimer(d._id))}else{var h=function(){m.currentTime=_,m.muted=d._muted||t._muted||n._muted||m.muted,m.volume=d._volume*n.volume(),m.playbackRate=d._rate;try{var r=m.play();if(r&&"undefined"!=typeof Promise&&(r instanceof Promise||"function"==typeof r.then)?(t._playLock=!0,p(),r.then(function(){t._playLock=!1,m._unlocked=!0,o?t._loadQueue():t._emit("play",d._id)}).catch(function(){t._playLock=!1,t._emit("playerror",d._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),d._ended=!0,d._paused=!0})):o||(t._playLock=!1,p(),t._emit("play",d._id)),m.playbackRate=d._rate,m.paused)return void t._emit("playerror",d._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");"__default"!==e||d._loop?t._endTimers[d._id]=setTimeout(t._ended.bind(t,d),l):(t._endTimers[d._id]=function(){t._ended(d),m.removeEventListener("ended",t._endTimers[d._id],!1)},m.addEventListener("ended",t._endTimers[d._id],!1))}catch(e){t._emit("playerror",d._id,e)}};"data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"===m.src&&(m.src=t._src,m.load());var y=window&&window.ejecta||!m.readyState&&n._navigator.isCocoonJS;if(m.readyState>=3||y)h();else{t._playLock=!0,t._state="loading";var g=function(){t._state="loaded",h(),m.removeEventListener(n._canPlayEvent,g,!1)};m.addEventListener(n._canPlayEvent,g,!1),t._clearTimer(d._id)}}return d._id},pause:function(e){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"pause",action:function(){n.pause(e)}}),n;for(var o=n._getSoundIds(e),t=0;t<o.length;t++){n._clearTimer(o[t]);var r=n._soundById(o[t]);if(r&&!r._paused&&(r._seek=n.seek(o[t]),r._rateSeek=0,r._paused=!0,n._stopFade(o[t]),r._node))if(n._webAudio){if(!r._node.bufferSource)continue;void 0===r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),n._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause();arguments[1]||n._emit("pause",r?r._id:null)}return n},stop:function(e,n){var o=this;if("loaded"!==o._state||o._playLock)return o._queue.push({event:"stop",action:function(){o.stop(e)}}),o;for(var t=o._getSoundIds(e),r=0;r<t.length;r++){o._clearTimer(t[r]);var a=o._soundById(t[r]);a&&(a._seek=a._start||0,a._rateSeek=0,a._paused=!0,a._ended=!0,o._stopFade(t[r]),a._node&&(o._webAudio?a._node.bufferSource&&(void 0===a._node.bufferSource.stop?a._node.bufferSource.noteOff(0):a._node.bufferSource.stop(0),o._cleanBuffer(a._node)):isNaN(a._node.duration)&&a._node.duration!==1/0||(a._node.currentTime=a._start||0,a._node.pause(),a._node.duration===1/0&&o._clearSound(a._node))),n||o._emit("stop",a._id))}return o},mute:function(e,o){var t=this;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"mute",action:function(){t.mute(e,o)}}),t;if(void 0===o){if("boolean"!=typeof e)return t._muted;t._muted=e}for(var r=t._getSoundIds(o),a=0;a<r.length;a++){var u=t._soundById(r[a]);u&&(u._muted=e,u._interval&&t._stopFade(u._id),t._webAudio&&u._node?u._node.gain.setValueAtTime(e?0:u._volume,n.ctx.currentTime):u._node&&(u._node.muted=!!n._muted||e),t._emit("mute",u._id))}return t},volume:function(){var e,o,t=this,r=arguments;if(0===r.length)return t._volume;if(1===r.length||2===r.length&&void 0===r[1]){t._getSoundIds().indexOf(r[0])>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else r.length>=2&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var a;if(!(void 0!==e&&e>=0&&e<=1))return a=o?t._soundById(o):t._sounds[0],a?a._volume:0;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"volume",action:function(){t.volume.apply(t,r)}}),t;void 0===o&&(t._volume=e),o=t._getSoundIds(o);for(var u=0;u<o.length;u++)(a=t._soundById(o[u]))&&(a._volume=e,r[2]||t._stopFade(o[u]),t._webAudio&&a._node&&!a._muted?a._node.gain.setValueAtTime(e,n.ctx.currentTime):a._node&&!a._muted&&(a._node.volume=e*n.volume()),t._emit("volume",a._id));return t},fade:function(e,o,t,r){var a=this;if("loaded"!==a._state||a._playLock)return a._queue.push({event:"fade",action:function(){a.fade(e,o,t,r)}}),a;e=Math.min(Math.max(0,parseFloat(e)),1),o=Math.min(Math.max(0,parseFloat(o)),1),t=parseFloat(t),a.volume(e,r);for(var u=a._getSoundIds(r),d=0;d<u.length;d++){var i=a._soundById(u[d]);if(i){if(r||a._stopFade(u[d]),a._webAudio&&!i._muted){var _=n.ctx.currentTime,s=_+t/1e3;i._volume=e,i._node.gain.setValueAtTime(e,_),i._node.gain.linearRampToValueAtTime(o,s)}a._startFadeInterval(i,e,o,t,u[d],void 0===r)}}return a},_startFadeInterval:function(e,n,o,t,r,a){var u=this,d=n,i=o-n,_=Math.abs(i/.01),s=Math.max(4,_>0?t/_:t),l=Date.now();e._fadeTo=o,e._interval=setInterval(function(){var r=(Date.now()-l)/t;l=Date.now(),d+=i*r,d=Math.round(100*d)/100,d=i<0?Math.max(o,d):Math.min(o,d),u._webAudio?e._volume=d:u.volume(d,e._id,!0),a&&(u._volume=d),(o<n&&d<=o||o>n&&d>=o)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,u.volume(o,e._id),u._emit("fade",e._id))},s)},_stopFade:function(e){var o=this,t=o._soundById(e);return t&&t._interval&&(o._webAudio&&t._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(t._interval),t._interval=null,o.volume(t._fadeTo,e),t._fadeTo=null,o._emit("fade",e)),o},loop:function(){var e,n,o,t=this,r=arguments;if(0===r.length)return t._loop;if(1===r.length){if("boolean"!=typeof r[0])return!!(o=t._soundById(parseInt(r[0],10)))&&o._loop;e=r[0],t._loop=e}else 2===r.length&&(e=r[0],n=parseInt(r[1],10));for(var a=t._getSoundIds(n),u=0;u<a.length;u++)(o=t._soundById(a[u]))&&(o._loop=e,t._webAudio&&o._node&&o._node.bufferSource&&(o._node.bufferSource.loop=e,e&&(o._node.bufferSource.loopStart=o._start||0,o._node.bufferSource.loopEnd=o._stop,t.playing(a[u])&&(t.pause(a[u],!0),t.play(a[u],!0)))));return t},rate:function(){var e,o,t=this,r=arguments;if(0===r.length)o=t._sounds[0]._id;else if(1===r.length){var a=t._getSoundIds(),u=a.indexOf(r[0]);u>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var d;if("number"!=typeof e)return d=t._soundById(o),d?d._rate:t._rate;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"rate",action:function(){t.rate.apply(t,r)}}),t;void 0===o&&(t._rate=e),o=t._getSoundIds(o);for(var i=0;i<o.length;i++)if(d=t._soundById(o[i])){t.playing(o[i])&&(d._rateSeek=t.seek(o[i]),d._playStart=t._webAudio?n.ctx.currentTime:d._playStart),d._rate=e,t._webAudio&&d._node&&d._node.bufferSource?d._node.bufferSource.playbackRate.setValueAtTime(e,n.ctx.currentTime):d._node&&(d._node.playbackRate=e);var _=t.seek(o[i]),s=(t._sprite[d._sprite][0]+t._sprite[d._sprite][1])/1e3-_,l=1e3*s/Math.abs(d._rate);!t._endTimers[o[i]]&&d._paused||(t._clearTimer(o[i]),t._endTimers[o[i]]=setTimeout(t._ended.bind(t,d),l)),t._emit("rate",d._id)}return t},seek:function(){var e,o,t=this,r=arguments;if(0===r.length)t._sounds.length&&(o=t._sounds[0]._id);else if(1===r.length){var a=t._getSoundIds(),u=a.indexOf(r[0]);u>=0?o=parseInt(r[0],10):t._sounds.length&&(o=t._sounds[0]._id,e=parseFloat(r[0]))}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));if(void 0===o)return 0;if("number"==typeof e&&("loaded"!==t._state||t._playLock))return t._queue.push({event:"seek",action:function(){t.seek.apply(t,r)}}),t;var d=t._soundById(o);if(d){if(!("number"==typeof e&&e>=0)){if(t._webAudio){var i=t.playing(o)?n.ctx.currentTime-d._playStart:0,_=d._rateSeek?d._rateSeek-d._seek:0;return d._seek+(_+i*Math.abs(d._rate))}return d._node.currentTime}var s=t.playing(o);s&&t.pause(o,!0),d._seek=e,d._ended=!1,t._clearTimer(o),t._webAudio||!d._node||isNaN(d._node.duration)||(d._node.currentTime=e);var l=function(){s&&t.play(o,!0),t._emit("seek",o)};if(s&&!t._webAudio){var c=function(){t._playLock?setTimeout(c,0):l()};setTimeout(c,0)}else l()}return t},playing:function(e){var n=this;if("number"==typeof e){var o=n._soundById(e);return!!o&&!o._paused}for(var t=0;t<n._sounds.length;t++)if(!n._sounds[t]._paused)return!0;return!1},duration:function(e){var n=this,o=n._duration,t=n._soundById(e);return t&&(o=n._sprite[t._sprite][1]/1e3),o},state:function(){return this._state},unload:function(){for(var e=this,o=e._sounds,t=0;t<o.length;t++)o[t]._paused||e.stop(o[t]._id),e._webAudio||(e._clearSound(o[t]._node),o[t]._node.removeEventListener("error",o[t]._errorFn,!1),o[t]._node.removeEventListener(n._canPlayEvent,o[t]._loadFn,!1),o[t]._node.removeEventListener("ended",o[t]._endFn,!1),n._releaseHtml5Audio(o[t]._node)),delete o[t]._node,e._clearTimer(o[t]._id);var a=n._howls.indexOf(e);a>=0&&n._howls.splice(a,1);var u=!0;for(t=0;t<n._howls.length;t++)if(n._howls[t]._src===e._src||e._src.indexOf(n._howls[t]._src)>=0){u=!1;break}return r&&u&&delete r[e._src],n.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,n,o,t){var r=this,a=r["_on"+e];return"function"==typeof n&&a.push(t?{id:o,fn:n,once:t}:{id:o,fn:n}),r},off:function(e,n,o){var t=this,r=t["_on"+e],a=0;if("number"==typeof n&&(o=n,n=null),n||o)for(a=0;a<r.length;a++){var u=o===r[a].id;if(n===r[a].fn&&u||!n&&u){r.splice(a,1);break}}else if(e)t["_on"+e]=[];else{var d=Object.keys(t);for(a=0;a<d.length;a++)0===d[a].indexOf("_on")&&Array.isArray(t[d[a]])&&(t[d[a]]=[])}return t},once:function(e,n,o){var t=this;return t.on(e,n,o,1),t},_emit:function(e,n,o){for(var t=this,r=t["_on"+e],a=r.length-1;a>=0;a--)r[a].id&&r[a].id!==n&&"load"!==e||(setTimeout(function(e){e.call(this,n,o)}.bind(t,r[a].fn),0),r[a].once&&t.off(e,r[a].fn,r[a].id));return t._loadQueue(e),t},_loadQueue:function(e){var n=this;if(n._queue.length>0){var o=n._queue[0];o.event===e&&(n._queue.shift(),n._loadQueue()),e||o.action()}return n},_ended:function(e){var o=this,t=e._sprite;if(!o._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(o._ended.bind(o,e),100),o;var r=!(!e._loop&&!o._sprite[t][2]);if(o._emit("end",e._id),!o._webAudio&&r&&o.stop(e._id,!0).play(e._id),o._webAudio&&r){o._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=n.ctx.currentTime;var a=1e3*(e._stop-e._start)/Math.abs(e._rate);o._endTimers[e._id]=setTimeout(o._ended.bind(o,e),a)}return o._webAudio&&!r&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,o._clearTimer(e._id),o._cleanBuffer(e._node),n._autoSuspend()),o._webAudio||r||o.stop(e._id,!0),o},_clearTimer:function(e){var n=this;if(n._endTimers[e]){if("function"!=typeof n._endTimers[e])clearTimeout(n._endTimers[e]);else{var o=n._soundById(e);o&&o._node&&o._node.removeEventListener("ended",n._endTimers[e],!1)}delete n._endTimers[e]}return n},_soundById:function(e){for(var n=this,o=0;o<n._sounds.length;o++)if(e===n._sounds[o]._id)return n._sounds[o];return null},_inactiveSound:function(){var e=this;e._drain();for(var n=0;n<e._sounds.length;n++)if(e._sounds[n]._ended)return e._sounds[n].reset();return new t(e)},_drain:function(){var e=this,n=e._pool,o=0,t=0;if(!(e._sounds.length<n)){for(t=0;t<e._sounds.length;t++)e._sounds[t]._ended&&o++;for(t=e._sounds.length-1;t>=0;t--){if(o<=n)return;e._sounds[t]._ended&&(e._webAudio&&e._sounds[t]._node&&e._sounds[t]._node.disconnect(0),e._sounds.splice(t,1),o--)}}},_getSoundIds:function(e){var n=this;if(void 0===e){for(var o=[],t=0;t<n._sounds.length;t++)o.push(n._sounds[t]._id);return o}return[e]},_refreshBuffer:function(e){var o=this;return e._node.bufferSource=n.ctx.createBufferSource(),e._node.bufferSource.buffer=r[o._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,n.ctx.currentTime),o},_cleanBuffer:function(e){var o=this,t=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!e.bufferSource)return o;if(n._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),t))try{e.bufferSource.buffer=n._scratchBuffer}catch(e){}return e.bufferSource=null,o},_clearSound:function(e){/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent)||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var t=function(e){this._parent=e,this.init()};t.prototype={init:function(){var e=this,o=e._parent;return e._muted=o._muted,e._loop=o._loop,e._volume=o._volume,e._rate=o._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,o._sounds.push(e),e.create(),e},create:function(){var e=this,o=e._parent,t=n._muted||e._muted||e._parent._muted?0:e._volume;return o._webAudio?(e._node=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),e._node.gain.setValueAtTime(t,n.ctx.currentTime),e._node.paused=!0,e._node.connect(n.masterGain)):n.noAudio||(e._node=n._obtainHtml5Audio(),e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(n._canPlayEvent,e._loadFn,!1),e._endFn=e._endListener.bind(e),e._node.addEventListener("ended",e._endFn,!1),e._node.src=o._src,e._node.preload=!0===o._preload?"auto":o._preload,e._node.volume=t*n.volume(),e._node.load()),e},reset:function(){var e=this,o=e._parent;return e._muted=o._muted,e._loop=o._loop,e._volume=o._volume,e._rate=o._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,o=e._parent;o._duration=Math.ceil(10*e._node.duration)/10,0===Object.keys(o._sprite).length&&(o._sprite={__default:[0,1e3*o._duration]}),"loaded"!==o._state&&(o._state="loaded",o._emit("load"),o._loadQueue()),e._node.removeEventListener(n._canPlayEvent,e._loadFn,!1)},_endListener:function(){var e=this,n=e._parent;n._duration===1/0&&(n._duration=Math.ceil(10*e._node.duration)/10,n._sprite.__default[1]===1/0&&(n._sprite.__default[1]=1e3*n._duration),n._ended(e)),e._node.removeEventListener("ended",e._endFn,!1)}};var r={},a=function(e){var n=e._src;if(r[n])return e._duration=r[n].duration,void i(e);if(/^data:[^;]+;base64,/.test(n)){for(var o=atob(n.split(",")[1]),t=new Uint8Array(o.length),a=0;a<o.length;++a)t[a]=o.charCodeAt(a);d(t.buffer,e)}else{var _=new XMLHttpRequest;_.open(e._xhr.method,n,!0),_.withCredentials=e._xhr.withCredentials,_.responseType="arraybuffer",e._xhr.headers&&Object.keys(e._xhr.headers).forEach(function(n){_.setRequestHeader(n,e._xhr.headers[n])}),_.onload=function(){var n=(_.status+"")[0];if("0"!==n&&"2"!==n&&"3"!==n)return void e._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");d(_.response,e)},_.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete r[n],e.load())},u(_)}},u=function(e){try{e.send()}catch(n){e.onerror()}},d=function(e,o){var t=function(){o._emit("loaderror",null,"Decoding audio data failed.")},a=function(e){e&&o._sounds.length>0?(r[o._src]=e,i(o,e)):t()};"undefined"!=typeof Promise&&1===n.ctx.decodeAudioData.length?n.ctx.decodeAudioData(e).then(a).catch(t):n.ctx.decodeAudioData(e,a,t)},i=function(e,n){n&&!e._duration&&(e._duration=n.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},_=function(){if(n.usingWebAudio){try{"undefined"!=typeof AudioContext?n.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch(e){n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),o=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),t=o?parseInt(o[1],10):null;if(e&&t&&t<9){var r=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!r&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};"function"==typeof define&&define.amd&&define([],function(){return{Howler:n,Howl:o}}),"undefined"!=typeof exports&&(exports.Howler=n,exports.Howl=o),"undefined"!=typeof global?(global.HowlerGlobal=e,global.Howler=n,global.Howl=o,global.Sound=t):"undefined"!=typeof window&&(window.HowlerGlobal=e,window.Howler=n,window.Howl=o,window.Sound=t)}();
/*! Spatial Plugin */
!function(){"use strict";HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(e){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var t=n._howls.length-1;t>=0;t--)n._howls[t].stereo(e);return n},HowlerGlobal.prototype.pos=function(e,n,t){var r=this;return r.ctx&&r.ctx.listener?(n="number"!=typeof n?r._pos[1]:n,t="number"!=typeof t?r._pos[2]:t,"number"!=typeof e?r._pos:(r._pos=[e,n,t],void 0!==r.ctx.listener.positionX?(r.ctx.listener.positionX.setTargetAtTime(r._pos[0],Howler.ctx.currentTime,.1),r.ctx.listener.positionY.setTargetAtTime(r._pos[1],Howler.ctx.currentTime,.1),r.ctx.listener.positionZ.setTargetAtTime(r._pos[2],Howler.ctx.currentTime,.1)):r.ctx.listener.setPosition(r._pos[0],r._pos[1],r._pos[2]),r)):r},HowlerGlobal.prototype.orientation=function(e,n,t,r,o,i){var a=this;if(!a.ctx||!a.ctx.listener)return a;var p=a._orientation;return n="number"!=typeof n?p[1]:n,t="number"!=typeof t?p[2]:t,r="number"!=typeof r?p[3]:r,o="number"!=typeof o?p[4]:o,i="number"!=typeof i?p[5]:i,"number"!=typeof e?p:(a._orientation=[e,n,t,r,o,i],void 0!==a.ctx.listener.forwardX?(a.ctx.listener.forwardX.setTargetAtTime(e,Howler.ctx.currentTime,.1),a.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),a.ctx.listener.forwardZ.setTargetAtTime(t,Howler.ctx.currentTime,.1),a.ctx.listener.upX.setTargetAtTime(r,Howler.ctx.currentTime,.1),a.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),a.ctx.listener.upZ.setTargetAtTime(i,Howler.ctx.currentTime,.1)):a.ctx.listener.setOrientation(e,n,t,r,o,i),a)},Howl.prototype.init=function(e){return function(n){var t=this;return t._orientation=n.orientation||[1,0,0],t._stereo=n.stereo||null,t._pos=n.pos||null,t._pannerAttr={coneInnerAngle:void 0!==n.coneInnerAngle?n.coneInnerAngle:360,coneOuterAngle:void 0!==n.coneOuterAngle?n.coneOuterAngle:360,coneOuterGain:void 0!==n.coneOuterGain?n.coneOuterGain:0,distanceModel:void 0!==n.distanceModel?n.distanceModel:"inverse",maxDistance:void 0!==n.maxDistance?n.maxDistance:1e4,panningModel:void 0!==n.panningModel?n.panningModel:"HRTF",refDistance:void 0!==n.refDistance?n.refDistance:1,rolloffFactor:void 0!==n.rolloffFactor?n.rolloffFactor:1},t._onstereo=n.onstereo?[{fn:n.onstereo}]:[],t._onpos=n.onpos?[{fn:n.onpos}]:[],t._onorientation=n.onorientation?[{fn:n.onorientation}]:[],e.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,t){var r=this;if(!r._webAudio)return r;if("loaded"!==r._state)return r._queue.push({event:"stereo",action:function(){r.stereo(n,t)}}),r;var o=void 0===Howler.ctx.createStereoPanner?"spatial":"stereo";if(void 0===t){if("number"!=typeof n)return r._stereo;r._stereo=n,r._pos=[n,0,0]}for(var i=r._getSoundIds(t),a=0;a<i.length;a++){var p=r._soundById(i[a]);if(p){if("number"!=typeof n)return p._stereo;p._stereo=n,p._pos=[n,0,0],p._node&&(p._pannerAttr.panningModel="equalpower",p._panner&&p._panner.pan||e(p,o),"spatial"===o?void 0!==p._panner.positionX?(p._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),p._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):p._panner.setPosition(n,0,0):p._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),r._emit("stereo",p._id)}}return r},Howl.prototype.pos=function(n,t,r,o){var i=this;if(!i._webAudio)return i;if("loaded"!==i._state)return i._queue.push({event:"pos",action:function(){i.pos(n,t,r,o)}}),i;if(t="number"!=typeof t?0:t,r="number"!=typeof r?-.5:r,void 0===o){if("number"!=typeof n)return i._pos;i._pos=[n,t,r]}for(var a=i._getSoundIds(o),p=0;p<a.length;p++){var s=i._soundById(a[p]);if(s){if("number"!=typeof n)return s._pos;s._pos=[n,t,r],s._node&&(s._panner&&!s._panner.pan||e(s,"spatial"),void 0!==s._panner.positionX?(s._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),s._panner.positionY.setValueAtTime(t,Howler.ctx.currentTime),s._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):s._panner.setPosition(n,t,r)),i._emit("pos",s._id)}}return i},Howl.prototype.orientation=function(n,t,r,o){var i=this;if(!i._webAudio)return i;if("loaded"!==i._state)return i._queue.push({event:"orientation",action:function(){i.orientation(n,t,r,o)}}),i;if(t="number"!=typeof t?i._orientation[1]:t,r="number"!=typeof r?i._orientation[2]:r,void 0===o){if("number"!=typeof n)return i._orientation;i._orientation=[n,t,r]}for(var a=i._getSoundIds(o),p=0;p<a.length;p++){var s=i._soundById(a[p]);if(s){if("number"!=typeof n)return s._orientation;s._orientation=[n,t,r],s._node&&(s._panner||(s._pos||(s._pos=i._pos||[0,0,-.5]),e(s,"spatial")),void 0!==s._panner.orientationX?(s._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),s._panner.orientationY.setValueAtTime(t,Howler.ctx.currentTime),s._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):s._panner.setOrientation(n,t,r)),i._emit("orientation",s._id)}}return i},Howl.prototype.pannerAttr=function(){var n,t,r,o=this,i=arguments;if(!o._webAudio)return o;if(0===i.length)return o._pannerAttr;if(1===i.length){if("object"!=typeof i[0])return r=o._soundById(parseInt(i[0],10)),r?r._pannerAttr:o._pannerAttr;n=i[0],void 0===t&&(n.pannerAttr||(n.pannerAttr={coneInnerAngle:n.coneInnerAngle,coneOuterAngle:n.coneOuterAngle,coneOuterGain:n.coneOuterGain,distanceModel:n.distanceModel,maxDistance:n.maxDistance,refDistance:n.refDistance,rolloffFactor:n.rolloffFactor,panningModel:n.panningModel}),o._pannerAttr={coneInnerAngle:void 0!==n.pannerAttr.coneInnerAngle?n.pannerAttr.coneInnerAngle:o._coneInnerAngle,coneOuterAngle:void 0!==n.pannerAttr.coneOuterAngle?n.pannerAttr.coneOuterAngle:o._coneOuterAngle,coneOuterGain:void 0!==n.pannerAttr.coneOuterGain?n.pannerAttr.coneOuterGain:o._coneOuterGain,distanceModel:void 0!==n.pannerAttr.distanceModel?n.pannerAttr.distanceModel:o._distanceModel,maxDistance:void 0!==n.pannerAttr.maxDistance?n.pannerAttr.maxDistance:o._maxDistance,refDistance:void 0!==n.pannerAttr.refDistance?n.pannerAttr.refDistance:o._refDistance,rolloffFactor:void 0!==n.pannerAttr.rolloffFactor?n.pannerAttr.rolloffFactor:o._rolloffFactor,panningModel:void 0!==n.pannerAttr.panningModel?n.pannerAttr.panningModel:o._panningModel})}else 2===i.length&&(n=i[0],t=parseInt(i[1],10));for(var a=o._getSoundIds(t),p=0;p<a.length;p++)if(r=o._soundById(a[p])){var s=r._pannerAttr;s={coneInnerAngle:void 0!==n.coneInnerAngle?n.coneInnerAngle:s.coneInnerAngle,coneOuterAngle:void 0!==n.coneOuterAngle?n.coneOuterAngle:s.coneOuterAngle,coneOuterGain:void 0!==n.coneOuterGain?n.coneOuterGain:s.coneOuterGain,distanceModel:void 0!==n.distanceModel?n.distanceModel:s.distanceModel,maxDistance:void 0!==n.maxDistance?n.maxDistance:s.maxDistance,refDistance:void 0!==n.refDistance?n.refDistance:s.refDistance,rolloffFactor:void 0!==n.rolloffFactor?n.rolloffFactor:s.rolloffFactor,panningModel:void 0!==n.panningModel?n.panningModel:s.panningModel};var c=r._panner;c||(r._pos||(r._pos=o._pos||[0,0,-.5]),e(r,"spatial"),c=r._panner),c.coneInnerAngle=s.coneInnerAngle,c.coneOuterAngle=s.coneOuterAngle,c.coneOuterGain=s.coneOuterGain,c.distanceModel=s.distanceModel,c.maxDistance=s.maxDistance,c.refDistance=s.refDistance,c.rolloffFactor=s.rolloffFactor,c.panningModel=s.panningModel}return o},Sound.prototype.init=function(e){return function(){var n=this,t=n._parent;n._orientation=t._orientation,n._stereo=t._stereo,n._pos=t._pos,n._pannerAttr=t._pannerAttr,e.call(this),n._stereo?t.stereo(n._stereo):n._pos&&t.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(e){return function(){var n=this,t=n._parent;return n._orientation=t._orientation,n._stereo=t._stereo,n._pos=t._pos,n._pannerAttr=t._pannerAttr,n._stereo?t.stereo(n._stereo):n._pos?t.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,t._refreshBuffer(n)),e.call(this)}}(Sound.prototype.reset);var e=function(e,n){n=n||"spatial","spatial"===n?(e._panner=Howler.ctx.createPanner(),e._panner.coneInnerAngle=e._pannerAttr.coneInnerAngle,e._panner.coneOuterAngle=e._pannerAttr.coneOuterAngle,e._panner.coneOuterGain=e._pannerAttr.coneOuterGain,e._panner.distanceModel=e._pannerAttr.distanceModel,e._panner.maxDistance=e._pannerAttr.maxDistance,e._panner.refDistance=e._pannerAttr.refDistance,e._panner.rolloffFactor=e._pannerAttr.rolloffFactor,e._panner.panningModel=e._pannerAttr.panningModel,void 0!==e._panner.positionX?(e._panner.positionX.setValueAtTime(e._pos[0],Howler.ctx.currentTime),e._panner.positionY.setValueAtTime(e._pos[1],Howler.ctx.currentTime),e._panner.positionZ.setValueAtTime(e._pos[2],Howler.ctx.currentTime)):e._panner.setPosition(e._pos[0],e._pos[1],e._pos[2]),void 0!==e._panner.orientationX?(e._panner.orientationX.setValueAtTime(e._orientation[0],Howler.ctx.currentTime),e._panner.orientationY.setValueAtTime(e._orientation[1],Howler.ctx.currentTime),e._panner.orientationZ.setValueAtTime(e._orientation[2],Howler.ctx.currentTime)):e._panner.setOrientation(e._orientation[0],e._orientation[1],e._orientation[2])):(e._panner=Howler.ctx.createStereoPanner(),e._panner.pan.setValueAtTime(e._stereo,Howler.ctx.currentTime)),e._panner.connect(e._node),e._paused||e._parent.pause(e._id,!0).play(e._id,!0)}}();
/*!
 * Physics2DPlugin 3.12.3
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((n=n||self).window=n.window||{})}(this,function(e){"use strict";function j(){return r||"undefined"!=typeof window&&(r=window.gsap)&&r.registerPlugin&&r}function k(n){return Math.round(1e4*n)/1e4}function n(){return String.fromCharCode.apply(null,arguments)}function s(n){r=n||j(),d||(a=r.utils.getUnit,u=r.core.getStyleSaver,y=r.core.reverting||function(){},d=1)}function t(n,e,t,i,s){var o=n._gsap,r=o.get(n,e);this.p=e,this.set=o.set(n,e),this.s=this.val=parseFloat(r),this.u=a(r)||0,this.vel=t||0,this.v=this.vel/s,i||0===i?(this.acc=i,this.a=this.acc/(s*s)):this.acc=this.a=0}var r,d,a,u,y,v=Math.PI/180,c="Physics2DPlugin",l=n(103,114,101,101,110,115,111,99,107,46,99,111,109),p=n(103,115,97,112,46,99,111,109),f=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,i=(function(e){return !0}("undefined"!=typeof window?window.location.host:""),{version:"3.12.3",name:"physics2D",register:s,init:function init(n,e,i){d||s();var o=this,r=+e.angle||0,a=+e.velocity||0,c=+e.acceleration||0,l=e.xProp||"x",p=e.yProp||"y",f=e.accelerationAngle||0===e.accelerationAngle?+e.accelerationAngle:r;o.styles=u&&u(n,e.xProp&&"x"!==e.xProp?e.xProp+","+e.yProp:"transform"),o.target=n,o.tween=i,o.step=0,o.sps=30,e.gravity&&(c=+e.gravity,f=90),r*=v,f*=v,o.fr=1-(+e.friction||0),o._props.push(l,p),o.xp=new t(n,l,Math.cos(r)*a,Math.cos(f)*c,o.sps),o.yp=new t(n,p,Math.sin(r)*a,Math.sin(f)*c,o.sps),o.skipX=o.skipY=0},render:function render(n,e){var t,i,s,o,r,a,c=e.xp,l=e.yp,p=e.tween,f=e.target,d=e.step,u=e.sps,v=e.fr,h=e.skipX,g=e.skipY,w=p._from?p._dur-p._time:p._time;if(p._time||!y()){if(1===v)s=w*w*.5,t=c.s+c.vel*w+c.acc*s,i=l.s+l.vel*w+l.acc*s;else{for(o=a=(0|(w*=u))-d,a<0&&(c.v=c.vel/u,l.v=l.vel/u,c.val=c.s,l.val=l.s,o=a=(e.step=0)|w),r=w%1*v;a--;)c.v+=c.a,l.v+=l.a,c.v*=v,l.v*=v,c.val+=c.v,l.val+=l.v;t=c.val+c.v*r,i=l.val+l.v*r,e.step+=o}h||c.set(f,c.p,k(t)+c.u),g||l.set(f,l.p,k(i)+l.u)}else e.styles.revert()},kill:function kill(n){this.xp.p===n&&(this.skipX=1),this.yp.p===n&&(this.skipY=1)}});j()&&r.registerPlugin(i),e.Physics2DPlugin=i,e.default=i;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


/*!
 * PhysicsPropsPlugin 3.12.3
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function i(){return a||"undefined"!=typeof window&&(a=window.gsap)&&a.registerPlugin&&a}function j(e){return Math.round(1e4*e)/1e4}function m(){return String.fromCharCode.apply(null,arguments)}function r(e){a=e||i(),l||(c=a.utils.getUnit,d=a.core.getStyleSaver,h=a.core.reverting||function(){},l=1)}function s(e,t,n,i,o,s){var r=e._gsap,a=r.get(e,t);this.p=t,this.set=r.set(e,t),this.s=this.val=parseFloat(a),this.u=c(a)||0,this.vel=n||0,this.v=this.vel/s,i||0===i?(this.acc=i,this.a=this.acc/(s*s)):this.acc=this.a=0,this.fr=1-(o||0)}var a,l,c,d,h,f="PhysicsPropsPlugin",u=m(103,114,101,101,110,115,111,99,107,46,99,111,109),p=m(103,115,97,112,46,99,111,109),v=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,t=(function(e){return !0}("undefined"!=typeof window?window.location.host:""),{version:"3.12.3",name:"physicsProps",register:r,init:function init(e,t,n){l||r();var i,o=this;for(i in o.styles=d&&d(e),o.target=e,o.tween=n,o.step=0,o.sps=30,o.vProps=[],t){var a=t[i],c=a.velocity,f=a.acceleration,m=a.friction;(c||f)&&(o.vProps.push(new s(e,i,c,f,m,o.sps)),o._props.push(i),d&&o.styles.save(i),m&&(o.hasFr=1))}},render:function render(e,t){var n,i,o,s,r,a=t.vProps,c=t.tween,f=t.target,m=t.step,l=t.hasFr,d=t.sps,u=a.length,p=c._from?c._dur-c._time:c._time;if(c._time||!h())if(l){if((i=(0|(p*=d))-m)<0){for(;u--;)(n=a[u]).v=n.vel/d,n.val=n.s;u=a.length,t.step=m=0,i=0|p}for(o=p%1;u--;){for(n=a[u],s=i;s--;)n.v+=n.a,n.v*=n.fr,n.val+=n.v;n.set(f,n.p,j(n.val+n.v*o*n.fr)+n.u)}t.step+=i}else for(r=p*p*.5;u--;)(n=a[u]).set(f,n.p,j(n.s+n.vel*p+n.acc*r)+n.u);else t.styles.revert()},kill:function kill(e){for(var t=this.vProps,n=t.length;n--;)t[n].p===e&&t.splice(n,1)}});i()&&a.registerPlugin(t),e.PhysicsPropsPlugin=t,e.default=t;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});



/*!
 * ScrambleTextPlugin 3.12.3
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(D,u){"object"==typeof exports&&"undefined"!=typeof module?u(exports):"function"==typeof define&&define.amd?define(["exports"],u):u((D=D||self).window=D.window||{})}(this,function(D){"use strict";var r=/(?:^\s+|\s+$)/g,o=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function getText(D){var u=D.nodeType,F="";if(1===u||9===u||11===u){if("string"==typeof D.textContent)return D.textContent;for(D=D.firstChild;D;D=D.nextSibling)F+=getText(D)}else if(3===u||4===u)return D.nodeValue;return F}function emojiSafeSplit(D,u,F,C){if(D+="",F&&(D=D.trim?D.trim():D.replace(r,"")),u&&""!==u)return D.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(u);for(var e,E,t=[],n=D.length,i=0;i<n;i++)(55296<=(E=D.charAt(i)).charCodeAt(0)&&E.charCodeAt(0)<=56319||65024<=D.charCodeAt(i+1)&&D.charCodeAt(i+1)<=65039)&&(e=((D.substr(i,12).split(o)||[])[1]||"").length||2,E=D.substr(i,e),i+=e-(t.emoji=1)),t.push(">"===E?"&gt;":"<"===E?"&lt;":!C||" "!==E||" "!==D.charAt(i-1)&&" "!==D.charAt(i+1)?E:"&nbsp;");return t}var a=(CharSet.prototype.grow=function grow(D){for(var u=0;u<20;u++)this.sets[u]+=F(D-this.length,this.chars);this.length=D},CharSet);function CharSet(D){this.chars=emojiSafeSplit(D),this.sets=[],this.length=50;for(var u=0;u<20;u++)this.sets[u]=F(80,this.chars)}function i(){return E||"undefined"!=typeof window&&(E=window.gsap)&&E.registerPlugin&&E}function l(){return String.fromCharCode.apply(null,arguments)}function v(){s=E=i()}var E,s,t="ScrambleTextPlugin",n=l(103,114,101,101,110,115,111,99,107,46,99,111,109),B=l(103,115,97,112,46,99,111,109),A=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,h=function(D){return !0}("undefined"!=typeof window?window.location.host:""),c=/\s+/g,F=function _scrambleText(D,u){for(var F=u.length,C="";-1<--D;)C+=u[~~(Math.random()*F)];return C},u="ABCDEFGHIJKLMNOPQRSTUVWXYZ",C=u.toLowerCase(),f={upperCase:new a(u),lowerCase:new a(C),upperAndLowerCase:new a(u+C)},e={version:"3.12.3",name:"scrambleText",register:function register(D){E=D,v()},init:function init(D,u,F){if(s||v(),this.prop="innerHTML"in D?"innerHTML":"textContent"in D?"textContent":0,this.prop){this.target=D,"object"!=typeof u&&(u={text:u});var C,e,E,t,n=u.text||u.value||"",i=!1!==u.trim,r=this;return r.delimiter=C=u.delimiter||"",r.original=emojiSafeSplit(getText(D).replace(c," ").split("&nbsp;").join(""),C,i),"{original}"!==n&&!0!==n&&null!=n||(n=r.original.join(C)),r.text=emojiSafeSplit((n||"").replace(c," "),C,i),r.hasClass=!(!u.newClass&&!u.oldClass),r.newClass=u.newClass,r.oldClass=u.oldClass,t=""===C,r.textHasEmoji=t&&!!r.text.emoji,r.charsHaveEmoji=!!u.chars&&!!emojiSafeSplit(u.chars).emoji,r.length=t?r.original.length:r.original.join(C).length,r.lengthDif=(t?r.text.length:r.text.join(C).length)-r.length,r.fillChar=u.fillChar||u.chars&&~u.chars.indexOf(" ")?"&nbsp;":"",r.charSet=E=f[u.chars||"upperCase"]||new a(u.chars),r.speed=.05/(u.speed||1),r.prevScrambleTime=0,r.setIndex=20*Math.random()|0,(e=r.length+Math.max(r.lengthDif,0))>E.length&&E.grow(e),r.chars=E.sets[r.setIndex],r.revealDelay=u.revealDelay||0,r.tweenLength=!1!==u.tweenLength,r.tween=F,r.rightToLeft=!!u.rightToLeft,r._props.push("scrambleText","text"),h}},render:function render(D,u){var F,C,e,E,t,n,i,r,l,o,a,s=u.target,B=u.prop,A=u.text,h=u.delimiter,c=u.tween,f=u.prevScrambleTime,d=u.revealDelay,p=u.setIndex,g=u.chars,m=u.charSet,w=u.length,x=u.textHasEmoji,S=u.charsHaveEmoji,j=u.lengthDif,v=u.tweenLength,b=u.oldClass,T=u.newClass,y=u.rightToLeft,_=u.fillChar,L=u.speed,M=u.original,H=u.hasClass,O=A.length,W=c._time,P=W-f;d&&(c._from&&(W=c._dur-W),D=0===W?0:W<d?1e-6:W===c._dur?1:c._ease((W-d)/(c._dur-d))),D<0?D=0:1<D&&(D=1),y&&(D=1-D),F=~~(D*O+.5),E=D?((L<P||P<-L)&&(u.setIndex=p=(p+(19*Math.random()|0))%20,u.chars=m.sets[p],u.prevScrambleTime+=P),g):M.join(h),a=c._from?D:1-D,o=w+(v?c._from?a*a*a:1-a*a*a:1)*j,E=y?1!==D||!c._from&&"isFromStart"!==c.data?(i=A.slice(F).join(h),e=S?emojiSafeSplit(E).slice(0,o-(x?emojiSafeSplit(i):i).length+.5|0).join(""):E.substr(0,o-(x?emojiSafeSplit(i):i).length+.5|0),i):(e="",M.join(h)):(e=A.slice(0,F).join(h),C=(x?emojiSafeSplit(e):e).length,S?emojiSafeSplit(E).slice(C,o+.5|0).join(""):E.substr(C,o-C+.5|0)),i=H?((t=(r=y?b:T)&&0!=F)?"<span class='"+r+"'>":"")+e+(t?"</span>":"")+((n=(l=y?T:b)&&F!==O)?"<span class='"+l+"'>":"")+h+E+(n?"</span>":""):e+h+E,s[B]="&nbsp;"===_&&~i.indexOf("  ")?i.split("  ").join("&nbsp;&nbsp;"):i}};e.emojiSafeSplit=emojiSafeSplit,e.getText=getText,i()&&E.registerPlugin(e),D.ScrambleTextPlugin=e,D.default=e;if (typeof(window)==="undefined"||window!==D){Object.defineProperty(D,"__esModule",{value:!0})} else {delete D.default}});



/*!
 * SplitText 3.12.3
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(D,u){"object"==typeof exports&&"undefined"!=typeof module?u(exports):"function"==typeof define&&define.amd?define(["exports"],u):u((D=D||self).window=D.window||{})}(this,function(u){"use strict";var b=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function n(D){U=document,e=window,(i=i||D||e.gsap||console.warn("Please gsap.registerPlugin(SplitText)"))&&(r=i.utils.toArray,s=i.core.context||function(){},t=1)}function q(){return String.fromCharCode.apply(null,arguments)}function v(D){return e.getComputedStyle(D)}function w(D){return"absolute"===D.position||!0===D.absolute}function x(D,u){for(var e,t=u.length;-1<--t;)if(e=u[t],D.substr(0,e.length)===e)return e.length}function z(D,u){void 0===D&&(D="");var e=~D.indexOf("++"),t=1;return e&&(D=D.split("++").join("")),function(){return"<"+u+" style='position:relative;display:inline-block;'"+(D?" class='"+D+(e?t++:"")+"'>":">")}}function A(D,u,e){var t=D.nodeType;if(1===t||9===t||11===t)for(D=D.firstChild;D;D=D.nextSibling)A(D,u,e);else 3!==t&&4!==t||(D.nodeValue=D.nodeValue.split(u).join(e))}function B(D,u){for(var e=u.length;-1<--e;)D.push(u[e])}function C(D,u,e){for(var t;D&&D!==u;){if(t=D._next||D.nextSibling)return t.textContent.charAt(0)===e;D=D.parentNode||D._parent}}function D(u){var e,t,F=r(u.childNodes),i=F.length;for(e=0;e<i;e++)(t=F[e])._isSplit?D(t):e&&t.previousSibling&&3===t.previousSibling.nodeType?(t.previousSibling.nodeValue+=3===t.nodeType?t.nodeValue:t.firstChild.nodeValue,u.removeChild(t)):3!==t.nodeType&&(u.insertBefore(t.firstChild,t),u.removeChild(t))}function E(D,u){return parseFloat(u[D])||0}function F(u,e,t,F,i,n,s){var r,o,l,d,a,p,h,f,c,g,x,y,b=v(u),S=E("paddingLeft",b),_=-999,m=E("borderBottomWidth",b)+E("borderTopWidth",b),q=E("borderLeftWidth",b)+E("borderRightWidth",b),T=E("paddingTop",b)+E("paddingBottom",b),N=E("paddingLeft",b)+E("paddingRight",b),L=E("fontSize",b)*(e.lineThreshold||.2),W=b.textAlign,H=[],O=[],j=[],k=e.wordDelimiter||" ",V=e.tag?e.tag:e.span?"span":"div",M=e.type||e.split||"chars,words,lines",R=i&&~M.indexOf("lines")?[]:null,P=~M.indexOf("words"),z=~M.indexOf("chars"),G=w(e),$=e.linesClass,I=~($||"").indexOf("++"),J=[],K="flex"===b.display,Q=u.style.display;for(I&&($=$.split("++").join("")),K&&(u.style.display="block"),l=(o=u.getElementsByTagName("*")).length,a=[],r=0;r<l;r++)a[r]=o[r];if(R||G)for(r=0;r<l;r++)((p=(d=a[r]).parentNode===u)||G||z&&!P)&&(y=d.offsetTop,R&&p&&Math.abs(y-_)>L&&("BR"!==d.nodeName||0===r)&&(h=[],R.push(h),_=y),G&&(d._x=d.offsetLeft,d._y=y,d._w=d.offsetWidth,d._h=d.offsetHeight),R&&((d._isSplit&&p||!z&&p||P&&p||!P&&d.parentNode.parentNode===u&&!d.parentNode._isSplit)&&(h.push(d),d._x-=S,C(d,u,k)&&(d._wordEnd=!0)),"BR"===d.nodeName&&(d.nextSibling&&"BR"===d.nextSibling.nodeName||0===r)&&R.push([])));for(r=0;r<l;r++)if(p=(d=a[r]).parentNode===u,"BR"!==d.nodeName)if(G&&(c=d.style,P||p||(d._x+=d.parentNode._x,d._y+=d.parentNode._y),c.left=d._x+"px",c.top=d._y+"px",c.position="absolute",c.display="block",c.width=d._w+1+"px",c.height=d._h+"px"),!P&&z)if(d._isSplit)for(d._next=o=d.nextSibling,d.parentNode.appendChild(d);o&&3===o.nodeType&&" "===o.textContent;)d._next=o.nextSibling,d.parentNode.appendChild(o),o=o.nextSibling;else d.parentNode._isSplit?(d._parent=d.parentNode,!d.previousSibling&&d.firstChild&&(d.firstChild._isFirst=!0),d.nextSibling&&" "===d.nextSibling.textContent&&!d.nextSibling.nextSibling&&J.push(d.nextSibling),d._next=d.nextSibling&&d.nextSibling._isFirst?null:d.nextSibling,d.parentNode.removeChild(d),a.splice(r--,1),l--):p||(y=!d.nextSibling&&C(d.parentNode,u,k),d.parentNode._parent&&d.parentNode._parent.appendChild(d),y&&d.parentNode.appendChild(U.createTextNode(" ")),"span"===V&&(d.style.display="inline"),H.push(d));else d.parentNode._isSplit&&!d._isSplit&&""!==d.innerHTML?O.push(d):z&&!d._isSplit&&("span"===V&&(d.style.display="inline"),H.push(d));else R||G?(d.parentNode&&d.parentNode.removeChild(d),a.splice(r--,1),l--):P||u.appendChild(d);for(r=J.length;-1<--r;)J[r].parentNode.removeChild(J[r]);if(R){for(G&&(g=U.createElement(V),u.appendChild(g),x=g.offsetWidth+"px",y=g.offsetParent===u?0:u.offsetLeft,u.removeChild(g)),c=u.style.cssText,u.style.cssText="display:none;";u.firstChild;)u.removeChild(u.firstChild);for(f=" "===k&&(!G||!P&&!z),r=0;r<R.length;r++){for(h=R[r],(g=U.createElement(V)).style.cssText="display:block;text-align:"+W+";position:"+(G?"absolute;":"relative;"),$&&(g.className=$+(I?r+1:"")),j.push(g),l=h.length,o=0;o<l;o++)"BR"!==h[o].nodeName&&(d=h[o],g.appendChild(d),f&&d._wordEnd&&g.appendChild(U.createTextNode(" ")),G&&(0===o&&(g.style.top=d._y+"px",g.style.left=S+y+"px"),d.style.top="0px",y&&(d.style.left=d._x-y+"px")));0===l?g.innerHTML="&nbsp;":P||z||(D(g),A(g,String.fromCharCode(160)," ")),G&&(g.style.width=x,g.style.height=d._h+"px"),u.appendChild(g)}u.style.cssText=c}G&&(s>u.clientHeight&&(u.style.height=s-T+"px",u.clientHeight<s&&(u.style.height=s+m+"px")),n>u.clientWidth&&(u.style.width=n-N+"px",u.clientWidth<n&&(u.style.width=n+q+"px"))),K&&(Q?u.style.display=Q:u.style.removeProperty("display")),B(t,H),P&&B(F,O),B(i,j)}function G(D,u,e,t){function sb(D){return D===p||D===m&&" "===p}var F,i,n,C,s,E,r,o,l=u.tag?u.tag:u.span?"span":"div",d=~(u.type||u.split||"chars,words,lines").indexOf("chars"),a=w(u),p=u.wordDelimiter||" ",h=" "!==p?"":a?"&#173; ":" ",f="</"+l+">",B=1,c=u.specialChars?"function"==typeof u.specialChars?u.specialChars:x:null,g=U.createElement("div"),y=D.parentNode;for(y.insertBefore(g,D),g.textContent=D.nodeValue,y.removeChild(D),r=-1!==(F=function getText(D){var u=D.nodeType,e="";if(1===u||9===u||11===u){if("string"==typeof D.textContent)return D.textContent;for(D=D.firstChild;D;D=D.nextSibling)e+=getText(D)}else if(3===u||4===u)return D.nodeValue;return e}(D=g)).indexOf("<"),!1!==u.reduceWhiteSpace&&(F=F.replace(_," ").replace(S,"")),r&&(F=F.split("<").join("{{LT}}")),s=F.length,i=(" "===F.charAt(0)?h:"")+e(),n=0;n<s;n++)if(E=F.charAt(n),c&&(o=c(F.substr(n),u.specialChars)))E=F.substr(n,o||1),i+=d&&" "!==E?t()+E+"</"+l+">":E,n+=o-1;else if(sb(E)&&!sb(F.charAt(n-1))&&n){for(i+=B?f:"",B=0;sb(F.charAt(n+1));)i+=h,n++;n===s-1?i+=h:")"!==F.charAt(n+1)&&(i+=h+e(),B=1)}else"{"===E&&"{{LT}}"===F.substr(n,6)?(i+=d?t()+"{{LT}}</"+l+">":"{{LT}}",n+=5):55296<=E.charCodeAt(0)&&E.charCodeAt(0)<=56319||65024<=F.charCodeAt(n+1)&&F.charCodeAt(n+1)<=65039?(C=((F.substr(n,12).split(b)||[])[1]||"").length||2,i+=d&&" "!==E?t()+F.substr(n,C)+"</"+l+">":F.substr(n,C),n+=C-1):i+=d&&" "!==E?t()+E+"</"+l+">":E;D.outerHTML=i+(B?f:""),r&&A(y,"{{LT}}","<")}function H(D,u,e,t){var F,i,n=r(D.childNodes),C=n.length,s=w(u);if(3!==D.nodeType||1<C){for(u.absolute=!1,F=0;F<C;F++)(i=n[F])._next=i._isFirst=i._parent=i._wordEnd=null,3===i.nodeType&&!/\S+/.test(i.nodeValue)||(s&&3!==i.nodeType&&"inline"===v(i).display&&(i.style.display="inline-block",i.style.position="relative"),i._isSplit=!0,H(i,u,e,t));return u.absolute=s,void(D._isSplit=!0)}G(D,u,e,t)}var U,e,t,i,s,r,o,S=/(?:\r|\n|\t\t)/g,_=/(?:\s\s+)/g,m=String.fromCharCode(160),l="SplitText",d=q(103,114,101,101,110,115,111,99,107,46,99,111,109),a=q(103,115,97,112,46,99,111,109),p=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,h=function(D){return !0}("undefined"!=typeof window?window.location.host:""),f=((o=SplitText.prototype).split=function split(D){this.isSplit&&this.revert(),this.vars=D=D||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var u,e,t,i=this.elements.length,n=D.tag?D.tag:D.span?"span":"div",C=z(D.wordsClass,n),s=z(D.charsClass,n);-1<--i;)t=this.elements[i],this._originals[i]={html:t.innerHTML,style:t.getAttribute("style")},u=t.clientHeight,e=t.clientWidth,H(t,D,C,s),F(t,D,this.chars,this.words,this.lines,e,u);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},o.revert=function revert(){var e=this._originals;if(!e)throw"revert() call wasn't scoped properly.";return this.elements.forEach(function(D,u){D.innerHTML=e[u].html,D.setAttribute("style",e[u].style)}),this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},SplitText.create=function create(D,u){return new SplitText(D,u)},SplitText);function SplitText(D,u){t||n(),this.elements=r(D),this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=u||{},s(this),h&&this.split(u)}f.version="3.12.3",f.register=n,u.SplitText=f,u.default=f;if (typeof(window)==="undefined"||window!==u){Object.defineProperty(u,"__esModule",{value:!0})} else {delete u.default}});



/*!
 * InertiaPlugin 3.12.3
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function m(){return n||"undefined"!=typeof window&&(n=window.gsap)}function p(t){return c(t).id}function q(t){return f[p("string"==typeof t?g(t)[0]:t)]}function r(t){var e,n=o;if(.05<=t-s)for(s=t;n;)((e=n.g(n.t,n.p))!==n.v1||.2<t-n.t1)&&(n.v2=n.v1,n.v1=e,n.t2=n.t1,n.t1=t),n=n._next}function t(){(n=m())&&(g=n.utils.toArray,i=n.utils.getUnit,c=n.core.getCache,a=n.ticker,l=1)}function u(t,e,n,r){this.t=t,this.p=e,this.g=t._gsap.get,this.rCap=d[n||i(this.g(t,e))],this.v1=this.v2=0,this.t1=this.t2=a.time,r&&((this._next=r)._prev=this)}var n,l,g,i,o,a,s,c,f={},d={deg:360,rad:2*Math.PI},h=function(){function VelocityTracker(e,n){l||t(),this.target=g(e)[0],(f[p(this.target)]=this)._props={},n&&this.add(n)}VelocityTracker.register=function register(e){n=e,t()};var e=VelocityTracker.prototype;return e.get=function get(t,e){var n,r,i=this._props[t]||console.warn("Not tracking "+t+" velocity.");return n=parseFloat(e?i.v1:i.g(i.t,i.p))-parseFloat(i.v2),(r=i.rCap)&&(n%=r)!==n%(r/2)&&(n=n<0?n+r:n-r),function _round(t){return Math.round(1e4*t)/1e4}(n/((e?i.t1:a.time)-i.t2))},e.getAll=function getAll(){var t,e={},n=this._props;for(t in n)e[t]=this.get(t);return e},e.isTracking=function isTracking(t){return t in this._props},e.add=function add(t,e){t in this._props||(o||(a.add(r),s=a.time),o=this._props[t]=new u(this.target,t,e,o))},e.remove=function remove(t){var e,n,i=this._props[t];i&&(e=i._prev,n=i._next,e&&(e._next=n),n?n._prev=e:o===i&&(a.remove(r),o=0),delete this._props[t])},e.kill=function kill(t){for(var e in this._props)this.remove(e);t||delete f[p(this.target)]},VelocityTracker.track=function track(e,n,r){l||t();for(var i,o,a=[],s=g(e),c=n.split(","),u=(r||"").split(","),f=s.length;f--;){for(i=q(s[f])||new VelocityTracker(s[f]),o=c.length;o--;)i.add(c[o],u[o]||u[0]);a.push(i)}return a},VelocityTracker.untrack=function untrack(t,e){var n=(e||"").split(",");g(t).forEach(function(t){var e=q(t);e&&(n.length?n.forEach(function(t){return e.remove(t)}):e.kill(1))})},VelocityTracker.isTracking=function isTracking(t,e){var n=q(t);return n&&n.isTracking(e)},VelocityTracker.getVelocity=function getVelocity(t,e){var n=q(t);return n&&n.isTracking(e)?n.get(e):console.warn("Not tracking velocity of "+e)},VelocityTracker}();h.getByTarget=q,m()&&n.registerPlugin(h);function L(){return v||"undefined"!=typeof window&&(v=window.gsap)&&v.registerPlugin&&v}function N(t){return"number"==typeof t}function O(t){return"object"==typeof t}function P(t){return"function"==typeof t}function S(){return String.fromCharCode.apply(null,arguments)}function Y(t){return t}function aa(t){return Math.round(1e4*t)/1e4}function ba(t,e,n){for(var r in e)r in t||r===n||(t[r]=e[r]);return t}function ca(t){var e,n,r={};for(e in t)r[e]=O(n=t[e])&&!D(n)?ca(n):n;return r}function da(t,e,n,r,i){var o,a,s,c,u=e.length,f=0,l=$;if(O(t)){for(;u--;){for(s in o=e[u],a=0,t)a+=(c=o[s]-t[s])*c;a<l&&(f=u,l=a)}if((i||$)<$&&i<Math.sqrt(l))return t}else for(;u--;)(a=(o=e[u])-t)<0&&(a=-a),a<l&&r<=o&&o<=n&&(f=u,l=a);return e[f]}function ea(t,e,n,r,i,o,a){if("auto"===t.end)return t;var s,c,u=t.end;if(n=isNaN(n)?$:n,r=isNaN(r)?-$:r,O(e)){if(s=e.calculated?e:(P(u)?u(e,a):da(e,u,n,r,o))||e,!e.calculated){for(c in s)e[c]=s[c];e.calculated=!0}s=s[i]}else s=P(u)?u(e,a):D(u)?da(e,u,n,r,o):parseFloat(u);return n<s?s=n:s<r&&(s=r),{max:s,min:s,unitFactor:t.unitFactor}}function fa(t,e,n){return isNaN(t[e])?n:+t[e]}function ga(t,e){return.05*e*t/k}function ha(t,e,n){return Math.abs((e-t)*k/n/.05)}function ja(t,e,n,r){if(e.linkedProps){var i,o,a,s,c,u,f=e.linkedProps.split(","),l={};for(i=0;i<f.length;i++)(a=e[o=f[i]])&&(s=N(a.velocity)?a.velocity:(c=c||C(t))&&c.isTracking(o)?c.get(o):0,u=Math.abs(s/fa(a,"resistance",r)),l[o]=parseFloat(n(t,o))+ga(s,u));return l}}function la(){(v=L())&&(y=v.parseEase,T=v.utils.toArray,b=v.utils.getUnit,V=v.core.getCache,j=v.utils.clamp,A=v.core.getStyleSaver,E=v.core.reverting||function(){},w=y("power3"),k=w(.05),F=v.core.PropTween,v.config({resistance:100,unitFactors:{time:1e3,totalTime:1e3,progress:1e3,totalProgress:1e3}}),x=v.config(),v.registerPlugin(h),_=1)}var v,_,y,T,w,x,b,F,V,k,j,M,A,E,C=h.getByTarget,W="InertiaPlugin",I=S(103,114,101,101,110,115,111,99,107,46,99,111,109),B=S(103,115,97,112,46,99,111,109),R=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,U=function(t){return !0}("undefined"!=typeof window?window.location.host:""),D=Array.isArray,$=1e10,z={resistance:1,checkpoint:1,preventOvershoot:1,linkedProps:1,radius:1,duration:1},G={version:"3.12.3",name:"inertia",register:function register(t){v=t,la()},init:function init(t,e,n,r,i){_||la();var o=C(t);if("auto"===e){if(!o)return void console.warn("No inertia tracking on "+t+". InertiaPlugin.track(target) first.");e=o.getAll()}this.styles=A&&"object"==typeof t.style&&A(t),this.target=t,this.tween=n,M=e;var a,s,c,u,f,l,g,d,p,h=t._gsap,v=h.get,y=e.duration,m=O(y),S=e.preventOvershoot||m&&0===y.overshoot,w=fa(e,"resistance",x.resistance),k=N(y)?y:function _calculateTweenDuration(t,e,n,r,i,o){if(void 0===n&&(n=10),void 0===r&&(r=.2),void 0===i&&(i=1),void 0===o&&(o=0),function _isString(t){return"string"==typeof t}(t)&&(t=T(t)[0]),!t)return 0;var a,s,c,u,f,l,g,d,p,h,v=0,y=$,m=e.inertia||e,S=V(t).get,w=fa(m,"resistance",x.resistance);for(a in h=ja(t,m,S,w),m)z[a]||(s=m[a],O(s)||((d=d||C(t))&&d.isTracking(a)?s=N(s)?{velocity:s}:{velocity:d.get(a)}:(u=+s||0,c=Math.abs(u/w))),O(s)&&(u=N(s.velocity)?s.velocity:(d=d||C(t))&&d.isTracking(a)?d.get(a):0,c=j(r,n,Math.abs(u/fa(s,"resistance",w))),l=(f=parseFloat(S(t,a))||0)+ga(u,c),"end"in s&&(s=ea(s,h&&a in h?h:l,s.max,s.min,a,m.radius,u),o&&(M===e&&(M=m=ca(e)),m[a]=ba(s,m[a],"end"))),"max"in s&&l>+s.max+1e-10?(p=s.unitFactor||x.unitFactors[a]||1,(g=f>s.max&&s.min!==s.max||-15<u*p&&u*p<45?r+.1*(n-r):ha(f,s.max,u))+i<y&&(y=g+i)):"min"in s&&l<s.min-1e-10&&(p=s.unitFactor||x.unitFactors[a]||1,(g=f<s.min&&s.min!==s.max||-45<u*p&&u*p<15?r+.1*(n-r):ha(f,s.min,u))+i<y&&(y=g+i)),v<g&&(v=g)),v<c&&(v=c));return y<v&&(v=y),n<v?n:v<r?r:v}(t,e,m&&y.max||10,m&&y.min||.2,m&&"overshoot"in y?+y.overshoot:S?0:1,!0);for(a in e=M,M=0,p=ja(t,e,v,w),e)z[a]||(s=e[a],P(s)&&(s=s(r,t,i)),N(s)?f=s:O(s)&&!isNaN(s.velocity)?f=+s.velocity:o&&o.isTracking(a)?f=o.get(a):console.warn("ERROR: No velocity was defined for "+t+" property: "+a),l=ga(f,k),d=0,c=v(t,a),u=b(c),c=parseFloat(c),O(s)&&(g=c+l,"end"in s&&(s=ea(s,p&&a in p?p:g,s.max,s.min,a,e.radius,f)),"max"in s&&+s.max<g?S||s.preventOvershoot?l=s.max-c:d=s.max-c-l:"min"in s&&+s.min>g&&(S||s.preventOvershoot?l=s.min-c:d=s.min-c-l)),this._props.push(a),this.styles&&this.styles.save(a),this._pt=new F(this._pt,t,a,c,0,Y,0,h.set(t,a,this)),this._pt.u=u||0,this._pt.c1=l,this._pt.c2=d);return n.duration(k),U},render:function render(t,e){var n=e._pt;if((t=w(e.tween._time/e.tween._dur))||!E())for(;n;)n.set(n.t,n.p,aa(n.s+n.c1*t+n.c2*t*t)+n.u,n.d,t),n=n._next;else e.styles.revert()}};"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(t){return G[t]=h[t]}),L()&&v.registerPlugin(G),e.InertiaPlugin=G,e.VelocityTracker=h,e.default=G;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});



/*!
 * DrawSVGPlugin 3.12.3
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function l(){return"undefined"!=typeof window}function m(){return o||l()&&(o=window.gsap)&&o.registerPlugin&&o}function p(e){return Math.round(1e4*e)/1e4}function q(e){return parseFloat(e)||0}function r(e,t){var n=q(e);return~e.indexOf("%")?n/100*t:n}function s(e,t){return q(e.getAttribute(t))}function u(e,t,n,r,i,o){return M(Math.pow((q(n)-q(e))*i,2)+Math.pow((q(r)-q(t))*o,2))}function v(e){return console.warn(e)}function w(e){return"non-scaling-stroke"===e.getAttribute("vector-effect")}function z(){return String.fromCharCode.apply(null,arguments)}function F(e){if(!(e=x(e)[0]))return 0;var t,n,r,i,o,a,f,d=e.tagName.toLowerCase(),l=e.style,h=1,c=1;w(e)&&(c=e.getScreenCTM(),h=M(c.a*c.a+c.b*c.b),c=M(c.d*c.d+c.c*c.c));try{n=e.getBBox()}catch(e){v("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var g=n||{x:0,y:0,width:0,height:0},z=g.x,y=g.y,_=g.width,m=g.height;if(n&&(_||m)||!P[d]||(_=s(e,P[d][0]),m=s(e,P[d][1]),"rect"!==d&&"line"!==d&&(_*=2,m*=2),"line"===d&&(z=s(e,"x1"),y=s(e,"y1"),_=Math.abs(_-z),m=Math.abs(m-y))),"path"===d)i=l.strokeDasharray,l.strokeDasharray="none",t=e.getTotalLength()||0,p(h)!==p(c)&&!k&&(k=1)&&v("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),t*=(h+c)/2,l.strokeDasharray=i;else if("rect"===d)t=2*_*h+2*m*c;else if("line"===d)t=u(z,y,z+_,y+m,h,c);else if("polyline"===d||"polygon"===d)for(r=e.getAttribute("points").match(b)||[],"polygon"===d&&r.push(r[0],r[1]),t=0,o=2;o<r.length;o+=2)t+=u(r[o-2],r[o-1],r[o],r[o+1],h,c)||0;else"circle"!==d&&"ellipse"!==d||(a=_/2*h,f=m/2*c,t=Math.PI*(3*(a+f)-M((3*a+f)*(a+3*f))));return t||0}function G(e,t){if(!(e=x(e)[0]))return[0,0];t=t||F(e)+1;var n=f.getComputedStyle(e),r=n.strokeDasharray||"",i=q(n.strokeDashoffset),o=r.indexOf(",");return o<0&&(o=r.indexOf(" ")),t<(r=o<0?t:q(r.substr(0,o)))&&(r=t),[-i||0,r-i||0]}function H(){l()&&(f=window,h=o=m(),x=o.utils.toArray,c=o.core.getStyleSaver,g=o.core.reverting||function(){},d=-1!==((f.navigator||{}).userAgent||"").indexOf("Edge"))}var o,x,f,d,h,k,c,g,b=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,P={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},M=Math.sqrt,a="DrawSVGPlugin",y=z(103,114,101,101,110,115,111,99,107,46,99,111,109),_=z(103,115,97,112,46,99,111,109),S=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,O=function(e){return !0}("undefined"!=typeof window?window.location.host:""),t={version:"3.12.3",name:"drawSVG",register:function register(e){o=e,H()},init:function init(e,t,n){if(!e.getBBox)return!1;h||H();var i,o,s,a=F(e);return this.styles=c&&c(e,"strokeDashoffset,strokeDasharray,strokeMiterlimit"),this.tween=n,this._style=e.style,this._target=e,t+""=="true"?t="0 100%":t?-1===(t+"").indexOf(" ")&&(t="0 "+t):t="0 0",o=function _parse(e,t,n){var i,o,s=e.indexOf(" ");return o=s<0?(i=void 0!==n?n+"":e,e):(i=e.substr(0,s),e.substr(s+1)),i=r(i,t),(o=r(o,t))<i?[o,i]:[i,o]}(t,a,(i=G(e,a))[0]),this._length=p(a),this._dash=p(i[1]-i[0]),this._offset=p(-i[0]),this._dashPT=this.add(this,"_dash",this._dash,p(o[1]-o[0]),0,0,0,0,0,1),this._offsetPT=this.add(this,"_offset",this._offset,p(-o[0]),0,0,0,0,0,1),d&&(s=f.getComputedStyle(e)).strokeLinecap!==s.strokeLinejoin&&(o=q(s.strokeMiterlimit),this.add(e.style,"strokeMiterlimit",o,o+.01)),this._live=w(e)||~(t+"").indexOf("live"),this._nowrap=~(t+"").indexOf("nowrap"),this._props.push("drawSVG"),O},render:function render(e,t){if(t.tween._time||!g()){var n,r,i,o,s=t._pt,a=t._style;if(s){for(t._live&&(n=F(t._target))!==t._length&&(r=n/t._length,t._length=n,t._offsetPT&&(t._offsetPT.s*=r,t._offsetPT.c*=r),t._dashPT?(t._dashPT.s*=r,t._dashPT.c*=r):t._dash*=r);s;)s.r(e,s.d),s=s._next;i=t._dash||e&&1!==e&&1e-4||0,n=t._length-i+.1,o=t._offset,i&&o&&i+Math.abs(o%t._length)>t._length-.2&&(o+=o<0?.1:-.1)&&(n+=.1),a.strokeDashoffset=i?o:o+.001,a.strokeDasharray=n<.2?"none":i?i+"px,"+(t._nowrap?999999:n)+"px":"0px, 999999px"}}else t.styles.revert()},getLength:F,getPosition:G};m()&&o.registerPlugin(t),e.DrawSVGPlugin=t,e.default=t;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});



/*!
 * MorphSVGPlugin 3.12.3
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(t){"use strict";function m(t){return"string"==typeof t}var T=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,S=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,b=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,r=/(^[#\.][a-z]|[a-y][a-z])/i,E=Math.PI/180,H=Math.sin,B=Math.cos,D=Math.abs,Q=Math.sqrt,s=function _isNumber(t){return"number"==typeof t},h=function _round(t){return Math.round(1e5*t)/1e5||0};function reverseSegment(t){var e,n=0;for(t.reverse();n<t.length;n+=2)e=t[n],t[n]=t[n+1],t[n+1]=e;t.reversed=!t.reversed}var N={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"};function convertToPath(t,e){var n,r,o,a,i,s,h,l,c,g,p,f,u,d,P,m,_,v,w,y,x,M,T=t.tagName.toLowerCase(),b=.552284749831;return"path"!==T&&t.getBBox?(s=function _createPath(t,e){var n,r=document.createElementNS("http://www.w3.org/2000/svg","path"),o=[].slice.call(t.attributes),a=o.length;for(e=","+e+",";-1<--a;)n=o[a].nodeName.toLowerCase(),e.indexOf(","+n+",")<0&&r.setAttributeNS(null,n,o[a].nodeValue);return r}(t,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),M=function _attrToObj(t,e){for(var n=e?e.split(","):[],r={},o=n.length;-1<--o;)r[n[o]]=+t.getAttribute(n[o])||0;return r}(t,N[T]),"rect"===T?(a=M.rx,i=M.ry||a,r=M.x,o=M.y,g=M.width-2*a,p=M.height-2*i,n=a||i?"M"+(m=(d=(u=r+a)+g)+a)+","+(v=o+i)+" V"+(w=v+p)+" C"+[m,y=w+i*b,P=d+a*b,x=w+i,d,x,d-(d-u)/3,x,u+(d-u)/3,x,u,x,f=r+a*(1-b),x,r,y,r,w,r,w-(w-v)/3,r,v+(w-v)/3,r,v,r,_=o+i*(1-b),f,o,u,o,u+(d-u)/3,o,d-(d-u)/3,o,d,o,P,o,m,_,m,v].join(",")+"z":"M"+(r+g)+","+o+" v"+p+" h"+-g+" v"+-p+" h"+g+"z"):"circle"===T||"ellipse"===T?(l="circle"===T?(a=i=M.r)*b:(a=M.rx,(i=M.ry)*b),n="M"+((r=M.cx)+a)+","+(o=M.cy)+" C"+[r+a,o+l,r+(h=a*b),o+i,r,o+i,r-h,o+i,r-a,o+l,r-a,o,r-a,o-l,r-h,o-i,r,o-i,r+h,o-i,r+a,o-l,r+a,o].join(",")+"z"):"line"===T?n="M"+M.x1+","+M.y1+" L"+M.x2+","+M.y2:"polyline"!==T&&"polygon"!==T||(n="M"+(r=(c=(t.getAttribute("points")+"").match(S)||[]).shift())+","+(o=c.shift())+" L"+c.join(","),"polygon"===T&&(n+=","+r+","+o+"z")),s.setAttribute("d",rawPathToString(s._gsRawPath=stringToRawPath(n))),e&&t.parentNode&&(t.parentNode.insertBefore(s,t),t.parentNode.removeChild(t)),s):t}function arcToSegment(t,e,n,r,o,a,i,s,h){if(t!==s||e!==h){n=D(n),r=D(r);var l=o%360*E,c=B(l),g=H(l),p=Math.PI,f=2*p,u=(t-s)/2,d=(e-h)/2,P=c*u+g*d,m=-g*u+c*d,_=P*P,v=m*m,w=_/(n*n)+v/(r*r);1<w&&(n=Q(w)*n,r=Q(w)*r);var y=n*n,x=r*r,M=(y*x-y*v-x*_)/(y*v+x*_);M<0&&(M=0);var T=(a===i?-1:1)*Q(M),b=n*m/r*T,S=-r*P/n*T,N=c*b-g*S+(t+s)/2,z=g*b+c*S+(e+h)/2,A=(P-b)/n,R=(m-S)/r,V=(-P-b)/n,O=(-m-S)/r,C=A*A+R*R,j=(R<0?-1:1)*Math.acos(A/Q(C)),Y=(A*O-R*V<0?-1:1)*Math.acos((A*V+R*O)/Q(C*(V*V+O*O)));isNaN(Y)&&(Y=p),!i&&0<Y?Y-=f:i&&Y<0&&(Y+=f),j%=f,Y%=f;var I,L=Math.ceil(D(Y)/(f/4)),W=[],F=Y/L,X=4/3*H(F/2)/(1+B(F/2)),G=c*n,U=g*n,k=g*-r,q=c*r;for(I=0;I<L;I++)P=B(o=j+I*F),m=H(o),A=B(o+=F),R=H(o),W.push(P-X*m,m+X*P,A+X*R,R-X*A,A,R);for(I=0;I<W.length;I+=2)P=W[I],m=W[I+1],W[I]=P*G+m*k+N,W[I+1]=P*U+m*q+z;return W[I-2]=s,W[I-1]=h,W}}function stringToRawPath(t){function Ac(t,e,n,r){c=(n-t)/3,g=(r-e)/3,s.push(t+c,e+g,n-c,r-g,n,r)}var e,n,r,o,a,i,s,h,l,c,g,p,f,u,d,P=(t+"").replace(b,function(t){var e=+t;return e<1e-4&&-1e-4<e?0:e}).match(T)||[],m=[],_=0,v=0,w=P.length,y=0,x="ERROR: malformed path: "+t;if(!t||!isNaN(P[0])||isNaN(P[1]))return console.log(x),m;for(e=0;e<w;e++)if(f=a,isNaN(P[e])?i=(a=P[e].toUpperCase())!==P[e]:e--,r=+P[e+1],o=+P[e+2],i&&(r+=_,o+=v),e||(h=r,l=o),"M"===a)s&&(s.length<8?--m.length:y+=s.length),_=h=r,v=l=o,s=[r,o],m.push(s),e+=2,a="L";else if("C"===a)i||(_=v=0),(s=s||[0,0]).push(r,o,_+1*P[e+3],v+1*P[e+4],_+=1*P[e+5],v+=1*P[e+6]),e+=6;else if("S"===a)c=_,g=v,"C"!==f&&"S"!==f||(c+=_-s[s.length-4],g+=v-s[s.length-3]),i||(_=v=0),s.push(c,g,r,o,_+=1*P[e+3],v+=1*P[e+4]),e+=4;else if("Q"===a)c=_+2/3*(r-_),g=v+2/3*(o-v),i||(_=v=0),_+=1*P[e+3],v+=1*P[e+4],s.push(c,g,_+2/3*(r-_),v+2/3*(o-v),_,v),e+=4;else if("T"===a)c=_-s[s.length-4],g=v-s[s.length-3],s.push(_+c,v+g,r+2/3*(_+1.5*c-r),o+2/3*(v+1.5*g-o),_=r,v=o),e+=2;else if("H"===a)Ac(_,v,_=r,v),e+=1;else if("V"===a)Ac(_,v,_,v=r+(i?v-_:0)),e+=1;else if("L"===a||"Z"===a)"Z"===a&&(r=h,o=l,s.closed=!0),("L"===a||.5<D(_-r)||.5<D(v-o))&&(Ac(_,v,r,o),"L"===a&&(e+=2)),_=r,v=o;else if("A"===a){if(u=P[e+4],d=P[e+5],c=P[e+6],g=P[e+7],n=7,1<u.length&&(u.length<3?(g=c,c=d,n--):(g=d,c=u.substr(2),n-=2),d=u.charAt(1),u=u.charAt(0)),p=arcToSegment(_,v,+P[e+1],+P[e+2],+P[e+3],+u,+d,(i?_:0)+1*c,(i?v:0)+1*g),e+=n,p)for(n=0;n<p.length;n++)s.push(p[n]);_=s[s.length-2],v=s[s.length-1]}else console.log(x);return(e=s.length)<6?(m.pop(),e=0):s[0]===s[e-2]&&s[1]===s[e-1]&&(s.closed=!0),m.totalPoints=y+e,m}function rawPathToString(t){s(t[0])&&(t=[t]);var e,n,r,o,a="",i=t.length;for(n=0;n<i;n++){for(o=t[n],a+="M"+h(o[0])+","+h(o[1])+" C",e=o.length,r=2;r<e;r++)a+=h(o[r++])+","+h(o[r++])+" "+h(o[r++])+","+h(o[r++])+" "+h(o[r++])+","+h(o[r])+" ";o.closed&&(a+="z")}return a}function y(){return a||"undefined"!=typeof window&&(a=window.gsap)&&a.registerPlugin&&a}function z(t){return"function"==typeof t}function M(t){return console&&console.warn(t)}function P(){return String.fromCharCode.apply(null,arguments)}function U(t){var e,n=t.length,r=0,o=0;for(e=0;e<n;e++)r+=t[e++],o+=t[e];return[r/(n/2),o/(n/2)]}function V(t){var e,n,r,o=t.length,a=t[0],i=a,s=t[1],h=s;for(r=6;r<o;r+=6)a<(e=t[r])?a=e:e<i&&(i=e),s<(n=t[r+1])?s=n:n<h&&(h=n);return t.centerX=(a+i)/2,t.centerY=(s+h)/2,t.size=(a-i)*(s-h)}function W(t,e){void 0===e&&(e=3);for(var n,r,o,a,i,s,h,l,c,g,p,f,u,d,P,m,_=t.length,v=t[0][0],w=v,y=t[0][1],x=y,M=1/e;-1<--_;)for(n=(i=t[_]).length,a=6;a<n;a+=6)for(c=i[a],g=i[a+1],p=i[a+2]-c,d=i[a+3]-g,f=i[a+4]-c,P=i[a+5]-g,u=i[a+6]-c,m=i[a+7]-g,s=e;-1<--s;)v<(r=((h=M*s)*h*u+3*(l=1-h)*(h*f+l*p))*h+c)?v=r:r<w&&(w=r),y<(o=(h*h*m+3*l*(h*P+l*d))*h+g)?y=o:o<x&&(x=o);return t.centerX=(v+w)/2,t.centerY=(y+x)/2,t.left=w,t.width=v-w,t.top=x,t.height=y-x,t.size=(v-w)*(y-x)}function X(t,e){return e.length-t.length}function Y(t,e){var n=t.size||V(t),r=e.size||V(e);return Math.abs(r-n)<(n+r)/20?e.centerX-t.centerX||e.centerY-t.centerY:r-n}function Z(t,e){var n,r,o=t.slice(0),a=t.length,i=a-2;for(e|=0,n=0;n<a;n++)r=(n+e)%i,t[n++]=o[r],t[n]=o[1+r]}function $(t,e,n,r,o){var a,i,s,h,l=t.length,c=0,g=l-2;for(n*=6,i=0;i<l;i+=6)h=t[a=(i+n)%g]-(e[i]-r),s=t[1+a]-(e[i+1]-o),c+=v(s*s+h*h);return c}function _(t,e,n){var r,o,a,i=t.length,s=U(t),h=U(e),l=h[0]-s[0],c=h[1]-s[1],g=$(t,e,0,l,c),p=0;for(a=6;a<i;a+=6)(o=$(t,e,a/6,l,c))<g&&(g=o,p=a);if(n)for(reverseSegment(r=t.slice(0)),a=6;a<i;a+=6)(o=$(r,e,a/6,l,c))<g&&(g=o,p=-a);return p/6}function aa(t,e,n){for(var r,o,a,i,s,h,l=t.length,c=1e20,g=0,p=0;-1<--l;)for(h=(r=t[l]).length,s=0;s<h;s+=6)o=r[s]-e,a=r[s+1]-n,(i=v(o*o+a*a))<c&&(c=i,g=r[s],p=r[s+1]);return[g,p]}function ba(t,e,n,r,o,a){var i,s,h,l,c=e.length,g=0,p=Math.min(t.size||V(t),e[n].size||V(e[n]))*r,f=1e20,u=t.centerX+o,d=t.centerY+a;for(i=n;i<c&&!((e[i].size||V(e[i]))<p);i++)s=e[i].centerX-u,h=e[i].centerY-d,(l=v(s*s+h*h))<f&&(g=i,f=l);return l=e[g],e.splice(g,1),l}function ca(t,e){var n,r,o,a,i,s,h,l,c,g,p,f,u,d,P=0,m=t.length,_=e/((m-2)/6);for(u=2;u<m;u+=6)for(P+=_;.999999<P;)n=t[u-2],r=t[u-1],o=t[u],a=t[u+1],i=t[u+2],s=t[u+3],h=t[u+4],l=t[u+5],c=n+(o-n)*(d=1/((Math.floor(P)||1)+1)),c+=((p=o+(i-o)*d)-c)*d,p+=(i+(h-i)*d-p)*d,g=r+(a-r)*d,g+=((f=a+(s-a)*d)-g)*d,f+=(s+(l-s)*d-f)*d,t.splice(u,4,n+(o-n)*d,r+(a-r)*d,c,g,c+(p-c)*d,g+(f-g)*d,p,f,i+(h-i)*d,s+(l-s)*d),u+=6,m+=6,P--;return t}function da(t,e,n,r,o){var a,i,s,h,l,c,g,p=e.length-t.length,f=0<p?e:t,u=0<p?t:e,d=0,P="complexity"===r?X:Y,m="position"===r?0:"number"==typeof r?r:.8,v=u.length,w="object"==typeof n&&n.push?n.slice(0):[n],y="reverse"===w[0]||w[0]<0,x="log"===n;if(u[0]){if(1<f.length&&(t.sort(P),e.sort(P),f.size||W(f),u.size||W(u),c=f.centerX-u.centerX,g=f.centerY-u.centerY,P===Y))for(v=0;v<u.length;v++)f.splice(v,0,ba(u[v],f,v,m,c,g));if(p)for(p<0&&(p=-p),f[0].length>u[0].length&&ca(u[0],(f[0].length-u[0].length)/6|0),v=u.length;d<p;)f[v].size||V(f[v]),h=(s=aa(u,f[v].centerX,f[v].centerY))[0],l=s[1],u[v++]=[h,l,h,l,h,l,h,l],u.totalPoints+=8,d++;for(v=0;v<t.length;v++)a=e[v],i=t[v],(p=a.length-i.length)<0?ca(a,-p/6|0):0<p&&ca(i,p/6|0),y&&!1!==o&&!i.reversed&&reverseSegment(i),(n=w[v]||0===w[v]?w[v]:"auto")&&(i.closed||Math.abs(i[0]-i[i.length-2])<.5&&Math.abs(i[1]-i[i.length-1])<.5?"auto"===n||"log"===n?(w[v]=n=_(i,a,!v||!1===o),n<0&&(y=!0,reverseSegment(i),n=-n),Z(i,6*n)):"reverse"!==n&&(v&&n<0&&reverseSegment(i),Z(i,6*(n<0?-n:n))):!y&&("auto"===n&&Math.abs(a[0]-i[0])+Math.abs(a[1]-i[1])+Math.abs(a[a.length-2]-i[i.length-2])+Math.abs(a[a.length-1]-i[i.length-1])>Math.abs(a[0]-i[i.length-2])+Math.abs(a[1]-i[i.length-1])+Math.abs(a[a.length-2]-i[0])+Math.abs(a[a.length-1]-i[1])||n%2)?(reverseSegment(i),w[v]=-1,y=!0):"auto"===n?w[v]=0:"reverse"===n&&(w[v]=-1),i.closed!==a.closed&&(i.closed=a.closed=!1));return x&&M("shapeIndex:["+w.join(",")+"]"),t.shapeIndex=w}}function ea(t,e,n,r,o){var a=stringToRawPath(t[0]),i=stringToRawPath(t[1]);da(a,i,e||0===e?e:"auto",n,o)&&(t[0]=rawPathToString(a),t[1]=rawPathToString(i),"log"!==r&&!0!==r||M('precompile:["'+t[0]+'","'+t[1]+'"]'))}function ga(t,e){var n,r,o,a,i,s,h,l=0,c=parseFloat(t[0]),g=parseFloat(t[1]),p=c+","+g+" ";for(n=.5*e/(.5*(o=t.length)-1),r=0;r<o-2;r+=2){if(l+=n,s=parseFloat(t[r+2]),h=parseFloat(t[r+3]),.999999<l)for(i=1/(Math.floor(l)+1),a=1;.999999<l;)p+=(c+(s-c)*i*a).toFixed(2)+","+(g+(h-g)*i*a).toFixed(2)+" ",l--,a++;p+=s+","+h+" ",c=s,g=h}return p}function ha(t){var e=t[0].match(L)||[],n=t[1].match(L)||[],r=n.length-e.length;0<r?t[0]=ga(e,r):t[1]=ga(n,-r)}function ia(e){return isNaN(e)?ha:function(t){ha(t),t[1]=function _offsetPoints(t,e){if(!e)return t;var n,r,o,a=t.match(L)||[],i=a.length,s="";for(n="reverse"===e?(r=i-1,-2):(r=(2*(parseInt(e,10)||0)+1+100*i)%i,2),o=0;o<i;o+=2)s+=a[r-1]+","+a[r]+" ",r=(r+n)%i;return s}(t[1],parseInt(e,10))}}function ka(t,e){for(var n,r,o,a,i,s,h,l,c,g,p,f,u=t.length,d=.2*(e||1);-1<--u;){for(p=(r=t[u]).isSmooth=r.isSmooth||[0,0,0,0],f=r.smoothData=r.smoothData||[0,0,0,0],p.length=4,l=r.length-2,h=6;h<l;h+=6)o=r[h]-r[h-2],a=r[h+1]-r[h-1],i=r[h+2]-r[h],s=r[h+3]-r[h+1],c=w(a,o),g=w(s,i),(n=Math.abs(c-g)<d)&&(f[h-2]=c,f[h+2]=g,f[h-1]=v(o*o+a*a),f[h+3]=v(i*i+s*s)),p.push(n,n,0,0,n,n);r[l]===r[0]&&r[1+l]===r[1]&&(o=r[0]-r[l-2],a=r[1]-r[l-1],i=r[2]-r[0],s=r[3]-r[1],c=w(a,o),g=w(s,i),Math.abs(c-g)<d&&(f[l-2]=c,f[2]=g,f[l-1]=v(o*o+a*a),f[3]=v(i*i+s*s),p[l-2]=p[l-1]=!0))}return t}function la(t){var e=t.trim().split(" ");return{x:(~t.indexOf("left")?0:~t.indexOf("right")?100:isNaN(parseFloat(e[0]))?50:parseFloat(e[0]))/100,y:(~t.indexOf("top")?0:~t.indexOf("bottom")?100:isNaN(parseFloat(e[1]))?50:parseFloat(e[1]))/100}}function oa(t,e,n,r){var o,a,i=this._origin,s=this._eOrigin,h=t[n]-i.x,l=t[n+1]-i.y,c=v(h*h+l*l),g=w(l,h);return h=e[n]-s.x,l=e[n+1]-s.y,a=function _shortAngle(t){return t!==t%p?t+(t<0?f:-f):t}(o=w(l,h)-g),!r&&j&&Math.abs(a+j.ca)<u&&(r=j),this._anchorPT=j={_next:this._anchorPT,t:t,sa:g,ca:r&&a*r.ca<0&&Math.abs(a)>d?o:a,sl:c,cl:v(h*h+l*l)-c,i:n}}function pa(t){a=y(),n=n||a&&a.plugins.morphSVG,a&&n?(C=a.utils.toArray,n.prototype._tweenRotation=oa,I=1):t&&M("Please gsap.registerPlugin(MorphSVGPlugin)")}var a,C,j,I,n,w=Math.atan2,x=Math.cos,A=Math.sin,v=Math.sqrt,p=Math.PI,f=2*p,u=.3*p,d=.7*p,L=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,F=/(^[#\.][a-z]|[a-y][a-z])/i,G=/[achlmqstvz]/i,i="MorphSVGPlugin",l=P(103,114,101,101,110,115,111,99,107,46,99,111,109),c=P(103,115,97,112,46,99,111,109),g=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,k=function(t){return !0}("undefined"!=typeof window?window.location.host:""),q="Use MorphSVGPlugin.convertToPath() to convert to a path before morphing.",J={version:"3.12.3",name:"morphSVG",rawVars:1,register:function register(t,e){a=t,n=e,pa()},init:function init(t,e,n,r,o){if(I||pa(1),!e)return M("invalid shape"),!1;var a,i,s,h,l,c,g,p,f,u,d,P,m,_,v,w,y,x,T,b,S,N;if(z(e)&&(e=e.call(n,r,t,o)),"string"==typeof e||e.getBBox||e[0])e={shape:e};else if("object"==typeof e){for(i in a={},e)a[i]=z(e[i])&&"render"!==i?e[i].call(n,r,t,o):e[i];e=a}var A=t.nodeType?window.getComputedStyle(t):{},R=A.fill+"",V=!("none"===R||"0"===(R.match(L)||[])[3]||"evenodd"===A.fillRule),O=(e.origin||"50 50").split(",");if(l="POLYLINE"===(a=(t.nodeName+"").toUpperCase())||"POLYGON"===a,"PATH"!==a&&!l&&!e.prop)return M("Cannot morph a <"+a+"> element. "+q),!1;if(i="PATH"===a?"d":"points",!e.prop&&!z(t.setAttribute))return!1;if(h=function _parseShape(t,e,n){var r,o;return(!("string"==typeof t)||F.test(t)||(t.match(L)||[]).length<3)&&((r=C(t)[0])?(o=(r.nodeName+"").toUpperCase(),e&&"PATH"!==o&&(r=convertToPath(r,!1),o="PATH"),t=r.getAttribute("PATH"===o?"d":"points")||"",r===n&&(t=r.getAttributeNS(null,"data-original")||t)):(M("WARNING: invalid morph to: "+t),t=!1)),t}(e.shape||e.d||e.points||"","d"===i,t),l&&G.test(h))return M("A <"+a+"> cannot accept path data. "+q),!1;if(c=e.shapeIndex||0===e.shapeIndex?e.shapeIndex:"auto",g=e.map||J.defaultMap,this._prop=e.prop,this._render=e.render||J.defaultRender,this._apply="updateTarget"in e?e.updateTarget:J.defaultUpdateTarget,this._rnd=Math.pow(10,isNaN(e.precision)?2:+e.precision),this._tween=n,h){if(this._target=t,y="object"==typeof e.precompile,u=this._prop?t[this._prop]:t.getAttribute(i),this._prop||t.getAttributeNS(null,"data-original")||t.setAttributeNS(null,"data-original",u),"d"===i||this._prop){if(u=stringToRawPath(y?e.precompile[0]:u),d=stringToRawPath(y?e.precompile[1]:h),!y&&!da(u,d,c,g,V))return!1;for("log"!==e.precompile&&!0!==e.precompile||M('precompile:["'+rawPathToString(u)+'","'+rawPathToString(d)+'"]'),(S="linear"!==(e.type||J.defaultType))&&(u=ka(u,e.smoothTolerance),d=ka(d,e.smoothTolerance),u.size||W(u),d.size||W(d),b=la(O[0]),this._origin=u.origin={x:u.left+b.x*u.width,y:u.top+b.y*u.height},O[1]&&(b=la(O[1])),this._eOrigin={x:d.left+b.x*d.width,y:d.top+b.y*d.height}),this._rawPath=t._gsRawPath=u,m=u.length;-1<--m;)for(v=u[m],w=d[m],p=v.isSmooth||[],f=w.isSmooth||[],_=v.length,P=j=0;P<_;P+=2)w[P]===v[P]&&w[P+1]===v[P+1]||(S?p[P]&&f[P]?(x=v.smoothData,T=w.smoothData,N=P+(P===_-4?7-_:5),this._controlPT={_next:this._controlPT,i:P,j:m,l1s:x[P+1],l1c:T[P+1]-x[P+1],l2s:x[N],l2c:T[N]-x[N]},s=this._tweenRotation(v,w,P+2),this._tweenRotation(v,w,P,s),this._tweenRotation(v,w,N-1,s),P+=4):this._tweenRotation(v,w,P):(s=this.add(v,P,v[P],w[P],0,0,0,0,0,1),s=this.add(v,P+1,v[P+1],w[P+1],0,0,0,0,0,1)||s))}else s=this.add(t,"setAttribute",t.getAttribute(i)+"",h+"",r,o,0,ia(c),i);S&&(this.add(this._origin,"x",this._origin.x,this._eOrigin.x,0,0,0,0,0,1),s=this.add(this._origin,"y",this._origin.y,this._eOrigin.y,0,0,0,0,0,1)),s&&(this._props.push("morphSVG"),s.end=h,s.endProp=i)}return k},render:function render(t,e){for(var n,r,o,a,i,s,h,l,c,g,p,f,u=e._rawPath,d=e._controlPT,P=e._anchorPT,m=e._rnd,_=e._target,v=e._pt;v;)v.r(t,v.d),v=v._next;if(1===t&&e._apply)for(v=e._pt;v;)v.end&&(e._prop?_[e._prop]=v.end:_.setAttribute(v.endProp,v.end)),v=v._next;else if(u){for(;P;)i=P.sa+t*P.ca,a=P.sl+t*P.cl,P.t[P.i]=e._origin.x+x(i)*a,P.t[P.i+1]=e._origin.y+A(i)*a,P=P._next;for(r=t<.5?2*t*t:(4-2*t)*t-1;d;)f=(s=d.i)+(s===(o=u[d.j]).length-4?7-o.length:5),i=w(o[f]-o[s+1],o[f-1]-o[s]),g=A(i),p=x(i),l=o[s+2],c=o[s+3],a=d.l1s+r*d.l1c,o[s]=l-p*a,o[s+1]=c-g*a,a=d.l2s+r*d.l2c,o[f-1]=l+p*a,o[f]=c+g*a,d=d._next;if(_._gsRawPath=u,e._apply){for(n="",h=0;h<u.length;h++)for(a=(o=u[h]).length,n+="M"+(o[0]*m|0)/m+" "+(o[1]*m|0)/m+" C",s=2;s<a;s++)n+=(o[s]*m|0)/m+" ";e._prop?_[e._prop]=n:_.setAttribute("d",n)}}e._render&&u&&e._render.call(e._tween,u,_)},kill:function kill(){this._pt=this._rawPath=0},getRawPath:function getRawPath(t){var e,n=(t=m(t)&&r.test(t)&&document.querySelector(t)||t).getAttribute?t:0;return n&&(t=t.getAttribute("d"))?(n._gsPath||(n._gsPath={}),(e=n._gsPath[t])&&!e._dirty?e:n._gsPath[t]=stringToRawPath(t)):t?m(t)?stringToRawPath(t):s(t[0])?[t]:t:console.warn("Expecting a <path> element or an SVG path data string")},stringToRawPath:stringToRawPath,rawPathToString:rawPathToString,normalizeStrings:function normalizeStrings(t,e,n){var r=n.shapeIndex,o=n.map,a=[t,e];return ea(a,r,o),a},pathFilter:ea,pointsFilter:ha,getTotalSize:W,equalizeSegmentQuantity:da,convertToPath:function convertToPath$1(t,e){return C(t).map(function(t){return convertToPath(t,!1!==e)})},defaultType:"linear",defaultUpdateTarget:!0,defaultMap:"size"};y()&&a.registerPlugin(J),t.MorphSVGPlugin=J,t.default=J;if (typeof(window)==="undefined"||window!==t){Object.defineProperty(t,"__esModule",{value:!0})} else {delete t.default}});



/*!
 * CustomEase 3.12.3
 * https://gsap.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function m(e){return Math.round(1e5*e)/1e5||0}var b=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,w=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,Y=Math.PI/180,k=Math.sin,B=Math.cos,F=Math.abs,J=Math.sqrt;function arcToSegment(e,t,n,s,a,r,i,o,h){if(e!==o||t!==h){n=F(n),s=F(s);var u=a%360*Y,f=B(u),c=k(u),l=Math.PI,g=2*l,x=(e-o)/2,d=(t-h)/2,m=f*x+c*d,p=-c*x+f*d,y=m*m,M=p*p,v=y/(n*n)+M/(s*s);1<v&&(n=J(v)*n,s=J(v)*s);var C=n*n,E=s*s,b=(C*E-C*M-E*y)/(C*M+E*y);b<0&&(b=0);var w=(r===i?-1:1)*J(b),P=n*p/s*w,S=-s*m/n*w,N=f*P-c*S+(e+o)/2,D=c*P+f*S+(t+h)/2,T=(m-P)/n,V=(p-S)/s,_=(-m-P)/n,q=(-p-S)/s,A=T*T+V*V,R=(V<0?-1:1)*Math.acos(T/J(A)),G=(T*q-V*_<0?-1:1)*Math.acos((T*_+V*q)/J(A*(_*_+q*q)));isNaN(G)&&(G=l),!i&&0<G?G-=g:i&&G<0&&(G+=g),R%=g,G%=g;var L,O=Math.ceil(F(G)/(g/4)),j=[],z=G/O,I=4/3*k(z/2)/(1+B(z/2)),H=f*n,Q=c*n,Z=c*-s,U=f*s;for(L=0;L<O;L++)m=B(a=R+L*z),p=k(a),T=B(a+=z),V=k(a),j.push(m-I*p,p+I*m,T+I*V,V-I*T,T,V);for(L=0;L<j.length;L+=2)m=j[L],p=j[L+1],j[L]=m*H+p*Z+N,j[L+1]=m*Q+p*U+D;return j[L-2]=o,j[L-1]=h,j}}function stringToRawPath(e){function db(e,t,n,s){f=(n-e)/3,c=(s-t)/3,o.push(e+f,t+c,n-f,s-c,n,s)}var t,n,s,a,r,i,o,h,u,f,c,l,g,x,d,m=(e+"").replace(w,function(e){var t=+e;return t<1e-4&&-1e-4<t?0:t}).match(b)||[],p=[],y=0,M=0,v=m.length,C=0,E="ERROR: malformed path: "+e;if(!e||!isNaN(m[0])||isNaN(m[1]))return console.log(E),p;for(t=0;t<v;t++)if(g=r,isNaN(m[t])?i=(r=m[t].toUpperCase())!==m[t]:t--,s=+m[t+1],a=+m[t+2],i&&(s+=y,a+=M),t||(h=s,u=a),"M"===r)o&&(o.length<8?--p.length:C+=o.length),y=h=s,M=u=a,o=[s,a],p.push(o),t+=2,r="L";else if("C"===r)i||(y=M=0),(o=o||[0,0]).push(s,a,y+1*m[t+3],M+1*m[t+4],y+=1*m[t+5],M+=1*m[t+6]),t+=6;else if("S"===r)f=y,c=M,"C"!==g&&"S"!==g||(f+=y-o[o.length-4],c+=M-o[o.length-3]),i||(y=M=0),o.push(f,c,s,a,y+=1*m[t+3],M+=1*m[t+4]),t+=4;else if("Q"===r)f=y+2/3*(s-y),c=M+2/3*(a-M),i||(y=M=0),y+=1*m[t+3],M+=1*m[t+4],o.push(f,c,y+2/3*(s-y),M+2/3*(a-M),y,M),t+=4;else if("T"===r)f=y-o[o.length-4],c=M-o[o.length-3],o.push(y+f,M+c,s+2/3*(y+1.5*f-s),a+2/3*(M+1.5*c-a),y=s,M=a),t+=2;else if("H"===r)db(y,M,y=s,M),t+=1;else if("V"===r)db(y,M,y,M=s+(i?M-y:0)),t+=1;else if("L"===r||"Z"===r)"Z"===r&&(s=h,a=u,o.closed=!0),("L"===r||.5<F(y-s)||.5<F(M-a))&&(db(y,M,s,a),"L"===r&&(t+=2)),y=s,M=a;else if("A"===r){if(x=m[t+4],d=m[t+5],f=m[t+6],c=m[t+7],n=7,1<x.length&&(x.length<3?(c=f,f=d,n--):(c=d,f=x.substr(2),n-=2),d=x.charAt(1),x=x.charAt(0)),l=arcToSegment(y,M,+m[t+1],+m[t+2],+m[t+3],+x,+d,(i?y:0)+1*f,(i?M:0)+1*c),t+=n,l)for(n=0;n<l.length;n++)o.push(l[n]);y=o[o.length-2],M=o[o.length-1]}else console.log(E);return(t=o.length)<6?(p.pop(),t=0):o[0]===o[t-2]&&o[1]===o[t-1]&&(o.closed=!0),p.totalPoints=C+t,p}function p(){return M||"undefined"!=typeof window&&(M=window.gsap)&&M.registerPlugin&&M}function q(){(M=p())?(M.registerEase("_CE",n.create),a=1):console.warn("Please gsap.registerPlugin(CustomEase)")}function s(e){return~~(1e3*e+(e<0?-.5:.5))/1e3}function x(e,t,n,s,a,r,i,o,h,u,f){var c,l=(e+n)/2,g=(t+s)/2,d=(n+a)/2,m=(s+r)/2,p=(a+i)/2,y=(r+o)/2,M=(l+d)/2,v=(g+m)/2,C=(d+p)/2,E=(m+y)/2,b=(M+C)/2,w=(v+E)/2,P=i-e,S=o-t,N=Math.abs((n-i)*S-(s-o)*P),D=Math.abs((a-i)*S-(r-o)*P);return u||(u=[{x:e,y:t},{x:i,y:o}],f=1),u.splice(f||u.length-1,0,{x:b,y:w}),h*(P*P+S*S)<(N+D)*(N+D)&&(c=u.length,x(e,t,l,g,M,v,b,w,h,u,f),x(b,w,C,E,p,y,i,o,h,u,f+1+(u.length-c))),u}var M,a,t,y=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/gi,v=/[cLlsSaAhHvVtTqQ]/g,n=((t=CustomEase.prototype).setData=function setData(e,t){t=t||{};var n,s,a,r,i,o,h,u,f,c=(e=e||"0,0,1,1").match(y),l=1,g=[],d=[],m=t.precision||1,p=m<=1;if(this.data=e,(v.test(e)||~e.indexOf("M")&&e.indexOf("C")<0)&&(c=stringToRawPath(e)[0]),4===(n=c.length))c.unshift(0,0),c.push(1,1),n=8;else if((n-2)%6)throw"Invalid CustomEase";for(0==+c[0]&&1==+c[n-2]||function _normalize(e,t,n){n||0===n||(n=Math.max(+e[e.length-1],+e[1]));var s,a=-1*e[0],r=-n,i=e.length,o=1/(+e[i-2]+a),h=-t||(Math.abs(e[i-1]-e[1])<.01*(e[i-2]-e[0])?function _findMinimum(e){var t,n=e.length,s=1e20;for(t=1;t<n;t+=6)+e[t]<s&&(s=+e[t]);return s}(e)+r:+e[i-1]+r);for(h=h?1/h:-o,s=0;s<i;s+=2)e[s]=(+e[s]+a)*o,e[s+1]=(+e[s+1]+r)*h}(c,t.height,t.originY),this.segment=c,r=2;r<n;r+=6)s={x:+c[r-2],y:+c[r-1]},a={x:+c[r+4],y:+c[r+5]},g.push(s,a),x(s.x,s.y,+c[r],+c[r+1],+c[r+2],+c[r+3],a.x,a.y,1/(2e5*m),g,g.length-1);for(n=g.length,r=0;r<n;r++)h=g[r],u=g[r-1]||h,(h.x>u.x||u.y!==h.y&&u.x===h.x||h===u)&&h.x<=1?(u.cx=h.x-u.x,u.cy=h.y-u.y,u.n=h,u.nx=h.x,p&&1<r&&2<Math.abs(u.cy/u.cx-g[r-2].cy/g[r-2].cx)&&(p=0),u.cx<l&&(u.cx?l=u.cx:(u.cx=.001,r===n-1&&(u.x-=.001,l=Math.min(l,.001),p=0)))):(g.splice(r--,1),n--);if(i=1/(n=1/l+1|0),h=g[o=0],p){for(r=0;r<n;r++)f=r*i,h.nx<f&&(h=g[++o]),s=h.y+(f-h.x)/h.cx*h.cy,d[r]={x:f,cx:i,y:s,cy:0,nx:9},r&&(d[r-1].cy=s-d[r-1].y);d[n-1].cy=g[g.length-1].y-s}else{for(r=0;r<n;r++)h.nx<r*i&&(h=g[++o]),d[r]=h;o<g.length-1&&(d[r-1]=g[g.length-2])}return this.ease=function(e){var t=d[e*n|0]||d[n-1];return t.nx<e&&(t=t.n),t.y+(e-t.x)/t.cx*t.cy},(this.ease.custom=this).id&&M&&M.registerEase(this.id,this.ease),this},t.getSVGData=function getSVGData(e){return CustomEase.getSVGData(this,e)},CustomEase.create=function create(e,t,n){return new CustomEase(e,t,n).ease},CustomEase.register=function register(e){M=e,q()},CustomEase.get=function get(e){return M.parseEase(e)},CustomEase.getSVGData=function getSVGData(e,t){var n,a,r,i,o,h,u,f,c,l,g=(t=t||{}).width||100,x=t.height||100,d=t.x||0,p=(t.y||0)+x,y=M.utils.toArray(t.path)[0];if(t.invert&&(x=-x,p=0),"string"==typeof e&&(e=M.parseEase(e)),e.custom&&(e=e.custom),e instanceof CustomEase)n=function rawPathToString(e){!function _isNumber(e){return"number"==typeof e}(e[0])||(e=[e]);var t,n,s,a,r="",i=e.length;for(n=0;n<i;n++){for(a=e[n],r+="M"+m(a[0])+","+m(a[1])+" C",t=a.length,s=2;s<t;s++)r+=m(a[s++])+","+m(a[s++])+" "+m(a[s++])+","+m(a[s++])+" "+m(a[s++])+","+m(a[s])+" ";a.closed&&(r+="z")}return r}(function transformRawPath(e,t,n,s,a,r,i){for(var o,h,u,f,c,l=e.length;-1<--l;)for(h=(o=e[l]).length,u=0;u<h;u+=2)f=o[u],c=o[u+1],o[u]=f*t+c*s+r,o[u+1]=f*n+c*a+i;return e._dirty=1,e}([e.segment],g,0,0,-x,d,p));else{for(n=[d,p],i=1/(u=Math.max(5,200*(t.precision||1))),f=5/(u+=2),c=s(d+i*g),a=((l=s(p+e(i)*-x))-p)/(c-d),r=2;r<u;r++)o=s(d+r*i*g),h=s(p+e(r*i)*-x),(Math.abs((h-l)/(o-c)-a)>f||r===u-1)&&(n.push(c,l),a=(h-l)/(o-c)),c=o,l=h;n="M"+n.join(",")}return y&&y.setAttribute("d",n),n},CustomEase);function CustomEase(e,t,n){a||q(),this.id=e,this.setData(t,n)}p()&&M.registerPlugin(n),n.version="3.12.3",e.CustomEase=n,e.default=n;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});





/*!
 * CustomBounce 3.11.6
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).window=e.window||{})}(this,function(e){"use strict";function g(){return r||"undefined"!=typeof window&&(r=window.gsap)&&r.registerPlugin&&r}function h(e){r=g(),(j=r&&r.parseEase("_CE"))?(b=1,r.parseEase("bounce").config=function(e){return"object"==typeof e?t("",e):t("bounce("+e+")",{strength:+e})}):e&&console.warn("Please gsap.registerPlugin(CustomEase, CustomBounce)")}function i(e){var n,t=e.length,o=1/e[t-2];for(n=2;n<t;n+=2)e[n]=~~(e[n]*o*1e3)/1e3;e[t-2]=1}function l(){return String.fromCharCode.apply(null,arguments)}var r,b,j,u="CustomBounce",s=l(103,114,101,101,110,115,111,99,107,46,99,111,109),c=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,B=function(e){return !0}("undefined"!=typeof window?window.location.host:""),t=function _create(e,n){if(b||h(1),n=n||{},B){var t,o,l,r,u,s,c,a=Math.min(.999,n.strength||.7),f=a,d=(n.squash||0)/100,g=d,p=1/.03,w=.2,m=1,y=.1,C=[0,0,.07,0,.1,1,.1,1],v=[0,0,0,0,.1,0,.1,0];for(u=0;u<200&&(s=y+(w*=f*((f+1)/2)),r=1-(m*=a*a),o=(l=y+.49*w)+.8*(l-(t=y+m/p)),d&&(y+=d,t+=d,l+=d,o+=d,s+=d,c=d/g,v.push(y-d,0,y-d,c,y-d/2,c,y,c,y,0,y,0,y,-.6*c,y+(s-y)/6,0,s,0),C.push(y-d,1,y,1,y,1),d*=a*a),C.push(y,1,t,r,l,r,o,r,s,1,s,1),a*=.95,p=m/(s-o),y=s,!(.999<r));u++);if(n.endAtStart&&"false"!==n.endAtStart){if(l=-.1,C.unshift(l,1,l,1,-.07,0),g)for(l-=d=2.5*g,C.unshift(l,1,l,1,l,1),v.splice(0,6),v.unshift(l,0,l,0,l,1,l+d/2,1,l+d,1,l+d,0,l+d,0,l+d,-.6,l+d+.033,0),u=0;u<v.length;u+=2)v[u]-=l;for(u=0;u<C.length;u+=2)C[u]-=l,C[u+1]=1-C[u+1]}return d&&(i(v),v[2]="C"+v[2],j(n.squashID||e+"-squash","M"+v.join(","))),i(C),C[2]="C"+C[2],j(e,"M"+C.join(","))}},n=(CustomBounce.create=function create(e,n){return t(e,n)},CustomBounce.register=function register(e){r=e,h()},CustomBounce);function CustomBounce(e,n){this.ease=t(e,n)}g()&&r.registerPlugin(n),n.version="3.11.6",e.CustomBounce=n,e.default=n;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});



/*!
 * CustomWiggle 3.11.6
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((n=n||self).window=n.window||{})}(this,function(e){"use strict";function g(){return a||"undefined"!=typeof window&&(a=window.gsap)&&a.registerPlugin&&a}function i(n){return n}function j(n){if(!y)if(a=g(),C=a&&a.parseEase("_CE")){for(var e in W)W[e]=C("",W[e]);y=1,t("wiggle").config=function(n){return"object"==typeof n?t("",n):t("wiggle("+n+")",{wiggles:+n})}}else n&&console.warn("Please gsap.registerPlugin(CustomEase, CustomWiggle)")}function k(e,n){return"function"!=typeof e&&(e=a.parseEase(e)||C("",e)),e.custom||!n?e:function(n){return 1-e(n)}}function n(){return String.fromCharCode.apply(null,arguments)}var a,y,C,W={easeOut:"M0,1,C0.7,1,0.6,0,1,0",easeInOut:"M0,0,C0.1,0,0.24,1,0.444,1,0.644,1,0.6,0,1,0",anticipate:"M0,0,C0,0.222,0.024,0.386,0,0.4,0.18,0.455,0.65,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1",uniform:"M0,0,C0,0.95,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0"},s="CustomWiggle",u=n(103,114,101,101,110,115,111,99,107,46,99,111,109),f=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,v=function(e){return !0}("undefined"!=typeof window?window.location.host:""),t=function _create(n,e){y||j(1);var t,o,r,a,s,u,f,c,g,d=0|((e=e||{}).wiggles||10),l=1/d,p=l/2,w="anticipate"===e.type,m=W[e.type]||W.easeOut,h=i;if(v){if(w&&(h=m,m=W.easeOut),e.timingEase&&(h=k(e.timingEase)),e.amplitudeEase&&(m=k(e.amplitudeEase,!0)),c=[0,0,(u=h(p))/4,0,u/2,f=w?-m(p):m(p),u,f],"random"===e.type){for(c.length=4,t=h(l),o=2*Math.random()-1,g=2;g<d;g++)p=t,f=o,t=h(l*g),o=2*Math.random()-1,r=Math.atan2(o-c[c.length-3],t-c[c.length-4]),a=Math.cos(r)*l,s=Math.sin(r)*l,c.push(p-a,f-s,p,f,p+a,f+s);c.push(t,0,1,0)}else{for(g=1;g<d;g++)c.push(h(p+l/2),f),p+=l,f=(0<f?-1:1)*m(g*l),u=h(p),c.push(h(p-l/2),f,u,f);c.push(h(p+l/4),f,h(p+l/4),0,1,0)}for(g=c.length;-1<--g;)c[g]=~~(1e3*c[g])/1e3;return c[2]="C"+c[2],C(n,"M"+c.join(","))}},o=(CustomWiggle.create=function create(n,e){return t(n,e)},CustomWiggle.register=function register(n){a=n,j()},CustomWiggle);function CustomWiggle(n,e){this.ease=t(n,e)}g()&&a.registerPlugin(o),o.version="3.11.6",e.CustomWiggle=o,e.default=o;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});



/*!
 * ScrollSmoother 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * *** DO NOT DEPLOY THIS FILE ***
 * This is a trial version that only works locally and on domains like codepen.io and codesandbox.io.
 * Loading it on an unauthorized domain violates the license and will cause a redirect.
 * Get the unrestricted file by joining Club GSAP at https://gsap.com/pricing
 * @author: Jack Doyle, jack@greensock.com
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(){return"undefined"!=typeof window}function t(){return B||s()&&(B=window.gsap)&&B.registerPlugin&&B}function w(){return String.fromCharCode.apply(null,arguments)}function D(e){return Z.maxScroll(e||L)}var B,F,L,I,j,q,W,Y,Z,K,$,G,J,Q,X,i="ScrollSmoother",a=w(103,114,101,101,110,115,111,99,107,46,99,111,109),l=w(103,115,97,112,46,99,111,109),c=/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,r=(function(e){return !0}("undefined"!=typeof window?window.location.host:""),ScrollSmoother.register=function register(e){return F||(B=e||t(),s()&&window.document&&(L=window,I=document,j=I.documentElement,q=I.body),B&&(W=B.utils.toArray,Y=B.utils.clamp,$=B.parseEase("expo"),Q=B.core.context||function(){},Z=B.core.globals().ScrollTrigger,B.core.globals("ScrollSmoother",ScrollSmoother),q&&Z&&(X=B.delayedCall(.2,function(){return Z.isRefreshing||K&&K.refresh()}).pause(),G=Z.core._getVelocityProp,J=Z.core._inputObserver,ScrollSmoother.refresh=Z.refresh,F=1))),F},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(ScrollSmoother,[{key:"progress",get:function get(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),ScrollSmoother);function ScrollSmoother(t){var o=this;F||ScrollSmoother.register(B)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),t=this.vars=t||{},K&&K.kill(),Q(K=this);function Pa(){return U.update(-H)}function Ra(){return n.style.overflow="visible"}function Ta(e){e.update();var t=e.getTween();t&&(t.pause(),t._time=t._dur,t._tTime=t._tDur),g=!1,e.animation.progress(e.progress,!0)}function Ua(e,t){(e!==H&&!f||t)&&(x&&(e=Math.round(e)),k&&(n.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+e+", 0, 1)",n._gsap.y=e+"px"),M=e-H,H=e,Z.isUpdating||ScrollSmoother.isRefreshing||Z.update())}function Va(e){return arguments.length?(e<0&&(e=0),z.y=-e,g=!0,f?H=-e:Ua(-e),Z.isRefreshing?i.update():E(e/A),this):-H}function Ya(e){w.scrollTop=0,e.target.contains&&e.target.contains(w)||_&&!1===_(o,e)||(Z.isInViewport(e.target)||e.target===p||o.scrollTo(e.target,!1,"center center"),p=e.target)}function Za(t,e){if(t<e.start)return t;var r=isNaN(e.ratio)?1:e.ratio,n=e.end-e.start,o=t-e.start,i=e.offset||0,s=e.pins||[],a=s.offset||0,l=e._startClamp&&e.start<=0||e.pins&&e.pins.offset?0:e._endClamp&&e.end===D()?1:.5;return s.forEach(function(e){n-=e.distance,e.nativeStart<=t&&(o-=e.distance)}),a&&(o*=(n-a/r)/n),t+(o-i*l)/r-o}function _a(t,r){b.forEach(function(e){return function adjustEffectRelatedTriggers(e,t,r){r||(e.pins.length=e.pins.offset=0);var n,o,i,s,a,l,c,f,u=e.pins,d=e.markers;for(c=0;c<t.length;c++)if(f=t[c],e.trigger&&f.trigger&&e!==f&&(f.trigger===e.trigger||f.pinnedContainer===e.trigger||e.trigger.contains(f.trigger))&&(a=f._startNative||f._startClamp||f.start,l=f._endNative||f._endClamp||f.end,i=Za(a,e),s=f.pin&&0<l?i+(l-a):Za(l,e),f.setPositions(i,s,!0,(f._startClamp?Math.max(0,i):i)-a),f.markerStart&&d.push(B.quickSetter([f.markerStart,f.markerEnd],"y","px")),f.pin&&0<f.end&&!r)){if(n=f.end-f.start,o=e._startClamp&&f.start<0){if(0<e.start)return e.setPositions(0,e.end+(e._startNative-e.start),!0),void adjustEffectRelatedTriggers(e,t);n+=f.start,u.offset=-f.start}u.push({start:f.start,nativeStart:a,end:f.end,distance:n,trig:f}),e.setPositions(e.start,e.end+(o?-f.start:n),!0)}}(e,t,r)})}function ab(){Ra(),requestAnimationFrame(Ra),b&&(Z.getAll().forEach(function(e){e._startNative=e.start,e._endNative=e.end}),b.forEach(function(e){var t=e._startClamp||e.start,r=e.autoSpeed?Math.min(D(),e.end):t+Math.abs((e.end-t)/e.ratio),n=r-e.end;if((r-=n/2)<(t-=n/2)){var o=t;t=r,r=o}e._startClamp&&t<0?(n=(r=e.ratio<0?D():e.end/e.ratio)-e.end,t=0):(e.ratio<0||e._endClamp&&r>=D())&&(n=((r=D())-(t=e.ratio<0||1<e.ratio?0:r-(r-e.start)/e.ratio))*e.ratio-(e.end-e.start)),e.offset=n||1e-4,e.pins.length=e.pins.offset=0,e.setPositions(t,r,!0)}),_a(Z.sort())),U.reset()}function bb(){return Z.addEventListener("refresh",ab)}function cb(){return b&&b.forEach(function(e){return e.vars.onRefresh(e)})}function db(){return b&&b.forEach(function(e){return e.vars.onRefreshInit(e)}),cb}function eb(r,n,o,i){return function(){var e="function"==typeof n?n(o,i):n;e||0===e||(e=i.getAttribute("data-"+R+r)||("speed"===r?1:0)),i.setAttribute("data-"+R+r,e);var t="clamp("===(e+"").substr(0,6);return{clamp:t,value:t?e.substr(6,e.length-7):e}}}function fb(r,e,t,n,o){function qc(){e=u(),t=parseFloat(d().value),i=parseFloat(e.value)||1,a="auto"===e.value,c=a||s&&s._startClamp&&s.start<=0||p.offset?0:s&&s._endClamp&&s.end===D()?1:.5,l&&l.kill(),l=t&&B.to(r,{ease:$,overwrite:!1,y:"+=0",duration:t}),s&&(s.ratio=i,s.autoSpeed=a)}function rc(){g.y=h+"px",g.renderTransform(1),qc()}function uc(e){if(a){rc();var t=function _autoDistance(e,t){var r,n,o=e.parentNode||j,i=e.getBoundingClientRect(),s=o.getBoundingClientRect(),a=s.top-i.top,l=s.bottom-i.bottom,c=(Math.abs(a)>Math.abs(l)?a:l)/(1-t),f=-c*t;return 0<c&&(n=.5==(r=s.height/(L.innerHeight+s.height))?2*s.height:2*Math.min(s.height,Math.abs(-c*r/(2*r-1)))*(t||1),f+=t?-n*t:-n/2,c+=n),{change:c,offset:f}}(r,Y(0,1,-e.start/(e.end-e.start)));v=t.change,f=t.offset}else f=p.offset||0,v=(e.end-e.start-f)*(1-i);p.forEach(function(e){return v-=e.distance*(1-i)}),e.offset=v||.001,e.vars.onUpdate(e),l&&l.progress(1)}o=("function"==typeof o?o(n,r):o)||0;var i,s,a,l,c,f,u=eb("speed",e,n,r),d=eb("lag",t,n,r),h=B.getProperty(r,"y"),g=r._gsap,p=[],m=[],v=0;return qc(),(1!==i||a||l)&&(uc(s=Z.create({trigger:a?r.parentNode:r,start:function start(){return e.clamp?"clamp(top bottom+="+o+")":"top bottom+="+o},end:function end(){return e.value<0?"max":e.clamp?"clamp(bottom top-="+o+")":"bottom top-="+o},scroller:w,scrub:!0,refreshPriority:-999,onRefreshInit:rc,onRefresh:uc,onKill:function onKill(e){var t=b.indexOf(e);0<=t&&b.splice(t,1),rc()},onUpdate:function onUpdate(e){var t,r,n,o=h+v*(e.progress-c),i=p.length,s=0;if(e.offset){if(i){for(r=-H,n=e.end;i--;){if((t=p[i]).trig.isActive||r>=t.start&&r<=t.end)return void(l&&(t.trig.progress+=t.trig.direction<0?.001:-.001,t.trig.update(0,0,1),l.resetTo("y",parseFloat(g.y),-M,!0),N&&l.progress(1)));r>t.end&&(s+=t.distance),n-=t.distance}o=h+s+v*((B.utils.clamp(e.start,e.end,r)-e.start-s)/(n-e.start)-c)}m.length&&!a&&m.forEach(function(e){return e(o-s)}),o=function _round(e){return Math.round(1e5*e)/1e5||0}(o+f),l?(l.resetTo("y",o,-M,!0),N&&l.progress(1)):(g.y=o+"px",g.renderTransform(1))}}})),B.core.getCache(s.trigger).stRevert=db,s.startY=h,s.pins=p,s.markers=m,s.ratio=i,s.autoSpeed=a,r.style.willChange="transform"),s}var n,w,e,i,b,s,a,l,c,f,r,u,d,h,g,p,m=t.smoothTouch,v=t.onUpdate,S=t.onStop,T=t.smooth,_=t.onFocusIn,C=t.normalizeScroll,x=t.wholePixels,P=this,R=t.effectsPrefix||"",E=Z.getScrollFunc(L),k=1===Z.isTouch?!0===m?.8:parseFloat(m)||0:0===T||!1===T?0:parseFloat(T)||.8,A=k&&+t.speed||1,H=0,M=0,N=1,U=G(0),z={y:0},O="undefined"!=typeof ResizeObserver&&!1!==t.autoResize&&new ResizeObserver(function(){if(!Z.isRefreshing){var e=D(w)*A;e<-H&&Va(e),X.restart(!0)}});function refreshHeight(){return e=n.clientHeight,n.style.overflow="visible",q.style.height=L.innerHeight+(e-L.innerHeight)/A+"px",e-L.innerHeight}bb(),Z.addEventListener("killAll",bb),B.delayedCall(.5,function(){return N=0}),this.scrollTop=Va,this.scrollTo=function(e,t,r){var n=B.utils.clamp(0,D(),isNaN(e)?o.offset(e,r,!!t&&!f):+e);t?f?B.to(o,{duration:k,scrollTop:n,overwrite:"auto",ease:$}):E(n):Va(n)},this.offset=function(e,t,r){var n,o=(e=W(e)[0]).style.cssText,i=Z.create({trigger:e,start:t||"top top"});return b&&(N?Z.refresh():_a([i],!0)),n=i.start/(r?A:1),i.kill(!1),e.style.cssText=o,B.core.getCache(e).uncache=1,n},this.content=function(e){if(arguments.length){var t=W(e||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||q.children[0];return t!==n&&(c=(n=t).getAttribute("style")||"",O&&O.observe(n),B.set(n,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),k||B.set(n,{clearProps:"transform"})),this}return n},this.wrapper=function(e){return arguments.length?(w=W(e||"#smooth-wrapper")[0]||function _wrap(e){var t=I.querySelector(".ScrollSmoother-wrapper");return t||((t=I.createElement("div")).classList.add("ScrollSmoother-wrapper"),e.parentNode.insertBefore(t,e),t.appendChild(e)),t}(n),l=w.getAttribute("style")||"",refreshHeight(),B.set(w,k?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):w},this.effects=function(e,t){if(b=b||[],!e)return b.slice(0);(e=W(e)).forEach(function(e){for(var t=b.length;t--;)b[t].trigger===e&&b[t].kill()});t=t||{};var r,n,o=t.speed,i=t.lag,s=t.effectsPadding,a=[];for(r=0;r<e.length;r++)(n=fb(e[r],o,i,r,s))&&a.push(n);return b.push.apply(b,a),!1!==t.refresh&&Z.refresh(),a},this.sections=function(e,t){if(s=s||[],!e)return s.slice(0);var r=W(e).map(function(t){return Z.create({trigger:t,start:"top 120%",end:"bottom -20%",onToggle:function onToggle(e){t.style.opacity=e.isActive?"1":"0",t.style.pointerEvents=e.isActive?"all":"none"}})});return t&&t.add?s.push.apply(s,r):s=r.slice(0),r},this.content(t.content),this.wrapper(t.wrapper),this.render=function(e){return Ua(e||0===e?e:H)},this.getVelocity=function(){return U.getVelocity(-H)},Z.scrollerProxy(w,{scrollTop:Va,scrollHeight:function scrollHeight(){return refreshHeight()&&q.scrollHeight},fixedMarkers:!1!==t.fixedMarkers&&!!k,content:n,getBoundingClientRect:function getBoundingClientRect(){return{top:0,left:0,width:L.innerWidth,height:L.innerHeight}}}),Z.defaults({scroller:w});var V=Z.getAll().filter(function(e){return e.scroller===L||e.scroller===w});V.forEach(function(e){return e.revert(!0,!0)}),i=Z.create({animation:B.fromTo(z,{y:function y(){return h=0}},{y:function y(){return h=1,-refreshHeight()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function onUpdate(){if(h){var e=g;e&&(Ta(i),z.y=H),Ua(z.y,e),Pa(),v&&!f&&v(P)}}}),onRefreshInit:function onRefreshInit(e){if(!ScrollSmoother.isRefreshing){if(ScrollSmoother.isRefreshing=!0,b){var t=Z.getAll().filter(function(e){return!!e.pin});b.forEach(function(r){r.vars.pinnedContainer||t.forEach(function(e){if(e.pin.contains(r.trigger)){var t=r.vars;t.pinnedContainer=e.pin,r.vars=null,r.init(t,r.animation)}})})}var r=e.getTween();d=r&&r._end>r._dp._time,u=H,z.y=0,k&&(1===Z.isTouch&&(w.style.position="absolute"),w.scrollTop=0,1===Z.isTouch&&(w.style.position="fixed"))}},onRefresh:function onRefresh(e){e.animation.invalidate(),e.setPositions(e.start,refreshHeight()/A),d||Ta(e),z.y=-E()*A,Ua(z.y),N||(d&&(g=!1),e.animation.progress(B.utils.clamp(0,1,u/A/-e.end))),d&&(e.progress-=.001,e.update()),ScrollSmoother.isRefreshing=!1},id:"ScrollSmoother",scroller:L,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function end(){return refreshHeight()/A},onScrubComplete:function onScrubComplete(){U.reset(),S&&S(o)},scrub:k||!0}),this.smooth=function(e){return arguments.length&&(A=(k=e||0)&&+t.speed||1,i.scrubDuration(e)),i.getTween()?i.getTween().duration():0},i.getTween()&&(i.getTween().vars.ease=t.ease||$),this.scrollTrigger=i,t.effects&&this.effects(!0===t.effects?"[data-"+R+"speed], [data-"+R+"lag]":t.effects,{effectsPadding:t.effectsPadding,refresh:!1}),t.sections&&this.sections(!0===t.sections?"[data-section]":t.sections),V.forEach(function(e){e.vars.scroller=w,e.revert(!1,!0),e.init(e.vars,e.animation)}),this.paused=function(e,t){return arguments.length?(!!f!==e&&(e?(i.getTween()&&i.getTween().pause(),E(-H/A),U.reset(),(r=Z.normalizeScroll())&&r.disable(),(f=Z.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function onChangeY(){return Va(-H)}})).nested=J(j,"wheel,touch,scroll",!0,!1!==t)):(f.nested.kill(),f.kill(),f=0,r&&r.enable(),i.progress=(-H/A-i.start)/(i.end-i.start),Ta(i))),this):!!f},this.kill=this.revert=function(){o.paused(!1),Ta(i),i.kill();for(var e=(b||[]).concat(s||[]),t=e.length;t--;)e[t].kill();Z.scrollerProxy(w),Z.removeEventListener("killAll",bb),Z.removeEventListener("refresh",ab),w.style.cssText=l,n.style.cssText=c;var r=Z.defaults({});r&&r.scroller===w&&Z.defaults({scroller:L}),o.normalizer&&Z.normalizeScroll(!1),clearInterval(a),K=null,O&&O.disconnect(),q.style.removeProperty("height"),L.removeEventListener("focusin",Ya)},this.refresh=function(e,t){return i.refresh(e,t)},C&&(this.normalizer=Z.normalizeScroll(!0===C?{debounce:!0,content:!k&&n}:C)),Z.config(t),"overscrollBehavior"in L.getComputedStyle(q)&&B.set([q,j],{overscrollBehavior:"none"}),"scrollBehavior"in L.getComputedStyle(q)&&B.set([q,j],{scrollBehavior:"auto"}),L.addEventListener("focusin",Ya),a=setInterval(Pa,250),"loading"===I.readyState||requestAnimationFrame(function(){return Z.refresh()})}r.version="3.12.5",r.create=function(e){return K&&e&&K.content()===W(e.content)[0]?K:new r(e)},r.get=function(){return K},t()&&B.registerPlugin(r),e.ScrollSmoother=r,e.default=r;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});
/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.8",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map
//
// Generated on Tue Dec 16 2014 12:13:47 GMT+0100 (CET) by Charlie Robbins, Paolo Fragomeni & the Contributors (Using Codesurgeon).
// Version 1.2.6
//
(function(a){function k(a,b,c,d){var e=0,f=0,g=0,c=(c||"(").toString(),d=(d||")").toString(),h;for(h=0;h<a.length;h++){var i=a[h];if(i.indexOf(c,e)>i.indexOf(d,e)||~i.indexOf(c,e)&&!~i.indexOf(d,e)||!~i.indexOf(c,e)&&~i.indexOf(d,e)){f=i.indexOf(c,e),g=i.indexOf(d,e);if(~f&&!~g||!~f&&~g){var j=a.slice(0,(h||1)+1).join(b);a=[j].concat(a.slice((h||1)+1))}e=(g>f?g:f)+1,h=0}else e=0}return a}function j(a,b){var c,d=0,e="";while(c=a.substr(d).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/))d=c.index+c[0].length,c[0]=c[0].replace(/^\*/,"([_.()!\\ %@&a-zA-Z0-9-]+)"),e+=a.substr(0,c.index)+c[0];a=e+=a.substr(d);var f=a.match(/:([^\/]+)/ig),g,h;if(f){h=f.length;for(var j=0;j<h;j++)g=f[j],g.slice(0,2)==="::"?a=g.slice(1):a=a.replace(g,i(g,b))}return a}function i(a,b,c){c=a;for(var d in b)if(b.hasOwnProperty(d)){c=b[d](a);if(c!==a)break}return c===a?"([._a-zA-Z0-9-%()]+)":c}function h(a,b,c){if(!a.length)return c();var d=0;(function e(){b(a[d],function(b){b||b===!1?(c(b),c=function(){}):(d+=1,d===a.length?c():e())})})()}function g(a){var b=[];for(var c=0,d=a.length;c<d;c++)b=b.concat(a[c]);return b}function f(a,b){for(var c=0;c<a.length;c+=1)if(b(a[c],c,a)===!1)return}function c(){return b.hash===""||b.hash==="#"}var b=document.location,d={mode:"modern",hash:b.hash,history:!1,check:function(){var a=b.hash;a!=this.hash&&(this.hash=a,this.onHashChanged())},fire:function(){this.mode==="modern"?this.history===!0?window.onpopstate():window.onhashchange():this.onHashChanged()},init:function(a,b){function d(a){for(var b=0,c=e.listeners.length;b<c;b++)e.listeners[b](a)}var c=this;this.history=b,e.listeners||(e.listeners=[]);if("onhashchange"in window&&(document.documentMode===undefined||document.documentMode>7))this.history===!0?setTimeout(function(){window.onpopstate=d},500):window.onhashchange=d,this.mode="modern";else{var f=document.createElement("iframe");f.id="state-frame",f.style.display="none",document.body.appendChild(f),this.writeFrame(""),"onpropertychange"in document&&"attachEvent"in document&&document.attachEvent("onpropertychange",function(){event.propertyName==="location"&&c.check()}),window.setInterval(function(){c.check()},50),this.onHashChanged=d,this.mode="legacy"}e.listeners.push(a);return this.mode},destroy:function(a){if(!!e&&!!e.listeners){var b=e.listeners;for(var c=b.length-1;c>=0;c--)b[c]===a&&b.splice(c,1)}},setHash:function(a){this.mode==="legacy"&&this.writeFrame(a),this.history===!0?(window.history.pushState({},document.title,a),this.fire()):b.hash=a[0]==="/"?a:"/"+a;return this},writeFrame:function(a){var b=document.getElementById("state-frame"),c=b.contentDocument||b.contentWindow.document;c.open(),c.write("<script>_hash = '"+a+"'; onload = parent.listener.syncHash;<script>"),c.close()},syncHash:function(){var a=this._hash;a!=b.hash&&(b.hash=a);return this},onHashChanged:function(){}},e=a.Router=function(a){if(this instanceof e)this.params={},this.routes={},this.methods=["on","once","after","before"],this.scope=[],this._methods={},this._insert=this.insert,this.insert=this.insertEx,this.historySupport=(window.history!=null?window.history.pushState:null)!=null,this.configure(),this.mount(a||{});else return new e(a)};e.prototype.init=function(a){var e=this,f;this.handler=function(a){var b=a&&a.newURL||window.location.hash,c=e.history===!0?e.getPath():b.replace(/.*#/,"");e.dispatch("on",c.charAt(0)==="/"?c:"/"+c)},d.init(this.handler,this.history),this.history===!1?c()&&a?b.hash=a:c()||e.dispatch("on","/"+b.hash.replace(/^(#\/|#|\/)/,"")):(this.convert_hash_in_init?(f=c()&&a?a:c()?null:b.hash.replace(/^#/,""),f&&window.history.replaceState({},document.title,f)):f=this.getPath(),(f||this.run_in_init===!0)&&this.handler());return this},e.prototype.explode=function(){var a=this.history===!0?this.getPath():b.hash;a.charAt(1)==="/"&&(a=a.slice(1));return a.slice(1,a.length).split("/")},e.prototype.setRoute=function(a,b,c){var e=this.explode();typeof a=="number"&&typeof b=="string"?e[a]=b:typeof c=="string"?e.splice(a,b,s):e=[a],d.setHash(e.join("/"));return e},e.prototype.insertEx=function(a,b,c,d){a==="once"&&(a="on",c=function(a){var b=!1;return function(){if(!b){b=!0;return a.apply(this,arguments)}}}(c));return this._insert(a,b,c,d)},e.prototype.getRoute=function(a){var b=a;if(typeof a=="number")b=this.explode()[a];else if(typeof a=="string"){var c=this.explode();b=c.indexOf(a)}else b=this.explode();return b},e.prototype.destroy=function(){d.destroy(this.handler);return this},e.prototype.getPath=function(){var a=window.location.pathname;a.substr(0,1)!=="/"&&(a="/"+a);return a};var l=/\?.*/;e.prototype.configure=function(a){a=a||{};for(var b=0;b<this.methods.length;b++)this._methods[this.methods[b]]=!0;this.recurse=a.recurse||this.recurse||!1,this.async=a.async||!1,this.delimiter=a.delimiter||"/",this.strict=typeof a.strict=="undefined"?!0:a.strict,this.notfound=a.notfound,this.resource=a.resource,this.history=a.html5history&&this.historySupport||!1,this.run_in_init=this.history===!0&&a.run_handler_in_init!==!1,this.convert_hash_in_init=this.history===!0&&a.convert_hash_in_init!==!1,this.every={after:a.after||null,before:a.before||null,on:a.on||null};return this},e.prototype.param=function(a,b){a[0]!==":"&&(a=":"+a);var c=new RegExp(a,"g");this.params[a]=function(a){return a.replace(c,b.source||b)};return this},e.prototype.on=e.prototype.route=function(a,b,c){var d=this;!c&&typeof b=="function"&&(c=b,b=a,a="on");if(Array.isArray(b))return b.forEach(function(b){d.on(a,b,c)});b.source&&(b=b.source.replace(/\\\//ig,"/"));if(Array.isArray(a))return a.forEach(function(a){d.on(a.toLowerCase(),b,c)});b=b.split(new RegExp(this.delimiter)),b=k(b,this.delimiter),this.insert(a,this.scope.concat(b),c)},e.prototype.path=function(a,b){var c=this,d=this.scope.length;a.source&&(a=a.source.replace(/\\\//ig,"/")),a=a.split(new RegExp(this.delimiter)),a=k(a,this.delimiter),this.scope=this.scope.concat(a),b.call(this,this),this.scope.splice(d,a.length)},e.prototype.dispatch=function(a,b,c){function h(){d.last=e.after,d.invoke(d.runlist(e),d,c)}var d=this,e=this.traverse(a,b.replace(l,""),this.routes,""),f=this._invoked,g;this._invoked=!0;if(!e||e.length===0){this.last=[],typeof this.notfound=="function"&&this.invoke([this.notfound],{method:a,path:b},c);return!1}this.recurse==="forward"&&(e=e.reverse()),g=this.every&&this.every.after?[this.every.after].concat(this.last):[this.last];if(g&&g.length>0&&f){this.async?this.invoke(g,this,h):(this.invoke(g,this),h());return!0}h();return!0},e.prototype.invoke=function(a,b,c){var d=this,e;this.async?(e=function(c,d){if(Array.isArray(c))return h(c,e,d);typeof c=="function"&&c.apply(b,(a.captures||[]).concat(d))},h(a,e,function(){c&&c.apply(b,arguments)})):(e=function(c){if(Array.isArray(c))return f(c,e);if(typeof c=="function")return c.apply(b,a.captures||[]);typeof c=="string"&&d.resource&&d.resource[c].apply(b,a.captures||[])},f(a,e))},e.prototype.traverse=function(a,b,c,d,e){function l(a){function c(a){for(var b=a.length-1;b>=0;b--)Array.isArray(a[b])?(c(a[b]),a[b].length===0&&a.splice(b,1)):e(a[b])||a.splice(b,1)}function b(a){var c=[];for(var d=0;d<a.length;d++)c[d]=Array.isArray(a[d])?b(a[d]):a[d];return c}if(!e)return a;var d=b(a);d.matched=a.matched,d.captures=a.captures,d.after=a.after.filter(e),c(d);return d}var f=[],g,h,i,j,k;if(b===this.delimiter&&c[a]){j=[[c.before,c[a]].filter(Boolean)],j.after=[c.after].filter(Boolean),j.matched=!0,j.captures=[];return l(j)}for(var m in c)if(c.hasOwnProperty(m)&&(!this._methods[m]||this._methods[m]&&typeof c[m]=="object"&&!Array.isArray(c[m]))){g=h=d+this.delimiter+m,this.strict||(h+="["+this.delimiter+"]?"),i=b.match(new RegExp("^"+h));if(!i)continue;if(i[0]&&i[0]==b&&c[m][a]){j=[[c[m].before,c[m][a]].filter(Boolean)],j.after=[c[m].after].filter(Boolean),j.matched=!0,j.captures=i.slice(1),this.recurse&&c===this.routes&&(j.push([c.before,c.on].filter(Boolean)),j.after=j.after.concat([c.after].filter(Boolean)));return l(j)}j=this.traverse(a,b,c[m],g);if(j.matched){j.length>0&&(f=f.concat(j)),this.recurse&&(f.push([c[m].before,c[m].on].filter(Boolean)),j.after=j.after.concat([c[m].after].filter(Boolean)),c===this.routes&&(f.push([c.before,c.on].filter(Boolean)),j.after=j.after.concat([c.after].filter(Boolean)))),f.matched=!0,f.captures=j.captures,f.after=j.after;return l(f)}}return!1},e.prototype.insert=function(a,b,c,d){var e,f,g,h,i;b=b.filter(function(a){return a&&a.length>0}),d=d||this.routes,i=b.shift(),/\:|\*/.test(i)&&!/\\d|\\w/.test(i)&&(i=j(i,this.params));if(b.length>0){d[i]=d[i]||{};return this.insert(a,b,c,d[i])}{if(!!i||!!b.length||d!==this.routes){f=typeof d[i],g=Array.isArray(d[i]);if(d[i]&&!g&&f=="object"){e=typeof d[i][a];switch(e){case"function":d[i][a]=[d[i][a],c];return;case"object":d[i][a].push(c);return;case"undefined":d[i][a]=c;return}}else if(f=="undefined"){h={},h[a]=c,d[i]=h;return}throw new Error("Invalid route context: "+f)}e=typeof d[a];switch(e){case"function":d[a]=[d[a],c];return;case"object":d[a].push(c);return;case"undefined":d[a]=c;return}}},e.prototype.extend=function(a){function e(a){b._methods[a]=!0,b[a]=function(){var c=arguments.length===1?[a,""]:[a];b.on.apply(b,c.concat(Array.prototype.slice.call(arguments)))}}var b=this,c=a.length,d;for(d=0;d<c;d++)e(a[d])},e.prototype.runlist=function(a){var b=this.every&&this.every.before?[this.every.before].concat(g(a)):g(a);this.every&&this.every.on&&b.push(this.every.on),b.captures=a.captures,b.source=a.source;return b},e.prototype.mount=function(a,b){function d(b,d){var e=b,f=b.split(c.delimiter),g=typeof a[b],h=f[0]===""||!c._methods[f[0]],i=h?"on":e;h&&(e=e.slice((e.match(new RegExp("^"+c.delimiter))||[""])[0].length),f.shift());h&&g==="object"&&!Array.isArray(a[b])?(d=d.concat(f),c.mount(a[b],d)):(h&&(d=d.concat(e.split(c.delimiter)),d=k(d,c.delimiter)),c.insert(i,d,a[b]))}if(!!a&&typeof a=="object"&&!Array.isArray(a)){var c=this;b=b||[],Array.isArray(b)||(b=b.split(c.delimiter));for(var e in a)a.hasOwnProperty(e)&&d(e,b.slice(0))}}})(typeof exports=="object"?exports:window)
/* Copyright (c) 2010-2013 Marcus Westin */
"use strict";(function(e,t){typeof define=="function"&&define.amd?define([],t):typeof exports=="object"?module.exports=t():e.store=t()})(this,function(){function o(){try{return r in t&&t[r]}catch(e){return!1}}var e={},t=typeof window!="undefined"?window:global,n=t.document,r="localStorage",i="script",s;e.disabled=!1,e.version="1.3.20",e.set=function(e,t){},e.get=function(e,t){},e.has=function(t){return e.get(t)!==undefined},e.remove=function(e){},e.clear=function(){},e.transact=function(t,n,r){r==null&&(r=n,n=null),n==null&&(n={});var i=e.get(t,n);r(i),e.set(t,i)},e.getAll=function(){},e.forEach=function(){},e.serialize=function(e){return JSON.stringify(e)},e.deserialize=function(e){if(typeof e!="string")return undefined;try{return JSON.parse(e)}catch(t){return e||undefined}};if(o())s=t[r],e.set=function(t,n){return n===undefined?e.remove(t):(s.setItem(t,e.serialize(n)),n)},e.get=function(t,n){var r=e.deserialize(s.getItem(t));return r===undefined?n:r},e.remove=function(e){s.removeItem(e)},e.clear=function(){s.clear()},e.getAll=function(){var t={};return e.forEach(function(e,n){t[e]=n}),t},e.forEach=function(t){for(var n=0;n<s.length;n++){var r=s.key(n);t(r,e.get(r))}};else if(n&&n.documentElement.addBehavior){var u,a;try{a=new ActiveXObject("htmlfile"),a.open(),a.write("<"+i+">document.w=window</"+i+'><iframe src="/favicon.ico"></iframe>'),a.close(),u=a.w.frames[0].document,s=u.createElement("div")}catch(f){s=n.createElement("div"),u=n.body}var l=function(t){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(s),u.appendChild(s),s.addBehavior("#default#userData"),s.load(r);var i=t.apply(e,n);return u.removeChild(s),i}},c=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g"),h=function(e){return e.replace(/^d/,"___$&").replace(c,"___")};e.set=l(function(t,n,i){return n=h(n),i===undefined?e.remove(n):(t.setAttribute(n,e.serialize(i)),t.save(r),i)}),e.get=l(function(t,n,r){n=h(n);var i=e.deserialize(t.getAttribute(n));return i===undefined?r:i}),e.remove=l(function(e,t){t=h(t),e.removeAttribute(t),e.save(r)}),e.clear=l(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(r);for(var n=t.length-1;n>=0;n--)e.removeAttribute(t[n].name);e.save(r)}),e.getAll=function(t){var n={};return e.forEach(function(e,t){n[e]=t}),n},e.forEach=l(function(t,n){var r=t.XMLDocument.documentElement.attributes;for(var i=0,s;s=r[i];++i)n(s.name,e.deserialize(t.getAttribute(s.name)))})}try{var p="__storejs__";e.set(p,p),e.get(p)!=p&&(e.disabled=!0),e.remove(p)}catch(f){e.disabled=!0}return e.enabled=!e.disabled,e});
//jQuery Cookie Plugin v1.4.1
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD (Register as an anonymous module)
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (arguments.length > 1 && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {},
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			cookies = document.cookie ? document.cookie.split('; ') : [],
			i = 0,
			l = cookies.length;

		for (; i < l; i++) {
			var parts = cookies[i].split('='),
				name = decode(parts.shift()),
				cookie = parts.join('=');

			if (key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

/*! npm.im/iphone-inline-video 2.2.2 */
var enableInlineVideo=function(){"use strict";/*! npm.im/intervalometer */
    function e(e,i,n,r){function t(n){d=i(t,r),e(n-(a||n)),a=n}var d,a;return{start:function(){d||t(0)},stop:function(){n(d),d=null,a=0}}}function i(i){return e(i,requestAnimationFrame,cancelAnimationFrame)}function n(e,i,n){function r(r){n&&!n(e,i)||r.stopImmediatePropagation()}return e.addEventListener(i,r),r}function r(e,i,n,r){function t(){return n[i]}function d(e){n[i]=e}r&&d(e[i]),Object.defineProperty(e,i,{get:t,set:d})}function t(e,i,n){n.addEventListener(i,function(){return e.dispatchEvent(new Event(i))})}function d(e,i){Promise.resolve().then(function(){e.dispatchEvent(new Event(i))})}function a(e){var i=new Audio;return t(e,"play",i),t(e,"playing",i),t(e,"pause",i),i.crossOrigin=e.crossOrigin,i.src=e.src||e.currentSrc||"data:",i}function u(e,i,n){(m||0)+200<Date.now()&&(e[h]=!0,m=Date.now()),n||(e.currentTime=i),k[++T%3]=100*i|0}function o(e){return e.driver.currentTime>=e.video.duration}function s(e){var i=this;i.video.readyState>=i.video.HAVE_FUTURE_DATA?(i.hasAudio||(i.driver.currentTime=i.video.currentTime+e*i.video.playbackRate/1e3,i.video.loop&&o(i)&&(i.driver.currentTime=0)),u(i.video,i.driver.currentTime)):i.video.networkState===i.video.NETWORK_IDLE&&0===i.video.buffered.length&&i.video.load(),i.video.ended&&(delete i.video[h],i.video.pause(!0))}function c(){var e=this,i=e[g];if(e.webkitDisplayingFullscreen)return void e[E]();"data:"!==i.driver.src&&i.driver.src!==e.src&&(u(e,0,!0),i.driver.src=e.src),e.paused&&(i.paused=!1,0===e.buffered.length&&e.load(),i.driver.play(),i.updater.start(),i.hasAudio||(d(e,"play"),i.video.readyState>=i.video.HAVE_ENOUGH_DATA&&d(e,"playing")))}function v(e){var i=this,n=i[g];n.driver.pause(),n.updater.stop(),i.webkitDisplayingFullscreen&&i[w](),n.paused&&!e||(n.paused=!0,n.hasAudio||d(i,"pause"),i.ended&&!i.webkitDisplayingFullscreen&&(i[h]=!0,d(i,"ended")))}function p(e,n){var r={};e[g]=r,r.paused=!0,r.hasAudio=n,r.video=e,r.updater=i(s.bind(r)),n?r.driver=a(e):(e.addEventListener("canplay",function(){e.paused||d(e,"playing")}),r.driver={src:e.src||e.currentSrc||"data:",muted:!0,paused:!0,pause:function(){r.driver.paused=!0},play:function(){r.driver.paused=!1,o(r)&&u(e,0)},get ended(){return o(r)}}),e.addEventListener("emptied",function(){var i=!r.driver.src||"data:"===r.driver.src;r.driver.src&&r.driver.src!==e.src&&(u(e,0,!0),r.driver.src=e.src,i||!n&&e.autoplay?r.driver.play():r.updater.stop())},!1),e.addEventListener("webkitbeginfullscreen",function(){e.paused?n&&0===r.driver.buffered.length&&r.driver.load():(e.pause(),e[E]())}),n&&(e.addEventListener("webkitendfullscreen",function(){r.driver.currentTime=e.currentTime}),e.addEventListener("seeking",function(){k.indexOf(100*e.currentTime|0)<0&&(r.driver.currentTime=e.currentTime)}))}function l(e){var i=e[h];return delete e[h],!e.webkitDisplayingFullscreen&&!i}function f(e){var i=e[g];e[E]=e.play,e[w]=e.pause,e.play=c,e.pause=v,r(e,"paused",i.driver),r(e,"muted",i.driver,!0),r(e,"playbackRate",i.driver,!0),r(e,"ended",i.driver),r(e,"loop",i.driver,!0),n(e,"seeking",function(e){return!e.webkitDisplayingFullscreen}),n(e,"seeked",function(e){return!e.webkitDisplayingFullscreen}),n(e,"timeupdate",l),n(e,"ended",l)}function y(e,i){if(void 0===i&&(i={}),!e[g]){if(!i.everywhere){if(!b)return;if(!(i.iPad||i.ipad?/iPhone|iPod|iPad/:/iPhone|iPod/).test(navigator.userAgent))return}e.pause();var n=e.autoplay;e.autoplay=!1,p(e,!e.muted),f(e),e.classList.add("IIV"),e.muted&&n&&(e.play(),e.addEventListener("playing",function i(){e.autoplay=!0,e.removeEventListener("playing",i)})),/iPhone|iPod|iPad/.test(navigator.platform)||console.warn("iphone-inline-video is not guaranteed to work in emulated environments")}}var m,b="object"==typeof document&&"object-fit"in document.head.style&&!matchMedia("(-webkit-video-playable-inline)").matches,g="fregante:iphone-inline-video",h="fregante:iphone-inline-video:event",E="fregante:iphone-inline-video:nativeplay",w="fregante:iphone-inline-video:nativepause",k=[],T=0;return y}();
// Device.js
// (c) 2014 Matthew Hudson
// Device.js is freely distributable under the MIT license.
// For all details and documentation:
// http://matthewhudson.me/projects/device.js/

(function () {

    var device,
        previousDevice,
        addClass,
        documentElement,
        find,
        handleOrientation,
        hasClass,
        orientationEvent,
        removeClass,
        userAgent;

    // Save the previous value of the device variable.
    previousDevice = window.device;

    device = {};

    // Add device as a global object.
    window.device = device;

    // The <html> element.
    documentElement = window.document.documentElement;

    // The client user agent string.
    // Lowercase, so we can use the more efficient indexOf(), instead of Regex
    userAgent = window.navigator.userAgent.toLowerCase();

    // Main functions
    // --------------

    device.ios = function () {
        return device.iphone() || device.ipod() || device.ipad();
    };

    device.iphone = function () {
        return !device.windows() && find('iphone');
    };

    device.ipod = function () {
        return find('ipod');
    };

    device.ipad = function () {
        return find('ipad');
    };

    device.android = function () {
        return !device.windows() && find('android');
    };

    device.androidPhone = function () {
        return device.android() && find('mobile');
    };

    device.androidTablet = function () {
        return device.android() && !find('mobile');
    };

    device.blackberry = function () {
        return find('blackberry') || find('bb10') || find('rim');
    };

    device.blackberryPhone = function () {
        return device.blackberry() && !find('tablet');
    };

    device.blackberryTablet = function () {
        return device.blackberry() && find('tablet');
    };

    device.windows = function () {
        return find('windows');
    };

    device.windowsPhone = function () {
        return device.windows() && find('phone');
    };

    device.windowsTablet = function () {
        return device.windows() && (find('touch') && !device.windowsPhone());
    };

    device.fxos = function () {
        return (find('(mobile;') || find('(tablet;')) && find('; rv:');
    };

    device.fxosPhone = function () {
        return device.fxos() && find('mobile');
    };

    device.fxosTablet = function () {
        return device.fxos() && find('tablet');
    };

    device.meego = function () {
        return find('meego');
    };

    device.cordova = function () {
        return window.cordova && location.protocol === 'file:';
    };

    device.nodeWebkit = function () {
        return typeof window.process === 'object';
    };

    device.mobile = function () {
        return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
    };

    device.tablet = function () {
        return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
    };

    device.desktop = function () {
        return !device.tablet() && !device.mobile();
    };

    device.television = function () {
        var i, television = [
            "googletv",
            "viera",
            "smarttv",
            "internet.tv",
            "netcast",
            "nettv",
            "appletv",
            "boxee",
            "kylo",
            "roku",
            "dlnadoc",
            "roku",
            "pov_tv",
            "hbbtv",
            "ce-html"
        ];

        i = 0;
        while (i < television.length) {
            if (find(television[i])) {
                return true;
            }
            i++;
        }
        return false;
    };

    device.portrait = function () {
        if (typeof window.orientation != 'undefined') {
            return Math.abs(window.orientation) === 0;
        } else {
            return (window.innerHeight / window.innerWidth) > 1;
        }
    };

    device.landscape = function () {
        if (typeof window.orientation != 'undefined') {
            return Math.abs(window.orientation) === 90;
        } else {
            return (window.innerHeight / window.innerWidth) < 1;
        }
    };

    // Public Utility Functions
    // ------------------------

    // Run device.js in noConflict mode,
    // returning the device variable to its previous owner.
    device.noConflict = function () {
        window.device = previousDevice;
        return this;
    };

    // Private Utility Functions
    // -------------------------

    // Simple UA string search
    find = function (needle) {
        return userAgent.indexOf(needle) !== -1;
    };

    // Check if documentElement already has a given class.
    hasClass = function (className) {
        var regex;
        regex = new RegExp(className, 'i');
        return documentElement.className.match(regex);
    };

    // Add one or more CSS classes to the <html> element.
    addClass = function (className) {
        var currentClassNames = null;
        if (!hasClass(className)) {
            currentClassNames = documentElement.className.replace(/^\s+|\s+$/g, '');
            documentElement.className = currentClassNames + " " + className;
        }
    };

    // Remove single CSS class from the <html> element.
    removeClass = function (className) {
        if (hasClass(className)) {
            documentElement.className = documentElement.className.replace(" " + className, "");
        }
    };

    // HTML Element Handling
    // ---------------------

    // Insert the appropriate CSS class based on the _user_agent.

    if (device.ios()) {
        if (device.ipad()) {
            addClass("ios ipad tablet");
        } else if (device.iphone()) {
            addClass("ios iphone mobile");
        } else if (device.ipod()) {
            addClass("ios ipod mobile");
        }
    } else if (device.android()) {
        if (device.androidTablet()) {
            addClass("android tablet");
        } else {
            addClass("android mobile");
        }
    } else if (device.blackberry()) {
        if (device.blackberryTablet()) {
            addClass("blackberry tablet");
        } else {
            addClass("blackberry mobile");
        }
    } else if (device.windows()) {
        if (device.windowsTablet()) {
            addClass("windows tablet");
        } else if (device.windowsPhone()) {
            addClass("windows mobile");
        } else {
            addClass("desktop");
        }
    } else if (device.fxos()) {
        if (device.fxosTablet()) {
            addClass("fxos tablet");
        } else {
            addClass("fxos mobile");
        }
    } else if (device.meego()) {
        addClass("meego mobile");
    } else if (device.nodeWebkit()) {
        addClass("node-webkit");
    } else if (device.television()) {
        addClass("television");
    } else if (device.desktop()) {
        addClass("desktop");
    }

    if (device.cordova()) {
        addClass("cordova");
    }

    // Orientation Handling
    // --------------------

    // Handle device orientation changes.
    handleOrientation = function () {
        if (device.landscape()) {
            removeClass("portrait");
            addClass("landscape");
            window.SLeasy && SLeasy.onResize && SLeasy.onResize('横屏', orientationEvent);
        } else {
            removeClass("landscape");
            addClass("portrait");
            window.SLeasy && SLeasy.onResize && SLeasy.onResize('竖屏', orientationEvent);
        }
    };

    // Detect whether device supports orientationchange event,
    // otherwise fall back to the resize event.
    if (Object.prototype.hasOwnProperty.call(window, "onorientationchange")) {
        orientationEvent = "orientationchange";
    } else {
        orientationEvent = "resize";
    }

    // Listen for changes in orientation.
    if (window.addEventListener) {
        window.addEventListener(orientationEvent, handleOrientation, false);
    } else if (window.attachEvent) {
        window.attachEvent(orientationEvent, handleOrientation);
    } else {
        window[orientationEvent] = handleOrientation;
    }

    // handleOrientation();

    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        define(function () {
            return device;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = device;
    } else {
        window.device = device;
    }

}).call(this);
//SLeasy3-config
;
(function (SLeasy, $) {
    //config
    var $config = { //默认配置
        //SLeasy------------------------------------------
        id: 'SLeasy',//幻灯容器id
        bg: '',//幻灯容器背景图片
        bgColor: '',//幻灯容器背景颜色
        host: 'images/',//资源目录url
        width: 750,//幻灯宽度
        height: 1500,//幻灯高度
        viewport: 375,//视口大小
        motionTime: 0.8,//切换动画时间
        motionStyle: 0,//动画风格，默认随机
        motionDirection: 'upDown',//动画运动方向
        motionEase: '',//
        force3D: true,//
        loopMode: false,//启用首尾循环模式
        swipeMode: 'y',//滑动模式，xy：上下左右，x：水平，y：垂直
        routerMode: false,//路由开启模式
        routerNotFound: function () {
            return;
            SLeasy.goSlider(0);
        },//路由未匹配执行回调
        arrowMode: true,//是否显示滑动指示箭头
        arrowColor: '#fff',//箭头颜色
        rotateMode: false,//旋转模式
        alignMode: 'center',//幻灯背景对齐方式
        alignOffset: 0,//对齐偏移值
        floatZIndex: 10,//浮动元素默认zIndex
        detailZIndex: 10,//详情幻灯默认zIndex
        preload: true,//是否对素材预加载
        autoStart: true,//自动开始跳转默认幻灯
        autoRemoveChildren: true,//每张幻灯子动画全部完毕后，自动删除子动画tween
        debugMode: 'auto',//默认仅当本地环境开启debug模式
        reloadMode: false,//屏幕旋转自动刷新页面重新适配
        checkNavBar: false,//检测微信底部导航条/强制刷新
        stageMode: 'width',//舞台适配模式，int数值:小于该指定高度则自动缩放,反之按宽度匹配,width:根据宽度缩放，height:根据高度缩放，auto:根据高宽比例，自动缩放;
        fixWidthMode: false,//舞台的宽度自适应模式
        positionMode: 'absolute',//舞台子元素position模式
        scrollMagicMode: false,//是否开启scrollmagic模式
        timeStamp: window.SLeasyTimeStamp || null,
        //music-------------------------------------------
        musicUrl: '',//背景音乐url
        musicLoop: true,//背景音乐是否循环
        musicAutoPlay: true,//背景音乐自动播放
        musicTouchPlay: false,//触摸自动播放(仅1次),
        musicMuteMode: 'global',
        musicBt: [1, '', 50, 50, 'topRight', 15, 15],//背景音乐按钮[开启状态，sprite图片url，宽度，高度，对齐方式，x轴偏移，y轴偏移]

        //audios-------------------------------------------
        audios: {},//webAudio+Howler
        audioType: 'webAudio',

        //video-------------------------------------------
        videoCache: false,

        //slider------------------------------------------
        sliders: [], //幻灯json数组

        //detail-------------------------------------------
        details: [],//幻灯详情页json数组

        //float-------------------------------------------
        floats: [],//固定漂浮元素

        //loader------------------------------------------
        loader: {
            bg: 'none',//loading页背景
            size: [38, 38],//宽高
            style: 0,//loading内置式样索引或自定义html
            color: '#fff',//loading svg颜色
            bg: 'rgba(0,0,0,0.9)',//loading遮罩背景颜色
            textStyle: 'font-size:12px;color:#fff', //字体式样
            endAt: 100,
            loadType: 'multi',
            loadedTips: false,
            show: true//是否显示默认loading
        },

        //其他----------------------------------------------
        exLoadArr: [], //额外加载项数组
        title: document.title,//全局网页标题

        //事件回调-------------------------------------------
        on: {
            'loadProgress': function (percent) { //预加载进行时回调
                SLeasy.loader.progress(percent);
                console.log('当前加载进度' + percent + '~！');
            },
            'loaded': function () {//预加载完毕回调
                console.log('======================================加载完毕~！');
            },
            'sliderChange': function (sliderIndex) {//幻灯切换回调
                console.log('切换到第' + (sliderIndex + 1) + '张幻灯~！')
            },
            'subMotion': function (sliderIndex) {//子动画开始播放回调
                console.log('第' + (sliderIndex + 1) + '张幻灯的子动画开始运行~');
            },
            'detailMotion': function (sliderIndex) {//详情页子动画开始播放回调
                console.log('第' + (sliderIndex + 1) + '张详情页的子动画开始运行~');
            },
            'detailOpen': function (sliderIndex) {//详情页打开回调
                console.log('第' + (sliderIndex + 1) + '张详情页打开~');
            },
            'detailClose': function (sliderIndex) {//详情页关闭回调
                console.log('第' + (sliderIndex + 1) + '张详情页关闭~');
            },
            'timeline': function (tl) {//子动画时间轴ready回调
                console.log('子动画timeline ready~')
            },
            'weixin': function (tl) {//子动画时间轴ready回调
                console.log('Weixin JSBridge Ready~')
            },
        }


    }

    SLeasy.config = function (opt) {
        if (arguments.length > 0) {
            return $.extend(true, $config, opt);
        } else {
            //console.log($config);
            return $config;
        }
    }


})(
    window.SLeasy = window.SLeasy || {},
    jQuery
);

/*
 <meta http-equiv=”Cache-Control” content=”no-transform” />
 <meta http-equiv=”Cache-Control” content=”no-siteapp” />
 <meta name="applicable-device" content="pc,mobile">
 <meta name="MobileOptimized" content="width"/>
 <meta name="HandheldFriendly" content="true"/>
 */
// SLeasy3-scope
;(function (SLeasy, $) {
    var $config = SLeasy.config();
    //scope
    var $scope = {//全域变量
        title: $config.title,//当前title
        body: $('body'),//body标签dom
        viewScale: device.landscape() ? window.innerHeight / $config.height : window.innerWidth / $config.width,//幻灯缩放比例因子
        fixHeight: 0,//全屏自适应高度变量，SLeasy.viewport()执行后，会将该值设置为当前自适应全屏高度
        fixWidth: $config.viewport,
        eventArr: [],//需要绑定的事件及元素数据数组
        sliderBox: null,//幻灯框架dom缓存变量
        swipe: 1,//是否允许滑动幻灯

        sliders: null,//幻灯dom缓存变量
        sliderIndex: 0,//幻灯当前索引
        subMotion: null,//幻灯子动画元素dom缓存变量

        details: null,//详情页dom缓存变量
        detailIndex: 0,//当前详情页索引
        detailMotion: null,//详情页子动画元素dom缓存变量

        loader: null,//loading dom元素缓存变量
        floats: null,//浮动元素dom缓存变量
        canvas: null,//画布元素dom缓存变量

        isMusic: 0,//音乐状态
        isAnim: 0,//当前幻灯切换状态
        isDetail: 0,//详情页是否打开
        isSubMotion: 0,//当前子动画完成状态
        isDetailMotion: 0,//当前详情页子动画完成状态

        timeline: null,//子动画时间线
        fixPropsArr: ['x', 'y', 'width', 'height', 'minWidth', 'minHeight', 'maxWidth', 'maxHeight', 'left', 'right', 'top', 'bottom', 'lineHeight', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'fontSize', 'clip', 'backgroundPositionX', 'backgroundPositionY', 'letterSpacing', 'borderRadius'],//需要修正的属性
        FXDirection: 'upDown',//幻灯切换效果方向
        clearProps: 'x,y,scale,rotationX,rotationY,rotationZ,transform,transformPerspective,webkitTransformOrigin,WebkitTransformOrigin,transformOrigin,zIndex',//动画完成之后需要清除的属性值

        labelHash: {},//标签哈希表
        router: {},//路由
        preHash: '',//上一路由哈希值

        userData: {},//用户自定义数据
        media: {},//用户初始化media dom缓存
        pluginList: [],//插件初始化函数列表

        bitmaps: {},//ae原生位图序列
        aeBitmaps: {},//ae位图对象序列
        aeLayer: {},//ae渲染层
        aeStage: {},//ae渲染舞台
        aeTimeLine: {},//ae时间线
        audios: {},//webAudio

        totalLoad: [],//应用要加载的图片总数组
    }


    SLeasy.$scope = $scope;//全局状态
    SLeasy.scope = function () {
        return $scope;
    }

    //get label
    SLeasy.label = function (key, sliderOrDetail) {//参数getSliderIndex为true:则如果是幻灯label,返回幻灯索引值,false返回幻灯dom
        if (key) {
            var value = typeof $scope.labelHash[key] != 'undefined' ? $scope.labelHash[key] : null;
            if (typeof value == 'string') {
                return $(value);
            } else {
                if (sliderOrDetail) {
                    if (sliderOrDetail == 'slider' || sliderOrDetail == 'sliders') return $scope.sliders.eq(value);
                    if (sliderOrDetail == 'detail' || sliderOrDetail == 'details') return $scope.details.eq(value);
                } else {
                    return value;
                }

            }
        } else {
            return $scope.labelHash;
        }
    }

    //check weChat
    SLeasy.isWechat = SLeasy.isWeixin = SLeasy.isWX = function (noDevTools) {
        var ua = window.navigator.userAgent.toLowerCase();
        if (noDevTools && ua.match(/wechatdevtools/i) == 'wechatdevtools') return false;
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }

    //check wexin miniprogram
    SLeasy.isWmp = function (noDevTools) {
        var ua = window.navigator.userAgent.toLowerCase();
        if (noDevTools && ua.match(/wechatdevtools/i) == 'wechatdevtools') return false;
        if (ua.match(/MicroMessenger/i) == 'micromessenger' && ua.match(/miniprogram/i) == 'miniprogram') {
            return true;
        } else {
            return false;
        }
    }

    //check weibo
    SLeasy.isWeibo = SLeasy.isWB = function () {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/weibo/i) == 'weibo') {
            return true;
        } else {
            return false;
        }
    }

    //check xiaohongshu
    SLeasy.isXiaoHongShu = SLeasy.isXHS = function () {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/discover/i) == 'discover') {
            return true;
        } else {
            return false;
        }
    }

    //check 钉钉
    SLeasy.isDingding = SLeasy.isDD = function () {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/dingtalk/i) == 'dingtalk') {
            return true;
        } else {
            return false;
        }
    }

    //weChat share
    SLeasy.share = function (opt) {
        var imgHtml = '<img src="' + opt.imgUrl + '" width="300" height="300" style="position:absolute;top:-9999px">',
            linkUrl = opt.link || location.href;
        $('body').prepend(imgHtml);
        opt.title && setTimeout(function () {
            document.title = opt.title
        }, 1000);
        //location.hash='/goTo/'+linkUrl.replace('http://','').replace('https://','');
        $scope.referrer = opt.referrer;
        $scope.goLink = opt.link || location.href;
    }

    //check http
    SLeasy.isHttp = function (url) {
        if (url) {
            return (url.indexOf('http') == 0 && url.indexOf('http://localhost') == -1) ? true : false;
        } else {
            return (location.href.indexOf('http') == 0 && location.href.indexOf('http://localhost') == -1) ? true : false;
        }
    }

    //check localhost
    SLeasy.isLocalHost = function (url) {
        if (url) {
            return (url.indexOf('http://127.0.0.1') != -1 || url.indexOf('http://localhost') != -1) ? true : false;
        } else {
            return (location.href.indexOf('http://127.0.0.1') != -1 || location.href.indexOf('http://localhost') != -1) ? true : false;
        }
    }

    //SLeasy 检测函数,检测支持见:https://github.com/matthewhudson/device.js
    SLeasy.is = function (key, callback) {
        console.log(key);
        var res = '检测参数错误~！';
        if (key == 'wechat' || key == 'weixin') {
            res = SLeasy.isWechat();
        } else if (key == 'weibo') {
            res = SLeasy.isWeibo();
        } else if (key == 'http') {
            res = SLeasy.isHttp();
        } else if (key == 'localhost') {
            res = SLeasy.isLocalHost();
        } else {
            res = device[key]();
        }
        callback && callback(res);
        return res;
    }

    //set title
    $(document).ready(function (e) {
        $scope.body = $('body');
        SLeasy.title = function (title) {
            document.title = title;
            if (SLeasy.is('weixin')) {
                // hack在微信等webview中无法修改document.title的情况
                var $iframe = $('<iframe src="' + window.location.href + '" style="display:none"></iframe>').on('load', function () {
                    setTimeout(function () {
                        $iframe.off('load').remove();
                    }, 0)
                }).appendTo($scope.body)
            }
        }
    });

    //goto url
    SLeasy.goUrl = function (url) {
        window.location.href = url || '#';
    }

    //go taobao
    SLeasy.goTaobao = SLeasy.goTmall = function (shop) {
        $scope.preHash = '/' + $scope.router.getRoute().join('/');
        //$scope.router.setRoute('goTaobao/'+shop);
        //return $scope.preHash;
        location.href = 'tmall.html#/goTaobao/' + shop;
    }

    //check goto
    SLeasy.checkGoto = function () {
        //
        //alert(!document.referrer || document.referrer.indexOf($scope.referrer)==-1);

        if (!document.referrer || document.referrer.indexOf($scope.referrer) == -1) {
            //console.log($scope.referrer);
            //console.log($scope.goLink);
            //console.log(location.href.indexOf($scope.referrer)==-1);
            if (SLeasy.isHttp() && $scope.referrer && $scope.goLink && location.href.indexOf($scope.goLink) == -1) {
                location.href = $scope.goLink;
            }
        }

        var _router = new Router();
        _router.init();

        var isGoto = _router.getRoute(0),
            url = _router.getRoute(1);

        //普通跳转探测
        if (isGoto == 'goTo') {
            //SLeasy.goUrl('http://'+url);
        }

        //淘宝跳转探测
        if (isGoto == 'goTmall' || isGoto == 'goTaobao') {
            if (!SLeasy.isWeixin()) {
                setTimeout(function () {
                    SLeasy.goUrl('http://' + url);
                }, 500);
                SLeasy.is('ios') && SLeasy.goUrl('taobao://' + url);
            }
        }
        //alert(isGoto);
        delete _router;

        //
    }

    //资源路径拼接
    SLeasy.path = function (host, url, addTimeStamp) {
        if (!url) return '';
        var timeStamp = ($config && $config.timeStamp ? $config.timeStamp : '');
        //从app.js?12345678上获取时间戳
        if (timeStamp !== false && !timeStamp && $('script[src*="app.js"]').length) {
            timeStamp = $('script[src*="app.js"]').attr('src').split('?')[1] || '';
        }
        timeStamp = timeStamp ? ('?' + timeStamp) : '';
        if (timeStamp) SLeasy.timeStamp = $scope.timeStamp = timeStamp;
        //
        if (SLeasy.isHttp(url) || SLeasy.isLocalHost(url)) {
            return url + (addTimeStamp === false ? '' : timeStamp);
        } else if (url.search(/^\/\//) !== -1) {
            return url;
        } else if (url.search(/^file:/) == -1) {
            return host + url + (addTimeStamp === false ? '' : timeStamp);
        } else {
            return url.replace(/^\/\//, '');
        }
    }

    //获取url参数
    SLeasy.getRequest = function (name, debug) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        //参数查找
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURIComponent(r[2]);
        //哈希查找
        var h = window.location.hash.substr(1).replace(/^\//, '&').replace(/\?/g, '&').match(reg);
        if (h != null) return decodeURIComponent(h[2]);
        //调试返回时间错字符串
        if (debug) return ('test' + $.now());
        return '';
    }

    //获取url所有参数键值对，包含hash中的参数
    SLeasy.getURLParams = function (url) {
        var params = {};

        // 创建一个URL对象
        var urlObj = new URL(url || location.href);

        // 获取URL中的查询参数
        var searchParams = urlObj.searchParams;

        // 遍历查询参数，保存到对象中
        searchParams.forEach(function (value, key) {
            params[key] = value;
        });

        // 获取URL中的哈希参数
        var hashParams = urlObj.hash.substring(1); // 去掉开头的 #
        if (hashParams) {
            // 解析哈希参数
            var hashParamsArray = hashParams.split('&');
            hashParamsArray.forEach(function (param) {
                var keyValue = param.split('=');
                if (keyValue.length === 2) {
                    var key = decodeURIComponent(keyValue[0]);
                    var value = decodeURIComponent(keyValue[1]);
                    params[key] = value;
                }
            });
        }
        return params;
    }

    //禁止触摸默认滚动
    function stopDefaultScroll(e) {
        if (e.target.id == 'SLeasy_loading' || e.target.id == 'SLeasy_fixBox' || e.target.id == 'SLeasy_rotateTips' || $(e.target).hasClass('SLeasy_sliders') || $(e.target).hasClass('SLeasy_detail')) {
            e.preventDefault();
            e.stopPropagation();
        } else {
            e.stopPropagation();
        }
    }

    SLeasy.touchScroll = function (allowTouchmove, allowSwipe) {
        //触摸滑动默认行为
        if (allowTouchmove) {
            window.removeEventListener("touchmove", stopDefaultScroll, false);
        } else {
            window.addEventListener("touchmove", stopDefaultScroll, false);
        }

        //幻灯全局swipe
        if (!SLeasy.hammerObj().element) return;
        if ($.isEmptyObject($config.loading)) {
            if (allowSwipe) {
                SLeasy.hammerObj().get('swipe').set({enable: true});
            } else {
                SLeasy.hammerObj().get('swipe').set({enable: false});
            }
        } else if (!$.isEmptyObject($config.loading) && $scope.loadingReady) {
            if (allowSwipe) {
                SLeasy.hammerObj().get('swipe').set({enable: true});
            } else {
                SLeasy.hammerObj().get('swipe').set({enable: false});
            }
        }

    }

    //生成图片序列
    SLeasy.addBitmaps = function (layerName, prefix, start, end, suffix, bit) {
        var picUrlArr = [];
        for (var i = start; i <= end; i++) {
            var picUrl = SLeasy.path($config.host, (prefix + SLeasy.bitConvent(i, bit) + suffix));
            picUrlArr.push(picUrl);
        }

        if (!layerName) return picUrlArr;

        //合并位图序列
        if ($scope.bitmaps[layerName] && $scope.bitmaps[layerName].length) {
            $scope.bitmaps[layerName] = $scope.bitmaps[layerName].concat(picUrlArr);
            return $scope.bitmaps[layerName];
        } else {
            $scope.bitmaps[layerName] = picUrlArr;
            return picUrlArr;
        }
    }

    SLeasy.bitConvent = function (num, bit) {
        var numBit = num.toString().length;
        var bits = '', numString;
        for (var n = 0; n < bit - numBit; n++) {//前置填充'0'
            bits += '0';
            numString = bits + num;
        }
        //console.log(numString)
        if (numString) {
            return numString;
        } else {
            return num.toString();
        }
    }

    //摇一摇事件封装
    SLeasy.shake = function (start, callback, tips) {
        if (window.DeviceOrientationEvent) {
            if (device.ios() && window.DeviceOrientationEvent.requestPermission) {
                window.DeviceOrientationEvent.requestPermission().then(function (state) {
                    if (state == 'granted') {
                        var myShakeEvent = new Shake({
                            threshold: 15, // optional shake strength threshold
                            timeout: 1000 // optional, determines the frequency of event generation
                        });

                        if (start == 'start') {
                            myShakeEvent.start();
                            window.addEventListener('shake', callback, false);
                        } else if (start == 'stop') {
                            window.removeEventListener('shake', callback, false);
                            myShakeEvent.stop();
                        }
                    } else {
                        alert('需要授权摇一摇,请刷新或关闭微信后,再次打开进行授权!');
                    }
                }).catch(function (err) {
                    alert('error: ' + err);
                });
            }
        } else {
            alert("您的浏览器不支持HTML5 DeviceOrientation接口");
        }
    }

    //显示元素
    SLeasy.show = function (el, time, onComplete, onUpdate) {
        //arr全部转换为jq $dom数组
        if (Object.prototype.toString.call(el) === '[object Array]') {
            el = el.map(function (item) {
                return (typeof item == 'string' ? $(item) : item);
            });
        }
        if (time) {
            TweenMax.to(el, time >= 100 ? time / 1000 : time, {
                autoAlpha: 1,
                alpha: 1,
                display: 'block',
                ease: Power0.easeNone,
                onComplete: (onComplete || function () {
                }),
                onUpdate: function () {
                    onUpdate && onUpdate();
                    if (Object.prototype.toString.call(el) === '[object Array]') {
                        $.each(el, function (index, target) {
                            target.parent && target.parent.update && target.parent.update();
                        })
                    } else {
                        el.parent && el.parent.update && el.parent.update();
                    }
                }
            });
        } else {
            TweenMax.set(el, {
                autoAlpha: 1, alpha: 1, display: 'block', onComplete: function () {
                    if (Object.prototype.toString.call(el) === '[object Array]') {
                        $.each(el, function (index, target) {
                            target.parent && target.parent.update && target.parent.update();
                        })
                    } else {
                        el.parent && el.parent.update && el.parent.update();
                    }
                }
            });
        }
        return SLeasy;
    }
    //隐藏元素
    SLeasy.hide = function (el, time, onComplete, onUpdate) {
        //arr全部转换为jq $dom数组
        if (Object.prototype.toString.call(el) === '[object Array]') {
            el = el.map(function (item) {
                console.log(typeof item);
                return (typeof item == 'string' ? $(item) : item);
            });
        }
        TweenMax.killTweensOf(el);
        if (time) {
            TweenMax.to(el, time >= 100 ? time / 1000 : time, {
                autoAlpha: 0, alpha: 0, ease: Power0.easeNone, onComplete: (onComplete || function () {
                }), onUpdate: function () {
                    onUpdate && onUpdate();
                    if (Object.prototype.toString.call(el) === '[object Array]') {
                        $.each(el, function (index, target) {
                            target.parent && target.parent.update && target.parent.update();
                        })
                    } else {
                        el.parent && el.parent.update && el.parent.update();
                    }
                }
            });
        } else {
            TweenMax.set(el, {
                autoAlpha: 0, alpha: 0, onComplete: function () {
                    if (Object.prototype.toString.call(el) === '[object Array]') {
                        $.each(el, function (index, target) {
                            target.parent && target.parent.update && target.parent.update();
                        })
                    } else {
                        el.parent && el.parent.update && el.parent.update();
                    }
                }
            });
        }
        return SLeasy;
    }

    //kill元素Tween
    SLeasy.kill = function (el) {
        TweenMax.killTweensOf(el);
        return SLeasy;
    }

    //闪烁元素
    SLeasy.blink = function (el, time, alpha, repeatDealy, count) {
        SLeasy.kill(el);
        TweenMax.to(el, time >= 100 ? time / 1000 : time, {
            autoAlpha: alpha,
            ease: Power0.easeOut,
            yoyo: true,
            repeat: count || -1,
            repeatDelay: (repeatDealy >= 100 ? repeatDealy / 1000 : repeatDealy) || 0,
        });
        return SLeasy;
    }

    //初始化media为可立即播放状态(暂停)
    SLeasy.initMedia = function (mediaSelector, callback, muted) {
        $((mediaSelector || 'audio')).each(function (index, target) {
            $(this).off();
            var $media = $(this)[0];
            console.log($media);
            $media.muted = (muted === false ? false : true);
            if (device.ios() && SLeasy.isWeibo()) $media.muted = false;//微博静音bug
            $media.play();
            if (device.android() && SLeasy.isWechat() && SLeasy.isHttp()) {
                var videoReady = false;
                $(this).one('durationchange', function () {
                    if (videoReady) return;
                    videoReady = true;
                    console.log($media.paused)
                    if ($media.paused) return;
                    $media.pause();
                    $media.currentTime = 0;
                    $media.muted = false;
                    console.log('🎵：media paused~!');
                    callback && callback($media);
                });
                $(this).one('playing', function () {
                    if (videoReady) return;
                    videoReady = true;
                    console.log($media.paused)
                    if ($media.paused) return;
                    $media.pause();
                    $media.currentTime = 0;
                    $media.muted = false;
                    console.log('🎵：media paused~!');
                    callback && callback($media);
                });
            } else if (device.ios() && SLeasy.isHttp()) {
                var videoReady = false;
                $(this).one('canplaythrough', function () {
                    if (videoReady) return;
                    videoReady = true;
                    $media.pause();
                    $media.currentTime = 0;
                    $media.muted = false;
                    console.log('🎵：media paused~!');
                    callback && callback($media);
                });
                $(this).one('playing', function () {
                    if (videoReady) return;
                    videoReady = true;
                    $media.pause();
                    $media.currentTime = 0;
                    $media.muted = false;
                    console.log('🎵：media paused~!');
                    callback && callback($media);
                });
            } else {
                $(this).one('playing', function () {
                    $media.muted = false;
                    $media.pause();
                    $media.currentTime = 0;
                    $media.muted = false;
                    console.log('🎵：media paused~!');
                    callback && callback($media);
                });
            }
            // $(this).on('loadstart', function () {
            //     console.warn('loadstart:' + $media.currentTime + '/' + $media.duration + '::' + $media.readyState);
            // });
            // $(this).on('durationchange', function () {
            //     console.warn('durationchange:' + $media.currentTime + '/' + $media.duration + '::' + $media.readyState);
            // })
            // $(this).on('loadeddata', function () {
            //     console.warn('loadeddata:' + $media.currentTime + '/' + $media.duration + '::' + $media.readyState);
            // })
            // $(this).on('progress', function () {
            //     console.warn('progress:' + $media.currentTime + '/' + $media.duration + '::' + $media.readyState);
            // })
            // $(this).on('canplay', function () {
            //     console.warn('canplay:' + $media.currentTime + '/' + $media.duration + '::' + $media.readyState);
            // })
            // $(this).on('canplaythrough', function () {
            //     console.warn('canplaythrough:' + $media.currentTime + '/' + $media.duration + '::' + $media.readyState);
            // })
            // $(this).on('playing', function () {
            //     console.warn('playing:' + $media.currentTime + '/' + $media.duration + '::' + $media.readyState);
            // })
            // $(this).on('timeupdate', function () {
            //     console.warn('timeupdate:' + $media.currentTime + '/' + $media.duration + '::' + $media.readyState);
            // })
        });
        return SLeasy;
    }

    //初始化media队列
    SLeasy.initMedias = function (els, callback, muted) {
        var i = 0;

        function _initMedia(el, toMuted) {
            SLeasy.initMedia(els[i], function () {
                i = i + 1;
                if (els[i]) {
                    _initMedia(els[i], toMuted);
                } else {
                    callback && callback();
                }
            }, toMuted)
        }

        //
        _initMedia(els[i], (muted || false));
    }

    //获取meida
    SLeasy.media = function (mediaSelector) {
        if ($(mediaSelector).length) {
            return $(mediaSelector)[0];
        } else if ($scope.audios[mediaSelector]) {
            return $scope.audios[mediaSelector];
        } else if ($('.' + mediaSelector).length) {
            $('.' + mediaSelector)[0].stop = $('.' + mediaSelector)[0].pause;
            $('.' + mediaSelector)[0].playing = function () {
                return !$('.' + mediaSelector)[0].paused;
            };
            if (Howler) {
                Howler.mute = function (isMute) {
                    $('audio').each(function () {
                        $(this)[0].muted = isMute;
                    });
                }
            }
            return $('.' + mediaSelector)[0];
        } else {
            alert('未找到对应音频节点~::' + mediaSelector)
        }
    }

    //设置media
    SLeasy.setMedia = function (mediaSelector, url, callback) {
        SLeasy.media(mediaSelector).src = SLeasy.path($config.host, url);
        setTimeout(function () {
            SLeasy.initMedia(mediaSelector, callback);
        }, 50);
        return SLeasy;
    }

    //循环media
    SLeasy.loopMedia = function (mediaSelector, loop, offset, delay) {
        var $media = SLeasy.media(mediaSelector);
        var total = $media.duration;
        var buff = offset || 0.1;
        $media.looper = 0;

        TweenMax.to($media, $media.duration - buff, {
            looper: $media.duration - buff, repeat: loop,
            onRepeat: function () {
                $media.currentTime = 0
            },
            onStart: function () {
                $media.play();
            },
            delay: delay
        });
        return SLeasy;
    }

    SLeasy.noopMedia = function (mediaSelector) {
        var $media = SLeasy.media(mediaSelector);
        SLeasy.kill($media);
        $media.pause();
        return SLeasy;
    }

    SLeasy.playMedia = function (mediaSelector) {
        var $media = SLeasy.media(mediaSelector);
        $media.pause();
        $media.currentTime = 0;
        $media.muted = false;
        $media.play();
        return SLeasy;
    }

    SLeasy.pauseMedia = function (mediaSelector) {
        var $media = SLeasy.media(mediaSelector);
        $media.pause();
        return SLeasy;
    }

    SLeasy.muteMedia = function (mediaSelector, muted) {
        var $media = SLeasy.media(mediaSelector);
        $media.muted = (muted == 0 ? false : true);
        return SLeasy;
    }

    //长按选中
    SLeasy.userSelect = function (el, canSelect) {
        if (canSelect == false) {
            $(el).css({
                'user-select': 'none',
                '-webkit-user-select': 'none',
                '-webkit-touch-callout': 'none',
            })
        } else if (canSelect == true) {
            $(el).css({
                'user-select': 'auto',
                '-webkit-user-select': 'auto',
                '-webkit-touch-callout': 'default',
            })
        }
    }

    //安卓微信同层全屏resize
    SLeasy.resize = function (callback) {
        var oldWidth = window.innerWidth;
        var oldHeight = window.innerHeight;
        window.onresize = function () {
            $('#SLeasy,.SLeasy_sliders').css({
                width: window.innerWidth + 'px',
                height: window.innerHeight + 'px'
            });
            var offsetX = (window.innerWidth - oldWidth) / 2;
            var offsetY = (window.innerHeight - oldHeight) / 2;
            callback(window.innerWidth, window.innerHeight, offsetX, offsetY);
        }
    }

    //
    SLeasy.viewScale = function (num, reverse) {
        return reverse ? num / $scope.viewScale : num * $scope.viewScale;
    }

    //
    SLeasy.respY = function (y, margin, height, offset) {
        return function (index, target) {
            var m = SLeasy.viewScale(margin) || 0;
            var yBottom = y * $scope.viewScale + $(target).height() + $scope.yOffset.center;
            var yTop = y * $scope.viewScale + $scope.yOffset.center;
            if (yBottom > $scope.fixHeight) {
                return $scope.fixHeight - $(target).height() - m;
            } else if (yTop < 0) {
                return m;
            } else if (height && $scope.fixHeight > SLeasy.viewScale(height)) {
                //offset百分比
                if (offset < 1 && offset > -1) {
                    var offsetY = ($scope.fixHeight - SLeasy.viewScale(height)) / 2 * offset;
                } else {
                    var offsetY = offset || ($scope.fixHeight - SLeasy.viewScale(height)) / 4;
                }
                return y * $scope.viewScale + $scope.yOffset.center + offsetY;
            } else {
                return y * $scope.viewScale + $scope.yOffset.center;
            }
        }
    }

    //
    SLeasy.inHeight = function (height) {
        return function () {
            return $scope.fixHeight >= SLeasy.viewScale(height) ? 1 : 0;
        }
    }

    //
    SLeasy.checkPhone = function (phoneNum) {
        return (/^1[3456789]\d{9}$/.test(phoneNum));
    }

    //微信底部导航条高度检测处理
    SLeasy.checkNavBar = function () {
        $scope.hasNavBar = (SLeasy.isWechat() && history.length > 1) ? true : false;
        if ($scope.hasNavBar && !SLeasy.getRequest('SLReload')) {
            if (location.hash) {
                location.hash = location.hash + '&SLReload=1';
            } else {
                location.hash = 'SLReload=1';
            }
            location.reload();
        }
        return $scope.hasNavBar;
    }

    //给当前url添加时间戳
    SLeasy.timeStampURL = function () {
        var search = '';
        if (!location.search) {
            search = ('?ts=' + (new Date().getTime()));
        } else {
            search = location.search;
            var reg = new RegExp("(^|&)ts=([^&]*)(&|$)");
            var r = search.substr(1).match(reg);
            if (r != null) {
                search = search.replace(r[0], ('ts=' + (new Date().getTime())))
            } else {
                search = search + ('&ts=' + (new Date().getTime()));
            }
        }
        var url = location.origin + location.pathname + search + location.hash;
        return url;
    }

    //insert
    SLeasy.insert = function (el, data, noFix) {
        var type = el.replace('.', '').replace('#', '');

        function _imgToDiv() {
            var dfd = new $.Deferred();
            var html = SLeasy.subElement(data, type, null, 'block');
            $(html).appendTo(el);
            $scope.loadingReady = true;
            SLeasy.imgToDiv($(el), dfd);
            // console.info(data)
            return dfd;
        }

        return _imgToDiv().done(function () {
            function setEl(elData) {
                for (var i = 0; i < elData.length; i++) {
                    var el = elData[i];
                    var $dom = $('#SLeasy_' + type + '_' + el.index);//当前子动画元素dom
                    //处理shadownBt的情况
                    if (el.shadownBt) {
                        var bt = el.shadownBt;
                        el.set = $.extend((typeof bt[3] == 'number' ? {
                            x: bt[2],
                            y: bt[3]
                        } : {x: bt[2]}), el.set);
                    }
                    SLeasy.set($dom, el.set, noFix === false ? false : true);
                    if (el.event) {
                        SLeasy.on($dom[0], el.event, el.onEvent);
                    }
                    if (el.on) {
                        for (event in el.on) {
                            SLeasy.on($dom[0], event, el.on[event]);
                        }
                    }
                    //子元素递归
                    if (el.subMotion && el.subMotion.length) {
                        setEl(el.subMotion);
                    }
                }
            }

            setEl(data);
            // $('.SLeasy_' + type).each(function (index, element) {
            //     SLeasy.set($(this), data[index].set, noFix === false ? false : true);
            //     if (data[index].event) {
            //         SLeasy.on(this, data[index].event, data[index].onEvent);
            //     }
            //     if (data[index].on) {
            //         for (event in data[index].on) {
            //             SLeasy.on(this, event, data[index].on[event]);
            //         }
            //     }
            // });
        })
    }

    //旋转状态判断
    SLeasy.isRotated = function () {
        //是否旋转判断
        if ((device.landscape() && $config.width > $config.height) || (device.portrait() && $config.width < $config.height)) {
            $scope.isRotated = false;
        } else {
            $scope.isRotated = true;
        }
        return $scope.isRotated;
    }

    //wrap gsap
    SLeasy.set = function (el, set, noFix) {
        var _set = $.extend({}, set);
        TweenMax.set(el, noFix ? SLeasy.fixProps(_set) : SLeasy.fixProps(_set, true, true));
        return SLeasy;
    }

    SLeasy.to = function (el, to, noFix) {
        var _to = $.extend({}, to);
        TweenMax.to(el, noFix ? SLeasy.fixProps(_to) : SLeasy.fixProps(_to, true, true));
        return SLeasy;
    }

    SLeasy.from = function (el, from, noFix) {
        var _from = $.extend({}, from);
        TweenMax.from(el, noFix ? SLeasy.fixProps(_from) : SLeasy.fixProps(_from, true, true));
        return SLeasy;
    }

    SLeasy.fromTo = function (el, from, to, noFix) {
        var _from = $.extend({}, from);
        var _to = $.extend({}, to);
        TweenMax.fromTo(el, noFix ? SLeasy.fixProps(_from) : SLeasy.fixProps(_from, true, true), noFix ? SLeasy.fixProps(_to) : SLeasy.fixProps(_to, true, true));
        return SLeasy;
    }

    SLeasy.enableInlineVideo = function () {
        if (SLeasy.isWeibo()) {
            $('video').each(function () {
                enableInlineVideo(this);
            });
        }
    }

    SLeasy.on = function (el, event, callback) {
        $(el).each(function (index) {
            var dom = this;
            var HDom = new Hammer(dom),
                e = event;

            if ($config.debugMode) $(dom).addClass('SLeasy_shadownBt');
            dom.style.cursor = "pointer";//鼠标手势

            if ('click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave contextmenu touchstart touchmove touchend'.indexOf(e) != -1) {//点击事件,方便某些广告监测代码
                $(dom).off(e).on(e, function (ev) {
                    callback(ev, index, dom);
                });
            } else if (e == 'hold') {//长按事件
                HDom.get('press').set({time: 1000});
                HDom.off('press').on('press', function (ev) {
                    callback(ev, index, dom);
                });
            } else {
                HDom.get('pan').set({direction: Hammer.DIRECTION_ALL});
                HDom.get('swipe').set({direction: Hammer.DIRECTION_ALL});
                HDom.off(e).on(e, function (ev) {
                    callback(ev, index, dom);
                });//事件绑定
            }
        })
    }

    SLeasy.bg = function (el, url, isImgSrc, isBase64, type) {
        if (el && !url) {
            var bg = $(el).css('backgroundImage').replace('url("', '').replace('")', '').replace('url(', '').replace(')', '');
            return bg;
        }
        var mt = '';
        if (type) {
            var types = {
                'jpg': 'data:image/jpeg;base64,',
                'png': 'data:image/png;base64,',
                'gif': 'data:image/gif;base64,',
            }
            mt = types[type] || '';
        }
        if (isImgSrc) {
            if (url) {
                var bgUrl = isBase64 ? mt + url : SLeasy.path($config.host, url);
                if (url === 'none') bgUrl = '#';
                $(el).attr('src', bgUrl);
            } else {
                $(el).removeAttr("src");
            }
        } else {
            var bgUrl = 'url(' + (isBase64 ? mt + url : SLeasy.path($config.host, url)) + ')';
            if (url === 'none') bgUrl = 'none';
            $(el).css({backgroundImage: bgUrl});
        }
        return SLeasy;
    }

    //加载图片
    SLeasy.loadImg = SLeasy.loadImage = function (url, successCallback, errorCallback) {
        var dfd = new $.Deferred();
        var img = new Image();

        img.onload = function () {
            // 图片成功加载
            if (typeof successCallback === 'function') {
                successCallback(img);
            }
            dfd.resolve(img);
        };

        img.onerror = function (e) {
            // 图片加载错误
            if (typeof errorCallback === 'function') {
                errorCallback(e);
            }
            dfd.reject(e);
        };
        img.src = SLeasy.path($config.host, url);
        return dfd;
    }

    //解决div设置contenteditable为true时，获取焦点后光标位置放在最后
    SLeasy.keepLastIndex = function (obj) {
        if (window.getSelection) {//ie11 10 9 ff safari
            obj.focus(); //解决ff不获取焦点无法定位问题
            var range = window.getSelection();//创建range
            range.selectAllChildren(obj);//range 选择obj下所有子内容
            range.collapseToEnd();//光标移至最后
        } else if (document.selection) {//ie10 9 8 7 6 5
            var range = document.selection.createRange();//创建选择对象
            //var range = document.body.createTextRange();
            range.moveToElementText(obj);//range定位到obj
            range.collapse(false);//光标移至最后
            range.select();
        }
    }

    //复制文字功能函数
    // 必须手动触发 点击事件或者其他事件，不能直接使用js调用！！！
    //  copyText('h5实现一键复制到粘贴板 兼容ios')
    /*兼容性补充：
     移动端：
     安卓手机：微信（chrome）和几个手机浏览器都可以用。
     苹果手机：微信里面和sarafi浏览器里也都可以，
     PC:sarafi版本必须在10.2以上，其他浏览器可以.
     兼容性测试网站：https://www.caniuse.com/*/
    SLeasy.copyText = function (text, msg, callBack) {
        var element = document.createElement('textarea');
        var previouslyFocusedElement = document.activeElement;

        element.value = text;

        // Prevent keyboard from showing on mobile
        element.setAttribute('readonly', '');

        element.style.contain = 'strict';
        element.style.position = 'absolute';
        element.style.top = '-999px';
        element.style.fontSize = '12pt'; // Prevent zooming on iOS

        var selection = document.getSelection();
        var originalRange = false;
        if (selection.rangeCount > 0) {
            originalRange = selection.getRangeAt(0);
        }

        $('#SLeasy').append(element);
        element.select();

        // Explicit selection workaround for iOS
        element.selectionStart = 0;
        element.selectionEnd = text.length;

        var isSuccess = false;
        try {
            isSuccess = document.execCommand('copy');
        } catch (_) {
        }

        element.remove();

        if (originalRange) {
            selection.removeAllRanges();
            selection.addRange(originalRange);
        }

        // Get the focus back on the previously focused element, if any
        if (previouslyFocusedElement) {
            previouslyFocusedElement.focus();
        }
        if (isSuccess) {
            callBack ? callBack() : alert(msg || '已复制到粘贴板~');
        } else {
            alert('该机型不兼容复制函数，请手动复制~');
        }
        return isSuccess;
    }

    // 时间线控制,用于'时间轴模式'下
    SLeasy.play = function (position) {
        $scope.timeline.play(position);
    }

    SLeasy.timeline = function (timelineName) {
        return timelineName ? $scope[timelineName] : $scope.timeline;
    }

    //scrollMagic模式
    SLeasy.unfold = function (duration, height) {
        if (!window.ScrollMagic) return alert('请确认是否开启ScrollMagic模式~')
        var h = 0;
        for (i = 0; i < $config.sliders.length; i++) {
            console.log($config.sliders[i].height);
            if (!$config.sliders[i].height) {
                h += $scope.fixHeight;
            } else {
                h += $config.sliders[i].height * $scope.viewScale;
            }
        }
        var firstSlider = $('.SLeasy_sliders').eq(0);
        var secondSlider = $('.SLeasy_sliders').eq(2);
        TweenMax.set(firstSlider, {height: $config.height * $scope.viewScale + $scope.yOffset.center});
        TweenMax.set('#' + $config.id, {height: height - $scope.yOffset.center || h - $scope.yOffset.center});
        TweenMax.to(window, duration || 1.5, {scrollTo: height || 150, delay: 0.15});
    }

    //shadown button
    SLeasy.shadownBt = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTQ2MEFENzAxNzEzMTFFNUFGRkJFN0NENjYxNTY2QkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTQ2MEFENzExNzEzMTFFNUFGRkJFN0NENjYxNTY2QkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NDYwQUQ2RTE3MTMxMUU1QUZGQkU3Q0Q2NjE1NjZCRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NDYwQUQ2RjE3MTMxMUU1QUZGQkU3Q0Q2NjE1NjZCRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pg+JIfMAAAAQSURBVHjaYvj//z8DQIABAAj8Av7bok0WAAAAAElFTkSuQmCC'

})(
    window.SLeasy = window.SLeasy || {},
    jQuery
);
// SLeasy3-cache
;(function (SLeasy, $, store) {
    //set/read Cache
    SLeasy.cache = function () {
        // console.log('arguments:' + arguments);
        var vars = arguments.length,
            args = arguments;

        //不同参数策略
        var cacheFuncs = [
            function () {
                var value = $.extend(($.cookie() || {}), store.getAll());
                return value;
            },
            function () {
                var value = $.cookie(args[0]) || store.get(args[0]);
                console.log('⭕️ 获取缓存:', args[0] + ' => ' + value);
                return value;
            },
            function () {
                console.log('⭕️ 设置缓存:' + args[0] + '=>' + args[1]);
                $.cookie(args[0], args[1]);
                store.set(args[0], args[1]);
            },
            function () {
                $.cookie((args[0], args[1]), $.extend({expires: 7}, args[2]));
                store.set(args[0], args[1]);
            }
        ];

        //策略执行
        return cacheFuncs[vars]();
    }

    //delete Cache
    SLeasy.noCache = function () {
        var vars = arguments.length;

        //不同参数策略
        var noCacheFuncs = [
            function () {
                store.clear();
                $.each($.cookie(), function (index, value) {
                    $.removeCookie(index);
                })
            },
            function () {
                var value = $.removeCookie(args[0]);
                store.remove(args[0]);
                return value;
            }
        ];

        //策略执行
        return noCacheFuncs[vars]();

    }


})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    store
);
// SLeasy3-viewport
;(function (SLeasy, $, device, T) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();

    //设置视口
    SLeasy.viewport = function (sliderBoxHeight) {
        //重置body
        $("body").css({"padding": 0, "margin": "0 0"});
        $('meta[name="viewport"]').remove();
        $("head").prepend('<meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="format-detection" content="telephone=no, email=no,adress=no"/><meta id="SLeasy_viewport" name="viewport" content="width=device-width, initial-scale=1.0,user-scalable=no,viewport-fit=cover,minimal-ui">');
        //初始化横竖屏状态
        $scope.isLandscape = device.landscape();
        $scope.isDesktop = device.desktop();
        //获取是否旋转状态
        SLeasy.isRotated();
        //适配策略
        var ratio = device.desktop() ? $config.width / $config.height : $(window).width() / $(window).height(),//当前设备屏幕高宽比
            viewport = {
                'width': function () {
                    //刷新幻灯缩放比例因子
                    $scope.viewScale = window.innerWidth / $config.width;
                    $scope.fixWidth = window.innerWidth;
                    return;
                },
                'height': function (thresholdHeight) {
                    var height = window.innerHeight;
                    $scope.viewScale = height / $config.height;//刷新幻灯缩放比例因子
                    if (thresholdHeight) {
                        if (height > thresholdHeight * window.innerWidth / $config.width) {
                            $scope.viewScale = window.innerWidth / $config.width;
                        } else {
                            $scope.viewScale = height / thresholdHeight;
                        }
                    }
                    $scope.viewWidth = window.innerWidth;
                    $scope.fixWidth = $scope.viewWidth > $config.width * $scope.viewScale ? $config.width * $scope.viewScale : $scope.viewWidth;
                    return;
                },
                'auto': function () {
                    $config.width / $config.height >= ratio ? viewport.width() : viewport.height();
                    return;
                },
                'scroll': function () {
                    viewport.width();
                    return viewportContent;
                },
                'threshold': function (threshold) {//阈值模式,当stageMode为指定数值的时候,按阈值高度等比缩放
                    viewport.height(threshold);
                    return;
                },
                'device-width': function () {
                    var viewportContent = 'width=device-width, initial-scale=1.0,user-scalable=no,viewport-fit=cover';
                    $("#SLeasy_viewport").attr('content', viewportContent);
                    return;
                }
            };

        //rotateMode
        if ($config.rotateMode == 'auto') {
            $scope.rotateMode = 'auto';
            if (device.portrait() && $config.width / $config.height < 1) $config.rotateMode = false;
            if (device.portrait() && $config.width / $config.height > 1) $config.rotateMode = true;
            if (device.landscape() && $config.width / $config.height > 1) $config.rotateMode = false;
            if (device.landscape() && $config.width / $config.height < 1) $config.rotateMode = true;
        }
        if (device.desktop()) $config.rotateMode = false;
        //设置viewport-content
        if (typeof $config.stageMode == 'number') {
            viewport['threshold']($config.stageMode)
        } else {
            viewport[$config.stageMode]();
        }
        if ($config.rotateMode) {
            device.landscape() ? viewport.height() : viewport.width();
        }

        var $fixBox = $('<div id="SLeasy_fixBox" style="width:100vw;height: 100vh;position: relative;overflow: hidden;margin: auto"></div>').appendTo('body');
        var boxWidth = $fixBox.width();
        var boxHeight = $fixBox.height();

        //rotateMode
        if ($config.rotateMode) {
            $scope.SLeasyWidth = '100vh';
            $scope.SLeasyHeight = '100vw';
            //
            if (device.landscape()) {
                $scope.viewScale = boxHeight / $config.width;//刷新幻灯缩放比例因子
                var sliderBoxHeight = sliderBoxHeight * $scope.viewScale || $config.height * $scope.viewScale;
                $scope.fixWidth = boxHeight;
                $scope.fixHeight = boxWidth > sliderBoxHeight ? sliderBoxHeight : boxWidth;
                $scope.fixMargin = 0;
                $scope.fixMarginW = boxWidth > sliderBoxHeight ? (boxWidth - sliderBoxHeight) / 2 : 0;
            } else {
                $scope.viewScale = boxWidth / $config.height;//刷新幻灯缩放比例因子
                var sliderBoxHeight = sliderBoxHeight * $scope.viewScale || $config.width * $scope.viewScale;
                $scope.fixWidth = boxHeight > sliderBoxHeight ? sliderBoxHeight : boxHeight;
                $scope.fixHeight = boxWidth;
                $scope.fixMargin = boxHeight > sliderBoxHeight ? (boxHeight - sliderBoxHeight) / 2 : 0;
                $scope.fixMarginW = 0;

            }
        } else {
            $scope.SLeasyWidth = '100vw';
            $scope.SLeasyHeight = '100vh';
            //
            var sliderBoxHeight = sliderBoxHeight * $scope.viewScale || $config.height * $scope.viewScale;
            console.log('viewScale:', $scope.viewScale);
            console.log('sliderBoxHeight:', sliderBoxHeight);
            console.log('boxHeight:', boxHeight);
            $scope.fixWidth = boxWidth > $config.width * $scope.viewScale ? $config.width * $scope.viewScale : boxWidth;
            $scope.fixHeight = boxHeight > sliderBoxHeight ? sliderBoxHeight : boxHeight;
            $scope.fixMargin = boxHeight > sliderBoxHeight ? (boxHeight - sliderBoxHeight) / 2 : 0;
            $scope.fixMarginW = boxWidth > $scope.fixWidth ? (boxWidth - $scope.fixWidth) / 2 : 0;

            //初始化为横屏模式时
            if ($scope.isLandscape && !$scope.isDesktop) {
                $scope.SLeasyWidth = '100vw';
                if (device.iphone() && SLeasy.isWeixin()) {
                    //在iphone的微信内，横屏时window.screen.availWidth不变(2020.12.29)
                    // $scope.SLeasyHeight = window.screen.availWidth;
                    $scope.SLeasyHeight = boxHeight;
                } else {
                    $scope.SLeasyHeight = boxHeight;
                }
                // $scope.viewScale = $scope.SLeasyHeight / $config.height;//刷新幻灯缩放比例因子
                var viewportScale = $fixBox.height() / $scope.SLeasyHeight;
                $scope.landscapeViewportScale = viewportScale = Math.ceil(viewportScale * 1000) / 1000;
                var viewportContent = 'width=device-width, initial-scale=' + viewportScale + ',user-scalable=no,viewport-fit=cover';
                $("#SLeasy_viewport").attr('content', viewportContent);
                // alert(viewportScale + '/' + $scope.SLeasyHeight + '/');
            }
        }
        if (!$scope.rotateMode) $fixBox.remove();
        if (device.desktop() && typeof $config.stageMode != 'number') {
            $scope.viewScale = $config.viewport / (ratio > 1 ? $config.height : $config.width);//刷新幻灯缩放比例因子
            $scope.fixWidth = ratio > 1 ? $config.viewport * ratio : $config.viewport;
            $scope.fixHeight = ratio < 1 ? $config.viewport / ratio : $config.viewport;
            $scope.fixMargin = 0;
            var fixBoxPadding = (window.innerHeight - $scope.fixHeight) / 2 > 0 ? (window.innerHeight - $scope.fixHeight) / 2 : 0;
            $('#SLeasy_fixBox').css({
                width: $scope.fixWidth,
                height: $scope.fixHeight,
                // padding: fixBoxPadding + 'px 0'
            });
            $scope.SLeasyWidth = '100vw';
            $scope.SLeasyHeight = '100vh';
        }
        $scope.maxWidth = $config.width * $scope.viewScale;
        $scope.maxHeight = $config.height * $scope.viewScale;
        if ($scope.fixHeight > window.innerHeight) $scope.fixHeight = window.innerHeight;
        if ($scope.maxHeight > window.innerHeight) $scope.fixMargin = 0;
        if ($scope.maxHeight > window.innerHeight) $scope.maxHeight = window.innerHeight;

        console.log('fixHeight:' + $scope.fixHeight)

        //初始态横竖屏提示
        if (!$.isEmptyObject($config.rotateTips)) {
            $('<div id="SLeasy_rotateTips"></div>').appendTo($config.rotateMode ? '#SLeasy_fixBox' : 'body').css({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '101vw',
                height: '101vh',
                backgroundImage: 'url(' + SLeasy.path($config.host, $config.rotateTips.bg) + ')',
                backgroundSize: 'cover',
                backgroundColor: $config.rotateTips.bgColor,
                backgroundPosition: 'center center',
                zIndex: $config.rotateTips.zIndex || 99,
                display: ($config.rotateTips.orientation === 0 && device.portrait() || $config.rotateTips.orientation === 90 && device.landscape()) ? 'block' : 'none'
            });
        }
        //横竖屏旋转切换事件 --------------------------------------------------
        SLeasy.onResize = function (oMode, eType) {
            if ($scope.isDesktop) return setTimeout(function () {
                location.reload();
            }, 250);
            setTimeout(function () {
                $config.reloadMode && window.location.reload();
            }, 250);
            //刷新是否旋转状态
            SLeasy.isRotated();

            //横竖屏旋转自适应
            if ($scope.rotateMode == 'auto') {
                var margin = $scope.isLandscape ? $scope.fixMarginW : $scope.fixMargin;
                //
                if (oMode == '竖屏') {
                    //
                    if ($config.width / $config.height >= 1) {
                        //原生横屏
                        T.set($scope.sliderBox, {
                            transformOrigin: '0 0',
                            width: '100vh',
                            height: '100vw',
                            x: $scope.sliderBox.height(),
                            margin: margin + 'px auto',
                            rotation: 90,
                        });
                    } else {
                        //原生竖屏
                        T.set($scope.sliderBox, {
                            transformOrigin: '0 0',
                            width: '100vw',
                            height: '100vh',
                            x: 0,
                            y: 0,
                            margin: margin + 'px auto ',
                            rotation: 0,
                        });
                    }
                    //
                    setTimeout(function () {
                        var viewportContent = 'width=device-width, initial-scale=1,user-scalable=no,viewport-fit=cover';
                        $("#SLeasy_viewport").attr('content', viewportContent);
                    }, 50)
                } else if (oMode == '横屏') {
                    //
                    if ($config.width / $config.height >= 1) {
                        //原生横屏
                        T.set($scope.sliderBox, {
                            transformOrigin: '0 0',
                            width: '100vw',
                            height: '100vh',
                            x: 0,
                            y: 0,
                            margin: '0 auto',
                            rotation: 0,
                        });
                    } else {
                        //原生竖屏
                        T.set($scope.sliderBox, {
                            width: '100vh',
                            height: '100vw',
                            transformOrigin: '0 0',
                            y: $scope.sliderBox.width(),
                            margin: 'auto ' + margin + 'px',
                            rotation: -90,
                        });
                    }
                    //
                    setTimeout(function () {
                        var viewportScale = $scope.isLandscape ? ($scope.landscapeViewportScale || 1) : window.innerHeight / boxWidth;
                        // alert($fixBox.height() + ':' + boxWidth + ':' + viewportScale + ':' + window.innerHeight);
                        var viewportContent = 'width=device-width, initial-scale=' + viewportScale + ',user-scalable=no,viewport-fit=cover';
                        $("#SLeasy_viewport").attr('content', viewportContent);
                    }, 300)
                }
            }

            //旋转态横竖屏提示 -----------------------------
            if (!$.isEmptyObject($config.rotateTips)) {
                if (oMode == ($config.rotateTips.orientation === 0 ? '竖屏' : '横屏')) {
                    setTimeout(function () {
                        $('#SLeasy').hide();
                        $('#SLeasy_rotateTips').show();
                    }, 50);
                } else {
                    // $('#SLeasy_rotateTips').remove();
                    $('#SLeasy').show();
                    $('#SLeasy_rotateTips').hide();
                }
            }

            //横竖屏回调
            if ($config.on['resize']) $config.on['resize'](oMode);
        }

        //窗口resize事件，对应钉钉这种可以大小变化的webview
        if($config.reloadMode || SLeasy.isDingding()){
            $(window).resize(function (){
                setTimeout(function (){
                    location.reload();
                },300);
            })
        }

        //scroll
        if ($config.stageMode == 'scroll') {
            $scope.fixHeight = sliderBoxHeight;
        }
    }
})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    device,
    TweenMax
);
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

        //自动旋转模式:中心原点对齐
        if ($scope.rotateMode == 'auto') {
            var bgAlign = {
                "top": 'center top',
                "center": 'center center',
                "bottom": 'center bottom',
                "photo": 'center center'
            }
        }

        //slider label hash
        if (typeof opt.label != 'undefined') {
            $scope.labelHash[opt.label] = opt.index;
        }

        //slider
        var html = '\
 <div class="SLeasy_' + (opt.type || 'sliders') + ' ' + (opt.class || '') + '"\
 style="\
 width: 100%;\
 max-width: ' + $scope.maxWidth + 'px;\
 max-height: ' + $scope.maxHeight + 'px;\
 height: ' + ($config.positionMode == "absolute" || opt.type != 'sliders' ? ($config.scrollMagicMode && opt.height ? (opt.height * $scope.viewScale + 'px') : '100%') : '') + ';\
 background-image: ' + sliderBg() + ';\
 background-repeat: ' + (opt.bgRepeat || "no-repeat") + ';\
 background-size: ' + (opt.bgSize || "cover") + ';\
 background-position: ' + ($config.scrollMagicMode && opt.index != 0 ? 'center center' : bgAlign[(opt.alignMode || $config.alignMode)]) + ';\
 background-color: ' + (opt.bgColor || "transparent") + ';\
 overflow-y: ' + (opt.scroll && $config.motionDirection == "upDown" ? "auto" : ($config.positionMode == "absolute" ? "hidden" : "visible")) + ';\
 overflow-x: ' + (opt.scroll && $config.motionDirection == "leftRight" ? "auto" : ($config.positionMode == "absolute" ? "hidden" : "visible")) + ';\
 position: ' + ($config.scrollMagicMode ? 'static' : 'absolute') + '; \
 display: ' + ($config.scrollMagicMode ? 'block' : (opt.display || 'none')) + ';\
 -webkit-overflow-scrolling: touch;\
 overflow-scrolling: touch;\
 z-index: ' + (opt.type == 'detail' ? 10 : 'auto') + ';\
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

        //scrollMagic
        if (sliderIndex != 0 && $config.scrollMagicMode) display = 'block';

        //不同类型子动画元素生成策略
        var subElement = {
            //img -------------------------------------------------------
            "img": function (opt) {
                //img to div
                return '<div\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_' + (subName[opt.type] || opt.type) + ' ' + (typeof opt.toDiv != 'undefined' && !opt.toDiv ? 'noDiv' : 'toDiv') + '"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';-webkit-overflow-scrolling:touch;overflow-scrolling: touch;">\
				' + (opt.dragMode ? '<div class="dragEl" style="position:relative">' : '') + '<img src="' + SLeasy.path($config.host, opt.img) + '">' + (opt.dragMode ? '</div>' : '') + (opt.content || '') + '\
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
            //a ---------------------------------------------------------
            "a": function (opt) {
                return '<a\
                id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
                class="' + (opt.class || '') + ' SLeasy_a SLeasy_' + (subName[opt.type] || opt.type) + '"\
                href="' + opt.a + '"\
                style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
                </a>'
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
				style="' + (opt.poster ? 'background-image:url(' + SLeasy.path($config.host, opt.poster) + ');background-size:' + (opt.fit || 'cover') + ';' : 'background:transparent;') + 'object-fit:' + (opt.fit || 'cover') + ';" \
				src="' + SLeasy.path($config.host, opt.video, opt.timeStamp || false) + '" type="' + (opt.mediaType || 'video/mp4') + '" poster="' + (SLeasy.path($config.host, opt.poster) || '') + '" ' + (opt.width ? ('width="' + (opt.width * $scope.viewScale || '100%') + '" ') : 'width="100%"') + (opt.height ? ('height="' + (opt.height * $scope.viewScale || '100%') + '" ') : '') + (typeof opt.controls != 'undefined' && !opt.controls ? '' : 'controls ') + (typeof opt.playsinline != 'undefined' && !opt.playsinline ? '' : 'webkit-playsinline playsinline x5-video-player-type="h5-page" x5-video-player-fullscreen="false"') + ' preload="' + (opt.preload || 'auto" ') + (opt.loop !== undefined ? 'loop="loop"' : '') + (opt.muted !== undefined ? 'muted' : '') + '>\
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
                        return '<input type="' + (opt.password ? 'password' : opt.input) + '"\
						id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
						class="' + (opt.class || '') + ' SLeasy_input SLeasy_' + (subName[opt.type] || opt.type) + '"\
						style="outline:none;border:0;padding:0;position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';"\
						value="' + (typeof opt.value != "undefined" ? opt.value : "") + '"\
                        placeholder="' + (opt.placeholder || '') + '"\
                        maxlength="' + (opt.maxlength || '') + '"\
                        >';
                    },
                    'textArea': function () {
                        return '<textArea type="' + opt.input + '"\
						id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
						class="' + (opt.class || '') + ' SLeasy_input SLeasy_' + (subName[opt.type] || opt.type) + '"\
						style="outline:none;border:0;position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';"\
						value="' + (typeof opt.value != "undefined" ? opt.value : "") + '"></textArea>';
                    },
                    'select': function () {
                        var opitionHtml = '';
                        for (var i = 0; i < opt.option.length; i++) {
                            var row = '<option value="' + (opt.value ? opt.value[i] : opt.option[i][1]) + '">' + ($.isArray(opt.option[i]) ? opt.option[i][0] : opt.option[i]) + '</option>';
                            opitionHtml += row;
                        }
                        return '<select\
						id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
						class="' + (opt.class || '') + ' SLeasy_input SLeasy_' + (subName[opt.type] || opt.type) + '"\
						style="margin:0;outline:none;text-align:left;text-align-last:left;-webkit-appearance:none;appearance:none;border:0px solid;background:transparent;position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
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
                    //单个tween -------------------------------
                    if (!aeOpt.length) {
                        var aeLayer = aeOpt.aeLayer || $scope.aeLayer[aeOpt.name];
                        var startFrame = (typeof aeOpt.start != 'undefined') ? aeOpt.start : aeLayer.frame;
                        var frameCount = Math.abs(aeOpt.end - startFrame),
                            time = frameCount / (aeOpt.fps || 25);
                        var aeTl = $scope.aeTimeLine[aeOpt.timeline] = $scope.aeTimeLine[aeOpt.timeline] || new TimelineMax();
                        aeTl.clear();//清除当前层所有tween

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
                            aeTl.clear().fromTo(aeLayer, time, {
                                frame: aeOpt.start,
                                autoAlpha: 1,
                                alpha: 1
                            }, tweenData, '+=' + (aeOpt.offsetTime || 0));
                        } else {
                            aeTl.set(aeLayer, {autoAlpha: 1, alpha: 1});
                            aeTl.to(aeLayer, time, tweenData, '+=' + (aeOpt.offsetTime || 0));
                        }
                        //多个tween -------------------------------------
                    } else if (aeOpt.length && aeOpt.length > 0) {
                        var aeTl = $scope.aeTimeLine[aeOpt[0].timeline] = $scope.aeTimeLine[aeOpt[0].timeline] || new TimelineMax();
                        aeTl.clear();//清除当前层所有tween

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
                            if (typeof $aeOpt.start != 'undefined') {
                                aeTl.add(TweenMax.fromTo(aeLayer, time, {
                                    immediateRender: false,//防止立即刷新frame值
                                    frame: $aeOpt.start,
                                    autoAlpha: 1,
                                    alpha: 1
                                }, tweenData), '+=' + ($aeOpt.offsetTime || 0));
                            } else {
                                aeTl.set(aeLayer, {autoAlpha: 1, alpha: 1});
                                aeTl.add(TweenMax.to(aeLayer, time, tweenData), '+=' + ($aeOpt.offsetTime || 0));
                            }
                        }
                    }
                    return SLeasy;
                }

                //暂停渲染层 -----------------------------------------------------
                SLeasy.pauseAeLayer = function (name) {
                    if (name && name != 'all') {
                        $(gsap.getTweensOf(SLeasy.$scope.aeLayer[name])).each(function (index, tween) {
                            tween.pause();
                        })
                    } else {
                        for (n in $scope.aeLayer) {
                            $(gsap.getTweensOf($scope.aeLayer[n])).each(function (index, tween) {
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
				        style="-webkit-overflow-scrolling:touch;overflow-scrolling:touch;position:' + $config.positionMode + ';display:' + (display || (opt.set && opt.set.display) || 'none') + ';width:' + (opt.sprite[1] - (opt.sprite[3] || 0)) * $scope.viewScale + 'px;height:' + (opt.sprite[2] - (opt.sprite[3] || 0)) * $scope.viewScale + 'px;overflow:hidden">' + (function () {
                            if ($.isArray(opt.sprite[0])) {
                                var _html = '<div class="SLeasy_spriteSheet" style="width: max-content">';
                                for (var i = 0; i < opt.sprite[0].length; i++) {
                                    _html += '<div class="SLeasy_spriteElement" style="' + (opt.float ? 'float:left' : '') + '"><img src="' + SLeasy.path($config.host, opt.sprite[0][i]) + '"></div>'
                                }
                                return _html;
                            } else {
                                return '<div class="SLeasy_spriteSheet"><img src="' + SLeasy.path($config.host, opt.sprite[0]) + '">'
                            }
                        })() + '</div>\
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
                    var frameCount = Math.abs((opt && opt.end ? opt.end : j * k) - (opt && typeof opt.start != 'undefined' ? opt.start : ($spriteImg.frame || 0)));
                    var duration = frameCount / (opt && opt.fps || 25);

                    console.log(duration + '===' + $sprite.w + '/' + $sprite.h + '===' + j + '/' + k + '===' + frameCount);

                    $spriteImg.frame = $spriteImg.frame || 0;
                    //设置sprite padding
                    if (opt && opt.paddingOrCrop) {
                        $(selector).css({
                            width: $sprite.w - ($scope.viewScale * (opt.paddingOrCrop || 0)),
                            height: $sprite.h - ($scope.viewScale * (opt.paddingOrCrop || 0)),
                        });
                    }
                    TweenMax.fromTo($spriteImg, duration,
                        {
                            frame: (opt && typeof opt.start != 'undefined') ? opt.start : ($spriteImg.frame || 0)
                        },
                        {
                            ease: SteppedEase.config(frameCount),
                            roundProps: "frame",
                            frame: (opt && opt.end) || frameCount,
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

                //stopSprite
                SLeasy.stopSprite = function (selector) {
                    var $sprite = $(selector)[0],
                        $spriteImg = $(selector).find('.SLeasy_spriteSheet')[0]
                    TweenMax.killTweensOf($spriteImg);
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

                    if ($spriteImg.frame === undefined) {
                        $spriteImg.frame = 0
                    } else {
                        $spriteImg.frame = frame
                    }
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
                SLeasy.loopSprite = function (selector, start, end, motionTime, delay, loopCount, paddingOrCrop, scaleX, scaleY) {
                    var _loopCount = loopCount || -1;
                    var _currentLoopCount = 0;
                    var $sprite = $(selector)[0];
                    $sprite.loop = true;
                    $sprite.frame = start;
                    SLeasy.gotoSprite(selector, $sprite.frame, 0, paddingOrCrop, scaleX, scaleY);
                    loop();

                    function loop() {
                        setTimeout(function () {
                            if (!$sprite.loop) return;
                            if (end > start) {
                                $sprite.frame++;
                            } else {
                                $sprite.frame--;
                            }
                            if ($sprite.frame == end) {
                                var onComplete = function () {
                                    _currentLoopCount++;
                                    // console.log(_currentLoopCount + ':' + _loopCount)
                                    if (_currentLoopCount < _loopCount || _loopCount == -1) {
                                        SLeasy.gotoSprite(selector, start, 0, paddingOrCrop);
                                    } else {
                                        $sprite.loop = false;
                                    }
                                }
                                SLeasy.gotoSprite(selector, $sprite.frame, motionTime, paddingOrCrop, 1, 1, onComplete);
                                $sprite.frame = start;
                            } else {
                                SLeasy.gotoSprite(selector, $sprite.frame, motionTime, paddingOrCrop);
                            }
                            if ($sprite.loop) loop();
                        }, (motionTime + delay) * 1000);
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
                        return $spriteImg.frame || 0;
                    } else {
                        $spriteImg.frame = frame;
                        return SLeasy;
                    }
                }

                //spriteNext
                SLeasy.spriteNext = function (selector, start, end, motionTime, onComplete) {
                    var $sprite = $(selector)[0];
                    $sprite.frame = SLeasy.spriteFrame(selector);
                    if (end > start) {
                        $sprite.frame++;
                    } else {
                        $sprite.frame--;
                    }
                    if (end > start && $sprite.frame > end) {
                        SLeasy.gotoSprite(selector, start, 0);
                        $sprite.frame = start;
                        $sprite.frame++;
                    }
                    if (end < start && $sprite.frame < end) {
                        SLeasy.gotoSprite(selector, start, 0);
                        $sprite.frame = start;
                        $sprite.frame--;
                    }

                    if (end > start && $sprite.frame == end) {
                        var _onComplete = function () {
                            SLeasy.gotoSprite(selector, start, 0, 0, 1, 1, onComplete);
                        }
                        SLeasy.gotoSprite(selector, $sprite.frame, motionTime || 0.5, 0, 1, 1, _onComplete);
                        $sprite.frame = start;
                    } else if (end < start && $sprite.frame == end) {
                        var _onComplete = function () {
                            SLeasy.gotoSprite(selector, end, 0, 0, 1, 1, onComplete);
                        }
                        SLeasy.gotoSprite(selector, $sprite.frame, motionTime || 0.5, 0, 1, 1, _onComplete);
                        $sprite.frame = end;
                    } else {
                        SLeasy.gotoSprite(selector, $sprite.frame, motionTime || 0.5, 0, 1, 1, onComplete);
                    }
                    SLeasy.spriteFrame(selector, $sprite.frame);
                }

                return spriteHtml[opt.engine || 'img']();
            }
        }

        //sub element html
        var html = '';

        function appendToDiv(inputStr, appendString) {
            // 如果输入字符串已经以 '</div>' 结尾，直接将要拼接的字符串追加到末尾
            if (inputStr.lastIndexOf('</div>') === inputStr.length - 6) {
                return inputStr.slice(0, -6) + appendString + '</div>';
            } else {
                // 否则，查找 '</div>' 的位置，然后在其前面插入要拼接的字符串
                var index = inputStr.indexOf('</div>');
                if (index !== -1) {
                    return inputStr.slice(0, index) + appendString + inputStr.slice(index);
                } else {
                    // 如果没有找到 '</div>'，则返回原始字符串
                    return inputStr;
                }
            }
        }

        //subMotion element
        function subElementHtml(dataArr, type, sliderIndex, display) {
            var subHtml = '';
            if (dataArr && dataArr.length) {
                for (var i = 0; i < dataArr.length; i++) {
                    //console.log(index);
                    var subMotion = dataArr[i];
                    $.extend(subMotion, {index: (sliderIndex || 0) + '_' + i});//合并slider初始化索引及当前子元素初始化索引，以便生成唯一id

                    //subMotion label hash
                    if (typeof subMotion.label != 'undefined') {
                        $scope.labelHash[subMotion.label] = '#SLeasy_' + (subName[type] || type) + '_' + subMotion.index;
                    }

                    //遍历子元素生成策略并执行
                    var row = '';
                    $.each(subElement, function (index, value) {
                        if (subMotion[index]) {
                            row = subElement[index]($.extend(subMotion, {type: type, sliderIndex: sliderIndex}));//并入子动画所属页面的类型值
                            return;
                        }
                    });

                    //事件绑定
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

                    //子元素递归
                    if (subMotion.subMotion && subMotion.subMotion.length) {
                        // console.log('递归');
                        var subSubHtml = subElementHtml(subMotion.subMotion, type, (sliderIndex || 0) + '_' + i, 'block');
                        // console.info('row---------------------')
                        // console.log(row)
                        // console.info('subSubHtml---------------------')
                        // console.log(subSubHtml)
                        subHtml += appendToDiv(row, subSubHtml);
                        // console.log('appendToDiv(row, subSubHtml)-----------------');
                        // console.log(appendToDiv(row, subSubHtml));
                    } else {
                        subHtml += row;
                    }
                }
            }
            // console.log('subHtml:', subHtml)
            return subHtml;
        }

        html = subElementHtml(subArr, type, sliderIndex, display);
        // console.log(html);
        return html;
    }

})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    TweenMax || TweenLite
);
// SLeasy3-imgToDiv
;(function (SLeasy, $, T) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();

    SLeasy.imgToDiv = function ($myDom, dfd) {
        var $dom = $myDom || $scope.sliderBox;
        var transformTotal = $myDom ? $myDom.find('.toDiv img').length : $scope.sliderBox.find('.toDiv img').length,
            transformedCount = 0;

        //no any subImg
        if ($.isEmptyObject($config.loading) ? (transformTotal == 0) : ($scope.loadingReady && transformTotal == 0)) {
            setTimeout(function () {
                console.log('SLeasy初始化完毕!~~~~~~~~~~~~~~~~~~~~')
                dfd.resolve();//初始化完毕
                //如果幻灯设置了自动开始，而且没有开启自动路由，且url没有路由哈希参数，则默认显示第一页
                $.isEmptyObject($config.loading) && TweenMax.set($('.SLeasy_sliders').eq(0), {autoAlpha: 0});
                if (!$scope.loadingReady && (!$config.routerMode && !$scope.router.getRoute()[0])) {
                    SLeasy.goSlider(0)
                } else {
                    !$scope.loadingReady && SLeasy.goSlider($scope.router.getRoute()[0]);
                }
                $scope.initReady = true;
            }, 0)
        }

        //to div
        $dom.find(".toDiv img").each(function (index, element) {//获取所有图片宽度
            $(this).load(function (e) {
                var w = $(this)[0].width,
                    h = $(this)[0].height,
                    style = {
                        'backgroundImage': 'url(' + $(this).attr("src") + ')',
                        'backgroundRepeat': 'no-repeat',
                        'backgroundSize': '100% auto',
                        'backgroundPosition': 'center',
                        'width': w * $scope.viewScale + 'px',
                        'height': h * $scope.viewScale + 'px'
                    }

                $(this).parent().css(style);
                $(this).remove();
                transformedCount++;
                // console.log('============'+w+':'+h+'==============');
                if ($scope.initReady && transformedCount == transformTotal) {
                    console.log('SLeasy初始化完毕!~~~~~~~~~~~~~~~~~~~~');
                    //重新set float元素以获得正确的尺寸
                    $('.SLeasy_floatElement').each(function (index, element) {
                        T.set($(this), $.extend({zIndex: $config.floatZIndex || 10}, $config.floats[index].set));
                    });
                    // setLoadingElement($config.loading.subMotion);//todo 自定loading是否需要再次set???
                    function setLoadingElement(data) {
                        if (data && data.length) {
                            for (var i = 0; i < data.length; i++) {
                                var $dom=$('#SLeasy_loadingElement_'+data[i].index)
                                if($dom.length && data[i].set) T.set($dom, data[i].set);
                                if (data[i].subMotion) {
                                    setLoadingElement(data[i].subMotion);
                                }
                            }
                        }
                    }
                    dfd && dfd.resolve();//初始化完毕
                    //如果幻灯设置了自动开始，而且没有开启自动路由，且url没有路由哈希参数，则默认显示第一页
                    $.isEmptyObject($config.loading) && TweenMax.set($('.SLeasy_sliders').eq(0), {autoAlpha: 0});
                    if (!$scope.loadingReady && (!$config.routerMode && !$scope.router.getRoute()[0])) {
                        SLeasy.goSlider(0)
                    } else {
                        !$scope.loadingReady && SLeasy.goSlider($scope.router.getRoute()[0]);
                    }
                    $scope.initReady = true;
                }
            });
        });
        //no to div
        $dom.find(".noDiv img").each(function (index, element) {//获取所有图片宽度
            $(this).one('load', function (e) {
                //naturalWidth、naturalHeight图片原始尺寸
                var w = $(this)[0].naturalWidth,
                    h = $(this)[0].naturalHeight,
                    style = {
                        'width': w * $scope.viewScale + 'px',
                        'height': h * $scope.viewScale + 'px',
                        'display': 'block'
                    }
                console.log('============' + w + ':' + h + '==============');
                $(this).css(style);
                // $(this).parent().css(style);
            });
        });
        //svg
        $dom.find('svg').not('.SLeasy_loadingSVG').each(function (index, element) {
            var w = parseFloat($(this).attr('width')) || parseFloat($(this).width()),
                h = parseFloat($(this).attr('height')) || parseFloat($(this).height());
            $(this).attr({
                // viewBox: '0 0 ' + w + ' ' + h,
                width: Math.round(w * $scope.viewScale) + 'px',
                height: Math.round(h * $scope.viewScale) + 'px',
            }).css({display: 'block'});
            if ($(this)[0].viewBox.baseVal.width == 0 && $(this)[0].viewBox.animVal.width == 0) alert('请设置svg的viewBox属性值~')
        })
    }
})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    TweenMax || TweenLite
);
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
// SLeasy3-subMotion
;(function (SLeasy, $, T) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();
    $scope.timelines = {};


    //subMotion,参数:为单个slider/detail配置对象数据
    SLeasy.subMotion = function (subMotionArr, type, motionTime, timeLineName) {
        console.log('subMotion子元素动画预备~');
        console.log(timeLineName);
        if (!subMotionArr || !subMotionArr.length) return;

        //不同类型幻灯对应的子元素关键字标识
        var subName = {
            "sliders": "subMotion",
            "details": "detailMotion",
            "floats": 'floatElement',
            "loading": 'loadingElement'
        }


        //console.log($scope.sliderIndex);
        var count = subMotionArr.length;//子动画数量

        var subCallback = {
            "sliders": function () {
                $config.on['subMotion']($scope.sliderIndex)
            },//子元素动画开始回调,
            "details": function () {
                $config.on['detailMotion']($scope.detailIndex)
            },//详情页子元素动画开始回调
            'floats': ''
        }

        //console.log(subMotionArr);
        subCallback[type] && subCallback[type]();//执行config相应类型的子动画回调


        //根据不同类型（幻灯或详情页），初始化timeLine及设置子动画开始、完成状态
        if (timeLineName) {
            var tl = new TimelineMax({autoRemoveChildren: $config.autoRemoveChildren, paused: true});
            $scope.timelines[timeLineName] = tl;
        } else if (type && type != 'sliders') {
            var tl = new TimelineMax({autoRemoveChildren: $config.autoRemoveChildren, paused: true});
            $scope.timelines[type] = tl;
            // console.warn(type + 'Timeline')
            $scope.isDetailMotion = 0;//详情页子动画开始、完成状态
        } else {
            var tl = $scope.timeline = new TimelineMax({autoRemoveChildren: $config.autoRemoveChildren, paused: true});
            $scope.isSubMotion = 0;//子动画是否正在播放状态
        }

        var totalTime = 0;
        for (var i = 0; i < count; i++) {
            var subMotion = subMotionArr[i],//当前子动画
                preSubMotion = subMotionArr[i - 1],//上一子动画
                $dom = $('#SLeasy_' + (subName[type] || type) + '_' + subMotion.index),//当前子动画元素dom
                time = subMotion.time || 0,//time
                preTime = preSubMotion && preSubMotion.time ? preSubMotion.time : 0;
            /*
             如果是第一个子动画，则当前子动画总时间累加值为，当前子动画时间，
             如果不是第一个子动画，则当前子动画总时间累加值为，当前子动画时间:
             如果当前子动画有设置start值:
             如果preTime - subMotion.start > subMotion.time，累加0
             否则累加subMotion.time - (preTime - subMotion.start)
             如果当前子动画没有设置start值，则累加上一子动画的运动时间
             */
            // totalTime = preSubMotion ? (totalTime + (subMotion.start ? (preTime - subMotion.start > subMotion.time ? 0 : subMotion.time - (preTime - subMotion.start)) : subMotion.time)) : subMotion.time;
            /*
             如果是第一个子动画，则子动画开始时间为幻灯页运动完成的时间，
             如果不是第一个子动画，则之前累加的startTime，加上当前的start值:
             如果当前子动画没有设置start值，则累加上一子动画的运动时间，以连接其后
             如果当前子动画没有设置运动时间time，则直接加0
             */
            // console.warn(subMotion.class);
            // console.warn('preSubMotion:' + (preSubMotion ? true : false));
            // console.warn('startTime01:' + startTime);
            // console.warn(subMotion);
            // console.warn('subMotion.time:' + subMotion.time);
            // console.warn('time:' + time);

            // console.warn('=============================================');
            // subMotion.pause && console.log('pasue:' + startTime);
            // console.log('name:' + subMotion.class);
            // console.log('preTime:' + preTime);
            // console.log(totalTime == 0 && (time && subMotion.start == undefined));

            if (totalTime == 0 && (time && subMotion.start == undefined)) {
                //第一个有time,没有start的子元素
                // console.warn('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
                //+preTime是考虑首尾页情况下，motionTime为0，totalTime会连续为0的问题
                totalTime = totalTime + motionTime + preTime;
                var startTime = totalTime;
                // console.warn(totalTime)
            } else if (time && subMotion.start && typeof subMotion.start == 'string') {
                //有time，有start，且start值为'+=n,-=n'字符串时
                // console.warn('2------------------')
                // console.warn('preTime:' + preTime);
                // console.warn(totalTime + '+' + (preTime + parseFloat(subMotion.start.split('+=')[1])));
                // console.warn('------------------')
                if (subMotion.start.indexOf('+=') != -1) totalTime = totalTime + preTime + parseFloat(subMotion.start.split('+=')[1]);
                if (subMotion.start.indexOf('-=') != -1) totalTime = totalTime + preTime - parseFloat(subMotion.start.split('-=')[1]);
                var startTime = totalTime;
            } else {
                //有/无time，有/无start为数字时
                // console.warn('1-----------------')
                // console.warn('preTime:' + preTime)
                // console.warn(totalTime + '+' + (time ? (subMotion.start !== undefined ? subMotion.start : preTime) : 0))
                // console.warn('-----------------')
                totalTime = totalTime + (time ? (subMotion.start !== undefined ? subMotion.start : preTime) : preTime);
                var startTime = time ? totalTime : 0;//无time的set子元素，startTime值为0
            }

            var subIn = $.extend({force3D: $config.force3D}, subMotion.in || {}),//in
                subShow = $.extend({display: 'block', force3D: $config.force3D}, subMotion.show || {}),//show
                set = subMotion.set ? $.extend({
                    position: 'absolute',
                    display: 'block'
                }, subMotion.set) : {position: 'absolute', display: 'block'};//set
            if (typeof subMotion.onComplete == 'function') {
                subShow.onComplete = subMotion.onComplete;//打平onCompelte
                // console.log(subShow);
            }
            if (typeof subMotion.onStart == 'function') {
                subShow.onStart = subMotion.onStart;//打平onCompelte
                // console.log(subShow);
            }
            // console.warn('totalTime:::' + totalTime);
            // console.warn('startTime:::::::' + startTime);
            // console.warn('----------------------------------');
            //判断当前幻灯是否包含ae渲染层
            if ($dom.find('.SLeasy_ae').length) {
                console.log($dom);
                //如果渲染层所属的sliderIndex等于当前幻灯索引,则在子元素动画开始时播放ae渲染层时间线
                $.extend(subShow, {
                    onStart: (function (_$dom, _subMotion) {
                        return function () {
                            console.log(_$dom);
                            console.log(_subMotion);
                            $.each(_subMotion.ae.layer, function (index, layer) {
                                console.log('AELayer:' + layer);
                                var layerName = layer[0];
                                var aeLayer = $scope.aeLayer[layerName];
                                if (aeLayer.sliderIndex == $scope.sliderIndex || $dom.find('.SLeasy_loading')) {
                                    aeLayer.frame = 0;//重置帧时间线
                                    console.log(aeLayer)
                                    aeLayer.autoPlay && T.to(aeLayer, aeLayer.time, aeLayer.tweenData);
                                }
                            });
                        }
                    })($dom, subMotion)
                });
                if (typeof subMotion.set.y == 'undefined') subMotion.set.y = 0;
            }

            // console.log($dom);
            //roundXY
            if (subMotion.roundXY) {
                if (subMotion.set && subMotion.set.x) subMotion.set.x = Math.round(subMotion.set.x);
                if (subMotion.set && subMotion.set.y) subMotion.set.y = Math.round(subMotion.set.y);
                if (subMotion.in && subMotion.in.x) subMotion.in.x = Math.round(subMotion.in.x);
                if (subMotion.in && subMotion.in.y) subMotion.in.y = Math.round(subMotion.in.y);
                if (subMotion.show && subMotion.show.x) subMotion.show.x = Math.round(subMotion.show.x);
                if (subMotion.show && subMotion.show.y) subMotion.show.y = Math.round(subMotion.show.y);
            }
            //set
            // console.log(subMotion.set)
            !subMotion.el && subMotion.set && T.set($dom, subMotion.set);

            !subMotion.set && T.set($dom, set);//默认set

            //add label
            subMotion.label && tl.addLabel(subMotion.label);

            //add pause
            subMotion.pause && tl.addPause(startTime);

            //add motion
            if (subMotion.el) {
                subMotion.set && T.set($(subMotion.el), subMotion.set);
                if (subMotion.to) {
                    //打平onCompelte
                    if (typeof subMotion.onComplete == 'function') {
                        subMotion.to.onComplete = subMotion.onComplete;//打平onCompelte
                        // console.log(subShow);
                    }
                    tl.add(T.to($(subMotion.el), time, $.extend({force3D: $config.force3D}, subMotion.to)), startTime);
                }
            } else {
                if (set.display && set.display == 'none') subShow.display = 'none';
                tl.add(T.fromTo($dom, time, subIn, subShow), startTime);
                // console.log(subMotion.class)
                // console.dir(set)
                // console.log(subIn)
                // console.log(subShow)
            }
            // console.log($dom)
            // console.log('time:' + time)
            // console.log('totalTime:' + totalTime)
            // console.log('startTime:' + startTime)
            // console.log(subIn)
            // console.log(subShow)
            // console.log(subMotion.to)
            // console.log(';;;;;;;;;;;;;;;;;;;;;;;;;')

            $scope.isSubMotion = 1;//子动画是否正在播放状态

            //add pause to
            subMotion.pauseTo && tl.addPause();

            //子元素递归
            if (subMotion.subMotion && subMotion.subMotion.length) {
                var tlName = subMotion.class ? subMotion.class.split(' ')[0] : null;
                SLeasy.subMotion(subMotion.subMotion, type, totalTime, tlName);
            }
        }

        //relative模式处理
        if ($config.positionMode == 'relative') {
            tl.eventCallback('onStart', function () {
                $("html,body").css("overflow", "hidden")
            });
            tl.eventCallback('onComplete', function () {
                $("html,body").css("overflow", "visible")
            });
        }

        //play
        tl.play();
        // console.log(';;;;;;;;;;;;;;;;;;;;;;;;;')
    }
})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    TweenMax || TweenLite
);
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
// SLeasy3-transition
;(function (SLeasy, $, T) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();

    //go slider
    SLeasy.goSlider = function (index, duration, fx) {
        var nextIndex = SLeasy.nextIndex(index);
        if ($config.routerMode) {
            //var detailHash=$scope.router.getRoute(1);
            $scope.router.setRoute(0, nextIndex + '');//设置路由
        } else {
            SLeasy.transit(nextIndex, duration, fx);
        }
        return SLeasy;
    }

    SLeasy.nextIndex = function (index) {
        //如果是label标签，并且不包含‘—=’或者‘+=’,则获取标签对应的索引值
        var index = (typeof index == 'number' || index.indexOf('-=') != -1 || index.indexOf('+=') != -1) ? index : SLeasy.label(index);
        console.log('当前幻灯索引:', index);
        var totalIndex = $scope.sliders.length - 1,//最大索引值
            total = totalIndex + 1,//幻灯总数
            nextIndex;

        //非循环模式
        if (!$config.loopMode) {
            //不同参数类型策略，获取下一页索引，int或者string,如：‘+=1，-=1’
            var indexType = {
                "number": function () {
                    if (index >= 0 && index <= totalIndex) {//索引边界内
                        $scope.isSliderEdge = false;
                        nextIndex = index;
                    } else {//索引边界外
                        $scope.isSliderEdge = true;
                        if (index > totalIndex) {
                            nextIndex = totalIndex;
                        } else {
                            nextIndex = 0;
                        }
                    }
                },
                "string": function () {
                    var _arr = index.split('=');
                    if (_arr[0] == '-') {
                        nextIndex = ($scope.sliderIndex - parseInt(_arr[1]) < 0) ? 0 : $scope.sliderIndex - parseInt(_arr[1]);
                        $scope.isSliderEdge = ($scope.sliderIndex - parseInt(_arr[1]) < 0) ? true : false;
                    } else if (_arr[0] == '+') {
                        nextIndex = ($scope.sliderIndex + parseInt(_arr[1]) > totalIndex) ? totalIndex : $scope.sliderIndex + parseInt(_arr[1]);
                        $scope.isSliderEdge = ($scope.sliderIndex + parseInt(_arr[1]) > totalIndex) ? true : false;
                    } else {
                        SLeasy.goSlider(0);
                        return console.warn('幻灯跳转索引值错误！');
                    }
                },
            }

            if (typeof indexType[(typeof index)] == 'undefined') {
                SLeasy.goSlider(0);
                return console.warn('幻灯索引参数错误~！');
            }
            indexType[(typeof index)]();//策略执行
            //$scope.sliderIndex=nextIndex;//更新当前slider索引
            return nextIndex;

        } else {
            //循环模式
            var indexType = {
                "number": function () {
                    nextIndex = index % total >= 0 ? index % total : total + index % total;
                },
                "string": function () {
                    var _arr = index.split('=');
                    if (_arr[0] == '-') {
                        nextIndex = ($scope.sliderIndex - parseInt(_arr[1])) < 0 ? total + ($scope.sliderIndex - parseInt(_arr[1])) % total : ($scope.sliderIndex - parseInt(_arr[1])) % total;//索引取模

                    } else if (_arr[0] == '+') {
                        nextIndex = ($scope.sliderIndex + parseInt(_arr[1])) % total;
                    } else {
                        SLeasy.goSlider(0);
                        return console.warn('幻灯跳转索引值错误！');
                    }
                },
            }
            if (typeof indexType[(typeof index)] == 'undefined') {
                SLeasy.goSlider(0);
                return console.warn('幻灯索引参数错误~！');
            }
            indexType[(typeof index)]();//策略执行
            //$scope.sliderIndex=nextIndex;//更新当前slider索引
            return nextIndex;
        }

    }

    SLeasy.transitFX = function (nextIndex, duration, fx) {
        var _in,
            _out,
            _show,
            _set,
            motionFX = fx ? SLeasy.getMotionFX(fx[0], fx[1], fx[2]) : SLeasy.getMotionFX(),//获取全局配置切换效果
            customFX
        ;

        //如果当前幻灯索引小于下一页索引,则按预设效果切换，反之，反转切换效果
        console.log('幻灯预备切换:', $scope.sliderIndex + ' --> ' + nextIndex);
        $scope.preSlider = $scope.sliderIndex;


        //自定义切换效果
        customFXAguments = $config.sliders[nextIndex].motionFX || $config.sliders[nextIndex].fx || $config.sliders[nextIndex].FX || null;
        customFX = customFXAguments ? SLeasy.getMotionFX(customFXAguments[0], customFXAguments[1], customFXAguments[2]) : {};


        //in
        if ($scope.sliderIndex < nextIndex) {
            if ($scope.sliderIndex == 0 && nextIndex == $config.sliders.length - 1 && $config.loopMode) {//为最首，最末页情况
                _in = $.extend({display: 'block'}, (customFX.out || motionFX.out));
            } else {
                _in = $.extend({display: 'block'}, (customFX.in || motionFX.in));
            }
        } else {
            if ($scope.sliderIndex == $config.sliders.length - 1 && nextIndex == 0 && $config.loopMode) {//为最首，最末页情况
                _in = $.extend({display: 'block'}, (customFX.in || motionFX.in));
            } else {
                _in = $.extend({display: 'block'}, (customFX.out || motionFX.out));
            }
        }

        //out
        if ($scope.sliderIndex < nextIndex) {
            if ($scope.sliderIndex == 0 && nextIndex == $config.sliders.length - 1 && $config.loopMode) {//为最首，最末页情况
                _out = $.extend({display: 'none'}, (customFX.in || motionFX.in));
            } else {
                _out = $.extend({display: 'none'}, (customFX.out || motionFX.out));
            }
        } else {
            if ($scope.sliderIndex == $config.sliders.length - 1 && nextIndex == 0 && $config.loopMode) {//为最首，最末页情况
                _out = $.extend({display: 'none'}, (customFX.out || motionFX.out));
            } else {
                _out = $.extend({display: 'none'}, (customFX.in || motionFX.in));
            }

        }

        if ($config.sliders.length == 2) {
            if ($scope.sliderIndex < nextIndex) {
                _in = $.extend({display: 'block'}, (customFX.in || motionFX.in));
                _out = $.extend({display: 'none'}, (customFX.out || motionFX.out));
            } else {
                _in = $.extend({display: 'block'}, (customFX.out || motionFX.out));
                _out = $.extend({display: 'none'}, (customFX.in || motionFX.in));
            }
        }

        //show
        if ($scope.sliderIndex == nextIndex) {//相同幻灯索引标识
            $scope.isSameSlider = true;
        } else {
            $scope.isSameSlider = false;
        }
        _show = $.extend({
            //show FX
            onStart: function () {
                var currentSlider = $scope.sliders.eq($scope.sliderIndex),//当前幻灯
                    currentSubMotion = currentSlider.find($scope.subMotion);//当前幻灯子元素
                var nextSlider = $scope.sliders.eq(nextIndex);//下一幻灯

                //如果下一页是scroll模式
                if ($config.sliders[nextIndex].scroll || $config.scrollMagicMode) {
                    SLeasy.touchScroll(true, false);
                    nextSlider.scroll(function (e) {
                        //console.log(e);
                        var scrollTop = $config.motionDirection == 'upDown' ? e.target.scrollTop : e.target.scrollLeft,
                            scrollTopMax = $config.motionDirection == 'upDown' ? Math.floor(e.target.scrollHeight - $scope.fixHeight) : Math.floor(e.target.scrollWidth - $scope.fixWidth);
                        //console.log(scrollTop + ':' + scrollTopMax);
                        //如果autoSwitch参数未设置（即默认状态），或者切换方向上的参数值为false，则自动切换幻灯页
                        if (scrollTop <= 0) {
                            $scope.isAtTop = true;
                            if (!$config.sliders[nextIndex].autoSwitch) return;
                            if ($config.sliders[nextIndex].autoSwitch || $config.sliders[nextIndex].autoSwitch[0]) {
                                // SLeasy.goSlider(nextIndex - 1);
                                $scope.isAtTop = false;
                            }
                        } else if (scrollTop >= scrollTopMax) {
                            $scope.isAtBottom = true;
                            if (!$config.sliders[nextIndex].autoSwitch) return;
                            if ($config.sliders[nextIndex].autoSwitch || ($config.sliders[nextIndex].autoSwitch[1])) {
                                // SLeasy.goSlider(nextIndex + 1);
                                $scope.isAtBottom = false;
                            }
                        } else {
                            $scope.scrollEdge = false;
                        }
                    })
                } else {
                    SLeasy.touchScroll(false, true);
                    console.log('手势swipe解冻~')
                }
                if ($config.sliders[nextIndex].onStart) $config.sliders[nextIndex].onStart();//单页onStart回调

                //清除幻灯内联式样,!!!!~~~~(幻灯一定要去除zIndex和transform:matrix3d属性,不然在移动设备上,带有3d属性的子元素会出现穿透幻灯(父元素)现象)
                T.set(currentSubMotion, {clearProps: $scope.clearProps, display: 'none'});//清除子动画图片内联式样
                T.set(currentSlider, {clearProps: $scope.clearProps});
                T.set(currentSlider, $.extend(motionFX.set, $config.sliders[$scope.sliderIndex].set || {}, customFX.set || {}));

                //sub motion
                var subMotionArr = $config.sliders[nextIndex].subMotion;
                var motionTime = $config.sliders[nextIndex].time || $config.sliders[nextIndex].motionTime || $config.motionTime;
                //如果有自定义loading，第一页幻灯子元素起始时间为0，不等待页面切换时间
                if ($scope.sliderIndex == 0 && !$.isEmptyObject($config.loading) && 'xy'.indexOf($config.swipeMode) == -1) motionTime = 0;
                //如果无自定义loading，幻灯页面切换超过边界，子元素起始时间为0，不等待页面切换时间
                if ($scope.isSliderEdge && $.isEmptyObject($config.loading)) motionTime = 0;
                //如果是通过路由标识进来
                if (typeof duration != 'undefined') motionTime = duration;
                //scrollMagic
                if ($config.scrollMagicMode) motionTime = 0;
                //相同一页幻灯
                if ($scope.isSameSlider) motionTime = 0;

                // alert(motionTime)
                SLeasy.subMotion(subMotionArr, 'sliders', motionTime);
                console.log('自定义切换时长:', duration || null)
                console.log('子元素动画起始时间:', motionTime)
                console.log('幻灯切换索引是否超过边界:', $scope.isSliderEdge)
            },
            onComplete: function () {
                $scope.isAnim = 0;//重置运动状态
                if ($config.sliders[nextIndex].onComplete) $config.sliders[nextIndex].onComplete();//单页onComplete回调
                //console.log($scope.labelHash);
                //隐藏自定义loading
                if ($('.SLeasy_loading').length && !$('.SLeasy_loading').is(':hidden')) $('.SLeasy_loading').hide();
            },
        }, (customFX.show || motionFX.show));
        _set = customFX.set || motionFX.set;

        //force3D
        _in = $.extend({force3D: $config.force3D}, _in);
        _out = $.extend({force3D: $config.force3D}, _out);
        _show = $.extend({force3D: $config.force3D, clearProps: $scope.clearProps}, _show);

        return {
            in: _in,
            show: _show,
            out: _out,
            set: _set
        }

    }

    SLeasy.transit = function (nextIndex, duration, fx) {
        if ($scope.sliders.length == 0) return alert('当前没有任何幻灯json数据~!');
        if ($scope.isAnim) return;
        $scope.isAnim = 1;//重置运动状态

        var currentSlider = $scope.sliders.eq($scope.sliderIndex),//当前幻灯
            //nextIndex=SLeasy.nextIndex(index),//下一幻灯索引
            nextSlider = $scope.sliders.eq(nextIndex),//下一幻灯
            FX = SLeasy.transitFX(nextIndex, duration, fx);//切换效果

        //设置该页标题
        var title = $config.sliders[nextIndex].title || $config.title;
        if (title && title != $scope.title) {
            SLeasy.title(title);
            $scope.title = title;
        }


        //set
        // T.set(currentSlider, $.extend(FX.set, $config.sliders[$scope.sliderIndex].set || {}));
        T.set(nextSlider, $.extend(FX.set, $config.sliders[nextIndex].set || {}));
        $config.on['sliderChange'](nextIndex);//幻灯切换回调


        //冻结并清除当前子动画
        if (currentSlider[0] != nextSlider[0]) $scope.timeline.clear();
        SLeasy.kill(currentSlider.find('.SLeasy_subMotion'));

        //动画切换执行
        var motionTime = parseFloat(duration) || $config.sliders[nextIndex].time || $config.sliders[nextIndex].motionTime || $config.motionTime;
        if (currentSlider[0] == nextSlider[0]) {
            //如果上下页是同一页，则只执行to动画及子动画
            // $(currentSlider).fadeIn(300);
            // T.to(currentSlider, motionTime, FX.show);
            T.to(currentSlider, motionTime, $.extend({display: 'block'}, FX.show));
        } else {
            //清除所有ae渲染层tween
            if (duration >= 0.1) {
                $.each($scope.aeLayer, function (index, aeLayer) {
                    T.killTweensOf(aeLayer);
                })
            }
            //slider切换
            preFXAguments = $config.sliders[nextIndex].preMotionFX || $config.sliders[nextIndex].preFX || $config.sliders[nextIndex].preFx || $config.sliders[nextIndex].prefx || null;
            //自定义切换效果
            preFX = preFXAguments ? SLeasy.getMotionFX(preFXAguments[0], preFXAguments[1], preFXAguments[2]) : FX;
            preMotionTime = motionTime;
            T.set(currentSlider, $.extend(FX.set, $config.sliders[$scope.sliderIndex].set || {}, preFX.set || {}));
            T.to(currentSlider, preMotionTime || motionTime, preFX.out || FX.out);
            T.fromTo(nextSlider, motionTime, FX.in, FX.show);
        }
        //更新当前slider索引
        $scope.sliderIndex = nextIndex;
    }

    //go pre
    SLeasy.goPre = function (opt, duration, fx) {
        SLeasy.goSlider($scope.preSlider, duration, fx);
    }
})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    TweenMax || TweenLite
);
// SLeasy3-detail
;(function (SLeasy, $, T) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();


    //goDetail
    SLeasy.goDetail = function (index, allowMulti) {
        var nextIndex = SLeasy.nextDetailIndex(index);
        if ($config.routerMode) {
            $scope.router.setRoute(1, nextIndex + '');//设置路由
        } else {
            SLeasy.detailTransit(nextIndex, allowMulti);
        }
        return SLeasy;
    }

    SLeasy.nextDetailIndex = function (index) {
        return index = (typeof index == 'number') ? index : SLeasy.label(index);//如果是label标签，则获取标签对应的索引值
    }

    SLeasy.detailFX = function (index, allowMulti) {
        var detail = $config.details[index] || (console.warn('详情页索引参数错误~！')),
            motionFX = detail.fx || detail.FX || detail.motionFX || null,
            motionFX = motionFX ? SLeasy.getMotionFX(motionFX[0], motionFX[1], motionFX[2]) : SLeasy.getMotionFX('leftRight', 0),
            _in = $.extend(motionFX.in, {display: 'block'}),
            _show = $.extend(motionFX.show, {
                onStart: function (e) {
                    detail.scroll ? SLeasy.touchScroll(true, false) : SLeasy.touchScroll(false, true);//禁止触摸默认滚动+禁止slider滑动手势
                    detail.onStart && detail.onStart();
                    (!$scope.isDetail || allowMulti) && SLeasy.subMotion(detail.subMotion, 'details');
                    $scope.isDetail = 1;//详情页已打开
                },
                onComplete: function (e) {
                    detail.onComplete && detail.onComplete();
                }
            }),
            _set = $.extend({zIndex: $config.detailZIndex || 10}, detail.set) || {};

        //force3D
        _in = $.extend({force3D: $config.force3D}, _in);
        _show = $.extend({force3D: $config.force3D}, _show);

        return {
            in: _in,
            show: _show,
            set: _set
        }

    }

    SLeasy.detailTransit = function (index, allowMulti) {
        //如果详情页处于打开状态未关闭，则return
        // console.log(($scope.isDetail || !$config.details[index]) && !allowMulti)
        if (($scope.isDetail || !$config.details[index]) && !allowMulti) return;
        //索引边界检查
        if (typeof index == 'undefined' || index < 0 || index > $config.details.length - 1) return;

        $scope.detailIndex = index;

        var detail = $config.details[index],
            dom = $scope.details.eq(index),
            FX = SLeasy.detailFX(index, allowMulti),
            time = detail.time || $config.motionTime;
        if ($.isFunction(detail.time)) time = detail.time();

        //详情页打开回调
        $config.on['detailOpen'](index);

        //设置该页标题
        var title = $config.details[$scope.detailIndex].title || $config.title;
        if (title && title != $scope.title) {
            SLeasy.title(title);
            $scope.title = title;
        }

        //如果positionMod为relative情况
        if ($config.positionMode == 'relative') {
            dom.css("top", $(window).scrollTop());
            $scope.sliderBox.height($(document).height()).css("overflow", "hidden");
        }

        T.set(dom, FX.set);//自定义set，主要是z-index等
        T.fromTo(dom, time, FX.in, FX.show);
    }


    //closeDetail
    SLeasy.closeDetail = function (index, allowMulti, callback) {
        var nextIndex = SLeasy.nextDetailIndex(index);
        if ($config.routerMode) {
            var sliderHash = $scope.router.getRoute(1)
            $scope.router.setRoute(1, 'html');//设置路由
        } else {
            SLeasy.closeDetailTransit(nextIndex, allowMulti, callback);
        }
        return SLeasy;
    }

    SLeasy.closeDetailTransit = function (index, allowMulti, callback) {
        //如果详情页处于打开状态未关闭，则return
        if (!$scope.isDetail) return;
        //索引边界检查
        if (typeof index == 'undefined' || index < 0 || index > $config.details.length - 1) return;

        var detail = $config.details[index],
            dom = $scope.details.eq(index),
            onComplete = {
                onComplete: function () {
                    console.log(dom);
                    //如果当前stageMode为scroll，或者当前幻灯页为scroll模式，则恢复触摸默认滚动禁用sliderSwipe，否则禁止触摸默认滚动，启用sliderSwipe
                    ($config.stageMode == 'scroll' || $config.sliders[$scope.sliderIndex].scroll) ? SLeasy.touchScroll(true, false) : SLeasy.touchScroll(false, true);
                    if (!allowMulti || $.isFunction(allowMulti)) {
                        T.set(dom, {clearProps: $scope.clearProps, display: 'none'});//清除幻灯内联式样
                        T.set($scope.detailMotion, {clearProps: $scope.clearProps, display: 'none'});//清除子动画图片内联式样
                        $scope.isDetail = 0;//详情页已关闭
                    }
                    //如果positionMod为relative情况
                    $config.positionMode == 'relative' && $scope.sliderBox.css("overflow", "visible");
                    callback && callback();//回调hack
                    if (allowMulti && $.isFunction(allowMulti)) allowMulti();
                }
            },
            FX = SLeasy.detailFX(index),
            time = detail.time || $config.motionTime;
        if ($.isFunction(detail.time)) time = detail.time();

        //详情页关闭回调
        $config.on['detailClose'](index);

        //设置该页标题
        var title = $config.sliders[$scope.sliderIndex].title || $config.title;
        if (title && title != $scope.title) {
            SLeasy.title(title);
            $scope.title = title;
        }

        delete FX.show.onComplete;
        $.extend(FX.in, onComplete);
        T.fromTo(dom, time, FX.show, FX.in);
    }


})(
    window.SLeasy = window.SLeasy,
    jQuery,
    TweenMax || TweenLite
);
// SLeasy3-eventBind
;(function (SLeasy, H, $, T) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope(),
        sliderBox;//hammerObj

    //get hammerObj
    SLeasy.hammerObj = function () {
        return sliderBox ? sliderBox : alert('hammerObj尚未初始化~！');
    }

    //event bind
    SLeasy.eventBind = function (globalBinding) {
        var originEvents = 'click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave contextmenu touchstart touchmove touchend';

        if (globalBinding) {
            //全局 -------------------------
            sliderBox = new H(document.getElementById(($scope.rotateMode == 'auto' && 'SLeasy_fixBox') || $config.id || 'SLeasy'));
            sliderBox.get('swipe').set({velocity: 0.2, direction: Hammer.DIRECTION_ALL});

            //VConsole
            if ($config.VConsole && $('#__vconsole').length) {
                sliderBox.get('tap').set({
                    pointers: SLeasy.isHttp() && device.mobile() ? $config.VConsole[0] || 2 : 1,
                    taps: $config.VConsole[1] || 2
                });
                sliderBox.on('tap', function () {
                    $scope.vConsole.show();
                })
            }

            //禁止触摸默认行为f
            SLeasy.touchScroll(false, true);

            if ($config.stageMode == 'scroll') {
                SLeasy.touchScroll(true, false);
                sliderBox.get('swipe').set({enable: false});
            }

            //todo:修正ios下微信双击上移

            //swipe eventBind
            if ($config.swipeMode == 'x' || $config.swipeMode == 'xy') {//水平左右
                $scope.FXDirection = 'leftRight';//设置切换式样方向

                sliderBox.on('swipeleft', function (e) {
                    var slidersEvent = $config.sliders[$scope.sliderIndex].on;
                    if (slidersEvent && slidersEvent['swipeleft']) return;
                    $scope.swipe && SLeasy.goSlider('+=1');
                });
                sliderBox.on('swiperight', function (e) {
                    var slidersEvent = $config.sliders[$scope.sliderIndex].on;
                    if (slidersEvent && slidersEvent['swiperight']) return;
                    $scope.swipe && SLeasy.goSlider('-=1');
                });

            } else if ($config.swipeMode == 'y' || $config.swipeMode == 'xy') {//垂直上下
                $scope.FXDirection = 'upDown';//设置切换式样方向

                sliderBox.on('swipeup', function (e) {
                    var slidersEvent = $config.sliders[$scope.sliderIndex].on;
                    if (slidersEvent && slidersEvent['swipeup']) return;
                    console.log($scope.swipe);
                    $scope.swipe && SLeasy.goSlider('+=1');
                });
                sliderBox.on('swipedown', function (e) {
                    var slidersEvent = $config.sliders[$scope.sliderIndex].on;
                    if (slidersEvent && slidersEvent['swipedown']) return;
                    $scope.swipe && SLeasy.goSlider('-=1');
                });
            }

            //子画元素事件绑定策略
            for (var i = 0; i < $scope.eventArr.length; i++) {
                var el = $scope.eventArr[i],
                    id = el.id,
                    dom = document.getElementById(id),
                    HDom = new H(dom),
                    e = el.event,
                    callback = el.onEvent.bind(SLeasy);

                $(dom).data('HDom', HDom);//存储HDom-hammer对象
                if ($config.debugMode) $(dom).addClass('SLeasy_shadownBt');
                dom.style.cursor = "pointer";//鼠标手势

                if (originEvents.indexOf(e) != -1) {//点击事件,方便某些广告监测代码
                    $(dom).off(e).on(e, callback);
                } else if (e.indexOf('holdup') == 0) {//长按释放事件
                    var time = parseInt(e.replace('holdup', '')) || 1000;
                    HDom.get('press').set({time: time});
                    HDom.off('pressup').on('pressup', callback);
                } else if (e.indexOf('hold') == 0) {//长按事件
                    var time = parseInt(e.replace('hold', '')) || 1000;
                    HDom.get('press').set({time: time});
                    HDom.off('press').on('press', callback);
                } else {
                    HDom.get('pan').set({direction: Hammer.DIRECTION_ALL});
                    HDom.get('swipe').set({direction: Hammer.DIRECTION_ALL});
                    HDom.off(e).on(e, callback);//事件绑定
                }

            }

            //箭头事件绑定
            if ($config.arrowMode) {
                $("#SLeasy_arrow").css("cursor", "pointer");
                new H($("#SLeasy_arrow")[0]).on('tap', function (e) {
                    SLeasy.goSlider('+=1');
                })
            }
        } else {
            //仅动画子元素 -------------------------
            //禁止触摸默认行为
            SLeasy.touchScroll(false);

            //子画元素事件绑定策略
            for (var i = 0; i < $scope.eventArr.length; i++) {
                var el = $scope.eventArr[i],
                    id = el.id,
                    dom = document.getElementById(id),
                    HDom = new H(dom),
                    e = el.event,
                    callback = el.onEvent;

                $(dom).data('HDom', HDom);//存储HDom-hammer对象
                dom.style.cursor = "pointer";//鼠标手势
                if (originEvents.indexOf(e) != -1) {//点击事件,方便某些广告监测代码
                    $(dom).off(e).on(e, callback);
                } else if (e == 'hold') {//长按事件
                    HDom.get('press').set({time: 1000});
                    HDom.off('press').on('press', callback);
                } else {
                    HDom.get('pan').set({direction: Hammer.DIRECTION_ALL});
                    HDom.get('swipe').set({direction: Hammer.DIRECTION_ALL});
                    HDom.off(e).on(e, callback);//事件绑定
                }

            }
        }
        //loading幻灯
        if ($('.SLeasy_loading ').length && $config.loading.on) {
            $.each($config.loading.on, function (e, callback) {
                if (originEvents.indexOf(e) != -1) {
                    $('.SLeasy_loading').off(e).on(e, callback);
                } else {
                    var HDom = new H($('.SLeasy_loading')[0]);
                    HDom.get('swipe').set({velocity: 0.2, direction: Hammer.DIRECTION_ALL});
                    HDom.off(e).on(e, callback);//事件绑定
                }
            })
        }

        //slider幻灯
        for (var i = 0; i < $('.SLeasy_sliders').length; i++) {
            if ($config.sliders[i].on) {
                $.each($config.sliders[i].on, function (e, callback) {
                    if (originEvents.indexOf(e) != -1) {
                        $('.SLeasy_sliders').eq(i).off(e).on(e, callback);
                    } else {
                        var HDom = new H($('.SLeasy_sliders')[i]);
                        HDom.get('swipe').set({velocity: 0.2, direction: Hammer.DIRECTION_ALL});
                        HDom.off(e).on(e, callback);//事件绑定
                    }
                })
            }
        }
    }
})(
    window.SLeasy = window.SLeasy || {},
    Hammer,
    jQuery,
    TweenMax || TweenLite
);
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
// SLeasy3-music
;(function (SLeasy, $, H, T) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope()

    SLeasy.music = SLeasy.music || {};

    //music
    SLeasy.music.init = function (opt) {

        $config.musicBt[0] && SLeasy.music.bt();//背景音乐按钮初始化
        var musicHtml = '';
        if ($scope.audioInit) return '';//返回空html串
        $scope.audioInit = true;

        //webAudio初始化
        if (Object.keys($config.audios).length && $config.audioType == 'webAudio') {
            $.each($config.audios, function (index, audio) {
                //setTimeout(function () {
                    if (typeof audio == 'string') {
                        $scope.audios[index] = new Howl({src: SLeasy.path($config.host, audio)});
                    } else {
                        audio.src = SLeasy.path($config.host, audio.src);
                        $scope.audios[index] = new Howl(audio);
                    }
                //}, index * 50);
            });
            console.dir($scope.audios.bgm)
            //bgm
            if ($scope.audios['bgm']) {
                //onplay
                $scope.audios['bgm'].on('play', function () {
                    $scope.isMusic = 1;
                    SLeasy.music.isPlaying = true;
                    if ($("#SLeasy_musicBt").length) T.set($("#SLeasy_musicBt"), {
                        backgroundPosition: 'center 0px',
                        ease: Power4.easeOut
                    });
                });
                //onpause
                $scope.audios['bgm'].on('pause', function () {
                    $scope.isMusic = 0;
                    SLeasy.music.isPlaying = false;
                    T.set($("#SLeasy_musicBt"), {
                        backgroundPosition: 'center -' + $config.musicBt[3] * $scope.viewScale + 'px',
                        ease: Power4.easeOut
                    });
                })
            }
            console.log($scope.audios);
        } else if (Object.keys($config.audios).length && $config.audioType == 'audio') {
            $.each($config.audios, function (index, audio) {
                if (typeof audio == 'string') {
                    musicHtml += '<audio class="SLeasy_audio ' + index + '" preload="auto" src="' + SLeasy.path($config.host, audio) + '"></audio>'
                } else {
                    var loop = audio.loop ? 'loop="loop"' : '';
                    musicHtml += '<audio class="SLeasy_audio ' + index + '" preload="auto" src="' + SLeasy.path($config.host, audio.src) + '" ' + loop + '></audio>';
                }
            });
        }

        if (typeof $config.musicUrl == 'object') {
            $config.musicUrl.src = SLeasy.path($config.host, $config.musicUrl.src);
            $scope.audios['bgm'] = new Howl({src: $config.musicUrl.src, loop: true, preload: true});
            $scope.audios['bgm'].off();
            $scope.audios['bgm'].on('play', function () {
                $scope.isMusic = 1;
                SLeasy.music.isPlaying = true;
                T.set($("#SLeasy_musicBt"), {backgroundPosition: 'center 0px', ease: Power4.easeOut});
                document.removeEventListener('touchend', SLeasy.music.play);
            });
            $scope.audios['bgm'].on('pause', function () {
                $scope.isMusic = 0;
                SLeasy.music.isPlaying = false;
                T.set($("#SLeasy_musicBt"), {
                    backgroundPosition: 'center -' + $config.musicBt[3] * $scope.viewScale + 'px',
                    ease: Power4.easeOut
                });
            });
        } else if ($config.musicUrl) {
            var mediaTypes = {
                mp3: 'audio/mpeg',
                ogg: 'audio/ogg',
                wav: 'audio/wav'
            }
            musicHtml += '\
			<audio id="SLeasy_music" class="music" preload="auto" ' + ($config.musicLoop ? 'loop="loop"' : '') + '>\
			<source src="' + SLeasy.path($config.host, $config.musicUrl) + '" type="' + mediaTypes[$config.musicUrl.split('.')[1]] + '">\
			</audio>';
        }
        $('body').append(musicHtml);
        //auto playHack
        $config.musicTouchPlay && document.addEventListener('touchend', SLeasy.music.play, false);
        if ($config.musicAutoPlay) {
            //howler
            if (typeof $config.musicUrl == 'object') {
                if ($scope.bgmID) {
                    $scope.audios['bgm'].play($scope.bgmID);
                } else {
                    $scope.audios['bgm'].on('load', function () {
                        window.WeixinJSBridge && window.WeixinJSBridge.invoke('getNetworkType', {}, function () {
                            $scope.bgmID = $scope.audios['bgm'].play();
                        }, false);
                    })
                }
                console.log('howl BGM music play~')
            } else {
                document.addEventListener("WeixinJSBridgeReady", function () {
                    $("#SLeasy_music").length && SLeasy.music.play();
                }, false);
                window.WeixinJSBridge && window.WeixinJSBridge.invoke('getNetworkType', {}, function () {
                    $("#SLeasy_music").length && SLeasy.music.play();
                }, false);
            }
        }
    }


    //isPlaying
    SLeasy.music.playing = SLeasy.music.isPlaying = false;

    //play
    SLeasy.music.play = function () {
        setTimeout(function () {//不支持自动播放情况
            if (!$scope.isMusic && $("#SLeasy_musicBt").length) {
                T.set($("#SLeasy_musicBt"), {
                    backgroundPosition: 'center -' + $config.musicBt[3] * $scope.viewScale + 'px',
                    ease: Power4.easeOut
                });
            }
        }, 100)

        //howler
        if (typeof $config.musicUrl == 'object') {
            if ($config.musicMuteMode == 'global') Howler.mute(false);
            if ($scope.bgmID) {
                $scope.audios['bgm'].play();
            } else {
                $scope.bgmID = $scope.audios['bgm'].play();
            }
            console.info('$scope.bgmID', $scope.bgmID);
            //
            return;
        }

        //audio
        if ($("#SLeasy_music").length) {
            $("#SLeasy_music")[0].play();
        }

        //兼容安卓
        $("#SLeasy_music").on('playing', function () {
            $scope.isMusic = 1;
            SLeasy.music.isPlaying = true;
            if ($("#SLeasy_musicBt").length) T.set($("#SLeasy_musicBt"), {
                backgroundPosition: 'center 0px',
                ease: Power4.easeOut
            });
            document.removeEventListener('touchend', SLeasy.music.play);
        })
    }

    //pause
    SLeasy.music.pause = function () {
        T.set($("#SLeasy_musicBt"), {
            backgroundPosition: 'center -' + $config.musicBt[3] * $scope.viewScale + 'px',
            ease: Power4.easeOut
        });

        //howler
        if (window.Howl && $scope.audios['bgm'] instanceof Howl) {
            if ($config.musicMuteMode == 'global') Howler.mute(true);
            $scope.audios['bgm'].pause();
            return;
        } else {
            $scope.bgmID = false;
        }
        console.info('$scope.bgmID', $scope.bgmID);
        //audio
        $("#SLeasy_music").length && $("#SLeasy_music")[0].pause();
        //兼容安卓
        $("#SLeasy_music").on('pause', function () {
            $scope.isMusic = 0;
            SLeasy.music.isPlaying = false;
            T.set($("#SLeasy_musicBt"), {
                backgroundPosition: 'center -' + $config.musicBt[3] * $scope.viewScale + 'px',
                ease: Power4.easeOut
            });
        })

    }

    //
    SLeasy.music.volume = function (volume) {
        //howler
        if (typeof $config.musicUrl == 'object') {
            $scope.audios['bgm'].volume(volume);
        } else {
            $("#SLeasy_music")[0].volume = volume;
        }
    }

    //musicBt:[1,'http://xxx/musicBt.png',60,60,'topRight',10,10],//背景音乐按钮[开启状态，sprite图片url，宽度，高度，对齐方式，x轴偏移，y轴偏移]
    SLeasy.music.bt = function () {
        if ($("#SLeasy_musicBt").length) $("#SLeasy_musicBt").remove();

        var base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAABYCAYAAACONxXWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEUxQUE2RjlFODUyMTFFNThCQzNDMkEyRUVFRkQxNUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEUxQUE2RkFFODUyMTFFNThCQzNDMkEyRUVFRkQxNUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RTFBQTZGN0U4NTIxMUU1OEJDM0MyQTJFRUVGRDE1RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RTFBQTZGOEU4NTIxMUU1OEJDM0MyQTJFRUVGRDE1RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjjeU1sAAAcmSURBVHjazFvfTxxVGF1GUrNYH7Bu1dqQGC1NdtuY2MaaGAVq2hoVd62+AqvwYhv0zaQJqfwFQqMJ8GBjrdEX04JVYrVaCjxI1SZGaMJW+gClD2JFE3ehLrB+Xz23XsedmXvv3Nn6JSeE3Zk7Z+7cH993zmxVqVSKhYhaQgOhkbCNUE+4mxDH98uEBUKO8CPhHLBoesEqA8IOIUN4mbAP/39D+J5wiXCFUOC2CTWE+wlbCI8QHkMbnxOOEoYIa1pXZ8IaaCHkCH8SThAyhLjG+XGcw+cW0VabDgfVA5OEcVykj1CneaPlUIe2uM1RXMMK4Q5CQadRTSTRdgHXCkW4l7BK6CI4EZAV4LbfLP0dPaaEjxOWCM0REnWjGdc8rkv4CB5RYwXJCjTi2r2qhHkcrVjo2X14vIxOwh6NFeV5cOgIIpzEI+my0FPdpf9GAY/7YYXzu8Al5UeYl64xSxOsHGERa3jk6wIm4ig4lSWcxZpoa+k6XAqOrwKGSQqrVIubsINdp8/i5OkOILuGv+8HtNMHbo5MeD96ty4CwgWFnt4TsCNeB8cbiUsMicynhNmYvVgDDhA2EvYTPiKslDn2gE87zOk0ISuSn1okMxnL66no4WyZHvvY1cPLARM9g7Fc6yCfdXAXNmNF6ml3j71EeA3f8XG3E+71aes0jm2oBmHOZ5csE64O+P5tHPMW/i/6HLsEjg3cs9sJF2LRhePzXQ/hExBaCGiHOW53UNZciohsSaGiOET4UqEt5ljvoAabj4hsFeAXFwmvKrTHHDc4KBj/iIBwlcaxVxWOYY41jkHjOj1svW0mnEd1eyt7WCXWczXOhH9FKf5/D+Z4jdfBnwgPhWiIRZQXsDyuI1wmnIiAMGsbuWooMjsNGkggN3jK9fnjhJYINqIdLNbwkBgh7JLkJZXYRJgoQ1aOuGvyhYk4OI4IwjHITqoxQHigguP3aWzjNwgvQutqUzw5SXiuwqtFK9LfRbEOH8Vd1Cmc/GiZz1Z9jv89JFnm1Ex4V05MWEWcw76ush664zaPY/lGxkMSZk4zSJL+VYS2QgtIKggdKsEJ90DIIiCF4qJVfCbrw9zbo5jVDT5ZFh/3AwRsv8hBDzYVr+UF4UkvfTiJO+pSUByvSpWvO84QNoXsXSUhRUhVqwo1XgJiyGXCb4RZCNU2xMMMqvgOVTGQieRvoRiY1xED3XJrpsJya95EbhXowZishKDdhWHQY8MyKEIkjMoy+BpPs8OmKTOG3h6waMoMYO0fs2nKyGiDMMc9fjKE7XVSsr1adTiYGotpwivIP2IQOS6gFJ9HwcjH3YFUdAvy2V1Ihj4jHCMM6hqLJoSDrNsNUo3Ijug17HqT2LlCWbeO5YK22pVOVrmq6NDXCzMkWP58BkTOE75FPXcFlbjI7GSveScyu2HCe1F7zY7kNfOEGTScdGnCENqYlu2AqLzmfste8yqWtZQtwu2Q7Eci2jhStrxmBwlIJbfmklfSE0TYwfgq6Y4xC2kl9/SHXh3k5zWvgvAkct9Kkd4N0kd0vOY19OxkCNJ78XiF17xbY0VJ47raXnMiBGkvr/kDxRUhsERysHSdc40fU9JBTmiPhtfslCPcguUr6VG/6ZLuVpACRgKGSRJrv6fX3B9QdOqQ7lbUL45F6TXrkNbxmvcG7IhFU6+ZvbQmwhQhRTgLndgvhNf8IvTkcgbiwQCveRgcb3rNRc3qWKWndbzm6wE7aRocb3rNMU2vWaWn13x6jL3mTukzthru8bneF0KyclAtTBhI/IL0RQ/SQcn6OzDI3Wa6l9fMHJsclDbfGRYAC7hhnTHtNshPKXrNzHGb8JpnQlQtXsNDtZI4pDgcmeNWW15zOdLrFdT5GM55XdFrvqvaotcsSJ8F6Y0B6rx7Imp5zbZCnohiLN9p22te8vAtYiEnophEb2hORK+oEV7zLxF4zQso4zk2G6wevl4zqzIPhmjoCWwEKTyxeXjNBXw/J03EJoXly9drFmr7uEEpcx+8DK/I429nyMpFfi+0V96n45pkZxXTx6wr95gyIB0X79bJyU9ao4Ehxfcq5eQnTLmVBuFa8cEgSKicXF/Si6wry5sy6Gnmdsr0ZdF2TcKZkJVLHYqA/e4SaTqgRBI4qEk44ZFPTymS7sexTrkiVOWF50YNsmFrRM8iVC7zRwOyf0e6kF9MYUKbVi4OqmrPMl/cUR6vgwfJrz/7kD2jMaG8JuJhrAxKXrNKjZeA/jUDr3kOq03aYFNw93QLtL12Ha+ZX0JuqqAImHANNS2v2YEGVjDsMVNkJStBS26VBe0ixlMlBW3Hxs/TorIMxM/Tlm17zeOYtVH8AHA8Cq/ZbXsNWbC9cmhTebiF/RHrs6iKJ+A152L//Ig1Bq95M15G3SG98zYMr1nbWLThNTdC7mJBZiu85rik2LDXPI1yfgQw9pr/EmAAPOf7bb+j2VMAAAAASUVORK5CYII=',
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
			z-index:10">\
			</div>')
            .appendTo($('#' + $config.id).length ? '#' + $config.id : '#SLeasy').css("cursor", "pointer");

        //
        T.set($("#SLeasy_musicBt"), {
            backgroundPosition: 'center -' + $config.musicBt[3] * $scope.viewScale + 'px',
            ease: Power4.easeOut
        });

        //事件
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
				<svg id="SLeasy_arrow" viewBox="0 0 40 20" style="position:fixed;width:40px;height:20px;color:#fff;margin-top:-14px;top:50%;display:none">\
				<polyline points="5,15 20,5, 35,15" fill-opacity="0" stroke="' + arrowColor + '" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>\
				</svg>';

                $(arrowHtml).appendTo('#' + ($config.id || 'SLeasy'));
                T.set($("#SLeasy_arrow"), {rotation: -90, right: 0, display: 'block', autoAlpha: 1});
                T.from($("#SLeasy_arrow"), 1.5, {
                    autoAlpha: 0,
                    x: '+=10',
                    repeat: -1,
                    // zIndex: 10,
                    ease: Power3.easeOut,
                    delay: 1
                });
            } else {

                var arrowHtml = '\
				<svg id="SLeasy_arrow" viewBox="0 0 40 20" style="position:fixed;width:40px;height:20px; margin-left:-20px;left:50%;color:#fff;display:none">\
				<polyline points="5,15 20,5, 35,15" fill-opacity="0" stroke="' + arrowColor + '" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>\
				</svg>';
                var arrowBox = $config.stageMode == 'scroll' ? 'body' : '#' + ($config.id || 'SLeasy');
                $(arrowHtml).appendTo(arrowBox);
                T.set($("#SLeasy_arrow"), {bottom: 10, display: 'block', autoAlpha: 1});
                T.from($("#SLeasy_arrow"), 1.5, {
                    autoAlpha: 0,
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
        $("#SLeasy_arrow").show();
    }

    //hide
    SLeasy.arrow.hide = function () {
        $("#SLeasy_arrow").hide();
    }
})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    TweenMax || TweenLite
);
// SLeasy3-boot
;(function (SLeasy, $) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();


    //boot
    SLeasy.boot = function (dfd) {
        var loadingHtml = '',
            sliderHtml = '',
            detailHtml = '',
            musicHtml = '',
            floatHtml = '';


        if (!$.isEmptyObject($config.loading) && !$scope.loadingReady) {
            //loading初始化
            $config.loading.onInit && $config.loading.onInit();
            $config.loading.type = 'loading';
            loadingHtml = SLeasy.slider($config.loading);
            //音乐初始化
            $scope.sliderBox.html($scope.sliderBox.html() + loadingHtml);
            SLeasy.float();//浮动元素初始化
            SLeasy.fixPosition([$config.loading]);
            //img to div
            SLeasy.imgToDiv($scope.sliderBox, dfd);

            //默认显示渲染
            // $config.musicAutoPlay && typeof $config.musicUrl == 'string' ? SLeasy.music.play() : SLeasy.music.pause();//播放背景音乐

            //插件初始化
            for (var j = 0; j < $scope.pluginList.length; j++) {
                //console.log($scope.pluginList[j]);
                var SLeasyPlugin = $scope.pluginList[j][0],
                    //把初始化时注入的挂载点id转换成挂载点dom,合并入plugin参数
                    pluginArg = $.extend($scope.pluginList[j][1], {dom: $('#' + $scope.pluginList[j][1].node)}),
                    pluginInitCallback = $scope.pluginList[j][2],//插件初始化回调
                    pluginObj = SLeasyPlugin(pluginArg);//执行插件初始化

                pluginInitCallback(pluginObj);//执行插件初始化后的回调
                $scope.pluginList[j].push('loadingPlugin');
            }

            // SLeasy.eventBind(false);//事件绑定
            $scope.loadingReady = true;
            $config.loading.onReady && $config.loading.onReady()
        } else {
            //幻灯初始化
            sliderHtml = pageInit($config.sliders, 'sliders');

            //详情页初始化
            detailHtml = pageInit($config.details, 'details');


            //类型页面初始化函数
            function pageInit(jsonArr, type) {
                var tmpHtml = '';
                for (var i = 0; i < jsonArr.length; i++) {
                    $.extend(jsonArr[i], {index: i, type: type});//并入当前幻灯索引值,及类型
                    tmpHtml += SLeasy.slider(jsonArr[i]);
                }
                return tmpHtml;
            }

            //框架初始化($scope.sliderBox.html()包含了loading结构代码)
            $scope.sliderBox.append(sliderHtml + detailHtml);
            //微博下iphone-inline-video
            SLeasy.enableInlineVideo();
            //在可以的环境下自动播放-暂停，以缓存video
            if ($config.videoCache) {
                document.addEventListener("WeixinJSBridgeReady", function () {
                    SLeasy.initMedia($('video').eq(0));
                }, false)
            }

            SLeasy.loader.hidden();//隐藏loading
            $.isEmptyObject($config.loading) && SLeasy.float();//浮动元素初始化
            SLeasy.arrow.init($config.arrowColor);//箭头初始化

            SLeasy.fixPosition($config.sliders);//全部幻灯子动画自适应坐标值修正转换
            SLeasy.fixPosition($config.details);//全部详情页子动画自适应坐标值修正转换

            //img to div
            SLeasy.imgToDiv($scope.sliderBox, dfd);
            //默认显示渲染
            // $config.musicAutoPlay && typeof $config.musicUrl == 'string' ? SLeasy.music.play() : SLeasy.music.pause();

            //dom缓存
            $scope.sliders = $(".SLeasy_sliders");//幻灯引用缓存
            $scope.subMotion = $(".SLeasy_subMotion");//子动画元素合集引用缓存
            $scope.details = $(".SLeasy_details");//详情页引用缓存
            $scope.detailMotion = $(".SLeasy_detailMotion");//详情页子动画元素缓存
            $scope.loader = $("#SLeasy_loader");//loading元素dom缓存
            $scope.floats = $(".SLeasy_floatElement");//浮动元素dom缓存
            $scope.canvas = $(".SLeasy_canvas");//画布元素dom缓存
            // $config.on['domReady']();//SLeasy dom初始化完毕回调
            // $scope.canvas.length && TweenMax.set($scope.canvas.parent(), {y: 0});//修正安卓下,画布元素默认不左上对齐的bug

            //插件初始化
            for (var j = 0; j < $scope.pluginList.length; j++) {
                //console.log($scope.pluginList[j]);
                if ($scope.pluginList[j][$scope.pluginList[j].length - 1] == 'loadingPlugin') continue;//剔除自定义loading已经初始化过的插件
                var SLeasyPlugin = $scope.pluginList[j][0],
                    //把初始化时注入的挂载点id转换成挂载点dom,合并入plugin参数
                    pluginArg = $.extend($scope.pluginList[j][1], {dom: $('#' + $scope.pluginList[j][1].node)}),
                    pluginInitCallback = $scope.pluginList[j][2],//插件初始化回调
                    pluginObj = SLeasyPlugin(pluginArg);//执行插件初始化

                pluginInitCallback(pluginObj);//执行插件初始化后的回调
            }

            //渲染启动
            $scope.timeline = new TimelineMax({//子动画主时间线初始化
                autoRemoveChildren: $config.autoRemoveChildren,
                paused: true,
                onComplete: function () {
                    //orientationPX();//重力感应视差效果
                    console.log('子动画完成~~~！');
                    //$scope.isSubMotion=1;//子动画是否正在播放状态
                }
            });
            $config.on['timeline']($scope.timeline);//子动画时间轴ready回调
            //onWeixin
            document.addEventListener("WeixinJSBridgeReady", function () {
                $config.on['weixin'];
            }, false);
            SLeasy.eventBind('global');//事件绑定
            SLeasy.router();//路由初始化

            //scrollMagic -----------------------------------------------------------------------------
            if ($config.scrollMagicMode) {
                TweenMax.set('#' + $config.id, {backgroundPosition: 'center ' + $scope.yOffset.center + 'px'})
                for (var i = 0; i < $config.sliders.length; i++) {
                    if (i == 0) continue;
                    var sl = $config.sliders[i];
                    for (var j = 0; j < sl.subMotion.length; j++) {
                        var sub = sl.subMotion[j];
                        var el = $('#SLeasy_subMotion_' + sub.index);
                        TweenMax.set(el, sub.set);
                        console.log(sub.set);
                    }
                }
                SLeasy.touchScroll(true, false);
                //
                var ctrl = new ScrollMagic.Controller();
                // Create scenes in jQuery each() loop
                $(".SLeasy_sliders").each(function (i) {
                    if (i == 0) return;
                    console.log('magic~~')
                    var tl = new TimelineMax();
                    $.each($config.sliders[i].subMotion, function (index, sub) {
                        var tween;
                        var el = $('#SLeasy_subMotion_' + sub.index);
                        var preSub = index != 0 ? $config.sliders[i].subMotion[index - 1] : null;
                        if (sub.from) tween = TweenMax.from(el, sub.time, SLeasy.fixProps(sub.from));
                        if (sub.fromTo) tween = TweenMax.fromTo(el, sub.time, SLeasy.fixProps(sub.fromTo));
                        var timePosition = '-=' + (preSub && sub.start ? (preSub.time - sub.start > 0 ? preSub.time - sub.start : preSub.time) : 0);
                        // console.log($config.sliders[i].subMotion[index-1]);
                        tween && tl.add(tween, timePosition);
                    })
                    var SM = new ScrollMagic.Scene({
                        triggerElement: this,
                        triggerHook: $config.sliders[i].triggerHook || 0.3,
                        reverse: $config.sliders[i].reverse || false
                    })
                        .setTween(tl)
                        .addTo(ctrl);

                    if ($config.debugMode) {
                        SM.addIndicators({
                            colorTrigger: "white",
                            colorStart: "white",
                            colorEnd: "white",
                            indent: 0
                        })
                    }
                });
            }

            //------------------------------------------------------------------------------------------

            //如果幻灯设置了自动开始，而且没有开启自动路由，且url没有路由哈希参数，则默认显示第一页:::见imgToDiv.js
            // $.isEmptyObject($config.loading) && TweenMax.set($('.SLeasy_sliders').eq(0), {autoAlpha: 0});
            // !$scope.loadingReady && (!$config.routerMode && !$scope.router.getRoute()[0]) && SLeasy.goSlider(0);
            $scope.initReady = true;
        }
    }
})(
    window.SLeasy = window.SLeasy || {},
    jQuery
);
// SLeasy3-loader
;
(function (SLeasy, $) {
    var $config = SLeasy.config(),//全局配置
        $scope = SLeasy.scope();//公有变量

    SLeasy.loader = SLeasy.loader || {}

    //html
    SLeasy.loader.html = function () {
        //loading-style
        var loaderColor = $config.loader.color;
        var loaderBg = $config.loader.bg;
        var loaderStyle = [
            '<svg class="SLeasy_loadingSVG" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="' + loaderColor + '" style="position: absolute;left: 50%;top:50%;margin-left: -' + $config.loader.size[0] / 2 + 'px;margin-top: -' + $config.loader.size[1] / 2 + 'px">\
            <g fill="none" fill-rule="evenodd">\
                <g transform="translate(1 1)" stroke-width="2">\
                    <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>\
                    <path d="M36 18c0-9.94-8.06-18-18-18">\
                        <animateTransform\
                            attributeName="transform"\
                            type="rotate"\
                            from="0 18 18"\
                            to="360 18 18"\
                            dur="1s"\
                            repeatCount="indefinite"/>\
                    </path>\
                </g>\
            </g>\
        </svg>',

            //==================================================================================

            '<svg class="SLeasy_loadingSVG" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" style="position: absolute;left: 50%;top:50%">\
                <defs>\
                <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">\
                    <stop stop-color="' + loaderColor + '" stop-opacity="0" offset="0%"/>\
                <stop stop-color="' + loaderColor + '" stop-opacity=".631" offset="63.146%"/>\
                <stop stop-color="' + loaderColor + '" offset="100%"/>\
            </linearGradient>\
            </defs>\
            <g fill="none" fill-rule="evenodd">\
                <g transform="translate(1 1)">\
                    <path d="M36 18c0-9.94-8.06-18-18-18" id="Oval-2" stroke="url(#a)" stroke-width="2">\
                        <animateTransform\
                            attributeName="transform"\
                            type="rotate"\
                            from="0 18 18"\
                            to="360 18 18"\
                            dur="0.9s"\
                            repeatCount="indefinite" />\
                    </path>\
                    <circle fill="#fff" cx="36" cy="18" r="1">\
                        <animateTransform\
                            attributeName="transform"\
                            type="rotate"\
                            from="0 18 18"\
                            to="360 18 18"\
                            dur="0.9s"\
                            repeatCount="indefinite" />\
                    </circle>\
                </g>\
            </g>\
        </svg>'

            //==================================================================================
        ];

        var loadingStyle = 'position:absolute;z-index:9999;overflow:hidden;width:100%;height:100%;';

        var percentStyle = 'position:absolute;text-align:center;left: 50%;top:50%;' +
            'width:' + $config.loader.size[0] + 'px;' +
            'height:' + $config.loader.size[1] + 'px;' +
            'margin-left:-' + ($config.loader.size[0] / 2) + 'px;' +
            'margin-top:-' + ($config.loader.size[1] / 2) + 'px;' +
            'line-height:' + $config.loader.size[1] + 'px;' +
            $config.loader.textStyle;

        var msgStyle = 'position:absolute;text-align:center;width:100%;top:50%;' +
            'margin-top:' + ($config.loader.size[1] / 2) + 'px;' +
            'height:' + $config.loader.size[1] + 'px;' +
            'line-height:' + $config.loader.size[1] + 'px;' +
            $config.loader.textStyle;

        var overLayStyle = 'width:100%;height:100%;' +
            'background:' + loaderBg + ';position:absolute;';

        var percentHtml = '<div id="SLeasy_loader_percent" style="' + percentStyle + '"></div>';
        var msgHtml = '<div id="SLeasy_loader_msg" style="' + msgStyle + '"></div>';
        var overLayHtml = '<div id="SLeasy_loader_overLay" style="' + overLayStyle + '"></div>'

        return '<div id="SLeasy_loader" style=' + loadingStyle + '>' + overLayHtml + (typeof $config.loader.style == 'number' ? loaderStyle[$config.loader.style] : $config.loader.style) + percentHtml + msgHtml + '</div>';
    }

    //percent
    SLeasy.loader.progress = function (percent) {
        $("#SLeasy_loader_percent").text(percent);
    }

    //show
    SLeasy.loader.show = function (msg, overLayBg) {
        if ($("#SLeasy_loader").length) { //如果loader已初始化
            msg && $("#SLeasy_loader_msg").text(msg) && SLeasy.loader.progress('');//设置msg
            overLayBg && $("#SLeasy_loader_overLay").css({background: overLayBg});//设置背景
            $("#SLeasy_loader").fadeIn(300);
        } else {
            var loaderBox = $config.stageMode == 'scroll' ? $("body") : $scope.sliderBox;
            loaderBox.prepend(SLeasy.loader.html());
            msg && $("#SLeasy_loader_msg").text(msg) && SLeasy.loader.progress('');//设置msg
            overLayBg && $("#SLeasy_loader_overLay").css({background: overLayBg});//设置背景
            $("#SLeasy_loader").fadeIn(300);
        }
        return SLeasy;
    }

    //hide
    SLeasy.loader.hide = SLeasy.loader.hidden = function () {
        $("#SLeasy_loader").fadeOut(300);
        return SLeasy;
    }

    //load
    SLeasy.loader.load = function (urlArr, loadType, showLoading, callback) {
        var stime = new Date().getTime();
        var dfd = $.Deferred();
        var _showLoading = typeof showLoading == 'undefined' ? ($.isEmptyObject($config.loading) ? $config.preload : false) : showLoading;
        var _loadType = loadType || 2;
        _showLoading && $config.loader.show !== false && SLeasy.loader.show();

        var loaded = 0;
        SLeasy.loader.percent = 0;
        var hasCustomLoading = !$.isEmptyObject($config.loading);//是否有自定义loading

        (urlArr && urlArr.length) ? (loadType == 'multi' ? _multiLoad(urlArr) : _load(urlArr)) : (SLeasy.loader.hidden(), dfd.resolve($config, $scope));//如果加载数组为空则立即返回

        function _load(loadArr, callback) {
            var threadLoaded = 0;
            for (var j = 0; j < loadType; j++) {
                (function (i) {
                    if (!loadArr[loaded + i]) return;
                    var img = new Image();
                    // img.crossOrigin = "Anonymous";
                    img.src = loadArr[loaded + i];
                    // console.log(':::::load开始加载：' + img.src);
                    img.onerror=function (){
                        console.error(':::' + i + '::加载失败：' + img.src);
                    }
                    img.onload = function () {
                        console.log(':::' + (loaded + i) + '::加载完毕：' + img.src);
                        loaded++;
                        threadLoaded++;
                        //console.log(loaded);
                        SLeasy.loader.percent = Math.round(loaded * 100 / loadArr.length / ((!$.isEmptyObject($config.loading) && !$scope.loadingReady ? 100 : $config.loader.endAt) / 100));
                        SLeasy.loader.percent = SLeasy.loader.percent > 100 ? 100 : SLeasy.loader.percent;
                        if (hasCustomLoading && $scope.loadingReady) {
                            //自定义loading的onProgress回调
                            // console.log('========================='+percent+'========================')
                            $config.loading.onProgress && $config.loading.onProgress(SLeasy.loader.percent);
                        } else {
                            $config.on['loadProgress'](SLeasy.loader.percent); //预加载进行时回调
                        }
                        // dfd.notify(SLeasy.loader.percent);
                        if (SLeasy.loader.percent >= 100) {
                            $scope.loadingTotalTime = new Date().getTime() - stime;
                            console.log('加载共::>>>>>【' + (new Date().getTime() - stime) / 1000 + '秒】')
                            if ($scope.loadingReady || (!hasCustomLoading)) {
                                callback ? callback() : $config.on['loaded'](); //预加载完毕回调
                            } else {
                                //自定义loading自身加载完毕回调
                                $config.loading && $config.loading.onLoadingLoaded && $config.loading.onLoadingLoaded();
                            }
                            dfd.resolve($config, $scope);
                        } else {
                            if (threadLoaded == loadType) {
                                _load(loadArr);
                                console.log('-------------------------------');
                            }
                        }
                    }
                })(j)
            }
        }

        function _multiLoad(loadArr, callback) {
            for (var j = 0; j < loadArr.length; j++) {
                (function (i) {
                    // setTimeout(function () {
                    var img = new Image();
                    // img.crossOrigin = "Anonymous";
                    img.src = loadArr[i];
                    console.log(':::::multiLoad开始加载：' + img.src);
                    img.onerror=function (){
                        console.error(':::' + i + '::加载失败：' + img.src);
                    }
                    img.onload = function () {
                        console.log(':::' + i + '::加载完毕：' + img.src);
                        loaded++;
                        //console.log(loaded);
                        SLeasy.loader.percent = Math.round(loaded * 100 / loadArr.length / ((!$.isEmptyObject($config.loading) && !$scope.loadingReady ? 100 : $config.loader.endAt) / 100));
                        SLeasy.loader.percent = SLeasy.loader.percent > 100 ? 100 : SLeasy.loader.percent;
                        $config.on['loadProgress'](SLeasy.loader.percent); //预加载进行时回调
                        //自定义loading百分比显示
                        if (hasCustomLoading && $scope.loadingReady) {
                            //自定义loading的onProgress回调
                            // console.log('========================='+percent+'========================')
                            $config.loading.onProgress && $config.loading.onProgress(SLeasy.loader.percent);
                        }
                        // dfd.notify(SLeasy.loader.percent);
                        if (SLeasy.loader.percent >= 100) {
                            $scope.loadingTotalTime = new Date().getTime() - stime;
                            console.log('加载共::>>>>>【' + (new Date().getTime() - stime) / 1000 + '秒】');
                            if ($scope.loadingReady || (!hasCustomLoading)) {
                                callback ? callback() : $config.on['loaded'](); //预加载完毕回调
                            } else {
                                //自定义loading自身加载完毕回调
                                $config.loading && $config.loading.onLoadingLoaded && $config.loading.onLoadingLoaded();
                            }
                            dfd.resolve($config, $scope);
                        }

                    }
                    // }, 1000 / 50 * i)
                })(j)
            }
        }

        return dfd.promise();
    }

    //exLoadCache
    SLeasy.exloadCache = function () {
        $scope.exLoad = [];
        for (var i = 0; i < $config.exLoadArr.length; i++) {
            var img = new Image();
            img.src = SLeasy.path($config.host, $config.exLoadArr[i]);
            $scope.exLoad.push(img);
        }
    }

    //percent
    SLeasy.percent = function (opt) {
        var faker = {percent: 0};
        _percent(opt);

        function _percent() {
            setTimeout(function () {
                gsap.to(faker, {
                    percent: SLeasy.loader.percent,
                    snap: 'percent',
                    ease: 'none',
                    duration: opt.smoothTime || 2,
                    onUpdate: function () {
                        if (opt.onUpdate) {
                            opt.onUpdate(faker.percent);
                        } else {
                            $('.percent').length && $('.percent').text(faker.percent + '%');
                        }
                    },
                    onComplete: function () {
                        if (SLeasy.loader.percent >= 100 && faker.percent == 100) {
                            opt.onComplete && opt.onComplete();
                        } else {
                            _percent(opt);
                        }
                    }
                })
            }, opt.loopTime || 300);
        }
    }
    //
})(
    window.SLeasy = window.SLeasy || {},
    jQuery
);
// SLeasy3-router
;(function (SLeasy, Router, $) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();

    //router
    SLeasy.router = function (opt) {

        if (!Router) {
            alert('路由模块文件缺失~！');
            return;
        }

        var def = {
            '/:sliderIndex': function (sliderIndex) {
                $scope.router.setRoute(1, 'html');//设置路由
            },
            '/:sliderIndex/:detailIndex': function (sliderIndex, detailIndex) {
                if (isNaN(parseInt(sliderIndex))) return;
                //如果是跳转淘宝
                if (sliderIndex == 'goTaobao' || sliderIndex == 'goTmall') return;
                //如果详情索引为'html'，则关闭详情页
                if (detailIndex == 'html') {
                    console.log('当前幻灯索引：' + sliderIndex);
                    console.log('当前详情页索引：' + detailIndex);
                    var _index = isNaN(parseInt(sliderIndex)) ? sliderIndex : parseInt(sliderIndex);//判断标签字符串与索引
                    _index = SLeasy.nextIndex(_index);
                    SLeasy.transit(_index, 0);
                    console.log(_index + '------------------------------------------------------');
                    SLeasy.closeDetailTransit($scope.detailIndex);
                } else {
                    console.log('当前幻灯索引：' + sliderIndex);
                    console.log('当前详情页索引：' + detailIndex);
                    if (typeof detailIndex == 'undefined' || detailIndex === '') $scope.router.setRoute(1, 'html');//设置路由

                    //如果子动画状态为未完成，则执行幻灯切换+子动画（刷新的情况）
                    if (!$scope.isSubMotion) {
                        var _index = isNaN(parseInt(sliderIndex)) ? sliderIndex : parseInt(sliderIndex);//判断标签字符串与索引
                        _index = SLeasy.nextIndex(_index);
                        SLeasy.transit(_index);
                    }
                    var _dIndex = isNaN(parseInt(detailIndex)) ? detailIndex : parseInt(detailIndex);//判断标签字符串与索引
                    _dIndex = SLeasy.nextDetailIndex(_dIndex);
                    SLeasy.detailTransit(_dIndex);

                }
            }
        }
        var cfg = {
            on: function () {
                console.log('路由启动~');
            },
            notfound: function () {
                console.warn('无路由匹配~');
                $config.routerNotFound && $config.routerNotFound();
            }
        }
        var router = new Router($.extend(def, {}));
        SLeasy.router = $scope.router = router;
        //设置全局执行函数
        router.configure(cfg);
        $config.routerMode && $config.autoStart ? router.init('/0/html') : router.init();
    }

})(
    window.SLeasy = window.SLeasy,
    window.Router = window.Router || null,
    jQuery
);
// SLeasy3-init
;(function (SLeasy, $,H) {
    var $scope = SLeasy.scope();

    //init
    SLeasy.init = function (opt) {
        var dfd = $.Deferred();
        SLeasy.checkGoto();//跳转(url/淘宝)检测
        var $config = SLeasy.config(opt);//合并自定义参数
        if ($config.debugMode == 'auto') {
            $config.debugMode = SLeasy.isHttp() ? 0 : 1;
        }
        if (!SLeasy.isHttp()) {
            //本地手机模拟器中禁止长按呼出右键菜单
            window.oncontextmenu = function () {
                return false;
            }
            //debug模式
            if ($config.debugMode) {
                var debugStyle = '.SLeasy_shadownBt{border: 1px solid #fff;box-shadow:0 0 5px #000}';
                var $defaultStyle = $('head style').eq(0);
                $defaultStyle.html($defaultStyle.html() + debugStyle);
            }
        }

        //debug模式
        if ($config.debugMode === true) {
            var debugStyle = '.SLeasy_shadownBt{border: 1px solid #fff;box-shadow:0 0 5px #000}';
            var $defaultStyle = $('head style').eq(0);
            $defaultStyle.html($defaultStyle.html() + debugStyle);
        }

        if (!$config.debugMode && !$config.VConsole) {
            //劫持console.log输出
            console.log = function () {
                return false;
            }
        } else {
            var vConsole = SLeasy.isHttp() && window.VConsole && new VConsole();
        }
        if ($config.VConsole && SLeasy.isHttp()) {
            $scope.vConsole = window.VConsole && new VConsole();
            // $scope.vConsole.hideSwitch();
        }
        console.log('config', $config);
        if ($.isEmptyObject($config.loading) || (!$.isEmptyObject($config.loading) && !$scope.loadingReady)) {
            SLeasy.viewport();//设置视口
        }

        //SLeasy容器初始化
        $scope.sliderBox = $('#' + $config.id).length ? $('#' + $config.id) : $('<div id="SLeasy"></div>').appendTo($scope.rotateMode == 'auto' ? '#SLeasy_fixBox' : 'body'), $config.id = 'SLeasy';//slide容器dom引用缓存
        $scope.sliderBox.css({
            "width": $scope.SLeasyWidth,
            "height": $scope.SLeasyHeight,
            "max-width": $scope.maxWidth + 'px',
            "max-height": $scope.maxHeight + 'px',
            // "max-width": ($scope.fixWidth || $config.viewport) + 'px',
            // "max-height": $scope.fixHeight + 'px',
            "background-image": $config.bg ? 'url(' + SLeasy.path($config.host, $config.bg) + ')' : 'none',
            "background-color": $config.bgColor || 'transparent',
            "background-size": "100% auto",
            "background-repeat": "no-repeat",
            "background-position": $config.scrollMagicMode ? "top center" : "center center",
            "overflow": $config.positionMode == "absolute" ? "hidden" : "visible",//relative模式则高度按内容自适应
            "position": "relative",
            "margin": $scope.fixMargin + "px auto",
        });

        //背景音乐
        SLeasy.music.init();

        //rotateMode
        if ($config.rotateMode) {
            var margin = $scope.isLandscape ? $scope.fixMarginW : $scope.fixMargin;
            if (device.landscape()) {
                TweenMax.set($scope.sliderBox, {
                    transformOrigin: '0 0',
                    rotation: -90,
                    y: '100vh',
                    margin: 'auto ' + margin + 'px'
                });
            } else {
                TweenMax.set($scope.sliderBox, {
                    transformOrigin: '0 0',
                    rotation: 90,
                    x: '100vw',
                    margin: margin + 'px auto'
                });
            }
        }
        if ($config.checkNavBar) SLeasy.checkNavBar();//检测微信底部导航条/强制刷新
        //loading资源加载
        var loadType = (!$.isEmptyObject($config.loading) && !$scope.loadingReady) ? 'multi' : $config.loader.loadType;
        SLeasy.loader.load(SLeasy.getLoadArr($config), loadType).done(function () {//资源加载
            console.log('loading end ----------------------------------------------');
            console.log('加载完成的图片:', $scope.totalLoad);
            SLeasy.boot(dfd);
            if (!$.isEmptyObject($config.loading) && !$scope.initReady) {
                SLeasy.subMotion($config.loading.subMotion, 'loading', 0);
                $config.loading.onComplete && $config.loading.onComplete();
                $(".SLeasy_loading").fadeIn(300, function () {
                    $config.loading.onStartLoad && $config.loading.onStartLoad();
                    SLeasy.init($config).done(function () {
                        SLeasy.exloadCache();//exLoad Cache
                        dfd.resolve();//如果有loading，第二次init完毕时，调用第一次done回调
                        console.log('loadingReady::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
                        $config.loading.onLoaded && $config.loading.onLoaded();//预加载完毕自定义loading回调
                    });
                });
            }
        });
        return dfd.promise();
    }

    //获取预加载图片url
    SLeasy.getLoadArr = function ($config) {
        var totalArr = [];

        function pushSubMotion(dataArr) {
            if (dataArr && dataArr.length) {
                for (var i = 0; i < dataArr.length; i++) {
                    dataArr[i].img && totalArr.push(SLeasy.path($config.host, dataArr[i].img));
                    if (dataArr[i].sprite) {
                        if ($.isArray(dataArr[i].sprite[0])) {
                            for (var j = 0; j < dataArr[i].sprite[0].length; j++) {
                                totalArr.push(SLeasy.path($config.host, dataArr[i].sprite[0][j]))
                            }
                        } else {
                            totalArr.push(SLeasy.path($config.host, dataArr[i].sprite[0]))
                        }
                    }
                    //ae序列帧
                    var ae = dataArr[i].ae;
                    if (ae) {
                        for (var n = 0; n < ae.layer.length; n++) {
                            var layerOpt = ae.layer[n];
                            if (layerOpt[6] === false) {
                                console.log('skip:' + ae.layer[n]);
                                continue;
                            }
                            console.log(layerOpt);
                            var bitmapArr = SLeasy.addBitmaps(null, layerOpt[1], layerOpt[2], layerOpt[3], layerOpt[4], layerOpt[5]);
                            // console.log(bitmapArr);
                            totalArr = totalArr.concat(bitmapArr);
                        }
                    }
                    //子元素递归
                    if (dataArr[i].subMotion && dataArr[i].subMotion.length) {
                        pushSubMotion(dataArr[i].subMotion);
                    }
                }
            }
        }

        //loading
        var $loading = $config.loading;
        if (!$.isEmptyObject($loading) && !$scope.loadingSourceReady) {
            $loading.bg && totalArr.push(SLeasy.path($config.host, $config.loading.bg));
            pushSubMotion($loading.subMotion);
            $scope.loadingSourceReady = true;
            $scope.totalLoad = totalArr;
            return totalArr;
        }


        //幻灯容器背景
        if ($config.bg) totalArr.push(SLeasy.path($config.host, $config.bg));

        //浮动元素
        for (var i = 0; i < $config.floats.length; i++) {
            $config.floats[i].img && totalArr.push(SLeasy.path($config.host, $config.floats[i].img));
            //ae序列帧
            var ae = $config.floats[i].ae;
            if (ae) {
                for (var n = 0; n < ae.layer.length; n++) {
                    var layerOpt = ae.layer[n];
                    if (layerOpt[6] === false) {
                        console.log('skip:' + ae.layer[n]);
                        continue;
                    }
                    console.log(layerOpt);
                    var bitmapArr = SLeasy.addBitmaps(null, layerOpt[1], layerOpt[2], layerOpt[3], layerOpt[4], layerOpt[5]);
                    // console.log(bitmapArr);
                    totalArr = totalArr.concat(bitmapArr);
                }
            }
        }

        //幻灯背景+子动画元素
        for (var i = 0; i < $config.sliders.length; i++) {
            if ($config.sliders[i].bg) {
                if ($config.sliders[i].bg && typeof $config.sliders[i].bg == 'string') {
                    totalArr.push(SLeasy.path($config.host, $config.sliders[i].bg));
                } else {
                    if ($config.sliders[i].bg) {
                        //多重背景
                        for (var j = 0; j < $config.sliders[i].bg.length; j++) {
                            $config.sliders[i].bg[j] && totalArr.push(SLeasy.path($config.host, $config.sliders[i].bg[j]));
                        }
                    }
                }
            }
            //子元素
            pushSubMotion($config.sliders[i].subMotion)
        }

        //详情页背景+子动画元素
        for (var i = 0; i < $config.details.length; i++) {
            if ($config.details[i].bg && typeof $config.details[i].bg == 'string') {
                totalArr.push(SLeasy.path($config.host, $config.details[i].bg));
            } else {
                if ($config.details[i].bg) {
                    for (var j = 0; j < $config.details[i].bg.length; j++) {//多重背景
                        $config.details[i].bg[j] && totalArr.push(SLeasy.path($config.host, $config.details[i].bg[j]));
                    }
                }
            }
            //子元素
            pushSubMotion($config.details[i].subMotion)
        }

        //额外加载项
        for (var i = 0; i < $config.exLoadArr.length; i++) {
            totalArr.push(SLeasy.path($config.host, $config.exLoadArr[i]));
        }

        //return
        if (!$config.preload) {
            $scope.totalLoad = totalArr;
            return totalArr;//是否进行预加载
        } else {
            console.log('需加载的图片:', totalArr);
            $scope.totalLoad = totalArr;
            return totalArr;
        }
    }

})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    Hammer
);