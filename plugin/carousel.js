// carousel for Sleasy3
(function(SLeasy,H,$,T){
	var $config=SLeasy.config(),
		$scope=SLeasy.scope();
		
	//carousel
	SLeasy.carousel=function(opt){
		var config={
			dom:$('body'),
			width:219,
			height:298,
			perspective:200,
			perspectiveOrigin:'50% 0%',
			radius:230,
			z:300,
			cards:[],
		}
		
		$.extend(config,opt);//合并自定义参数
		SLeasy.fixProps(config);//属性缩放变换
		
		var $carousel,
			carouselClass='SLeasy_carousel',
			containerClass='SLeasy_carousel_container',
			stage='.'+carouselClass,
			container='.'+containerClass,
			card='.SLeasy_carousel_card',
			opacityArr=[],//透明度数组
			isMotion=0,
			deg=Math.round(360/config.cards.length);
		
		return init();//初始化
		
		//init
		function init(){
			var 	carouselHtml='<div class="'+carouselClass+'">\
							<div class="'+containerClass+'" style="border:0px solid #000">',
				cardHtml=SLeasy.subElement(config.cards,'carousel_card',0,'display');
			
			
			carouselHtml+=cardHtml+'</div></div>';
			config.dom.html(carouselHtml);
			
			//dom cache
			$carousel=config.dom.find(stage);
			$carousel.container=$carousel.find(container);
			$carousel.card=$carousel.container.find(card);
			
			//img to div
			SLeasy.imgToDiv(	$carousel);
			
			//set
			carouselSet();
			
			//event binding
			eventBind();
			
			$carousel.next=next;
			$carousel.pre=pre;
			return $carousel;
		}
		
		//set
		function carouselSet(){
			//stage set
			T.set($carousel,{
				perspective:config.perspective,
				perspectiveOrigin:config.perspectiveOrigin,
				width:'100%',
				height:config.height*2, 
				position:'relative'
			});
			
			//container set
			T.set($carousel.container,{
				transformStyle:'preserve-3d',
				position:'absolute',
				left:'50%',
				top:'50%',
				marginLeft:-config.width/2,
				marginTop:-config.height/2,
				z:-config.z, 
				width:config.width,
				height:config.height
			});
			
			//card set
			var cardCount=config.cards.length;
			for(var j=0;j<2;j++){
				for(var k=0;k<cardCount/2;k++){
					if(j==0){
						var alpha=1-(1/(cardCount/2+1)*k);
						opacityArr.push(alpha);
					}else{
						var alpha=0+(1/(cardCount/2+1)*(k+1));
						opacityArr.push(alpha);
					}
				}
			}
			//console.log(opacityArr);
			for(var i=0;i<cardCount;i++){
				T.set($carousel.card.eq(i),{
					transform:'rotateY('+deg*i+'deg) translateZ('+config.radius+'px) rotateY('+-deg*i+'deg)',
					opacity:opacityArr[i]
				});	
			}
			
		}
		
		//event bind
		function eventBind(){
			$carousel.card.each(function(index, element) {
				var card=config.cards[index];
                card.set && T.set($(this),card.set);
				card.event && $(this).css("cursor","pointer") && H($(this)[0]).on(card.event,card.onEvent);
            });
			
			
			H($carousel[0]).on('swipeleft',function(){
				console.log('carousel left~');
				next();
			})
	
			H($carousel[0]).on('swiperight',function(){
				console.log('carousel right~');
				pre();
			})
		}
		
		function next(){
			if(isMotion) return;
			isMotion=1;
			var tmp=opacityArr.pop();
			opacityArr.unshift(tmp);
			//console.log(opacityArr);
			$carousel.card.each(function(index, element) {
            	T.to($(this),0.6,{rotationY:'+=30',opacity:opacityArr[index]});	
        	});
			T.to($carousel.container,0.6,{rotationY:'-=30',ease:Back.easeOut,onComplete:function(){isMotion=0}});
		}
	
		function pre(){
			if(isMotion) return;
			isMotion=1;
			var tmp=opacityArr.shift();
			opacityArr.push(tmp);
			//console.log(opacityArr);
			$carousel.card.each(function(index, element) {
            	T.to($(this),0.6,{rotationY:'-=30',opacity:opacityArr[index]});	
        	});
			T.to($carousel.container,0.6,{rotationY:'+=30',ease:Back.easeOut,onComplete:function(){isMotion=0}});
		}	
		
	}

//
})(
window.SLeasy = window.SLeasy || {},
Hammer,
jQuery,
TweenMax
)