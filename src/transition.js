// SLeasy3-transition
;(function(SLeasy,$,T){
	var $config=SLeasy.config(),
		$scope=SLeasy.scope();
		
	//go slider
	SLeasy.goSlider=function(index){
		var nextIndex=SLeasy.nextIndex(index);
		if($config.routerMode){
			//var detailHash=$scope.router.getRoute(1);
			$scope.router.setRoute(0,nextIndex+'');//设置路由
		}else{
			SLeasy.transit(nextIndex);
		}
	}
	
	SLeasy.nextIndex=function(index){
		//如果是label标签，并且不包含‘—=’或者‘+=’,则获取标签对应的索引值
		var index=(typeof index=='number' || index.indexOf('-=')!=-1 || index.indexOf('+=')!=-1) ? index : SLeasy.label(index);
		console.log(index);
		var totalIndex=$scope.sliders.length-1,//最大索引值
			total=totalIndex+1,//幻灯总数
			nextIndex		
			;

		if(!$config.loopMode){//非循环模式
			//不同参数类型策略，获取下一页索引，int或者string,如：‘+=1，-=1’
			var indexType={
				"number":function(){
					if(index>=0 && index<=totalIndex){//索引边界内
						nextIndex=index;	
					}else{//索引边界外
						if(index>totalIndex){
							nextIndex=totalIndex;
						}else{
							nextIndex=0;	
						}
					}
				},
				"string":function(){
					var _arr=index.split('=');
					if(_arr[0]=='-'){
						nextIndex=($scope.sliderIndex-parseInt(_arr[1])<0) ? 0 : $scope.sliderIndex-parseInt(_arr[1]);
					}else if(_arr[0]=='+'){
						nextIndex=($scope.sliderIndex+parseInt(_arr[1])>totalIndex) ? totalIndex : $scope.sliderIndex+parseInt(_arr[1]);
					}else{
						return alert('幻灯跳转索引值错误！');
					}
				},	
			}
						
			if(typeof indexType[(typeof index)]=='undefined') return alert('幻灯索引参数错误~！');
			indexType[(typeof index)]();//策略执行
			//$scope.sliderIndex=nextIndex;//更新当前slider索引
			return nextIndex;
											
		}else{//循环模式
			var indexType={
				"number":function(){
					nextIndex=index%total>=0 ? index%total : total+index%total;
					},
				"string":function(){
					var _arr=index.split('=');
					if(_arr[0]=='-'){
						nextIndex=($scope.sliderIndex-parseInt(_arr[1]))<0 ? total+($scope.sliderIndex-parseInt(_arr[1]))%total : ($scope.sliderIndex-parseInt(_arr[1]))%total;//索引取模
						
					}else if(_arr[0]=='+'){
						nextIndex=($scope.sliderIndex+parseInt(_arr[1]))%total;								
					}else{
						return alert('幻灯跳转索引值错误！');
					}
				},	
			}
			if(typeof indexType[(typeof index)]=='undefined') return alert('幻灯索引参数错误~！');;
			indexType[(typeof index)]();//策略执行
			//$scope.sliderIndex=nextIndex;//更新当前slider索引
			return nextIndex;
		}
		
	}
	
	SLeasy.transitFX=function(nextIndex){
		var _in,
			_out,
			_show,
			_set,
			motionFX=SLeasy.getMotionFX(),//获取全局配置切换效果
			customFX
			;
		
		//如果当前幻灯索引小于下一页索引,则按预设效果切换，反之，反转切换效果
		console.log($scope.sliderIndex+':'+nextIndex);
			
		
	
		//自定义切换效果
		customFXAguments=$config.sliders[nextIndex].motionFX || null;
		//console.log(customFX);
		customFX=customFXAguments ? SLeasy.getMotionFX(customFXAguments[0],customFXAguments[1]) : {};
		
		//in
		if($scope.sliderIndex<nextIndex){		
			if($scope.sliderIndex==0 && nextIndex==$config.sliders.length-1){//为最首，最末页情况
				_in=$.extend({display:'block'},(customFX.out || motionFX.out));	
			}else{
				_in=$.extend({display:'block'},(customFX.in || motionFX.in));
			}
		}else{
			if($scope.sliderIndex==$config.sliders.length-1 && nextIndex==0){//为最首，最末页情况
				_in=$.extend({display:'block'},(customFX.in || motionFX.in));
			}else{
				_in=$.extend({display:'block'},(customFX.out || motionFX.out));
			}
		}
		
		//out
		if($scope.sliderIndex<nextIndex){
			if($scope.sliderIndex==0 && nextIndex==$config.sliders.length-1){//为最首，最末页情况
				_out=$.extend({display:'none'},(customFX.in || motionFX.in));
			}else{
				_out=$.extend({display:'none'},(customFX.out || motionFX.out));	
			}
		}else{
			if($scope.sliderIndex==$config.sliders.length-1 && nextIndex==0){//为最首，最末页情况
				_out=$.extend({display:'none'},(customFX.out || motionFX.out));
			}else{
				_out=$.extend({display:'none'},(customFX.in || motionFX.in));
			}
			
		}
		
		if($config.sliders.length==2){
			if($scope.sliderIndex<nextIndex){
				_in=$.extend({display:'block'},(customFX.in || motionFX.in));	
				_out=$.extend({display:'none'},(customFX.out || motionFX.out));
			}else{
				_in=$.extend({display:'block'},(customFX.out || motionFX.out));
				_out=$.extend({display:'none'},(customFX.in || motionFX.in));
			}
		}



		var currentSlider=$scope.sliders.eq($scope.sliderIndex),//当前幻灯
			currentSubMotion=currentSlider.find($scope.subMotion),//当前幻灯子元素
			nextSlider=$scope.sliders.eq(nextIndex);//下一幻灯


		//show
		_show=$.extend({//show FX
			onStart:function(){
				if($config.sliders[nextIndex].onStart) $config.sliders[nextIndex].onStart();//单页onStart回调
			},
			onComplete:function(){
				if($config.sliders[nextIndex].onComplete) $config.sliders[nextIndex].onComplete();//单页onComplete回调
				//清除幻灯内联式样,!!!!~~~~(幻灯一定要去除zIndex和transform:matrix3d属性,不然在移动设备上,带有3d属性的子元素会出现穿透幻灯(父元素)现象)
				T.set(currentSubMotion,{clearProps:$scope.clearProps,display:'none'});//清除子动画图片内联式样
				T.set([currentSlider,nextSlider],{clearProps:$scope.clearProps});

				$scope.isAnim=0;//重置运动状态
				//console.log($scope.labelHash);
				//sub motion
				var subMotionArr=$config.sliders[nextIndex].subMotion;
				SLeasy.subMotion(subMotionArr,'sliders');
			},
		},(customFX.show || motionFX.show));
		_set=customFX.set || motionFX.set;
		
		//force3D
		_in= $.extend({force3D:true},_in);
		_out= $.extend({force3D:true},_out);
		_show= $.extend({force3D:true},_show);


		return {
				in:_in,
				show:_show,
				out:_out,
				set:_set	
				}
		
	}
	
	SLeasy.transit=function(nextIndex){
		if($scope.sliders.length==0) return alert('当前没有任何幻灯json数据~!');
		if($scope.isAnim) return;
		$scope.isAnim=1;//重置运动状态
		
		var currentSlider=$scope.sliders.eq($scope.sliderIndex),//当前幻灯
			//nextIndex=SLeasy.nextIndex(index),//下一幻灯索引
			nextSlider=$scope.sliders.eq(nextIndex),//下一幻灯
			FX=SLeasy.transitFX(nextIndex)//切换效果
			;
		
		//设置该页标题
		var title=$config.sliders[nextIndex].title || $config.title;
		if(title && title!=$scope.title){
			SLeasy.title(title);
			$scope.title=title;	 
		}
		
		
		//set
		T.set(currentSlider,FX.set);
		T.set(nextSlider,$.extend(FX.set,$config.sliders[nextIndex].set));
		$config.on['sliderChange'](nextIndex);//幻灯切换回调

			
		//冻结并清除当前子动画
		if(currentSlider[0]!=nextSlider[0]) $scope.timeLine.clear();
						
		//动画切换执行
		if(currentSlider[0]==nextSlider[0]){//如果上下页是同一页，则只执行子动画
			//清除幻灯内联式样,!!!!~~~~(幻灯一定要去除zIndex和transform:matrix3d属性,不然在移动设备上,带有3d属性的子元素会出现穿透幻灯(父元素)现象)
			T.set($scope.sliders,{clearProps:$scope.clearProps});
			currentSlider.fadeIn($config.motionTime,function(){
				//sub motion
				var subMotionArr=$config.sliders[nextIndex].subMotion;
				//如果正在关闭详情页则不播放子动画
				console.log($scope.isSubMotion);
				if(!$scope.isSubMotion) SLeasy.subMotion(subMotionArr,'sliders');
				$scope.isAnim=0;//重置运动状态
			});
				
		}else{
			//清除所有ae渲染层tween
			$.each($scope.aeLayer,function(index,aeLayer){
				T.killTweensOf(aeLayer);
			})

			//slider切换
			var motionTime=$config.sliders[nextIndex].time || $config.motionTime;
			T.to(currentSlider,motionTime,FX.out);
			T.fromTo(nextSlider,motionTime,FX.in,FX.show);
		}	
		//更新当前slider索引
		$scope.sliderIndex=nextIndex;
	}
	
})(
window.SLeasy = window.SLeasy || {},
jQuery,
TweenMax || TweenLite
);
