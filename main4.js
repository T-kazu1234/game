enchant();

window.onload = function(){
    var core = new Core(1400,1400);
    core.preload('tail.png','back_hair.png','right_leg.png','left_leg.png');
    core.preload('right_hand.png','left_hand.png','body.png','face.png');
    core.preload('neck.png','right_wing.png','left_wing.png','hair.png');
    core.preload('eye.png','eyes.png','z.png','zimen.png');
    core.fps = 100;
    core.onload = function(){
        
        var eee=1;
        var time=0;
        var iii=1;
        var face1 = 0;
        var gra = 1;//重力加速度
        
        //全体の初期設定
        var z = new Sprite(700,1400);
        z.image = core.assets['z.png'];
        z.x = 0;
        z.y = 0;
        //core.rootScene.addChild(z);
        
        //尻尾の初期設定
        var tail = new Sprite(350,250);
        tail.image = core.assets['tail.png'];
        tail.x = 217+300;
        tail.y = 699-9-100;
        core.rootScene.addChild(tail);
        
        //後ろ髪の初期設定
        var back_hair = new Sprite(400,300);
        back_hair.image = core.assets['back_hair.png'];
        back_hair.x = tail.x-60;
        back_hair.y = tail.y-405;
        core.rootScene.addChild(back_hair);
        
        //右脚の初期設定
        var right_leg = new Sprite(200,926);
        var syosoku = 0;
        var spead=0;
        var ggg = 0;
        right_leg.image = core.assets['right_leg.png'];
        right_leg.x = tail.x-13;
        right_leg.y = tail.y-316;
        core.rootScene.addChild(right_leg);
        
        //左脚の初期設定
        var left_leg = new Sprite(200,918);
        left_leg.image = core.assets['left_leg.png'];
        left_leg.x = tail.x+89;
        left_leg.y = tail.y-308;
        core.rootScene.addChild(left_leg);
        
        //右腕の初期設定
        var right_hand = new Sprite(300,740);
        right_hand.image = core.assets['right_hand.png'];
        right_hand.x = tail.x-80;
        right_hand.y = tail.y-483;
        core.rootScene.addChild(right_hand);
        
        //左腕の初期設定
        var left_hand = new Sprite(300,740);
        left_hand.image = core.assets['left_hand.png'];
        left_hand.x = tail.x+50;
        left_hand.y = tail.y-483;
        core.rootScene.addChild(left_hand);
        
        //身体の初期設定
        var body = new Sprite(400,400);
        body.image = core.assets['body.png'];
        body.x = tail.x-61;
        body.y = tail.y-174;
        core.rootScene.addChild(body);
        
        //眼の初期設定
        var eye = new Sprite(130,60);
        eye.image = core.assets['eye.png'];
        eye.x = tail.x+68;
        eye.y = tail.y-275;
        core.rootScene.addChild(eye);
        
        //顔の初期設定
        var face = new Sprite(225,225);
        face.image = core.assets['face.png'];
        face.x = tail.x+20;
        face.y = tail.y-341;
        face.frame = 3;
        core.rootScene.addChild(face);
        
        //首の初期設定
        var neck = new Sprite(250,150);
        neck.image = core.assets['neck.png'];
        neck.x = tail.x+3;
        neck.y = tail.y-199;
        core.rootScene.addChild(neck);
        
        //右羽の初期設定
        var right_wing = new Sprite(360,360);
        right_wing.image = core.assets['right_wing.png'];
        right_wing.x = tail.x-103;
        right_wing.y = tail.y-585;
        core.rootScene.addChild(right_wing);
        
        //左羽の初期設定
        var left_wing = new Sprite(360,360);
        left_wing.image = core.assets['left_wing.png'];
        left_wing.x = tail.x+17;
        left_wing.y = tail.y-579;
        core.rootScene.addChild(left_wing);
        
        //髪の初期設定
        var hair = new Sprite(400,500);
        hair.image = core.assets['hair.png'];
        hair.x = tail.x-67;
        hair.y = tail.y-442;
        core.rootScene.addChild(hair);
        
        //バックベアードの初期設定
        var eyes = new Sprite(173,129);
        eyes.image = core.assets['eyes.png'];
        eyes.x = 280;
        eyes.y = 0;
        core.rootScene.addChild(eyes);
        
        var zimen1 = new Sprite(1200,200);
        zimen1.image = core.assets['zimen.png'];
        zimen1.x = 50;
        zimen1.y = 1300-100;
        zimen1.frame = 0;
        core.rootScene.addChild(zimen1);
        
        function move(){
            back_hair.x = right_leg.x-60+13;
            back_hair.y = right_leg.y-405+316;
            left_leg.x = right_leg.x+89+13;
            right_hand.x = right_leg.x-80+13;
            right_hand.y = right_leg.y-483+316;
            left_hand.x = right_leg.x+50+13;
            left_hand.y = right_leg.y-483+316;
            body.x = right_leg.x-61+13;
            body.y = right_leg.y-174+316;
            eye.x = right_leg.x+68+13;
            eye.y = right_leg.y-275+316;
            face.x = right_leg.x+20+13;
            face.y = right_leg.y-341+316;
            neck.x = right_leg.x+3+13;
            neck.y = right_leg.y-199+316;
            right_wing.x = right_leg.x-103+13;
            right_wing.y = right_leg.y-585+316;
            left_wing.x = right_leg.x+17+13;
            left_wing.y = right_leg.y-579+316;
            hair.x = right_leg.x-67+13;
            hair.y = right_leg.y-442+316;
            tail.x = right_leg.x+13;
            tail.y = right_leg.y+316;
        };
        
        function idou(name){
            if (core.input.down){
                name.y+=10;
                right_wing.rotation=time;
                left_wing.rotation=-time;
            };
            if (core.input.up){
                name.y-=10;
                right_wing.rotation=time;
                left_wing.rotation=-time;
            };
            if (core.input.left){
                name.x-=10;
                right_leg.rotation=-time*0.8;
                left_leg.rotation=time*0.8;
                right_hand.rotation=-time*0.1;
                left_hand.rotation=time*0.1;
            };
            if (core.input.right){
                name.x+=10;
                right_leg.rotation=-time*0.8;
                left_leg.rotation=time*0.8;
                right_hand.rotation=-time*0.1;
                left_hand.rotation=time*0.1;
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
        
        right_leg.addEventListener('enterframe',function(){
                              if(time>30){
                              iii*=-1;
                              };
                              if(time<-30){
                              iii*=-1;
                              };
                              time+=1*iii;
                              ggg+=0.1;
                               
                              //eyes.y -= spead;
                        
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
                              //eyes.x +=time;
                              eyes.rotation=time;
                              spead = syosoku-gra*ggg;
                              idou(eye);
                              idou(back_hair);
                              idou(tail);
                              idou(hair);
                              idou(left_hand);
                              idou(right_hand);
                              idou(left_leg);
                              idou(left_wing);
                              idou(right_wing);
                              idou(body);
                              idou(neck);
                              idou(face);
                              idou(right_leg);
                              idou(zimen1);
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
        
        
        zimen1.addEventListener('enterframe',function(){
                                if(zimen1.intersect(eyes)){
                                if(eyes.y > zimen1.y-129){
                                if(eyes.y < zimen1.y+50-129){
                                ggg = 0;
                                syosoku = -spead*1;//反射係数
                                spead = 0;
                                eyes.y = zimen1.y-129;
                                };
                                };
                                if(eyes.y < zimen1.y+200){
                                if(eyes.y > zimen1.y-50+200){
                                ggg = 0;
                                syosoku = -spead*1;//反射係数
                                spead = 0;
                                eyes.y = zimen1.y+200;
                                };
                                };
                                if(eyes.x > zimen1.x-173){
                                if(eyes.x < zimen1.x+50-173){
                                eyes.x = zimen1.x-173;
                                };
                                };
                                if(eyes.x < zimen1.x+1200){
                                if(eyes.x > zimen1.x-50+800){
                                eyes.x = zimen1.x+1200;
                                };
                                };
                                };
                                });//地面1
        
        core.rootScene.on('touchstart',function(e){
                          eee+=1;
                          face1+=1;
                          face.frame=face1;
                          eyes.x=e.x;
                          eyes.y=e.y;
                          spead=0;
                          syosoku=0;
                          ggg=0;
                          });
        
    };
    core.start();
};
