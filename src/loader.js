// SLeasy3-loader
;
(function(SLeasy,$) {
	var $config =SLeasy.config(),//全局配置
	 	$scope=SLeasy.scope();//公有变量

	SLeasy.loader=SLeasy.loader|| {}
	
	//loading-style
	var loaderStyle = [
		'<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#fff">\
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

		'<svg width="38" height="38" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg">\
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
	SLeasy.loader.html = function() {
		var loadingStyle = 'position:absolute;z-index:9999;top:50%;left:50%;'+
							'margin-left:' + -$config.loader.size[0] / 2 + 'px;'+
							'margin-top:' + -$config.loader.size[1] / 2 + 'px';
							
		var textStyle = 'position:absolute;text-align:center;top:0;left:0;'+
						'width:' + $config.loader.size[0] + 'px;'+
						'height:' + $config.loader.size[1] + 'px;'+
						'line-height:' + $config.loader.size[1] + 'px;'+
						$config.loader.textStyle;
						
		var textHtml = '<div id="SLeasy_loader_text" style="' + textStyle + '"></div>';
		return '<div id="SLeasy_loader" style=' + loadingStyle + '>' + (typeof $config.loader.style =='number' ? loaderStyle[$config.loader.style] : $config.loader.style) + textHtml + '</div>';
	}


	//text
	SLeasy.loader.text = function(txt) {
		$("#SLeasy_loader_text").text(txt);
	}

	//show
	SLeasy.loader.show = function() {
		if ($("#SLeasy_loader").length) { //如果loader已初始化
			$("#SLeasy_loader").fadeIn(300);
		} else {
			var loaderBox=$config.stageMode=='scroll' ? $("body") : $scope.sliderBox;
			loaderBox.prepend(SLeasy.loader.html());
			$("#SLeasy_loader").fadeIn(300);
		}
	}

	//hidden
	SLeasy.loader.hidden = function() {
		$("#SLeasy_loader").fadeOut(300);
	}

	//load
	SLeasy.loader.load = function(loadArr) {
		var dfd = $.Deferred();
		SLeasy.loader.show();

		var loaded = 0;

		(loadArr && loadArr.length) ? _load(loadArr) : (SLeasy.loader.hidden(),dfd.resolve($config,$scope));//如果加载数组为空则立即返回

		function _load(loadArr) {
			var img = new Image();
			img.src = loadArr[loaded];
			console.log('开始加载：'+img.src);
			img.onload = function() {
				loaded++;
				//console.log(loaded);
				SLeasy.loader.percent = Math.round(loaded * 100/ loadArr.length/($config.loader.endAt/100));
				SLeasy.loader.percent = SLeasy.loader.percent>100 ? 100 : SLeasy.loader.percent;
				$config.on['loadProgress'](SLeasy.loader.percent); //预加载进行时回调
				dfd.notify(SLeasy.loader.percent);
				if (SLeasy.loader.percent >= 100) {
					$config.on['loaded'](); //预加载完毕回调
					dfd.resolve($config,$scope);
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