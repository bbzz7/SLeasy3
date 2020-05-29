/*!
 SLeasy 3.9.7 by 宇文互动 庄宇 2020-05-20 email:30755405@qq.com
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
/*! howler.js v2.1.2 | (c) 2013-2019, James Simpson of GoldFire Studios | MIT License | howlerjs.com */
!function(){"use strict";var e=function(){this.init()};e.prototype={init:function(){var e=this||n;return e._counter=1e3,e._html5AudioPool=[],e.html5PoolSize=10,e._codecs={},e._howls=[],e._muted=!1,e._volume=1,e._canPlayEvent="canplaythrough",e._navigator="undefined"!=typeof window&&window.navigator?window.navigator:null,e.masterGain=null,e.noAudio=!1,e.usingWebAudio=!0,e.autoSuspend=!0,e.ctx=null,e.autoUnlock=!0,e._setup(),e},volume:function(e){var o=this||n;if(e=parseFloat(e),o.ctx||_(),void 0!==e&&e>=0&&e<=1){if(o._volume=e,o._muted)return o;o.usingWebAudio&&o.masterGain.gain.setValueAtTime(e,n.ctx.currentTime);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),a=0;a<r.length;a++){var u=o._howls[t]._soundById(r[a]);u&&u._node&&(u._node.volume=u._volume*e)}return o}return o._volume},mute:function(e){var o=this||n;o.ctx||_(),o._muted=e,o.usingWebAudio&&o.masterGain.gain.setValueAtTime(e?0:o._volume,n.ctx.currentTime);for(var t=0;t<o._howls.length;t++)if(!o._howls[t]._webAudio)for(var r=o._howls[t]._getSoundIds(),a=0;a<r.length;a++){var u=o._howls[t]._soundById(r[a]);u&&u._node&&(u._node.muted=!!e||u._muted)}return o},unload:function(){for(var e=this||n,o=e._howls.length-1;o>=0;o--)e._howls[o].unload();return e.usingWebAudio&&e.ctx&&void 0!==e.ctx.close&&(e.ctx.close(),e.ctx=null,_()),e},codecs:function(e){return(this||n)._codecs[e.replace(/^x-/,"")]},_setup:function(){var e=this||n;if(e.state=e.ctx?e.ctx.state||"suspended":"suspended",e._autoSuspend(),!e.usingWebAudio)if("undefined"!=typeof Audio)try{var o=new Audio;void 0===o.oncanplaythrough&&(e._canPlayEvent="canplay")}catch(n){e.noAudio=!0}else e.noAudio=!0;try{var o=new Audio;o.muted&&(e.noAudio=!0)}catch(e){}return e.noAudio||e._setupCodecs(),e},_setupCodecs:function(){var e=this||n,o=null;try{o="undefined"!=typeof Audio?new Audio:null}catch(n){return e}if(!o||"function"!=typeof o.canPlayType)return e;var t=o.canPlayType("audio/mpeg;").replace(/^no$/,""),r=e._navigator&&e._navigator.userAgent.match(/OPR\/([0-6].)/g),a=r&&parseInt(r[0].split("/")[1],10)<33;return e._codecs={mp3:!(a||!t&&!o.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!t,opus:!!o.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!o.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!o.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!o.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!o.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(o.canPlayType("audio/x-m4a;")||o.canPlayType("audio/m4a;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(o.canPlayType("audio/x-mp4;")||o.canPlayType("audio/mp4;")||o.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),webm:!!o.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),dolby:!!o.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(o.canPlayType("audio/x-flac;")||o.canPlayType("audio/flac;")).replace(/^no$/,"")},e},_unlockAudio:function(){var e=this||n;if(!e._audioUnlocked&&e.ctx){e._audioUnlocked=!1,e.autoUnlock=!1,e._mobileUnloaded||44100===e.ctx.sampleRate||(e._mobileUnloaded=!0,e.unload()),e._scratchBuffer=e.ctx.createBuffer(1,1,22050);var o=function(n){for(var t=0;t<e.html5PoolSize;t++)try{var r=new Audio;r._unlocked=!0,e._releaseHtml5Audio(r)}catch(n){e.noAudio=!0}for(var t=0;t<e._howls.length;t++)if(!e._howls[t]._webAudio)for(var a=e._howls[t]._getSoundIds(),u=0;u<a.length;u++){var i=e._howls[t]._soundById(a[u]);i&&i._node&&!i._node._unlocked&&(i._node._unlocked=!0,i._node.load())}e._autoResume();var d=e.ctx.createBufferSource();d.buffer=e._scratchBuffer,d.connect(e.ctx.destination),void 0===d.start?d.noteOn(0):d.start(0),"function"==typeof e.ctx.resume&&e.ctx.resume(),d.onended=function(){d.disconnect(0),e._audioUnlocked=!0,document.removeEventListener("touchstart",o,!0),document.removeEventListener("touchend",o,!0),document.removeEventListener("click",o,!0);for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("unlock")}};return document.addEventListener("touchstart",o,!0),document.addEventListener("touchend",o,!0),document.addEventListener("click",o,!0),e}},_obtainHtml5Audio:function(){var e=this||n;if(e._html5AudioPool.length)return e._html5AudioPool.pop();var o=(new Audio).play();return o&&"undefined"!=typeof Promise&&(o instanceof Promise||"function"==typeof o.then)&&o.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(e){var o=this||n;return e._unlocked&&o._html5AudioPool.push(e),o},_autoSuspend:function(){var e=this;if(e.autoSuspend&&e.ctx&&void 0!==e.ctx.suspend&&n.usingWebAudio){for(var o=0;o<e._howls.length;o++)if(e._howls[o]._webAudio)for(var t=0;t<e._howls[o]._sounds.length;t++)if(!e._howls[o]._sounds[t]._paused)return e;return e._suspendTimer&&clearTimeout(e._suspendTimer),e._suspendTimer=setTimeout(function(){e.autoSuspend&&(e._suspendTimer=null,e.state="suspending",e.ctx.suspend().then(function(){e.state="suspended",e._resumeAfterSuspend&&(delete e._resumeAfterSuspend,e._autoResume())}))},3e4),e}},_autoResume:function(){var e=this;if(e.ctx&&void 0!==e.ctx.resume&&n.usingWebAudio)return"running"===e.state&&e._suspendTimer?(clearTimeout(e._suspendTimer),e._suspendTimer=null):"suspended"===e.state?(e.ctx.resume().then(function(){e.state="running";for(var n=0;n<e._howls.length;n++)e._howls[n]._emit("resume")}),e._suspendTimer&&(clearTimeout(e._suspendTimer),e._suspendTimer=null)):"suspending"===e.state&&(e._resumeAfterSuspend=!0),e}};var n=new e,o=function(e){var n=this;if(!e.src||0===e.src.length)return void console.error("An array of source files must be passed with any new Howl.");n.init(e)};o.prototype={init:function(e){var o=this;return n.ctx||_(),o._autoplay=e.autoplay||!1,o._format="string"!=typeof e.format?e.format:[e.format],o._html5=e.html5||!1,o._muted=e.mute||!1,o._loop=e.loop||!1,o._pool=e.pool||5,o._preload="boolean"!=typeof e.preload||e.preload,o._rate=e.rate||1,o._sprite=e.sprite||{},o._src="string"!=typeof e.src?e.src:[e.src],o._volume=void 0!==e.volume?e.volume:1,o._xhrWithCredentials=e.xhrWithCredentials||!1,o._duration=0,o._state="unloaded",o._sounds=[],o._endTimers={},o._queue=[],o._playLock=!1,o._onend=e.onend?[{fn:e.onend}]:[],o._onfade=e.onfade?[{fn:e.onfade}]:[],o._onload=e.onload?[{fn:e.onload}]:[],o._onloaderror=e.onloaderror?[{fn:e.onloaderror}]:[],o._onplayerror=e.onplayerror?[{fn:e.onplayerror}]:[],o._onpause=e.onpause?[{fn:e.onpause}]:[],o._onplay=e.onplay?[{fn:e.onplay}]:[],o._onstop=e.onstop?[{fn:e.onstop}]:[],o._onmute=e.onmute?[{fn:e.onmute}]:[],o._onvolume=e.onvolume?[{fn:e.onvolume}]:[],o._onrate=e.onrate?[{fn:e.onrate}]:[],o._onseek=e.onseek?[{fn:e.onseek}]:[],o._onunlock=e.onunlock?[{fn:e.onunlock}]:[],o._onresume=[],o._webAudio=n.usingWebAudio&&!o._html5,void 0!==n.ctx&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(o),o._autoplay&&o._queue.push({event:"play",action:function(){o.play()}}),o._preload&&o.load(),o},load:function(){var e=this,o=null;if(n.noAudio)return void e._emit("loaderror",null,"No audio support.");"string"==typeof e._src&&(e._src=[e._src]);for(var r=0;r<e._src.length;r++){var u,i;if(e._format&&e._format[r])u=e._format[r];else{if("string"!=typeof(i=e._src[r])){e._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}u=/^data:audio\/([^;,]+);/i.exec(i),u||(u=/\.([^.]+)$/.exec(i.split("?",1)[0])),u&&(u=u[1].toLowerCase())}if(u||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),u&&n.codecs(u)){o=e._src[r];break}}return o?(e._src=o,e._state="loading","https:"===window.location.protocol&&"http:"===o.slice(0,5)&&(e._html5=!0,e._webAudio=!1),new t(e),e._webAudio&&a(e),e):void e._emit("loaderror",null,"No codec support for selected audio sources.")},play:function(e,o){var t=this,r=null;if("number"==typeof e)r=e,e=null;else{if("string"==typeof e&&"loaded"===t._state&&!t._sprite[e])return null;if(void 0===e&&(e="__default",!t._playLock)){for(var a=0,u=0;u<t._sounds.length;u++)t._sounds[u]._paused&&!t._sounds[u]._ended&&(a++,r=t._sounds[u]._id);1===a?e=null:r=null}}var i=r?t._soundById(r):t._inactiveSound();if(!i)return null;if(r&&!e&&(e=i._sprite||"__default"),"loaded"!==t._state){i._sprite=e,i._ended=!1;var d=i._id;return t._queue.push({event:"play",action:function(){t.play(d)}}),d}if(r&&!i._paused)return o||t._loadQueue("play"),i._id;t._webAudio&&n._autoResume();var _=Math.max(0,i._seek>0?i._seek:t._sprite[e][0]/1e3),s=Math.max(0,(t._sprite[e][0]+t._sprite[e][1])/1e3-_),l=1e3*s/Math.abs(i._rate),c=t._sprite[e][0]/1e3,f=(t._sprite[e][0]+t._sprite[e][1])/1e3,p=!(!i._loop&&!t._sprite[e][2]);i._sprite=e,i._ended=!1;var m=function(){i._paused=!1,i._seek=_,i._start=c,i._stop=f,i._loop=p};if(_>=f)return void t._ended(i);var v=i._node;if(t._webAudio){var h=function(){t._playLock=!1,m(),t._refreshBuffer(i);var e=i._muted||t._muted?0:i._volume;v.gain.setValueAtTime(e,n.ctx.currentTime),i._playStart=n.ctx.currentTime,void 0===v.bufferSource.start?i._loop?v.bufferSource.noteGrainOn(0,_,86400):v.bufferSource.noteGrainOn(0,_,s):i._loop?v.bufferSource.start(0,_,86400):v.bufferSource.start(0,_,s),l!==1/0&&(t._endTimers[i._id]=setTimeout(t._ended.bind(t,i),l)),o||setTimeout(function(){t._emit("play",i._id),t._loadQueue()},0)};"running"===n.state?h():(t._playLock=!0,t.once("resume",h),t._clearTimer(i._id))}else{var y=function(){v.currentTime=_,v.muted=i._muted||t._muted||n._muted||v.muted,v.volume=i._volume*n.volume(),v.playbackRate=i._rate;try{var r=v.play();if(r&&"undefined"!=typeof Promise&&(r instanceof Promise||"function"==typeof r.then)?(t._playLock=!0,m(),r.then(function(){t._playLock=!1,v._unlocked=!0,o||(t._emit("play",i._id),t._loadQueue())}).catch(function(){t._playLock=!1,t._emit("playerror",i._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),i._ended=!0,i._paused=!0})):o||(t._playLock=!1,m(),t._emit("play",i._id),t._loadQueue()),v.playbackRate=i._rate,v.paused)return void t._emit("playerror",i._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");"__default"!==e||i._loop?t._endTimers[i._id]=setTimeout(t._ended.bind(t,i),l):(t._endTimers[i._id]=function(){t._ended(i),v.removeEventListener("ended",t._endTimers[i._id],!1)},v.addEventListener("ended",t._endTimers[i._id],!1))}catch(e){t._emit("playerror",i._id,e)}};"data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"===v.src&&(v.src=t._src,v.load());var g=window&&window.ejecta||!v.readyState&&n._navigator.isCocoonJS;if(v.readyState>=3||g)y();else{t._playLock=!0;var A=function(){y(),v.removeEventListener(n._canPlayEvent,A,!1)};v.addEventListener(n._canPlayEvent,A,!1),t._clearTimer(i._id)}}return i._id},pause:function(e){var n=this;if("loaded"!==n._state||n._playLock)return n._queue.push({event:"pause",action:function(){n.pause(e)}}),n;for(var o=n._getSoundIds(e),t=0;t<o.length;t++){n._clearTimer(o[t]);var r=n._soundById(o[t]);if(r&&!r._paused&&(r._seek=n.seek(o[t]),r._rateSeek=0,r._paused=!0,n._stopFade(o[t]),r._node))if(n._webAudio){if(!r._node.bufferSource)continue;void 0===r._node.bufferSource.stop?r._node.bufferSource.noteOff(0):r._node.bufferSource.stop(0),n._cleanBuffer(r._node)}else isNaN(r._node.duration)&&r._node.duration!==1/0||r._node.pause();arguments[1]||n._emit("pause",r?r._id:null)}return n},stop:function(e,n){var o=this;if("loaded"!==o._state||o._playLock)return o._queue.push({event:"stop",action:function(){o.stop(e)}}),o;for(var t=o._getSoundIds(e),r=0;r<t.length;r++){o._clearTimer(t[r]);var a=o._soundById(t[r]);a&&(a._seek=a._start||0,a._rateSeek=0,a._paused=!0,a._ended=!0,o._stopFade(t[r]),a._node&&(o._webAudio?a._node.bufferSource&&(void 0===a._node.bufferSource.stop?a._node.bufferSource.noteOff(0):a._node.bufferSource.stop(0),o._cleanBuffer(a._node)):isNaN(a._node.duration)&&a._node.duration!==1/0||(a._node.currentTime=a._start||0,a._node.pause(),a._node.duration===1/0&&o._clearSound(a._node))),n||o._emit("stop",a._id))}return o},mute:function(e,o){var t=this;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"mute",action:function(){t.mute(e,o)}}),t;if(void 0===o){if("boolean"!=typeof e)return t._muted;t._muted=e}for(var r=t._getSoundIds(o),a=0;a<r.length;a++){var u=t._soundById(r[a]);u&&(u._muted=e,u._interval&&t._stopFade(u._id),t._webAudio&&u._node?u._node.gain.setValueAtTime(e?0:u._volume,n.ctx.currentTime):u._node&&(u._node.muted=!!n._muted||e),t._emit("mute",u._id))}return t},volume:function(){var e,o,t=this,r=arguments;if(0===r.length)return t._volume;if(1===r.length||2===r.length&&void 0===r[1]){t._getSoundIds().indexOf(r[0])>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else r.length>=2&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var a;if(!(void 0!==e&&e>=0&&e<=1))return a=o?t._soundById(o):t._sounds[0],a?a._volume:0;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"volume",action:function(){t.volume.apply(t,r)}}),t;void 0===o&&(t._volume=e),o=t._getSoundIds(o);for(var u=0;u<o.length;u++)(a=t._soundById(o[u]))&&(a._volume=e,r[2]||t._stopFade(o[u]),t._webAudio&&a._node&&!a._muted?a._node.gain.setValueAtTime(e,n.ctx.currentTime):a._node&&!a._muted&&(a._node.volume=e*n.volume()),t._emit("volume",a._id));return t},fade:function(e,o,t,r){var a=this;if("loaded"!==a._state||a._playLock)return a._queue.push({event:"fade",action:function(){a.fade(e,o,t,r)}}),a;e=parseFloat(e),o=parseFloat(o),t=parseFloat(t),a.volume(e,r);for(var u=a._getSoundIds(r),i=0;i<u.length;i++){var d=a._soundById(u[i]);if(d){if(r||a._stopFade(u[i]),a._webAudio&&!d._muted){var _=n.ctx.currentTime,s=_+t/1e3;d._volume=e,d._node.gain.setValueAtTime(e,_),d._node.gain.linearRampToValueAtTime(o,s)}a._startFadeInterval(d,e,o,t,u[i],void 0===r)}}return a},_startFadeInterval:function(e,n,o,t,r,a){var u=this,i=n,d=o-n,_=Math.abs(d/.01),s=Math.max(4,_>0?t/_:t),l=Date.now();e._fadeTo=o,e._interval=setInterval(function(){var r=(Date.now()-l)/t;l=Date.now(),i+=d*r,i=Math.max(0,i),i=Math.min(1,i),i=Math.round(100*i)/100,u._webAudio?e._volume=i:u.volume(i,e._id,!0),a&&(u._volume=i),(o<n&&i<=o||o>n&&i>=o)&&(clearInterval(e._interval),e._interval=null,e._fadeTo=null,u.volume(o,e._id),u._emit("fade",e._id))},s)},_stopFade:function(e){var o=this,t=o._soundById(e);return t&&t._interval&&(o._webAudio&&t._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(t._interval),t._interval=null,o.volume(t._fadeTo,e),t._fadeTo=null,o._emit("fade",e)),o},loop:function(){var e,n,o,t=this,r=arguments;if(0===r.length)return t._loop;if(1===r.length){if("boolean"!=typeof r[0])return!!(o=t._soundById(parseInt(r[0],10)))&&o._loop;e=r[0],t._loop=e}else 2===r.length&&(e=r[0],n=parseInt(r[1],10));for(var a=t._getSoundIds(n),u=0;u<a.length;u++)(o=t._soundById(a[u]))&&(o._loop=e,t._webAudio&&o._node&&o._node.bufferSource&&(o._node.bufferSource.loop=e,e&&(o._node.bufferSource.loopStart=o._start||0,o._node.bufferSource.loopEnd=o._stop)));return t},rate:function(){var e,o,t=this,r=arguments;if(0===r.length)o=t._sounds[0]._id;else if(1===r.length){var a=t._getSoundIds(),u=a.indexOf(r[0]);u>=0?o=parseInt(r[0],10):e=parseFloat(r[0])}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));var i;if("number"!=typeof e)return i=t._soundById(o),i?i._rate:t._rate;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"rate",action:function(){t.rate.apply(t,r)}}),t;void 0===o&&(t._rate=e),o=t._getSoundIds(o);for(var d=0;d<o.length;d++)if(i=t._soundById(o[d])){t.playing(o[d])&&(i._rateSeek=t.seek(o[d]),i._playStart=t._webAudio?n.ctx.currentTime:i._playStart),i._rate=e,t._webAudio&&i._node&&i._node.bufferSource?i._node.bufferSource.playbackRate.setValueAtTime(e,n.ctx.currentTime):i._node&&(i._node.playbackRate=e);var _=t.seek(o[d]),s=(t._sprite[i._sprite][0]+t._sprite[i._sprite][1])/1e3-_,l=1e3*s/Math.abs(i._rate);!t._endTimers[o[d]]&&i._paused||(t._clearTimer(o[d]),t._endTimers[o[d]]=setTimeout(t._ended.bind(t,i),l)),t._emit("rate",i._id)}return t},seek:function(){var e,o,t=this,r=arguments;if(0===r.length)o=t._sounds[0]._id;else if(1===r.length){var a=t._getSoundIds(),u=a.indexOf(r[0]);u>=0?o=parseInt(r[0],10):t._sounds.length&&(o=t._sounds[0]._id,e=parseFloat(r[0]))}else 2===r.length&&(e=parseFloat(r[0]),o=parseInt(r[1],10));if(void 0===o)return t;if("loaded"!==t._state||t._playLock)return t._queue.push({event:"seek",action:function(){t.seek.apply(t,r)}}),t;var i=t._soundById(o);if(i){if(!("number"==typeof e&&e>=0)){if(t._webAudio){var d=t.playing(o)?n.ctx.currentTime-i._playStart:0,_=i._rateSeek?i._rateSeek-i._seek:0;return i._seek+(_+d*Math.abs(i._rate))}return i._node.currentTime}var s=t.playing(o);s&&t.pause(o,!0),i._seek=e,i._ended=!1,t._clearTimer(o),t._webAudio||!i._node||isNaN(i._node.duration)||(i._node.currentTime=e);var l=function(){t._emit("seek",o),s&&t.play(o,!0)};if(s&&!t._webAudio){var c=function(){t._playLock?setTimeout(c,0):l()};setTimeout(c,0)}else l()}return t},playing:function(e){var n=this;if("number"==typeof e){var o=n._soundById(e);return!!o&&!o._paused}for(var t=0;t<n._sounds.length;t++)if(!n._sounds[t]._paused)return!0;return!1},duration:function(e){var n=this,o=n._duration,t=n._soundById(e);return t&&(o=n._sprite[t._sprite][1]/1e3),o},state:function(){return this._state},unload:function(){for(var e=this,o=e._sounds,t=0;t<o.length;t++)o[t]._paused||e.stop(o[t]._id),e._webAudio||(e._clearSound(o[t]._node),o[t]._node.removeEventListener("error",o[t]._errorFn,!1),o[t]._node.removeEventListener(n._canPlayEvent,o[t]._loadFn,!1),n._releaseHtml5Audio(o[t]._node)),delete o[t]._node,e._clearTimer(o[t]._id);var a=n._howls.indexOf(e);a>=0&&n._howls.splice(a,1);var u=!0;for(t=0;t<n._howls.length;t++)if(n._howls[t]._src===e._src||e._src.indexOf(n._howls[t]._src)>=0){u=!1;break}return r&&u&&delete r[e._src],n.noAudio=!1,e._state="unloaded",e._sounds=[],e=null,null},on:function(e,n,o,t){var r=this,a=r["_on"+e];return"function"==typeof n&&a.push(t?{id:o,fn:n,once:t}:{id:o,fn:n}),r},off:function(e,n,o){var t=this,r=t["_on"+e],a=0;if("number"==typeof n&&(o=n,n=null),n||o)for(a=0;a<r.length;a++){var u=o===r[a].id;if(n===r[a].fn&&u||!n&&u){r.splice(a,1);break}}else if(e)t["_on"+e]=[];else{var i=Object.keys(t);for(a=0;a<i.length;a++)0===i[a].indexOf("_on")&&Array.isArray(t[i[a]])&&(t[i[a]]=[])}return t},once:function(e,n,o){var t=this;return t.on(e,n,o,1),t},_emit:function(e,n,o){for(var t=this,r=t["_on"+e],a=r.length-1;a>=0;a--)r[a].id&&r[a].id!==n&&"load"!==e||(setTimeout(function(e){e.call(this,n,o)}.bind(t,r[a].fn),0),r[a].once&&t.off(e,r[a].fn,r[a].id));return t._loadQueue(e),t},_loadQueue:function(e){var n=this;if(n._queue.length>0){var o=n._queue[0];o.event===e&&(n._queue.shift(),n._loadQueue()),e||o.action()}return n},_ended:function(e){var o=this,t=e._sprite;if(!o._webAudio&&e._node&&!e._node.paused&&!e._node.ended&&e._node.currentTime<e._stop)return setTimeout(o._ended.bind(o,e),100),o;var r=!(!e._loop&&!o._sprite[t][2]);if(o._emit("end",e._id),!o._webAudio&&r&&o.stop(e._id,!0).play(e._id),o._webAudio&&r){o._emit("play",e._id),e._seek=e._start||0,e._rateSeek=0,e._playStart=n.ctx.currentTime;var a=1e3*(e._stop-e._start)/Math.abs(e._rate);o._endTimers[e._id]=setTimeout(o._ended.bind(o,e),a)}return o._webAudio&&!r&&(e._paused=!0,e._ended=!0,e._seek=e._start||0,e._rateSeek=0,o._clearTimer(e._id),o._cleanBuffer(e._node),n._autoSuspend()),o._webAudio||r||o.stop(e._id,!0),o},_clearTimer:function(e){var n=this;if(n._endTimers[e]){if("function"!=typeof n._endTimers[e])clearTimeout(n._endTimers[e]);else{var o=n._soundById(e);o&&o._node&&o._node.removeEventListener("ended",n._endTimers[e],!1)}delete n._endTimers[e]}return n},_soundById:function(e){for(var n=this,o=0;o<n._sounds.length;o++)if(e===n._sounds[o]._id)return n._sounds[o];return null},_inactiveSound:function(){var e=this;e._drain();for(var n=0;n<e._sounds.length;n++)if(e._sounds[n]._ended)return e._sounds[n].reset();return new t(e)},_drain:function(){var e=this,n=e._pool,o=0,t=0;if(!(e._sounds.length<n)){for(t=0;t<e._sounds.length;t++)e._sounds[t]._ended&&o++;for(t=e._sounds.length-1;t>=0;t--){if(o<=n)return;e._sounds[t]._ended&&(e._webAudio&&e._sounds[t]._node&&e._sounds[t]._node.disconnect(0),e._sounds.splice(t,1),o--)}}},_getSoundIds:function(e){var n=this;if(void 0===e){for(var o=[],t=0;t<n._sounds.length;t++)o.push(n._sounds[t]._id);return o}return[e]},_refreshBuffer:function(e){var o=this;return e._node.bufferSource=n.ctx.createBufferSource(),e._node.bufferSource.buffer=r[o._src],e._panner?e._node.bufferSource.connect(e._panner):e._node.bufferSource.connect(e._node),e._node.bufferSource.loop=e._loop,e._loop&&(e._node.bufferSource.loopStart=e._start||0,e._node.bufferSource.loopEnd=e._stop||0),e._node.bufferSource.playbackRate.setValueAtTime(e._rate,n.ctx.currentTime),o},_cleanBuffer:function(e){var o=this,t=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(n._scratchBuffer&&e.bufferSource&&(e.bufferSource.onended=null,e.bufferSource.disconnect(0),t))try{e.bufferSource.buffer=n._scratchBuffer}catch(e){}return e.bufferSource=null,o},_clearSound:function(e){/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent)||(e.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var t=function(e){this._parent=e,this.init()};t.prototype={init:function(){var e=this,o=e._parent;return e._muted=o._muted,e._loop=o._loop,e._volume=o._volume,e._rate=o._rate,e._seek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,o._sounds.push(e),e.create(),e},create:function(){var e=this,o=e._parent,t=n._muted||e._muted||e._parent._muted?0:e._volume;return o._webAudio?(e._node=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),e._node.gain.setValueAtTime(t,n.ctx.currentTime),e._node.paused=!0,e._node.connect(n.masterGain)):(e._node=n._obtainHtml5Audio(),e._errorFn=e._errorListener.bind(e),e._node.addEventListener("error",e._errorFn,!1),e._loadFn=e._loadListener.bind(e),e._node.addEventListener(n._canPlayEvent,e._loadFn,!1),e._node.src=o._src,e._node.preload="auto",e._node.volume=t*n.volume(),e._node.load()),e},reset:function(){var e=this,o=e._parent;return e._muted=o._muted,e._loop=o._loop,e._volume=o._volume,e._rate=o._rate,e._seek=0,e._rateSeek=0,e._paused=!0,e._ended=!0,e._sprite="__default",e._id=++n._counter,e},_errorListener:function(){var e=this;e._parent._emit("loaderror",e._id,e._node.error?e._node.error.code:0),e._node.removeEventListener("error",e._errorFn,!1)},_loadListener:function(){var e=this,o=e._parent;o._duration=Math.ceil(10*e._node.duration)/10,0===Object.keys(o._sprite).length&&(o._sprite={__default:[0,1e3*o._duration]}),"loaded"!==o._state&&(o._state="loaded",o._emit("load"),o._loadQueue()),e._node.removeEventListener(n._canPlayEvent,e._loadFn,!1)}};var r={},a=function(e){var n=e._src;if(r[n])return e._duration=r[n].duration,void d(e);if(/^data:[^;]+;base64,/.test(n)){for(var o=atob(n.split(",")[1]),t=new Uint8Array(o.length),a=0;a<o.length;++a)t[a]=o.charCodeAt(a);i(t.buffer,e)}else{var _=new XMLHttpRequest;_.open("GET",n,!0),_.withCredentials=e._xhrWithCredentials,_.responseType="arraybuffer",_.onload=function(){var n=(_.status+"")[0];if("0"!==n&&"2"!==n&&"3"!==n)return void e._emit("loaderror",null,"Failed loading audio file with status: "+_.status+".");i(_.response,e)},_.onerror=function(){e._webAudio&&(e._html5=!0,e._webAudio=!1,e._sounds=[],delete r[n],e.load())},u(_)}},u=function(e){try{e.send()}catch(n){e.onerror()}},i=function(e,o){var t=function(){o._emit("loaderror",null,"Decoding audio data failed.")},a=function(e){e&&o._sounds.length>0?(r[o._src]=e,d(o,e)):t()};"undefined"!=typeof Promise&&1===n.ctx.decodeAudioData.length?n.ctx.decodeAudioData(e).then(a).catch(t):n.ctx.decodeAudioData(e,a,t)},d=function(e,n){n&&!e._duration&&(e._duration=n.duration),0===Object.keys(e._sprite).length&&(e._sprite={__default:[0,1e3*e._duration]}),"loaded"!==e._state&&(e._state="loaded",e._emit("load"),e._loadQueue())},_=function(){if(n.usingWebAudio){try{"undefined"!=typeof AudioContext?n.ctx=new AudioContext:"undefined"!=typeof webkitAudioContext?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch(e){n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var e=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),o=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),t=o?parseInt(o[1],10):null;if(e&&t&&t<9){var r=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());(n._navigator&&n._navigator.standalone&&!r||n._navigator&&!n._navigator.standalone&&!r)&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=void 0===n.ctx.createGain?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:1,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};"function"==typeof define&&define.amd&&define([],function(){return{Howler:n,Howl:o}}),"undefined"!=typeof exports&&(exports.Howler=n,exports.Howl=o),"undefined"!=typeof window?(window.HowlerGlobal=e,window.Howler=n,window.Howl=o,window.Sound=t):"undefined"!=typeof global&&(global.HowlerGlobal=e,global.Howler=n,global.Howl=o,global.Sound=t)}();
/*! Spatial Plugin */
!function(){"use strict";HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(e){var n=this;if(!n.ctx||!n.ctx.listener)return n;for(var t=n._howls.length-1;t>=0;t--)n._howls[t].stereo(e);return n},HowlerGlobal.prototype.pos=function(e,n,t){var r=this;return r.ctx&&r.ctx.listener?(n="number"!=typeof n?r._pos[1]:n,t="number"!=typeof t?r._pos[2]:t,"number"!=typeof e?r._pos:(r._pos=[e,n,t],void 0!==r.ctx.listener.positionX?(r.ctx.listener.positionX.setTargetAtTime(r._pos[0],Howler.ctx.currentTime,.1),r.ctx.listener.positionY.setTargetAtTime(r._pos[1],Howler.ctx.currentTime,.1),r.ctx.listener.positionZ.setTargetAtTime(r._pos[2],Howler.ctx.currentTime,.1)):r.ctx.listener.setPosition(r._pos[0],r._pos[1],r._pos[2]),r)):r},HowlerGlobal.prototype.orientation=function(e,n,t,r,o,i){var a=this;if(!a.ctx||!a.ctx.listener)return a;var s=a._orientation;return n="number"!=typeof n?s[1]:n,t="number"!=typeof t?s[2]:t,r="number"!=typeof r?s[3]:r,o="number"!=typeof o?s[4]:o,i="number"!=typeof i?s[5]:i,"number"!=typeof e?s:(a._orientation=[e,n,t,r,o,i],void 0!==a.ctx.listener.forwardX?(a.ctx.listener.forwardX.setTargetAtTime(e,Howler.ctx.currentTime,.1),a.ctx.listener.forwardY.setTargetAtTime(n,Howler.ctx.currentTime,.1),a.ctx.listener.forwardZ.setTargetAtTime(t,Howler.ctx.currentTime,.1),a.ctx.listener.upX.setTargetAtTime(e,Howler.ctx.currentTime,.1),a.ctx.listener.upY.setTargetAtTime(n,Howler.ctx.currentTime,.1),a.ctx.listener.upZ.setTargetAtTime(t,Howler.ctx.currentTime,.1)):a.ctx.listener.setOrientation(e,n,t,r,o,i),a)},Howl.prototype.init=function(e){return function(n){var t=this;return t._orientation=n.orientation||[1,0,0],t._stereo=n.stereo||null,t._pos=n.pos||null,t._pannerAttr={coneInnerAngle:void 0!==n.coneInnerAngle?n.coneInnerAngle:360,coneOuterAngle:void 0!==n.coneOuterAngle?n.coneOuterAngle:360,coneOuterGain:void 0!==n.coneOuterGain?n.coneOuterGain:0,distanceModel:void 0!==n.distanceModel?n.distanceModel:"inverse",maxDistance:void 0!==n.maxDistance?n.maxDistance:1e4,panningModel:void 0!==n.panningModel?n.panningModel:"HRTF",refDistance:void 0!==n.refDistance?n.refDistance:1,rolloffFactor:void 0!==n.rolloffFactor?n.rolloffFactor:1},t._onstereo=n.onstereo?[{fn:n.onstereo}]:[],t._onpos=n.onpos?[{fn:n.onpos}]:[],t._onorientation=n.onorientation?[{fn:n.onorientation}]:[],e.call(this,n)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,t){var r=this;if(!r._webAudio)return r;if("loaded"!==r._state)return r._queue.push({event:"stereo",action:function(){r.stereo(n,t)}}),r;var o=void 0===Howler.ctx.createStereoPanner?"spatial":"stereo";if(void 0===t){if("number"!=typeof n)return r._stereo;r._stereo=n,r._pos=[n,0,0]}for(var i=r._getSoundIds(t),a=0;a<i.length;a++){var s=r._soundById(i[a]);if(s){if("number"!=typeof n)return s._stereo;s._stereo=n,s._pos=[n,0,0],s._node&&(s._pannerAttr.panningModel="equalpower",s._panner&&s._panner.pan||e(s,o),"spatial"===o?void 0!==s._panner.positionX?(s._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),s._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),s._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):s._panner.setPosition(n,0,0):s._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),r._emit("stereo",s._id)}}return r},Howl.prototype.pos=function(n,t,r,o){var i=this;if(!i._webAudio)return i;if("loaded"!==i._state)return i._queue.push({event:"pos",action:function(){i.pos(n,t,r,o)}}),i;if(t="number"!=typeof t?0:t,r="number"!=typeof r?-.5:r,void 0===o){if("number"!=typeof n)return i._pos;i._pos=[n,t,r]}for(var a=i._getSoundIds(o),s=0;s<a.length;s++){var p=i._soundById(a[s]);if(p){if("number"!=typeof n)return p._pos;p._pos=[n,t,r],p._node&&(p._panner&&!p._panner.pan||e(p,"spatial"),void 0!==p._panner.positionX?(p._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.positionY.setValueAtTime(t,Howler.ctx.currentTime),p._panner.positionZ.setValueAtTime(r,Howler.ctx.currentTime)):p._panner.setPosition(n,t,r)),i._emit("pos",p._id)}}return i},Howl.prototype.orientation=function(n,t,r,o){var i=this;if(!i._webAudio)return i;if("loaded"!==i._state)return i._queue.push({event:"orientation",action:function(){i.orientation(n,t,r,o)}}),i;if(t="number"!=typeof t?i._orientation[1]:t,r="number"!=typeof r?i._orientation[2]:r,void 0===o){if("number"!=typeof n)return i._orientation;i._orientation=[n,t,r]}for(var a=i._getSoundIds(o),s=0;s<a.length;s++){var p=i._soundById(a[s]);if(p){if("number"!=typeof n)return p._orientation;p._orientation=[n,t,r],p._node&&(p._panner||(p._pos||(p._pos=i._pos||[0,0,-.5]),e(p,"spatial")),void 0!==p._panner.orientationX?(p._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),p._panner.orientationY.setValueAtTime(t,Howler.ctx.currentTime),p._panner.orientationZ.setValueAtTime(r,Howler.ctx.currentTime)):p._panner.setOrientation(n,t,r)),i._emit("orientation",p._id)}}return i},Howl.prototype.pannerAttr=function(){var n,t,r,o=this,i=arguments;if(!o._webAudio)return o;if(0===i.length)return o._pannerAttr;if(1===i.length){if("object"!=typeof i[0])return r=o._soundById(parseInt(i[0],10)),r?r._pannerAttr:o._pannerAttr;n=i[0],void 0===t&&(n.pannerAttr||(n.pannerAttr={coneInnerAngle:n.coneInnerAngle,coneOuterAngle:n.coneOuterAngle,coneOuterGain:n.coneOuterGain,distanceModel:n.distanceModel,maxDistance:n.maxDistance,refDistance:n.refDistance,rolloffFactor:n.rolloffFactor,panningModel:n.panningModel}),o._pannerAttr={coneInnerAngle:void 0!==n.pannerAttr.coneInnerAngle?n.pannerAttr.coneInnerAngle:o._coneInnerAngle,coneOuterAngle:void 0!==n.pannerAttr.coneOuterAngle?n.pannerAttr.coneOuterAngle:o._coneOuterAngle,coneOuterGain:void 0!==n.pannerAttr.coneOuterGain?n.pannerAttr.coneOuterGain:o._coneOuterGain,distanceModel:void 0!==n.pannerAttr.distanceModel?n.pannerAttr.distanceModel:o._distanceModel,maxDistance:void 0!==n.pannerAttr.maxDistance?n.pannerAttr.maxDistance:o._maxDistance,refDistance:void 0!==n.pannerAttr.refDistance?n.pannerAttr.refDistance:o._refDistance,rolloffFactor:void 0!==n.pannerAttr.rolloffFactor?n.pannerAttr.rolloffFactor:o._rolloffFactor,panningModel:void 0!==n.pannerAttr.panningModel?n.pannerAttr.panningModel:o._panningModel})}else 2===i.length&&(n=i[0],t=parseInt(i[1],10));for(var a=o._getSoundIds(t),s=0;s<a.length;s++)if(r=o._soundById(a[s])){var p=r._pannerAttr;p={coneInnerAngle:void 0!==n.coneInnerAngle?n.coneInnerAngle:p.coneInnerAngle,coneOuterAngle:void 0!==n.coneOuterAngle?n.coneOuterAngle:p.coneOuterAngle,coneOuterGain:void 0!==n.coneOuterGain?n.coneOuterGain:p.coneOuterGain,distanceModel:void 0!==n.distanceModel?n.distanceModel:p.distanceModel,maxDistance:void 0!==n.maxDistance?n.maxDistance:p.maxDistance,refDistance:void 0!==n.refDistance?n.refDistance:p.refDistance,rolloffFactor:void 0!==n.rolloffFactor?n.rolloffFactor:p.rolloffFactor,panningModel:void 0!==n.panningModel?n.panningModel:p.panningModel};var c=r._panner;c?(c.coneInnerAngle=p.coneInnerAngle,c.coneOuterAngle=p.coneOuterAngle,c.coneOuterGain=p.coneOuterGain,c.distanceModel=p.distanceModel,c.maxDistance=p.maxDistance,c.refDistance=p.refDistance,c.rolloffFactor=p.rolloffFactor,c.panningModel=p.panningModel):(r._pos||(r._pos=o._pos||[0,0,-.5]),e(r,"spatial"))}return o},Sound.prototype.init=function(e){return function(){var n=this,t=n._parent;n._orientation=t._orientation,n._stereo=t._stereo,n._pos=t._pos,n._pannerAttr=t._pannerAttr,e.call(this),n._stereo?t.stereo(n._stereo):n._pos&&t.pos(n._pos[0],n._pos[1],n._pos[2],n._id)}}(Sound.prototype.init),Sound.prototype.reset=function(e){return function(){var n=this,t=n._parent;return n._orientation=t._orientation,n._stereo=t._stereo,n._pos=t._pos,n._pannerAttr=t._pannerAttr,n._stereo?t.stereo(n._stereo):n._pos?t.pos(n._pos[0],n._pos[1],n._pos[2],n._id):n._panner&&(n._panner.disconnect(0),n._panner=void 0,t._refreshBuffer(n)),e.call(this)}}(Sound.prototype.reset);var e=function(e,n){n=n||"spatial","spatial"===n?(e._panner=Howler.ctx.createPanner(),e._panner.coneInnerAngle=e._pannerAttr.coneInnerAngle,e._panner.coneOuterAngle=e._pannerAttr.coneOuterAngle,e._panner.coneOuterGain=e._pannerAttr.coneOuterGain,e._panner.distanceModel=e._pannerAttr.distanceModel,e._panner.maxDistance=e._pannerAttr.maxDistance,e._panner.refDistance=e._pannerAttr.refDistance,e._panner.rolloffFactor=e._pannerAttr.rolloffFactor,e._panner.panningModel=e._pannerAttr.panningModel,void 0!==e._panner.positionX?(e._panner.positionX.setValueAtTime(e._pos[0],Howler.ctx.currentTime),e._panner.positionY.setValueAtTime(e._pos[1],Howler.ctx.currentTime),e._panner.positionZ.setValueAtTime(e._pos[2],Howler.ctx.currentTime)):e._panner.setPosition(e._pos[0],e._pos[1],e._pos[2]),void 0!==e._panner.orientationX?(e._panner.orientationX.setValueAtTime(e._orientation[0],Howler.ctx.currentTime),e._panner.orientationY.setValueAtTime(e._orientation[1],Howler.ctx.currentTime),e._panner.orientationZ.setValueAtTime(e._orientation[2],Howler.ctx.currentTime)):e._panner.setOrientation(e._orientation[0],e._orientation[1],e._orientation[2])):(e._panner=Howler.ctx.createStereoPanner(),e._panner.pan.setValueAtTime(e._stereo,Howler.ctx.currentTime)),e._panner.connect(e._node),e._paused||e._parent.pause(e._id,!0).play(e._id,!0)}}();
/*!
 * VERSION: 0.2.0
 * DATE: 2016-07-12
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * Physics2DPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=Math.PI/180,e=function(t,e,i,n,r){this.p=e,this.f="function"==typeof t[e],this.start=this.value=this.f?t[e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3)]():parseFloat(t[e]),this.velocity=i||0,this.v=this.velocity/r,n||0===n?(this.acceleration=n,this.a=this.acceleration/(r*r)):this.acceleration=this.a=0},i="greensock.com",n="Physics2DPlugin",r=String.fromCharCode(103,114,101,101,110,115,111,99,107,46,99,111,109),o=String.fromCharCode(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47),s=function(t){return 1}(window?window.location.host:""),a=Math.random(),h=_gsScope._gsDefine.globals,l=h.com.greensock.core.Animation._rootFramesTimeline,c=_gsScope._gsDefine.plugin({propName:"physics2D",version:"0.2.0",API:2,init:function(a,h,c,d){if("function"==typeof h&&(h=h(d,a)),!s)return window.location.href="http://"+r+o+"?plugin="+n+"&source="+i,!1;this._target=a,this._tween=c,this._runBackwards=c.vars.runBackwards===!0,this._step=0;for(var f,u=c._timeline,g=+h.angle||0,p=+h.velocity||0,_=+h.acceleration||0,m=h.xProp||"x",C=h.yProp||"y",v=h.accelerationAngle||0===h.accelerationAngle?+h.accelerationAngle:g;u._timeline;)u=u._timeline;return this._stepsPerTimeUnit=f=u===l?1:30,h.gravity&&(_=+h.gravity,v=90),g*=t,v*=t,this._friction=1-+(h.friction||0),this._overwriteProps.push(m),this._overwriteProps.push(C),this._x=new e(a,m,Math.cos(g)*p,Math.cos(v)*_,f),this._y=new e(a,C,Math.sin(g)*p,Math.sin(v)*_,f),this._skipX=this._skipY=!1,s},set:function(){var t,e,i,n,r,o,s=this._tween._time,a=this._x,h=this._y;if(this._runBackwards===!0&&(s=this._tween._duration-s),1===this._friction)i=s*s*.5,t=a.start+(a.velocity*s+a.acceleration*i),e=h.start+(h.velocity*s+h.acceleration*i);else{if(s*=this._stepsPerTimeUnit,n=o=(0|s)-this._step,r=s%1,0>o)for(o=-o;--o>-1;)a.value-=a.v,h.value-=h.v,a.v/=this._friction,h.v/=this._friction,a.v-=a.a,h.v-=h.a;else for(;--o>-1;)a.v+=a.a,h.v+=h.a,a.v*=this._friction,h.v*=this._friction,a.value+=a.v,h.value+=h.v;t=a.value+a.v*r,e=h.value+h.v*r,this._step+=n}this._skipX||(a.m&&(t=a.m(t,this._target)),a.f?this._target[a.p](t):this._target[a.p]=t),this._skipY||(h.m&&(e=h.m(e,this._target)),h.f?this._target[h.p](e):this._target[h.p]=e)}}),d=c.prototype;d._kill=function(t){return null!=t[this._x.p]&&(this._skipX=!0),null!=t[this._y.p]&&(this._skipY=!0),this._super._kill.call(this,t)},d._mod=function(t){var e=t[this._x.p]||t.physics2D;e&&"function"==typeof e&&(this._x.m=e),e=t[this._y.p]||t.physics2D,e&&"function"==typeof e&&(this._y.m=e)},c._autoCSS=!0,c._cssRegister=function(){var t=h.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,n=e._setPluginRatio,r=e.CSSPropTween;e._registerComplexSpecialProp("physics2D",{parser:function(t,e,o,s,h,l){l=new c;var d,f=e.xProp||"x",u=e.yProp||"y",g={};return g[f]=g[u]=a++,d=i(t,g,s,h,l),h=new r(t,"physics2D",0,0,d.pt,2),h.data=d,h.plugin=l,h.setRatio=n,l._onInitTween(d.proxy,e,s._tween),h}})}}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();





/*!
 * VERSION: 0.2.0
 * DATE: 2016-07-12
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * PhysicsPropsPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=function(t,e,i,n,r,o){this.p=e,this.f="function"==typeof t[e],this.start=this.value=this.f?t[e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3)]():parseFloat(t[e]),this.velocity=i||0,this.v=this.velocity/o,n||0==n?(this.acceleration=n,this.a=this.acceleration/(o*o)):this.acceleration=this.a=0,this.friction=1-(r||0)},e=Math.random(),i=_gsScope._gsDefine.globals,n=i.com.greensock.core.Animation._rootFramesTimeline,r="",o="PhysicsPropsPlugin",s=String.fromCharCode(103,114,101,101,110,115,111,99,107,46,99,111,109),a=String.fromCharCode(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47),h=function(t){return 1}(window?window.location.host:""),l=_gsScope._gsDefine.plugin({propName:"physicsProps",version:"0.2.0",API:2,init:function(e,i,l,c){if("function"==typeof i&&(i=i(e)),!h)return window.location.href="http://"+s+a+"?plugin="+o+"&source="+r,!1;this._target=e,this._tween=l,this._runBackwards=l.vars.runBackwards===!0,this._step=0;for(var d,g,f=l._timeline,u=0;f._timeline;)f=f._timeline;this._stepsPerTimeUnit=f===n?1:30,this._props=[];for(d in i)g=i[d],"function"==typeof g&&(g=g(c,e)),(g.velocity||g.acceleration)&&(this._props[u++]=new t(e,d,g.velocity,g.acceleration,g.friction,this._stepsPerTimeUnit),this._overwriteProps[u]=d,g.friction&&(this._hasFriction=!0));return h},set:function(){var t,e,i,n,r,o,s=this._props.length,a=this._tween._time,h=this._target;if(this._runBackwards&&(a=this._tween._duration-a),this._hasFriction){if(a*=this._stepsPerTimeUnit,i=(0|a)-this._step,n=a%1,0>i)for(;--s>-1;){for(t=this._props[s],r=-i;--r>-1;)t.value-=t.v,t.v/=t.friction,t.v-=t.a;e=t.value+t.v*n,t.m&&(e=t.m(e,h)),t.f?h[t.p](e):h[t.p]=e}else for(;--s>-1;){for(t=this._props[s],r=i;--r>-1;)t.v+=t.a,t.v*=t.friction,t.value+=t.v;e=t.value+t.v*n,t.m&&(e=t.m(e,h)),t.f?h[t.p](e):h[t.p]=e}this._step+=i}else for(o=a*a*.5;--s>-1;)t=this._props[s],e=t.start+(t.velocity*a+t.acceleration*o),t.m&&(e=t.m(e,h)),t.f?h[t.p](e):h[t.p]=e}}),c=l.prototype;c._kill=function(t){for(var e=this._props.length;--e>-1;)this._props[e].p in t&&this._props.splice(e,1);return this._super._kill.call(this,t)},c._mod=function(t){for(var e,i=this._props.length;--i>-1;)e=t[this._props[i].p]||t.physicsProps,"function"==typeof e&&(this._props[i].m=e)},l._autoCSS=!0,l._cssRegister=function(){var t=i.CSSPlugin;if(t){var n=t._internals,r=n._parseToProxy,o=n._setPluginRatio,s=n.CSSPropTween;n._registerComplexSpecialProp("physicsProps",{parser:function(t,i,n,a,h,c){c=new l;var d,g,f={};i.scale&&(i.scaleX=i.scaleY=i.scale,delete i.scale);for(d in i)f[d]=e++;return g=r(t,f,a,h,c),h=new s(t,"physicsProps",0,0,g.pt,2),h.data=g,h.plugin=c,h.setRatio=o,c._onInitTween(g.proxy,i,a._tween),h}})}}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();




/*!
 * VERSION: 0.5.2
 * DATE: 2018-09-11
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * ScrambleTextPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var s=/(^\s+|\s+$)/g,_=/\s+/g,g=function(t){var e=t.nodeType,i="";if(1===e||9===e||11===e){if("string"==typeof t.textContent)return t.textContent;for(t=t.firstChild;t;t=t.nextSibling)i+=g(t)}else if(3===e||4===e)return t.nodeValue;return i},i=function(t,e){for(var i=e.length,s="";-1<--t;)s+=e[Math.random()*i|0];return s},d=function(t){var e;for(this.chars=C(t),this.sets=[],this.length=50,e=0;e<20;e++)this.sets[e]=i(80,this.chars);this.grow=function(t){for(e=0;e<20;e++)this.sets[e]+=i(t-this.length,this.chars);this.length=t}},t="[-]|\ud83c[\udc00-\udfff]|\ud83d[\udc00-\udfff]|[⚔-⚗]|\ud83e[\udd10-\udd5d]|[\ud800-\udbff][\udc00-\udfff]",f=new RegExp(t),n=new RegExp(t+"|.","g"),C=function(t,e,i){return i&&(t=t.replace(s,"")),""!==e&&e||!f.test(t)?t.split(e||""):t.match(n)},e="ABCDEFGHIJKLMNOPQRSTUVWXYZ",r=e.toLowerCase(),u={upperCase:new d(e),lowerCase:new d(r),upperAndLowerCase:new d(e+r)},c="ScrambleTextPlugin",p=String.fromCharCode(103,114,101,101,110,115,111,99,107,46,99,111,109),m=String.fromCharCode(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47),w=function(t){return !0}(window?window.location.host:""),h=_gsScope._gsDefine.plugin({propName:"scrambleText",version:"0.5.2",API:2,overwriteProps:["scrambleText","text"],init:function(t,e,i,s){if(this._prop="innerHTML"in t?"innerHTML":"textContent"in t?"textContent":0,!this._prop)return!1;if(!w)return window.location.href="http://"+p+m+"?plugin="+c+"&source=codepen",!1;"function"==typeof e&&(e=e(s,t)),this._target=t,"object"!=typeof e&&(e={text:e});var n,r,h,o,a=e.text||e.value,l=!1!==e.trim;return this._delimiter=n=e.delimiter||"",this._original=C(g(t).replace(_," ").split("&nbsp;").join(""),n,l),"{original}"!==a&&!0!==a&&null!=a||(a=this._original.join(n)),this._text=C((a||"").replace(_," "),n,l),this._hasClass=!1,"string"==typeof e.newClass&&(this._newClass=e.newClass,this._hasClass=!0),"string"==typeof e.oldClass&&(this._oldClass=e.oldClass,this._hasClass=!0),o=""===n,this._textHasEmoji=f.test(this._text.join(n))&&o,this._charsHaveEmoji=!!e.chars&&f.test(e.chars),this._length=o?this._original.length:this._original.join(n).length,this._lengthDif=(o?this._text.length:this._text.join(n).length)-this._length,this._fillChar=e.fillChar||e.chars&&-1!==e.chars.indexOf(" ")?"&nbsp;":"",this._charSet=h=u[e.chars||"upperCase"]||new d(e.chars),this._speed=.016/(e.speed||1),this._prevScrambleTime=0,this._setIndex=20*Math.random()|0,(r=this._length+Math.max(this._lengthDif,0))>h.length&&h.grow(r),this._chars=h.sets[this._setIndex],this._revealDelay=e.revealDelay||0,this._tweenLength=!1!==e.tweenLength,this._tween=i,this._rightToLeft=!!e.rightToLeft,w},set:function(t){var e,i,s,n,r,h,o,a,l,_=this._text.length,g=this._delimiter,d=this._tween._time,f=d-this._prevScrambleTime;this._revealDelay&&(this._tween.vars.runBackwards&&(d=this._tween._duration-d),t=0===d?0:d<this._revealDelay?1e-6:d===this._tween._duration?1:this._tween._ease.getRatio((d-this._revealDelay)/(this._tween._duration-this._revealDelay))),t<0?t=0:1<t&&(t=1),this._rightToLeft&&(t=1-t),e=t*_+.5|0,t?((f>this._speed||f<-this._speed)&&(this._setIndex=(this._setIndex+(19*Math.random()|0))%20,this._chars=this._charSet.sets[this._setIndex],this._prevScrambleTime+=f),n=this._chars):n=this._original.join(g),this._rightToLeft?1!==t||!this._tween.vars.runBackwards&&"isFromStart"!==this._tween.data?(o=this._text.slice(e).join(g),s=this._charsHaveEmoji?C(n).slice(0,this._length+(this._tweenLength?1-t*t*t:1)*this._lengthDif-(this._textHasEmoji?C(o):o).length+.5|0).join(""):n.substr(0,this._length+(this._tweenLength?1-t*t*t:1)*this._lengthDif-(this._textHasEmoji?C(o):o).length+.5|0),n=o):(s="",n=this._original.join(g)):(s=this._text.slice(0,e).join(g),i=(this._textHasEmoji?C(s):s).length,n=this._charsHaveEmoji?C(n).slice(i,this._length+(this._tweenLength?1-(t=1-t)*t*t*t:1)*this._lengthDif+.5|0).join(""):n.substr(i,this._length+(this._tweenLength?1-(t=1-t)*t*t*t:1)*this._lengthDif-i+.5|0)),o=this._hasClass?((r=(a=this._rightToLeft?this._oldClass:this._newClass)&&0!==e)?"<span class='"+a+"'>":"")+s+(r?"</span>":"")+((h=(l=this._rightToLeft?this._newClass:this._oldClass)&&e!==_)?"<span class='"+l+"'>":"")+g+n+(h?"</span>":""):s+g+n,this._target[this._prop]="&nbsp;"===this._fillChar&&-1!==o.indexOf("  ")?o.split("  ").join("&nbsp;&nbsp;"):o}}).prototype;for(h in h._newClass=h._oldClass="",u)u[h.toLowerCase()]=u[h],u[h.toUpperCase()]=u[h]}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope).ScrambleTextPlugin};"undefined"!=typeof module&&module.exports?(require("../TweenLite.js"),module.exports=e()):"function"==typeof define&&define.amd&&define(["TweenLite"],e)}();



/*!
 * VERSION: 0.7.0
 * DATE: 2018-11-13
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;!function(r){"use strict";var o=r.GreenSockGlobals||r,e=function(e){var t,i=e.split("."),n=o;for(t=0;t<i.length;t++)n[i[t]]=n=n[i[t]]||{};return n}("com.greensock.utils"),s="SplitText",l=String.fromCharCode(103,114,101,101,110,115,111,99,107,46,99,111,109),i=String.fromCharCode(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47),n=function(e){return !0}(r?r.location.host:""),T=function(e){var t=e.nodeType,i="";if(1===t||9===t||11===t){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)i+=T(e)}else if(3===t||4===t)return e.nodeValue;return i},q=document,t=void 0!==r?r:q.defaultView||{getComputedStyle:function(){}},z=function(e){return t.getComputedStyle(e)},a=/([A-Z])/g,D=function(e,t,i,n){var r;return(i=i||z(e))?r=(e=i.getPropertyValue(t.replace(a,"-$1").toLowerCase()))||i.length?e:i[t]:e.currentStyle&&(r=(i=e.currentStyle)[t]),n?r:parseInt(r,10)||0},d=function(e){return!!(e.length&&e[0]&&(e[0].nodeType&&e[0].style&&!e.nodeType||e[0].length&&e[0][0]))},N=function(e,t){for(var i,n=t.length;-1<--n;)if(i=t[n],e.substr(0,i.length)===i)return i.length},w=/(?:\r|\n|\t\t)/g,A=/(?:\s\s+)/g,L=127462,B=127487,O=function(e){return(e.charCodeAt(0)-55296<<10)+(e.charCodeAt(1)-56320)+65536},h=" style='position:relative;display:inline-block;"+(q.all&&!q.addEventListener?"*display:inline;*zoom:1;'":"'"),p=function(e,t){var i=-1!==(e=e||"").indexOf("++"),n=1;return i&&(e=e.split("++").join("")),function(){return"<"+t+h+(e?" class='"+e+(i?n++:"")+"'>":">")}},f=e.SplitText=o.SplitText=function(e,t){if("string"==typeof e&&(e=f.selector(e)),!n)return r.location.href="http://"+l+i+"?plugin="+s+"&source=codepen",!1;if(!e)throw"cannot split a null element.";this.elements=d(e)?function(e){var t,i,n,r=[],o=e.length;for(t=0;t<o;t++)if(i=e[t],d(i))for(n=i.length,n=0;n<i.length;n++)r.push(i[n]);else r.push(i);return r}(e):[e],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=t||{},this.split(t)},F=function(e,t,i){var n=e.nodeType;if(1===n||9===n||11===n)for(e=e.firstChild;e;e=e.nextSibling)F(e,t,i);else 3!==n&&4!==n||(e.nodeValue=e.nodeValue.split(t).join(i))},I=function(e,t){for(var i=t.length;-1<--i;)e.push(t[i])},u=function(e){var t,i=[],n=e.length;for(t=0;t!==n;i.push(e[t++]));return i},P=function(e,t,i){for(var n;e&&e!==t;){if(n=e._next||e.nextSibling)return n.textContent.charAt(0)===i;e=e.parentNode||e._parent}return!1},Q=function(e){var t,i,n=u(e.childNodes),r=n.length;for(t=0;t<r;t++)(i=n[t])._isSplit?Q(i):(t&&3===i.previousSibling.nodeType?i.previousSibling.nodeValue+=3===i.nodeType?i.nodeValue:i.firstChild.nodeValue:3!==i.nodeType&&e.insertBefore(i.firstChild,i),e.removeChild(i))},g=function(e,t,i,n,r,o,s){var l,a,d,h,p,f,u,g,c,C,S,m,x=z(e),y=D(e,"paddingLeft",x),b=-999,v=D(e,"borderBottomWidth",x)+D(e,"borderTopWidth",x),_=D(e,"borderLeftWidth",x)+D(e,"borderRightWidth",x),T=D(e,"paddingTop",x)+D(e,"paddingBottom",x),N=D(e,"paddingLeft",x)+D(e,"paddingRight",x),w=.2*D(e,"fontSize"),A=D(e,"textAlign",x,!0),L=[],B=[],O=[],V=t.wordDelimiter||" ",W=t.tag?t.tag:t.span?"span":"div",H=t.type||t.split||"chars,words,lines",E=r&&-1!==H.indexOf("lines")?[]:null,k=-1!==H.indexOf("words"),R=-1!==H.indexOf("chars"),j="absolute"===t.position||!0===t.absolute,M=t.linesClass,G=-1!==(M||"").indexOf("++"),$=[];for(G&&(M=M.split("++").join("")),d=(a=e.getElementsByTagName("*")).length,p=[],l=0;l<d;l++)p[l]=a[l];if(E||j)for(l=0;l<d;l++)((f=(h=p[l]).parentNode===e)||j||R&&!k)&&(m=h.offsetTop,E&&f&&Math.abs(m-b)>w&&("BR"!==h.nodeName||0===l)&&(u=[],E.push(u),b=m),j&&(h._x=h.offsetLeft,h._y=m,h._w=h.offsetWidth,h._h=h.offsetHeight),E&&((h._isSplit&&f||!R&&f||k&&f||!k&&h.parentNode.parentNode===e&&!h.parentNode._isSplit)&&(u.push(h),h._x-=y,P(h,e,V)&&(h._wordEnd=!0)),"BR"===h.nodeName&&(h.nextSibling&&"BR"===h.nextSibling.nodeName||0===l)&&E.push([])));for(l=0;l<d;l++)f=(h=p[l]).parentNode===e,"BR"!==h.nodeName?(j&&(c=h.style,k||f||(h._x+=h.parentNode._x,h._y+=h.parentNode._y),c.left=h._x+"px",c.top=h._y+"px",c.position="absolute",c.display="block",c.width=h._w+1+"px",c.height=h._h+"px"),!k&&R?h._isSplit?(h._next=h.nextSibling,h.parentNode.appendChild(h)):h.parentNode._isSplit?(h._parent=h.parentNode,!h.previousSibling&&h.firstChild&&(h.firstChild._isFirst=!0),h.nextSibling&&" "===h.nextSibling.textContent&&!h.nextSibling.nextSibling&&$.push(h.nextSibling),h._next=h.nextSibling&&h.nextSibling._isFirst?null:h.nextSibling,h.parentNode.removeChild(h),p.splice(l--,1),d--):f||(m=!h.nextSibling&&P(h.parentNode,e,V),h.parentNode._parent&&h.parentNode._parent.appendChild(h),m&&h.parentNode.appendChild(q.createTextNode(" ")),"span"===W&&(h.style.display="inline"),L.push(h)):h.parentNode._isSplit&&!h._isSplit&&""!==h.innerHTML?B.push(h):R&&!h._isSplit&&("span"===W&&(h.style.display="inline"),L.push(h))):E||j?(h.parentNode&&h.parentNode.removeChild(h),p.splice(l--,1),d--):k||e.appendChild(h);for(l=$.length;-1<--l;)$[l].parentNode.removeChild($[l]);if(E){for(j&&(C=q.createElement(W),e.appendChild(C),S=C.offsetWidth+"px",m=C.offsetParent===e?0:e.offsetLeft,e.removeChild(C)),c=e.style.cssText,e.style.cssText="display:none;";e.firstChild;)e.removeChild(e.firstChild);for(g=" "===V&&(!j||!k&&!R),l=0;l<E.length;l++){for(u=E[l],(C=q.createElement(W)).style.cssText="display:block;text-align:"+A+";position:"+(j?"absolute;":"relative;"),M&&(C.className=M+(G?l+1:"")),O.push(C),d=u.length,a=0;a<d;a++)"BR"!==u[a].nodeName&&(h=u[a],C.appendChild(h),g&&h._wordEnd&&C.appendChild(q.createTextNode(" ")),j&&(0===a&&(C.style.top=h._y+"px",C.style.left=y+m+"px"),h.style.top="0px",m&&(h.style.left=h._x-m+"px")));0===d?C.innerHTML="&nbsp;":k||R||(Q(C),F(C,String.fromCharCode(160)," ")),j&&(C.style.width=S,C.style.height=h._h+"px"),e.appendChild(C)}e.style.cssText=c}j&&(s>e.clientHeight&&(e.style.height=s-T+"px",e.clientHeight<s&&(e.style.height=s+v+"px")),o>e.clientWidth&&(e.style.width=o-N+"px",e.clientWidth<o&&(e.style.width=o+_+"px"))),I(i,L),k&&I(n,B),I(r,O)},c=function(e,t,i,n){var r,o,s=u(e.childNodes),l=s.length,a="absolute"===t.position||!0===t.absolute;if(3!==e.nodeType||1<l){for(t.absolute=!1,r=0;r<l;r++)(3!==(o=s[r]).nodeType||/\S+/.test(o.nodeValue))&&(a&&3!==o.nodeType&&"inline"===D(o,"display",null,!0)&&(o.style.display="inline-block",o.style.position="relative"),o._isSplit=!0,c(o,t,i,n));return t.absolute=a,void(e._isSplit=!0)}!function(e,t,i,n){var r,o,s,l,a,d,h,p,f,u,g=t.tag?t.tag:t.span?"span":"div",c=-1!==(t.type||t.split||"chars,words,lines").indexOf("chars"),C="absolute"===t.position||!0===t.absolute,S=t.wordDelimiter||" ",m=" "!==S?"":C?"&#173; ":" ",x="</"+g+">",y=!0,b=t.specialChars?"function"==typeof t.specialChars?t.specialChars:N:null,v=q.createElement("div"),_=e.parentNode;for(_.insertBefore(v,e),v.textContent=e.nodeValue,_.removeChild(e),h=-1!==(r=T(e=v)).indexOf("<"),!1!==t.reduceWhiteSpace&&(r=r.replace(A," ").replace(w,"")),h&&(r=r.split("<").join("{{LT}}")),a=r.length,o=(" "===r.charAt(0)?m:"")+i(),s=0;s<a;s++)if(d=r.charAt(s),b&&(u=b(r.substr(s),t.specialChars)))d=r.substr(s,u||1),o+=c&&" "!==d?n()+d+"</"+g+">":d,s+=u-1;else if(d===S&&r.charAt(s-1)!==S&&s){for(o+=y?x:"",y=!1;r.charAt(s+1)===S;)o+=m,s++;s===a-1?o+=m:")"!==r.charAt(s+1)&&(o+=m+i(),y=!0)}else"{"===d&&"{{LT}}"===r.substr(s,6)?(o+=c?n()+"{{LT}}</"+g+">":"{{LT}}",s+=5):55296<=d.charCodeAt(0)&&d.charCodeAt(0)<=56319||65024<=r.charCodeAt(s+1)&&r.charCodeAt(s+1)<=65039?(p=O(r.substr(s,2)),f=O(r.substr(s+2,2)),l=L<=p&&p<=B&&L<=f&&f<=B||127995<=f&&f<=127999?4:2,o+=c&&" "!==d?n()+r.substr(s,l)+"</"+g+">":r.substr(s,l),s+=l-1):o+=c&&" "!==d?n()+d+"</"+g+">":d;e.outerHTML=o+(y?x:""),h&&F(_,"{{LT}}","<")}(e,t,i,n)},C=f.prototype;C.split=function(e){this.isSplit&&this.revert(),this.vars=e=e||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var t,i,n,r=this.elements.length,o=e.tag?e.tag:e.span?"span":"div",s=p(e.wordsClass,o),l=p(e.charsClass,o);-1<--r;)n=this.elements[r],this._originals[r]=n.innerHTML,t=n.clientHeight,i=n.clientWidth,c(n,e,s,l),g(n,e,this.chars,this.words,this.lines,i,t);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},C.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var e=this._originals.length;-1<--e;)this.elements[e].innerHTML=this._originals[e];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},f.selector=r.$||r.jQuery||function(e){var t=r.$||r.jQuery;return t?(f.selector=t)(e):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)},f.version="0.7.0"}(_gsScope),function(e){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope).SplitText};"undefined"!=typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define([],t)}();



/*!
 * VERSION: 0.11.0
 * DATE: 2017-01-09
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * ThrowPropsPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.ThrowPropsPlugin",["plugins.TweenPlugin","TweenLite","easing.Ease","utils.VelocityTracker"],function(t,e,i,n){var r,o,s,a,h=function(){t.call(this,"throwProps"),this._overwriteProps.length=0},l=999999999999999,c=1e-10,d=_gsScope._gsDefine.globals,f=!1,u={x:1,y:1,z:2,scale:1,scaleX:1,scaleY:1,rotation:1,rotationZ:1,rotationX:2,rotationY:2,skewX:1,skewY:1,xPercent:1,yPercent:1},g="greensock.com",p="ThrowPropsPlugin",_=String.fromCharCode(103,114,101,101,110,115,111,99,107,46,99,111,109),m=String.fromCharCode(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47),C=function(t){return 1}(window?window.location.host:""),v=function(t,e,i,n,r){var o,s,a,h,c=e.length,d=0,f=l;if("object"==typeof t){for(;--c>-1;){o=e[c],s=0;for(a in t)h=o[a]-t[a],s+=h*h;f>s&&(d=c,f=s)}if(l>(r||l)&&r<Math.sqrt(f))return t}else for(;--c>-1;)o=e[c],s=o-t,0>s&&(s=-s),s>=f||n>o||o>i||(d=c,f=s);return e[d]},S=function(t,e,i,n,r,o){if("auto"===t.end)return t;var s,a,h=t.end;if(i=isNaN(i)?l:i,n=isNaN(n)?-l:n,"object"==typeof e){if(s=e.calculated?e:("function"==typeof h?h(e):v(e,h,i,n,o))||e,!e.calculated){for(a in s)e[a]=s[a];e.calculated=!0}s=s[r]}else s="function"==typeof h?h(e):h instanceof Array?v(e,h,i,n,o):+h;return s>i?s=i:n>s&&(s=n),{max:s,min:s,unitFactor:t.unitFactor}},y=function(t,e,i){for(var n in e)void 0===t[n]&&n!==i&&(t[n]=e[n]);return t},w=h.calculateChange=function(t,n,r,o){null==o&&(o=.05);var s=n instanceof i?n:n?new i(n):e.defaultEase;return r*o*t/s.getRatio(o)},b=h.calculateDuration=function(t,n,r,o,s){s=s||.05;var a=o instanceof i?o:o?new i(o):e.defaultEase;return Math.abs((n-t)*a.getRatio(s)/r/s)},x=h.calculateTweenDuration=function(t,r,o,s,a,l){if("string"==typeof t&&(t=e.selector(t)),!t)return 0;null==o&&(o=10),null==s&&(s=.2),null==a&&(a=1),t.length&&(t=t[0]||t);var d,u,g,p,_,m,C,v,x,M,A,P,T,k=0,N=9999999999,D=r.throwProps||r,E=r.ease instanceof i?r.ease:r.ease?new i(r.ease):e.defaultEase,R=isNaN(D.checkpoint)?.05:+D.checkpoint,L=isNaN(D.resistance)?h.defaultResistance:+D.resistance;if(D.linkedProps)for(P=D.linkedProps.split(","),A={},T=0;T<P.length;T++)d=P[T],u=D[d],u&&(void 0!==u.velocity&&"number"==typeof u.velocity?p=+u.velocity||0:(x=x||n.getByTarget(t),p=x&&x.isTrackingProp(d)?x.getVelocity(d):0),_=isNaN(u.resistance)?L:+u.resistance,g=p*_>0?p/_:p/-_,m="function"==typeof t[d]?t[d.indexOf("set")||"function"!=typeof t["get"+d.substr(3)]?d:"get"+d.substr(3)]():t[d]||0,A[d]=m+w(p,E,g,R));for(d in D)"resistance"!==d&&"checkpoint"!==d&&"preventOvershoot"!==d&&"linkedProps"!==d&&"radius"!==d&&(u=D[d],"object"!=typeof u&&(x=x||n.getByTarget(t),x&&x.isTrackingProp(d)?u="number"==typeof u?{velocity:u}:{velocity:x.getVelocity(d)}:(p=+u||0,g=p*L>0?p/L:p/-L)),"object"==typeof u&&(void 0!==u.velocity&&"number"==typeof u.velocity?p=+u.velocity||0:(x=x||n.getByTarget(t),p=x&&x.isTrackingProp(d)?x.getVelocity(d):0),_=isNaN(u.resistance)?L:+u.resistance,g=p*_>0?p/_:p/-_,m="function"==typeof t[d]?t[d.indexOf("set")||"function"!=typeof t["get"+d.substr(3)]?d:"get"+d.substr(3)]():t[d]||0,C=m+w(p,E,g,R),void 0!==u.end&&(u=S(u,A&&d in A?A:C,u.max,u.min,d,D.radius),(l||f)&&(D[d]=y(u,D[d],"end"))),void 0!==u.max&&C>+u.max+c?(M=u.unitFactor||h.defaultUnitFactors[d]||1,v=m>u.max&&u.min!==u.max||p*M>-15&&45>p*M?s+.1*(o-s):b(m,u.max,p,E,R),N>v+a&&(N=v+a)):void 0!==u.min&&C<+u.min-c&&(M=u.unitFactor||h.defaultUnitFactors[d]||1,v=m<u.min&&u.min!==u.max||p*M>-45&&15>p*M?s+.1*(o-s):b(m,u.min,p,E,R),N>v+a&&(N=v+a)),v>k&&(k=v)),g>k&&(k=g));return k>N&&(k=N),k>o?o:s>k?s:k},M=h.prototype=new t("throwProps");return M.constructor=h,h.version="0.11.0",h.API=2,h._autoCSS=!0,h.defaultResistance=100,h.defaultUnitFactors={time:1e3,totalTime:1e3},h.track=function(t,e,i){return n.track(t,e,i)},h.untrack=function(t,e){n.untrack(t,e)},h.isTracking=function(t,e){return n.isTracking(t,e)},h.getVelocity=function(t,e){var i=n.getByTarget(t);return i?i.getVelocity(e):0/0},h._cssRegister=function(){var t=d.com.greensock.plugins.CSSPlugin;if(t){var e=t._internals,i=e._parseToProxy,s=e._setPluginRatio,a=e.CSSPropTween;e._registerComplexSpecialProp("throwProps",{parser:function(t,e,l,c,d,f){f=new h;var g,p,_,m,C,v={},S={},y={},w={},b={},x={};o={};for(_ in e)"resistance"!==_&&"preventOvershoot"!==_&&"linkedProps"!==_&&"radius"!==_&&(p=e[_],"object"==typeof p?(void 0!==p.velocity&&"number"==typeof p.velocity?v[_]=+p.velocity||0:(C=C||n.getByTarget(t),v[_]=C&&C.isTrackingProp(_)?C.getVelocity(_):0),void 0!==p.end&&(w[_]=p.end),void 0!==p.min&&(S[_]=p.min),void 0!==p.max&&(y[_]=p.max),p.preventOvershoot&&(x[_]=!0),void 0!==p.resistance&&(g=!0,b[_]=p.resistance)):"number"==typeof p?v[_]=p:(C=C||n.getByTarget(t),v[_]=C&&C.isTrackingProp(_)?C.getVelocity(_):p||0),u[_]&&c._enableTransforms(2===u[_]));m=i(t,v,c,d,f),r=m.proxy,v=m.end;for(_ in r)o[_]={velocity:v[_],min:S[_],max:y[_],end:w[_],resistance:b[_],preventOvershoot:x[_]};return null!=e.resistance&&(o.resistance=e.resistance),null!=e.linkedProps&&(o.linkedProps=e.linkedProps),null!=e.radius&&(o.radius=e.radius),e.preventOvershoot&&(o.preventOvershoot=!0),d=new a(t,"throwProps",0,0,m.pt,2),c._overwriteProps.pop(),d.plugin=f,d.setRatio=s,d.data=m,f._onInitTween(r,o,c._tween),d}})}},h.to=function(t,i,n,h,l){i.throwProps||(i={throwProps:i}),0===l&&(i.throwProps.preventOvershoot=!0),f=!0;var c=new e(t,h||1,i);return c.render(0,!0,!0),c.vars.css?(c.duration(x(r,{throwProps:o,ease:i.ease},n,h,l)),c._delay&&!c.vars.immediateRender?c.invalidate():s._onInitTween(r,a,c),f=!1,c):(c.kill(),c=new e(t,x(t,i,n,h,l),i),f=!1,c)},M._onInitTween=function(t,e,i,r){this.target=t,this._props=[],s=this,a=e;var o,h,l,c,d,u,v,b,x,M,A,P,T=i._ease,k=isNaN(e.checkpoint)?.05:+e.checkpoint,N=i._duration,D=e.preventOvershoot,E=0;if(!C)return window.location.href="http://"+_+m+"?plugin="+p+"&source="+g,!1;if(e.linkedProps)for(A=e.linkedProps.split(","),M={},P=0;P<A.length;P++)o=A[P],h=e[o],h&&(void 0!==h.velocity&&"number"==typeof h.velocity?d=+h.velocity||0:(x=x||n.getByTarget(t),d=x&&x.isTrackingProp(o)?x.getVelocity(o):0),l="function"==typeof t[o]?t[o.indexOf("set")||"function"!=typeof t["get"+o.substr(3)]?o:"get"+o.substr(3)]():t[o]||0,M[o]=l+w(d,T,N,k));for(o in e)if("resistance"!==o&&"checkpoint"!==o&&"preventOvershoot"!==o&&"linkedProps"!==o&&"radius"!==o){if(h=e[o],"function"==typeof h&&(h=h(r,t)),"number"==typeof h)d=+h||0;else if("object"!=typeof h||isNaN(h.velocity)){if(x=x||n.getByTarget(t),!x||!x.isTrackingProp(o))throw"ERROR: No velocity was defined in the throwProps tween of "+t+" property: "+o;d=x.getVelocity(o)}else d=+h.velocity;u=w(d,T,N,k),b=0,c="function"==typeof t[o],l=c?t[o.indexOf("set")||"function"!=typeof t["get"+o.substr(3)]?o:"get"+o.substr(3)]():t[o],"object"==typeof h&&(v=l+u,void 0!==h.end&&(h=S(h,M&&o in M?M:v,h.max,h.min,o,e.radius),f&&(e[o]=y(h,e[o],"end"))),void 0!==h.max&&+h.max<v?D||h.preventOvershoot?u=h.max-l:b=h.max-l-u:void 0!==h.min&&+h.min>v&&(D||h.preventOvershoot?u=h.min-l:b=h.min-l-u)),this._overwriteProps[E]=o,this._props[E++]={p:o,s:l,c1:u,c2:b,f:c,r:!1}}return C},M._kill=function(e){for(var i=this._props.length;--i>-1;)null!=e[this._props[i].p]&&this._props.splice(i,1);return t.prototype._kill.call(this,e)},M._mod=function(t){for(var e,i=this._props,n=i.length;--n>-1;)e=t[i[n].p]||t.throwProps,"function"==typeof e&&(i[n].m=e)},M.setRatio=function(t){for(var e,i,n=this._props.length;--n>-1;)e=this._props[n],i=e.s+e.c1*t+e.c2*t*t,e.m?i=e.m(i,this.target):1===t&&(i=(1e4*i+(0>i?-.5:.5)|0)/1e4),e.f?this.target[e.p](i):this.target[e.p]=i},t.activate([h]),h},!0),_gsScope._gsDefine("utils.VelocityTracker",["TweenLite"],function(t){var e,i,n,r,o=/([A-Z])/g,s={},a={x:1,y:1,z:2,scale:1,scaleX:1,scaleY:1,rotation:1,rotationZ:1,rotationX:2,rotationY:2,skewX:1,skewY:1,xPercent:1,yPercent:1},h=document.defaultView?document.defaultView.getComputedStyle:function(){},l=function(t,e,i){var n=(t._gsTransform||s)[e];return n||0===n?n:(t.style[e]?n=t.style[e]:(i=i||h(t,null))?n=i[e]||i.getPropertyValue(e)||i.getPropertyValue(e.replace(o,"-$1").toLowerCase()):t.currentStyle&&(n=t.currentStyle[e]),parseFloat(n)||0)},c=t.ticker,d=function(t,e,i){this.p=t,this.f=e,this.v1=this.v2=0,this.t1=this.t2=c.time,this.css=!1,this.type="",this._prev=null,i&&(this._next=i,i._prev=this)},f=function(){var t,i,o=e,s=c.time;if(s-n>=.03)for(r=n,n=s;o;){for(i=o._firstVP;i;)t=i.css?l(o.target,i.p):i.f?o.target[i.p]():o.target[i.p],(t!==i.v1||s-i.t1>.15)&&(i.v2=i.v1,i.v1=t,i.t2=i.t1,i.t1=s),i=i._next;o=o._next}},u=function(t){this._lookup={},this.target=t,this.elem=t.style&&t.nodeType?!0:!1,i||(c.addEventListener("tick",f,null,!1,-100),n=r=c.time,i=!0),e&&(this._next=e,e._prev=this),e=this},g=u.getByTarget=function(t){for(var i=e;i;){if(i.target===t)return i;i=i._next}},p=u.prototype;return p.addProp=function(e,i){if(!this._lookup[e]){var n=this.target,r="function"==typeof n[e],o=r?this._altProp(e):e,s=this._firstVP;this._firstVP=this._lookup[e]=this._lookup[o]=s=new d(o!==e&&0===e.indexOf("set")?o:e,r,s),s.css=this.elem&&(void 0!==this.target.style[s.p]||a[s.p]),s.css&&a[s.p]&&!n._gsTransform&&t.set(n,{x:"+=0",overwrite:!1}),s.type=i||s.css&&0===e.indexOf("rotation")?"deg":"",s.v1=s.v2=s.css?l(n,s.p):r?n[s.p]():n[s.p]}},p.removeProp=function(t){var e=this._lookup[t];e&&(e._prev?e._prev._next=e._next:e===this._firstVP&&(this._firstVP=e._next),e._next&&(e._next._prev=e._prev),this._lookup[t]=0,e.f&&(this._lookup[this._altProp(t)]=0))},p.isTrackingProp=function(t){return this._lookup[t]instanceof d},p.getVelocity=function(t){var e,i,n,r=this._lookup[t],o=this.target;if(!r)throw"The velocity of "+t+" is not being tracked.";return e=r.css?l(o,r.p):r.f?o[r.p]():o[r.p],i=e-r.v2,("rad"===r.type||"deg"===r.type)&&(n="rad"===r.type?2*Math.PI:360,i%=n,i!==i%(n/2)&&(i=0>i?i+n:i-n)),i/(c.time-r.t2)},p._altProp=function(t){var e=t.substr(0,3),i=("get"===e?"set":"set"===e?"get":e)+t.substr(3);return"function"==typeof this.target[i]?i:t},u.getByTarget=function(i){var n=e;for("string"==typeof i&&(i=t.selector(i)),i.length&&i!==window&&i[0]&&i[0].style&&!i.nodeType&&(i=i[0]);n;){if(n.target===i)return n;n=n._next}},u.track=function(t,e,i){var n=g(t),r=e.split(","),o=r.length;for(i=(i||"").split(","),n||(n=new u(t));--o>-1;)n.addProp(r[o],i[o]||i[0]);return n},u.untrack=function(t,i){var n=g(t),r=(i||"").split(","),o=r.length;if(n){for(;--o>-1;)n.removeProp(r[o]);n._firstVP&&i||(n._prev?n._prev._next=n._next:n===e&&(e=n._next),n._next&&(n._next._prev=n._prev))}},u.isTracking=function(t,e){var i=g(t);return i?!e&&i._firstVP?!0:i.isTrackingProp(e):!1},u},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=e())}("ThrowPropsPlugin");




/*!
 * VERSION: 0.2.0
 * DATE: 2018-08-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * DrawSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit https://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var e,t=_gsScope.document,p=t.defaultView?t.defaultView.getComputedStyle:function(){},l=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,_=-1!==((_gsScope.navigator||{}).userAgent||"").indexOf("Edge"),g={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},C="DrawSVGPlugin",m=String.fromCharCode(103,114,101,101,110,115,111,99,107,46,99,111,109),S=String.fromCharCode(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47),w=function(e){return !0}(window?window.location.host:"");function u(e,t,r,i,o,s){return r=(parseFloat(r||0)-parseFloat(e||0))*o,i=(parseFloat(i||0)-parseFloat(t||0))*s,Math.sqrt(r*r+i*i)}function c(e){return"string"!=typeof e&&e.nodeType||(e=_gsScope.TweenLite.selector(e)).length&&(e=e[0]),e}function y(e){if(!e)return 0;var t,r,i,o,s,n,a,h=(e=c(e)).tagName.toLowerCase(),f=1,d=1;"non-scaling-stroke"===e.getAttribute("vector-effect")&&(d=e.getScreenCTM(),f=Math.sqrt(d.a*d.a+d.b*d.b),d=Math.sqrt(d.d*d.d+d.c*d.c));try{r=e.getBBox()}catch(e){console.log("Error: Some browsers like Firefox won't report measurements of invisible elements (like display:none or masks inside defs).")}if(r&&(r.width||r.height)||!g[h]||(r={width:parseFloat(e.getAttribute(g[h][0])),height:parseFloat(e.getAttribute(g[h][1]))},"rect"!==h&&"line"!==h&&(r.width*=2,r.height*=2),"line"===h&&(r.x=parseFloat(e.getAttribute("x1")),r.y=parseFloat(e.getAttribute("y1")),r.width=Math.abs(r.width-r.x),r.height=Math.abs(r.height-r.y))),"path"===h)o=e.style.strokeDasharray,e.style.strokeDasharray="none",t=e.getTotalLength()||0,f!==d&&console.log("Warning: <path> length cannot be measured accurately when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),t*=(f+d)/2,e.style.strokeDasharray=o;else if("rect"===h)t=2*r.width*f+2*r.height*d;else if("line"===h)t=u(r.x,r.y,r.x+r.width,r.y+r.height,f,d);else if("polyline"===h||"polygon"===h)for(i=e.getAttribute("points").match(l)||[],"polygon"===h&&i.push(i[0],i[1]),t=0,s=2;s<i.length;s+=2)t+=u(i[s-2],i[s-1],i[s],i[s+1],f,d)||0;else"circle"!==h&&"ellipse"!==h||(n=r.width/2*f,a=r.height/2*d,t=Math.PI*(3*(n+a)-Math.sqrt((3*n+a)*(n+3*a))));return t||0}function x(e,t){if(!e)return[0,0];e=c(e),t=t||y(e)+1;var r=p(e),i=r.strokeDasharray||"",o=parseFloat(r.strokeDashoffset),s=i.indexOf(",");return s<0&&(s=i.indexOf(" ")),t<(i=s<0?t:parseFloat(i.substr(0,s))||1e-5)&&(i=t),[Math.max(0,-o),Math.max(0,i-o)]}(e=_gsScope._gsDefine.plugin({propName:"drawSVG",API:2,version:"0.2.0",global:!0,overwriteProps:["drawSVG"],init:function(e,t,r,i){if(!e.getBBox)return!1;if(!w)return window.location.href="http://"+m+S+"?plugin="+C+"&source=codepen",!1;var o,s,n,a,h,f,d,l,g,u,c=y(e)+1;return this._style=e.style,this._target=e,"function"==typeof t&&(t=t(i,e)),!0===t||"true"===t?t="0 100%":t?-1===(t+"").indexOf(" ")&&(t="0 "+t):t="0 0",o=x(e,c),h=t,f=c,d=o[0],-1===(u=h.indexOf(" "))?(l=void 0!==d?d+"":h,g=h):(l=h.substr(0,u),g=h.substr(u+1)),l=-1!==l.indexOf("%")?parseFloat(l)/100*f:parseFloat(l),s=(g=-1!==g.indexOf("%")?parseFloat(g)/100*f:parseFloat(g))<l?[g,l]:[l,g],this._length=c+10,0===o[0]&&0===s[0]?(n=Math.max(1e-5,s[1]-c),this._dash=c+n,this._offset=c-o[1]+n,this._offsetPT=this._addTween(this,"_offset",this._offset,c-s[1]+n,"drawSVG")):(this._dash=o[1]-o[0]||1e-6,this._offset=-o[0],this._dashPT=this._addTween(this,"_dash",this._dash,s[1]-s[0]||1e-5,"drawSVG"),this._offsetPT=this._addTween(this,"_offset",this._offset,-s[0],"drawSVG")),_&&(a=p(e)).strokeLinecap!==a.strokeLinejoin&&(s=parseFloat(a.strokeMiterlimit),this._addTween(e.style,"strokeMiterlimit",s,s+1e-4,"strokeMiterlimit")),this._live="non-scaling-stroke"===e.getAttribute("vector-effect")||-1!==(t+"").indexOf("live"),!0},set:function(e){if(this._firstPT){if(this._live){var t,r=y(this._target)+11;r!==this._length&&(t=r/this._length,this._length=r,this._offsetPT.s*=t,this._offsetPT.c*=t,this._dashPT?(this._dashPT.s*=t,this._dashPT.c*=t):this._dash*=t)}this._super.setRatio.call(this,e),this._style.strokeDashoffset=this._offset,this._style.strokeDasharray=1===e||0===e?this._offset<.001&&this._length-this._dash<=10?"none":this._offset===this._dash?"0px, 999999px":this._dash+"px,"+this._length+"px":this._dash+"px,"+this._length+"px"}}})).getLength=y,e.getPosition=x}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope).DrawSVGPlugin};"undefined"!=typeof module&&module.exports?(require("../TweenLite.js"),module.exports=t()):"function"==typeof define&&define.amd&&define(["TweenLite"],t)}();



/*!
 * VERSION: 0.9.1
 * DATE: 2019-02-21
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * MorphSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var A,c=Math.PI,H=c/180,S=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,R=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,a=/(^[#\.][a-z]|[a-y][a-z])/gi,O=/[achlmqstvz]/gi,w=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,C=Math.atan2,U=Math.cos,q=Math.sin,Q=Math.sqrt,E=2*c,u=.3*c,d=.7*c,p=_gsScope._gsDefine.globals.TweenLite,L="MorphSVGPlugin",G=String.fromCharCode(103,114,101,101,110,115,111,99,107,46,99,111,109),I=String.fromCharCode(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47),F=function(e){return !0}(window?window.location.host:""),Y=function(e){_gsScope.console&&console.log(e)},b=function(e,t,r,n,o,i,a,h,s){if(e!==h||t!==s){r=Math.abs(r),n=Math.abs(n);var l=o%360*H,f=U(l),g=q(l),p=(e-h)/2,c=(t-s)/2,u=f*p+g*c,d=-g*p+f*c,m=u*u,_=d*d,y=m/(r*r)+_/(n*n);1<y&&(r=Q(y)*r,n=Q(y)*n);var C=r*r,v=n*n,x=(C*v-C*_-v*m)/(C*_+v*m);x<0&&(x=0);var S=(i===a?-1:1)*Q(x),w=S*(r*d/n),b=S*(-n*u/r),M=(e+h)/2+(f*w-g*b),T=(t+s)/2+(g*w+f*b),N=(u-w)/r,P=(d-b)/n,z=(-u-w)/r,A=(-d-b)/n,R=N*N+P*P,O=(P<0?-1:1)*Math.acos(N/Q(R)),L=(N*A-P*z<0?-1:1)*Math.acos((N*z+P*A)/Q(R*(z*z+A*A)));!a&&0<L?L-=E:a&&L<0&&(L+=E),O%=E,L%=E;var G,I=Math.ceil(Math.abs(L)/(E/4)),F=[],Y=L/I,j=4/3*q(Y/2)/(1+U(Y/2)),B=f*r,V=g*r,X=g*-n,D=f*n;for(G=0;G<I;G++)u=U(o=O+G*Y),d=q(o),N=U(o+=Y),P=q(o),F.push(u-j*d,d+j*u,N+j*P,P-j*N,N,P);for(G=0;G<F.length;G+=2)u=F[G],d=F[G+1],F[G]=u*B+d*X+M,F[G+1]=u*V+d*D+T;return F[G-2]=h,F[G-1]=s,F}},j=function(e){var t,r,n,o,i,a,h,s,l,f,g,p,c,u=(e+"").replace(w,function(e){var t=+e;return t<1e-4&&-1e-4<t?0:t}).match(S)||[],d=[],m=0,_=0,y=u.length,C=0,v="ERROR: malformed path: "+e,x=function(e,t,r,n){f=(r-e)/3,g=(n-t)/3,h.push(e+f,t+g,r-f,n-g,r,n)};if(!e||!isNaN(u[0])||isNaN(u[1]))return Y(v),d;for(t=0;t<y;t++)if(c=i,isNaN(u[t])?a=(i=u[t].toUpperCase())!==u[t]:t--,n=+u[t+1],o=+u[t+2],a&&(n+=m,o+=_),t||(s=n,l=o),"M"===i)h&&(h.length<8?d.length-=1:C+=h.length),m=s=n,_=l=o,h=[n,o],d.push(h),t+=2,i="L";else if("C"===i)h||(h=[0,0]),a||(m=_=0),h.push(n,o,m+1*u[t+3],_+1*u[t+4],m+=1*u[t+5],_+=1*u[t+6]),t+=6;else if("S"===i)f=m,g=_,"C"!==c&&"S"!==c||(f+=m-h[h.length-4],g+=_-h[h.length-3]),a||(m=_=0),h.push(f,g,n,o,m+=1*u[t+3],_+=1*u[t+4]),t+=4;else if("Q"===i)f=m+2/3*(n-m),g=_+2/3*(o-_),a||(m=_=0),m+=1*u[t+3],_+=1*u[t+4],h.push(f,g,m+2/3*(n-m),_+2/3*(o-_),m,_),t+=4;else if("T"===i)f=m-h[h.length-4],g=_-h[h.length-3],h.push(m+f,_+g,n+2/3*(m+1.5*f-n),o+2/3*(_+1.5*g-o),m=n,_=o),t+=2;else if("H"===i)x(m,_,m=n,_),t+=1;else if("V"===i)x(m,_,m,_=n+(a?_-m:0)),t+=1;else if("L"===i||"Z"===i)"Z"===i&&(n=s,o=l,h.closed=!0),("L"===i||.5<Math.abs(m-n)||.5<Math.abs(_-o))&&(x(m,_,n,o),"L"===i&&(t+=2)),m=n,_=o;else if("A"===i){if(p=b(m,_,+u[t+1],+u[t+2],+u[t+3],+u[t+4],+u[t+5],(a?m:0)+1*u[t+6],(a?_:0)+1*u[t+7]))for(r=0;r<p.length;r++)h.push(p[r]);m=h[h.length-2],_=h[h.length-1],t+=7}else Y(v);return t=h.length,h[0]===h[t-2]&&h[1]===h[t-1]&&(h.closed=!0),d.totalPoints=C+t,d},M=function(e,t){var r,n,o,i,a,h,s,l,f,g,p,c,u,d,m=0,_=e.length,y=t/((_-2)/6);for(u=2;u<_;u+=6)for(m+=y;.999999<m;)r=e[u-2],n=e[u-1],o=e[u],i=e[u+1],a=e[u+2],h=e[u+3],s=e[u+4],l=e[u+5],f=r+(o-r)*(d=1/((Math.floor(m)||1)+1)),f+=((p=o+(a-o)*d)-f)*d,p+=(a+(s-a)*d-p)*d,g=n+(i-n)*d,g+=((c=i+(h-i)*d)-g)*d,c+=(h+(l-h)*d-c)*d,e.splice(u,4,r+(o-r)*d,n+(i-n)*d,f,g,f+(p-f)*d,g+(c-g)*d,p,c,a+(s-a)*d,h+(l-h)*d),u+=6,_+=6,m--;return e},B=function(e,t){var r,n,o,i="",a=e.length,h=Math.pow(10,t||2);for(n=0;n<e.length;n++){for(a=(o=e[n]).length,i+="M"+(o[0]*h|0)/h+" "+(o[1]*h|0)/h+" C",r=2;r<a;r++)i+=(o[r]*h|0)/h+" ";o.closed&&(i+="z")}return i},T=function(e){for(var t=[],r=e.length-1,n=0;-1<--r;)t[n++]=e[r],t[n++]=e[r+1],r--;for(r=0;r<n;r++)e[r]=t[r];e.reversed=!e.reversed},m=function(e){var t,r=e.length,n=0,o=0;for(t=0;t<r;t++)n+=e[t++],o+=e[t];return[n/(r/2),o/(r/2)]},N=function(e){var t,r,n,o=e.length,i=e[0],a=i,h=e[1],s=h;for(n=6;n<o;n+=6)i<(t=e[n])?i=t:t<a&&(a=t),h<(r=e[n+1])?h=r:r<s&&(s=r);return e.centerX=(i+a)/2,e.centerY=(h+s)/2,e.size=(i-a)*(h-s)},V=function(e,t){t=t||3;for(var r,n,o,i,a,h,s,l,f,g,p,c,u,d,m,_,y=e.length,C=e[0][0],v=C,x=e[0][1],S=x,w=1/t;-1<--y;)for(r=(a=e[y]).length,i=6;i<r;i+=6)for(f=a[i],g=a[i+1],p=a[i+2]-f,d=a[i+3]-g,c=a[i+4]-f,m=a[i+5]-g,u=a[i+6]-f,_=a[i+7]-g,h=t;-1<--h;)C<(n=((s=w*h)*s*u+3*(l=1-s)*(s*c+l*p))*s+f)?C=n:n<v&&(v=n),x<(o=(s*s*_+3*l*(s*m+l*d))*s+g)?x=o:o<S&&(S=o);return e.centerX=(C+v)/2,e.centerY=(x+S)/2,e.left=v,e.width=C-v,e.top=S,e.height=x-S,e.size=(C-v)*(x-S)},P=function(e,t){return t.length-e.length},z=function(e,t){var r=e.size||N(e),n=t.size||N(t);return Math.abs(n-r)<(r+n)/20?t.centerX-e.centerX||t.centerY-e.centerY:n-r},X=function(e,t){var r,n,o=e.slice(0),i=e.length,a=i-2;for(t|=0,r=0;r<i;r++)n=(r+t)%a,e[r++]=o[n],e[r]=o[n+1]},_=function(e,t,r,n,o){var i,a,h,s,l=e.length,f=0,g=l-2;for(r*=6,a=0;a<l;a+=6)s=e[i=(a+r)%g]-(t[a]-n),h=e[i+1]-(t[a+1]-o),f+=Q(h*h+s*s);return f},D=function(e,t,r){var n,o,i,a=e.length,h=m(e),s=m(t),l=s[0]-h[0],f=s[1]-h[1],g=_(e,t,0,l,f),p=0;for(i=6;i<a;i+=6)(o=_(e,t,i/6,l,f))<g&&(g=o,p=i);if(r)for(n=e.slice(0),T(n),i=6;i<a;i+=6)(o=_(n,t,i/6,l,f))<g&&(g=o,p=-i);return p/6},W=function(e,t,r){for(var n,o,i,a,h,s,l=e.length,f=99999999999,g=0,p=0;-1<--l;)for(s=(n=e[l]).length,h=0;h<s;h+=6)o=n[h]-t,i=n[h+1]-r,(a=Q(o*o+i*i))<f&&(f=a,g=n[h],p=n[h+1]);return[g,p]},Z=function(e,t,r,n,o,i){var a,h,s,l,f=t.length,g=0,p=Math.min(e.size||N(e),t[r].size||N(t[r]))*n,c=999999999999,u=e.centerX+o,d=e.centerY+i;for(a=r;a<f&&!((t[a].size||N(t[a]))<p);a++)h=t[a].centerX-u,s=t[a].centerY-d,(l=Q(h*h+s*s))<c&&(g=a,c=l);return l=t[g],t.splice(g,1),l},k=function(e,t,r,n,o){var i,a,h,s,l,f,g,p=t.length-e.length,c=0<p?t:e,u=0<p?e:t,d=0,m="complexity"===n?P:z,_="position"===n?0:"number"==typeof n?n:.8,y=u.length,C="object"==typeof r&&r.push?r.slice(0):[r],v="reverse"===C[0]||C[0]<0,x="log"===r;if(u[0]){if(1<c.length&&(e.sort(m),t.sort(m),c.size||V(c),u.size||V(u),f=c.centerX-u.centerX,g=c.centerY-u.centerY,m===z))for(y=0;y<u.length;y++)c.splice(y,0,Z(u[y],c,y,_,f,g));if(p)for(p<0&&(p=-p),c[0].length>u[0].length&&M(u[0],(c[0].length-u[0].length)/6|0),y=u.length;d<p;)c[y].size||N(c[y]),s=(h=W(u,c[y].centerX,c[y].centerY))[0],l=h[1],u[y++]=[s,l,s,l,s,l,s,l],u.totalPoints+=8,d++;for(y=0;y<e.length;y++)i=t[y],a=e[y],(p=i.length-a.length)<0?M(i,-p/6|0):0<p&&M(a,p/6|0),v&&!1!==o&&!a.reversed&&T(a),(r=C[y]||0===C[y]?C[y]:"auto")&&(a.closed||Math.abs(a[0]-a[a.length-2])<.5&&Math.abs(a[1]-a[a.length-1])<.5?"auto"===r||"log"===r?(C[y]=r=D(a,i,!y||!1===o),r<0&&(v=!0,T(a),r=-r),X(a,6*r)):"reverse"!==r&&(y&&r<0&&T(a),X(a,6*(r<0?-r:r))):!v&&("auto"===r&&Math.abs(i[0]-a[0])+Math.abs(i[1]-a[1])+Math.abs(i[i.length-2]-a[a.length-2])+Math.abs(i[i.length-1]-a[a.length-1])>Math.abs(i[0]-a[a.length-2])+Math.abs(i[1]-a[a.length-1])+Math.abs(i[i.length-2]-a[0])+Math.abs(i[i.length-1]-a[1])||r%2)?(T(a),C[y]=-1,v=!0):"auto"===r?C[y]=0:"reverse"===r&&(C[y]=-1),a.closed!==i.closed&&(a.closed=i.closed=!1));return x&&Y("shapeIndex:["+C.join(",")+"]"),e.shapeIndex=C}},o=function(e,t){var r,n,o,i,a,h,s,l=0,f=parseFloat(e[0]),g=parseFloat(e[1]),p=f+","+g+" ";for(r=.5*t/(.5*(o=e.length)-1),n=0;n<o-2;n+=2){if(l+=r,h=parseFloat(e[n+2]),s=parseFloat(e[n+3]),.999999<l)for(a=1/(Math.floor(l)+1),i=1;.999999<l;)p+=(f+(h-f)*a*i).toFixed(2)+","+(g+(s-g)*a*i).toFixed(2)+" ",l--,i++;p+=h+","+s+" ",f=h,g=s}return p},r=function(e){var t=e[0].match(R)||[],r=e[1].match(R)||[],n=r.length-t.length;0<n?e[0]=o(t,n):e[1]=o(r,-n)},J=function(t){return isNaN(t)?r:function(e){r(e),e[1]=function(e,t){if(!t)return e;var r,n,o,i=e.match(R)||[],a=i.length,h="";for(r="reverse"===t?(n=a-1,-2):(n=(2*(parseInt(t,10)||0)+1+100*a)%a,2),o=0;o<a;o+=2)h+=i[n-1]+","+i[n]+" ",n=(n+r)%a;return h}(e[1],parseInt(t,10))}},K={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},h=function(e,t){var r,n,o,i,a,h,s,l,f,g,p,c,u,d,m,_,y,C,v,x,S,w,b=e.tagName.toLowerCase(),M=.552284749831;return"path"!==b&&e.getBBox?(h=function(e,t){var r,n=_gsScope.document.createElementNS("http://www.w3.org/2000/svg","path"),o=Array.prototype.slice.call(e.attributes),i=o.length;for(t=","+t+",";-1<--i;)r=o[i].nodeName.toLowerCase(),-1===t.indexOf(","+r+",")&&n.setAttributeNS(null,r,o[i].nodeValue);return n}(e,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),w=function(e,t){for(var r=t?t.split(","):[],n={},o=r.length;-1<--o;)n[r[o]]=+e.getAttribute(r[o])||0;return n}(e,K[b]),"rect"===b?(i=w.rx,a=w.ry,n=w.x,o=w.y,g=w.width-2*i,p=w.height-2*a,r=i||a?"M"+(_=(d=(u=n+i)+g)+i)+","+(C=o+a)+" V"+(v=C+p)+" C"+[_,x=v+a*M,m=d+i*M,S=v+a,d,S,d-(d-u)/3,S,u+(d-u)/3,S,u,S,c=n+i*(1-M),S,n,x,n,v,n,v-(v-C)/3,n,C+(v-C)/3,n,C,n,y=o+a*(1-M),c,o,u,o,u+(d-u)/3,o,d-(d-u)/3,o,d,o,m,o,_,y,_,C].join(",")+"z":"M"+(n+g)+","+o+" v"+p+" h"+-g+" v"+-p+" h"+g+"z"):"circle"===b||"ellipse"===b?(l="circle"===b?(i=a=w.r)*M:(i=w.rx,(a=w.ry)*M),r="M"+((n=w.cx)+i)+","+(o=w.cy)+" C"+[n+i,o+l,n+(s=i*M),o+a,n,o+a,n-s,o+a,n-i,o+l,n-i,o,n-i,o-l,n-s,o-a,n,o-a,n+s,o-a,n+i,o-l,n+i,o].join(",")+"z"):"line"===b?r="M"+w.x1+","+w.y1+" L"+w.x2+","+w.y2:"polyline"!==b&&"polygon"!==b||(r="M"+(n=(f=(e.getAttribute("points")+"").match(R)||[]).shift())+","+(o=f.shift())+" L"+f.join(","),"polygon"===b&&(r+=","+n+","+o+"z")),h.setAttribute("d",B(h._gsRawPath=j(r))),t&&e.parentNode&&(e.parentNode.insertBefore(h,e),e.parentNode.removeChild(e)),h):e},$=function(e,t,r){var n,o,i="string"==typeof e;return(!i||a.test(e)||(e.match(R)||[]).length<3)&&((n=i?p.selector(e):e&&e[0]?e:[e])&&n[0]?(o=((n=n[0]).nodeName+"").toUpperCase(),t&&"PATH"!==o&&(n=h(n,!1),o="PATH"),e=n.getAttribute("PATH"===o?"d":"points")||"",n===r&&(e=n.getAttributeNS(null,"data-original")||e)):(Y("WARNING: invalid morph to: "+e),e=!1)),e},ee=function(e,t){for(var r,n,o,i,a,h,s,l,f,g,p,c,u=e.length,d=.2*(t||1);-1<--u;){for(p=(n=e[u]).isSmooth=n.isSmooth||[0,0,0,0],c=n.smoothData=n.smoothData||[0,0,0,0],p.length=4,l=n.length-2,s=6;s<l;s+=6)o=n[s]-n[s-2],i=n[s+1]-n[s-1],a=n[s+2]-n[s],h=n[s+3]-n[s+1],f=C(i,o),g=C(h,a),(r=Math.abs(f-g)<d)&&(c[s-2]=f,c[s+2]=g,c[s-1]=Q(o*o+i*i),c[s+3]=Q(a*a+h*h)),p.push(r,r,0,0,r,r);n[l]===n[0]&&n[l+1]===n[1]&&(o=n[0]-n[l-2],i=n[1]-n[l-1],a=n[2]-n[0],h=n[3]-n[1],f=C(i,o),g=C(h,a),Math.abs(f-g)<d&&(c[l-2]=f,c[2]=g,c[l-1]=Q(o*o+i*i),c[3]=Q(a*a+h*h),p[l-2]=p[l-1]=!0))}return e},te=function(e){var t=e.trim().split(" ");return{x:(0<=e.indexOf("left")?0:0<=e.indexOf("right")?100:isNaN(parseFloat(t[0]))?50:parseFloat(t[0]))/100,y:(0<=e.indexOf("top")?0:0<=e.indexOf("bottom")?100:isNaN(parseFloat(t[1]))?50:parseFloat(t[1]))/100}},re="Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing.",ne=_gsScope._gsDefine.plugin({propName:"morphSVG",API:2,global:!0,version:"0.9.1",overwriteProps:["morphSVG"],init:function(e,t,r,n){var o,i,a,h,s,l,f,g,p,c,u,d,m,_,y,C,v,x,S,w,b,M,T=e.nodeType?window.getComputedStyle(e):{},N=T.fill+"",P=!("none"===N||"0"===(N.match(R)||[])[3]||"evenodd"===T.fillRule),z=(t.origin||"50 50").split(",");if("function"==typeof t&&(t=t(n,e)),!F)return window.location.href="http://"+G+I+"?plugin="+L+"&source=codepen",!1;if(s="POLYLINE"===(o=(e.nodeName+"").toUpperCase())||"POLYGON"===o,"PATH"!==o&&!s&&!t.prop)return Y("WARNING: cannot morph a <"+o+"> element. "+re),!1;if(i="PATH"===o?"d":"points",("string"==typeof t||t.getBBox||t[0])&&(t={shape:t}),!t.prop&&"function"!=typeof e.setAttribute)return!1;if(h=$(t.shape||t.d||t.points||"","d"===i,e),s&&O.test(h))return Y("WARNING: a <"+o+"> cannot accept path data. "+re),!1;if(l=t.shapeIndex||0===t.shapeIndex?t.shapeIndex:"auto",f=t.map||ne.defaultMap,this._prop=t.prop,this._render=t.render||ne.defaultRender,this._apply="updateTarget"in t?t.updateTarget:ne.defaultUpdateTarget,this._rnd=Math.pow(10,isNaN(t.precision)?2:+t.precision),this._tween=r,h){if(this._target=e,v="object"==typeof t.precompile,c=this._prop?e[this._prop]:e.getAttribute(i),this._prop||e.getAttributeNS(null,"data-original")||e.setAttributeNS(null,"data-original",c),"d"===i||this._prop){if(c=j(v?t.precompile[0]:c),u=j(v?t.precompile[1]:h),!v&&!k(c,u,l,f,P))return!1;for("log"!==t.precompile&&!0!==t.precompile||Y('precompile:["'+B(c)+'","'+B(u)+'"]'),(b="linear"!==(t.type||ne.defaultType))&&(c=ee(c,t.smoothTolerance),u=ee(u,t.smoothTolerance),c.size||V(c),u.size||V(u),w=te(z[0]),this._origin=c.origin={x:c.left+w.x*c.width,y:c.top+w.y*c.height},z[1]&&(w=te(z[1])),this._eOrigin={x:u.left+w.x*u.width,y:u.top+w.y*u.height}),this._rawPath=e._gsRawPath=c,m=c.length;-1<--m;)for(y=c[m],C=u[m],g=y.isSmooth||[],p=C.isSmooth||[],_=y.length,d=A=0;d<_;d+=2)C[d]===y[d]&&C[d+1]===y[d+1]||(b?g[d]&&p[d]?(x=y.smoothData,S=C.smoothData,M=d+(d===_-4?7-_:5),this._controlPT={_next:this._controlPT,i:d,j:m,l1s:x[d+1],l1c:S[d+1]-x[d+1],l2s:x[M],l2c:S[M]-x[M]},a=this._tweenRotation(y,C,d+2),this._tweenRotation(y,C,d,a),this._tweenRotation(y,C,M-1,a),d+=4):this._tweenRotation(y,C,d):(this._addTween(y,d,y[d],C[d]),a=this._addTween(y,d+1,y[d+1],C[d+1])))}else a=this._addTween(e,"setAttribute",e.getAttribute(i)+"",h+"","morphSVG",!1,i,J(l));b&&(this._addTween(this._origin,"x",this._origin.x,this._eOrigin.x),a=this._addTween(this._origin,"y",this._origin.y,this._eOrigin.y)),a&&(this._overwriteProps.push("morphSVG"),a.end=h,a.endProp=i)}return!0},set:function(e){var t,r,n,o,i,a,h,s,l,f,g,p,c,u=this._rawPath,d=this._controlPT,m=this._anchorPT,_=this._rnd,y=this._target;if(this._super.setRatio.call(this,e),1===e&&this._apply)for(n=this._firstPT;n;)n.end&&(this._prop?y[this._prop]=n.end:y.setAttribute(n.endProp,n.end)),n=n._next;else if(u){for(;m;)a=m.sa+e*m.ca,i=m.sl+e*m.cl,m.t[m.i]=this._origin.x+U(a)*i,m.t[m.i+1]=this._origin.y+q(a)*i,m=m._next;for(r=e<.5?2*e*e:(4-2*e)*e-1;d;)c=(h=d.i)+(h===(o=u[d.j]).length-4?7-o.length:5),a=C(o[c]-o[h+1],o[c-1]-o[h]),g=q(a),p=U(a),l=o[h+2],f=o[h+3],i=d.l1s+r*d.l1c,o[h]=l-p*i,o[h+1]=f-g*i,i=d.l2s+r*d.l2c,o[c-1]=l+p*i,o[c]=f+g*i,d=d._next;if(y._gsRawPath=u,this._apply){for(t=""," ",s=0;s<u.length;s++)for(i=(o=u[s]).length,t+="M"+(o[0]*_|0)/_+" "+(o[1]*_|0)/_+" C",h=2;h<i;h++)t+=(o[h]*_|0)/_+" ";this._prop?y[this._prop]=t:y.setAttribute("d",t)}}this._render&&u&&this._render.call(this._tween,u,y)}});ne.prototype._tweenRotation=function(e,t,r,n){var o,i,a,h=this._origin,s=this._eOrigin,l=e[r]-h.x,f=e[r+1]-h.y,g=Q(l*l+f*f),p=C(f,l);return l=t[r]-s.x,f=t[r+1]-s.y,o=C(f,l)-p,i=(a=o)!==a%c?a+(a<0?E:-E):a,!n&&A&&Math.abs(i+A.ca)<u&&(n=A),this._anchorPT=A={_next:this._anchorPT,t:e,sa:p,ca:n&&i*n.ca<0&&Math.abs(i)>d?o:i,sl:g,cl:Q(l*l+f*f)-g,i:r}},ne.pathFilter=function(e,t,r,n,o){var i=j(e[0]),a=j(e[1]);k(i,a,t||0===t?t:"auto",r,o)&&(e[0]=B(i),e[1]=B(a),"log"!==n&&!0!==n||Y('precompile:["'+e[0]+'","'+e[1]+'"]'))},ne.pointsFilter=r,ne.getTotalSize=V,ne.subdivideRawBezier=ne.subdivideSegment=M,ne.rawPathToString=B,ne.defaultType="linear",ne.defaultUpdateTarget=!0,ne.defaultMap="size",ne.stringToRawPath=ne.pathDataToRawBezier=function(e){return j($(e,!0))},ne.equalizeSegmentQuantity=k,ne.convertToPath=function(e,t){"string"==typeof e&&(e=p.selector(e));for(var r=e&&0!==e.length?e.length&&e[0]&&e[0].nodeType?Array.prototype.slice.call(e,0):[e]:[],n=r.length;-1<--n;)r[n]=h(r[n],!1!==t);return r},ne.pathDataToBezier=function(e,t){var r,n,o,i,a,h,s,l,f=j($(e,!0))[0]||[],g=0;if(l=(t=t||{}).align||t.relative,i=t.matrix||[1,0,0,1,0,0],a=t.offsetX||0,h=t.offsetY||0,"relative"===l||!0===l?(a-=f[0]*i[0]+f[1]*i[2],h-=f[0]*i[1]+f[1]*i[3],g="+="):(a+=i[4],h+=i[5],l&&(l="string"==typeof l?p.selector(l):l&&l[0]?l:[l])&&l[0]&&(a-=(s=l[0].getBBox()||{x:0,y:0}).x,h-=s.y)),r=[],o=f.length,i&&"1,0,0,1,0,0"!==i.join(","))for(n=0;n<o;n+=2)r.push({x:g+(f[n]*i[0]+f[n+1]*i[2]+a),y:g+(f[n]*i[1]+f[n+1]*i[3]+h)});else for(n=0;n<o;n+=2)r.push({x:g+(f[n]+a),y:g+(f[n+1]+h)});return r}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){"use strict";var t=function(){return(_gsScope.GreenSockGlobals||_gsScope).MorphSVGPlugin};"undefined"!=typeof module&&module.exports?(require("../TweenLite.js"),module.exports=t()):"function"==typeof define&&define.amd&&define(["TweenLite"],t)}();



/*!
 * VERSION: 0.2.2
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.CustomEase",["easing.Ease"],function(a){var b=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,c=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,d=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,e=/[cLlsS]/g,f="CustomEase only accepts Cubic Bezier data.",g=function(a,b,c,d,e,f,h,i,j,k,l){var m,n=(a+c)/2,o=(b+d)/2,p=(c+e)/2,q=(d+f)/2,r=(e+h)/2,s=(f+i)/2,t=(n+p)/2,u=(o+q)/2,v=(p+r)/2,w=(q+s)/2,x=(t+v)/2,y=(u+w)/2,z=h-a,A=i-b,B=Math.abs((c-h)*A-(d-i)*z),C=Math.abs((e-h)*A-(f-i)*z);return k||(k=[{x:a,y:b},{x:h,y:i}],l=1),k.splice(l||k.length-1,0,{x:x,y:y}),(B+C)*(B+C)>j*(z*z+A*A)&&(m=k.length,g(a,b,n,o,t,u,x,y,j,k,l),g(x,y,v,w,r,s,h,i,j,k,l+1+(k.length-m))),k},h=function(a){var b,e,g,h,i,j,k,l,m,n,o,p=(a+"").replace(d,function(a){var b=+a;return 1e-4>b&&b>-1e-4?0:b}).match(c)||[],q=[],r=0,s=0,t=p.length,u=2;for(b=0;t>b;b++)if(m=h,isNaN(p[b])?(h=p[b].toUpperCase(),i=h!==p[b]):b--,e=+p[b+1],g=+p[b+2],i&&(e+=r,g+=s),b||(k=e,l=g),"M"===h)j&&j.length<8&&(q.length-=1,u=0),r=k=e,s=l=g,j=[e,g],u=2,q.push(j),b+=2,h="L";else if("C"===h)j||(j=[0,0]),j[u++]=e,j[u++]=g,i||(r=s=0),j[u++]=r+1*p[b+3],j[u++]=s+1*p[b+4],j[u++]=r+=1*p[b+5],j[u++]=s+=1*p[b+6],b+=6;else if("S"===h)"C"===m||"S"===m?(n=r-j[u-4],o=s-j[u-3],j[u++]=r+n,j[u++]=s+o):(j[u++]=r,j[u++]=s),j[u++]=e,j[u++]=g,i||(r=s=0),j[u++]=r+=1*p[b+3],j[u++]=s+=1*p[b+4],b+=4;else{if("L"!==h&&"Z"!==h)throw f;"Z"===h&&(e=k,g=l,j.closed=!0),("L"===h||Math.abs(r-e)>.5||Math.abs(s-g)>.5)&&(j[u++]=r+(e-r)/3,j[u++]=s+(g-s)/3,j[u++]=r+2*(e-r)/3,j[u++]=s+2*(g-s)/3,j[u++]=e,j[u++]=g,"L"===h&&(b+=2)),r=e,s=g}return q[0]},i=function(a){var b,c=a.length,d=999999999999;for(b=1;c>b;b+=6)+a[b]<d&&(d=+a[b]);return d},j=function(a,b,c){c||0===c||(c=Math.max(+a[a.length-1],+a[1]));var d,e=-1*+a[0],f=-c,g=a.length,h=1/(+a[g-2]+e),j=-b||(Math.abs(+a[g-1]-+a[1])<.01*(+a[g-2]-+a[0])?i(a)+f:+a[g-1]+f);for(j=j?1/j:-h,d=0;g>d;d+=2)a[d]=(+a[d]+e)*h,a[d+1]=(+a[d+1]+f)*j},k=function(a){var b=this.lookup[a*this.l|0]||this.lookup[this.l-1];return b.nx<a&&(b=b.n),b.y+(a-b.x)/b.cx*b.cy},l=function(b,c,d){this._calcEnd=!0,this.id=b,b&&(a.map[b]=this),this.getRatio=k,this.setData(c,d)},m=l.prototype=new a;return m.constructor=l,m.setData=function(a,c){a=a||"0,0,1,1";var d,i,k,l,m,n,o,p,q,r,s=a.match(b),t=1,u=[];if(c=c||{},r=c.precision||1,this.data=a,this.lookup=[],this.points=u,this.fast=1>=r,(e.test(a)||-1!==a.indexOf("M")&&-1===a.indexOf("C"))&&(s=h(a)),d=s.length,4===d)s.unshift(0,0),s.push(1,1),d=8;else if((d-2)%6)throw f;for((0!==+s[0]||1!==+s[d-2])&&j(s,c.height,c.originY),this.rawBezier=s,l=2;d>l;l+=6)i={x:+s[l-2],y:+s[l-1]},k={x:+s[l+4],y:+s[l+5]},u.push(i,k),g(i.x,i.y,+s[l],+s[l+1],+s[l+2],+s[l+3],k.x,k.y,1/(2e5*r),u,u.length-1);for(d=u.length,l=0;d>l;l++)o=u[l],p=u[l-1]||o,o.x>p.x||p.y!==o.y&&p.x===o.x||o===p?(p.cx=o.x-p.x,p.cy=o.y-p.y,p.n=o,p.nx=o.x,this.fast&&l>1&&Math.abs(p.cy/p.cx-u[l-2].cy/u[l-2].cx)>2&&(this.fast=!1),p.cx<t&&(p.cx?t=p.cx:(p.cx=.001,l===d-1&&(p.x-=.001,t=Math.min(t,.001),this.fast=!1)))):(u.splice(l--,1),d--);if(d=1/t+1|0,this.l=d,m=1/d,n=0,o=u[0],this.fast){for(l=0;d>l;l++)q=l*m,o.nx<q&&(o=u[++n]),i=o.y+(q-o.x)/o.cx*o.cy,this.lookup[l]={x:q,cx:m,y:i,cy:0,nx:9},l&&(this.lookup[l-1].cy=i-this.lookup[l-1].y);this.lookup[d-1].cy=u[u.length-1].y-i}else{for(l=0;d>l;l++)o.nx<l*m&&(o=u[++n]),this.lookup[l]=o;n<u.length-1&&(this.lookup[l-1]=u[u.length-2])}return this._calcEnd=1!==u[u.length-1].y||0!==u[0].y,this},m.getRatio=k,m.getSVGData=function(a){return l.getSVGData(this,a)},l.create=function(a,b,c){return new l(a,b,c)},l.version="0.2.2",l.bezierToPoints=g,l.get=function(b){return a.map[b]},l.getSVGData=function(b,c){c=c||{};var d,e,f,g,h,i,j,k,l,m,n=1e3,o=c.width||100,p=c.height||100,q=c.x||0,r=(c.y||0)+p,s=c.path;if(c.invert&&(p=-p,r=0),b=b.getRatio?b:a.map[b]||console.log("No ease found: ",b),b.rawBezier){for(d=[],j=b.rawBezier.length,f=0;j>f;f+=2)d.push(((q+b.rawBezier[f]*o)*n|0)/n+","+((r+b.rawBezier[f+1]*-p)*n|0)/n);d[0]="M"+d[0],d[1]="C"+d[1]}else for(d=["M"+q+","+r],j=Math.max(5,200*(c.precision||1)),g=1/j,j+=2,k=5/j,l=((q+g*o)*n|0)/n,m=((r+b.getRatio(g)*-p)*n|0)/n,e=(m-r)/(l-q),f=2;j>f;f++)h=((q+f*g*o)*n|0)/n,i=((r+b.getRatio(f*g)*-p)*n|0)/n,(Math.abs((i-m)/(h-l)-e)>k||f===j-1)&&(d.push(l+","+m),e=(i-m)/(h-l)),l=h,m=i;return s&&("string"==typeof s?document.querySelector(s):s).setAttribute("d",d.join(" ")),d.join(" ")},l},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite"],b)}("CustomEase");



/*!
 * VERSION: 0.2.0
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * CustomBounce is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.CustomBounce",["easing.CustomEase"],function(e){var o,r=function(e){var o,r=e.length,n=1/e[r-2],t=1e3;for(o=2;r>o;o+=2)e[o]=(e[o]*n*t|0)/t;e[r-2]=1},n="codepen",t="CustomBounce",i=String.fromCharCode(103,114,101,101,110,115,111,99,107,46,99,111,109),s=String.fromCharCode(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47),u=function(e){return 1}(window?window.location.host:""),a=function(o,r){return this.vars=r=r||{},u?(r.squash&&(this.squash=new e(r.squashID||o+"-squash")),e.call(this,o),this.bounce=this,void this.update(r)):(window.location.href="http://"+i+s+"?plugin="+t+"&source="+n,!1)};return a.prototype=o=new e,o.constructor=a,o.update=function(o){o=o||this.vars;var n,t,i,s,u,a,h,f=.999,d=Math.min(f,o.strength||.7),C=d,g=(o.squash||0)/100,c=g,m=1/.03,S=.2,p=1,l=.1,w=[0,0,.07,0,.1,1,.1,1],_=[0,0,0,0,.1,0,.1,0];for(u=0;200>u&&(S*=C*((C+1)/2),p*=d*d,a=l+S,i=l+.49*S,s=1-p,n=l+p/m,t=i+.8*(i-n),g&&(l+=g,n+=g,i+=g,t+=g,a+=g,h=g/c,_.push(l-g,0,l-g,h,l-g/2,h,l,h,l,0,l,0,l,h*-.6,l+(a-l)/6,0,a,0),w.push(l-g,1,l,1,l,1),g*=d*d),w.push(l,1,n,s,i,s,t,s,a,1,a,1),d*=.95,m=p/(a-t),l=a,s<=f);u++);if(o.endAtStart){if(i=-.1,w.unshift(i,1,i,1,-.07,0),c)for(g=2.5*c,i-=g,w.unshift(i,1,i,1,i,1),_.splice(0,6),_.unshift(i,0,i,0,i,1,i+g/2,1,i+g,1,i+g,0,i+g,0,i+g,-.6,i+g+.033,0),u=0;u<_.length;u+=2)_[u]-=i;for(u=0;u<w.length;u+=2)w[u]-=i,w[u+1]=1-w[u+1]}return g&&(r(_),_[2]="C"+_[2],this.squash||(this.squash=new e(o.squashID||this.id+"-squash")),this.squash.setData("M"+_.join(","))),r(w),w[2]="C"+w[2],this.setData("M"+w.join(","))},a.create=function(e,o){return new a(e,o)},a.version="0.2.0",a},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){"use strict";var o=function(){return(_gsScope.GreenSockGlobals||_gsScope)[e]};"function"==typeof define&&define.amd?define(["TweenLite","CustomEase"],o):"undefined"!=typeof module&&module.exports&&(require("./CustomEase.js"),require("../TweenLite.js"),module.exports=o())}("CustomBounce");



/*!
 * VERSION: 0.2.0
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * CustomWiggle is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.CustomWiggle",["easing.CustomEase","easing.Ease"],function(e,o){var t,r={easeOut:new e("","M0,1,C0.7,1,0.6,0,1,0"),easeInOut:new e("","M0,0,C0.104,0,0.242,1,0.444,1,0.644,1,0.608,0,1,0"),anticipate:new e("","M0,0,C0,0.222,0.024,0.386,0.06,0.402,0.181,0.455,0.647,0.646,0.7,0.67,0.9,0.76,1,0.846,1,1"),uniform:new e("","M0,0,C0,0.95,0.01,1,0.01,1,0.01,1,1,1,1,1,1,1,1,0.01,1,0")},n=new e,i=function(t,r){return t=t.getRatio?t:o.map[t]||new e("",t),t.rawBezier||!r?t:{getRatio:function(e){return 1-t.getRatio(e)}}},s="codepen",a="CustomWiggle",h=String.fromCharCode(103,114,101,101,110,115,111,99,107,46,99,111,109),u=String.fromCharCode(47,114,101,113,117,105,114,101,115,45,109,101,109,98,101,114,115,104,105,112,47),f=function(e){return 1}(window?window.location.host:""),g=function(o,t){return this.vars=t||{},f?(e.call(this,o),void this.update(this.vars)):(window.location.href="http://"+h+u+"?plugin="+a+"&source="+s,!1)};return g.prototype=t=new e,t.constructor=g,t.update=function(e){e=e||this.vars;var o,t,s,a,h,u,f,g,d,C=0|(e.wiggles||10),c=1/C,l=c/2,m="anticipate"===e.type,p=r[e.type]||r.easeOut,S=n,w=1e3;if(m&&(S=p,p=r.easeOut),e.timingEase&&(S=i(e.timingEase)),e.amplitudeEase&&(p=i(e.amplitudeEase,!0)),u=S.getRatio(l),f=m?-p.getRatio(l):p.getRatio(l),g=[0,0,u/4,0,u/2,f,u,f],"random"===e.type){for(g.length=4,o=S.getRatio(c),t=2*Math.random()-1,d=2;C>d;d++)l=o,f=t,o=S.getRatio(c*d),t=2*Math.random()-1,s=Math.atan2(t-g[g.length-3],o-g[g.length-4]),a=Math.cos(s)*c,h=Math.sin(s)*c,g.push(l-a,f-h,l,f,l+a,f+h);g.push(o,0,1,0)}else{for(d=1;C>d;d++)g.push(S.getRatio(l+c/2),f),l+=c,f=(f>0?-1:1)*p.getRatio(d*c),u=S.getRatio(l),g.push(S.getRatio(l-c/2),f,u,f);g.push(S.getRatio(l+c/4),f,S.getRatio(l+c/4),0,1,0)}for(d=g.length;--d>-1;)g[d]=(g[d]*w|0)/w;g[2]="C"+g[2],this.setData("M"+g.join(","))},g.create=function(e,o){return new g(e,o)},g.version="0.2.0",g.eases=r,g},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(e){"use strict";var o=function(){return(_gsScope.GreenSockGlobals||_gsScope)[e]};"function"==typeof define&&define.amd?define(["TweenLite","CustomEase"],o):"undefined"!=typeof module&&module.exports&&(require("./CustomEase.js"),require("../TweenLite.js"),module.exports=o())}("CustomWiggle");
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

(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.iosInnerHeight = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

/**
 * @module ios-inner-height
 *
 * @description Get proper window.innerHeight from iOS devices,
 * excluding URL control and menu bar.
 *
 * @return {function} Callable function to retrieve the
 * cached `window.innerHeight` measurement, specific to the
 * device's current orientation.
 */
