enchant();

window.onload = function(){
    var core = new Core(700,1400);
    core.preload('tail.png','back_hair.png','right_leg.png','left_leg.png');
    core.preload('right_hand.png','left_hand.png','body.png','face.png');
    core.preload('neck.png','right_wing.png','left_wing.png','hair.png');
    core.preload('z.png','eye.png')
    core.fps = 100;
    core.onload = function(){
        
        var eee=1;
        var time=0;
        var iii=1;
        
        var toki = new Sprite(700,1400);
        toki.image = core.assets['z.png'];
        toki.x = 0;
        toki.y = 0;
        //core.rootScene.addChild(toki);
        
        //尻尾の初期設定
        var tail = new Sprite(350,250);
        tail.image = core.assets['tail.png'];
        tail.x = 556-339;
        tail.y = 699;
        core.rootScene.addChild(tail);
        
        //後ろ髪の初期設定
        var back_hair = new Sprite(400,300);
        back_hair.image = core.assets['back_hair.png'];
        back_hair.x = 169-12;
        back_hair.y = 539-245;
        core.rootScene.addChild(back_hair);
        
        //右脚の初期設定
        var right_leg = new Sprite(200,926);
        right_leg.image = core.assets['right_leg.png'];
        right_leg.x = 208-4;
        right_leg.y = 1309-926;
        core.rootScene.addChild(right_leg);
        
        //左脚の初期設定
        var left_leg = new Sprite(200,918);
        left_leg.image = core.assets['left_leg.png'];
        left_leg.x = 399-93;
        left_leg.y = 1309-918;
        core.rootScene.addChild(left_leg);
        
        //右腕の初期設定
        var right_hand = new Sprite(300,740);
        right_hand.image = core.assets['right_hand.png'];
        right_hand.x = 137;
        right_hand.y = 956-740;
        core.rootScene.addChild(right_hand);
        
        //左腕の初期設定
        var left_hand = new Sprite(300,740);
        left_hand.image = core.assets['left_hand.png'];
        left_hand.x = 137+74+52;
        left_hand.y = 958-740;
        core.rootScene.addChild(left_hand);
        
        //身体の初期設定
        var body = new Sprite(400,400);
        body.image = core.assets['body.png'];
        body.x = 538-382;
        body.y = 915-390;
        core.rootScene.addChild(body);
        
        //眼の初期設定
        var eye = new Sprite(130,60);
        eye.image = core.assets['eye.png'];
        eye.x = 325-40;
        eye.y = 480-56;
        core.rootScene.addChild(eye);
        
        //顔の初期設定
        var face = new Sprite(225,225);
        face.image = core.assets['face.png'];
        face.x = 442-205;
        face.y = 580-222;
        core.rootScene.addChild(face);
        
        //首の初期設定
        var neck = new Sprite(250,150);
        neck.image = core.assets['neck.png'];
        neck.x = 237-17;
        neck.y = 606-106;
        core.rootScene.addChild(neck);
        
        //右羽の初期設定
        var right_wing = new Sprite(360,360);
        right_wing.image = core.assets['right_wing.png'];
        right_wing.x = 172-58;
        right_wing.y = 121-7;
        core.rootScene.addChild(right_wing);
        
        //左羽の初期設定
        var left_wing = new Sprite(360,360);
        left_wing.image = core.assets['left_wing.png'];
        left_wing.x = 414-180;
        left_wing.y = 125-5;
        core.rootScene.addChild(left_wing);
        
        //髪の初期設定
        var hair = new Sprite(400,500);
        hair.image = core.assets['hair.png'];
        hair.x = 187-37;
        hair.y = 745-488;
        core.rootScene.addChild(hair);
        
        function idou(name){
            if (core.input.down){
                name.y+=1;
            };
            if (core.input.up){
                name.y-=1;
            };
            if (core.input.left){
                name.x-=1;
            };
            if (core.input.right){
                name.x+=1;
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
        
        function lll(name){
            if (core.input.down){
                name.rotation-=1;
            };
            if (core.input.up){
                name.rotation+=1;
            };
            if (core.input.left){
                name.rotation+=1;
            };
            if (core.input.right){
                name.rotation-=1;
            };
        };
        
        tail.addEventListener('enterframe',function(){
                              if(time>30){
                              iii*=-1;
                              };
                              if(time<-20){
                              iii*=-1;
                              };
                              time+=1*iii;
                              right_wing.rotation=time;
                              left_wing.rotation=-time;
                              idou(eye);
                              });
        
        core.rootScene.on('touchstart',function(e){
                          eee+=1;
                          });
        
    };
    core.start();//？なにこれ
};
