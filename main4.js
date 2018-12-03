enchant();

window.onload = function(){
    var core = new Core(1080,1920);
    core.preload('tail.png','back_hair.png','right_leg.png','left_leg.png');
    core.preload('right_hand.png','left_hand.png','body.png','face.png');
    core.preload('neck.png','right_wing.png','left_wing.png','hair.png');
    core.preload('z.png','eye.png')
    core.fps = 100;
    core.onload = function(){
        
        var eee=1;
        
        var toki = new Sprite(700,1400);
        toki.image = core.assets['z.png'];
        toki.x = 300;
        toki.y = 0;
        core.rootScene.addChild(toki);
        
        //尻尾の初期設定
        var tail = new Sprite(350,250);
        tail.image = core.assets['tail.png'];
        tail.x = 0;
        tail.y = 0;
        core.rootScene.addChild(tail);
        
        //後ろ髪の初期設定
        var back_hair = new Sprite(400,300);
        back_hair.image = core.assets['back_hair.png'];
        back_hair.x = 0;
        back_hair.y = 0;
        core.rootScene.addChild(back_hair);
        
        //右脚の初期設定
        var right_leg = new Sprite(200,926);
        right_leg.image = core.assets['right_leg.png'];
        right_leg.x = 0;
        right_leg.y = 0;
        core.rootScene.addChild(right_leg);
        
        //左脚の初期設定
        var left_leg = new Sprite(200,918);
        left_leg.image = core.assets['left_leg.png'];
        left_leg.x = 0;
        left_leg.y = 0;
        core.rootScene.addChild(left_leg);
        
        //右腕の初期設定
        var right_hand = new Sprite(190,852);
        right_hand.image = core.assets['right_hand.png'];
        right_hand.x = 0;
        right_hand.y = 0;
        core.rootScene.addChild(right_hand);
        
        //左腕の初期設定
        var left_hand = new Sprite(190,852);
        left_hand.image = core.assets['left_hand.png'];
        left_hand.x = 0;
        left_hand.y = 0;
        core.rootScene.addChild(left_hand);
        
        //身体の初期設定
        var body = new Sprite(400,400);
        body.image = core.assets['body.png'];
        body.x = 0;
        body.y = 0;
        core.rootScene.addChild(body);
        
        //眼の初期設定
        var eye = new Sprite(130,60);
        eye.image = core.assets['eye.png'];
        eye.x = 0;
        eye.y = 0;
        core.rootScene.addChild(eye);
        
        //顔の初期設定
        var face = new Sprite(225,225);
        face.image = core.assets['face.png'];
        face.x = 0;
        face.y = 0;
        core.rootScene.addChild(face);
        
        //首の初期設定
        var neck = new Sprite(250,150);
        neck.image = core.assets['neck.png'];
        neck.x = 0;
        neck.y = 0;
        core.rootScene.addChild(neck);
        
        //右羽の初期設定
        var right_wing = new Sprite(360,360);
        right_wing.image = core.assets['right_wing.png'];
        right_wing.x = 0;
        right_wing.y = 0;
        core.rootScene.addChild(right_wing);
        
        //左羽の初期設定
        var left_wing = new Sprite(360,360);
        left_wing.image = core.assets['left_wing.png'];
        left_wing.x = 0;
        left_wing.y = 0;
        core.rootScene.addChild(left_wing);
        
        //髪の初期設定
        var hair = new Sprite(400,500);
        hair.image = core.assets['hair.png'];
        hair.x = 0;
        hair.y = 0;
        core.rootScene.addChild(hair);
        
        function idou(name){
            if (core.input.down){
                name.y+=5;
            };
            if (core.input.up){
                name.y-=5;
            };
            if (core.input.left){
                name.x-=5;
            };
            if (core.input.right){
                name.x+=5;
            };
        };
        
        function rrr(name){
            if (core.input.down){
                name.rotation+=1;
            };
            if (core.input.up){
                name.rotation-=1;
            };
            if (core.input.left){
                name.rotation-=1;
            };
            if (core.input.right){
                name.rotation+=1;
            };
        };
        
        tail.addEventListener('enterframe',function(){
                              if((eee%27)==1){
                              idou(tail);
                              };
                              if((eee%27)==2){
                              rrr(tail);
                              };
                              if((eee%27)==3){
                              idou(back_hair);
                              };
                              if((eee%27)==4){
                              rrr(back_hair);
                              };
                              if((eee%27)==5){
                              idou(right_leg);
                              };
                              if((eee%27)==6){
                              rrr(right_leg);
                              };
                              if((eee%27)==7){
                              idou(left_leg);
                              };
                              if((eee%27)==8){
                              rrr(left_leg);
                              };
                              if((eee%27)==9){
                              idou(right_hand);
                              };
                              if((eee%27)==10){
                              rrr(right_hand);
                              };
                              if((eee%27)==11){
                              idou(left_hand);
                              };
                              if((eee%27)==12){
                              rrr(left_hand);
                              };
                              if((eee%27)==13){
                              idou(body);
                              };
                              if((eee%27)==14){
                              rrr(body);
                              };
                              if((eee%27)==15){
                              idou(eye);
                              };
                              if((eee%27)==16){
                              rrr(eye);
                              };
                              if((eee%27)==17){
                              idou(face);
                              };
                              if((eee%27)==18){
                              rrr(face);
                              };
                              if((eee%27)==19){
                              idou(neck);
                              };
                              if((eee%27)==20){
                              rrr(neck);
                              };
                              if((eee%27)==21){
                              idou(right_wing);
                              };
                              if((eee%27)==22){
                              rrr(right_wing);
                              };
                              if((eee%27)==23){
                              idou(left_wing);
                              };
                              if((eee%27)==24){
                              rrr(left_wing);
                              };
                              if((eee%27)==25){
                              idou(hair);
                              };
                              if((eee%27)==26){
                              rrr(hair);
                              };
                              if(eee==26){toki.x=1000};
                              });
        
        core.rootScene.on('touchstart',function(e){
                          eee+=1;
                          });
        
    };
    core.start();//？なにこれ
};
