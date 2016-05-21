//dodecahedron for SLeasy3
(function(SLeasy,$){
    var $config=SLeasy.config(),
        $scope=SLeasy.scope();

    //dodecahedron
    SLeasy.dodecahedron=function(opt){
        var config={
            dom:$('body'),
            zIndex:10,
            wireframe:0,
            //camera
            perspective:600,
            perspectiveOrigin:'0% 0%',

            //container
            z:-680,//z视距,可以用来调节十二面体大小

            //face
            faceWidth:'162px',
            faceHeight:'154px',
            faceOpacity:1,
            faceBg:'',//统一贴图
            faceBgArr:[],//单个贴图数组

        }

        $.extend(config,opt);//合并自定义参数
        var $dodecahedron,
            dodecahedronClass='SLeasy_dodecahedron',
            containerClass='SLeasy_dodecahedron_container',
            boxClass='SLeasy_dodecahedron_box',
            faceClass='SLeasy_dodecahedron_face',
            stage='.'+dodecahedronClass,
            container='.'+containerClass,
            box='.'+boxClass,
            face='.'+faceClass;

        return init();//初始化


        //init
        function init(){
            var dodecahedronHtml='<div class="'+dodecahedronClass+'">\
		        <div class="'+containerClass+'" style="border:0px solid #000;z-index:'+config.zIndex+'">\
                <div class="'+boxClass+'">\
                    <div class="'+faceClass+'"></div>\
                    <div class="'+faceClass+'"></div>\
                    <div class="'+faceClass+'"></div>\
                    <div class="'+faceClass+'"></div>\
                    <div class="'+faceClass+'"></div>\
                    <div class="'+faceClass+'"></div>\
                </div>\
                <div class="'+boxClass+'">\
                    <div class="'+faceClass+'"></div>\
                    <div class="'+faceClass+'"></div>\
                    <div class="'+faceClass+'"></div>\
                    <div class="'+faceClass+'"></div>\
                    <div class="'+faceClass+'"></div>\
                    <div class="'+faceClass+'"></div>\
                </div>\
                </div></div>';
            config.dom.html(dodecahedronHtml);

            //dom cache
            $dodecahedron=config.dom.find(stage);
            $dodecahedron.container=$dodecahedron.find(container);
            $dodecahedron.box=$dodecahedron.container.find(box);
            $dodecahedron.face=$dodecahedron.box.find(face);
            //console.log($dodecahedron);
            //console.log($dodecahedron.container);
            //console.log($dodecahedron.box);
            //console.log($dodecahedron.face);

            //set
            dodecahedronSet();

            return $dodecahedron;
        }


        //dodecahedron set
        function dodecahedronSet(){
            //stage set
            TweenMax.set($dodecahedron,{
                width:'0px',
                height:'0px',
                perspectiveOrigin:config.perspectiveOrigin,
                perspective:config.perspective,
                position:'absolute',
                left:'50%',
                top:'50%'
            })

            //container set
            TweenMax.set($dodecahedron.container,{
                position:'absolute',
                width:'0px',
                height:'0px',
                marginLeft:'-81px',
                transformStyle:'preserve-3d',
                transformOrigin:'81px 183px 0px',
                transform:'translateZ('+config.z+'px)'
            })

            //box set
            TweenMax.set($dodecahedron.box.eq(0),{
                position:'absolute',
                transformStyle:'preserve-3d',
                transformOrigin:'81px 85px 0',
                transform:'rotateX(90deg) translateZ(-223px)'
            });

            TweenMax.set($dodecahedron.box.eq(1),{
                position:'absolute',
                transformStyle:'preserve-3d',
                transformOrigin:'81px 85px 0',
                transform:'rotateX(-90deg)'
            });

            //face set
            TweenMax.set($dodecahedron.face,{
                width:config.faceWidth,
                height:config.faceHeight,
                opacity:config.faceOpacity,
                backgroundSize:'100% auto',
                position:'absolute',
                transformOrigin:'81px 85px 0',
                backfaceVisibility:'visible',
                border:(config.wireframe ? 1 : 0)+'px solid red'
            });

            //alert('url('+(config.faceBgArr[0] || config.faceBg)+')');

            TweenMax.set([$dodecahedron.face.eq(0),$dodecahedron.face.eq(6)],{//face 1
                backgroundImage:'url('+(config.faceBgArr[0] || config.faceBg)+')',
                transformOrigin:'50% 50% 0',
            });

            TweenMax.set([$dodecahedron.face.eq(1),$dodecahedron.face.eq(7)],{//face 2
                transform:'rotateZ(0) rotateX(-116.56deg) translateY(-69px) translateY(-31px) translateZ(62px)'
            });

            TweenMax.set([$dodecahedron.face.eq(2),$dodecahedron.face.eq(8)],{//face 3
                transform:'rotateZ(72deg) rotateX(-116.56deg) translateY(-69px) translateY(-31px) translateZ(62px)'
            });

            TweenMax.set([$dodecahedron.face.eq(3),$dodecahedron.face.eq(9)],{//face 4
                transform:'rotateZ(144deg) rotateX(-116.56deg) translateY(-69px) translateY(-31px) translateZ(62px)'
            });

            TweenMax.set([$dodecahedron.face.eq(4),$dodecahedron.face.eq(10)],{//face 5
                transform:'rotateZ(-144deg) rotateX(-116.56deg) translateY(-69px) translateY(-31px) translateZ(62px)'
            });

            TweenMax.set([$dodecahedron.face.eq(5),$dodecahedron.face.eq(11)],{//face 6
                transform:'rotateZ(-72deg) rotateX(-116.56deg) translateY(-69px) translateY(-31px) translateZ(62px)'
            });

            //设置贴图
            for(var i=0;i<12;i++){
                TweenMax.set($dodecahedron.face.eq(i),{
                    backgroundImage:'url('+(config.faceBgArr[i] || config.faceBg)+')'
                });
            }





        }


    }

})(
    window.SLeasy = window.SLeasy || {},
    jQuery
)