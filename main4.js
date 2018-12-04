enchant();

window.onload = function(){
    var core = new Core(1400,1400);
    core.preload('tail.png','back_hair.png','right_leg.png','left_leg.png');
    core.preload('right_hand.png','left_hand.png','body.png','face.png');
    core.preload('neck.png','right_wing.png','left_wing.png','hair.png');
    core.preload('eye.png','eyes.png');
    core.fps = 100;
    core.onload = function(){
        
        var eee=1;
        var time=0;
        var iii=1;
        var face1 = 0;
        
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
        left_hand.x = 137+74+56;
        left_hand.y = 956-740;
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
        face.frame = 3;
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
        
        //髪の初期設定
        var eyes = new Sprite(173,129);
        eyes.image = core.assets['eyes.png'];
        eyes.x = 280;
        eyes.y = 0;
        core.rootScene.addChild(eyes);
        
        function idou(name){
            if (core.input.down){
                name.y+=5;
                right_wing.rotation=time;
                left_wing.rotation=-time;
            };
            if (core.input.up){
                name.y-=5;
                right_wing.rotation=time;
                left_wing.rotation=-time;
            };
            if (core.input.left){
                name.x-=5;
                right_leg.rotation=-time*0.8;
                left_leg.rotation=time*0.8;
            };
            if (core.input.right){
                name.x+=5;
                right_leg.rotation=-time*0.8;
                left_leg.rotation=time*0.8;
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
                              if(time<-30){
                              iii*=-1;
                              };
                              time+=1*iii;
                              right_hand.rotation=-time*0.1;
                              left_hand.rotation=time*0.1;
                              face.y += time*0.015;
                              right_wing.y += time*0.015;
                              left_wing.y += time*0.015;
                              hair.y += time*0.015;
                              back_hair.y += time*0.015;
                              body.y += time*0.008;
                              left_hand.y += time*0.008;
                              right_hand.y += time*0.008;
                              neck.y += time*0.015;
                              tail.y += time*0.015;
                              idou(eye);
                              idou(back_hair);
                              idou(tail);
                              idou(hair);
                              idou(left_hand);
                              idou(right_hand);
                              idou(left_leg);
                              idou(right_leg);
                              idou(left_wing);
                              idou(right_wing);
                              idou(body);
                              idou(neck);
                              idou(face);
                              eye.x=eyes.x;
                              eye.y=eyes.y;
                              if(eye.x>face.x+64){
                              eye.x=face.x+64;
                              };
                              if(eye.x<face.x+32){
                              eye.x=face.x+32;
                              };
                              if(eye.y>face.y+90){
                              eye.y=face.y+90;
                              };
                              if(eye.y<face.y+50){
                              eye.y=face.y+50;
                              };
                              });
        
        core.rootScene.on('touchstart',function(e){
                          eee+=1;
                          face1+=1;
                          face.frame=face1;
                          eyes.x=e.x;
                          eyes.y=e.y;
                          });
        
    };
    core.start();
};
