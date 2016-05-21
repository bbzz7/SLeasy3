// Mask v1.0.0 for SLeasy3 by 庄宇 email:30755405@qq.com
;(function(SLeasy,H,$){
	var $config=SLeasy.config(),
		$scope=SLeasy.scope();
		
	//mask
	SLeasy.mask=function(opt){
		var config={
			dom:$('body'),//id
			width:640,//高
			height:1008,//宽
			img:'',
			swipe:false,//是否允许滑动
			percent:50,//触发回调的擦除区域百分比
			onPercent:function($mask,percent){
				$mask.fadeOut();
				console.log(percent);		
			},
			onInit:function(){
				conosole.log('Mask is ready~');	
			}
		}
		
		$.extend(config,opt);//合并自定义参数
		//SLeasy.fixProps(config);
		
		!config.swipe && ($scope.swipe=0);
		
		var dfd=$.Deferred();
			t=new Date().getTime(),//标示时间戳
			maskId='SLeasy_mask_'+t,
			canvasHtml='<canvas id="'+maskId+'" width="'+config.width+'" height="'+config.height+'"></canvas>';
			
		config.dom.append(canvasHtml);
		var $mask=$("#"+maskId),
			c2d=$mask[0].getContext('2d');
			
		$mask.css({"width":config.width*$scope.viewScale+"px","height":config.height*$scope.viewScale+"px"});//缩放画布
		
		
		//加载图片
		var maskImage=new Image();
		maskImage.onload=function(){
			c2d.drawImage(maskImage,0,0,config.width,config.height);
			c2d.globalCompositeOperation = 'destination-out';//差集叠加
			eventBind();//事件绑定
			config.onInit();//初始化完毕回调
			dfd.resolve();
		}
		maskImage.src=$config.host+config.img;
		
		return dfd.promise();
		
		
		//擦除
		function drawPoint(x,y){
    		c2d.beginPath();
    		var radgrad = c2d.createRadialGradient(x, y, 0, x, y, 50);
    			radgrad.addColorStop(0, 'rgba(0,0,0,1)');
				radgrad.addColorStop(0.3, 'rgba(0,0,0,1)');
    			radgrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
    			c2d.fillStyle = radgrad;
    			c2d.arc(x, y,50, 0, Math.PI * 2, true);
    			c2d.fill();
		}
		
		
		//事件绑定
		function eventBind(){
			var ham=H($mask[0]);
			ham.get('pan').set({threshold:0});
			ham.on('pan',function(e){
				//console.log(e.center.x+':'+e.center.y);
				var x=(e.center.x-$mask.offset().left)/$scope.viewScale,
					y=(e.center.y-$mask.offset().top)/$scope.viewScale;
				
				drawPoint(x,y);//
				
			});
			
			ham.on('panend',function(){
				var percent=getTransparentPercent(c2d, config.width, config.height);
				if(percent>=config.percent){
					config.onPercent($mask,percent);	
					$scope.swipe=1;
				}
			});
		}
		
		
		//擦除百分比
		function getTransparentPercent(ctx, width, height) {
    		var imgData = ctx.getImageData(0, 0, width, height),
        		pixles = imgData.data,
        		transPixs = [];
    		for (var i = 0, j = pixles.length; i < j; i += 4) {
        		var a = pixles[i + 3];
        		if (a < 128) {
            		transPixs.push(i);
        		}
    		}
    		return Math.round(transPixs.length / (pixles.length / 4) * 100);
		}
		
				
	}
	
})(
window.SLeasy = window.SLeasy || {},
Hammer,
jQuery
);