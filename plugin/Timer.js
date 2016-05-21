// Timer v1.0.0 by 庄宇 email:30755405@qq.com
;(function(Timer,$){
	
	$ && ($.Timer=Timer);//挂载到$对象
	
	Timer.is = function(operator,time,callback){
		
		var 	YMD=time.split(' ')[0].split('-'),//年月日数组
			Hms=time.split(' ')[1] ? time.split(' ')[1].split(':') : [0,0,0],//时分秒数组
			YYYY=parseInt(YMD[0]),//年
			MM=parseInt(YMD[1])-1,//月
			DD=parseInt(YMD[2]),//天
			HH=parseInt(Hms[0]),//时
			mm=parseInt(Hms[1]),//分
			ss=parseInt(Hms[2])//秒
			;
		
		var now=new Date().getTime();//获取当前时间毫秒
		var fireTime=new Date(YYYY,MM,DD,HH,mm,ss).getTime();//获取目标时间毫秒
		
		//操作符策略
		var operators={
			'==':function(){return now == fireTime},
			'>':function(){return now > fireTime},
			'<':function(){return now < fireTime},
			'>=':function(){return now >= fireTime},
			'<=':function(){return now <= fireTime}
		}
		
		if(!operators[operator]){
			alert('Timer.is:比较符参数"'+operator+'"错误~！');
			return;	
		}else{	
			callback && callback(fireTime);	
			return	operators[operator]();
		}	
	}
	
	
	//获取现在时间
	Timer.now=function(format){
		var now=new Date(),		
			time={
			'year':now.getFullYear(),
			'YY':parseInt((now.getFullYear()+'').substring(2)),
			'YYYY':now.getFullYear(),
			'month':now.getMonth()+1,
			'MM':now.getMonth()+1,
			'date':now.getDate(),
			'DD':now.getDate(),
			'hours':now.getHours(),
			'HH':now.getHours(),
			'minutes':now.getMinutes(),
			'mm':now.getMinutes(),
			'seconds':now.getSeconds(),
			'SS':now.getSeconds(),
			'milliseconds':now.getMilliseconds(),
			'ss':now.getMilliseconds(),		
		}
		
		if(format){
				
		}else{
			return time;	
		}
			
	}
	
	
	//倒计时
	Timer.stop = Timer.stop || function(){};
	Timer.countDown=function($dom,time,format){
		var dfd=$.Deferred();
		var timer={
			time:time || 30
		}
	
		console.log('leftTime:'+time);
		var tween=TweenMax.to(timer,timer.time,{time:0,ease:Linear.easeNone,
		onUpdate:function(){
			var M=Math.floor(timer.time/60)>9 ? Math.floor(timer.time/60) : '0'+Math.floor(timer.time/60),
				S=Math.floor(timer.time%60)>9 ? Math.floor(timer.time%60) : '0'+Math.floor(timer.time%60),
				s=Math.round((timer.time-M*60-S)*100)>9 ? Math.round((timer.time-M*60-S)*100) : '0'+Math.round((timer.time-M*60-S)*100),
				_format=format || ':'
				timeText=M+_format+S+_format+s;
				
			$dom.text(timeText);	
		},
		onComplete:function(){
			this.kill();
			dfd.resolve();	
		}		
		})
		
		Timer.stop=function(){
			tween.kill();
		}
		
		return dfd.promise();
	}
	
})(
window.Timer = window.Timer || {},
window.jQuery = window.jQuery || {} 
)