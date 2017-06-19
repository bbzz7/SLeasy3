/*!
 SLeasy 3.6.0 by 宇文互动 庄宇 2017-06-19 email：30755405@qq.com
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
/*! Hammer.JS - v2.0.8 - 2016-09-30
 * http://hammerjs.github.io/
 *
 * Copyright (c)  Jorik Tangelder;
 * Licensed under the MIT license */
(function(window,document,exportName,undefined){"use strict";function ifUndefined(val1,val2){return val1===undefined?val2:val1}var VENDOR_PREFIXES=["","webkit","Moz","MS","ms","o"];var TEST_ELEMENT=document.createElement("div");var TYPE_FUNCTION="function";var round=Math.round;var abs=Math.abs;var now=Date.now;function prefixed(obj,property){var prefix=void 0;var prop=void 0;var camelProp=property[0].toUpperCase()+property.slice(1);var i=0;while(i<VENDOR_PREFIXES.length){prefix=VENDOR_PREFIXES[i];prop=prefix?prefix+camelProp:property;if(prop in obj){return prop}i++}return undefined}function getTouchActionProps(){if(!NATIVE_TOUCH_ACTION){return false}var touchMap={};var cssSupports=window.CSS&&window.CSS.supports;["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(val){return touchMap[val]=cssSupports?window.CSS.supports("touch-action",val):true});return touchMap}var PREFIXED_TOUCH_ACTION=prefixed(TEST_ELEMENT.style,"touchAction");var NATIVE_TOUCH_ACTION=PREFIXED_TOUCH_ACTION!==undefined;var TOUCH_ACTION_COMPUTE="compute";var TOUCH_ACTION_AUTO="auto";var TOUCH_ACTION_MANIPULATION="manipulation";var TOUCH_ACTION_NONE="none";var TOUCH_ACTION_PAN_X="pan-x";var TOUCH_ACTION_PAN_Y="pan-y";var TOUCH_ACTION_MAP=getTouchActionProps();var MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android/i;var SUPPORT_TOUCH="ontouchstart"in window;var SUPPORT_POINTER_EVENTS=prefixed(window,"PointerEvent")!==undefined;var SUPPORT_ONLY_TOUCH=SUPPORT_TOUCH&&MOBILE_REGEX.test(navigator.userAgent);var INPUT_TYPE_TOUCH="touch";var INPUT_TYPE_PEN="pen";var INPUT_TYPE_MOUSE="mouse";var INPUT_TYPE_KINECT="kinect";var COMPUTE_INTERVAL=25;var INPUT_START=1;var INPUT_MOVE=2;var INPUT_END=4;var INPUT_CANCEL=8;var DIRECTION_NONE=1;var DIRECTION_LEFT=2;var DIRECTION_RIGHT=4;var DIRECTION_UP=8;var DIRECTION_DOWN=16;var DIRECTION_HORIZONTAL=DIRECTION_LEFT|DIRECTION_RIGHT;var DIRECTION_VERTICAL=DIRECTION_UP|DIRECTION_DOWN;var DIRECTION_ALL=DIRECTION_HORIZONTAL|DIRECTION_VERTICAL;var PROPS_XY=["x","y"];var PROPS_CLIENT_XY=["clientX","clientY"];var STATE_POSSIBLE=1;var STATE_BEGAN=2;var STATE_CHANGED=4;var STATE_ENDED=8;var STATE_RECOGNIZED=STATE_ENDED;var STATE_CANCELLED=16;var STATE_FAILED=32;var assign=void 0;if(typeof Object.assign!=="function"){assign=function assign(target){if(target===undefined||target===null){throw new TypeError("Cannot convert undefined or null to object")}var output=Object(target);for(var index=1;index<arguments.length;index++){var source=arguments[index];if(source!==undefined&&source!==null){for(var nextKey in source){if(source.hasOwnProperty(nextKey)){output[nextKey]=source[nextKey]}}}}return output}}else{assign=Object.assign}var assign$1=assign;var _uniqueId=1;function uniqueId(){return _uniqueId++}function each(obj,iterator,context){var i=void 0;if(!obj){return}if(obj.forEach){obj.forEach(iterator,context)}else if(obj.length!==undefined){i=0;while(i<obj.length){iterator.call(context,obj[i],i,obj);i++}}else{for(i in obj){obj.hasOwnProperty(i)&&iterator.call(context,obj[i],i,obj)}}}function invokeArrayArg(arg,fn,context){if(Array.isArray(arg)){each(arg,context[fn],context);return true}return false}function inArray(src,find,findByKey){if(src.indexOf&&!findByKey){return src.indexOf(find)}else{var i=0;while(i<src.length){if(findByKey&&src[i][findByKey]==find||!findByKey&&src[i]===find){return i}i++}return-1}}var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj};var asyncGenerator=function(){function AwaitValue(value){this.value=value}function AsyncGenerator(gen){var front,back;function send(key,arg){return new Promise(function(resolve,reject){var request={key:key,arg:arg,resolve:resolve,reject:reject,next:null};if(back){back=back.next=request}else{front=back=request;resume(key,arg)}})}function resume(key,arg){try{var result=gen[key](arg);var value=result.value;if(value instanceof AwaitValue){Promise.resolve(value.value).then(function(arg){resume("next",arg)},function(arg){resume("throw",arg)})}else{settle(result.done?"return":"normal",result.value)}}catch(err){settle("throw",err)}}function settle(type,value){switch(type){case"return":front.resolve({value:value,done:true});break;case"throw":front.reject(value);break;default:front.resolve({value:value,done:false});break}front=front.next;if(front){resume(front.key,front.arg)}else{back=null}}this._invoke=send;if(typeof gen.return!=="function"){this.return=undefined}}if(typeof Symbol==="function"&&Symbol.asyncIterator){AsyncGenerator.prototype[Symbol.asyncIterator]=function(){return this}}AsyncGenerator.prototype.next=function(arg){return this._invoke("next",arg)};AsyncGenerator.prototype.throw=function(arg){return this._invoke("throw",arg)};AsyncGenerator.prototype.return=function(arg){return this._invoke("return",arg)};return{wrap:function(fn){return function(){return new AsyncGenerator(fn.apply(this,arguments))}},await:function(value){return new AwaitValue(value)}}}();var classCallCheck=function(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function")}};var createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var get=function get(object,property,receiver){if(object===null)object=Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc===undefined){var parent=Object.getPrototypeOf(object);if(parent===null){return undefined}else{return get(parent,property,receiver)}}else if("value"in desc){return desc.value}else{var getter=desc.get;if(getter===undefined){return undefined}return getter.call(receiver)}};var inherits=function(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass};var possibleConstructorReturn=function(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return call&&(typeof call==="object"||typeof call==="function")?call:self};var slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[Symbol.iterator](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break}}catch(err){_d=true;_e=err}finally{try{if(!_n&&_i["return"])_i["return"]()}finally{if(_d)throw _e}}return _arr}return function(arr,i){if(Array.isArray(arr)){return arr}else if(Symbol.iterator in Object(arr)){return sliceIterator(arr,i)}else{throw new TypeError("Invalid attempt to destructure non-iterable instance")}}}();function boolOrFn(val,args){if((typeof val==="undefined"?"undefined":_typeof(val))===TYPE_FUNCTION){return val.apply(args?args[0]||undefined:undefined,args)}return val}function getRecognizerByNameIfManager(otherRecognizer,recognizer){var manager=recognizer.manager;if(manager){return manager.get(otherRecognizer)}return otherRecognizer}function stateStr(state){if(state&STATE_CANCELLED){return"cancel"}else if(state&STATE_ENDED){return"end"}else if(state&STATE_CHANGED){return"move"}else if(state&STATE_BEGAN){return"start"}return""}var Recognizer=function(){function Recognizer(options){classCallCheck(this,Recognizer);this.options=assign$1({},this.defaults,options||{});this.id=uniqueId();this.manager=null;this.options.enable=ifUndefined(this.options.enable,true);this.state=STATE_POSSIBLE;this.simultaneous={};this.requireFail=[]}createClass(Recognizer,[{key:"set",value:function set(options){assign$1(this.options,options);this.manager&&this.manager.touchAction.update();return this}},{key:"recognizeWith",value:function recognizeWith(otherRecognizer){if(invokeArrayArg(otherRecognizer,"recognizeWith",this)){return this}var simultaneous=this.simultaneous;otherRecognizer=getRecognizerByNameIfManager(otherRecognizer,this);if(!simultaneous[otherRecognizer.id]){simultaneous[otherRecognizer.id]=otherRecognizer;otherRecognizer.recognizeWith(this)}return this}},{key:"dropRecognizeWith",value:function dropRecognizeWith(otherRecognizer){if(invokeArrayArg(otherRecognizer,"dropRecognizeWith",this)){return this}otherRecognizer=getRecognizerByNameIfManager(otherRecognizer,this);delete this.simultaneous[otherRecognizer.id];return this}},{key:"requireFailure",value:function requireFailure(otherRecognizer){if(invokeArrayArg(otherRecognizer,"requireFailure",this)){return this}var requireFail=this.requireFail;otherRecognizer=getRecognizerByNameIfManager(otherRecognizer,this);if(inArray(requireFail,otherRecognizer)===-1){requireFail.push(otherRecognizer);otherRecognizer.requireFailure(this)}return this}},{key:"dropRequireFailure",value:function dropRequireFailure(otherRecognizer){if(invokeArrayArg(otherRecognizer,"dropRequireFailure",this)){return this}otherRecognizer=getRecognizerByNameIfManager(otherRecognizer,this);var index=inArray(this.requireFail,otherRecognizer);if(index>-1){this.requireFail.splice(index,1)}return this}},{key:"hasRequireFailures",value:function hasRequireFailures(){return this.requireFail.length>0}},{key:"canRecognizeWith",value:function canRecognizeWith(otherRecognizer){return!!this.simultaneous[otherRecognizer.id]}},{key:"emit",value:function emit(input){var self=this;var state=this.state;function emit(event){self.manager.emit(event,input)}if(state<STATE_ENDED){emit(self.options.event+stateStr(state))}emit(self.options.event);if(input.additionalEvent){emit(input.additionalEvent)}if(state>=STATE_ENDED){emit(self.options.event+stateStr(state))}}},{key:"tryEmit",value:function tryEmit(input){if(this.canEmit()){return this.emit(input)}this.state=STATE_FAILED}},{key:"canEmit",value:function canEmit(){var i=0;while(i<this.requireFail.length){if(!(this.requireFail[i].state&(STATE_FAILED|STATE_POSSIBLE))){return false}i++}return true}},{key:"recognize",value:function recognize(inputData){var inputDataClone=assign$1({},inputData);if(!boolOrFn(this.options.enable,[this,inputDataClone])){this.reset();this.state=STATE_FAILED;return}if(this.state&(STATE_RECOGNIZED|STATE_CANCELLED|STATE_FAILED)){this.state=STATE_POSSIBLE}this.state=this.process(inputDataClone);if(this.state&(STATE_BEGAN|STATE_CHANGED|STATE_ENDED|STATE_CANCELLED)){this.tryEmit(inputDataClone)}}},{key:"process",value:function process(inputData){}},{key:"getTouchAction",value:function getTouchAction(){}},{key:"reset",value:function reset(){}}]);return Recognizer}();Recognizer.prototype.defaults={};var AttrRecognizer=function(_Recognizer){inherits(AttrRecognizer,_Recognizer);function AttrRecognizer(){classCallCheck(this,AttrRecognizer);return possibleConstructorReturn(this,(AttrRecognizer.__proto__||Object.getPrototypeOf(AttrRecognizer)).apply(this,arguments))}createClass(AttrRecognizer,[{key:"attrTest",value:function attrTest(input){var optionPointers=this.options.pointers;return optionPointers===0||input.pointers.length===optionPointers}},{key:"process",value:function process(input){var state=this.state;var eventType=input.eventType;var isRecognized=state&(STATE_BEGAN|STATE_CHANGED);var isValid=this.attrTest(input);if(isRecognized&&(eventType&INPUT_CANCEL||!isValid)){return state|STATE_CANCELLED}else if(isRecognized||isValid){if(eventType&INPUT_END){return state|STATE_ENDED}else if(!(state&STATE_BEGAN)){return STATE_BEGAN}return state|STATE_CHANGED}return STATE_FAILED}}]);return AttrRecognizer}(Recognizer);AttrRecognizer.prototype.defaults={pointers:1};var RotateRecognizer=function(_AttrRecognizer){inherits(RotateRecognizer,_AttrRecognizer);function RotateRecognizer(){classCallCheck(this,RotateRecognizer);return possibleConstructorReturn(this,(RotateRecognizer.__proto__||Object.getPrototypeOf(RotateRecognizer)).apply(this,arguments))}createClass(RotateRecognizer,[{key:"getTouchAction",value:function getTouchAction(){return[TOUCH_ACTION_NONE]}},{key:"attrTest",value:function attrTest(input){return get(RotateRecognizer.prototype.__proto__||Object.getPrototypeOf(RotateRecognizer.prototype),"attrTest",this).call(this,input)&&(Math.abs(input.rotation)>this.options.threshold||this.state&STATE_BEGAN)}}]);return RotateRecognizer}(AttrRecognizer);RotateRecognizer.prototype.defaults={event:"rotate",threshold:0,pointers:2};var PinchRecognizer=function(_AttrRecognizer){inherits(PinchRecognizer,_AttrRecognizer);function PinchRecognizer(){classCallCheck(this,PinchRecognizer);return possibleConstructorReturn(this,(PinchRecognizer.__proto__||Object.getPrototypeOf(PinchRecognizer)).apply(this,arguments))}createClass(PinchRecognizer,[{key:"getTouchAction",value:function getTouchAction(){return[TOUCH_ACTION_NONE]}},{key:"attrTest",value:function attrTest(input){return get(PinchRecognizer.prototype.__proto__||Object.getPrototypeOf(PinchRecognizer.prototype),"attrTest",this).call(this,input)&&(Math.abs(input.scale-1)>this.options.threshold||this.state&STATE_BEGAN)}},{key:"emit",value:function emit(input){if(input.scale!==1){var inOut=input.scale<1?"in":"out";input.additionalEvent=this.options.event+inOut}get(PinchRecognizer.prototype.__proto__||Object.getPrototypeOf(PinchRecognizer.prototype),"emit",this).call(this,input)}}]);return PinchRecognizer}(AttrRecognizer);PinchRecognizer.prototype.defaults={event:"pinch",threshold:0,pointers:2};function directionStr(direction){if(direction===DIRECTION_DOWN){return"down"}else if(direction===DIRECTION_UP){return"up"}else if(direction===DIRECTION_LEFT){return"left"}else if(direction===DIRECTION_RIGHT){return"right"}return""}var PanRecognizer=function(_AttrRecognizer){inherits(PanRecognizer,_AttrRecognizer);function PanRecognizer(){classCallCheck(this,PanRecognizer);var _this=possibleConstructorReturn(this,(PanRecognizer.__proto__||Object.getPrototypeOf(PanRecognizer)).apply(this,arguments));_this.pX=null;_this.pY=null;return _this}createClass(PanRecognizer,[{key:"getTouchAction",value:function getTouchAction(){var direction=this.options.direction;var actions=[];if(direction&DIRECTION_HORIZONTAL){actions.push(TOUCH_ACTION_PAN_Y)}if(direction&DIRECTION_VERTICAL){actions.push(TOUCH_ACTION_PAN_X)}return actions}},{key:"directionTest",value:function directionTest(input){var options=this.options;var hasMoved=true;var distance=input.distance;var direction=input.direction;var x=input.deltaX;var y=input.deltaY;if(!(direction&options.direction)){if(options.direction&DIRECTION_HORIZONTAL){direction=x===0?DIRECTION_NONE:x<0?DIRECTION_LEFT:DIRECTION_RIGHT;hasMoved=x!==this.pX;distance=Math.abs(input.deltaX)}else{direction=y===0?DIRECTION_NONE:y<0?DIRECTION_UP:DIRECTION_DOWN;hasMoved=y!==this.pY;distance=Math.abs(input.deltaY)}}input.direction=direction;return hasMoved&&distance>options.threshold&&direction&options.direction}},{key:"attrTest",value:function attrTest(input){return AttrRecognizer.prototype.attrTest.call(this,input)&&(this.state&STATE_BEGAN||!(this.state&STATE_BEGAN)&&this.directionTest(input))}},{key:"emit",value:function emit(input){this.pX=input.deltaX;this.pY=input.deltaY;var direction=directionStr(input.direction);if(direction){input.additionalEvent=this.options.event+direction}get(PanRecognizer.prototype.__proto__||Object.getPrototypeOf(PanRecognizer.prototype),"emit",this).call(this,input)}}]);return PanRecognizer}(AttrRecognizer);PanRecognizer.prototype.defaults={event:"pan",threshold:10,pointers:1,direction:DIRECTION_ALL};var SwipeRecognizer=function(_AttrRecognizer){inherits(SwipeRecognizer,_AttrRecognizer);function SwipeRecognizer(){classCallCheck(this,SwipeRecognizer);return possibleConstructorReturn(this,(SwipeRecognizer.__proto__||Object.getPrototypeOf(SwipeRecognizer)).apply(this,arguments))}createClass(SwipeRecognizer,[{key:"getTouchAction",value:function getTouchAction(){return PanRecognizer.prototype.getTouchAction.call(this)}},{key:"attrTest",value:function attrTest(input){var direction=this.options.direction;var velocity=void 0;if(direction&(DIRECTION_HORIZONTAL|DIRECTION_VERTICAL)){velocity=input.overallVelocity}else if(direction&DIRECTION_HORIZONTAL){velocity=input.overallVelocityX}else if(direction&DIRECTION_VERTICAL){velocity=input.overallVelocityY}return get(SwipeRecognizer.prototype.__proto__||Object.getPrototypeOf(SwipeRecognizer.prototype),"attrTest",this).call(this,input)&&direction&input.offsetDirection&&input.distance>this.options.threshold&&input.maxPointers===this.options.pointers&&abs(velocity)>this.options.velocity&&input.eventType&INPUT_END}},{key:"emit",value:function emit(input){var direction=directionStr(input.offsetDirection);if(direction){this.manager.emit(this.options.event+direction,input)}this.manager.emit(this.options.event,input)}}]);return SwipeRecognizer}(AttrRecognizer);SwipeRecognizer.prototype.defaults={event:"swipe",threshold:10,velocity:.3,direction:DIRECTION_HORIZONTAL|DIRECTION_VERTICAL,pointers:1};function bindFn(fn,context){return function boundFn(){return fn.apply(context,arguments)}}function setTimeoutContext(fn,timeout,context){return setTimeout(bindFn(fn,context),timeout)}function getDistance(p1,p2,props){if(!props){props=PROPS_XY}var x=p2[props[0]]-p1[props[0]];var y=p2[props[1]]-p1[props[1]];return Math.sqrt(x*x+y*y)}var TapRecognizer=function(_Recognizer){inherits(TapRecognizer,_Recognizer);function TapRecognizer(){classCallCheck(this,TapRecognizer);var _this=possibleConstructorReturn(this,(TapRecognizer.__proto__||Object.getPrototypeOf(TapRecognizer)).apply(this,arguments));_this.pTime=false;_this.pCenter=false;_this._timer=null;_this._input=null;_this.count=0;return _this}createClass(TapRecognizer,[{key:"getTouchAction",value:function getTouchAction(){return[TOUCH_ACTION_MANIPULATION]}},{key:"process",value:function process(input){var _this2=this;var options=this.options;var validPointers=input.pointers.length===options.pointers;var validMovement=input.distance<options.threshold;var validTouchTime=input.deltaTime<options.time;this.reset();if(input.eventType&INPUT_START&&this.count===0){return this.failTimeout()}if(validMovement&&validTouchTime&&validPointers){if(input.eventType!==INPUT_END){return this.failTimeout()}var validInterval=this.pTime?input.timeStamp-this.pTime<options.interval:true;var validMultiTap=!this.pCenter||getDistance(this.pCenter,input.center)<options.posThreshold;this.pTime=input.timeStamp;this.pCenter=input.center;if(!validMultiTap||!validInterval){this.count=1}else{this.count+=1}this._input=input;var tapCount=this.count%options.taps;if(tapCount===0){if(!this.hasRequireFailures()){return STATE_RECOGNIZED}else{this._timer=setTimeoutContext(function(){_this2.state=STATE_RECOGNIZED;_this2.tryEmit()},options.interval,this);return STATE_BEGAN}}}return STATE_FAILED}},{key:"failTimeout",value:function failTimeout(){var _this3=this;this._timer=setTimeoutContext(function(){_this3.state=STATE_FAILED},this.options.interval,this);return STATE_FAILED}},{key:"reset",value:function reset(){clearTimeout(this._timer)}},{key:"emit",value:function emit(){if(this.state===STATE_RECOGNIZED){this._input.tapCount=this.count;this.manager.emit(this.options.event,this._input)}}}]);return TapRecognizer}(Recognizer);TapRecognizer.prototype.defaults={event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10};var PressRecognizer=function(_Recognizer){inherits(PressRecognizer,_Recognizer);function PressRecognizer(){classCallCheck(this,PressRecognizer);var _this=possibleConstructorReturn(this,(PressRecognizer.__proto__||Object.getPrototypeOf(PressRecognizer)).apply(this,arguments));_this._timer=null;_this._input=null;return _this}createClass(PressRecognizer,[{key:"getTouchAction",value:function getTouchAction(){return[TOUCH_ACTION_AUTO]}},{key:"process",value:function process(input){var _this2=this;var options=this.options;var validPointers=input.pointers.length===options.pointers;var validMovement=input.distance<options.threshold;var validTime=input.deltaTime>options.time;this._input=input;if(!validMovement||!validPointers||input.eventType&(INPUT_END|INPUT_CANCEL)&&!validTime){this.reset()}else if(input.eventType&INPUT_START){this.reset();this._timer=setTimeoutContext(function(){_this2.state=STATE_RECOGNIZED;_this2.tryEmit()},options.time,this)}else if(input.eventType&INPUT_END){return STATE_RECOGNIZED}return STATE_FAILED}},{key:"reset",value:function reset(){clearTimeout(this._timer)}},{key:"emit",value:function emit(input){if(this.state!==STATE_RECOGNIZED){return}if(input&&input.eventType&INPUT_END){this.manager.emit(this.options.event+"up",input)}else{this._input.timeStamp=now();this.manager.emit(this.options.event,this._input)}}}]);return PressRecognizer}(Recognizer);PressRecognizer.prototype.defaults={event:"press",pointers:1,time:251,threshold:9};function inStr(str,find){return str.indexOf(find)>-1}function cleanTouchActions(actions){if(inStr(actions,TOUCH_ACTION_NONE)){return TOUCH_ACTION_NONE}var hasPanX=inStr(actions,TOUCH_ACTION_PAN_X);var hasPanY=inStr(actions,TOUCH_ACTION_PAN_Y);if(hasPanX&&hasPanY){return TOUCH_ACTION_NONE}if(hasPanX||hasPanY){return hasPanX?TOUCH_ACTION_PAN_X:TOUCH_ACTION_PAN_Y}if(inStr(actions,TOUCH_ACTION_MANIPULATION)){return TOUCH_ACTION_MANIPULATION}return TOUCH_ACTION_AUTO}var TouchAction=function(){function TouchAction(manager,value){classCallCheck(this,TouchAction);this.manager=manager;this.set(value)}createClass(TouchAction,[{key:"set",value:function set(value){if(value===TOUCH_ACTION_COMPUTE){value=this.compute()}if(NATIVE_TOUCH_ACTION&&this.manager.element.style&&TOUCH_ACTION_MAP[value]){this.manager.element.style[PREFIXED_TOUCH_ACTION]=value}this.actions=value.toLowerCase().trim()}},{key:"update",value:function update(){this.set(this.manager.options.touchAction)}},{key:"compute",value:function compute(){var actions=[];each(this.manager.recognizers,function(recognizer){if(boolOrFn(recognizer.options.enable,[recognizer])){actions=actions.concat(recognizer.getTouchAction())}});return cleanTouchActions(actions.join(" "))}},{key:"preventDefaults",value:function preventDefaults(input){var srcEvent=input.srcEvent;var direction=input.offsetDirection;if(this.manager.session.prevented){srcEvent.preventDefault();return}var actions=this.actions;var hasNone=inStr(actions,TOUCH_ACTION_NONE)&&!TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];var hasPanY=inStr(actions,TOUCH_ACTION_PAN_Y)&&!TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];var hasPanX=inStr(actions,TOUCH_ACTION_PAN_X)&&!TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];if(hasNone){var isTapPointer=input.pointers.length===1;var isTapMovement=input.distance<2;var isTapTouchTime=input.deltaTime<250;if(isTapPointer&&isTapMovement&&isTapTouchTime){return}}if(hasPanX&&hasPanY){return}if(hasNone||hasPanY&&direction&DIRECTION_HORIZONTAL||hasPanX&&direction&DIRECTION_VERTICAL){return this.preventSrc(srcEvent)}}},{key:"preventSrc",value:function preventSrc(srcEvent){this.manager.session.prevented=true;srcEvent.preventDefault()}}]);return TouchAction}();function hasParent(node,parent){while(node){if(node===parent){return true}node=node.parentNode}return false}function getCenter(pointers){var pointersLength=pointers.length;if(pointersLength===1){return{x:round(pointers[0].clientX),y:round(pointers[0].clientY)}}var x=0;var y=0;var i=0;while(i<pointersLength){x+=pointers[i].clientX;y+=pointers[i].clientY;i++}return{x:round(x/pointersLength),y:round(y/pointersLength)}}function simpleCloneInputData(input){var pointers=[];var i=0;while(i<input.pointers.length){pointers[i]={clientX:round(input.pointers[i].clientX),clientY:round(input.pointers[i].clientY)};i++}return{timeStamp:now(),pointers:pointers,center:getCenter(pointers),deltaX:input.deltaX,deltaY:input.deltaY}}function getAngle(p1,p2,props){if(!props){props=PROPS_XY}var x=p2[props[0]]-p1[props[0]];var y=p2[props[1]]-p1[props[1]];return Math.atan2(y,x)*180/Math.PI}function getDirection(x,y){if(x===y){return DIRECTION_NONE}if(abs(x)>=abs(y)){return x<0?DIRECTION_LEFT:DIRECTION_RIGHT}return y<0?DIRECTION_UP:DIRECTION_DOWN}function computeDeltaXY(session,input){var center=input.center;var offset=session.offsetDelta||{};var prevDelta=session.prevDelta||{};var prevInput=session.prevInput||{};if(input.eventType===INPUT_START||prevInput.eventType===INPUT_END){prevDelta=session.prevDelta={x:prevInput.deltaX||0,y:prevInput.deltaY||0};offset=session.offsetDelta={x:center.x,y:center.y}}input.deltaX=prevDelta.x+(center.x-offset.x);input.deltaY=prevDelta.y+(center.y-offset.y)}function getVelocity(deltaTime,x,y){return{x:x/deltaTime||0,y:y/deltaTime||0}}function getScale(start,end){return getDistance(end[0],end[1],PROPS_CLIENT_XY)/getDistance(start[0],start[1],PROPS_CLIENT_XY)}function getRotation(start,end){return getAngle(end[1],end[0],PROPS_CLIENT_XY)+getAngle(start[1],start[0],PROPS_CLIENT_XY)}function computeIntervalInputData(session,input){var last=session.lastInterval||input;var deltaTime=input.timeStamp-last.timeStamp;var velocity=void 0;var velocityX=void 0;var velocityY=void 0;var direction=void 0;if(input.eventType!==INPUT_CANCEL&&(deltaTime>COMPUTE_INTERVAL||last.velocity===undefined)){var deltaX=input.deltaX-last.deltaX;var deltaY=input.deltaY-last.deltaY;var v=getVelocity(deltaTime,deltaX,deltaY);velocityX=v.x;velocityY=v.y;velocity=abs(v.x)>abs(v.y)?v.x:v.y;direction=getDirection(deltaX,deltaY);session.lastInterval=input}else{velocity=last.velocity;velocityX=last.velocityX;velocityY=last.velocityY;direction=last.direction}input.velocity=velocity;input.velocityX=velocityX;input.velocityY=velocityY;input.direction=direction}function computeInputData(manager,input){var session=manager.session;var pointers=input.pointers;var pointersLength=pointers.length;if(!session.firstInput){session.firstInput=simpleCloneInputData(input)}if(pointersLength>1&&!session.firstMultiple){session.firstMultiple=simpleCloneInputData(input)}else if(pointersLength===1){session.firstMultiple=false}var firstInput=session.firstInput;var firstMultiple=session.firstMultiple;var offsetCenter=firstMultiple?firstMultiple.center:firstInput.center;var center=input.center=getCenter(pointers);input.timeStamp=now();input.deltaTime=input.timeStamp-firstInput.timeStamp;input.angle=getAngle(offsetCenter,center);input.distance=getDistance(offsetCenter,center);computeDeltaXY(session,input);input.offsetDirection=getDirection(input.deltaX,input.deltaY);var overallVelocity=getVelocity(input.deltaTime,input.deltaX,input.deltaY);input.overallVelocityX=overallVelocity.x;input.overallVelocityY=overallVelocity.y;input.overallVelocity=abs(overallVelocity.x)>abs(overallVelocity.y)?overallVelocity.x:overallVelocity.y;input.scale=firstMultiple?getScale(firstMultiple.pointers,pointers):1;input.rotation=firstMultiple?getRotation(firstMultiple.pointers,pointers):0;input.maxPointers=!session.prevInput?input.pointers.length:input.pointers.length>session.prevInput.maxPointers?input.pointers.length:session.prevInput.maxPointers;computeIntervalInputData(session,input);var target=manager.element;if(hasParent(input.srcEvent.target,target)){target=input.srcEvent.target}input.target=target}function inputHandler(manager,eventType,input){var pointersLen=input.pointers.length;var changedPointersLen=input.changedPointers.length;var isFirst=eventType&INPUT_START&&pointersLen-changedPointersLen===0;var isFinal=eventType&(INPUT_END|INPUT_CANCEL)&&pointersLen-changedPointersLen===0;input.isFirst=!!isFirst;input.isFinal=!!isFinal;if(isFirst){manager.session={}}input.eventType=eventType;computeInputData(manager,input);manager.emit("hammer.input",input);manager.recognize(input);manager.session.prevInput=input}function splitStr(str){return str.trim().split(/\s+/g)}function addEventListeners(target,types,handler){each(splitStr(types),function(type){target.addEventListener(type,handler,false)})}function removeEventListeners(target,types,handler){each(splitStr(types),function(type){target.removeEventListener(type,handler,false)})}function getWindowForElement(element){var doc=element.ownerDocument||element;return doc.defaultView||doc.parentWindow||window}var Input=function(){function Input(manager,callback){classCallCheck(this,Input);var self=this;this.manager=manager;this.callback=callback;this.element=manager.element;this.target=manager.options.inputTarget;this.domHandler=function(ev){if(boolOrFn(manager.options.enable,[manager])){self.handler(ev)}};this.init()}createClass(Input,[{key:"handler",value:function handler(){}},{key:"init",value:function init(){this.evEl&&addEventListeners(this.element,this.evEl,this.domHandler);this.evTarget&&addEventListeners(this.target,this.evTarget,this.domHandler);this.evWin&&addEventListeners(getWindowForElement(this.element),this.evWin,this.domHandler)}},{key:"destroy",value:function destroy(){this.evEl&&removeEventListeners(this.element,this.evEl,this.domHandler);this.evTarget&&removeEventListeners(this.target,this.evTarget,this.domHandler);this.evWin&&removeEventListeners(getWindowForElement(this.element),this.evWin,this.domHandler)}}]);return Input}();var POINTER_INPUT_MAP={pointerdown:INPUT_START,pointermove:INPUT_MOVE,pointerup:INPUT_END,pointercancel:INPUT_CANCEL,pointerout:INPUT_CANCEL};var IE10_POINTER_TYPE_ENUM={2:INPUT_TYPE_TOUCH,3:INPUT_TYPE_PEN,4:INPUT_TYPE_MOUSE,5:INPUT_TYPE_KINECT};var POINTER_ELEMENT_EVENTS="pointerdown";var POINTER_WINDOW_EVENTS="pointermove pointerup pointercancel";if(window.MSPointerEvent&&!window.PointerEvent){POINTER_ELEMENT_EVENTS="MSPointerDown";POINTER_WINDOW_EVENTS="MSPointerMove MSPointerUp MSPointerCancel"}var PointerEventInput=function(_Input){inherits(PointerEventInput,_Input);function PointerEventInput(){classCallCheck(this,PointerEventInput);var _this=possibleConstructorReturn(this,(PointerEventInput.__proto__||Object.getPrototypeOf(PointerEventInput)).apply(this,arguments));_this.evEl=POINTER_ELEMENT_EVENTS;_this.evWin=POINTER_WINDOW_EVENTS;_this.store=_this.manager.session.pointerEvents=[];return _this}createClass(PointerEventInput,[{key:"handler",value:function handler(ev){var store=this.store;var removePointer=false;var eventTypeNormalized=ev.type.toLowerCase().replace("ms","");var eventType=POINTER_INPUT_MAP[eventTypeNormalized];var pointerType=IE10_POINTER_TYPE_ENUM[ev.pointerType]||ev.pointerType;var isTouch=pointerType===INPUT_TYPE_TOUCH;var storeIndex=inArray(store,ev.pointerId,"pointerId");if(eventType&INPUT_START&&(ev.button===0||isTouch)){if(storeIndex<0){store.push(ev);storeIndex=store.length-1}}else if(eventType&(INPUT_END|INPUT_CANCEL)){removePointer=true}if(storeIndex<0){return}store[storeIndex]=ev;this.callback(this.manager,eventType,{pointers:store,changedPointers:[ev],pointerType:pointerType,srcEvent:ev});if(removePointer){store.splice(storeIndex,1)}}}]);return PointerEventInput}(Input);function toArray$1(obj){return Array.prototype.slice.call(obj,0)}function uniqueArray(src,key,sort){var results=[];var values=[];var i=0;while(i<src.length){var val=key?src[i][key]:src[i];if(inArray(values,val)<0){results.push(src[i])}values[i]=val;i++}if(sort){if(!key){results=results.sort()}else{results=results.sort(function(a,b){return a[key]>b[key]})}}return results}var TOUCH_INPUT_MAP={touchstart:INPUT_START,touchmove:INPUT_MOVE,touchend:INPUT_END,touchcancel:INPUT_CANCEL};var TOUCH_TARGET_EVENTS="touchstart touchmove touchend touchcancel";var TouchInput=function(_Input){inherits(TouchInput,_Input);function TouchInput(){classCallCheck(this,TouchInput);TouchInput.prototype.evTarget=TOUCH_TARGET_EVENTS;
    TouchInput.prototype.targetIds={};var _this=possibleConstructorReturn(this,(TouchInput.__proto__||Object.getPrototypeOf(TouchInput)).apply(this,arguments));_this.evTarget=TOUCH_TARGET_EVENTS;_this.targetIds={};return _this}createClass(TouchInput,[{key:"handler",value:function handler(ev){var type=TOUCH_INPUT_MAP[ev.type];var touches=getTouches.call(this,ev,type);if(!touches){return}this.callback(this.manager,type,{pointers:touches[0],changedPointers:touches[1],pointerType:INPUT_TYPE_TOUCH,srcEvent:ev})}}]);return TouchInput}(Input);function getTouches(ev,type){var allTouches=toArray$1(ev.touches);var targetIds=this.targetIds;if(type&(INPUT_START|INPUT_MOVE)&&allTouches.length===1){targetIds[allTouches[0].identifier]=true;return[allTouches,allTouches]}var i=void 0;var targetTouches=void 0;var changedTouches=toArray$1(ev.changedTouches);var changedTargetTouches=[];var target=this.target;targetTouches=allTouches.filter(function(touch){return hasParent(touch.target,target)});if(type===INPUT_START){i=0;while(i<targetTouches.length){targetIds[targetTouches[i].identifier]=true;i++}}i=0;while(i<changedTouches.length){if(targetIds[changedTouches[i].identifier]){changedTargetTouches.push(changedTouches[i])}if(type&(INPUT_END|INPUT_CANCEL)){delete targetIds[changedTouches[i].identifier]}i++}if(!changedTargetTouches.length){return}return[uniqueArray(targetTouches.concat(changedTargetTouches),"identifier",true),changedTargetTouches]}var MOUSE_INPUT_MAP={mousedown:INPUT_START,mousemove:INPUT_MOVE,mouseup:INPUT_END};var MOUSE_ELEMENT_EVENTS="mousedown";var MOUSE_WINDOW_EVENTS="mousemove mouseup";var MouseInput=function(_Input){inherits(MouseInput,_Input);function MouseInput(){classCallCheck(this,MouseInput);var _this=possibleConstructorReturn(this,(MouseInput.__proto__||Object.getPrototypeOf(MouseInput)).apply(this,arguments));_this.evEl=MOUSE_ELEMENT_EVENTS;_this.evWin=MOUSE_WINDOW_EVENTS;_this.pressed=false;return _this}createClass(MouseInput,[{key:"handler",value:function handler(ev){var eventType=MOUSE_INPUT_MAP[ev.type];if(eventType&INPUT_START&&ev.button===0){this.pressed=true}if(eventType&INPUT_MOVE&&ev.which!==1){eventType=INPUT_END}if(!this.pressed){return}if(eventType&INPUT_END){this.pressed=false}this.callback(this.manager,eventType,{pointers:[ev],changedPointers:[ev],pointerType:INPUT_TYPE_MOUSE,srcEvent:ev})}}]);return MouseInput}(Input);var DEDUP_TIMEOUT=2500;var DEDUP_DISTANCE=25;var TouchMouseInput=function(_Input){inherits(TouchMouseInput,_Input);function TouchMouseInput(){classCallCheck(this,TouchMouseInput);var _this=possibleConstructorReturn(this,(TouchMouseInput.__proto__||Object.getPrototypeOf(TouchMouseInput)).apply(this,arguments));var handler=bindFn(_this.handler,_this);_this.touch=new TouchInput(_this.manager,handler);_this.mouse=new MouseInput(_this.manager,handler);_this.primaryTouch=null;_this.lastTouches=[];return _this}createClass(TouchMouseInput,[{key:"handler",value:function handler(manager,inputEvent,inputData){var isTouch=inputData.pointerType===INPUT_TYPE_TOUCH;var isMouse=inputData.pointerType===INPUT_TYPE_MOUSE;if(isMouse&&inputData.sourceCapabilities&&inputData.sourceCapabilities.firesTouchEvents){return}if(isTouch){recordTouches.call(this,inputEvent,inputData)}else if(isMouse&&isSyntheticEvent.call(this,inputData)){return}this.callback(manager,inputEvent,inputData)}},{key:"destroy",value:function destroy(){this.touch.destroy();this.mouse.destroy()}}]);return TouchMouseInput}(Input);function recordTouches(eventType,eventData){if(eventType&INPUT_START){this.primaryTouch=eventData.changedPointers[0].identifier;setLastTouch.call(this,eventData)}else if(eventType&(INPUT_END|INPUT_CANCEL)){setLastTouch.call(this,eventData)}}function setLastTouch(eventData){var _this2=this;var _eventData$changedPoi=slicedToArray(eventData.changedPointers,1);var touch=_eventData$changedPoi[0];if(touch.identifier===this.primaryTouch){(function(){var lastTouch={x:touch.clientX,y:touch.clientY};_this2.lastTouches.push(lastTouch);var lts=_this2.lastTouches;var removeLastTouch=function removeLastTouch(){var i=lts.indexOf(lastTouch);if(i>-1){lts.splice(i,1)}};setTimeout(removeLastTouch,DEDUP_TIMEOUT)})()}}function isSyntheticEvent(eventData){var x=eventData.srcEvent.clientX;var y=eventData.srcEvent.clientY;for(var i=0;i<this.lastTouches.length;i++){var t=this.lastTouches[i];var dx=Math.abs(x-t.x);var dy=Math.abs(y-t.y);if(dx<=DEDUP_DISTANCE&&dy<=DEDUP_DISTANCE){return true}}return false}function createInputInstance(manager){var Type=void 0;var inputClass=manager.options.inputClass;if(inputClass){Type=inputClass}else if(SUPPORT_POINTER_EVENTS){Type=PointerEventInput}else if(SUPPORT_ONLY_TOUCH){Type=TouchInput}else if(!SUPPORT_TOUCH){Type=MouseInput}else{Type=TouchMouseInput}return new Type(manager,inputHandler)}var STOP=1;var FORCED_STOP=2;var Manager=function(){function Manager(element,options){var _this=this;classCallCheck(this,Manager);this.options=assign$1({},Hammer.defaults,options||{});this.options.inputTarget=this.options.inputTarget||element;this.handlers={};this.session={};this.recognizers=[];this.oldCssProps={};this.element=element;this.input=createInputInstance(this);this.touchAction=new TouchAction(this,this.options.touchAction);toggleCssProps(this,true);each(this.options.recognizers,function(item){var recognizer=_this.add(new item[0](item[1]));item[2]&&recognizer.recognizeWith(item[2]);item[3]&&recognizer.requireFailure(item[3])},this)}createClass(Manager,[{key:"set",value:function set(options){assign$1(this.options,options);if(options.touchAction){this.touchAction.update()}if(options.inputTarget){this.input.destroy();this.input.target=options.inputTarget;this.input.init()}return this}},{key:"stop",value:function stop(force){this.session.stopped=force?FORCED_STOP:STOP}},{key:"recognize",value:function recognize(inputData){var session=this.session;if(session.stopped){return}this.touchAction.preventDefaults(inputData);var recognizer=void 0;var recognizers=this.recognizers;var curRecognizer=session.curRecognizer;if(!curRecognizer||curRecognizer&&curRecognizer.state&STATE_RECOGNIZED){curRecognizer=session.curRecognizer=null}var i=0;while(i<recognizers.length){recognizer=recognizers[i];if(session.stopped!==FORCED_STOP&&(!curRecognizer||recognizer===curRecognizer||recognizer.canRecognizeWith(curRecognizer))){recognizer.recognize(inputData)}else{recognizer.reset()}if(!curRecognizer&&recognizer.state&(STATE_BEGAN|STATE_CHANGED|STATE_ENDED)){curRecognizer=session.curRecognizer=recognizer}i++}}},{key:"get",value:function get(recognizer){if(recognizer instanceof Recognizer){return recognizer}var recognizers=this.recognizers;for(var i=0;i<recognizers.length;i++){if(recognizers[i].options.event===recognizer){return recognizers[i]}}return null}},{key:"add",value:function add(recognizer){if(invokeArrayArg(recognizer,"add",this)){return this}var existing=this.get(recognizer.options.event);if(existing){this.remove(existing)}this.recognizers.push(recognizer);recognizer.manager=this;this.touchAction.update();return recognizer}},{key:"remove",value:function remove(recognizer){if(invokeArrayArg(recognizer,"remove",this)){return this}recognizer=this.get(recognizer);if(recognizer){var recognizers=this.recognizers;var index=inArray(recognizers,recognizer);if(index!==-1){recognizers.splice(index,1);this.touchAction.update()}}return this}},{key:"on",value:function on(events,handler){if(events===undefined){return}if(handler===undefined){return}var handlers=this.handlers;each(splitStr(events),function(event){handlers[event]=handlers[event]||[];handlers[event].push(handler)});return this}},{key:"off",value:function off(events,handler){if(events===undefined){return}var handlers=this.handlers;each(splitStr(events),function(event){if(!handler){delete handlers[event]}else{handlers[event]&&handlers[event].splice(inArray(handlers[event],handler),1)}});return this}},{key:"emit",value:function emit(event,data){if(this.options.domEvents){triggerDomEvent(event,data)}var handlers=this.handlers[event]&&this.handlers[event].slice();if(!handlers||!handlers.length){return}data.type=event;data.preventDefault=function(){data.srcEvent.preventDefault()};var i=0;while(i<handlers.length){handlers[i](data);i++}}},{key:"destroy",value:function destroy(){this.element&&toggleCssProps(this,false);this.handlers={};this.session={};this.input.destroy();this.element=null}}]);return Manager}();function toggleCssProps(manager,add){var element=manager.element;if(!element.style){return}var prop=void 0;each(manager.options.cssProps,function(value,name){prop=prefixed(element.style,name);if(add){manager.oldCssProps[prop]=element.style[prop];element.style[prop]=value}else{element.style[prop]=manager.oldCssProps[prop]||""}});if(!add){manager.oldCssProps={}}}function triggerDomEvent(event,data){var gestureEvent=document.createEvent("Event");gestureEvent.initEvent(event,true,true);gestureEvent.gesture=data;data.target.dispatchEvent(gestureEvent)}var Hammer=function Hammer(element,options){classCallCheck(this,Hammer);options=options||{};options.recognizers=ifUndefined(options.recognizers,Hammer.defaults.preset);return new Manager(element,options)};Hammer.VERSION="2.0.8";Hammer.defaults={domEvents:false,touchAction:TOUCH_ACTION_COMPUTE,enable:true,inputTarget:null,inputClass:null,preset:[[RotateRecognizer,{enable:false}],[PinchRecognizer,{enable:false},["rotate"]],[SwipeRecognizer,{direction:DIRECTION_HORIZONTAL}],[PanRecognizer,{direction:DIRECTION_HORIZONTAL},["swipe"]],[TapRecognizer],[TapRecognizer,{event:"doubletap",taps:2},["tap"]],[PressRecognizer]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var SINGLE_TOUCH_INPUT_MAP={touchstart:INPUT_START,touchmove:INPUT_MOVE,touchend:INPUT_END,touchcancel:INPUT_CANCEL};var SINGLE_TOUCH_TARGET_EVENTS="touchstart";var SINGLE_TOUCH_WINDOW_EVENTS="touchstart touchmove touchend touchcancel";var SingleTouchInput=function(_Input){inherits(SingleTouchInput,_Input);function SingleTouchInput(){classCallCheck(this,SingleTouchInput);var _this=possibleConstructorReturn(this,(SingleTouchInput.__proto__||Object.getPrototypeOf(SingleTouchInput)).apply(this,arguments));_this.evTarget=SINGLE_TOUCH_TARGET_EVENTS;_this.evWin=SINGLE_TOUCH_WINDOW_EVENTS;_this.started=false;Input.apply(_this,arguments);return _this}createClass(SingleTouchInput,[{key:"handler",value:function handler(ev){var type=SINGLE_TOUCH_INPUT_MAP[ev.type];if(type===INPUT_START){this.started=true}if(!this.started){return}var touches=normalizeSingleTouches.call(this,ev,type);if(type&(INPUT_END|INPUT_CANCEL)&&touches[0].length-touches[1].length===0){this.started=false}this.callback(this.manager,type,{pointers:touches[0],changedPointers:touches[1],pointerType:INPUT_TYPE_TOUCH,srcEvent:ev})}}]);return SingleTouchInput}(Input);function normalizeSingleTouches(ev,type){var all=toArray$1(ev.touches);var changed=toArray$1(ev.changedTouches);if(type&(INPUT_END|INPUT_CANCEL)){all=uniqueArray(all.concat(changed),"identifier",true)}return[all,changed]}function deprecate(method,name,message){var deprecationMessage="DEPRECATED METHOD: "+name+"\n"+message+" AT \n";return function(){var e=new Error("get-stack-trace");var stack=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace";var log=window.console&&(window.console.warn||window.console.log);if(log){log.call(window.console,deprecationMessage,stack)}return method.apply(this,arguments)}}var extend=deprecate(function(dest,src,merge){var keys=Object.keys(src);var i=0;while(i<keys.length){if(!merge||merge&&dest[keys[i]]===undefined){dest[keys[i]]=src[keys[i]]}i++}return dest},"extend","Use `assign`.");var merge=deprecate(function(dest,src){return extend(dest,src,true)},"merge","Use `assign`.");function inherit(child,base,properties){var baseP=base.prototype;var childP=void 0;childP=child.prototype=Object.create(baseP);childP.constructor=child;childP._super=baseP;if(properties){assign$1(childP,properties)}}assign$1(Hammer,{INPUT_START:INPUT_START,INPUT_MOVE:INPUT_MOVE,INPUT_END:INPUT_END,INPUT_CANCEL:INPUT_CANCEL,STATE_POSSIBLE:STATE_POSSIBLE,STATE_BEGAN:STATE_BEGAN,STATE_CHANGED:STATE_CHANGED,STATE_ENDED:STATE_ENDED,STATE_RECOGNIZED:STATE_RECOGNIZED,STATE_CANCELLED:STATE_CANCELLED,STATE_FAILED:STATE_FAILED,DIRECTION_NONE:DIRECTION_NONE,DIRECTION_LEFT:DIRECTION_LEFT,DIRECTION_RIGHT:DIRECTION_RIGHT,DIRECTION_UP:DIRECTION_UP,DIRECTION_DOWN:DIRECTION_DOWN,DIRECTION_HORIZONTAL:DIRECTION_HORIZONTAL,DIRECTION_VERTICAL:DIRECTION_VERTICAL,DIRECTION_ALL:DIRECTION_ALL,Manager:Manager,Input:Input,TouchAction:TouchAction,TouchInput:TouchInput,MouseInput:MouseInput,PointerEventInput:PointerEventInput,TouchMouseInput:TouchMouseInput,SingleTouchInput:SingleTouchInput,Recognizer:Recognizer,AttrRecognizer:AttrRecognizer,Tap:TapRecognizer,Pan:PanRecognizer,Swipe:SwipeRecognizer,Pinch:PinchRecognizer,Rotate:RotateRecognizer,Press:PressRecognizer,on:addEventListeners,off:removeEventListeners,each:each,merge:merge,extend:extend,assign:assign$1,inherit:inherit,bindFn:bindFn,prefixed:prefixed,toArray:toArray$1,inArray:inArray,uniqueArray:uniqueArray,splitStr:splitStr,boolOrFn:boolOrFn,hasParent:hasParent,addEventListeners:addEventListeners,removeEventListeners:removeEventListeners});if(typeof define==="function"&&define.amd){define(function(){return Hammer})}else if(typeof module!=="undefined"&&module.exports){module.exports=Hammer}else{window[exportName]=Hammer}})(window,document,"Hammer");
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
        return (window.innerHeight / window.innerWidth) > 1;
    };

    device.landscape = function () {
        return (window.innerHeight / window.innerWidth) < 1;
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
            window.SLeasy && SLeasy.onResize && SLeasy.onResize();
        } else {
            removeClass("landscape");
            addClass("portrait");
            window.SLeasy && SLeasy.onResize && SLeasy.onResize();
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

    handleOrientation();

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
        id: '',//幻灯容器id
        bg: '',//幻灯容器背景图片
        bgColor: '',//幻灯容器背景颜色
        host: 'images/',//资源目录url
        width: 640,//幻灯宽度
        height: 1008,//幻灯高度
        viewport: 321,//视口大小
        motionTime: 0.8,//切换动画时间
        motionStyle: 0,//动画风格，默认随机
        loopMode: 0,//启用首尾循环模式
        swipeMode: 'y',//滑动模式，xy：上下左右，x：水平，y：垂直
        routerMode: 1,//路由开启模式
        arrowMode: 1,//是否显示滑动指示箭头
        arrowColor: '#fff',//箭头颜色
        alignMode: 'top',//幻灯背景对齐方式
        alignOffset: 0,//对齐偏移值
        preload: 1,//是否对素材预加载
        autoStart: 1,//自动开始跳转默认幻灯
        autoRemoveChildren: true,//每张幻灯子动画全部完毕后，自动删除子动画tween
        debugMode: window.location.href.indexOf('http') == 0 ? 0 : 1,//默认仅当本地环境开启debug模式
        reloadMode: 0,//屏幕旋转自动刷新页面重新适配
        stageMode: 'auto',//舞台适配模式，int数值:小于该指定高度则自动缩放,反之按宽度匹配,width:根据宽度缩放，height:根据高度缩放，auto:根据高宽比例，自动缩放;
        positionMode: 'absolute',//舞台子元素position模式

        //music-------------------------------------------
        musicUrl: '',//背景音乐url
        musicAutoPlay: 1,//背景音乐自动播放
        musicBt: [1, '', 50, 50, 'topRight', 15, 15],//背景音乐按钮[开启状态，sprite图片url，宽度，高度，对齐方式，x轴偏移，y轴偏移]

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
            textStyle: 'font-size:12px;color:#fff', //字体式样
            endAt: 100,
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
            'domReady': function () {
                console.log('SLeasy dom init over~~~~');
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
        title    : $config.title,//当前title
        body     : $('body'),//body标签dom
        viewScale: $config.viewport / $config.width,//幻灯缩放比例因子
        fixHeight: 0,//全屏自适应高度变量，SLeasy.viewport()执行后，会将该值设置为当前自适应全屏高度
        eventArr : [],//需要绑定的事件及元素数据数组
        sliderBox: null,//幻灯框架dom缓存变量
        swipe    : 1,//是否允许滑动幻灯

        sliders    : null,//幻灯dom缓存变量
        sliderIndex: 0,//幻灯当前索引
        subMotion  : null,//幻灯子动画元素dom缓存变量

        details     : null,//详情页dom缓存变量
        detailIndex : 0,//当前详情页索引
        detailMotion: null,//详情页子动画元素dom缓存变量

        loader: null,//loading dom元素缓存变量
        floats: null,//浮动元素dom缓存变量
        canvas: null,//画布元素dom缓存变量

        isMusic       : 0,//音乐状态
        isAnim        : 0,//当前幻灯切换状态
        isDetail      : 0,//详情页是否打开
        isSubMotion   : 0,//当前子动画完成状态
        isDetailMotion: 0,//当前详情页子动画完成状态

        timeLine   : null,//子动画时间线
        fixPropsArr: ['x', 'y', 'width', 'height', 'left', 'right', 'top', 'bottom', 'lineHeight', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'fontSize', 'clip'],//需要修正的属性
        FXDirection: 'upDown',//幻灯切换效果方向
        clearProps : 'x,y,scale,rotationX,rotationY,rotationZ,transform,transformPerspective,webkitTransformOrigin,WebkitTransformOrigin,transformOrigin,zIndex',//动画完成之后需要清除的属性值

        labelHash: {},//标签哈希表
        router   : {},//路由
        preHash  : '',//上一路由哈希值

        userData  : {},//用户自定义数据
        pluginList: [],//插件初始化函数列表

        bitmaps   : {},//ae原生位图序列
        aeBitmaps : {},//ae位图对象序列
        aeLayer   : {},//ae渲染层
        aeStage   : {},//ae渲染舞台
        aeTimeLine: {},//ae时间线

        totalLoad: [],//应用要加载的图片总数组
    }


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
                    if(sliderOrDetail=='slider' || sliderOrDetail=='sliders') return $scope.sliders.eq(value);
                    if(sliderOrDetail=='detail' || sliderOrDetail=='details') return $scope.details.eq(value);
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
    SLeasy.isHttp = function () {
        return (location.href.indexOf('http') == 0) ? true : false;
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
            url    = _router.getRoute(1);

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
    SLeasy.path = function (host, url) {
        if (url.search(/^\/\//) == -1) {
            return host + url;
        } else {
            return url.replace(/^\/\//, '');
        }
    }

    //获取url参数
    SLeasy.getRequest = function (name, debug) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        //参数查找
        var r = window.location.search.substr(1).match(reg);
        if (r != null)return r[2];
        //哈希查找
        var h = window.location.hash.substr(1).match(reg);
        if (h != null)return h[2];
        //调试返回时间错字符串
        if (debug) return ('test' + $.now());
        return '';
    }



    //禁止触摸默认滚动
    function stopDefaultScroll(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    SLeasy.touchScroll = function (alowTouchmove, alowSwipe) {
        //触摸滑动默认行为
        if (alowTouchmove) {
            document.removeEventListener("touchmove", stopDefaultScroll, false);
        } else {
            document.addEventListener("touchmove", stopDefaultScroll, false);
        }

        //幻灯全局swipe
        if (alowSwipe) {
            SLeasy.hammerObj().get('swipe').set({enable: true});
        } else {
            SLeasy.hammerObj().get('swipe').set({enable: false});
        }
    }

    //生成图片序列
    SLeasy.addBitmaps = function (layerName, prefix, start, end, suffix, bit) {
        var picUrlArr = [];
        for (var i = start; i <= end; i++) {
            var picUrl = prefix + bitConvent(i, bit) + suffix;
            picUrlArr.push(picUrl);
        }

        if (!layerName) return picUrlArr;

        //合并位图序列
        if ($scope.bitmaps[layerName] && $scope.bitmaps[layerName].length) {
            return $scope.bitmaps[layerName];
        } else {
            $scope.bitmaps[layerName] = picUrlArr;
            return picUrlArr;
        }

        function bitConvent(num, bit) {
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
    }


    //摇一摇事件封装
    SLeasy.shake = function (start, callback) {
        var myShakeEvent = new Shake({
            threshold: 15, // optional shake strength threshold
            timeout  : 1000 // optional, determines the frequency of event generation
        });

        if (start == 'start') {
            myShakeEvent.start();
            window.addEventListener('shake', callback, false);
        } else if (start == 'stop') {
            window.removeEventListener('shake', callback, false);
            myShakeEvent.stop();
        }
    }


    //时间线控制,用于'时间轴模式'下
    SLeasy.play = function () {
        $scope.timeLine.play();
    }

    SLeasy.pause = function () {
        $scope.timeLine.pause();
    }

    SLeasy.resume = function () {
        $scope.timeLine.resume()
    }

    SLeasy.reverse = function () {
        $scope.timeLine.reverse();
    }

    SLeasy.tweenTo = function () {
        $scope.timeLine.tweenTo();
    }

    SLeasy.tweenFromTo = function () {
        $scope.timeLine.tweenFromTo();
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
        $scope  = SLeasy.scope();

    //设置视口
    SLeasy.viewport = function () {
        //重置body
        $("body").css({"padding": 0, "margin": "0 0"});

        //适配策略
        var minWidth  = SLeasy.is('ios') ? 320 : 321,//最小宽度
            minHeight = 480,//最小高度
            ratio     = $(window).width() / $(window).height(),//当前设备屏幕高宽比
            viewport  = {
                'width': function () {
                    var width           = $config.viewport > minWidth ? $config.viewport : minWidth,
                        viewportContent = 'width=' + width + ',user-scalable=no';
                    return viewportContent;
                },
                'height': function (thresholdHeight) {
                    var width           = $config.viewport > minWidth ? $config.viewport : minWidth,
                        viewHeight      = (thresholdHeight || $config.height) * ($config.viewport / $config.width),
                        height          = viewHeight > minHeight ? viewHeight : minHeight,
                        //viewportContent = 'height=' + height + ',width=' + height * ratio + ',user-scalable=no';
                        viewportContent = 'width=' + height * ratio + ',user-scalable=no';
                    return viewportContent;
                },
                'auto': function () {
                    // ratio = $(window).width() / $(window).height();//刷新当前宽高比
                    var viewportContent = $config.width / $config.height >= ratio ? viewport.width() : viewport.height();
                    return viewportContent;
                },
                'scroll': function () {
                    var width           = $config.viewport > minWidth ? $config.viewport : minWidth,
                        viewportContent = 'width=' + width + ',user-scalable=no';
                    return viewportContent;
                },
                'threshold': function (threshold) {//阈值模式,当stageMode为指定数值的时候,按阈值高度等比缩放
                    // alert($config.width / threshold >= ratio)
                    var viewportContent = $config.width / threshold >= ratio ? viewport.width() : viewport.height(threshold);
                    return viewportContent;
                },
                'device-width':function () {
                    viewportContent = 'width=device-width,user-scalable=no';
                    return viewportContent;
                }
            };


        var _content = (typeof $config.stageMode == 'number') ? viewport['threshold']($config.stageMode) : viewport[$config.stageMode]();
        $("head").prepend('<meta id="SLeasy_viewport" name="viewport" content="' + _content + '"><meta name="format-detection" content="telephone=no, email=no,adress=no"/>');
        if ($config.stageMode == 'auto' || typeof $config.stageMode == 'number') {
            SLeasy.onResize = function () {
                $config.reloadMode && window.location.reload();
            }
        }

        var sliderBoxHeight = $config.height * $scope.viewScale;
        //$scope.fixHeight=$(window).height();//设置自适应全屏高度
        $scope.fixHeight = $(window).height() > sliderBoxHeight ? sliderBoxHeight : $(window).height();//设置自适应全屏高度
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
;(function (SLeasy, $) {
    var $config = SLeasy.config(),
        $scope  = SLeasy.scope();

    //html
    SLeasy.slider = function (opt) {

        //背景对齐策略
        var bgAlign = {
            "top"   : 'center ' + $config.alignOffset + 'px',
            "center": 'center ' + (($scope.fixHeight - $config.height * $scope.viewScale) / 2 + $config.alignOffset) + 'px',
            "bottom": 'center ' + ($scope.fixHeight - $config.height * $scope.viewScale + $config.alignOffset) + 'px',
            "photo" : 'center center'
        }

        //slider label hash
        if (typeof opt.label != 'undefined') {
            $scope.labelHash[opt.label] = opt.index;
        }

        //slider
        var html = '\
			<div class="SLeasy_' + (opt.type || 'sliders') + ' ' + (opt.class || '') + '"\
			style="\
			width:' + $config.viewport + 'px;\
			height:' + ($config.positionMode == "absolute" || opt.type != 'sliders' ? $scope.fixHeight : '') + 'px;\
			background-image:' + sliderBg() + ';\
			background-repeat:' + (opt.bgRepeat || "no-repeat") + ';\
			background-size:100% auto;\
			background-position:' + bgAlign[(opt.alignMode || $config.alignMode)] + ';\
			background-color:' + (opt.bgColor || "transparent") + ';\
			overflow:' + (opt.scroll ? "auto" : ($config.positionMode == "absolute" ? "hidden" : "visible")) + ';\
			position:absolute; display:none;\
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
            "floats" : 'floatElement'
        }

        //不同类型子动画元素生成策略
        var subElement = {
            "img"      : function (opt) {
                //img to div
                return '<div\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_' + (subName[opt.type] || opt.type) + ' ' + (typeof opt.toDiv != 'undefined' && !opt.toDiv ? 'noDiv' : 'toDiv') + '"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
				<img src="' + SLeasy.path($config.host, opt.img) + '">\
				</div>';
            },
            "shadownBt": function (opt) {
                return '<div\
                id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				name="' + (opt.name || 'SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index) + '"\
				class="' + (opt.class || '') + ' SLeasy_' + (subName[opt.type] || opt.type) + ' SLeasy_shadownBt toDiv"\
				style="position:absolute; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
				<img src="' + SLeasy.shadownBt + '" width="' + opt.shadownBt[0] + '" height="' + opt.shadownBt[1] + ' ' + (opt.class || '') + '">\
				</div>';
            },
            "dom"      : function (opt) {
                return '<div\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_' + (subName[opt.type] || opt.type) + '"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
				<div id="' + opt.dom + '"></div>\
				</div>';
            },
            "html"     : function (opt) {
                return '<div\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_' + (subName[opt.type] || opt.type) + '"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
				' + opt.html + '\
				</div>';
            },
            "svg"      : function (opt) {
                return '<div\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_svg SLeasy_' + (subName[opt.type] || opt.type) + '"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
				<img src="' + SLeasy.path($config.host, opt.svg) + '">\
				</div>';
            },
            "canvas"   : function (opt) {
                return '<div\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_' + (subName[opt.type] || opt.type) + '"\
				style="transform: matrix(1, 0, 0, 1, 0, 0);position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
				<canvas id="' + opt.canvas[0] + '" class="SLeasy_canvas" width="' + opt.canvas[1] + '" height="' + opt.canvas[2] + '" style="position:absolute;top:0px;left:0px;width:' + opt.canvas[1] * $scope.viewScale + 'px;height:' + opt.canvas[2] * $scope.viewScale + 'px"></canvas>\
				</div>';
            },
            "text"     : function (opt) {
                return '<div\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_text SLeasy_' + (subName[opt.type] || opt.type) + '"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
				' + opt.text + '\
				</div>';
            },
            'audio'    : function (opt) {
                return '<audio\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_audio SLeasy_' + (subName[opt.type] || opt.type) + '"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';" \
				src="' + SLeasy.path($config.host, opt.audio) + '" preload="auto">\
				</audio>';
            },
            'video'    : function (opt) {
                return '<video\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_video SLeasy_' + (subName[opt.type] || opt.type) + '"\
				style="background-image:url(' + opt.poster + ');background-size:100% auto;position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';" \
				src="' + opt.video + '" type="' + (opt.mediaType || 'video/mp4') + '" poster="' + opt.poster + '" x5-video-player-type="h5" x5-video-player-fullscreen="false" x5-video-orientation="landscape|portrait" ' + (typeof opt.controls != 'undefined' && !opt.controls ? '' : 'controls' ) + (typeof opt.playsinline != 'undefined' && !opt.playsinline ? '' : ' webkit-playsinline playsinline' ) + '>\
				</video>';
            },
            'iframe'   : function (opt) {
                return '<iframe\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_iframe SLeasy_' + (subName[opt.type] || opt.type) + '"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';" \
				src="' + opt.iframe + '" frameborder="0">\
				</iframe>';
            },
            "input"    : function (opt) {
                //
                var inputHtml = {
                    'text'    : function () {
                        return '<input type="' + opt.input + '"\
						id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
						class="' + (opt.class || '') + ' SLeasy_input SLeasy_' + (subName[opt.type] || opt.type) + '"\
						style="border:0;padding:0;position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';"\
						value="' + (typeof opt.value != "undefined" ? opt.value : "") + '"\
                        placeholder="' + (opt.placeholder || '') + '"\
                        >';
                    },
                    'textArea': function () {
                        return '<textArea type="' + opt.input + '"\
						id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
						class="' + (opt.class || '') + ' SLeasy_input SLeasy_' + (subName[opt.type] || opt.type) + '"\
						style="border:0;position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';"\
						value="' + (typeof opt.value != "undefined" ? opt.value : "") + '"></textArea>';
                    },
                    'select'  : function () {
                        var opitionHtml = '';
                        for (var i = 0; i < opt.opition.length; i++) {
                            var row = '<option value="' + opt.opition[i][1] + '">' + opt.opition[i][0] + '</option>';
                            opitionHtml += row;
                        }
                        return '<select\
						id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
						class="' + (opt.class || '') + ' SLeasy_input SLeasy_' + (subName[opt.type] || opt.type) + '"\
						style="-webkit-appearance:none;appearance:none;border:0px solid;background:transparent;position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
						' + opitionHtml + '</select>';
                    }
                }

                return inputHtml[opt.input]();
            },
            "plugin"   : function (opt) {
                var id = 'SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index;
                //把插件初始化函数以及挂载点id(node)以及插件初始化回调注入到$scope.pluginList,在SLeasy.domReady后统一初始化
                $scope.pluginList.push([opt.plugin[0], $.extend(opt.plugin[1], {node: id}), opt.plugin[2]]);
                return '<div id="' + id + '" \
				class="' + (opt.class || '') + ' SLeasy_' + (subName[opt.type] || opt.type) + '"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
				</div>';
            },
            "ae"       : function (opt) {
                //添加ae渲染层
                SLeasy.addAeLayer = function (stageObj, layerName, addAt, prefix, start, end, suffix, bit) {
                    SLeasy.addBitmaps(layerName, prefix, start, end, suffix, bit);
                    //渲染层初始化
                    $scope.aeBitmaps[layerName] = [];
                    for (var i = 0; i < $scope.bitmaps[layerName].length; i++) {
                        var _bitmap = new createjs.Bitmap($scope.bitmaps[layerName][i]);
                        $scope.aeBitmaps[layerName].push(_bitmap);
                    }
                    $scope.aeLayer[layerName] = new createjs.Container();
                    $scope.aeLayer[layerName].frame = 0;
                    $scope.aeLayer[layerName].name = layerName;//设置该渲染层name,以便回调中获取
                    $scope.aeLayer[layerName].sliderIndex = stageObj.sliderIndex;
                    if (addAt == 'auto') {
                        stageObj.addChild($scope.aeLayer[layerName]);
                    } else {
                        stageObj.addChildAt($scope.aeLayer[layerName], addAt);
                    }


                    //ticker
                    TweenMax.ticker.addEventListener("tick", function () {
                        $scope.aeLayer[layerName].removeAllChildren();
                        //根据当前序列容器的frame值添加相应索引值的位图对象
                        $scope.aeLayer[layerName].addChild($scope.aeBitmaps[layerName][$scope.aeLayer[layerName].frame]);
                    });

                    return $scope.aeLayer[layerName];
                }


                //播放渲染层
                SLeasy.playAeLayer = function (aeOpt) {
                    var frame = Math.abs(aeOpt.end - aeOpt.start),
                        time  = frame / (aeOpt.fps || 25);
                    var aeTl = $scope.aeTimeLine[aeOpt.timeline] = $scope.aeTimeLine[aeOpt.timeline] || new TimelineMax();

                    aeTl.add(
                        TweenMax.to(aeOpt.aeLayer, time,
                            {
                                roundProps: "frame",
                                frame     : aeOpt.end,
                                ease      : SteppedEase.config(frame),
                                repeat    : aeOpt.repeat,
                                onStart   : aeOpt.onStart,
                                onUpdate  : aeOpt.onUpdate,
                                onComplete: aeOpt.onComplete,
                            }
                        ), '+=' + (aeOpt.offsetTime || 0)
                    );
                }


                var config = {
                    stage : '_stage_',
                    width : '640',
                    height: '1136',
                    fps   : 25,
                    repeat: 1,
                    layer : [],
                    onInit: function () {
                    }
                }
                $.extend(config, opt.ae);


                //内置ae插件初始化函数
                function aeMotion(aeOpt) {
                    //AE
                    var stage = $scope.aeStage[aeOpt.stage] = new createjs.Stage(aeOpt.node);
                    stage.sliderIndex = aeOpt.sliderIndex;
                    stage.name = config.stage;

                    for (var i = 0; i < aeOpt.layer.length; i++) {
                        var layerArg  = aeOpt.layer[i],
                            layerName = layerArg[0],
                            addAt     = 'auto',
                            prefix    = layerArg[1],
                            start     = layerArg[2],
                            end       = layerArg[3],
                            suffix    = layerArg[4],
                            bit       = layerArg[5];

                        $scope.aeLayer[layerName] = SLeasy.addAeLayer(stage, layerName, addAt, prefix, start, end, suffix, bit);

                        var frame = end - start,
                            time  = frame / (aeOpt.fps || 25);


                        $scope.aeLayer[layerName].time = time;
                        $scope.aeLayer[layerName].tweenData = {
                            frame     : frame,
                            roundProps: "frame",
                            ease      : SteppedEase.config(frame),
                            repeat    : aeOpt.repeat,
                            onStart   : aeOpt.onStart,
                            onUpdate  : aeOpt.onUpdate,
                            onComplete: aeOpt.onComplete
                        }
                    }

                    //ticker
                    TweenMax.ticker.addEventListener("tick", function () {
                        stage.update();
                    });

                    //console.log(stage);
                    return stage;

                }


                //把ae内置插件,初始化函数以及挂载点id(node)以及插件初始化回调注入到$scope.pluginList,在SLeasy.domReady后统一初始化
                config.node = config.stage;
                config.sliderIndex = sliderIndex;//并入当前ae插件所在的幻灯索引值
                $scope.pluginList.push([aeMotion, config, config.onInit]);

                return '<div\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_canvas SLeasy_' + (subName[opt.type] || opt.type) + '"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';">\
				<canvas id="' + config.stage + '" class="SLeasy_canvas SLeasy_ae" width="' + config.width + '" height="' + config.height + '" style="position:absolute;top:0px;left:0px;width:' + config.width * $scope.viewScale + 'px;height:' + config.height * $scope.viewScale + 'px"></canvas>\
				</div>';
            },
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
                    id     : 'SLeasy_' + (subName[type] || type) + '_' + subMotion.index,
                    event  : subMotion.event,
                    onEvent: subMotion.onEvent,
                }
                $scope.eventArr.push(info);//需绑定事件的子元素相关信息入栈
            }

        }

        return html
    }

})(
    window.SLeasy = window.SLeasy || {},
    jQuery
);
// SLeasy3-imgToDiv
;(function (SLeasy, $) {
    var $config = SLeasy.config(),
        $scope = SLeasy.scope();

    SLeasy.imgToDiv = function ($myDom) {
        var $dom = $myDom || $scope.sliderBox;
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
// SLeasy3-fix
;(function (SLeasy) {
    var $config = SLeasy.config(),
        $scope  = SLeasy.scope();


    //子元素视口缩放动画坐标变换,参数为需要变换的slider/detail配置对象数组
    SLeasy.fixPosition = function (opt) {
        //console.log(opt)
        //背景对齐模式导致的子元素y轴偏移策略
        var yOffset = {
                "top": $config.alignOffset,
                "center": ($scope.fixHeight - $config.height * $scope.viewScale) / 2 + $config.alignOffset,
                "bottom": $scope.fixHeight - $config.height * $scope.viewScale + $config.alignOffset
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
                    subMotions[j].set = $.extend({x: bt[2], y: bt[3]}, subMotions[j].set);
                }

                var subIn   = subMotions[j].in || {},
                    subShow = subMotions[j].show || {},
                    subSet  = subMotions[j].set || {},
                    subTo   = subMotions[j].to || [];

                SLeasy.fixProps(subIn);
                SLeasy.fixProps(subShow);
                SLeasy.fixProps(subSet);

                if (subTo.length) {
                    for (var k = 0; k < subTo.length; k++) {
                        SLeasy.fixProps(subTo[k].to);

                    }
                }

                //根据幻灯对齐方式参数，进行y轴自适应修正
                if (subIn.y) subIn.y += yOffset[$config.alignMode];
                if (subShow.y) subShow.y += yOffset[$config.alignMode];
                if (subSet.y) subSet.y += yOffset[$config.alignMode];
                if (subTo.length) {
                    for (var l = 0; l < subTo.length; l++) {
                        if (subTo[l].to && typeof subTo[l].to.y != 'undefined') subTo[l].to.y += yOffset[$config.alignMode];
                    }
                }
            }
        }
    }

    //属性缩放变换
    SLeasy.fixProps = function fixProps(transObj) {
        var addPX = {//需要添加px单位的属性
            'lineHeight': true
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
                } else {
                    props = parseInt(props);
                    postfix = addPX[$scope.fixPropsArr[i]] ? 'px' : 0;//确定后缀值
                    transObj[$scope.fixPropsArr[i]] = props * $scope.viewScale + postfix;//按照viewScale等比缩放
                }
            }
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
        $scope  = SLeasy.scope();


    //subMotion,参数:为单个slider/detail配置对象数据
    SLeasy.subMotion = function (subMotionArr, type) {
        console.log('subMotion~~~');
        if (!subMotionArr || !subMotionArr.length) return;

        //不同类型幻灯对应的子元素关键字标识
        var subName = {
            "sliders": "subMotion",
            "details": "detailMotion",
            'floats' : 'floatElement',
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
            'floats' : ''
        }

        //console.log(subMotionArr);
        subCallback[type] && subCallback[type]();//执行config相应类型的子动画回调


        //根据不同类型（幻灯或详情页），初始化timeLine及设置子动画开始、完成状态
        if (type && type != 'sliders') {
            var tl = new TimelineMax({autoRemoveChildren: $config.autoRemoveChildren, paused: true});
            $scope.isDetailMotion = 0;//详情页子动画开始、完成状态
        } else {
            var tl = $scope.timeLine;
            $scope.isSubMotion = 0;//子动画是否正在播放状态
        }


        var totalTime = 0, startTime = 0;
        for (var i = 0; i < count; i++) {
            var subMotion    = subMotionArr[i],//当前子动画
                preSubMotion = subMotionArr[i - 1],//上一子动画
                $dom         = $('#SLeasy_' + (subName[type] || type) + '_' + subMotion.index),//当前子动画元素dom
                time         = subMotion.time || 0,//time
                preTime      = preSubMotion && preSubMotion.time ? preSubMotion.time : 0,
                /*
                 如果是第一个子动画，则当前子动画总时间累加值为，当前子动画时间，
                 如果不是第一个子动画，则当前子动画总时间累加值为，当前子动画时间:
                    如果当前子动画有设置start值:
                        如果preTime - subMotion.start > subMotion.time，累加0
                        否则累加subMotion.time - (preTime - subMotion.start)
                    如果当前子动画没有设置start值，则累加上一子动画的运动时间
                 */
                totalTime    = preSubMotion ? (totalTime + (subMotion.start ? (preTime - subMotion.start > subMotion.time ? 0 : subMotion.time - (preTime - subMotion.start)) : subMotion.time)) : subMotion.time,
                /*
                 如果是第一个子动画，则子动画开始时间为幻灯页运动完成的时间，
                 如果不是第一个子动画，则之前累加的startTime，加上当前的start值:
                    如果当前子动画没有设置start值，则累加上一子动画的运动时间，以连接其后
                    如果当前子动画没有设置运动时间time，则直接加0
                 */
                startTime    = preSubMotion ? (startTime + (time ? (typeof subMotion.start != 'undefined' ? subMotion.start : preTime) : 0)) : $config.motionTime,
                subIn        = $.extend({force3D: true}, subMotion.in || {}),//in
                subShow      = $.extend({display: 'block', force3D: true}, subMotion.show || {}),//show
                set          = subMotion.set ? $.extend({position: 'absolute'}, subMotion.set) : {position: 'absolute'};//set

            //判断当前幻灯是否包含ae渲染层
            if ($dom.find('.SLeasy_ae').length) {
                //如果渲染层所属的sliderIndex等于当前幻灯索引,则在子元素动画开始时播放ae渲染层时间线
                $.extend(subShow, {
                    onStart: function () {
                        $.each($scope.aeLayer, function (index, aeLayer) {
                            if (aeLayer.sliderIndex == $scope.sliderIndex) {
                                aeLayer.frame = 0;//重置帧时间线
                                T.to(aeLayer, aeLayer.time, aeLayer.tweenData);
                            }
                        });
                    }
                })
            }

            //console.log(subMotion);
            //set
            subMotion.set && T.set($dom, subMotion.set);

            //add label
            subMotion.label && tl.addLabel(subMotion.label);

            //add pause
            subMotion.pause && tl.addPause();

            //add motion
            tl.add(T.fromTo($dom, time, subIn, subShow), startTime);


            $scope.isSubMotion = 1;//子动画是否正在播放状态


            //add pause to
            subMotion.pauseTo && tl.addPause();

            //to
            if (subMotion.to) {
                for (
                    var j = 0; j < subMotion.to.length; j++) {
                    var to         = $.extend({force3D: true}, subMotion.to[j]),
                        preTo      = subMotion.to[j - 1] || {},
                        time       = to.time || 0.4,
                        offsetTime = preTo && (preTo.time - to.start) || 0//和上个子动画之间的间隔时间
                        ;

                    var dom = $(SLeasy.label(to.el));
                    //console.log('===========================');
                    //console.log(dom);
                    tl.add(T.to(dom, time, to.to), '-=' + offsetTime);
                }
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
        //tl.progress(0.999).progress(0);
        tl.play();


    }

    //play
    SLeasy.play = function (from) {
        $scope.timeLine.play(from);
    }

    //pause
    SLeasy.pause = function (atTime) {
        $scope.timeLine.pause(atTime);
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
        $scope  = SLeasy.scope();

    //getFX 参数为方向和风格索引，默认方向为scope中的FXDirection,风格为config中的motionStyle
    SLeasy.getMotionFX = function (direction, style, reverse) {
        //内置动画式样数组
        var motionFX = {
            leftRight: [//左右
                {
                    set: {},
                    in: {x: $config.viewport, y: 0, autoAlpha: 0, ease: Expo.easeInOut},
                    show: {x: 0, y: 0, autoAlpha: 1, ease: Expo.easeInOut},
                    out: {x: -$config.viewport, y: 0, autoAlpha: 0, ease: Expo.easeInOut}
                },
                {
                    set: {transformPerspective: 400, backfaceVisibility: 'hidden'},
                    in: {rotationY: 90, autoAlpha: 0, ease: Expo.easeInOut},
                    show: {rotationY: 0, autoAlpha: 1, ease: Expo.easeInOut},
                    out: {rotationY: -90, autoAlpha: 0, ease: Expo.easeInOut}
                },
                {
                    set: {transformOrigin: '50% 120%'},
                    in: {rotationZ: 90, autoAlpha: 0, ease: Expo.easeInOut},
                    show: {rotationZ: 0, autoAlpha: 1, ease: Expo.easeInOut},
                    out: {rotationZ: -90, autoAlpha: 0, ease: Expo.easeInOut}
                },
                {
                    set: {
                        transformOrigin: '50% 50% -' + $config.width * $scope.viewScale / 2,
                        transformPerspective: 400,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                    },
                    in: {rotationY: 90, autoAlpha: 1, ease: Expo.easeInOut, backfaceVisibility: 'hidden'},
                    show: {rotationY: 0, autoAlpha: 1, ease: Expo.easeInOut, backfaceVisibility: 'hidden'},
                    out: {rotationY: -90, autoAlpha: 1, ease: Expo.easeInOut, backfaceVisibility: 'hidden'}
                },
                {
                    in: {autoAlpha: 0, ease: Linear.easeNone},
                    show: {autoAlpha: 1, ease: Linear.easeNone},
                    out: {autoAlpha: 0, ease: Linear.easeNone}
                },
                {
                    set: {},
                    in: {x: $config.viewport, y: 0, autoAlpha: 0, ease: Linear.easeNone},
                    show: {x: 0, y: 0, autoAlpha: 1, ease: Linear.easeNone},
                    out: {x: -$config.viewport, y: 0, autoAlpha: 0, ease: Linear.easeNone}
                },
            ],
            upDown: [//上下
                {
                    set: {},
                    in: {x: 0, y: $scope.fixHeight, autoAlpha: 0, ease: Expo.easeInOut},
                    show: {x: 0, y: 0, autoAlpha: 1, ease: Expo.easeInOut},
                    out: {x: 0, y: -$scope.fixHeight, autoAlpha: 0, ease: Expo.easeInOut}
                },
                {
                    set: {transformPerspective: 400, backfaceVisibility: 'hidden'},
                    in: {rotationX: -90, autoAlpha: 0, ease: Expo.easeInOut},
                    show: {rotationX: 0, autoAlpha: 1, ease: Expo.easeInOut},
                    out: {rotationX: 90, autoAlpha: 0, ease: Expo.easeInOut}
                },
                {
                    set: {transformOrigin: '120% 50%'},
                    in: {rotationZ: -90, autoAlpha: 0, ease: Expo.easeInOut},
                    show: {rotationZ: 0, autoAlpha: 1, ease: Expo.easeInOut},
                    out: {rotationZ: 90, autoAlpha: 0, ease: Expo.easeInOut}
                },
                {
                    set: {
                        transformOrigin: '50% 50% -' + $scope.fixHeight / 2,
                        transformPerspective: 400,
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                    },
                    in: {rotationX: -90, autoAlpha: 1, ease: Expo.easeInOut, backfaceVisibility: 'hidden'},
                    show: {rotationX: 0, autoAlpha: 1, ease: Expo.easeInOut, backfaceVisibility: 'hidden'},
                    out: {rotationX: 90, autoAlpha: 1, ease: Expo.easeInOut, backfaceVisibility: 'hidden'}
                },
                {
                    in: {autoAlpha: 0, ease: Linear.easeNone},
                    show: {autoAlpha: 1, ease: Linear.easeNone},
                    out: {autoAlpha: 0, ease: Linear.easeNone}
                },
                {
                    set: {},
                    in: {x: 0, y: $scope.fixHeight, autoAlpha: 0, ease: Linear.easeNone},
                    show: {x: 0, y: 0, autoAlpha: 1, ease: Linear.easeNone},
                    out: {x: 0, y: -$scope.fixHeight, autoAlpha: 0, ease: Linear.easeNone}
                }
            ]
        };

        //获取切换式样
        var FXIndex = ($config.motionStyle == 'rand') ? Math.round(Math.random() * (motionFX.leftRight.length - 1)) : $config.motionStyle;
        FXIndex = typeof style != 'undefined' ? style : FXIndex;
        var FXDirection = direction || $scope.FXDirection;

        //反向动效
        if(reverse){
            var fx={};
            fx.set=motionFX[FXDirection][FXIndex].set;
            fx.in=motionFX[FXDirection][FXIndex].out;
            fx.show=motionFX[FXDirection][FXIndex].show;
            fx.out=motionFX[FXDirection][FXIndex].in;
            console.log(fx);
            return fx;
        }else{
            return motionFX[FXDirection][FXIndex];
        }

    }


})(window.SLeasy = window.SLeasy || {});
// SLeasy3-transition
;(function (SLeasy, $, T) {
    var $config = SLeasy.config(),
        $scope  = SLeasy.scope();

    //go slider
    SLeasy.goSlider = function (index) {
        var nextIndex = SLeasy.nextIndex(index);
        if ($config.routerMode) {
            //var detailHash=$scope.router.getRoute(1);
            $scope.router.setRoute(0, nextIndex + '');//设置路由
        } else {
            SLeasy.transit(nextIndex);
        }
    }

    SLeasy.nextIndex = function (index) {
        //如果是label标签，并且不包含‘—=’或者‘+=’,则获取标签对应的索引值
        var index = (typeof index == 'number' || index.indexOf('-=') != -1 || index.indexOf('+=') != -1) ? index : SLeasy.label(index);
        console.log(index);
        var totalIndex = $scope.sliders.length - 1,//最大索引值
            total      = totalIndex + 1,//幻灯总数
            nextIndex
            ;

        if (!$config.loopMode) {//非循环模式
            //不同参数类型策略，获取下一页索引，int或者string,如：‘+=1，-=1’
            var indexType = {
                "number": function () {
                    if (index >= 0 && index <= totalIndex) {//索引边界内
                        nextIndex = index;
                    } else {//索引边界外
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
                    } else if (_arr[0] == '+') {
                        nextIndex = ($scope.sliderIndex + parseInt(_arr[1]) > totalIndex) ? totalIndex : $scope.sliderIndex + parseInt(_arr[1]);
                    } else {
                        return alert('幻灯跳转索引值错误！');
                    }
                },
            }

            if (typeof indexType[(typeof index)] == 'undefined') return alert('幻灯索引参数错误~！');
            indexType[(typeof index)]();//策略执行
            //$scope.sliderIndex=nextIndex;//更新当前slider索引
            return nextIndex;

        } else {//循环模式
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
                        return alert('幻灯跳转索引值错误！');
                    }
                },
            }
            if (typeof indexType[(typeof index)] == 'undefined') return alert('幻灯索引参数错误~！');
            ;
            indexType[(typeof index)]();//策略执行
            //$scope.sliderIndex=nextIndex;//更新当前slider索引
            return nextIndex;
        }

    }

    SLeasy.transitFX = function (nextIndex) {
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
        customFXAguments = $config.sliders[nextIndex].motionFX || null;
        customFX = customFXAguments ? SLeasy.getMotionFX(customFXAguments[0], customFXAguments[1], customFXAguments[2]) : {};


        //in
        if ($scope.sliderIndex < nextIndex) {
            if ($scope.sliderIndex == 0 && nextIndex == $config.sliders.length - 1) {//为最首，最末页情况
                _in = $.extend({display: 'block'}, (customFX.out || motionFX.out));
            } else {
                _in = $.extend({display: 'block'}, (customFX.in || motionFX.in));
            }
        } else {
            if ($scope.sliderIndex == $config.sliders.length - 1 && nextIndex == 0) {//为最首，最末页情况
                _in = $.extend({display: 'block'}, (customFX.in || motionFX.in));
            } else {
                _in = $.extend({display: 'block'}, (customFX.out || motionFX.out));
            }
        }

        //out
        if ($scope.sliderIndex < nextIndex) {
            if ($scope.sliderIndex == 0 && nextIndex == $config.sliders.length - 1) {//为最首，最末页情况
                _out = $.extend({display: 'none'}, (customFX.in || motionFX.in));
            } else {
                _out = $.extend({display: 'none'}, (customFX.out || motionFX.out));
            }
        } else {
            if ($scope.sliderIndex == $config.sliders.length - 1 && nextIndex == 0) {//为最首，最末页情况
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
        _show = $.extend({//show FX
            onStart   : function () {
                var currentSlider    = $scope.sliders.eq($scope.sliderIndex),//当前幻灯
                    currentSubMotion = currentSlider.find($scope.subMotion);//当前幻灯子元素
                var nextSlider = $scope.sliders.eq(nextIndex);//下一幻灯

                //如果下一页是scroll模式
                if ($config.sliders[nextIndex].scroll) {
                    SLeasy.touchScroll(true,false);
                    nextSlider.scroll(function (e) {
                        //console.log(e);
                        var scrollTop    = e.target.scrollTop,
                            scrollTopMax = e.target.scrollTopMax || Math.floor(e.target.scrollHeight-$scope.fixHeight);
                        //console.log(scrollTop + ':' + scrollTopMax);
                        //如果autoSwitch参数未设置（即默认状态），或者切换方向上的参数值为false，则自动切换幻灯页
                        (!$config.sliders[nextIndex].autoSwitch || $config.sliders[nextIndex].autoSwitch[0]) && scrollTop<=0 && SLeasy.goSlider(nextIndex-1);
                        (!$config.sliders[nextIndex].autoSwitch || $config.sliders[nextIndex].autoSwitch[1]) && scrollTop>=scrollTopMax && SLeasy.goSlider(nextIndex+1);
                    })
                }else{
                    SLeasy.touchScroll(false,true);
                    console.log('can swipe~!')
                }
                if ($config.sliders[nextIndex].onStart) $config.sliders[nextIndex].onStart();//单页onStart回调

                //清除幻灯内联式样,!!!!~~~~(幻灯一定要去除zIndex和transform:matrix3d属性,不然在移动设备上,带有3d属性的子元素会出现穿透幻灯(父元素)现象)
                T.set(currentSubMotion, {clearProps: $scope.clearProps, display: 'none'});//清除子动画图片内联式样
                T.set(currentSlider, {clearProps: $scope.clearProps});

                //sub motion
                var subMotionArr = $config.sliders[nextIndex].subMotion;
                SLeasy.subMotion(subMotionArr, 'sliders');
            },
            onComplete: function () {
                if ($config.sliders[nextIndex].onComplete) $config.sliders[nextIndex].onComplete();//单页onComplete回调
                $scope.isAnim = 0;//重置运动状态
                //console.log($scope.labelHash);
            },
        }, (customFX.show || motionFX.show));
        _set = customFX.set || motionFX.set;

        //force3D
        _in = $.extend({force3D: true}, _in);
        _out = $.extend({force3D: true}, _out);
        _show = $.extend({force3D: true}, _show);


        return {
            in  : _in,
            show: _show,
            out : _out,
            set : _set
        }

    }

    SLeasy.transit = function (nextIndex) {
        if ($scope.sliders.length == 0) return alert('当前没有任何幻灯json数据~!');
        if ($scope.isAnim) return;
        $scope.isAnim = 1;//重置运动状态

        var currentSlider = $scope.sliders.eq($scope.sliderIndex),//当前幻灯
            //nextIndex=SLeasy.nextIndex(index),//下一幻灯索引
            nextSlider    = $scope.sliders.eq(nextIndex),//下一幻灯
            FX            = SLeasy.transitFX(nextIndex)//切换效果
            ;
        //设置该页标题
        var title = $config.sliders[nextIndex].title || $config.title;
        if (title && title != $scope.title) {
            SLeasy.title(title);
            $scope.title = title;
        }


        //set
        T.set(currentSlider, FX.set);
        T.set(nextSlider, $.extend(FX.set, $config.sliders[nextIndex].set));
        $config.on['sliderChange'](nextIndex);//幻灯切换回调


        //冻结并清除当前子动画
        if (currentSlider[0] != nextSlider[0]) $scope.timeLine.clear();

        //动画切换执行
        var motionTime = $config.sliders[nextIndex].time || $config.motionTime;
        if (currentSlider[0] == nextSlider[0]) {
            //如果上下页是同一页，则只执行to动画及子动画
            T.to(currentSlider, motionTime, $.extend({display: 'block'}, FX.show));
            /*currentSlider.fadeIn($config.motionTime*1000,function(){
             //sub motion
             var subMotionArr=$config.sliders[nextIndex].subMotion;
             //如果正在关闭详情页则不播放子动画
             console.log($scope.isSubMotion);
             if(!$scope.isSubMotion) SLeasy.subMotion(subMotionArr,'sliders');
             $scope.isAnim=0;//重置运动状态
             });*/
        } else {
            //清除所有ae渲染层tween
            $.each($scope.aeLayer, function (index, aeLayer) {
                T.killTweensOf(aeLayer);
            })

            //slider切换
            T.to(currentSlider, motionTime, FX.out);
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
        $scope  = SLeasy.scope();


    //goDetail
    SLeasy.goDetail = function (index) {
        var nextIndex = SLeasy.nextDetailIndex(index);
        if ($config.routerMode) {
            $scope.router.setRoute(1, nextIndex + '');//设置路由
        } else {
            SLeasy.detailTransit(nextIndex);
        }
    }

    SLeasy.nextDetailIndex = function (index) {
        return index = (typeof index == 'number') ? index : SLeasy.label(index);//如果是label标签，则获取标签对应的索引值
    }

    SLeasy.detailFX = function (index) {
        var detail   = $config.details[index] || (alert('详情页索引参数错误~！')),
            motionFX = detail.motionFX || null,
            motionFX = motionFX ? SLeasy.getMotionFX(motionFX[0], motionFX[1]) : SLeasy.getMotionFX('leftRight', 0),
            _in      = $.extend(motionFX.in, {display: 'block'}),
            _show    = $.extend(motionFX.show, {
                onStart   : function (e) {
                    detail.scroll ? SLeasy.touchScroll(true, false) : SLeasy.touchScroll(false, false);//禁止触摸默认滚动+禁止slider滑动手势
                    detail.onStart && detail.onStart();
                    SLeasy.subMotion(detail.subMotion, 'details');
                    $scope.isDetail = 1;//详情页已打开
                },
                onComplete: function (e) {
                    detail.onComplete && detail.onComplete();
                }
            }),
            _set     = $.extend({zIndex: 1}, detail.set) || {};


        return {
            in  : _in,
            show: _show,
            set : _set
        }

    }

    SLeasy.detailTransit = function (index) {
        //如果详情页处于打开状态未关闭，则return
        if ($scope.isDetail) return;
        //索引边界检查
        if (typeof index == 'undefined' || index < 0 || index > $config.details.length - 1) return;

        $scope.detailIndex = index;

        var detail = $config.details[index],
            dom    = $scope.details.eq(index),
            FX     = SLeasy.detailFX(index),
            time   = detail.time || $config.motionTime
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
    SLeasy.closeDetail = function (index,callback) {
        var nextIndex = SLeasy.nextDetailIndex(index);
        if ($config.routerMode) {
            var sliderHash = $scope.router.getRoute(1)
            $scope.router.setRoute(1, 'html');//设置路由
        } else {
            SLeasy.closeDetailTransit(nextIndex,callback);
        }
    }

    SLeasy.closeDetailTransit = function (index,callback) {
        //如果详情页处于打开状态未关闭，则return
        if (!$scope.isDetail) return;
        //索引边界检查
        if (typeof index == 'undefined' || index < 0 || index > $config.details.length - 1) return;

        var detail     = $config.details[index],
            dom        = $scope.details.eq(index),
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
            FX         = SLeasy.detailFX(index),
            time       = detail.time || $config.motionTime
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
        $scope  = SLeasy.scope(),
        sliderBox;//hammerObj

    //get hammerObj
    SLeasy.hammerObj = function () {
        return sliderBox ? sliderBox : alert('hammerObj尚未初始化~！');
    }

    //event bind
    SLeasy.eventBind = function () {
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
                $scope.swipe && SLeasy.goSlider('+=1');
            });
            sliderBox.on('swiperight', function (e) {
                $scope.swipe && SLeasy.goSlider('-=1');
            });

        } else if ($config.swipeMode == 'y' || $config.swipeMode == 'xy') {//垂直上下
            $scope.FXDirection = 'upDown';//设置切换式样方向

            sliderBox.on('swipeup', function (e) {
                console.log($scope.swipe);
                $scope.swipe && SLeasy.goSlider('+=1');
            });
            sliderBox.on('swipedown', function (e) {
                $scope.swipe && SLeasy.goSlider('-=1');
            });
        }

        //子画元素事件绑定策略
        for (var i = 0; i < $scope.eventArr.length; i++) {
            var el       = $scope.eventArr[i],
                id       = el.id,
                dom      = document.getElementById(id),
                HDom     = new H(dom),
                e        = el.event,
                callback = el.onEvent
                ;

            dom.style.cursor = "pointer";//鼠标手势
            //console.log(document.getElementById(id));
            if (e == 'click') {//点击事件,方便某些广告监测代码
                $(dom).on('click', callback);
            } else if (e == 'hold') {//长按事件
                HDom.get('press').set({time: 1000});
                HDom.on('press', callback);
            } else {
                HDom.on(e, callback);//事件绑定
            }

        }

        //箭头事件绑定
        if ($config.arrowMode) {
            $("#SLeasy_arrow").css("cursor", "pointer");
            new H($("#SLeasy_arrow")[0]).on('tap', function (e) {
                SLeasy.goSlider('+=1');
            })
        }

        //安卓微信video全屏resize
        /*var ow = window.innerWidth,
            oh = window.innerHeight;
        var videoSizeArr = [];

        $("video").each(function () {
            //videoSizeArr.push({width: $(this).css('width'), height: $(this).css('height')});
            videoSizeArr.push(SLeasy.fixProps({width: 556, height: 312, x: 41, y: 162}));
        });
        console.log(ow + ':' + oh);
        console.log(videoSizeArr);

        function resetVideoSize() {
            //alert(ow+':'+oh+'###'+window.innerWidth+':'+window.innerHeight);
            if (window.innerWidth == ow && window.innerHeight == oh) {
                $("video").each(function () {
                    var index = $("video").index($(this));
                    //alert(videoSizeArr[index].width + ':' + videoSizeArr[index].height);
                    T.set($(this), {
                        "width" : videoSizeArr[index].width + 'px',
                        "height": videoSizeArr[index].height + 'px',
                        "x"     : videoSizeArr[index].x,
                        "y"     : videoSizeArr[index].y
                    })
                })
            } else {
                T.set($("video"), {
                    "width"     : window.innerWidth + "px",
                    "height"    : window.innerHeight + "px",
                    "background": "#000",
                    x           : 0,
                    y           : 0
                })
            }
        }

        window.onresize = function () {
            resetVideoSize();
            //setTimeout(resetVideoSize, 50);
        }*/
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
        $scope  = SLeasy.scope()

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


    //isPlaying
    SLeasy.music.isPlaying=false;

    //play
    SLeasy.music.play = function () {
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
            SLeasy.music.isPlaying=true;
            T.to($("#SLeasy_musicBt"), 0.5, {backgroundPosition: 'center 0px', ease: Power4.easeOut});
            document.removeEventListener('touchstart',SLeasy.music.play);
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

    //auto playHack
    document.addEventListener('touchstart',SLeasy.music.play,false);

    //pause
    SLeasy.music.pause = function () {
        $("#SLeasy_music")[0].pause();
        //兼容安卓
        $("#SLeasy_music").on('pause', function () {
            $scope.isMusic = 0;
            SLeasy.music.isPlaying=false;
            T.to($("#SLeasy_musicBt"), 0.5, {
                backgroundPosition: 'center -' + $config.musicBt[3] * $scope.viewScale + 'px',
                ease: Power4.easeOut
            });
        })

    }

    //musicBt:[1,'http://xxx/musicBt.png',60,60,'topRight',10,10],//背景音乐按钮[开启状态，sprite图片url，宽度，高度，对齐方式，x轴偏移，y轴偏移]
    SLeasy.music.bt = function () {
        var base64 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAABYCAYAAACONxXWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEUxQUE2RjlFODUyMTFFNThCQzNDMkEyRUVFRkQxNUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEUxQUE2RkFFODUyMTFFNThCQzNDMkEyRUVFRkQxNUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RTFBQTZGN0U4NTIxMUU1OEJDM0MyQTJFRUVGRDE1RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RTFBQTZGOEU4NTIxMUU1OEJDM0MyQTJFRUVGRDE1RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjjeU1sAAAcmSURBVHjazFvfTxxVGF1GUrNYH7Bu1dqQGC1NdtuY2MaaGAVq2hoVd62+AqvwYhv0zaQJqfwFQqMJ8GBjrdEX04JVYrVaCjxI1SZGaMJW+gClD2JFE3ehLrB+Xz23XsedmXvv3Nn6JSeE3Zk7Z+7cH993zmxVqVSKhYhaQgOhkbCNUE+4mxDH98uEBUKO8CPhHLBoesEqA8IOIUN4mbAP/39D+J5wiXCFUOC2CTWE+wlbCI8QHkMbnxOOEoYIa1pXZ8IaaCHkCH8SThAyhLjG+XGcw+cW0VabDgfVA5OEcVykj1CneaPlUIe2uM1RXMMK4Q5CQadRTSTRdgHXCkW4l7BK6CI4EZAV4LbfLP0dPaaEjxOWCM0REnWjGdc8rkv4CB5RYwXJCjTi2r2qhHkcrVjo2X14vIxOwh6NFeV5cOgIIpzEI+my0FPdpf9GAY/7YYXzu8Al5UeYl64xSxOsHGERa3jk6wIm4ig4lSWcxZpoa+k6XAqOrwKGSQqrVIubsINdp8/i5OkOILuGv+8HtNMHbo5MeD96ty4CwgWFnt4TsCNeB8cbiUsMicynhNmYvVgDDhA2EvYTPiKslDn2gE87zOk0ISuSn1okMxnL66no4WyZHvvY1cPLARM9g7Fc6yCfdXAXNmNF6ml3j71EeA3f8XG3E+71aes0jm2oBmHOZ5csE64O+P5tHPMW/i/6HLsEjg3cs9sJF2LRhePzXQ/hExBaCGiHOW53UNZciohsSaGiOET4UqEt5ljvoAabj4hsFeAXFwmvKrTHHDc4KBj/iIBwlcaxVxWOYY41jkHjOj1svW0mnEd1eyt7WCXWczXOhH9FKf5/D+Z4jdfBnwgPhWiIRZQXsDyuI1wmnIiAMGsbuWooMjsNGkggN3jK9fnjhJYINqIdLNbwkBgh7JLkJZXYRJgoQ1aOuGvyhYk4OI4IwjHITqoxQHigguP3aWzjNwgvQutqUzw5SXiuwqtFK9LfRbEOH8Vd1Cmc/GiZz1Z9jv89JFnm1Ex4V05MWEWcw76ush664zaPY/lGxkMSZk4zSJL+VYS2QgtIKggdKsEJ90DIIiCF4qJVfCbrw9zbo5jVDT5ZFh/3AwRsv8hBDzYVr+UF4UkvfTiJO+pSUByvSpWvO84QNoXsXSUhRUhVqwo1XgJiyGXCb4RZCNU2xMMMqvgOVTGQieRvoRiY1xED3XJrpsJya95EbhXowZishKDdhWHQY8MyKEIkjMoy+BpPs8OmKTOG3h6waMoMYO0fs2nKyGiDMMc9fjKE7XVSsr1adTiYGotpwivIP2IQOS6gFJ9HwcjH3YFUdAvy2V1Ihj4jHCMM6hqLJoSDrNsNUo3Ijug17HqT2LlCWbeO5YK22pVOVrmq6NDXCzMkWP58BkTOE75FPXcFlbjI7GSveScyu2HCe1F7zY7kNfOEGTScdGnCENqYlu2AqLzmfste8yqWtZQtwu2Q7Eci2jhStrxmBwlIJbfmklfSE0TYwfgq6Y4xC2kl9/SHXh3k5zWvgvAkct9Kkd4N0kd0vOY19OxkCNJ78XiF17xbY0VJ47raXnMiBGkvr/kDxRUhsERysHSdc40fU9JBTmiPhtfslCPcguUr6VG/6ZLuVpACRgKGSRJrv6fX3B9QdOqQ7lbUL45F6TXrkNbxmvcG7IhFU6+ZvbQmwhQhRTgLndgvhNf8IvTkcgbiwQCveRgcb3rNRc3qWKWndbzm6wE7aRocb3rNMU2vWaWn13x6jL3mTukzthru8bneF0KyclAtTBhI/IL0RQ/SQcn6OzDI3Wa6l9fMHJsclDbfGRYAC7hhnTHtNshPKXrNzHGb8JpnQlQtXsNDtZI4pDgcmeNWW15zOdLrFdT5GM55XdFrvqvaotcsSJ8F6Y0B6rx7Imp5zbZCnohiLN9p22te8vAtYiEnophEb2hORK+oEV7zLxF4zQso4zk2G6wevl4zqzIPhmjoCWwEKTyxeXjNBXw/J03EJoXly9drFmr7uEEpcx+8DK/I429nyMpFfi+0V96n45pkZxXTx6wr95gyIB0X79bJyU9ao4Ehxfcq5eQnTLmVBuFa8cEgSKicXF/Si6wry5sy6Gnmdsr0ZdF2TcKZkJVLHYqA/e4SaTqgRBI4qEk44ZFPTymS7sexTrkiVOWF50YNsmFrRM8iVC7zRwOyf0e6kF9MYUKbVi4OqmrPMl/cUR6vgwfJrz/7kD2jMaG8JuJhrAxKXrNKjZeA/jUDr3kOq03aYFNw93QLtL12Ha+ZX0JuqqAImHANNS2v2YEGVjDsMVNkJStBS26VBe0ixlMlBW3Hxs/TorIMxM/Tlm17zeOYtVH8AHA8Cq/ZbXsNWbC9cmhTebiF/RHrs6iKJ+A152L//Ig1Bq95M15G3SG98zYMr1nbWLThNTdC7mJBZiu85rik2LDXPI1yfgQw9pr/EmAAPOf7bb+j2VMAAAAASUVORK5CYII=',
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
    TweenMax
);
// SLeasy3-arrow
;(function (SLeasy, $, T) {
    var $config = SLeasy.config(),//全局配置
        $scope  = SLeasy.scope()


    SLeasy.arrow = SLeasy.arrow || {};

    //init
    SLeasy.arrow.init = function (color) {
        var arrowColor = color || '#fff';//箭头颜色

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
                    zIndex: 10,
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
                    zIndex: 10,
                    ease: Power3.easeOut,
                    delay: 1
                });
            }
        }
    }
})(
    window.SLeasy = window.SLeasy || {},
    jQuery,
    TweenMax || TweenLite
);
// SLeasy3-boot
;(function (SLeasy, $) {
    var $config = SLeasy.config(),
        $scope  = SLeasy.scope();


    //boot
    SLeasy.boot = function () {
        //var dfd=$.Deferred();

        var sliderHtml = '',
            detailHtml = '',
            musicHtml  = 'xxx',
            floatHtml  = '';


        //幻灯初始化
        sliderHtml = pageInit('sliders');

        //详情页初始化
        detailHtml = pageInit('details');


        //类型页面初始化函数
        function pageInit(type) {
            var tmpHtml = '';
            for (var i = 0; i < $config[type].length; i++) {
                $.extend($config[type][i], {index: i, type: type});//并入当前幻灯索引值,及类型
                tmpHtml += SLeasy.slider($config[type][i]);
            }
            return tmpHtml;
        }

        //音乐初始化
        musicHtml = SLeasy.music.init();

        //框架初始化($scope.sliderBox.html()包含了loading结构代码)
        $scope.sliderBox.html($scope.sliderBox.html() + sliderHtml + detailHtml + musicHtml);

        SLeasy.loader.hidden();//隐藏loading
        SLeasy.float();//浮动元素初始化
        SLeasy.arrow.init($config.arrowColor);//箭头初始化
        $config.musicBt[0] && SLeasy.music.bt();//背景音乐按钮初始化

        SLeasy.fixPosition($config.sliders);//全部幻灯子动画自适应坐标值修正转换
        SLeasy.fixPosition($config.details);//全部详情页子动画自适应坐标值修正转换

        //img to div
        SLeasy.imgToDiv();

        //dom缓存
        $scope.sliders = $(".SLeasy_sliders");//幻灯引用缓存
        $scope.subMotion = $(".SLeasy_subMotion");//子动画元素合集引用缓存
        $scope.details = $(".SLeasy_details");//详情页引用缓存
        $scope.detailMotion = $(".SLeasy_detailMotion");//详情页子动画元素缓存
        $scope.loader = $("#SLeasy_loader");//loading元素dom缓存
        $scope.floats = $(".SLeasy_floatElement");//浮动元素dom缓存
        $scope.canvas = $(".SLeasy_canvas");//画布元素dom缓存
        $config.on['domReady']();//SLeasy dom初始化完毕回调

        $scope.canvas.length && TweenMax.set($scope.canvas.parent(), {y: 0});//修正安卓下,画布元素默认不左上对齐的bug

        //插件初始化
        for (var j = 0; j < $scope.pluginList.length; j++) {
            //console.log($scope.pluginList[j]);
            var SLeasyPlugin       = $scope.pluginList[j][0],
                //把初始化时注入的挂载点id转换成挂载点dom,合并入plugin参数
                pluginArg          = $.extend($scope.pluginList[j][1], {dom: $('#' + $scope.pluginList[j][1].node)}),
                pluginInitCallback = $scope.pluginList[j][2],//插件初始化回调
                pluginObj          = SLeasyPlugin(pluginArg);//执行插件初始化

            pluginInitCallback(pluginObj);//执行插件初始化后的回调
        }

        //渲染启动
        $scope.timeLine = new TimelineMax({//子动画主时间线初始化
            autoRemoveChildren: $config.autoRemoveChildren,
            paused: true,
            onComplete: function () {
                //orientationPX();//重力感应视差效果
                console.log('子动画完成~~~！');
                //$scope.isSubMotion=1;//子动画是否正在播放状态
            }
        });
        $config.on['timeline']($scope.timeLine);//子动画时间轴ready回调

        SLeasy.eventBind();//事件绑定
        SLeasy.router();//路由初始化
        //dfd.resolve();//初始化完毕


        //默认显示渲染
        $config.musicAutoPlay && SLeasy.music.play();//播放背景音乐
        //如果幻灯设置了自动开始，而且没有开启自动路由，且url没有路由哈希参数，则默认显示第一页
        $config.autoStart && (!$config.routerMode && !$scope.router.getRoute()[0]) && SLeasy.goSlider(0);


        //return dfd.promise();
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

    //loading-style
    var loaderStyle = [
        '<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff" style="position: relative">\
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

        '<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" style="position: relative">\
            <defs>\
            <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">\
                <stop stop-color="#fff" stop-opacity="0" offset="0%"/>\
                <stop stop-color="#fff" stop-opacity=".631" offset="63.146%"/>\
                <stop stop-color="#fff" offset="100%"/>\
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


    //html
    SLeasy.loader.html = function () {
        var loadingStyle = 'position:absolute;z-index:9999;top:50%;left:50%;' +
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
            'background:rgba(0,0,0,0.9);position:absolute;' +
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
    SLeasy.loader.show = function (msg) {
        if ($("#SLeasy_loader").length) { //如果loader已初始化
            msg && $("#SLeasy_loader_msg").text(msg) && SLeasy.loader.progress('');//设置msg
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
    SLeasy.loader.load = function (loadArr) {
        var dfd = $.Deferred();
        SLeasy.loader.show();

        var loaded = 0;

        (loadArr && loadArr.length) ? _load(loadArr) : (SLeasy.loader.hidden(), dfd.resolve($config, $scope));//如果加载数组为空则立即返回

        function _load(loadArr) {
            var img = new Image();
            img.src = loadArr[loaded];
            console.log('开始加载：' + img.src);
            img.onload = function () {
                loaded++;
                //console.log(loaded);
                SLeasy.loader.percent = Math.round(loaded * 100 / loadArr.length / ($config.loader.endAt / 100));
                SLeasy.loader.percent = SLeasy.loader.percent > 100 ? 100 : SLeasy.loader.percent;
                $config.on['loadProgress'](SLeasy.loader.percent); //预加载进行时回调
                dfd.notify(SLeasy.loader.percent);
                if (SLeasy.loader.percent >= 100) {
                    $config.on['loaded'](); //预加载完毕回调
                    dfd.resolve($config, $scope);
                } else {
                    _load(loadArr);
                }
            }
        }

        return dfd.promise();
    }

    //
})(
    window.SLeasy = window.SLeasy || {},
    jQuery
);
// SLeasy3-router
;(function (SLeasy, Router, $) {
    var $config = SLeasy.config(),
        $scope  = SLeasy.scope();

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
                    SLeasy.transit(_index);
                    console.log(_index + '------------------------------------------------------');
                    SLeasy.closeDetailTransit($scope.detailIndex);

                } else {
                    console.log('当前幻灯索引：' + sliderIndex);
                    console.log('当前详情页索引：' + detailIndex);

                    if (typeof detailIndex == 'undefined') $scope.router.setRoute(1, 'html');//设置路由


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
        SLeasy.checkGoto();//跳转(url/淘宝)检测
        var $config = SLeasy.config(opt);//合并自定义参数
        $scope.viewScale=$config.viewport / $config.width;//刷新幻灯缩放比例因子
        if (!SLeasy.isHttp()) {//debug模式
            var debugStyle = '.SLeasy_shadownBt{border: 1px solid #fff;box-shadow:0 0 5px #000}';
            $('head style').html($('head style').html() + debugStyle);
        }
        if (!$config.debugMode) {
            console.log = function () {
            };//设置console.log输出
        }
        console.log($config);
        SLeasy.viewport();//设置视口

        //SLeasy容器初始化
        $scope.sliderBox = $('#' + $config.id).length ? $('#' + $config.id) : $('<div id="SLeasy"></div>').prependTo('body');//slide容器dom引用缓存
        $scope.sliderBox.css({
            "width"            : $config.viewport + 'px',
            "height"           : $scope.fixHeight + 'px',
            "background-image" : $config.bg ? 'url(' + $config.host + $config.bg + ')' : 'none',
            "background-color" : $config.bgColor || 'transparent',
            "background-size"  : "100% auto",
            "background-repeat": "no-repeat",
            "overflow"         : $config.positionMode == "absolute" ? "hidden" : "visible",//relative模式则高度按内容自适应
            "position"         : "relative",
            "margin"           : "0 auto",
            "display"          : "none"
        }).fadeIn($config.motionTime * 1000);

        //loading资源加载
        return SLeasy.loader.load(getLoadArr()).done(function () {//资源加载
            console.log(getLoadArr());
            SLeasy.boot();
        });


        //获取预加载图片url
        function getLoadArr() {
            var totalArr = [];

            //幻灯容器背景
            if ($config.bg) totalArr.push(SLeasy.path($config.host, $config.bg));

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
                }
            }

            //浮动元素
            for (var i = 0; i < $config.floats.length; i++) {
                $config.floats[i].img && totalArr.push(SLeasy.path($config.host, $config.floats[i].img));
            }

            //额外加载项
            for (var i = 0; i < $config.exLoadArr.length; i++) {
                totalArr.push(SLeasy.path($config.host, $config.exLoadArr[i]));
            }

            //位图序列
            $.each($scope.bitmaps, function (index, value) {
                totalArr = totalArr.concat($scope.bitmaps[index]);
            })

            //return
            if (!$config.preload) {
                $scope.totalLoad = totalArr;
                return;//是否进行预加载
            } else {
                //console.log(totalArr);
                return totalArr;
            }
        }

    }

})(
    window.SLeasy = window.SLeasy || {},
    jQuery
);