enchant();

window.onload = function(){
    var core = new Core(1600,1600);
    core.preload('serval.png','toki.png','map0.png','cerulean.png');
    core.preload('zimen.png','game_over.png','st.png');
    core.preload('s2.png','zimen2.png','japaricoin.png');
    core.preload('game_clear.png','game_clear_2.png','rain.png');
    core.fps = 100;
    core.onload = function(){
        // ここに処理を書いていきます。
        //音を鳴らす
        // Map を作って描画する
        var map = new Map(160, 160);
        map.image = core.assets['map0.png'];
        var baseMap = [
                       [  0,  1,  2,  3,  4,  5,  6,  7,  8,  9],
                       [ 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
                       [ 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
                       [ 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
                       [ 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
                       [ 50, 51, 52, 53, 54, 55, 56, 57, 58, 59],
                       [ 60, 61, 62, 63, 64, 65, 66, 67, 68, 69],
                       [ 70, 71, 72, 73, 74, 75, 76, 77, 78, 79],
                       [ 80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
                       [ 80, 81, 82, 83, 84, 85, 86, 87, 88, 89],
                       ];
        
        var time = 0; //全体の経過時間 フレーム変更に使用
        var time2 = 0;//画面切り替えに使用
        var jump = 4; //二段ジャンプに使用
        var rr=0,rrr=0; //回転に使用
        var cell = 0;//セルリアンのダメージ判定
        var kill = 0;//倒したセルリアンの数

        //サーバルちゃんのキャラデータの初期設定
        var serval = new Sprite(400,400);
        var syosoku_serval = 0;
        var spead_serval;
        var time_serval = 0;
        serval.image = core.assets['serval.png'];
        serval.x = 0;
        serval.y = 0;
        serval.frame = 0;
        
        //雨の演出の設定(正直いらない)
        var rain = new Sprite(1600,1600);
        rain.image = core.assets['rain.png'];
        rain_x_syoki = 0;
        rain.x = rain_x_syoki;
        rain.y = 50000;
        rain.frame = 0;
        
        //トキさんのキャラデータの初期設定
        var toki = new Sprite(400,400);
        toki.image = core.assets['toki.png'];
        toki_x_syoki = -2000;
        toki.x = toki_x_syoki;
        toki.y = -1500;
        toki.frame = 0;
        
        //ジャパリコインの初期設定
        var japaricoin = new Sprite(350,350);
        japaricoin.image = core.assets['japaricoin.png'];
        japaricoin_x_syoki = 5000;
        japaricoin.x = japaricoin_x_syoki;
        japaricoin.y = 900;
        japaricoin.frame = 0;

        // セルリアンの初期設定
        var cerulean = new Sprite(331,308);
        var syosoku_cerulean = 0;
        var spead_cerulean;
        var time_cerulean = 0;
        cerulean.image = core.assets['cerulean.png'];
        cerulean_x_syoki = 5000;
        cerulean.x = cerulean_x_syoki;
        cerulean.y = 0;
        cerulean.frame = 0;
        
        var game_over = new Sprite(1600,1600);
        game_over.image = core.assets['game_over.png'];
        game_over.x = 0;
        game_over.y = 5000;
        
        var game_clear = new Sprite(1600,1600);
        game_clear.image = core.assets['game_clear.png'];
        game_clear.x = 0;
        game_clear.y = 5000;
        
        var game_clear_2 = new Sprite(1600,1600);
        game_clear_2.image = core.assets['game_clear_2.png'];
        game_clear_2.x = 0;
        game_clear_2.y = 5000;
        
        var st = new Sprite(1600,1600);
        st.image = core.assets['st.png'];
        st.x = 0;
        st.y = 5000;
        
        var s2 = new Sprite(1600,1600);
        s2.image = core.assets['s2.png'];
        s2.x = 0;
        s2.y = 5000;
        
        //地面の設定
        
        var zimen1 = new Sprite(4000,600);
        zimen1.image = core.assets['zimen.png'];
        zimen1_x_syoki = 0;
        zimen1.x = zimen1_x_syoki;
        zimen1.y = 1300;
        zimen1.frame = 0;
        
        
        var zimen2 = new Sprite(4000,600);
        zimen2.image = core.assets['zimen.png'];
        zimen2_x_syoki = 4000;
        zimen2.x = zimen2_x_syoki;
        zimen2.y = 1100;
        zimen2.frame = 0;

        var bag = new Sprite(400,400);
        bag.image = core.assets['serval.png'];
        bag_x_syoki = 0;
        bag.x = bag_x_syoki;
        bag.y = -20000;
        bag.frame =38;
        
        
        var g = 10;
        
        function grand(){
            spead_serval = syosoku_serval-g*time_serval;
            spead_cerulean = syosoku_cerulean-g*time_cerulean;
        };
        
        function zimen(name){
            if(name.intersect(serval)){
                serval.frame = (time/8) % 12;
                time_serval = 0;
                syosoku_serval = 0;
                serval.y = name.y-400;
                jump = 0;
                serval.rotation = 10;
            };
        };
        
        function times(name){
            time        +=1.4;
            if(time>0){
            time2       +=1.4;
            time_serval +=0.1;
            time_cerulean += 0.1;
            toki.frame=(time/8) % 6 + 39;
                if(rr<365){
                rr +=6;
                };
                rrr +=60;
                rain.frame=(time/8) % 3;
                if(kill>15){rain.y=0;};
                if(jump==1){
                serval.rotation = rr;
                };
                if(jump==2){
                    serval.rotation = rrr;
                };
                if(zimen1.x < -4000){
                    zimen1.x = 5000;
                };
                if(zimen2.x < -4000){
                    zimen2.x = 5000;
                    if(kill>10){
                        bag.x=zimen2.x+3600;
                        bag.y=zimen2.y-400;
                    };
                };
               
                if(toki.x > 2000){
                    toki.x = -2000;
                };
                toki.x +=3;
                cerulean.x -= 13-kill/10;
                if(cell==1){
                    cerulean.x+=3-kill/10;
                };
                zimen1.x -= 10;
                zimen2.x -= 10;
                bag.x -= 10;
                if(time>0){
                    st.y=5000;
                };
            };
        };
        
        function hansyac(name){
            time_cerulean = 0;
            syosoku_cerulean = -spead_cerulean*0.2;
        };
        
        //サーバルちゃんの動作設定
        serval.addEventListener('enterframe',function(){
                                if(this.y<-800){
                                cerulean.x=cerulean_x_syoki;
                                cerulean.y=0;
                                cell=0;
                                toki.y = -1500;
                                st.y = 0;
                                syosoku_serval=0;
                                time = -200;
                                time2 =- 200;
                                japaricoin.x = -500;
                                zimen2.x = zimen2_x_syoki;
                                zimen1.x = zimen1_x_syoki;
                                zimen2.image = core.assets['zimen.png'];
                                zimen1.image = core.assets['zimen.png'];
                                cerulean.x=cerulean_x_syoki;
                                this.x = 0;
                                this.y = 900;
                                s2.y = 5000;
                                };
                                
                                if(this.y>2500){
                                cerulean.y=-10000;
                                s2.y=0;
                                toki.y = 150;
                                toki.x=-500;
                                this.x=0;
                                this.y=0;
                                st.y = 0;
                                time =- 200;
                                time2 = 0;
                                japaricoin.x = 600;
                                japaricoin.y = 0;
                                zimen2.x = 0;
                                zimen2.y = 1300;
                                zimen2.frame = 0;
                                zimen1.x = 5000;
                                zimen1.y = 1300;
                                zimen1.frame = 0;
                                zimen1.image = core.assets['zimen2.png'];
                                zimen2.image = core.assets['zimen2.png'];
                                };

                                
                                if(this.intersect(japaricoin)){
                                japaricoin.x = -500;
                                kill += 90;
                                };
                                
                             grand();
                             this.y = this.y- spead_serval;
                             times();
                        
                                
                                if(jump>0){
                                this.frame = 27;
                                if(jump==2){
                                if(this.intersect(toki)){
                                this.x=toki.x-180;
                                this.y=toki.y+300;
                                toki.y-=2;
                                time_serval=0;
                                rrr=-30;
                                this.frame = 39;
                                };
                                };
                                };
                             });
        
        //地面の動作設定
        zimen1.addEventListener('enterframe',function(){
                                zimen(this);
                               });
        
        zimen2.addEventListener('enterframe',function(){
                                zimen(this);
                                });

            bag.addEventListener('enterframe',function(){
                                 if(this.intersect(serval)){
                                 if(serval.y < this.y-300){
                                 game_clear_2.y=0;
                                 };
                                 jump=-100;
                                 this.frame = 40;
                                 time=-20;
                                 time_serval=0;
                                 serval.x=this.x-390;
                                 serval.y=this.y;
                                 serval.frame=37;
                                 serval.rotation=0;
                                 game_clear.y=0;
                                 };
                                 });
            
            cerulean.addEventListener('enterframe',function(){
            spead_cerulean = syosoku_cerulean-g*time_cerulean;
            cerulean.y = cerulean.y - spead_cerulean;
            if(this.x<-1000){
                                this.x = 2000;
                                                    this.y = -400;
                                                    cell=0;
                                                    cerulean.frame=0;
                                                    time_cerulean=0;
                                                    hansyac();
                                                    };
                                      if(this.y>2500){
                                      this.x = 2000;
                                      this.y = -400;
                                      cell=0;
                                      cerulean.frame=0;
                                      time_cerulean=0;
                                      hansyac();
                                      };
                                      if(this.y<-5000){
                                      this.y -= 1;
                                      this.x  =5 ;
                                      hansyac();
                                      cell=1;
                                      };
                                                    if(this.intersect(zimen1)){
                                                    hansyac();
                                                    this.y = zimen1.y-308;
                                                    };
                                                    if(this.intersect(zimen2)){
                                                    hansyac();
                                                    this.y = zimen2.y-308;
                                                    };
                                      if(cell==1){
                                      cerulean.frame = (time/8) % 4 + 1;
                                      };
                                      if(this.intersect(serval)){
                                      if(cell==0){
                                      if(serval.y < this.y-300){
                                      cell = 1;
                                      kill+=1;
                                      time_serval = 0;
                                      if(time_serval<0.1){
                                      syosoku_serval = 25;
                                      };
                                      };
                                      if(serval.y > this.y-300){
                                      game_over.y = 0;
                                      };
                                      };
                                      };
                              });
        
        
        map.loadData(baseMap);
        
        //タッチアクション
        core.rootScene.on('touchstart',function(e){
                          if(jump>-10){
                            if(jump<2){
                                jump +=1;
                                rr=0;
                                time_serval = 0;
                                    if(time_serval<0.1){
                                        serval.y-=1;
                                    };
                                    if(time_serval<0.1){
                                        syosoku_serval = 38;
                                    };
                            };
        };
        });

        //core.rootSceneにチャイルドマップデータ追加
        core.rootScene.addChild(map);
        core.rootScene.addChild(rain);
        core.rootScene.addChild(s2);
        core.rootScene.addChild(serval);
        core.rootScene.addChild(zimen1);
        core.rootScene.addChild(zimen2);
        core.rootScene.addChild(cerulean);
        core.rootScene.addChild(bag);
        core.rootScene.addChild(japaricoin);
        core.rootScene.addChild(toki);
        core.rootScene.addChild(st);
        core.rootScene.addChild(game_over);
        core.rootScene.addChild(game_clear_2)
        core.rootScene.addChild(game_clear);
    };
    core.start();
};
