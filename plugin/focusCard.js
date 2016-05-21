// focusCard for Sleasy3
(function(SLeasy,H,$,T){
	var $config=SLeasy.config(),
		$scope=SLeasy.scope();
		
	//focusCard
	SLeasy.focusCard=function(opt){
		var config={
			dom:$('body'),
			width:219,
			height:298,
			perspective:200,
			perspectiveOrigin:'50% 54%',
			z:0,
			xOffset:80,
			zOffset:80,
			showCount:5,
			ease:Power3.easeOut,
			cards:[],
		}
		
		$.extend(config,opt);//合并自定义参数
		SLeasy.fixProps(config);//属性缩放变换
		
		var $focusCard,
			focusCardClass='SLeasy_focusCard',
			containerClass='SLeasy_focusCard_container',
			stage='.'+focusCardClass,
			container='.'+containerClass,
			card='.SLeasy_focusCard_card',
			isMotion=0,//运动状态
			stateArr=[],
			cardArr=[],
			deg=Math.round(360/config.cards.length);
		
		return init();//初始化
		
		//init
		function init(){
			var focusCardHtml='<div class="'+focusCardClass+'">\
							<div class="'+containerClass+'" style="border:0px solid #000">',
				cardHtml=SLeasy.subElement(config.cards,'focusCard_card',0,'display');
			
			
			focusCardHtml+=cardHtml+'</div></div>';
			config.dom.html(focusCardHtml);
			
			//dom cache
			$focusCard=config.dom.find(stage);
			$focusCard.container=$focusCard.find(container);
			$focusCard.card=$focusCard.container.find(card);
			console.log($focusCard);
			console.log($focusCard.container);
			console.log($focusCard.card);
			
			//img to div
			SLeasy.imgToDiv($focusCard);
			
			//set
			focusCardSet();
			
			//event binding
			eventBind();
			
			$focusCard.next=next;
			$focusCard.pre=pre;
			$focusCard.getFocusIndex=getFocusIndex;
			return $focusCard;
		}
		
		//set
		function focusCardSet(){
			//stage set
			T.set($focusCard,{
				perspective:config.perspective,
				perspectiveOrigin:config.perspectiveOrigin,
				width:'100%',
				height:config.height, 
				position:'relative'
			});
			
			//container set
			T.set($focusCard.container,{
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
			var cardCount=config.cards.length,showCount=config.showCount;
			//右边card(包括中心card)
			for(var i=0;i<Math.ceil(showCount/2);i++){
				var state={
					x:config.xOffset*i,
					z:-config.zOffset*i,
					opacity:1-0.25*i,
					ease:config.ease
				}
				stateArr.push(state);
				cardArr.push($focusCard.card.eq(i));
				T.set($focusCard.card.eq(i),state);
			}
	
			//左边边card(不包括中心card)
			for(var i=0;i<Math.floor(showCount/2);i++){
				var state={
					x:-config.xOffset*(i+1),
					z:-config.zOffset*(i+1),
					opacity:1-0.25*(i+1),
					ease:config.ease
				}
				stateArr.unshift(state);
				cardArr.unshift($focusCard.card.eq(Math.ceil(showCount/2)+i));
				T.set($focusCard.card.eq(Math.ceil(showCount/2)+i),state);
			}
	
			//剩余card
			for(var i=0;i<(cardCount-showCount);i++){
				var state={
					//x:config.xOffset*(i+showCount),
					z:-config.zOffset*(i+showCount),
					opacity:0,
					ease:config.ease
				}
				stateArr.push(state);
				cardArr.push($focusCard.card.eq(i+showCount));
				T.set($focusCard.card.eq(i+showCount),state);
			}

			//console.log(cardArr);		
		}
		
		
		//event bind
		function eventBind(){
			$focusCard.card.each(function(index, element) {
				var card=config.cards[index];
                card.set && T.set($(this),card.set);
				card.event && $(this).css("cursor","pointer") && H($(this)[0]).on(card.event,card.onEvent);
            });
			
			
			H($focusCard[0]).on('swipeleft',function(){
				console.log('carousel left~');
				next();
			})
	
			H($focusCard[0]).on('swiperight',function(){
				console.log('carousel right~');
				pre();
			})
		}
		
		
		function next(){
			var tmp=cardArr.shift();
			cardArr.push(tmp);
			console.log(cardArr);
			$.each(cardArr,function(index,card){
				T.to(card,0.6,stateArr[index]);
			})
		}
	
		function pre(){
			var tmp=cardArr.pop();
			cardArr.unshift(tmp);
			console.log(cardArr);
			$.each(cardArr,function(index,card){
				T.to(card,0.6,stateArr[index]);
			})
		}
		
		//获取当前焦点卡片索引
		function getFocusIndex(){
			//console.log(cardArr);
			return cardArr[Math.floor(config.showCount/2)].index();	
		}
		
		
	}

//
})(
window.SLeasy = window.SLeasy || {},
Hammer,
jQuery,
TweenMax
)