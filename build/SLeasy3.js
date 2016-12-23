/*!
SLeasy 3.5.0 by 宇文互动 庄宇 2016-12-03 email：30755405@qq.com
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
/*!
 * VERSION: 0.1.3
 * DATE: 2014-11-15
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * Physics2DPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=Math.PI/180,e=function(t,e,i,r,s){this.p=e,this.f="function"==typeof t[e],this.start=this.value=this.f?t[e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3)]():parseFloat(t[e]),this.velocity=i||0,this.v=this.velocity/s,r||0===r?(this.acceleration=r,this.a=this.acceleration/(s*s)):this.acceleration=this.a=0},i=Math.random(),r=_gsScope._gsDefine.globals,s=r.com.greensock.core.Animation._rootFramesTimeline,n=_gsScope._gsDefine.plugin({propName:"physics2D",version:"0.1.3",API:2,init:function(i,r,n){this._target=i,this._tween=n,this._runBackwards=n.vars.runBackwards===!0,this._step=0;for(var a,o=n._timeline,l=Number(r.angle)||0,h=Number(r.velocity)||0,u=Number(r.acceleration)||0,f=r.xProp||"x",p=r.yProp||"y",c=r.accelerationAngle||0===r.accelerationAngle?Number(r.accelerationAngle):l;o._timeline;)o=o._timeline;return this._stepsPerTimeUnit=a=o===s?1:30,r.gravity&&(u=Number(r.gravity),c=90),l*=t,c*=t,this._friction=1-Number(r.friction||0),this._overwriteProps.push(f),this._overwriteProps.push(p),this._x=new e(i,f,Math.cos(l)*h,Math.cos(c)*u,a),this._y=new e(i,p,Math.sin(l)*h,Math.sin(c)*u,a),this._skipX=this._skipY=!1,!0},set:function(){var t,e,i,r,s,n,a=this._tween._time,o=this._x,l=this._y;if(this._runBackwards===!0&&(a=this._tween._duration-a),1===this._friction)i=.5*a*a,t=o.start+(o.velocity*a+o.acceleration*i),e=l.start+(l.velocity*a+l.acceleration*i);else{if(a*=this._stepsPerTimeUnit,r=n=(0|a)-this._step,s=a%1,n>=0)for(;--n>-1;)o.v+=o.a,l.v+=l.a,o.v*=this._friction,l.v*=this._friction,o.value+=o.v,l.value+=l.v;else for(n=-n;--n>-1;)o.value-=o.v,l.value-=l.v,o.v/=this._friction,l.v/=this._friction,o.v-=o.a,l.v-=l.a;t=o.value+o.v*s,e=l.value+l.v*s,this._step+=r}this._skipX||(o.r&&(t=0|t+(0>t?-.5:.5)),o.f?this._target[o.p](t):this._target[o.p]=t),this._skipY||(l.r&&(e=0|e+(0>e?-.5:.5)),l.f?this._target[l.p](e):this._target[l.p]=e)}}),a=n.prototype;a._kill=function(t){return null!=t[this._x.p]&&(this._skipX=!0),null!=t[this._y.p]&&(this._skipY=!0),this._super._kill(t)},a._roundProps=function(t,e){(t.physics2D||t[this._x.p])&&(this._x.r=e),(t.physics2D||t[this._y.p])&&(this._y.r=e)},n._autoCSS=!0,n._cssRegister=function(){var t=r.CSSPlugin;if(t){var e=t._internals,s=e._parseToProxy,a=e._setPluginRatio,o=e.CSSPropTween;e._registerComplexSpecialProp("physics2D",{parser:function(t,e,r,l,h,u){u=new n;var f,p=e.xProp||"x",c=e.yProp||"y",_={};return _[p]=_[c]=i++,f=s(t,_,l,h,u),h=new o(t,"physics2D",0,0,f.pt,2),h.data=f,h.plugin=u,h.setRatio=a,u._onInitTween(f.proxy,e,l._tween),h}})}}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();





/*!
 * VERSION: 0.1.3
 * DATE: 2014-11-15
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * PhysicsPropsPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=function(t,e,i,r,s,n){this.p=e,this.f="function"==typeof t[e],this.start=this.value=this.f?t[e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3)]():parseFloat(t[e]),this.velocity=i||0,this.v=this.velocity/n,r||0==r?(this.acceleration=r,this.a=this.acceleration/(n*n)):this.acceleration=this.a=0,this.friction=1-(s||0)},e=Math.random(),i=_gsScope._gsDefine.globals,r=i.com.greensock.core.Animation._rootFramesTimeline,s=_gsScope._gsDefine.plugin({propName:"physicsProps",version:"0.1.3",API:2,init:function(e,i,s){this._target=e,this._tween=s,this._runBackwards=s.vars.runBackwards===!0,this._step=0;for(var n,a,o=s._timeline,l=0;o._timeline;)o=o._timeline;this._stepsPerTimeUnit=o===r?1:30,this._props=[];for(n in i)a=i[n],(a.velocity||a.acceleration)&&(this._props[l++]=new t(e,n,a.velocity,a.acceleration,a.friction,this._stepsPerTimeUnit),this._overwriteProps[l]=n,a.friction&&(this._hasFriction=!0));return!0},set:function(){var t,e,i,r,s,n,a=this._props.length,o=this._tween._time,l=this._target;if(this._runBackwards&&(o=this._tween._duration-o),this._hasFriction){if(o*=this._stepsPerTimeUnit,i=(0|o)-this._step,r=o%1,i>=0)for(;--a>-1;){for(t=this._props[a],s=i;--s>-1;)t.v+=t.a,t.v*=t.friction,t.value+=t.v;e=t.value+t.v*r,t.r&&(e=Math.round(e)),t.f?l[t.p](e):l[t.p]=e}else for(;--a>-1;){for(t=this._props[a],s=-i;--s>-1;)t.value-=t.v,t.v/=t.friction,t.v-=t.a;e=t.value+t.v*r,t.r&&(e=0|e+(0>e?-.5:.5)),t.f?l[t.p](e):l[t.p]=e}this._step+=i}else for(n=.5*o*o;--a>-1;)t=this._props[a],e=t.start+(t.velocity*o+t.acceleration*n),t.r&&(e=Math.round(e)),t.f?l[t.p](e):l[t.p]=e}}),n=s.prototype;n._kill=function(t){for(var e=this._props.length;--e>-1;)this._props[e].p in t&&this._props.splice(e,1);return this._super._kill(t)},n._roundProps=function(t,e){for(var i=this._props.length;--i>-1;)("physicsProps"in t||this._props[i].p in t)&&(this._props[i].r=e)},s._autoCSS=!0,s._cssRegister=function(){var t=i.CSSPlugin;if(t){var r=t._internals,n=r._parseToProxy,a=r._setPluginRatio,o=r.CSSPropTween;r._registerComplexSpecialProp("physicsProps",{parser:function(t,i,r,l,h,u){u=new s;var f,p,c={};i.scale&&(i.scaleX=i.scaleY=i.scale,delete i.scale);for(f in i)c[f]=e++;return p=n(t,c,l,h,u),h=new o(t,"physicsProps",0,0,p.pt,2),h.data=p,h.plugin=u,h.setRatio=a,u._onInitTween(p.proxy,i,l._tween),h}})}}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();




/*!
 * VERSION: 0.2.2
 * DATE: 2014-12-31
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * ScrambleTextPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var t=function(e){var i=e.nodeType,r="";if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)r+=t(e)}else if(3===i||4===i)return e.nodeValue;return r},e=function(t,e){for(var i=e.length,r="";--t>-1;)r+=e[0|Math.random()*i];return r},i=function(t){this.chars=t.split(""),this.sets=[],this.length=50;var i;for(i=0;20>i;i++)this.sets[i]=e(80,this.chars);this.grow=function(t){for(i=0;20>i;i++)this.sets[i]+=e(t-this.length,this.chars);this.length=t}},r="ABCDEFGHIJKLMNOPQRSTUVWXYZ",s=r.toLowerCase(),n={upperCase:new i(r),lowerCase:new i(s),upperAndLowerCase:new i(r+s)},a=_gsScope._gsDefine.plugin({propName:"scrambleText",version:"0.2.2",API:2,overwriteProps:["scrambleText","text"],init:function(e,r,s){if(this._prop="innerHTML"in e?"innerHTML":"textContent"in e?"textContent":0,!this._prop)return!1;this._target=e,"object"!=typeof r&&(r={text:r});var a,o,l,h;return this._delimiter=a=r.delimiter||"",this._original=t(e).replace(/\s+/g," ").split("&nbsp;").join("").split(a),this._text=(r.text||r.value||"").replace(/\s+/g," ").split(a),this._hasClass=!1,"string"==typeof r.newClass&&(this._newClass=r.newClass,this._hasClass=!0),"string"==typeof r.oldClass&&(this._oldClass=r.oldClass,this._hasClass=!0),o=this._text.length-this._original.length,this._length=this._original.join(a).length,this._lengthDif=this._text.join(a).length-this._length,this._fillChar=r.fillChar||r.chars&&-1!==r.chars.indexOf(" ")?"&nbsp;":"",this._charSet=h=n[r.chars||"upperCase"]||new i(r.chars),this._speed=.016/(r.speed||1),this._prevScrambleTime=0,this._setIndex=0|20*Math.random(),l=this._length+Math.max(this._lengthDif,0),l>h.length&&h.grow(l),this._chars=h.sets[this._setIndex],this._revealDelay=r.revealDelay||0,this._tweenLength=r.tweenLength!==!1,this._tween=s,!0},set:function(t){var e,i,r,s,n,a,o=this._text.length,l=this._delimiter,h=this._tween._time,u=h-this._prevScrambleTime;this._revealDelay&&(this._tween.vars.runBackwards&&(h=this._tween._duration-h),t=0===h?0:this._revealDelay>h?1e-6:h===this._tween._duration?1:this._tween._ease.getRatio((h-this._revealDelay)/(this._tween._duration-this._revealDelay))),0>t?t=0:t>1&&(t=1),e=0|t*o+.5,i=this._text.slice(0,e).join(l),r=this._original.slice(e).join(l),t&&((u>this._speed||-this._speed>u)&&(this._setIndex=(this._setIndex+(0|19*Math.random()))%20,this._chars=this._charSet.sets[this._setIndex],this._prevScrambleTime+=u),r=this._chars.substr(i.length,0|this._length+(this._tweenLength?1-(t=1-t)*t*t*t:1)*this._lengthDif-i.length+.5)),this._hasClass?(s=this._newClass&&0!==e,n=this._oldClass&&e!==o,a=(s?"<span class='"+this._newClass+"'>":"")+i+(s?"</span>":"")+(n?"<span class='"+this._oldClass+"'>":"")+l+r+(n?"</span>":"")):a=i+l+r,this._target[this._prop]="&nbsp;"===this._fillChar&&-1!==a.indexOf("  ")?a.split("  ").join("&nbsp;&nbsp;"):a}}),o=a.prototype;o._newClass=o._oldClass="";for(o in n)n[o.toLowerCase()]=n[o],n[o.toUpperCase()]=n[o]}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();


/*!
 * VERSION: 0.4.0
 * DATE: 2016-07-09
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * This is a special version that is only to be used on certain sites like codepen.io. It will redirect to a page on GreenSock.com if you try using it on a different domain. Please sign up for Club GreenSock to get the fully-functional version at https://greensock.com/club/
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * For licensing details, see http://greensock.com/licensing/
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;
!function(r){var y=r.GreenSockGlobals||r,D=function(a){var b=a.split("."),d=y;for(a=0;a<b.length;a++)d[b[a]]=d=d[b[a]]||{};return d}("com.greensock.utils"),K=function(a){var b=a.nodeType,d="";if(1===b||9===b||11===b){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)d+=K(a)}else if(3===b||4===b)return a.nodeValue;return d},z=document,R=z.defaultView?z.defaultView.getComputedStyle:function(){},L=/([A-Z])/g,k=function(a,b,d,t){var p;return(d=d||R(a,null))?(a=
d.getPropertyValue(b.replace(L,"-$1").toLowerCase()),p=a||d.length?a:d[b]):a.currentStyle&&(d=a.currentStyle,p=d[b]),t?p:parseInt(p,10)||0},G=function(a){return a.length&&a[0]&&(a[0].nodeType&&a[0].style&&!a.nodeType||a[0].length&&a[0][0])?!0:!1},aa=/(?:\r|\n|\s\s|\t\t)/g,S=/(?:<br>|<br\/>|<br \/>)/gi,M=" style='position:relative;display:inline-block;"+(z.all&&!z.addEventListener?"*display:inline;*zoom:1;'":"'"),T=function(a,b){a=a||"";var d=-1!==a.indexOf("++"),t=1;return d&&(a=a.split("++").join("")),
function(){return"<"+b+M+(a?" class='"+a+(d?t++:"")+"'>":">")}},A=D.SplitText=y.SplitText=function(a,b){if("string"==typeof a&&(a=A.selector(a)),!a)throw"cannot split a null element.";var d;if(G(a)){d=a;var t,p,k,f=[],w=d.length;for(t=0;w>t;t++)if(p=d[t],G(p))for(k=0;k<p.length;k++)f.push(p[k]);else f.push(p);d=f}else d=[a];this.elements=d;this.chars=[];this.words=[];this.lines=[];this._originals=[];this.vars=b||{};void this.split(b)},U=function(a,b,d){var k=a.nodeType;if(1===k||9===k||11===k)for(a=
a.firstChild;a;a=a.nextSibling)U(a,b,d);else 3!==k&&4!==k||(a.nodeValue=a.nodeValue.split(b).join(d))},N=function(a,b){for(var d=b.length;-1<--d;)a.push(b[d])},D=A.prototype;D.split=function(a){this.isSplit&&this.revert();this.vars=a||this.vars;this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(a=this.elements.length;-1<--a;){this._originals[a]=this.elements[a].innerHTML;var b=this.elements[a],d=this.vars,t=this.chars,p=this.words,r=this.lines;S.test(b.innerHTML)&&
(b.innerHTML=b.innerHTML.replace(S,")eefec303079ad17405c"));var f=void 0,w=void 0,g=void 0,m=void 0,e=void 0,h=g=g=void 0,c=void 0,u=void 0,l=void 0,x=void 0,y=void 0,B=void 0,h=K(b),F=d.span?"span":"div",q=d.type||d.split||"chars,words,lines",v=-1!==q.indexOf("lines")?[]:null,C=-1!==q.indexOf("words"),q=-1!==q.indexOf("chars"),n="absolute"===d.position||!0===d.absolute,B=d.wordDelimiter||" ",A=" "!==B?"":n?"&#173; ":" ",D=-999,f=R(b),G=k(b,"paddingLeft",f),L=k(b,"borderBottomWidth",f)+k(b,"borderTopWidth",
f),M=k(b,"borderLeftWidth",f)+k(b,"borderRightWidth",f),ba=k(b,"paddingTop",f)+k(b,"paddingBottom",f),ca=k(b,"paddingLeft",f)+k(b,"paddingRight",f),da=k(b,"textAlign",f,!0),ea=.2*k(b,"fontSize"),H=b.clientHeight,I=b.clientWidth,O=d.span?"</span>":"</div>",P=T(d.wordsClass,F),V=T(d.charsClass,F),W=-1!==(d.linesClass||"").indexOf("++"),J=d.linesClass,X=-1!==h.indexOf("<"),E=!0,Q=[],Y=[],Z=[];0!=!d.reduceWhiteSpace&&(h=h.replace(aa,""));W&&(J=J.split("++").join(""));X&&(h=h.split("<").join("{{LT}}"));
f=h.length;m=P();for(e=0;f>e;e++)if(g=h.charAt(e),")"===g&&")eefec303079ad17405c"===h.substr(e,20))m+=(E?O:"")+"<BR/>",E=!1,e!==f-20&&")eefec303079ad17405c"!==h.substr(e+20,20)&&(m+=" "+P(),E=!0),e+=19;else if(g===B&&h.charAt(e-1)!==B&&e!==f-1&&")eefec303079ad17405c"!==h.substr(e-20,20)){m+=E?O:"";for(E=!1;h.charAt(e+1)===B;)m+=A,e++;(")"!==h.charAt(e+1)||")eefec303079ad17405c"!==h.substr(e+1,20))&&(m+=A+P(),E=!0)}else"{"===g&&"{{LT}}"===h.substr(e,6)?(m+=q?V()+"{{LT}}</"+F+">":"{{LT}}",e+=5):m+=
q&&" "!==g?V()+g+"</"+F+">":g;b.innerHTML=m+(E?O:"");X&&U(b,"{{LT}}","<");g=b.getElementsByTagName("*");f=g.length;h=[];for(e=0;f>e;e++)h[e]=g[e];if(v||n)for(e=0;f>e;e++)c=h[e],((g=c.parentNode===b)||n||q&&!C)&&(u=c.offsetTop,v&&g&&Math.abs(u-D)>ea&&"BR"!==c.nodeName&&(w=[],v.push(w),D=u),n&&(c._x=c.offsetLeft,c._y=u,c._w=c.offsetWidth,c._h=c.offsetHeight),v&&(C!==g&&q||(w.push(c),c._x-=G),g&&e&&(h[e-1]._wordEnd=!0),"BR"===c.nodeName&&c.nextSibling&&"BR"===c.nextSibling.nodeName&&v.push([])));for(e=
0;f>e;e++)c=h[e],g=c.parentNode===b,"BR"!==c.nodeName?(n&&(x=c.style,C||g||(c._x+=c.parentNode._x,c._y+=c.parentNode._y),x.left=c._x+"px",x.top=c._y+"px",x.position="absolute",x.display="block",x.width=c._w+1+"px",x.height=c._h+"px"),C?g&&""!==c.innerHTML?Y.push(c):q&&Q.push(c):g?(b.removeChild(c),h.splice(e--,1),f--):!g&&q&&(u=!v&&!n&&c.nextSibling,b.appendChild(c),u||b.appendChild(z.createTextNode(" ")),Q.push(c))):v||n?(b.removeChild(c),h.splice(e--,1),f--):C||b.appendChild(c);if(v){n&&(l=z.createElement(F),
b.appendChild(l),y=l.offsetWidth+"px",u=l.offsetParent===b?0:b.offsetLeft,b.removeChild(l));x=b.style.cssText;for(b.style.cssText="display:none;";b.firstChild;)b.removeChild(b.firstChild);B=" "===B&&(!n||!C&&!q);for(e=0;e<v.length;e++){w=v[e];l=z.createElement(F);l.style.cssText="display:block;text-align:"+da+";position:"+(n?"absolute;":"relative;");J&&(l.className=J+(W?e+1:""));Z.push(l);f=w.length;for(g=0;f>g;g++)"BR"!==w[g].nodeName&&(c=w[g],l.appendChild(c),B&&(c._wordEnd||C)&&l.appendChild(z.createTextNode(" ")),
n&&(0===g&&(l.style.top=c._y+"px",l.style.left=G+u+"px"),c.style.top="0px",u&&(c.style.left=c._x-u+"px")));0===f&&(l.innerHTML="&nbsp;");C||q||(l.innerHTML=K(l).split(String.fromCharCode(160)).join(" "));n&&(l.style.width=y,l.style.height=c._h+"px");b.appendChild(l)}b.style.cssText=x}n&&(H>b.clientHeight&&(b.style.height=H-ba+"px",b.clientHeight<H&&(b.style.height=H+L+"px")),I>b.clientWidth&&(b.style.width=I-ca+"px",b.clientWidth<I&&(b.style.width=I+M+"px")));N(t,Q);N(p,Y);N(r,Z)}return this.chars.reverse(),
this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this};D.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var a=this._originals.length;-1<--a;)this.elements[a].innerHTML=this._originals[a];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this};A.selector=r.$||r.jQuery||function(a){var b=r.$||r.jQuery;return b?(A.selector=b,b(a)):"undefined"==typeof document?a:document.querySelectorAll?document.querySelectorAll(a):document.getElementById("#"===
a.charAt(0)?a.substr(1):a)};A.version="0.4.0"}(_gsScope);(function(r){var y=function(){return(_gsScope.GreenSockGlobals||_gsScope)[r]};"function"==typeof define&&define.amd?define([],y):"undefined"!=typeof module&&module.exports&&(module.exports=y())})("SplitText");



/*!
 * VERSION: 0.9.9
 * DATE: 2015-04-28
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * ThrowPropsPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.ThrowPropsPlugin",["plugins.TweenPlugin","TweenLite","easing.Ease","utils.VelocityTracker"],function(a,b,c,d){var r,s,t,u,e=function(){a.call(this,"throwProps"),this._overwriteProps.length=0},f=999999999999999,g=1e-10,h=_gsScope._gsDefine.globals,i=!1,j={x:1,y:1,z:2,scale:1,scaleX:1,scaleY:1,rotation:1,rotationZ:1,rotationX:2,rotationY:2,skewX:1,skewY:1,xPercent:1,yPercent:1},k=function(a,b,c,d){for(var i,j,e=b.length,g=0,h=f;--e>-1;)i=b[e],j=i-a,0>j&&(j=-j),h>j&&i>=d&&c>=i&&(g=e,h=j);return b[g]},l=function(a,b,c,d){if("auto"===a.end)return a;c=isNaN(c)?f:c,d=isNaN(d)?-f:d;var e="function"==typeof a.end?a.end(b):a.end instanceof Array?k(b,a.end,c,d):Number(a.end);return e>c?e=c:d>e&&(e=d),{max:e,min:e,unitFactor:a.unitFactor}},m=function(a,b,c){for(var d in b)void 0===a[d]&&d!==c&&(a[d]=b[d]);return a},n=e.calculateChange=function(a,d,e,f){null==f&&(f=.05);var g=d instanceof c?d:d?new c(d):b.defaultEase;return e*f*a/g.getRatio(f)},o=e.calculateDuration=function(a,d,e,f,g){g=g||.05;var h=f instanceof c?f:f?new c(f):b.defaultEase;return Math.abs((d-a)*h.getRatio(g)/e/g)},p=e.calculateTweenDuration=function(a,f,h,j,k,p){if("string"==typeof a&&(a=b.selector(a)),!a)return 0;null==h&&(h=10),null==j&&(j=.2),null==k&&(k=1),a.length&&(a=a[0]||a);var w,x,y,z,A,B,C,D,E,F,q=0,r=9999999999,s=f.throwProps||f,t=f.ease instanceof c?f.ease:f.ease?new c(f.ease):b.defaultEase,u=isNaN(s.checkpoint)?.05:Number(s.checkpoint),v=isNaN(s.resistance)?e.defaultResistance:Number(s.resistance);for(w in s)"resistance"!==w&&"checkpoint"!==w&&"preventOvershoot"!==w&&(x=s[w],"object"!=typeof x&&(E=E||d.getByTarget(a),E&&E.isTrackingProp(w)?x="number"==typeof x?{velocity:x}:{velocity:E.getVelocity(w)}:(z=Number(x)||0,y=z*v>0?z/v:z/-v)),"object"==typeof x&&(void 0!==x.velocity&&"number"==typeof x.velocity?z=Number(x.velocity)||0:(E=E||d.getByTarget(a),z=E&&E.isTrackingProp(w)?E.getVelocity(w):0),A=isNaN(x.resistance)?v:Number(x.resistance),y=z*A>0?z/A:z/-A,B="function"==typeof a[w]?a[w.indexOf("set")||"function"!=typeof a["get"+w.substr(3)]?w:"get"+w.substr(3)]():a[w]||0,C=B+n(z,t,y,u),void 0!==x.end&&(x=l(x,C,x.max,x.min),(p||i)&&(s[w]=m(x,s[w],"end"))),void 0!==x.max&&C>Number(x.max)+g?(F=x.unitFactor||e.defaultUnitFactors[w]||1,D=B>x.max&&x.min!==x.max||z*F>-15&&45>z*F?j+.1*(h-j):o(B,x.max,z,t,u),r>D+k&&(r=D+k)):void 0!==x.min&&C<Number(x.min)-g&&(F=x.unitFactor||e.defaultUnitFactors[w]||1,D=B<x.min&&x.min!==x.max||z*F>-45&&15>z*F?j+.1*(h-j):o(B,x.min,z,t,u),r>D+k&&(r=D+k)),D>q&&(q=D)),y>q&&(q=y));return q>r&&(q=r),q>h?h:j>q?j:q},q=e.prototype=new a("throwProps");return q.constructor=e,e.version="0.9.9",e.API=2,e._autoCSS=!0,e.defaultResistance=100,e.defaultUnitFactors={time:1e3,totalTime:1e3},e.track=function(a,b,c){return d.track(a,b,c)},e.untrack=function(a,b){d.untrack(a,b)},e.isTracking=function(a,b){return d.isTracking(a,b)},e.getVelocity=function(a,b){var c=d.getByTarget(a);return c?c.getVelocity(b):0/0},e._cssRegister=function(){var b,c,f,g,a=h.com.greensock.plugins.CSSPlugin;a&&(b=a._internals,c=b._parseToProxy,f=b._setPluginRatio,g=b.CSSPropTween,b._registerComplexSpecialProp("throwProps",{parser:function(a,b,h,i,k,l){l=new e;var u,v,w,x,y,m={},n={},o={},p={},q={},t={};s={};for(w in b)"resistance"!==w&&"preventOvershoot"!==w&&(v=b[w],"object"==typeof v?(void 0!==v.velocity&&"number"==typeof v.velocity?m[w]=Number(v.velocity)||0:(y=y||d.getByTarget(a),m[w]=y&&y.isTrackingProp(w)?y.getVelocity(w):0),void 0!==v.end&&(p[w]=v.end),void 0!==v.min&&(n[w]=v.min),void 0!==v.max&&(o[w]=v.max),v.preventOvershoot&&(t[w]=!0),void 0!==v.resistance&&(u=!0,q[w]=v.resistance)):"number"==typeof v?m[w]=v:(y=y||d.getByTarget(a),m[w]=y&&y.isTrackingProp(w)?y.getVelocity(w):v||0),j[w]&&i._enableTransforms(2===j[w]));x=c(a,m,i,k,l),r=x.proxy,m=x.end;for(w in r)s[w]={velocity:m[w],min:n[w],max:o[w],end:p[w],resistance:q[w],preventOvershoot:t[w]};return null!=b.resistance&&(s.resistance=b.resistance),b.preventOvershoot&&(s.preventOvershoot=!0),k=new g(a,"throwProps",0,0,x.pt,2),i._overwriteProps.pop(),k.plugin=l,k.setRatio=f,k.data=x,l._onInitTween(r,s,i._tween),k}}))},e.to=function(a,c,d,e,f){c.throwProps||(c={throwProps:c}),0===f&&(c.throwProps.preventOvershoot=!0),i=!0;var g=new b(a,e||1,c);return g.render(0,!0,!0),g.vars.css?(g.duration(p(r,{throwProps:s,ease:c.ease},d,e,f)),g._delay&&!g.vars.immediateRender?g.invalidate():t._onInitTween(r,u,g),i=!1,g):(g.kill(),g=new b(a,p(a,c,d,e,f),c),i=!1,g)},q._onInitTween=function(a,b,c){this.target=a,this._props=[],t=this,u=b;var k,o,p,q,r,s,v,w,x,e=c._ease,f=isNaN(b.checkpoint)?.05:Number(b.checkpoint),g=c._duration,h=b.preventOvershoot,j=0;for(k in b)if("resistance"!==k&&"checkpoint"!==k&&"preventOvershoot"!==k){if(o=b[k],"number"==typeof o)r=Number(o)||0;else if("object"!=typeof o||isNaN(o.velocity)){if(x=x||d.getByTarget(a),!x||!x.isTrackingProp(k))throw"ERROR: No velocity was defined in the throwProps tween of "+a+" property: "+k;r=x.getVelocity(k)}else r=Number(o.velocity);s=n(r,e,g,f),w=0,q="function"==typeof a[k],p=q?a[k.indexOf("set")||"function"!=typeof a["get"+k.substr(3)]?k:"get"+k.substr(3)]():a[k],"object"==typeof o&&(v=p+s,void 0!==o.end&&(o=l(o,v,o.max,o.min),i&&(b[k]=m(o,b[k],"end"))),void 0!==o.max&&Number(o.max)<v?h||o.preventOvershoot?s=o.max-p:w=o.max-p-s:void 0!==o.min&&Number(o.min)>v&&(h||o.preventOvershoot?s=o.min-p:w=o.min-p-s)),this._overwriteProps[j]=k,this._props[j++]={p:k,s:p,c1:s,c2:w,f:q,r:!1}}return!0},q._kill=function(b){for(var c=this._props.length;--c>-1;)null!=b[this._props[c].p]&&this._props.splice(c,1);return a.prototype._kill.call(this,b)},q._roundProps=function(a,b){for(var c=this._props,d=c.length;--d>-1;)(a[c[d].p]||a.throwProps)&&(c[d].r=b)},q.setRatio=function(a){for(var c,d,b=this._props.length;--b>-1;)c=this._props[b],d=c.s+c.c1*a+c.c2*a*a,c.r&&(d=Math.round(d)),c.f?this.target[c.p](d):this.target[c.p]=d},a.activate([e]),e},!0),_gsScope._gsDefine("utils.VelocityTracker",["TweenLite"],function(a){var b,c,d,e,f=/([A-Z])/g,g={},h={x:1,y:1,z:2,scale:1,scaleX:1,scaleY:1,rotation:1,rotationZ:1,rotationX:2,rotationY:2,skewX:1,skewY:1,xPercent:1,yPercent:1},i=document.defaultView?document.defaultView.getComputedStyle:function(){},j=function(a,b,c){var d=(a._gsTransform||g)[b];return d||0===d?d:(a.style[b]?d=a.style[b]:(c=c||i(a,null))?d=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(f,"-$1").toLowerCase()):a.currentStyle&&(d=a.currentStyle[b]),parseFloat(d)||0)},k=a.ticker,l=function(a,b,c){this.p=a,this.f=b,this.v1=this.v2=0,this.t1=this.t2=k.time,this.css=!1,this.type="",this._prev=null,c&&(this._next=c,c._prev=this)},m=function(){var f,g,a=b,c=k.time;if(c-d>=.03)for(e=d,d=c;a;){for(g=a._firstVP;g;)f=g.css?j(a.target,g.p):g.f?a.target[g.p]():a.target[g.p],(f!==g.v1||c-g.t1>.15)&&(g.v2=g.v1,g.v1=f,g.t2=g.t1,g.t1=c),g=g._next;a=a._next}},n=function(a){this._lookup={},this.target=a,this.elem=a.style&&a.nodeType?!0:!1,c||(k.addEventListener("tick",m,null,!1,-100),d=e=k.time,c=!0),b&&(this._next=b,b._prev=this),b=this},o=n.getByTarget=function(a){for(var c=b;c;){if(c.target===a)return c;c=c._next}},p=n.prototype;return p.addProp=function(b,c){if(!this._lookup[b]){var d=this.target,e="function"==typeof d[b],f=e?this._altProp(b):b,g=this._firstVP;this._firstVP=this._lookup[b]=this._lookup[f]=g=new l(f!==b&&0===b.indexOf("set")?f:b,e,g),g.css=this.elem&&(void 0!==this.target.style[g.p]||h[g.p]),g.css&&h[g.p]&&!d._gsTransform&&a.set(d,{x:"+=0",overwrite:!1}),g.type=c||g.css&&0===b.indexOf("rotation")?"deg":"",g.v1=g.v2=g.css?j(d,g.p):e?d[g.p]():d[g.p]}},p.removeProp=function(a){var b=this._lookup[a];b&&(b._prev?b._prev._next=b._next:b===this._firstVP&&(this._firstVP=b._next),b._next&&(b._next._prev=b._prev),this._lookup[a]=0,b.f&&(this._lookup[this._altProp(a)]=0))},p.isTrackingProp=function(a){return this._lookup[a]instanceof l},p.getVelocity=function(a){var d,e,f,b=this._lookup[a],c=this.target;if(!b)throw"The velocity of "+a+" is not being tracked.";return d=b.css?j(c,b.p):b.f?c[b.p]():c[b.p],e=d-b.v2,("rad"===b.type||"deg"===b.type)&&(f="rad"===b.type?2*Math.PI:360,e%=f,e!==e%(f/2)&&(e=0>e?e+f:e-f)),e/(k.time-b.t2)},p._altProp=function(a){var b=a.substr(0,3),c=("get"===b?"set":"set"===b?"get":b)+a.substr(3);return"function"==typeof this.target[c]?c:a},n.getByTarget=function(c){var d=b;for("string"==typeof c&&(c=a.selector(c)),c.length&&c!==window&&c[0]&&c[0].style&&!c.nodeType&&(c=c[0]);d;){if(d.target===c)return d;d=d._next}},n.track=function(a,b,c){var d=o(a),e=b.split(","),f=e.length;for(c=(c||"").split(","),d||(d=new n(a));--f>-1;)d.addProp(e[f],c[f]||c[0]);return d},n.untrack=function(a,c){var d=o(a),e=(c||"").split(","),f=e.length;if(d){for(;--f>-1;)d.removeProp(e[f]);d._firstVP&&c||(d._prev?d._prev._next=d._next:d===b&&(b=d._next),d._next&&(d._next._prev=d._prev))}},n.isTracking=function(a,b){var c=o(a);return c?!b&&c._firstVP?!0:c.isTrackingProp(b):!1},n},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite"],b):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=b())}("ThrowPropsPlugin");



/*!
 * VERSION: 0.8.4
 * DATE: 2016-02-16
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * This is a special version of the plugin that is only to be used on certain sites like codepen.io. It will redirect to a page on GreenSock.com if you try using it on a different domain. Please sign up for Club GreenSock to get the fully-functional version at http://greensock.com/club/
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * MorphSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * For licensing details, see http://greensock.com/licensing/
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;
(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){var G=Math.PI/180,M=180/Math.PI,V=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,F=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,W=/[achlmqstvz]/gi,X=/\d+e[\-\+]\d+/gi,H=_gsScope._gsDefine.globals.TweenLite,x=function(c){window.console&&console.log(c)},Y=function(c,f,e,a,d,b,h,g,q){if(c!==g||f!==q){e=Math.abs(e);a=Math.abs(a);var t=d%360*G;d=Math.cos(t);var t=Math.sin(t),n=(c-g)/2,p=(f-q)/2,k=d*n+t*p,n=-t*n+d*p,p=e*e,r=a*a,u=k*k,l=
n*n,v=u/p+l/r;1<v&&(e*=Math.sqrt(v),a*=Math.sqrt(v),p=e*e,r=a*a);p=(p*r-p*l-r*u)/(p*l+r*u);0>p&&(p=0);b=(b===h?-1:1)*Math.sqrt(p);r=e*n/a*b;u=b*-(a*k/e);c=(c+g)/2+(d*r-t*u);f=(f+q)/2+(t*r+d*u);b=(k-r)/e;p=(n-u)/a;k=(-k-r)/e;r=(-n-u)/a;u=Math.sqrt(b*b+p*p);n=(0>p?-1:1)*Math.acos(b/u)*M;u=Math.sqrt((b*b+p*p)*(k*k+r*r));b=(0>b*r-p*k?-1:1)*Math.acos((b*k+p*r)/u)*M;!h&&0<b?b-=360:h&&0>b&&(b+=360);var k=n%360,p=b%360,m,n=Math.ceil(Math.abs(p)/90);b=0;h=[];k*=G;p*=G;p/=n;r=4/3*Math.sin(p/2)/(1+Math.cos(p/
2));for(m=0;n>m;m++)u=k+m*p,l=Math.cos(u),v=Math.sin(u),h[b++]=l-r*v,h[b++]=v+r*l,u+=p,l=Math.cos(u),v=Math.sin(u),h[b++]=l+r*v,h[b++]=v-r*l,h[b++]=l,h[b++]=v;k=d*e;e*=t;t*=-a;b=d*a;p=h.length-2;for(a=0;p>a;a+=2)d=h[a],n=h[a+1],h[a]=d*k+n*t+c,h[a+1]=d*e+n*b+f;return h[h.length-2]=g,h[h.length-1]=q,h}},D=function(c){var f,e,a,d,b,h,g,q,t,n,p,k,r=(c+"").replace(X,function(a){var b=+a;return 1E-4>b&&-1E-4<b?0:a}).match(V)||[],u=[],l=k=0,v=r.length,m=2,w=0;if(!c||!isNaN(r[0])||isNaN(r[1]))return x("ERROR: malformed path data: "+
c),u;for(f=0;v>f;f++)if(e=b,isNaN(r[f])?(b=r[f].toUpperCase(),h=b!==r[f]):f--,a=+r[f+1],d=+r[f+2],h&&(a+=k,d+=l),0===f&&(q=a,t=d),"M"===b)g&&8>g.length&&(--u.length,m=0),k=q=a,l=t=d,g=[a,d],w+=m,m=2,u.push(g),f+=2,b="L";else if("C"===b)g||(g=[0,0]),g[m++]=a,g[m++]=d,h||(k=l=0),g[m++]=k+1*r[f+3],g[m++]=l+1*r[f+4],g[m++]=k+=1*r[f+5],g[m++]=l+=1*r[f+6],f+=6;else if("S"===b)"C"===e||"S"===e?(n=k-g[m-4],p=l-g[m-3],g[m++]=k+n,g[m++]=l+p):(g[m++]=k,g[m++]=l),g[m++]=a,g[m++]=d,h||(k=l=0),g[m++]=k+=1*r[f+
3],g[m++]=l+=1*r[f+4],f+=4;else if("Q"===b)n=a-k,p=d-l,g[m++]=k+2*n/3,g[m++]=l+2*p/3,h||(k=l=0),k+=1*r[f+3],l+=1*r[f+4],n=a-k,p=d-l,g[m++]=k+2*n/3,g[m++]=l+2*p/3,g[m++]=k,g[m++]=l,f+=4;else if("T"===b)n=k-g[m-4],p=l-g[m-3],g[m++]=k+n,g[m++]=l+p,n=k+1.5*n-a,p=l+1.5*p-d,g[m++]=a+2*n/3,g[m++]=d+2*p/3,g[m++]=k=a,g[m++]=l=d,f+=2;else if("H"===b)d=l,g[m++]=k+(a-k)/3,g[m++]=l+(d-l)/3,g[m++]=k+2*(a-k)/3,g[m++]=l+2*(d-l)/3,g[m++]=k=a,g[m++]=d,f+=1;else if("V"===b)d=a,a=k,h&&(d+=l-k),g[m++]=a,g[m++]=l+(d-l)/
3,g[m++]=a,g[m++]=l+2*(d-l)/3,g[m++]=a,g[m++]=l=d,f+=1;else if("L"===b||"Z"===b)"Z"===b&&(a=q,d=t,g.closed=!0),("L"===b||.5<Math.abs(k-a)||.5<Math.abs(l-d))&&(g[m++]=k+(a-k)/3,g[m++]=l+(d-l)/3,g[m++]=k+2*(a-k)/3,g[m++]=l+2*(d-l)/3,g[m++]=a,g[m++]=d,"L"===b&&(f+=2)),k=a,l=d;else if("A"===b){k=Y(k,l,1*r[f+1],1*r[f+2],1*r[f+3],1*r[f+4],1*r[f+5],(h?k:0)+1*r[f+6],(h?l:0)+1*r[f+7]);for(e=0;e<k.length;e++)g[m++]=k[e];k=g[m-2];l=g[m-1];f+=7}else x("Error: malformed path data: "+c);return u.totalPoints=w+
m,u},E=function(c,f){var e,a,d,b,h,g,q,t,n,p,k,r,u,l,v=0,m=c.length,w=f/((m-2)/6);for(u=2;m>u;u+=6)for(v+=w;.999999<v;)e=c[u-2],a=c[u-1],d=c[u],b=c[u+1],h=c[u+2],g=c[u+3],q=c[u+4],t=c[u+5],l=1/(Math.floor(v)+1),n=e+(d-e)*l,k=d+(h-d)*l,n+=(k-n)*l,k+=(h+(q-h)*l-k)*l,p=a+(b-a)*l,r=b+(g-b)*l,p+=(r-p)*l,r+=(g+(t-g)*l-r)*l,c.splice(u,4,e+(d-e)*l,a+(b-a)*l,n,p,n+(k-n)*l,p+(r-p)*l,k,r,h+(q-h)*l,g+(t-g)*l),u+=6,m+=6,v--;return c},N=function(c){var f,e,a,d,b="",h=c.length;for(e=0;h>e;e++){d=c[e];b+="M"+d[0]+
","+d[1]+" C";f=d.length;for(a=2;f>a;a++)b+=(100*d[a++]|0)/100+","+(100*d[a++]|0)/100+" "+(100*d[a++]|0)/100+","+(100*d[a++]|0)/100+" "+(100*d[a++]|0)/100+","+(100*d[a]|0)/100+" ";d.closed&&(b+="z")}return b},B=function(c){for(var f=[],e=c.length-1,a=0;-1<--e;)f[a++]=c[e],f[a++]=c[e+1],e--;for(e=0;a>e;e++)c[e]=f[e];c.reversed=c.reversed?!1:!0},O=function(c){var f,e=c.length,a=0,d=0;for(f=0;e>f;f++)a+=c[f++],d+=c[f];return[a/(e/2),d/(e/2)]},C=function(c){var f,e,a,d=c.length,b=c[0],h=b,g=c[1],q=g;
for(a=6;d>a;a+=6)f=c[a],e=c[a+1],f>b?b=f:h>f&&(h=f),e>g?g=e:q>e&&(q=e);return c.centerX=(b+h)/2,c.centerY=(g+q)/2,c.size=(b-h)*(g-q)},P=function(c){for(var f,e,a,d,b,h=c.length,g=c[0][0],q=g,t=c[0][1],n=t;-1<--h;)for(b=c[h],f=b.length,d=6;f>d;d+=6)e=b[d],a=b[d+1],e>g?g=e:q>e&&(q=e),a>t?t=a:n>a&&(n=a);return c.centerX=(g+q)/2,c.centerY=(t+n)/2,c.size=(g-q)*(t-n)},Z=function(c,f){return f.length-c.length},Q=function(c,f){var e=c.size||C(c),a=f.size||C(f);return Math.abs(a-e)<(e+a)/20?f.centerX-c.centerX||
f.centerY-c.centerY:a-e},R=function(c,f){var e,a,d=c.slice(0),b=c.length,h=b-2;f|=0;for(e=0;b>e;e++)a=(e+f)%h,c[e++]=d[a],c[e]=d[a+1]},I=function(c,f,e,a,d){var b,h,g,q=c.length,t=0,n=q-2;e*=6;for(h=0;q>h;h+=6)b=(h+e)%n,g=c[b]-(f[h]-a),b=c[b+1]-(f[h+1]-d),t+=Math.sqrt(b*b+g*g);return t},aa=function(c,f,e,a,d,b){var h,g,q=f.length,t=0;a*=Math.min(c.size||C(c),f[e].size||C(f[e]));var n=999999999999;d=c.centerX+d;for(c=c.centerY+b;q>e&&(h=f[e].size||C(f[e]),!(a>h));e++)g=f[e].centerX-d,b=f[e].centerY-
c,g=Math.sqrt(g*g+b*b),n>g&&(t=e,n=g);return g=f[t],f.splice(t,1),g},S=function(c,f,e,a){var d,b,h,g,q=f.length-c.length;d=0<q?f:c;b=0<q?c:f;var t=0,n="complexity"===a?Z:Q,p="position"===a?0:"number"==typeof a?a:.8;a=b.length;var k="object"==typeof e&&e.push?e.slice(0):[e],r="reverse"===k[0]||0>k[0],u="log"===e;if(b[0]){if(1<d.length&&(c.sort(n),f.sort(n),h=d.size||P(d),h=b.size||P(b),h=d.centerX-b.centerX,g=d.centerY-b.centerY,n===Q))for(a=0;a<b.length;a++)d.splice(a,0,aa(b[a],d,a,p,h,g));if(q)for(0>
q&&(q=-q),d[0].length>b[0].length&&E(b[0],(d[0].length-b[0].length)/6|0),a=b.length;q>t;){d[a].size||C(d[a]);var l=e=void 0,v=void 0;g=h=l=void 0;for(var n=b.length,p=99999999999,m=0,w=0;-1<--n;)for(e=b[n],g=e.length,h=0;g>h;h+=6)l=e[h]-d[a].centerX,v=e[h+1]-d[a].centerY,l=Math.sqrt(l*l+v*v),p>l&&(p=l,m=e[h],w=e[h+1]);h=[m,w];e=h[0];h=h[1];b[a++]=[e,h,e,h,e,h,e,h];b.totalPoints+=8;t++}for(a=0;a<c.length;a++)if(d=f[a],b=c[a],q=d.length-b.length,0>q?E(d,-q/6|0):0<q&&E(b,q/6|0),r&&!b.reversed&&B(b),
e=k[a]||0===k[a]?k[a]:"auto"){if(b.closed||.5>Math.abs(b[0]-b[b.length-2])&&.5>Math.abs(b[1]-b[b.length-1]))if("auto"===e||"log"===e){q=a;t=b;e=d;h=0===a;w=m=p=void 0;g=t.length;for(var p=O(t),m=O(e),n=m[0]-p[0],l=m[1]-p[1],v=I(t,e,0,n,l),z=0,w=6;g>w;w+=6)m=I(t,e,w/6,n,l),v>m&&(v=m,z=w);if(h)for(p=t.slice(0),B(p),w=6;g>w;w+=6)m=I(p,e,w/6,n,l),v>m&&(v=m,z=-w);k[q]=e=z/6;0>e&&(r=!0,B(b),e=-e);R(b,6*e)}else"reverse"!==e&&(a&&0>e&&B(b),R(b,6*(0>e?-e:e)));else!r&&("auto"===e&&Math.abs(d[0]-b[0])+Math.abs(d[1]-
b[1])+Math.abs(d[d.length-2]-b[b.length-2])+Math.abs(d[d.length-1]-b[b.length-1])>Math.abs(d[0]-b[b.length-2])+Math.abs(d[1]-b[b.length-1])+Math.abs(d[d.length-2]-b[0])+Math.abs(d[d.length-1]-b[1])||e%2)?(B(b),k[a]=-1,r=!0):"auto"===e?k[a]=0:"reverse"===e&&(k[a]=-1);b.closed!==d.closed&&(b.closed=d.closed=!1)}return u&&x("shapeIndex:["+k.join(",")+"]"),k}},J=function(c,f,e,a){var d=D(c[0]),b=D(c[1]);S(d,b,f||0===f?f:"auto",e)&&(c[0]=N(d),c[1]=N(b),("log"===a||!0===a)&&x('precompile:["'+c[0]+'","'+
c[1]+'"]'))},ba=function(c,f,e){return f||e||c||0===c?function(a){J(a,c,f,e)}:J},T=function(c,f){var e,a,d,b,h,g,q,t=0,n=parseFloat(c[0]),p=parseFloat(c[1]),k=n+","+p+" ";d=c.length;e=.5*f/(.5*d-1);for(a=0;d-2>a;a+=2){if(t+=e,g=parseFloat(c[a+2]),q=parseFloat(c[a+3]),.999999<t)for(h=1/(Math.floor(t)+1),b=1;.999999<t;)k+=(n+(g-n)*h*b).toFixed(2)+","+(p+(q-p)*h*b).toFixed(2)+" ",t--,b++;k+=g+","+q+" ";n=g;p=q}return k},K=function(c){var f=c[0].match(F)||[],e=c[1].match(F)||[],a=e.length-f.length;0<
a?c[0]=T(f,a):c[1]=T(e,-a)},ca=function(c){return isNaN(c)?K:function(f){K(f);var e;var a=f[1],d=parseInt(c,10);if(d){var b,a=a.match(F)||[],h=a.length,g="";"reverse"===d?(b=h-1,e=-2):(b=(2*(parseInt(d,10)||0)+1+100*h)%h,e=2);for(d=0;h>d;d+=2)g+=a[b-1]+","+a[b]+" ",b=(b+e)%h;e=g}else e=a;f[1]=e}},U=function(c,f){var e,a,d,b,h,g,q,t,n,p,k,r,u,l,v,m,w,z,y,x,A=c.tagName.toLowerCase();if("path"!==A&&c.getBBox){for(var C="x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points",B=document.createElementNS("http://www.w3.org/2000/svg",
"path"),D=Array.prototype.slice.call(c.attributes),E=D.length,C=","+C+",";-1<--E;)-1===C.indexOf(","+D[E].nodeName+",")&&B.setAttributeNS(null,D[E].nodeName,D[E].nodeValue);A=("rect"===A?(b=+c.getAttribute("rx")||0,h=+c.getAttribute("ry")||0,a=+c.getAttribute("x")||0,d=+c.getAttribute("y")||0,n=(+c.getAttribute("width")||0)-2*b,p=(+c.getAttribute("height")||0)-2*h,b||h?(k=a+b*(1-.552284749831),r=a+b,u=r+n,l=u+.552284749831*b,v=u+b,m=d+h*(1-.552284749831),w=d+h,z=w+p,y=z+.552284749831*h,x=z+h,e="M"+
v+","+w+" V"+z+" C"+[v,y,l,x,u,x,u-(u-r)/3,x,r+(u-r)/3,x,r,x,k,x,a,y,a,z,a,z-(z-w)/3,a,w+(z-w)/3,a,w,a,m,k,d,r,d,r+(u-r)/3,d,u-(u-r)/3,d,u,d,l,d,v,m,v,w].join()+"z"):e="M"+(a+n)+","+d+" v"+p+" h"+-n+" v"+-p+" h"+n+"z"):"circle"===A||"ellipse"===A?("circle"===A?(b=h=+c.getAttribute("r")||0,q=.552284749831*b):(b=+c.getAttribute("rx")||0,h=+c.getAttribute("ry")||0,q=.552284749831*h),a=+c.getAttribute("cx")||0,d=+c.getAttribute("cy")||0,g=.552284749831*b,e="M"+(a+b)+","+d+" C"+[a+b,d+q,a+g,d+h,a,d+h,
a-g,d+h,a-b,d+q,a-b,d,a-b,d-q,a-g,d-h,a,d-h,a+g,d-h,a+b,d-q,a+b,d].join()+"z"):"line"===A?e="M"+c.getAttribute("x1")+","+c.getAttribute("y1")+" L"+c.getAttribute("x2")+","+c.getAttribute("y2"):("polyline"===A||"polygon"===A)&&(t=(c.getAttribute("points")+"").match(F)||[],a=t.shift(),d=t.shift(),e="M"+a+","+d+" L"+t.join(","),"polygon"===A&&(e+=","+a+","+d+"z")),B.setAttribute("d",e),f&&c.parentNode&&(c.parentNode.insertBefore(B,c),c.parentNode.removeChild(c)),B)}else A=c;return A},L=function(c,f,
e){var a,d,b="string"==typeof c;return(!b||3>(c.match(F)||[]).length)&&(a=b?H.selector(c):c&&c[0]?c:[c],a&&a[0]?(a=a[0],d=a.nodeName.toUpperCase(),f&&"PATH"!==d&&(a=U(a,!1),d="PATH"),c=a.getAttribute("PATH"===d?"d":"points")||"",a===e&&(c=a.getAttributeNS(null,"data-original")||c)):(x("WARNING: invalid morph to: "+c),c=!1)),c},y=_gsScope._gsDefine.plugin({propName:"morphSVG",API:2,global:!0,version:"0.8.4",init:function(c,f,e){var a,d,b,h,g;return"function"!=typeof c.setAttribute?!1:(a=c.nodeName.toUpperCase(),
g="POLYLINE"===a||"POLYGON"===a,"PATH"===a||g?(d="PATH"===a?"d":"points",("string"==typeof f||f.getBBox||f[0])&&(f={shape:f}),h=L(f.shape||f.d||f.points||"","d"===d,c),g&&W.test(h)?(x("WARNING: a <"+a+"> cannot accept path data. Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing."),!1):(h&&(this._target=c,c.getAttributeNS(null,"data-original")||c.setAttributeNS(null,"data-original",c.getAttribute(d)),b=this._addTween(c,"setAttribute",c.getAttribute(d)+"",
h+"","morphSVG",!1,d,"object"==typeof f.precompile?function(a){a[0]=f.precompile[0];a[1]=f.precompile[1]}:"d"===d?ba(f.shapeIndex,f.map||y.defaultMap,f.precompile):ca(f.shapeIndex)),b&&(this._overwriteProps.push("morphSVG"),b.end=h,b.endProp=d)),!0)):(x("WARNING: cannot morph a <"+a+"> SVG element. Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing."),!1))},set:function(c){if(this._super.setRatio.call(this,c),1===c)for(c=this._firstPT;c;)c.end&&this._target.setAttribute(c.endProp,
c.end),c=c._next}});y.pathFilter=J;y.pointsFilter=K;y.subdivideRawBezier=E;y.defaultMap="size";y.pathDataToRawBezier=function(c){return D(L(c,!0))};y.equalizeSegmentQuantity=S;y.convertToPath=function(c,f){"string"==typeof c&&(c=H.selector(c));for(var e=c&&0!==c.length?c.length&&c[0]&&c[0].nodeType?Array.prototype.slice.call(c,0):[c]:[],a=e.length;-1<--a;)e[a]=U(e[a],!1!==f);return e};y.pathDataToBezier=function(c,f){var e,a,d,b,h,g,q,t=D(L(c,!0))[0]||[],n=0;if(f=f||{},q=f.align||f.relative,b=f.matrix||
[1,0,0,1,0,0],h=f.offsetX||0,g=f.offsetY||0,"relative"===q||!0===q?(h-=t[0]*b[0]+t[1]*b[2],g-=t[0]*b[1]+t[1]*b[3],n="+="):(h+=b[4],g+=b[5],q&&(q="string"==typeof q?H.selector(q):q&&q[0]?q:[q],q&&q[0]&&(a=q[0].getBBox()||{x:0,y:0},h-=a.x,g-=a.y))),e=[],d=t.length,b)for(a=0;d>a;a+=2)e.push({x:n+(t[a]*b[0]+t[a+1]*b[2]+h),y:n+(t[a]*b[1]+t[a+1]*b[3]+g)});else for(a=0;d>a;a+=2)e.push({x:n+(t[a]+h),y:n+(t[a+1]+g)});return e}});_gsScope._gsDefine&&_gsScope._gsQueue.pop()();


/*!
 * VERSION: 0.0.10
 * DATE: 2016-02-11
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * This is a special version of the plugin that is only to be used on certain sites like codepen.io. It will redirect to a page on GreenSock.com if you try using it on a different domain. Please sign up for Club GreenSock to get the fully-functional version at http://greensock.com/club/
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * DrawSVGPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * For licensing details, see http://greensock.com/licensing/
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;
(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){function l(a,c,b,d){return b=parseFloat(b)-parseFloat(a),d=parseFloat(d)-parseFloat(c),Math.sqrt(b*b+d*d)}function m(a){return"string"!=typeof a&&a.nodeType||(a=_gsScope.TweenLite.selector(a),a.length&&(a=a[0])),a}function k(a){if(!a)return 0;a=m(a);var c,b,d,e;b=a.tagName.toLowerCase();if("path"===b){b=a.style.strokeDasharray;a.style.strokeDasharray="none";c=a.getTotalLength()||0;try{a.getBBox()}catch(f){}a.style.strokeDasharray=b}else if("rect"===
b)c=2*a.getAttribute("width")+2*a.getAttribute("height");else if("circle"===b)c=2*Math.PI*parseFloat(a.getAttribute("r"));else if("line"===b)c=l(a.getAttribute("x1"),a.getAttribute("y1"),a.getAttribute("x2"),a.getAttribute("y2"));else if("polyline"===b||"polygon"===b)for(a=a.getAttribute("points").match(p)||[],"polygon"===b&&a.push(a[0],a[1]),c=0,b=2;b<a.length;b+=2)c+=l(a[b-2],a[b-1],a[b],a[b+1])||0;else"ellipse"===b&&(d=parseFloat(a.getAttribute("rx")),e=parseFloat(a.getAttribute("ry")),c=Math.PI*
(3*(d+e)-Math.sqrt((3*d+e)*(d+3*e))));return c||0}function n(a,c){if(!a)return[0,0];a=m(a);c=c||k(a)+1;var b=q(a),d=b.strokeDasharray||"",b=parseFloat(b.strokeDashoffset),e=d.indexOf(",");return 0>e&&(e=d.indexOf(" ")),d=0>e?c:parseFloat(d.substr(0,e))||1E-5,d>c&&(d=c),[Math.max(0,-b),Math.max(0,d-b)]}var h,q=document.defaultView?document.defaultView.getComputedStyle:function(){},p=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi;h=_gsScope._gsDefine.plugin({propName:"drawSVG",API:2,version:"0.0.10",
global:!0,overwriteProps:["drawSVG"],init:function(a,c,b){if(!a.getBBox)return!1;var d;b=k(a)+1;this._style=a.style;!0===c||"true"===c?c="0 100%":c?-1===(c+"").indexOf(" ")&&(c="0 "+c):c="0 0";a=n(a,b);var e=a[0],f,g,h=c.indexOf(" ");c=(-1===h?(f=void 0!==e?e+"":c,g=c):(f=c.substr(0,h),g=c.substr(h+1)),f=-1!==f.indexOf("%")?parseFloat(f)/100*b:parseFloat(f),g=-1!==g.indexOf("%")?parseFloat(g)/100*b:parseFloat(g),f>g?[g,f]:[f,g]);return this._length=b+10,0===a[0]&&0===c[0]?(d=Math.max(1E-5,c[1]-b),
this._dash=b+d,this._offset=b-a[1]+d,this._addTween(this,"_offset",this._offset,b-c[1]+d,"drawSVG")):(this._dash=a[1]-a[0]||1E-6,this._offset=-a[0],this._addTween(this,"_dash",this._dash,c[1]-c[0]||1E-5,"drawSVG"),this._addTween(this,"_offset",this._offset,-c[0],"drawSVG")),!0},set:function(a){this._firstPT&&(this._super.setRatio.call(this,a),this._style.strokeDashoffset=this._offset,1===a||0===a?this._style.strokeDasharray=.001>this._offset&&10>=this._length-this._dash?"none":this._offset===this._dash?
"0px, 999999px":this._dash+"px,"+this._length+"px":this._style.strokeDasharray=this._dash+"px,"+this._length+"px")}});h.getLength=k;h.getPosition=n});_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
/*! Hammer.JS - v2.0.6 - 2015-12-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2015 Jorik Tangelder;
 * Licensed under the  license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&hb(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==kb?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ib.length;){if(c=ib[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return qb++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:tb?M:ub?P:sb?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ab&&d-e===0,g=b&(Cb|Db)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=nb(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=mb(j.x)>mb(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===Ab||f.eventType===Cb)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Db&&(i>zb||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=mb(l.x)>mb(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:lb(a.pointers[c].clientX),clientY:lb(a.pointers[c].clientY)},c++;return{timeStamp:nb(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:lb(a[0].clientX),y:lb(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:lb(c/b),y:lb(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Eb:mb(a)>=mb(b)?0>a?Fb:Gb:0>b?Hb:Ib}function H(a,b,c){c||(c=Mb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Mb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Nb)+I(a[1],a[0],Nb)}function K(a,b){return H(b[0],b[1],Nb)/H(a[0],a[1],Nb)}function L(){this.evEl=Pb,this.evWin=Qb,this.allow=!0,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Tb,this.evWin=Ub,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=Wb,this.evWin=Xb,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Cb|Db)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=Zb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ab|Bb)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ab)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Cb|Db)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a)}function S(a,b){this.manager=a,this.set(b)}function T(a){if(p(a,dc))return dc;var b=p(a,ec),c=p(a,fc);return b&&c?dc:b||c?b?ec:fc:p(a,cc)?cc:bc}function U(a){this.options=hb({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=gc,this.simultaneous={},this.requireFail=[]}function V(a){return a&lc?"cancel":a&jc?"end":a&ic?"move":a&hc?"start":""}function W(a){return a==Ib?"down":a==Hb?"up":a==Fb?"left":a==Gb?"right":""}function X(a,b){var c=b.manager;return c?c.get(a):a}function Y(){U.apply(this,arguments)}function Z(){Y.apply(this,arguments),this.pX=null,this.pY=null}function $(){Y.apply(this,arguments)}function _(){U.apply(this,arguments),this._timer=null,this._input=null}function ab(){Y.apply(this,arguments)}function bb(){Y.apply(this,arguments)}function cb(){U.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function db(a,b){return b=b||{},b.recognizers=l(b.recognizers,db.defaults.preset),new eb(a,b)}function eb(a,b){this.options=hb({},db.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=y(this),this.touchAction=new S(this,this.options.touchAction),fb(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function fb(a,b){var c=a.element;c.style&&g(a.options.cssProps,function(a,d){c.style[u(c.style,d)]=b?a:""})}function gb(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var hb,ib=["","webkit","Moz","MS","ms","o"],jb=b.createElement("div"),kb="function",lb=Math.round,mb=Math.abs,nb=Date.now;hb="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var ob=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),pb=h(function(a,b){return ob(a,b,!0)},"merge","Use `assign`."),qb=1,rb=/mobile|tablet|ip(ad|hone|od)|android/i,sb="ontouchstart"in a,tb=u(a,"PointerEvent")!==d,ub=sb&&rb.test(navigator.userAgent),vb="touch",wb="pen",xb="mouse",yb="kinect",zb=25,Ab=1,Bb=2,Cb=4,Db=8,Eb=1,Fb=2,Gb=4,Hb=8,Ib=16,Jb=Fb|Gb,Kb=Hb|Ib,Lb=Jb|Kb,Mb=["x","y"],Nb=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Ob={mousedown:Ab,mousemove:Bb,mouseup:Cb},Pb="mousedown",Qb="mousemove mouseup";i(L,x,{handler:function(a){var b=Ob[a.type];b&Ab&&0===a.button&&(this.pressed=!0),b&Bb&&1!==a.which&&(b=Cb),this.pressed&&this.allow&&(b&Cb&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:xb,srcEvent:a}))}});var Rb={pointerdown:Ab,pointermove:Bb,pointerup:Cb,pointercancel:Db,pointerout:Db},Sb={2:vb,3:wb,4:xb,5:yb},Tb="pointerdown",Ub="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Tb="MSPointerDown",Ub="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Rb[d],f=Sb[a.pointerType]||a.pointerType,g=f==vb,h=r(b,a.pointerId,"pointerId");e&Ab&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Cb|Db)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Vb={touchstart:Ab,touchmove:Bb,touchend:Cb,touchcancel:Db},Wb="touchstart",Xb="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Vb[a.type];if(b===Ab&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Cb|Db)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:vb,srcEvent:a})}}});var Yb={touchstart:Ab,touchmove:Bb,touchend:Cb,touchcancel:Db},Zb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=Yb[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:vb,srcEvent:a})}}),i(R,x,{handler:function(a,b,c){var d=c.pointerType==vb,e=c.pointerType==xb;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Cb|Db)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var $b=u(jb.style,"touchAction"),_b=$b!==d,ac="compute",bc="auto",cc="manipulation",dc="none",ec="pan-x",fc="pan-y";S.prototype={set:function(a){a==ac&&(a=this.compute()),_b&&this.manager.element.style&&(this.manager.element.style[$b]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),T(a.join(" "))},preventDefaults:function(a){if(!_b){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,dc),f=p(d,fc),g=p(d,ec);if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}if(!g||!f)return e||f&&c&Jb||g&&c&Kb?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var gc=1,hc=2,ic=4,jc=8,kc=jc,lc=16,mc=32;U.prototype={defaults:{},set:function(a){return hb(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=X(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=X(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=X(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=X(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;jc>d&&b(c.options.event+V(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=jc&&b(c.options.event+V(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=mc)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(mc|gc)))return!1;a++}return!0},recognize:function(a){var b=hb({},a);return k(this.options.enable,[this,b])?(this.state&(kc|lc|mc)&&(this.state=gc),this.state=this.process(b),void(this.state&(hc|ic|jc|lc)&&this.tryEmit(b))):(this.reset(),void(this.state=mc))},process:function(){},getTouchAction:function(){},reset:function(){}},i(Y,U,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(hc|ic),e=this.attrTest(a);return d&&(c&Db||!e)?b|lc:d||e?c&Cb?b|jc:b&hc?b|ic:hc:mc}}),i(Z,Y,{defaults:{event:"pan",threshold:10,pointers:1,direction:Lb},getTouchAction:function(){var a=this.options.direction,b=[];return a&Jb&&b.push(fc),a&Kb&&b.push(ec),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Jb?(e=0===f?Eb:0>f?Fb:Gb,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Eb:0>g?Hb:Ib,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Y.prototype.attrTest.call(this,a)&&(this.state&hc||!(this.state&hc)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=W(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i($,Y,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[dc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&hc)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(_,U,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[bc]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Cb|Db)&&!f)this.reset();else if(a.eventType&Ab)this.reset(),this._timer=e(function(){this.state=kc,this.tryEmit()},b.time,this);else if(a.eventType&Cb)return kc;return mc},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===kc&&(a&&a.eventType&Cb?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=nb(),this.manager.emit(this.options.event,this._input)))}}),i(ab,Y,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[dc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&hc)}}),i(bb,Y,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Jb|Kb,pointers:1},getTouchAction:function(){return Z.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Jb|Kb)?b=a.overallVelocity:c&Jb?b=a.overallVelocityX:c&Kb&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&mb(b)>this.options.velocity&&a.eventType&Cb},emit:function(a){var b=W(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(cb,U,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[cc]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ab&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Cb)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=kc,this.tryEmit()},b.interval,this),hc):kc}return mc},failTimeout:function(){return this._timer=e(function(){this.state=mc},this.options.interval,this),mc},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==kc&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),db.VERSION="2.0.6",db.defaults={domEvents:!1,touchAction:ac,enable:!0,inputTarget:null,inputClass:null,preset:[[ab,{enable:!1}],[$,{enable:!1},["rotate"]],[bb,{direction:Jb}],[Z,{direction:Jb},["swipe"]],[cb],[cb,{event:"doubletap",taps:2},["tap"]],[_]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var nc=1,oc=2;eb.prototype={set:function(a){return hb(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?oc:nc},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&kc)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===oc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(hc|ic|jc)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof U)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&gb(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&fb(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},hb(db,{INPUT_START:Ab,INPUT_MOVE:Bb,INPUT_END:Cb,INPUT_CANCEL:Db,STATE_POSSIBLE:gc,STATE_BEGAN:hc,STATE_CHANGED:ic,STATE_ENDED:jc,STATE_RECOGNIZED:kc,STATE_CANCELLED:lc,STATE_FAILED:mc,DIRECTION_NONE:Eb,DIRECTION_LEFT:Fb,DIRECTION_RIGHT:Gb,DIRECTION_UP:Hb,DIRECTION_DOWN:Ib,DIRECTION_HORIZONTAL:Jb,DIRECTION_VERTICAL:Kb,DIRECTION_ALL:Lb,Manager:eb,Input:x,TouchAction:S,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:U,AttrRecognizer:Y,Tap:cb,Pan:Z,Swipe:bb,Pinch:$,Rotate:ab,Press:_,on:m,off:n,each:g,merge:pb,extend:ob,assign:hb,inherit:i,bindFn:j,prefixed:u});var pc="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};pc.Hammer=db,"function"==typeof define&&define.amd?define(function(){return db}):"undefined"!=typeof module&&module.exports?module.exports=db:a[c]=db}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.map
//
// Generated on Tue Dec 16 2014 12:13:47 GMT+0100 (CET) by Charlie Robbins, Paolo Fragomeni & the Contributors (Using Codesurgeon).
// Version 1.2.6
//
(function(a){function k(a,b,c,d){var e=0,f=0,g=0,c=(c||"(").toString(),d=(d||")").toString(),h;for(h=0;h<a.length;h++){var i=a[h];if(i.indexOf(c,e)>i.indexOf(d,e)||~i.indexOf(c,e)&&!~i.indexOf(d,e)||!~i.indexOf(c,e)&&~i.indexOf(d,e)){f=i.indexOf(c,e),g=i.indexOf(d,e);if(~f&&!~g||!~f&&~g){var j=a.slice(0,(h||1)+1).join(b);a=[j].concat(a.slice((h||1)+1))}e=(g>f?g:f)+1,h=0}else e=0}return a}function j(a,b){var c,d=0,e="";while(c=a.substr(d).match(/[^\w\d\- %@&]*\*[^\w\d\- %@&]*/))d=c.index+c[0].length,c[0]=c[0].replace(/^\*/,"([_.()!\\ %@&a-zA-Z0-9-]+)"),e+=a.substr(0,c.index)+c[0];a=e+=a.substr(d);var f=a.match(/:([^\/]+)/ig),g,h;if(f){h=f.length;for(var j=0;j<h;j++)g=f[j],g.slice(0,2)==="::"?a=g.slice(1):a=a.replace(g,i(g,b))}return a}function i(a,b,c){c=a;for(var d in b)if(b.hasOwnProperty(d)){c=b[d](a);if(c!==a)break}return c===a?"([._a-zA-Z0-9-%()]+)":c}function h(a,b,c){if(!a.length)return c();var d=0;(function e(){b(a[d],function(b){b||b===!1?(c(b),c=function(){}):(d+=1,d===a.length?c():e())})})()}function g(a){var b=[];for(var c=0,d=a.length;c<d;c++)b=b.concat(a[c]);return b}function f(a,b){for(var c=0;c<a.length;c+=1)if(b(a[c],c,a)===!1)return}function c(){return b.hash===""||b.hash==="#"}var b=document.location,d={mode:"modern",hash:b.hash,history:!1,check:function(){var a=b.hash;a!=this.hash&&(this.hash=a,this.onHashChanged())},fire:function(){this.mode==="modern"?this.history===!0?window.onpopstate():window.onhashchange():this.onHashChanged()},init:function(a,b){function d(a){for(var b=0,c=e.listeners.length;b<c;b++)e.listeners[b](a)}var c=this;this.history=b,e.listeners||(e.listeners=[]);if("onhashchange"in window&&(document.documentMode===undefined||document.documentMode>7))this.history===!0?setTimeout(function(){window.onpopstate=d},500):window.onhashchange=d,this.mode="modern";else{var f=document.createElement("iframe");f.id="state-frame",f.style.display="none",document.body.appendChild(f),this.writeFrame(""),"onpropertychange"in document&&"attachEvent"in document&&document.attachEvent("onpropertychange",function(){event.propertyName==="location"&&c.check()}),window.setInterval(function(){c.check()},50),this.onHashChanged=d,this.mode="legacy"}e.listeners.push(a);return this.mode},destroy:function(a){if(!!e&&!!e.listeners){var b=e.listeners;for(var c=b.length-1;c>=0;c--)b[c]===a&&b.splice(c,1)}},setHash:function(a){this.mode==="legacy"&&this.writeFrame(a),this.history===!0?(window.history.pushState({},document.title,a),this.fire()):b.hash=a[0]==="/"?a:"/"+a;return this},writeFrame:function(a){var b=document.getElementById("state-frame"),c=b.contentDocument||b.contentWindow.document;c.open(),c.write("<script>_hash = '"+a+"'; onload = parent.listener.syncHash;<script>"),c.close()},syncHash:function(){var a=this._hash;a!=b.hash&&(b.hash=a);return this},onHashChanged:function(){}},e=a.Router=function(a){if(this instanceof e)this.params={},this.routes={},this.methods=["on","once","after","before"],this.scope=[],this._methods={},this._insert=this.insert,this.insert=this.insertEx,this.historySupport=(window.history!=null?window.history.pushState:null)!=null,this.configure(),this.mount(a||{});else return new e(a)};e.prototype.init=function(a){var e=this,f;this.handler=function(a){var b=a&&a.newURL||window.location.hash,c=e.history===!0?e.getPath():b.replace(/.*#/,"");e.dispatch("on",c.charAt(0)==="/"?c:"/"+c)},d.init(this.handler,this.history),this.history===!1?c()&&a?b.hash=a:c()||e.dispatch("on","/"+b.hash.replace(/^(#\/|#|\/)/,"")):(this.convert_hash_in_init?(f=c()&&a?a:c()?null:b.hash.replace(/^#/,""),f&&window.history.replaceState({},document.title,f)):f=this.getPath(),(f||this.run_in_init===!0)&&this.handler());return this},e.prototype.explode=function(){var a=this.history===!0?this.getPath():b.hash;a.charAt(1)==="/"&&(a=a.slice(1));return a.slice(1,a.length).split("/")},e.prototype.setRoute=function(a,b,c){var e=this.explode();typeof a=="number"&&typeof b=="string"?e[a]=b:typeof c=="string"?e.splice(a,b,s):e=[a],d.setHash(e.join("/"));return e},e.prototype.insertEx=function(a,b,c,d){a==="once"&&(a="on",c=function(a){var b=!1;return function(){if(!b){b=!0;return a.apply(this,arguments)}}}(c));return this._insert(a,b,c,d)},e.prototype.getRoute=function(a){var b=a;if(typeof a=="number")b=this.explode()[a];else if(typeof a=="string"){var c=this.explode();b=c.indexOf(a)}else b=this.explode();return b},e.prototype.destroy=function(){d.destroy(this.handler);return this},e.prototype.getPath=function(){var a=window.location.pathname;a.substr(0,1)!=="/"&&(a="/"+a);return a};var l=/\?.*/;e.prototype.configure=function(a){a=a||{};for(var b=0;b<this.methods.length;b++)this._methods[this.methods[b]]=!0;this.recurse=a.recurse||this.recurse||!1,this.async=a.async||!1,this.delimiter=a.delimiter||"/",this.strict=typeof a.strict=="undefined"?!0:a.strict,this.notfound=a.notfound,this.resource=a.resource,this.history=a.html5history&&this.historySupport||!1,this.run_in_init=this.history===!0&&a.run_handler_in_init!==!1,this.convert_hash_in_init=this.history===!0&&a.convert_hash_in_init!==!1,this.every={after:a.after||null,before:a.before||null,on:a.on||null};return this},e.prototype.param=function(a,b){a[0]!==":"&&(a=":"+a);var c=new RegExp(a,"g");this.params[a]=function(a){return a.replace(c,b.source||b)};return this},e.prototype.on=e.prototype.route=function(a,b,c){var d=this;!c&&typeof b=="function"&&(c=b,b=a,a="on");if(Array.isArray(b))return b.forEach(function(b){d.on(a,b,c)});b.source&&(b=b.source.replace(/\\\//ig,"/"));if(Array.isArray(a))return a.forEach(function(a){d.on(a.toLowerCase(),b,c)});b=b.split(new RegExp(this.delimiter)),b=k(b,this.delimiter),this.insert(a,this.scope.concat(b),c)},e.prototype.path=function(a,b){var c=this,d=this.scope.length;a.source&&(a=a.source.replace(/\\\//ig,"/")),a=a.split(new RegExp(this.delimiter)),a=k(a,this.delimiter),this.scope=this.scope.concat(a),b.call(this,this),this.scope.splice(d,a.length)},e.prototype.dispatch=function(a,b,c){function h(){d.last=e.after,d.invoke(d.runlist(e),d,c)}var d=this,e=this.traverse(a,b.replace(l,""),this.routes,""),f=this._invoked,g;this._invoked=!0;if(!e||e.length===0){this.last=[],typeof this.notfound=="function"&&this.invoke([this.notfound],{method:a,path:b},c);return!1}this.recurse==="forward"&&(e=e.reverse()),g=this.every&&this.every.after?[this.every.after].concat(this.last):[this.last];if(g&&g.length>0&&f){this.async?this.invoke(g,this,h):(this.invoke(g,this),h());return!0}h();return!0},e.prototype.invoke=function(a,b,c){var d=this,e;this.async?(e=function(c,d){if(Array.isArray(c))return h(c,e,d);typeof c=="function"&&c.apply(b,(a.captures||[]).concat(d))},h(a,e,function(){c&&c.apply(b,arguments)})):(e=function(c){if(Array.isArray(c))return f(c,e);if(typeof c=="function")return c.apply(b,a.captures||[]);typeof c=="string"&&d.resource&&d.resource[c].apply(b,a.captures||[])},f(a,e))},e.prototype.traverse=function(a,b,c,d,e){function l(a){function c(a){for(var b=a.length-1;b>=0;b--)Array.isArray(a[b])?(c(a[b]),a[b].length===0&&a.splice(b,1)):e(a[b])||a.splice(b,1)}function b(a){var c=[];for(var d=0;d<a.length;d++)c[d]=Array.isArray(a[d])?b(a[d]):a[d];return c}if(!e)return a;var d=b(a);d.matched=a.matched,d.captures=a.captures,d.after=a.after.filter(e),c(d);return d}var f=[],g,h,i,j,k;if(b===this.delimiter&&c[a]){j=[[c.before,c[a]].filter(Boolean)],j.after=[c.after].filter(Boolean),j.matched=!0,j.captures=[];return l(j)}for(var m in c)if(c.hasOwnProperty(m)&&(!this._methods[m]||this._methods[m]&&typeof c[m]=="object"&&!Array.isArray(c[m]))){g=h=d+this.delimiter+m,this.strict||(h+="["+this.delimiter+"]?"),i=b.match(new RegExp("^"+h));if(!i)continue;if(i[0]&&i[0]==b&&c[m][a]){j=[[c[m].before,c[m][a]].filter(Boolean)],j.after=[c[m].after].filter(Boolean),j.matched=!0,j.captures=i.slice(1),this.recurse&&c===this.routes&&(j.push([c.before,c.on].filter(Boolean)),j.after=j.after.concat([c.after].filter(Boolean)));return l(j)}j=this.traverse(a,b,c[m],g);if(j.matched){j.length>0&&(f=f.concat(j)),this.recurse&&(f.push([c[m].before,c[m].on].filter(Boolean)),j.after=j.after.concat([c[m].after].filter(Boolean)),c===this.routes&&(f.push([c.before,c.on].filter(Boolean)),j.after=j.after.concat([c.after].filter(Boolean)))),f.matched=!0,f.captures=j.captures,f.after=j.after;return l(f)}}return!1},e.prototype.insert=function(a,b,c,d){var e,f,g,h,i;b=b.filter(function(a){return a&&a.length>0}),d=d||this.routes,i=b.shift(),/\:|\*/.test(i)&&!/\\d|\\w/.test(i)&&(i=j(i,this.params));if(b.length>0){d[i]=d[i]||{};return this.insert(a,b,c,d[i])}{if(!!i||!!b.length||d!==this.routes){f=typeof d[i],g=Array.isArray(d[i]);if(d[i]&&!g&&f=="object"){e=typeof d[i][a];switch(e){case"function":d[i][a]=[d[i][a],c];return;case"object":d[i][a].push(c);return;case"undefined":d[i][a]=c;return}}else if(f=="undefined"){h={},h[a]=c,d[i]=h;return}throw new Error("Invalid route context: "+f)}e=typeof d[a];switch(e){case"function":d[a]=[d[a],c];return;case"object":d[a].push(c);return;case"undefined":d[a]=c;return}}},e.prototype.extend=function(a){function e(a){b._methods[a]=!0,b[a]=function(){var c=arguments.length===1?[a,""]:[a];b.on.apply(b,c.concat(Array.prototype.slice.call(arguments)))}}var b=this,c=a.length,d;for(d=0;d<c;d++)e(a[d])},e.prototype.runlist=function(a){var b=this.every&&this.every.before?[this.every.before].concat(g(a)):g(a);this.every&&this.every.on&&b.push(this.every.on),b.captures=a.captures,b.source=a.source;return b},e.prototype.mount=function(a,b){function d(b,d){var e=b,f=b.split(c.delimiter),g=typeof a[b],h=f[0]===""||!c._methods[f[0]],i=h?"on":e;h&&(e=e.slice((e.match(new RegExp("^"+c.delimiter))||[""])[0].length),f.shift());h&&g==="object"&&!Array.isArray(a[b])?(d=d.concat(f),c.mount(a[b],d)):(h&&(d=d.concat(e.split(c.delimiter)),d=k(d,c.delimiter)),c.insert(i,d,a[b]))}if(!!a&&typeof a=="object"&&!Array.isArray(a)){var c=this;b=b||[],Array.isArray(b)||(b=b.split(c.delimiter));for(var e in a)a.hasOwnProperty(e)&&d(e,b.slice(0))}}})(typeof exports=="object"?exports:window)
"use strict"
// Module export pattern from
// https://github.com/umdjs/umd/blob/master/returnExports.js
;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.store = factory();
  }
}(this, function () {
	
	// Store.js
	var store = {},
		win = window,
		doc = win.document,
		localStorageName = 'localStorage',
		scriptTag = 'script',
		storage

	store.disabled = false
	store.version = '1.3.17'
	store.set = function(key, value) {}
	store.get = function(key, defaultVal) {}
	store.has = function(key) { return store.get(key) !== undefined }
	store.remove = function(key) {}
	store.clear = function() {}
	store.transact = function(key, defaultVal, transactionFn) {
		if (transactionFn == null) {
			transactionFn = defaultVal
			defaultVal = null
		}
		if (defaultVal == null) {
			defaultVal = {}
		}
		var val = store.get(key, defaultVal)
		transactionFn(val)
		store.set(key, val)
	}
	store.getAll = function() {}
	store.forEach = function() {}

	store.serialize = function(value) {
		return JSON.stringify(value)
	}
	store.deserialize = function(value) {
		if (typeof value != 'string') { return undefined }
		try { return JSON.parse(value) }
		catch(e) { return value || undefined }
	}

	// Functions to encapsulate questionable FireFox 3.6.13 behavior
	// when about.config::dom.storage.enabled === false
	// See https://github.com/marcuswestin/store.js/issues#issue/13
	function isLocalStorageNameSupported() {
		try { return (localStorageName in win && win[localStorageName]) }
		catch(err) { return false }
	}

	if (isLocalStorageNameSupported()) {
		storage = win[localStorageName]
		store.set = function(key, val) {
			if (val === undefined) { return store.remove(key) }
			storage.setItem(key, store.serialize(val))
			return val
		}
		store.get = function(key, defaultVal) {
			var val = store.deserialize(storage.getItem(key))
			return (val === undefined ? defaultVal : val)
		}
		store.remove = function(key) { storage.removeItem(key) }
		store.clear = function() { storage.clear() }
		store.getAll = function() {
			var ret = {}
			store.forEach(function(key, val) {
				ret[key] = val
			})
			return ret
		}
		store.forEach = function(callback) {
			for (var i=0; i<storage.length; i++) {
				var key = storage.key(i)
				callback(key, store.get(key))
			}
		}
	} else if (doc.documentElement.addBehavior) {
		var storageOwner,
			storageContainer
		// Since #userData storage applies only to specific paths, we need to
		// somehow link our data to a specific path.  We choose /favicon.ico
		// as a pretty safe option, since all browsers already make a request to
		// this URL anyway and being a 404 will not hurt us here.  We wrap an
		// iframe pointing to the favicon in an ActiveXObject(htmlfile) object
		// (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
		// since the iframe access rules appear to allow direct access and
		// manipulation of the document element, even for a 404 page.  This
		// document can be used instead of the current document (which would
		// have been limited to the current path) to perform #userData storage.
		try {
			storageContainer = new ActiveXObject('htmlfile')
			storageContainer.open()
			storageContainer.write('<'+scriptTag+'>document.w=window</'+scriptTag+'><iframe src="/favicon.ico"></iframe>')
			storageContainer.close()
			storageOwner = storageContainer.w.frames[0].document
			storage = storageOwner.createElement('div')
		} catch(e) {
			// somehow ActiveXObject instantiation failed (perhaps some special
			// security settings or otherwse), fall back to per-path storage
			storage = doc.createElement('div')
			storageOwner = doc.body
		}
		var withIEStorage = function(storeFunction) {
			return function() {
				var args = Array.prototype.slice.call(arguments, 0)
				args.unshift(storage)
				// See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
				// and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
				storageOwner.appendChild(storage)
				storage.addBehavior('#default#userData')
				storage.load(localStorageName)
				var result = storeFunction.apply(store, args)
				storageOwner.removeChild(storage)
				return result
			}
		}

		// In IE7, keys cannot start with a digit or contain certain chars.
		// See https://github.com/marcuswestin/store.js/issues/40
		// See https://github.com/marcuswestin/store.js/issues/83
		var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g")
		var ieKeyFix = function(key) {
			return key.replace(/^d/, '___$&').replace(forbiddenCharsRegex, '___')
		}
		store.set = withIEStorage(function(storage, key, val) {
			key = ieKeyFix(key)
			if (val === undefined) { return store.remove(key) }
			storage.setAttribute(key, store.serialize(val))
			storage.save(localStorageName)
			return val
		})
		store.get = withIEStorage(function(storage, key, defaultVal) {
			key = ieKeyFix(key)
			var val = store.deserialize(storage.getAttribute(key))
			return (val === undefined ? defaultVal : val)
		})
		store.remove = withIEStorage(function(storage, key) {
			key = ieKeyFix(key)
			storage.removeAttribute(key)
			storage.save(localStorageName)
		})
		store.clear = withIEStorage(function(storage) {
			var attributes = storage.XMLDocument.documentElement.attributes
			storage.load(localStorageName)
			while (attributes.length) {
				storage.removeAttribute(attributes[0].name)
			}
			storage.save(localStorageName)
		})
		store.getAll = function(storage) {
			var ret = {}
			store.forEach(function(key, val) {
				ret[key] = val
			})
			return ret
		}
		store.forEach = withIEStorage(function(storage, callback) {
			var attributes = storage.XMLDocument.documentElement.attributes
			for (var i=0, attr; attr=attributes[i]; ++i) {
				callback(attr.name, store.deserialize(storage.getAttribute(attr.name)))
			}
		})
	}

	try {
		var testKey = '__storejs__'
		store.set(testKey, testKey)
		if (store.get(testKey) != testKey) { store.disabled = true }
		store.remove(testKey)
	} catch(e) {
		store.disabled = true
	}
	store.enabled = !store.disabled
	
	return store
}));

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

