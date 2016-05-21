// ScrollBox v2.0.0 for SLeasy3 by 庄宇 email:30755405@qq.com
;(function(SLeasy,H,$,T){
	var $config=SLeasy.config(),
		$scope=SLeasy.scope();
		
	//scrollBox
	SLeasy.scrollBox=function(opt){
		var config={
			dom:$('body'),
			width:640,//宽
			height:420,//高
			scrollMode:'page',//page:分页，scroll:不分页
			scrollType:'scrollLeft',//排列模式
			scrollWidth:0,//scroll模式宽
			scrollHeight:0,//scroll模式高
			motionMode:0,//子元素动画模式
			motionRange:0.75,//子动画开始断点范围百分比
			motionLoop:0,//子动画循环模式
			bg:'#eee',//背景
			eventPoint:130,
			
			pageHtml:[
				[{
				text:'第一页 first page',
				set:{left:'50%',top:'50%',xPercent:-50,yPercent:-50},
				time:0.6,
				in:{opacity:0,y:20},
				show:{opacity:1,y:0},
				}],
				[{
				text:'第二页 second page',
				set:{left:'50%',top:'50%',xPercent:-50,yPercent:-50},
				time:0.6,
				in:{opacity:0,y:20},
				show:{opacity:1,y:0},
				}],
				[{
				text:'第三页 third page',
				set:{left:'50%',top:'50%',xPercent:-50,yPercent:-50},
				time:0.6,
				in:{opacity:0,y:20},
				show:{opacity:1,y:0},
				}]
			],//page html数组
			pageSubName:'scrollBox_sub',
			pointRadius:8,//切换指示点半径
			pointColor:'#fff',//颜色
			pointOpacity:0.5,//未激活透明度
			pointMargin:20,//间隔
			pointPosition:'bottom',//对齐方向
			pointOffset:10,//对齐偏移值
			pointShow:1,//是否显示指示点
			
		}
		$.extend(config,opt);//合并自定义参数
		
		var t=new Date().getTime(),//标示时间戳
			scrollBoxId='SLeasy_scrollBox_'+t;
		
		SLeasy[scrollBoxId]={
			pageIndex:0,//索引
			isSubMotion:0,//子动画状态
		};
		
		SLeasy.fixPropsArr(['pointRadius','pointMargin','pointOffset','scrollWidth','scrollHeight']);//添加新的需要缩放的属性
		SLeasy.fixProps(config);
		//console.log(SLeasy.fixPropsArr());
		
		//init
		var contentWidth,//内容容器宽度
			contentHeight;//内容容器高度
			
		if(config.scrollMode=='scroll' || config.scrollMode=='none'){
			contentWidth=config.scrollWidth || config.width;
			contentHeight=config.scrollHeight || config.height;
		}else{
			contentWidth=(config.scrollType=='scrollLeft') ? config.width*config.pageHtml.length : config.width;
			contentHeight=(config.scrollType=='scrollTop') ? config.height*config.pageHtml.length : config.height;
		}
			
			
		var boxHtml='<div id="SLeasy_scrollBox_'+t+'" style="width:'+config.width+'px;\
					height:'+config.height+'px;\
					margin:0 auto; position:relative;\
					overflow:hidden;background:'+config.bg+'">',
					
			containerHtml='<div id="SLeasy_scrollContainer_'+t+'" style="width:'+config.width+'px;\
							height:'+config.height+'px">\
							<div id="SLeasy_pageContainer_'+t+'" \
							style="width:'+contentWidth+'px;\
							height:'+contentHeight+'px;">',

			pointHtml='<div id="SLeasy_scrollPoints_'+t+'" \
						style="margin:auto0;position:absolute;\
						'+(config.scrollType=='scrollLeft' ? 'left' : 'top')+':50%;\
						'+config.pointPosition+':'+config.pointOffset+'px;\
						'+(config.scrollType=='scrollLeft' ? 'margin-left' : 'margin-top')+':'+-(config.pointRadius+config.pointMargin)*config.pageHtml.length+'px">',
						
			endHtml='</div></div>',
			pageHtml='';
			
			
		//page + ponit 
		for(var i=0;i<(config.scrollMode=='page' ? config.pageHtml.length : 1);i++){
			//console.log(pageInit(config.pageHtml[i]));
			var pageRow=	'<div class="SLeasy_scrollBox_page_'+t+'" \
						style="'+(config.scrollType=='scrollLeft' ? 'float:left;' : '')+'\
						text-align:center;overflow:hidden;position:relative;\
						width:'+(config.scrollMode=='page' ? config.width : contentWidth)+'px;\
						height:'+(config.scrollMode=='page' ? config.height : contentHeight)+'px;">\
						'+(pageInit(config.pageHtml[i],i) || '<div style="background:#ccc; width:100%;height:100%"></div>\
						')+'</div>',
						
				pointRow='<div class="SLeasy_scrollBox_point_'+t+'"\
						 style="'+(config.scrollType=='scrollLeft' ? 'float:left;' : '')+'\
						 width:'+2*config.pointRadius+'px;\
						 height:'+2*config.pointRadius+'px;\
						 border-radius:'+config.pointRadius+'px;\
						 background:'+config.pointColor+';\
						 opacity:'+config.pointOpacity+';\
						 margin:'+config.pointMargin+'px;\
						 "></div>';
				
			pageHtml+=pageRow;
			pointHtml+=pointRow;
		}
		
		pageHtml+='</div></div>';
		pointHtml+='</div>';
		
		(config.scrollMode!='page' || !config.pointShow) && (pointHtml='');//如果不是page模式，则不显示point
		config.dom.append(boxHtml+containerHtml+pageHtml+pointHtml+endHtml);
		
		//set
		for(var i=0;i<config.pageHtml.length;i++){
			//console.log($('.SLeasy_scrollBox_page_'+t).eq(i))
			$('.SLeasy_scrollBox_page_'+t).eq(i).find('.SLeasy_'+config.pageSubName+'_'+t).each(function(index, element) {
				var pegeSub=config.pageHtml[i][index];
				T.set($(this),pegeSub.set);
				//event binding
				if(pegeSub.event){
					H($(this)[0]).on(pegeSub.event,pegeSub.onEvent);
				}
        	});	
		}
		
		//img to div
		SLeasy.imgToDiv($("#SLeasy_scrollBox_"+t));
		
		
		var $scrollBox=$("#SLeasy_scrollContainer_"+t),
			$point=$(".SLeasy_scrollBox_point_"+t),//point dom缓存
			$scrollSub=$('.SLeasy_scrollBox_sub_'+t),//scroll子元素dom缓存
			snap=(config.scrollMode=='page') ? {
        		x: function(endValue) {
					console.log(endValue);
					var threshold= (config.scrollType=='scrollLeft') ? config.width : config.height,
						index=-Math.round(endValue / threshold);

					if(index>$point.length-1){
						SLeasy[scrollBoxId].pageIndex=	$point.length-1;
					}else if(index<0){
						SLeasy[scrollBoxId].pageIndex=	0;
					}else{
						SLeasy[scrollBoxId].pageIndex=	index;	
					}
						
					T.set($point,{opacity:0.5});
					T.set($point.eq(SLeasy[scrollBoxId].pageIndex),{opacity:1});
					return index * threshold;
        		},
				y: function(endValue) {
					console.log(endValue);
					var threshold= (config.scrollType=='scrollLeft') ? config.width : config.height,
						index=-Math.round(endValue / threshold);
						
					if(index>$point.length-1){
						SLeasy[scrollBoxId].pageIndex=	$point.length-1;
					}else if(index<0){
						SLeasy[scrollBoxId].pageIndex=	0;
					}else{
						SLeasy[scrollBoxId].pageIndex=	index;	
					}
						
					T.set($point,{opacity:0.5});
					T.set($point.eq(SLeasy[scrollBoxId].pageIndex),{opacity:1});
            		return index * threshold;
        		},
				
			} :null;
			
		
		//drag
		var dragConfig={
			type:config.scrollType, 
			edgeResistance:0.75,
			throwProps:true,
			throwResistance:500,
			dragClickables:true,
			maxDuration :0.8,
			snap:snap,
			onThrowComplete:function(){
				subMotion();
			},
			onDrag:function(){
				scrollMotion(this.target.scrollTop);	
			}
		};
		config.scrollMode!='none' && Draggable.create("#SLeasy_scrollContainer_"+t,dragConfig);
		
				
		//to
		SLeasy[scrollBoxId].to=function(pageIndex){		
			if(typeof pageIndex!='number'){
				var index=SLeasy[scrollBoxId].pageIndex+parseInt(pageIndex.split('=')[0]+pageIndex.split('=')[1]);
				if(config.scrollMode=='page'){//page模式
					if(index<0) index=0;
					if(index>$point.length-1) index=$point.length-1;
					var scrollTo= config.scrollType=='scrollLeft' ? {x:index*config.width} : {y:index*config.height}
				}else if(config.scrollMode=='scroll'){//scroll模式
					var scrollTo= config.scrollType=='scrollLeft' ? {x:pageIndex.split('=')[0]+'='+config.width} : {y:pageIndex.split('=')[0]+'='+config.height}	
				}else if(config.scrollMode=='none'){//none模式
					var scrollTo= config.scrollType=='scrollLeft' ? {x:pageIndex.split('=')[0]+'='+config.width} : {y:pageIndex.split('=')[0]+'='+config.height}	
				}
			}else{
				index=pageIndex;	
				var scrollTo= config.scrollType=='scrollLeft' ? {x:index*config.width} : {y:index*config.height}
			}
			
			
			console.log(scrollTo);
			console.log($("#SLeasy_scrollContainer_"+t));
			T.to("#SLeasy_scrollContainer_"+t,0.8,{scrollTo:scrollTo, ease:Power4.easeInOut,onComplete:function(){
				subMotion();
			}});
			SLeasy[scrollBoxId].pageIndex=index;	
		}
		
				
		//render
		$scrollBox.css("overflow","hidden").scrollTop(0).scrollLeft(0);
		T.set($point.eq(0),{opacity:1});
		subMotion();
		
			
		//scrollTo
		$point.each(function(index, element) {
            H($(this)[0]).on('tap',function(){
				//alert(index);
				SLeasy[scrollBoxId].to(index);
				T.set($point,{opacity:0.5});
				T.set($point.eq(index),{opacity:1});
			})
        });
		
		
		//scrollMotion
		//setTimeout(function(){scrollMotion(0);},10);
		function scrollMotion(scrollTop){
			//console.log(config.motionMode+':'+config.scrollMode);
			if(!config.motionMode || config.scrollMode!='scroll') return;	
			var scrollMotionArr=config.pageHtml[0];
			for(var i=0;i<scrollMotionArr.length;i++){
				var motion=scrollMotionArr[i];
				if(motion.shadownBt){
					if(!motion.inRange){
						continue;
					}else{
						motion.show={
							x:motion.shadownBt[2],
							y:motion.shadownBt[3]
						}
					}
				}
				var 	scrollPoint=typeof(motion.show.y)!='undefned' ? motion.show.y : motion.set.css.y,
					time=motion.time,
					_in=motion.in,
					_show=$.extend({display:'block'},motion.show),
					activePoint=config.scrollType=='scrollTop' ? config.height*(motion.motionRange || config.motionRange) : config.width*(motion.motionRange || config.motionRange),//进入范围依据点
					outPoint=config.scrollType=='scrollTop' ? config.height*(1+1-(motion.motionRange || config.motionRange)) : config.width*(1+1-(motion.motionRange || config.motionRange)),//离开范围依据点
					topPoint=scrollPoint-scrollTop,//元素范围前端点
					bottomPoint=scrollPoint-scrollTop+(config.scrollType=='scrollTop' ? $scrollSub.eq(i).height() : $scrollSub.eq(i).width());//元素范围后端点
	
				//console.log(activePoint+'>='+topPoint+':'+(activePoint>=topPoint));
				//console.log(activePoint+'<='+bottomPoint+':'+(activePoint<=bottomPoint));
				//console.log($scrollSub.eq(i));
				//console.log($scrollSub.eq(i)[0].style.height);
				console.log(i+'============================================');
				console.log('activePoint:'+activePoint);
				console.log(activePoint>=topPoint);
				console.log(activePoint>=topPoint);
				//console.log('config.eventPoint:'+config.eventPoint);
				//往下滑动，判断动画断点，开始子动画
				if(activePoint>=topPoint && activePoint<=bottomPoint){
					//console.log('0000------------------------------');
					if(!$scrollSub.eq(i).data('isMotion')){//如果没动画过，则子动画
						$scrollSub.eq(i).data('isMotion',1);
						T.fromTo($scrollSub.eq(i),time,_in,_show);
					}
					if(!$scrollSub.eq(i).data('inRange')){
						console.log('on ponit:'+i);
						$scrollSub.eq(i).data('inRange',1);	
					}
				}
				
				//超过事件点
				console.log('break point event start~~!!!');
				console.log(config.eventPoint);
				console.log('bottomPoint:'+bottomPoint);
				console.log(config.eventPoint>=topPoint);
				console.log(config.eventPoint<=bottomPoint);
				if(config.eventPoint>=topPoint){
					if(!$scrollSub.eq(i).data('onEventPoint')){
						motion.inRange && motion.inRange(i);	//滚动到该元素的回调
						$scrollSub.eq(i).data('onEventPoint',1);
					}
				}
				
				//离开
				if(topPoint>config.eventPoint){
					if($scrollSub.eq(i).data('onEventPoint')){
						motion.outRange && motion.outRange(i);//已离开该元素的回调
						$scrollSub.eq(i).data('onEventPoint',0);
					}
				}
				
				//往上滑动，重置子动画
				if(topPoint>=outPoint){
					//console.log('1111------------------------------');	
					if(config.motionLoop && $scrollSub.eq(i).data('isMotion')){//如果已经子动画过，则重置
						$scrollSub.eq(i).data('isMotion',0).css("display","none");
					}
					
					if($scrollSub.eq(i).data('inRange')){
						//console.log('out ponit:'+i);	
						$scrollSub.eq(i).data('inRange',0);	
					}
				}
			}
		}
		
		//subMotion
		function subMotion(){
			if(!config.motionMode || config.scrollMode!='page') return;
			
			$scrollSub.css('display','none');
			console.log(SLeasy[scrollBoxId].pageIndex);
			var subMotionIndex=SLeasy[scrollBoxId].pageIndex;
			SLeasy.subMotion(config.pageHtml[subMotionIndex],config.pageSubName+'_'+t);	
		}
		
		//page html
		function pageInit(pageData,pageIndex){
			for(var i=0;i<pageData.length;i++){
				//console.log(pageData[i]);
				SLeasy.fixProps(pageData[i].in || {});
				SLeasy.fixProps(pageData[i].show || {});
				if(pageData[i].shadownBt){//处理shadownBt情况
					pageData[i].set=pageData[i].set || {};
					$.extend(pageData[i].set,{x:pageData[i].shadownBt[2],y:pageData[i].shadownBt[3],display:'block'});
					SLeasy.fixProps(pageData[i].set || {});
				}else{
					SLeasy.fixProps(pageData[i].set || {});
				}
			}
			return SLeasy.subElement(pageData,config.pageSubName+'_'+t,pageIndex,config.motionMode ? 'none' :'block');	
		}
	
	SLeasy[scrollBoxId].dom=$scrollBox;
	SLeasy[scrollBoxId].scrollMotion=scrollMotion;
	return scrollBoxId;
	//----	
	}


})(
window.SLeasy = window.SLeasy || {},
Hammer,
jQuery,
TweenMax
);