module.exports = (function () {
	// Avoid errors when globals are undefined (CI, etc)
	// https://github.com/tylerjpeterson/ios-inner-height/pull/7
	if (typeof window === 'undefined' || typeof navigator === 'undefined') {
		return function () {
			return 0;
		};
	}

	// Non-iOS browsers return window.innerHeight per usual.
	// No caching here since browsers can be resized, and setting
	// up resize-triggered cache invalidation is not in scope.
	/* istanbul ignore if  */
	if (!navigator.userAgent.match(/iphone|ipod|ipad/i)) {
		/**
		 * Avoids conditional logic in the implementation
		 * @return {number} - window's innerHeight measurement in pixels
		 */
		return function () {
			return window.innerHeight;
		};
	}

	// Store initial orientation
	var axis = Math.abs(window.orientation);
	// And hoist cached dimensions
	var dims = {w: 0, h: 0};

	/**
	 * Creates an element with a height of 100vh since iOS accurately
	 * reports vp height (but not window.innerHeight). Then destroy it.
	 */
	var createRuler = function () {
		var ruler = document.createElement('div');

		ruler.style.position = 'fixed';
		ruler.style.height = '100vh';
		ruler.style.width = 0;
		ruler.style.top = 0;

		document.documentElement.appendChild(ruler);

		// Set cache conscientious of device orientation
		dims.w = axis === 90 ? ruler.offsetHeight : window.innerWidth;
		dims.h = axis === 90 ? window.innerWidth : ruler.offsetHeight;

		// Clean up after ourselves
		document.documentElement.removeChild(ruler);
		ruler = null;
	};

	// Measure once
	createRuler();

	/**
	 * Returns window's cached innerHeight measurement
	 * based on viewport height and device orientation
	 * @return {number} - window's innerHeight measurement in pixels
	 */
	return function () {
		if (Math.abs(window.orientation) !== 90) {
			return dims.h;
		}

		return dims.w;
	};
})();

},{}]},{},[1])(1)
});

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
            return Math.abs(window.orientation)===0;
        }else{
            return (window.innerHeight / window.innerWidth) > 1;
        }
    };

    device.landscape = function () {
        if (typeof window.orientation != 'undefined') {
            return Math.abs(window.orientation)===90;
        }else{
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
            window.SLeasy && SLeasy.onResize && SLeasy.onResize('横屏');
        } else {
            removeClass("landscape");
            addClass("portrait");
            window.SLeasy && SLeasy.onResize && SLeasy.onResize('竖屏');
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
        viewport: 321,//视口大小
        motionTime: 0.8,//切换动画时间
        motionStyle: 0,//动画风格，默认随机
        motionDirection: 'upDown',//动画运动方向
        motionEase: '',//
        force3D: true,//
        loopMode: false,//启用首尾循环模式
        swipeMode: 'y',//滑动模式，xy：上下左右，x：水平，y：垂直
        routerMode: false,//路由开启模式
        arrowMode: true,//是否显示滑动指示箭头
        arrowColor: '#fff',//箭头颜色
        alignMode: 'center',//幻灯背景对齐方式
        alignOffset: 0,//对齐偏移值
        preload: true,//是否对素材预加载
        autoStart: true,//自动开始跳转默认幻灯
        autoRemoveChildren: true,//每张幻灯子动画全部完毕后，自动删除子动画tween
        debugMode: 'auto',//默认仅当本地环境开启debug模式
        reloadMode: false,//屏幕旋转自动刷新页面重新适配
        stageMode: 'width',//舞台适配模式，int数值:小于该指定高度则自动缩放,反之按宽度匹配,width:根据宽度缩放，height:根据高度缩放，auto:根据高宽比例，自动缩放;
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
        viewScale: $config.viewport / $config.width,//幻灯缩放比例因子
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
        fixPropsArr: ['x', 'y', 'width', 'height', 'left', 'right', 'top', 'bottom', 'lineHeight', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'fontSize', 'clip', 'backgroundPositionX', 'backgroundPositionY', 'letterSpacing'],//需要修正的属性
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
    SLeasy.isWechat = SLeasy.isWeixin = function () {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }

    //check weibo
    SLeasy.isWeibo = function () {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/weibo/i) == 'weibo') {
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
            return (url.indexOf('http') == 0) ? true : false;
        } else {
            return (location.href.indexOf('http') == 0) ? true : false;
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
        var timeStamp = $config && $config.timeStamp ? '?' + $config.timeStamp : '';
        if (SLeasy.isHttp(url)) {
            return url + (addTimeStamp === false ? '' : timeStamp);
        } else if (url.search(/^\/\//) == -1) {
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
        if (r != null) return r[2];
        //哈希查找
        var h = window.location.hash.substr(1).match(reg);
        if (h != null) return h[2];
        //调试返回时间错字符串
        if (debug) return ('test' + $.now());
        return '';
    }

    //禁止触摸默认滚动
    function stopDefaultScroll(e) {
        // console.log(e.target)
        if ($(e.target).hasClass('SLeasy_sliders') || $(e.target).hasClass('SLeasy_detail')) {
            e.preventDefault();
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
    SLeasy.shake = function (start, callback) {
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
            TweenMax.to(el, time > 100 ? time / 1000 : time, {
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
            TweenMax.to(el, time > 100 ? time / 1000 : time, {
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
        TweenMax.to(el, time > 100 ? time / 1000 : time, {
            autoAlpha: alpha,
            ease: Power0.easeOut,
            yoyo: true,
            repeat: count || -1,
            repeatDelay: repeatDealy || 0,
        });
        return SLeasy;
    }

    //初始化media为可立即播放状态(暂停)
    SLeasy.initMedia = function (mediaSelector, callback, muted) {
        $(mediaSelector).each(function (index, target) {
            $(this).off();
            var $media = $(this)[0];
            $media.muted = muted || false;
            if (device.ios() && SLeasy.isWeibo()) $media.muted = false;//微博静音bug
            $media.play();
            if (device.android() && SLeasy.isWechat() && SLeasy.isHttp()) {
                var videoReady = false;
                $(this).one('durationchange', function () {
                    if (videoReady) return;
                    videoReady = true;
                    console.log($media.paused)
                    if ($media.paused) return;
                    $media.muted = false;
                    $media.currentTime = 0;
                    $media.pause();
                    $media.muted = false;
                    console.log('🎵：media paused~!');
                    callback && callback($media);
                });
                $(this).one('playing', function () {
                    if (videoReady) return;
                    videoReady = true;
                    console.log($media.paused)
                    if ($media.paused) return;
                    $media.muted = false;
                    $media.currentTime = 0;
                    $media.pause();
                    $media.muted = false;
                    console.log('🎵：media paused~!');
                    callback && callback($media);
                });
            } else if (device.ios() && SLeasy.isHttp()) {
                var videoReady = false;
                $(this).one('canplaythrough', function () {
                    if (videoReady) return;
                    videoReady = true;
                    $media.muted = false;
                    $media.currentTime = 0;
                    $media.pause();
                    $media.muted = false;
                    console.log('🎵：media paused~!');
                    callback && callback($media);
                });
                $(this).one('playing', function () {
                    if (videoReady) return;
                    videoReady = true;
                    $media.muted = false;
                    $media.currentTime = 0;
                    $media.pause();
                    $media.muted = false;
                    console.log('🎵：media paused~!');
                    callback && callback($media);
                });
            } else {
                $(this).one('playing', function () {
                    $media.muted = false;
                    $media.currentTime = 0;
                    $media.pause();
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
        $media.currentTime = 0;
        return $media.play();
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

    //复制文字功能函数
    // 必须手动触发 点击事件或者其他事件，不能直接使用js调用！！！
    //  copyText('h5实现一键复制到粘贴板 兼容ios')
    /*兼容性补充：
     移动端：
     安卓手机：微信（chrome）和几个手机浏览器都可以用。
     苹果手机：微信里面和sarafi浏览器里也都可以，
     PC:sarafi版本必须在10.2以上，其他浏览器可以.
     兼容性测试网站：https://www.caniuse.com/*/
    SLeasy.copyText = function (text, msg) {
        // 数字没有 .length 不能执行selectText 需要转化成字符串
        var textString = text.toString();
        var input = document.querySelector('#copy-input');
        if (!input) {
            input = document.createElement('input');
            input.id = "copy-input";
            input.readOnly = "readOnly";        // 防止ios聚焦触发键盘事件
            input.style.position = "absolute";
            input.style.left = "-1000px";
            input.style.zIndex = "-1000";
            // document.body.appendChild(input)
            if (document.querySelector('#SLeasy')) {
                var $SLeasy = document.querySelector('#SLeasy');
                $SLeasy.appendChild(input);
            } else {
                document.body.appendChild(input);
            }
        }
        input.value = textString;
        // ios必须先选中文字且不支持 input.select();
        selectText(input, 0, textString.length);
        if (document.execCommand('copy')) {
            document.execCommand('copy');
            msg ? alert(msg) : alert('已复制到粘贴板');
        } else {
            console.log('该机型不兼容复制函数，请手动复制~');
        }
        input.blur();
        // input自带的select()方法在苹果端无法进行选择，所以需要自己去写一个类似的方法
        // 选择文本。createTextRange(setSelectionRange)是input方法
        function selectText(textbox, startIndex, stopIndex) {
            if (textbox.createTextRange) {//ie
                var range = textbox.createTextRange();
                range.collapse(true);
                range.moveStart('character', startIndex);//起始光标
                range.moveEnd('character', stopIndex - startIndex);//结束光标
                range.select();//不兼容苹果
            } else {//firefox/chrome
                textbox.setSelectionRange(startIndex, stopIndex);
                textbox.focus();
            }
        }
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
        console.log('arguments:' + arguments);
        var vars = arguments.length,
            args = arguments;

        //不同参数策略
        var cacheFuncs = [
            function () {
                var value = $.extend(($.cookie() || {}), store.getAll());
                return value;
            },
            function () {
                console.log('get cache~' + args[0]);
                var value = $.cookie(args[0]) || store.get(args[0]);
                return value;
            },
            function () {
                console.log('set cache~' + args[0] + ':' + args[1]);
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
;(function (SLeasy, $, device) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();

    //设置视口
    SLeasy.viewport = function (sliderBoxHeight) {
        //刷新幻灯缩放比例因子
        $scope.viewScale = $config.viewport / $config.width;
        //重置body
        $("body").css({"padding": 0, "margin": "0 0"});
        $("head").append('<meta id="SLeasy_viewport" name="viewport" content="width=device-width"><meta name="format-detection" content="telephone=no, email=no,adress=no"/>');
        //适配策略
        var minWidth = SLeasy.is('ios') ? 320 : 321,//最小宽度
            minHeight = 480,//最小高度
            ratio = device.desktop() ? $config.width/$config.height : $(window).width() / $(window).height(),//当前设备屏幕高宽比
            viewport = {
                'width': function () {
                    var width = $config.viewport > minWidth ? $config.viewport : minWidth,
                        viewportContent = 'width=' + width + ',user-scalable=no';
                    return viewportContent;
                },
                'height': function (thresholdHeight) {

                    var width = $config.viewport > minWidth ? $config.viewport : minWidth;

                    var viewHeight = (thresholdHeight || $config.height) * (width / $config.width),
                        height = viewHeight > minHeight ? viewHeight : minHeight;

                    $scope.fixWidth = height * ratio;
                    var viewportContent = 'width=' + $scope.fixWidth + ',user-scalable=no';
                    //height模式下，重置viewScale
                    if ($config.width / $config.height < ratio) {
                        $scope.viewScale = $scope.fixWidth / $config.width;//刷新幻灯缩放比例因子
                    }
                    return viewportContent;
                },
                'auto': function () {
                    var viewportContent = $config.width / $config.height >= ratio ? viewport.width() : viewport.height();
                    return viewportContent;
                },
                'scroll': function () {
                    var width = $config.viewport > minWidth ? $config.viewport : minWidth,
                        viewportContent = 'width=' + width + ',user-scalable=no';
                    return viewportContent;
                },
                'threshold': function (threshold) {//阈值模式,当stageMode为指定数值的时候,按阈值高度等比缩放
                    var viewportContent = $config.width / threshold >= ratio ? viewport.width() : viewport.height(threshold);
                    return viewportContent;
                },
                'device-width': function () {
                    viewportContent = 'width=device-width,user-scalable=no';
                    return viewportContent;
                }
            };


        var _content = (typeof $config.stageMode == 'number') ? viewport['threshold']($config.stageMode) : viewport[$config.stageMode]();
        $("#SLeasy_viewport").attr('content', _content);

        // if ($config.stageMode == 'auto' || typeof $config.stageMode == 'number') {
        SLeasy.onResize = function (oMode) {
            $config.reloadMode && window.location.reload();
            //横竖屏回调
            if ($config.on['resize']) {
                $config.on['resize'](oMode);
            }
            //hack ios微信下横竖屏切换布局显示不能复位
            if (device.ios() && SLeasy.isWechat()) {
                if (oMode == '横屏') {
                    $('#SLeasy_viewport').attr('content', 'width=' + $scope.fixHeight + ',user-scalable=no');
                } else {
                    setTimeout(function () {
                        $('#SLeasy_viewport').attr('content', 'width=' + $config.viewport + ',user-scalable=no');
                    }, 150)
                }
            }
        }
        //}


        var sliderBoxHeight = sliderBoxHeight * $scope.viewScale || $config.height * $scope.viewScale;
        var fixHeight = $('<div id="SLeasy_fixHeight" style="height: 100vh"></div>').appendTo('body').height();
        $('#SLeasy_fixHeight').remove();
        $scope.fixHeight = fixHeight > sliderBoxHeight ? sliderBoxHeight : fixHeight;
        console.log('fixHeight:' + $scope.fixHeight)
        if ($config.stageMode == 'scroll') {
            $scope.fixHeight = sliderBoxHeight;
        }

    }
})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    device
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

        //slider label hash
        if (typeof opt.label != 'undefined') {
            $scope.labelHash[opt.label] = opt.index;
        }

        //slider
        var html = '\
			<div class="SLeasy_' + (opt.type || 'sliders') + ' ' + (opt.class || '') + '"\
			style="\
			width:' + ($scope.fixWidth || $config.viewport) + 'px;\
			height:' + ($config.positionMode == "absolute" || opt.type != 'sliders' ? ($config.scrollMagicMode && opt.height ? opt.height * $scope.viewScale : $scope.fixHeight) : '') + 'px;\
			background-image:' + sliderBg() + ';\
			background-repeat:' + (opt.bgRepeat || "no-repeat") + ';\
			background-size:cover;\
			background-position:' + ($config.scrollMagicMode && opt.index != 0 ? 'center center' : bgAlign[(opt.alignMode || $config.alignMode)]) + ';\
			background-color:' + (opt.bgColor || "transparent") + ';\
			overflow:' + (opt.scroll ? "auto" : ($config.positionMode == "absolute" ? "hidden" : "visible")) + ';\
			position:' + ($config.scrollMagicMode ? 'static' : 'absolute') + '; \
			display:' + ($config.scrollMagicMode ? 'block' : (opt.display || 'none')) + ';\
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
				style="' + (opt.poster ? 'background-image:url(' + SLeasy.path($config.host, opt.poster) + ');background-size:100% auto;' : 'background:#000000;') + 'object-fit:' + (opt.fit || 'cover') + ';" \
				src="' + SLeasy.path($config.host, opt.video, opt.timeStamp || false) + '" type="' + (opt.mediaType || 'video/mp4') + '" poster="' + (SLeasy.path($config.host, opt.poster) || '') + '" ' + (typeof opt.x5 == 'undefined' || opt.x5 ? 'x5-video-player-type="h5-page"' : '') + 'width="' + (opt.width * $scope.viewScale || '100%') + '" ' + (opt.height ? 'height="' + opt.height * $scope.viewScale + '"' : 'height="100%"') + (typeof opt.controls != 'undefined' && !opt.controls ? '' : 'controls ') + (typeof opt.playsinline != 'undefined' && !opt.playsinline ? '' : '-webkit-playsinline webkit-playsinline playsinline') + (typeof opt.playsinline != 'undefined' && opt.playsinline && opt.white ? '' : ' x5-playsinline') + ' preload="' + (opt.preload || 'auto" ') + (opt.loop !== undefined ? 'loop="loop"' : '') + '>\
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
                        maxlength="' + (opt.maxlength || '') + '"\
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
                    if (opt && opt.paddingOrCrop) {
                        $(selector).css({
                            width: $sprite.w - ($scope.viewScale * (opt.paddingOrCrop || 0)),
                            height: $sprite.h - ($scope.viewScale * (opt.paddingOrCrop || 0)),
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
                        }, (delay || 1) * 1000);
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
// SLeasy3-imgToDiv
;(function (SLeasy, $) {
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
    jQuery
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
                "center": (($scope.fixWidth || $config.viewport) - $config.width * $scope.viewScale) / 2 + $config.alignOffset * $scope.viewScale,
                "bottom": ($scope.fixWidth || $config.viewport) - $config.width * $scope.viewScale + $config.alignOffset * $scope.viewScale
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
                console.log(subShow);

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
                //func
                if ($.isFunction(props)) {
                    transObj[$scope.fixPropsArr[i]] = props() * $scope.viewScale;
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
// SLeasy3-subMotion
;(function (SLeasy, $, T) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();


    //subMotion,参数:为单个slider/detail配置对象数据
    SLeasy.subMotion = function (subMotionArr, type, motionTime) {
        console.log('subMotion~~~');
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
        if (type && type != 'sliders') {
            var tl = new TimelineMax({autoRemoveChildren: $config.autoRemoveChildren, paused: true});
            $scope[type + 'Timeline'] = tl;
            console.warn(type + 'Timeline')
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
            //set
            subMotion.set && T.set($dom, subMotion.set);

            //add label
            subMotion.label && tl.addLabel(subMotion.label);

            //add pause
            subMotion.pause && tl.addPause(startTime);

            //add motion
            if (subMotion.to) {
                subMotion.set && tl.add(T.set($(subMotion.el), subMotion.set));
                tl.add(T.to($(subMotion.el), time, subMotion.to), startTime);
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
        console.log(';;;;;;;;;;;;;;;;;;;;;;;;;')
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
                    in: {x: $config.viewport, y: 0, autoAlpha: 0, ease: Expo.easeInOut},
                    show: {x: 0, y: 0, autoAlpha: 1, ease: Expo.easeInOut},
                    out: {x: -$config.viewport, y: 0, autoAlpha: 0, ease: Expo.easeInOut}
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
                    set: {},
                    in: {x: $config.viewport, y: 0, autoAlpha: 1, ease: $config.motionEase || Expo.easeInOut},
                    show: {x: 0, y: 0, autoAlpha: 1, ease: $config.motionEase || Expo.easeInOut},
                    out: {x: -$config.viewport, y: 0, autoAlpha: 1, ease: $config.motionEase || Expo.easeInOut}
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
    SLeasy.goSlider = function (index, duration) {
        var nextIndex = SLeasy.nextIndex(index);
        if ($config.routerMode) {
            //var detailHash=$scope.router.getRoute(1);
            $scope.router.setRoute(0, nextIndex + '');//设置路由
        } else {
            SLeasy.transit(nextIndex, duration);
        }
        return SLeasy;
    }

    SLeasy.nextIndex = function (index) {
        //如果是label标签，并且不包含‘—=’或者‘+=’,则获取标签对应的索引值
        var index = (typeof index == 'number' || index.indexOf('-=') != -1 || index.indexOf('+=') != -1) ? index : SLeasy.label(index);
        console.log(index);
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

    SLeasy.transitFX = function (nextIndex, duration) {
        var _in,
            _out,
            _show,
            _set,
            motionFX = SLeasy.getMotionFX(),//获取全局配置切换效果
            customFX
        ;

        //如果当前幻灯索引小于下一页索引,则按预设效果切换，反之，反转切换效果
        console.log($scope.sliderIndex + ':' + nextIndex);


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
        _show = $.extend({//show FX
            onStart: function () {
                var currentSlider = $scope.sliders.eq($scope.sliderIndex),//当前幻灯
                    currentSubMotion = currentSlider.find($scope.subMotion);//当前幻灯子元素
                var nextSlider = $scope.sliders.eq(nextIndex);//下一幻灯
                console.warn($scope.sliderIndex + ':' + nextIndex);

                //如果下一页是scroll模式
                if ($config.sliders[nextIndex].scroll || $config.scrollMagicMode) {
                    SLeasy.touchScroll(true, false);
                    nextSlider.scroll(function (e) {
                        //console.log(e);
                        var scrollTop = e.target.scrollTop,
                            scrollTopMax = e.target.scrollTopMax || Math.floor(e.target.scrollHeight - $scope.fixHeight);
                        //console.log(scrollTop + ':' + scrollTopMax);
                        //如果autoSwitch参数未设置（即默认状态），或者切换方向上的参数值为false，则自动切换幻灯页
                        if (scrollTop <= 0) {
                            $scope.isAtTop = true;
                            if (!$config.sliders[nextIndex].autoSwitch || $config.sliders[nextIndex].autoSwitch[0]) {
                                SLeasy.goSlider(nextIndex - 1);
                                $scope.isAtTop = false;
                            }
                        } else if (scrollTop >= scrollTopMax) {
                            $scope.isAtBottom = true;
                            if (!$config.sliders[nextIndex].autoSwitch || $config.sliders[nextIndex].autoSwitch[1]) {
                                SLeasy.goSlider(nextIndex + 1);
                                $scope.isAtBottom = false;
                            }
                        } else {
                            $scope.scrollEdge = false;
                        }
                    })
                } else {
                    SLeasy.touchScroll(false, true);
                    console.log('can swipe~!')
                }
                if ($config.sliders[nextIndex].onStart) $config.sliders[nextIndex].onStart();//单页onStart回调

                //清除幻灯内联式样,!!!!~~~~(幻灯一定要去除zIndex和transform:matrix3d属性,不然在移动设备上,带有3d属性的子元素会出现穿透幻灯(父元素)现象)
                T.set(currentSubMotion, {clearProps: $scope.clearProps, display: 'none'});//清除子动画图片内联式样
                T.set(currentSlider, {clearProps: $scope.clearProps});
                T.set(currentSlider, $config.sliders[nextIndex].set || {});

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
                console.warn(duration)
                console.warn(motionTime)
                console.warn($scope.isSliderEdge)
            },
            onComplete: function () {
                $scope.isAnim = 0;//重置运动状态
                if ($config.sliders[nextIndex].onComplete) $config.sliders[nextIndex].onComplete();//单页onComplete回调
                //console.log($scope.labelHash);
            },
        }, (customFX.show || motionFX.show));
        _set = customFX.set || motionFX.set;

        //force3D
        _in = $.extend({force3D: $config.force3D}, _in);
        _out = $.extend({force3D: $config.force3D}, _out);
        _show = $.extend({force3D: $config.force3D}, _show);

        return {
            in: _in,
            show: _show,
            out: _out,
            set: _set
        }

    }

    SLeasy.transit = function (nextIndex, duration) {
        if ($scope.sliders.length == 0) return alert('当前没有任何幻灯json数据~!');
        if ($scope.isAnim) return;
        $scope.isAnim = 1;//重置运动状态

        var currentSlider = $scope.sliders.eq($scope.sliderIndex),//当前幻灯
            //nextIndex=SLeasy.nextIndex(index),//下一幻灯索引
            nextSlider = $scope.sliders.eq(nextIndex),//下一幻灯
            FX = SLeasy.transitFX(nextIndex, duration);//切换效果

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

        //动画切换执行
        var motionTime = parseFloat(duration) || $config.sliders[nextIndex].time || $config.sliders[nextIndex].motionTime || $config.motionTime;
        if (currentSlider[0] == nextSlider[0]) {
            //如果上下页是同一页，则只执行to动画及子动画
            // $(currentSlider).fadeIn(300);
            // T.to(currentSlider, motionTime, FX.show);
            T.to(currentSlider, motionTime, $.extend({display: 'block'}, FX.show));
        } else {
            //清除所有ae渲染层tween
            $.each($scope.aeLayer, function (index, aeLayer) {
                T.killTweensOf(aeLayer);
            })

            //slider切换
            preFXAguments = $config.sliders[nextIndex].preMotionFX || null;
            //自定义切换效果
            preFX = preFXAguments ? SLeasy.getMotionFX(preFXAguments[0], preFXAguments[1], preFXAguments[2]) : FX;
            preMotionTime = motionTime;
            T.set(currentSlider, $config.sliders[$scope.sliderIndex].set || {});
            T.to(currentSlider, preMotionTime || motionTime, preFX.out || FX.out);
            T.fromTo(nextSlider, motionTime, FX.in, FX.show);
        }
        //更新当前slider索引
        $scope.sliderIndex = nextIndex;
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
    SLeasy.goDetail = function (index) {
        var nextIndex = SLeasy.nextDetailIndex(index);
        if ($config.routerMode) {
            $scope.router.setRoute(1, nextIndex + '');//设置路由
        } else {
            SLeasy.detailTransit(nextIndex);
        }
        return SLeasy;
    }

    SLeasy.nextDetailIndex = function (index) {
        return index = (typeof index == 'number') ? index : SLeasy.label(index);//如果是label标签，则获取标签对应的索引值
    }

    SLeasy.detailFX = function (index) {
        var detail = $config.details[index] || (console.warn('详情页索引参数错误~！')),
            motionFX = detail.fx || detail.FX || detail.motionFX || null,
            motionFX = motionFX ? SLeasy.getMotionFX(motionFX[0], motionFX[1], motionFX[2]) : SLeasy.getMotionFX('leftRight', 0),
            _in = $.extend(motionFX.in, {display: 'block'}),
            _show = $.extend(motionFX.show, {
                onStart: function (e) {
                    detail.scroll ? SLeasy.touchScroll(true, false) : SLeasy.touchScroll(false, true);//禁止触摸默认滚动+禁止slider滑动手势
                    detail.onStart && detail.onStart();
                    SLeasy.subMotion(detail.subMotion, 'details');
                    $scope.isDetail = 1;//详情页已打开
                },
                onComplete: function (e) {
                    detail.onComplete && detail.onComplete();
                }
            }),
            _set = $.extend({zIndex: 1}, detail.set) || {};

        //force3D
        _in = $.extend({force3D: $config.force3D}, _in);
        _show = $.extend({force3D: $config.force3D}, _show);

        return {
            in: _in,
            show: _show,
            set: _set
        }

    }

    SLeasy.detailTransit = function (index) {
        //如果详情页处于打开状态未关闭，则return
        if ($scope.isDetail || !$config.details[index]) return;
        //索引边界检查
        if (typeof index == 'undefined' || index < 0 || index > $config.details.length - 1) return;

        $scope.detailIndex = index;

        var detail = $config.details[index],
            dom = $scope.details.eq(index),
            FX = SLeasy.detailFX(index),
            time = detail.time || $config.motionTime
        ;

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
    SLeasy.closeDetail = function (index, callback) {
        var nextIndex = SLeasy.nextDetailIndex(index);
        if ($config.routerMode) {
            var sliderHash = $scope.router.getRoute(1)
            $scope.router.setRoute(1, 'html');//设置路由
        } else {
            SLeasy.closeDetailTransit(nextIndex, callback);
        }
        return SLeasy;
    }

    SLeasy.closeDetailTransit = function (index, callback) {
        //如果详情页处于打开状态未关闭，则return
        if (!$scope.isDetail) return;
        //索引边界检查
        if (typeof index == 'undefined' || index < 0 || index > $config.details.length - 1) return;

        var detail = $config.details[index],
            dom = $scope.details.eq(index),
            onComplete = {
                onComplete: function () {
                    console.log(dom);
                    callback && callback();//回调hack
                    //如果当前stageMode为scroll，或者当前幻灯页为scroll模式，则恢复触摸默认滚动禁用sliderSwipe，否则禁止触摸默认滚动，启用sliderSwipe
                    ($config.stageMode == 'scroll' || $config.sliders[$scope.sliderIndex].scroll) ? SLeasy.touchScroll(true, false) : SLeasy.touchScroll(false, true);
                    T.set(dom, {clearProps: $scope.clearProps, display: 'none'});//清除幻灯内联式样
                    T.set($scope.detailMotion, {clearProps: $scope.clearProps, display: 'none'});//清除子动画图片内联式样
                    $scope.isDetail = 0;//详情页已关闭
                    //如果positionMod为relative情况
                    $config.positionMode == 'relative' && $scope.sliderBox.css("overflow", "visible");
                }
            },
            FX = SLeasy.detailFX(index),
            time = detail.time || $config.motionTime
        ;

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
        if (globalBinding) {
            //全局 -------------------------
            sliderBox = new H(document.getElementById($config.id) || document.getElementById('SLeasy'));
            sliderBox.get('swipe').set({velocity: 0.2, direction: Hammer.DIRECTION_ALL});

            //禁止触摸默认行为
            SLeasy.touchScroll(false);

            if ($config.stageMode == 'scroll') {
                SLeasy.touchScroll(true);
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

                if ($config.debugMode) $(dom).addClass('SLeasy_shadownBt');
                dom.style.cursor = "pointer";//鼠标手势
                //console.log(document.getElementById(id));
                if (e == 'click') {//点击事件,方便某些广告监测代码
                    $(dom).off('click').on('click', callback);
                } else if (e == 'hold') {//长按事件
                    HDom.get('press').set({time: 1000});
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

                dom.style.cursor = "pointer";//鼠标手势
                //console.log(document.getElementById(id));
                if (e == 'click') {//点击事件,方便某些广告监测代码
                    $(dom).off('click').on('click', callback);
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
                var HDom = new H($('.SLeasy_loading')[0]);
                HDom.get('swipe').set({velocity: 0.2, direction: Hammer.DIRECTION_ALL});
                HDom.off(e).on(e, callback);//事件绑定
            })
        }

        //slider幻灯
        for (var i = 0; i < $('.SLeasy_sliders').length; i++) {
            if ($config.sliders[i].on) {
                $.each($config.sliders[i].on, function (e, callback) {
                    var HDom = new H($('.SLeasy_sliders')[i]);
                    HDom.get('swipe').set({velocity: 0.2, direction: Hammer.DIRECTION_ALL});
                    HDom.off(e).on(e, callback);//事件绑定
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
        $scope  = SLeasy.scope();//公有变量

    //
    SLeasy.float = function () {
        SLeasy.fixPosition([{subMotion: $config.floats}]);//全部浮动元素自适应坐标值修正转换
        var html = SLeasy.subElement($config.floats, 'floats');
        $(html).appendTo($scope.sliderBox);
        $('.SLeasy_floatElement').each(function (index, element) {
            T.set($(this), $.extend({zIndex: 10}, $config.floats[index].set));
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
        var musicHtml = '';
        if ($scope.audioInit) return '';//返回空html串
        $scope.audioInit = true;

        //webAudio初始化
        if (Object.keys($config.audios).length && $config.audioType == 'webAudio') {
            $.each($config.audios, function (index, audio) {
                setTimeout(function () {
                    if (typeof audio == 'string') {
                        $scope.audios[index] = new Howl({src: SLeasy.path($config.host, audio)});
                    } else {
                        audio.src = SLeasy.path($config.host, audio.src);
                        $scope.audios[index] = new Howl(audio);
                    }
                }, index * 50);
            });
            console.log($scope.$audios);
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

        //auto playHack
        $config.musicTouchPlay && document.addEventListener('touchstart', SLeasy.music.play, false);
        if (typeof $config.musicUrl == 'object') {
            $config.musicUrl.src = SLeasy.path($config.host, $config.musicUrl.src);
            $scope.audios['bgm'] = new Howl($config.musicUrl);
            $scope.audios['bgm'].off();
            $scope.audios['bgm'].on('play', function () {
                $scope.isMusic = 1;
                SLeasy.music.isPlaying = true;
                T.set($("#SLeasy_musicBt"), {backgroundPosition: 'center 0px', ease: Power4.easeOut});
                document.removeEventListener('touchstart', SLeasy.music.play);
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
            musicHtml += '\
			<audio id="SLeasy_music" class="music" preload="auto" ' + ($config.musicLoop ? 'loop="loop"' : '') + '>\
			<source src="' + SLeasy.path($config.host, $config.musicUrl) + '" type="' + mediaTypes[$config.musicUrl.split('.')[1]] + '">\
			</audio>';
        }
        return musicHtml;
    }


    //isPlaying
    SLeasy.music.playing = SLeasy.music.isPlaying = false;

    //play
    SLeasy.music.play = function () {
        setTimeout(function () {//不支持自动播放情况
            if (!$scope.isMusic) {
                T.set($("#SLeasy_musicBt"), {
                    backgroundPosition: 'center -' + $config.musicBt[3] * $scope.viewScale + 'px',
                    ease: Power4.easeOut
                });
            }
        }, 100)

        //howler
        if (typeof $config.musicUrl == 'object') {
            if($config.musicMuteMode=='global') Howler.mute(false);
            $scope.bgmID = $scope.audios['bgm'].play();
        }

        //audio
        if ($("#SLeasy_music").length) {
            $("#SLeasy_music")[0].play();
        }

        //hack部分机型无法自动播放的bug
        document.addEventListener("WeixinJSBridgeReady", function () {
            //howler
            if (typeof $config.musicUrl == 'object') {
                if ($scope.bgmID) {
                    $scope.audios['bgm'].play($scope.bgmID);
                } else {
                    $scope.bgmID = $scope.audios['bgm'].play();
                }
                console.log('howl BGM music play~')
            } else {
                $("#SLeasy_music").length && $("#SLeasy_music")[0].play();
            }
        }, false);

        //兼容安卓
        $("#SLeasy_music").on('playing', function () {
            $scope.isMusic = 1;
            SLeasy.music.isPlaying = true;
            T.set($("#SLeasy_musicBt"), {backgroundPosition: 'center 0px', ease: Power4.easeOut});
            document.removeEventListener('touchstart', SLeasy.music.play);
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
            if($config.musicMuteMode=='global') Howler.mute(true);
            return $scope.audios['bgm'].pause($scope.bgmID);
        }
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

    //musicBt:[1,'http://xxx/musicBt.png',60,60,'topRight',10,10],//背景音乐按钮[开启状态，sprite图片url，宽度，高度，对齐方式，x轴偏移，y轴偏移]
    SLeasy.music.bt = function () {
        if ($("#SLeasy_musicBt").length) return;

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
            $config.loading.type = 'loading';
            loadingHtml = SLeasy.slider($config.loading);
            //音乐初始化
            musicHtml = SLeasy.music.init();
            $scope.sliderBox.html($scope.sliderBox.html() + loadingHtml + musicHtml);
            SLeasy.float();//浮动元素初始化
            $config.musicBt[0] && SLeasy.music.bt();//背景音乐按钮初始化

            SLeasy.fixPosition([$config.loading]);
            //img to div
            SLeasy.imgToDiv($scope.sliderBox, dfd);

            //默认显示渲染
            $config.musicAutoPlay && typeof $config.musicUrl == 'string' ? SLeasy.music.play() : SLeasy.music.pause();//播放背景音乐

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

            //音乐初始化
            musicHtml = SLeasy.music.init();

            //框架初始化($scope.sliderBox.html()包含了loading结构代码)
            $scope.sliderBox.append(sliderHtml + detailHtml + musicHtml);

            SLeasy.loader.hidden();//隐藏loading
            $.isEmptyObject($config.loading) && SLeasy.float();//浮动元素初始化
            SLeasy.arrow.init($config.arrowColor);//箭头初始化
            $config.musicBt[0] && SLeasy.music.bt();//背景音乐按钮初始化

            SLeasy.fixPosition($config.sliders);//全部幻灯子动画自适应坐标值修正转换
            SLeasy.fixPosition($config.details);//全部详情页子动画自适应坐标值修正转换

            //img to div
            SLeasy.imgToDiv($scope.sliderBox, dfd);
            //默认显示渲染
            $config.musicAutoPlay && typeof $config.musicUrl == 'string' ? SLeasy.music.play() : SLeasy.music.pause();

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

            //如果幻灯设置了自动开始，而且没有开启自动路由，且url没有路由哈希参数，则默认显示第一页
            $.isEmptyObject($config.loading) && TweenMax.set($('.SLeasy_sliders').eq(0), {autoAlpha: 0});
            !$scope.loadingReady && (!$config.routerMode && !$scope.router.getRoute()[0]) && SLeasy.goSlider(0);
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
            '<svg class="SLeasy_loadingSVG" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="' + loaderColor + '" style="position: relative">\
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

            '<svg class="SLeasy_loadingSVG" width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" style="position: relative">\
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

        var loadingStyle = 'position:absolute;z-index:9999;top:50%;left:50%;overflow:hidden' +
            'width:' + $config.viewport + 'px;height:' + $scope.fixHeight + 'px;' +
            'margin-left:' + -$config.loader.size[0] / 2 + 'px;' +
            'margin-top:' + -$config.loader.size[1] / 2 + 'px';

        var percentStyle = 'position:absolute;text-align:center;top:0;left:0;' +
            'width:' + $config.loader.size[0] + 'px;' +
            'height:' + $config.loader.size[1] + 'px;' +
            'line-height:' + $config.loader.size[1] + 'px;' +
            $config.loader.textStyle;

        var msgStyle = 'position:absolute;text-align:center;' +
            'top:' + ($config.loader.size[1]) + 'px;' +
            'left:-' + ($config.viewport - $config.loader.size[0]) / 2 + 'px;' +
            'width:' + $config.viewport + 'px;' +
            'height:' + $config.loader.size[1] + 'px;' +
            'line-height:' + $config.loader.size[1] + 'px;' +
            $config.loader.textStyle;

        var overLayStyle = 'width:' + $config.viewport + 'px;height:' + $scope.fixHeight + 'px;' +
            'background:' + loaderBg + ';position:absolute;' +
            'left:-' + ($config.viewport - $config.loader.size[0]) / 2 + 'px;top:-' + ($scope.fixHeight - $config.loader.size[1]) / 2 + 'px';

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
            overLayBg && $("#SLeasy_loader_overLay").css({background: overLayBg})
            $("#SLeasy_loader").fadeIn(300);
        } else {
            var loaderBox = $config.stageMode == 'scroll' ? $("body") : $scope.sliderBox;
            loaderBox.prepend(SLeasy.loader.html());
            msg && $("#SLeasy_loader_msg").text(msg) && SLeasy.loader.progress('');//设置msg
            $("#SLeasy_loader").fadeIn(300);
        }
    }

    //hidden
    SLeasy.loader.hidden = function () {
        $("#SLeasy_loader").fadeOut(300);
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
            for (var i = 0; i < loadType; i++) {
                if (!loadArr[loaded + i]) return;
                var img = new Image();
                // img.crossOrigin = "Anonymous";
                img.src = loadArr[loaded + i];
                console.log(':::::load开始加载：' + img.src);
                img.onload = function () {
                    loaded++;
                    threadLoaded++;
                    //console.log(loaded);
                    SLeasy.loader.percent = Math.round(loaded * 100 / loadArr.length / ((!$.isEmptyObject($config.loading) && !$scope.loadingReady ? 100 : $config.loader.endAt) / 100));
                    SLeasy.loader.percent = SLeasy.loader.percent > 100 ? 100 : SLeasy.loader.percent;
                    $config.on['loadProgress'](SLeasy.loader.percent); //预加载进行时回调
                    if (hasCustomLoading && $scope.loadingReady) {
                        //自定义loading的onProgress回调
                        // console.log('========================='+percent+'========================')
                        $config.loading.onProgress && $config.loading.onProgress(SLeasy.loader.percent);
                    }
                    // dfd.notify(SLeasy.loader.percent);
                    if (SLeasy.loader.percent >= 100) {
                        console.log('加载共::>>>>>【' + (new Date().getTime() - stime) / 1000 + '秒】')
                        if ($scope.loadingReady || (!hasCustomLoading)) {
                            callback ? callback() : $config.on['loaded'](); //预加载完毕回调
                        } else {
                            //自定义loading自身加载完毕回调
                            $config.loading && $config.loading.onLoadingLoaded && $config.loading.onLoadingLoaded();
                        }
                        SLeasy.exloadCache();//exLoad Cache
                        dfd.resolve($config, $scope);
                    } else {
                        if (threadLoaded == loadType) _load(loadArr);
                    }
                }
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
                        img.onload = function () {
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
                                console.log('加载共::>>>>>【' + (new Date().getTime() - stime) / 1000 + '秒】');
                                if ($scope.loadingReady || (!hasCustomLoading)) {
                                    callback ? callback() : $config.on['loaded'](); //预加载完毕回调
                                } else {
                                    //自定义loading自身加载完毕回调
                                    $config.loading && $config.loading.onLoadingLoaded && $config.loading.onLoadingLoaded();
                                }
                                SLeasy.exloadCache();//exLoad Cache
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
                console.log('router action~~~');
            },
            notfound: function () {
                console.log('no router match~~~');
                SLeasy.goSlider(0);
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
;(function (SLeasy, $) {
    var $scope = SLeasy.scope();

    //init
    SLeasy.init = function (opt) {
        var dfd = $.Deferred();
        SLeasy.checkGoto();//跳转(url/淘宝)检测
        var $config = SLeasy.config(opt);//合并自定义参数
        if ($config.debugMode == 'auto') {
            $config.debugMode = SLeasy.isHttp() ? 0 : 1;
        }
        if (!SLeasy.isHttp() && $config.debugMode) {//debug模式
            var debugStyle = '.SLeasy_shadownBt{border: 1px solid #fff;box-shadow:0 0 5px #000}';
            var $defaultStyle = $('head style').eq(0);
            $defaultStyle.html($defaultStyle.html() + debugStyle);
        }

        if (!$config.debugMode) {
            console.log = function () {
            };//设置console.log输出
        } else {
            var vConsole = SLeasy.isHttp() && window.VConsole && new VConsole();
        }
        if ($config.VConsole) {
            var vConsole = SLeasy.isHttp() && window.VConsole && new VConsole();
        }
        console.log($config);
        if ($.isEmptyObject($config.loading) || (!$.isEmptyObject($config.loading) && !$scope.loadingReady)) {
            SLeasy.viewport();//设置视口
        }

        //SLeasy容器初始化
        $scope.sliderBox = $('#' + $config.id).length ? $('#' + $config.id) : $('<div id="SLeasy"></div>').prependTo('body'), $config.id = 'SLeasy';//slide容器dom引用缓存
        $scope.sliderBox.css({
            "width": ($scope.fixWidth || $config.viewport) + 'px',
            "height": $scope.fixHeight + 'px',
            "background-image": $config.bg ? 'url(' + SLeasy.path($config.host, $config.bg) + ')' : 'none',
            "background-color": $config.bgColor || 'transparent',
            "background-size": "100% auto",
            "background-repeat": "no-repeat",
            "background-position": $config.scrollMagicMode ? "top center" : "center center",
            "overflow": $config.positionMode == "absolute" ? "hidden" : "visible",//relative模式则高度按内容自适应
            "position": "relative",
            "margin": "0 auto",
        });

        //loading资源加载
        var loadType = (!$.isEmptyObject($config.loading) && !$scope.loadingReady) ? 'multi' : $config.loader.loadType;
        SLeasy.loader.load(SLeasy.getLoadArr($config), loadType).done(function () {//资源加载
            console.log('loading end ----------------------------------------------');
            console.log($scope.totalLoad);
            SLeasy.boot(dfd);
            if (!$.isEmptyObject($config.loading) && !$scope.initReady) {
                $(".SLeasy_loading").fadeIn(300, function () {
                    $config.loading.onComplete && $config.loading.onComplete()
                });
                SLeasy.subMotion($config.loading.subMotion, 'loadingElement', 0);
                $config.loading.onStartLoad && $config.loading.onStartLoad();
                SLeasy.init($config).done(function () {
                    dfd.resolve();//如果有loading，第二次init完毕时，调用第一次done回调
                    console.log('loadingReady::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
                    $config.loading.onLoaded && $config.loading.onLoaded();//预加载完毕自定义loading回调
                });
            }
        });
        return dfd.promise();
    }


    //获取预加载图片url
    SLeasy.getLoadArr = function ($config) {
        var totalArr = [];

        //loading
        var $loading = $config.loading;
        if (!$.isEmptyObject($loading) && !$scope.loadingSourceReady) {
            $loading.bg && totalArr.push(SLeasy.path($config.host, $config.loading.bg));
            for (var l = 0; l < ($loading.subMotion && $loading.subMotion.length); l++) {
                console.log($loading.subMotion[l].img && totalArr.push(SLeasy.path($config.host, $loading.subMotion[l].img))
                );
                //ae序列帧
                var ae = $loading.subMotion[l].ae;
                if (ae) {
                    for (var n = 0; n < ae.layer.length; n++) {
                        var layerOpt = ae.layer[n];
                        console.log(layerOpt);
                        var bitmapArr = SLeasy.addBitmaps(null, layerOpt[1], layerOpt[2], layerOpt[3], layerOpt[4], layerOpt[5]);
                        // console.log(bitmapArr);
                        totalArr = totalArr.concat(bitmapArr);
                    }
                }
            }
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
                if (typeof $config.sliders[i].bg == 'string') {
                    totalArr.push(SLeasy.path($config.host, $config.sliders[i].bg));
                } else {
                    if ($config.sliders[i].bg) {
                        for (var j = 0; j < $config.sliders[i].bg.length; j++) {//多重背景
                            $config.sliders[i].bg[j] && totalArr.push(SLeasy.path($config.host, $config.sliders[i].bg[j]));
                        }
                    }
                }
            }
            for (var k = 0; k < ($config.sliders[i].subMotion && $config.sliders[i].subMotion.length); k++) {
                $config.sliders[i].subMotion[k].img && totalArr.push(SLeasy.path($config.host, $config.sliders[i].subMotion[k].img));
                //ae序列帧
                var ae = $config.sliders[i].subMotion[k].ae;
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
        }

        //详情页背景+子动画元素
        for (var i = 0; i < $config.details.length; i++) {
            if (typeof $config.details[i].bg == 'string') {
                totalArr.push(SLeasy.path($config.host, $config.details[i].bg));
            } else {
                if ($config.details[i].bg) {
                    for (var j = 0; j < $config.details[i].bg.length; j++) {//多重背景
                        $config.details[i].bg[j] && totalArr.push(SLeasy.path($config.host, $config.details[i].bg[j]));
                    }
                }
            }
            for (var k = 0; k < ($config.details[i].subMotion && $config.details[i].subMotion.length); k++) {
                $config.details[i].subMotion[k].img && totalArr.push(SLeasy.path($config.host, $config.details[i].subMotion[k].img));
                //ae序列帧
                var ae = $config.details[i].subMotion[k].ae;
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
            console.log(totalArr);
            $scope.totalLoad = totalArr;
            return totalArr;
        }
    }

})(
    window.SLeasy = window.SLeasy || {},
    jQuery
);