(function() {
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
  
  window.SLeasy = window.Sleasy || {};

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

  device.television = function() {
    var i, tvString;

    television = [
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
		//alert('横屏~');
      removeClass("portrait");
      addClass("landscape");
	  window.SLeasy && SLeasy.onResize && SLeasy.onResize();
    } else {
		 //alert('竖屏~');
      removeClass("landscape");
      addClass("portrait");
	  window.SLeasy && SLeasy.onResize && SLeasy.onResize();
    }
    return;
  };
  

  // Detect whether device supports orientationchange event,
  // otherwise fall back to the resize event.
  if (Object.prototype.hasOwnProperty.call(window, "onorientationchange")) {
    orientationEvent = "orientationchange";
  } else {
    //orientationEvent = "resize";
	orientationEvent = "orientationchange";
  }
  
  //alert(orientationEvent);

  // Listen for changes in orientation.
  if (window.addEventListener) {
	  //alert('1');
    window.addEventListener(orientationEvent, handleOrientation, false);
  } else if (window.attachEvent) {
	   //alert('2');
    window.attachEvent(orientationEvent, handleOrientation);
  } else {
	   //alert('3');
    window[orientationEvent] = handleOrientation;
  }

  handleOrientation();

  if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    define(function() {
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

        //策略执行OO
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
                        viewportContent = 'height=' + height + ',width=' + height * ratio + ',user-scalable=no';
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
				src="' + $config.host + opt.audio + '" preload="auto">\
				</audio>';
            },
            'video'    : function (opt) {
                return '<video\
				id="SLeasy_' + (subName[opt.type] || opt.type) + '_' + opt.index + '"\
				class="' + (opt.class || '') + ' SLeasy_video SLeasy_' + (subName[opt.type] || opt.type) + '"\
				style="position:' + $config.positionMode + '; display:' + (display || (opt.set && opt.set.display) || 'none') + ';" \
				src="' + opt.video + '" type="'+(opt.mediaType || 'video/mp4')+'" poster="'+opt.poster+'" controls webkit-playsinline playsinline>\
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
                    detail.onStart && detail.onStart();
                    detail.scroll ? SLeasy.touchScroll(true, false) : SLeasy.touchScroll(false, false);//禁止触摸默认滚动+禁止slider滑动手势
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
    SLeasy.closeDetail = function (index) {
        var nextIndex = SLeasy.nextDetailIndex(index);
        if ($config.routerMode) {
            var sliderHash = $scope.router.getRoute(1)
            $scope.router.setRoute(1, 'html');//设置路由
        } else {
            SLeasy.closeDetailTransit(nextIndex);
        }
    }

    SLeasy.closeDetailTransit = function (index) {
        //如果详情页处于打开状态未关闭，则return
        if (!$scope.isDetail) return;
        //索引边界检查
        if (typeof index == 'undefined' || index < 0 || index > $config.details.length - 1) return;

        var detail     = $config.details[index],
            dom        = $scope.details.eq(index),
            onComplete = {
                onComplete: function () {
                    console.log(dom);
                    dom.data['onClose'] && dom.data['onClose']();//回调hack
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
        sliderBox = H(document.getElementById($config.id) || document.getElementById('SLeasy'));
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
                HDom     = H(dom),
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
        if($config.arrowMode){
            $("#SLeasy_arrow").css("cursor","pointer");
            H($("#SLeasy_arrow")[0]).on('tap',function (e) {
                SLeasy.goSlider('+=1');
            })
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
    TweenMax || TweenLite
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
    window.SLeasy = window.SLeasy,
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