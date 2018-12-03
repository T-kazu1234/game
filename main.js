enchant();

window.onload = function(){
    var core = new Core(3300,1600);
    core.preload('serval.png','toki.png','map0.png','cerulean.png');
    core.preload('zimen.png','game_over.png','st.png','replay.png');
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
        core.rootScene.addChild(map);
        
        var time = -200; //全体の経過時間 フレーム変更に使用
        var time2 = 0;//画面切り替えに使用
        var jump = 1; //二段ジャンプに使用
        var rr=0,rrr=0; //回転に使用
        var cell = 0;//セルリアンのダメージ判定
        var kill = 0;//倒したセルリアンの数
        var g = 10;//重力加速度
        
        //雨の演出の設定(正直いらない)
        var rain = new Sprite(1600,1600);
        rain.image = core.assets['rain.png'];
        rain.x = 0;
        rain.y = 5000;
        rain.frame = 0;
        core.rootScene.addChild(rain);
        
        //背景その2(地下)
        var s2 = new Sprite(1600,1600);
        s2.image = core.assets['s2.png'];
        s2.x = 0;
        s2.y = 5000;
        core.rootScene.addChild(s2);
        
        //サーバルちゃんのキャラデータの初期設定
        var serval = new Sprite(400,400);
        var syosoku_serval = 0;
        var spead_serval;
        var time_serval = 0;
        serval.image = core.assets['serval.png'];
        serval.x = 1200;
        serval.y = 900;
        serval.frame = 0;
        core.rootScene.addChild(serval);
        
        //かばんちゃんの初期設定
        var bag = new Sprite(400,400);
        bag.image = core.assets['serval.png'];
        bag.x = 0;
        bag.y = 5000;
        bag.frame =38;
        core.rootScene.addChild(bag);
        
        // セルリアンの初期設定
        var cerulean = new Sprite(331,308);
        var syosoku_cerulean = 0;
        var spead_cerulean;
        var time_cerulean = 0;
        cerulean.image = core.assets['cerulean.png'];
        cerulean.x = 5000;
        cerulean.y = 0;
        cerulean.frame = 0;
        core.rootScene.addChild(cerulean);
        
        //地面の設定
        var zimen1 = new Sprite(4000,600);
        zimen1.image = core.assets['zimen.png'];
        zimen1.x = 0;
        zimen1.y = 1300;
        zimen1.frame = 0;
        core.rootScene.addChild(zimen1);
        
        var zimen2 = new Sprite(4000,600);
        zimen2.image = core.assets['zimen.png'];
        zimen2.x = 4000;
        zimen2.y = 1100;
        zimen2.frame = 0;
        core.rootScene.addChild(zimen2);
        
        //ジャパリコインの初期設定
        var japaricoin = new Sprite(350,350);
        japaricoin.image = core.assets['japaricoin.png'];
        japaricoin.x = 5000;
        japaricoin.y = 900;
        japaricoin.frame = 0;
        core.rootScene.addChild(japaricoin);
        
        //トキさんのキャラデータの初期設定
        var toki = new Sprite(400,400);
        toki.image = core.assets['toki.png'];
        toki.x = -2000;
        toki.y = 5000;
        toki.frame = 0;
        core.rootScene.addChild(toki);
        
        //スタート画面の初期設定
        var st = new Sprite(1600,1600);
        st.image = core.assets['st.png'];
        st.x = 0;
        st.y = 0;
        core.rootScene.addChild(st);
        
        //ゲームクリア画面2の初期設定
        var game_clear_2 = new Sprite(1600,1600);
        game_clear_2.image = core.assets['game_clear_2.png'];
        game_clear_2.x = 0;
        game_clear_2.y = 5000;
        core.rootScene.addChild(game_clear_2);
        
        //ゲームクリア画面の初期設定
        var game_clear = new Sprite(1600,1600);
        game_clear.image = core.assets['game_clear.png'];
        game_clear.x = 0;
        game_clear.y = 5000;
        core.rootScene.addChild(game_clear);
        
        //ゲームオーバー画面の初期設定
        var game_over = new Sprite(1600,1600);
        game_over.image = core.assets['game_over.png'];
        game_over.x = 0;
        game_over.y = 5000;
        core.rootScene.addChild(game_over);
        
        //リプレイボタンの初期設定
        var replay = new Sprite(500,200);
        replay.image = core.assets['replay.png'];
        replay.x = 0;
        replay.y = 5000;
        core.rootScene.addChild(replay);
        
        //重力の影響を与える関数(もうちょいまとめたい)
        function grand(name){
            spead_serval = syosoku_serval-g*time_serval;//サーバル
            spead_cerulean = syosoku_cerulean-g*time_cerulean;//セルリアン
        };//重力の影響を与える関数ここまで
        
        //リセット関数
        function reset(){
            time = -200;
            time2 = 0;
            jump = 1;
            rr=0;
            rrr=0;
            cell = 0;
            rain.x = 0;
            rain.y = 5000;
            s2.x = 0;
            s2.y = 5000;
            syosoku_serval = 0;
            spead_serval;
            time_serval = 0;
            serval.x = 1200;
            serval.y = 900;
            bag.x = 0;
            bag.y = 5000;
            bag.frame =38;
            syosoku_cerulean = 0;
            spead_cerulean;
            time_cerulean = 0;
            cerulean.x = 5000;
            cerulean.y = 0;
            cerulean.frame = 0;
            zimen1.image = core.assets['zimen.png'];
            zimen1.x = 0;
            zimen1.y = 1300;
            zimen1.frame = 0;
            zimen2.image = core.assets['zimen.png'];
            zimen2.x = 4000;
            zimen2.y = 1100;
            zimen2.frame = 0;
            japaricoin.x = 5000;
            japaricoin.y = 900;
            toki.x = -2000;
            toki.y = 5000;
            st.y = 0;
            game_clear_2.y = 5000;
            game_clear.y = 5000;
        };//リセット関数ここまで
        
        //地面に接した時の処理の関数
        function zimen(name){
            
            //サーバルちゃん
            if(name.intersect(serval)){
                if(serval.y > name.y-400){
                    if(serval.y < name.y-300){
                        serval.frame = (time/8) % 12;
                        time_serval = 0;
                        syosoku_serval = -spead_serval*0;//反射係数
                        spead_serval = 0;
                        serval.y = name.y-400;
                        jump = 0;
                        serval.rotation = 10;
                    };
                };
                if(serval.y > name.y-300){
                    serval.x = name.x-400;
                };
            };//サーバルちゃんここまで
            
            //セルリアン
            if(name.intersect(cerulean)){
                if(cerulean.y > name.y-308){
                    if(cerulean.y < name.y-208){
                        time_cerulean = 0;
                        syosoku_cerulean = -spead_cerulean*0.2;//反射係数
                        spead_cerulean = 0;
                        cerulean.y = name.y-308;
                    };
                };
                if(cerulean.y > name.y-208){
                    cerulean.x = name.x-331;
                };
            };//セルリアンここまで
            
        };//地面に接した時の処理の関数ここまで
        
        //セルリアンが画面外に出た時の処理
        function out(){
            if(s2.y==5000){
                cerulean.x = 2000;
                cerulean.y = -800;
                syosoku_cerulean = 0;
                spead_cerulean = 0;
                time_cerulean = 0;
                cell = 0;
                cerulean.frame = 0;
            };
        };//セルリアンが画面外に出た時の処理ここまで
        
        //時間経過での処理の関数
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
                    if(kill>0){
                        bag.x=zimen2.x+3600;
                        bag.y=zimen2.y-400;
                    };
                };
                
                if(toki.x > 2000){
                    toki.x = -2000;
                };
                toki.x +=3;
                cerulean.x -= 13-kill;
                if(cell==1){
                    cerulean.x+=3-kill;
                };
                zimen1.x -= 10;
                zimen2.x -= 10;
                bag.x -= 10;
                if(time>0){
                    st.y=5000;
                };
            };
        };//時間経過での処理の関数ここまで
        
        //ここで時間経過処理
        st.addEventListener('enterframe',function(){
                            times();
                            grand();
                            });
        
        //サーバルちゃんの動作設定
        serval.addEventListener('enterframe',function(){
                                
                                this.y -= spead_serval;
                                
                                //画面上に消えた時
                                if(this.y<-800){
                                reset();
                                };//画面上に消えた時ここまで
                                
                                //画面下に消えた時
                                if(this.y>2500){
                                if(s2.y==0){
                                game_over.y = 0;
                                replay.y = 0;
                                };
                                reset();
                                cerulean.x=-10000;
                                s2.y=0;
                                toki.y = 150;
                                toki.x = -500;
                                this.y = 0;
                                japaricoin.x = 600;
                                japaricoin.y = 0;
                                zimen2.y = 1300;
                                zimen1.image = core.assets['zimen2.png'];
                                zimen2.image = core.assets['zimen2.png'];
                                };//画面下に消えた時ここまで
                                
                                //画面左に消えた時
                                if(this.x < -300){
                                game_over.y = 0;
                                replay.y = 0;
                                };//画面左に消えた時ここまで
                                
                                //ジャンプの処理
                                if(jump==1){
                                this.frame = 27;
                                };//ジャンプの処理ここまで
                                
                                });//サーバルちゃんの動作設定ここまで
        
        //地面の動作設定(関数化に成功)
        zimen1.addEventListener('enterframe',function(){
                                zimen(this);
                                });//地面1
        
        zimen2.addEventListener('enterframe',function(){
                                zimen(this);
                                });//地面2
        //地面の動作設定ここまで
        
        //かばんちゃんの動作設定
        bag.addEventListener('enterframe',function(){
                             if(this.intersect(serval)){
                             if(serval.y < this.y-300){
                             game_clear_2.y=0;
                             replay.y = 0;
                             };
                             jump=-100;
                             japaricoin.y=5000;
                             this.frame = 40;
                             time=-20;
                             time_serval=0;
                             serval.x=this.x-390;
                             serval.y=this.y;
                             serval.frame=37;
                             serval.rotation=0;
                             game_clear.y=0;
                             replay.y = 0;
                             };
                             });//かばんちゃんの動作設定ここまで
        
        //トキさんの動作設定
        toki.addEventListener('enterframe',function(){
                              if(jump==2){
                              if(this.intersect(serval)){
                              if(this.x>180){
                              serval.x=this.x-180;
                              serval.y=this.y+300;
                              this.y-=2;
                              time_serval=0;
                              rrr=-30;
                              serval.frame = 39;
                              };
                              };
                              };
                              });//トキさんの動作設定ここまで
        
        //セルリアンの動作設定
        cerulean.addEventListener('enterframe',function(){
                                  
                                  this.y -= spead_cerulean;
                                  
                                  if(cell==1){
                                  cerulean.frame = (time/8) % 4 + 1;
                                  };
                                  
                                  //画面左に消えた時
                                  if(this.x < -300){
                                  out();
                                  };//画面左に消えた時ここまで
                                  
                                  //画面下に消えた時
                                  if(this.x < -300){
                                  out();
                                  };//画面下に消えた時ここまで
                                  
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
                                  replay.y = 0;
                                  };
                                  };
                                  };
                                  });//セルリアンの動作設定ここまで
        
        //ジャパリコインの動作設定
        japaricoin.addEventListener('enterframe',function(){
                                    if(this.intersect(serval)){
                                    this.x = -500;
                                    kill += 10;
                                    };
                                    });//ジャパリコインの動作設定ここまで
        
        //リプレイボタンの動作設定
        replay.addEventListener('enterframe',function(){
                                if(this.intersect(japaricoin)){
                                reset();
                                kill=0;
                                game_over.y = 5000;
                                replay.y = 5000;
                                };
                                });//リプレイボタンの動作設定ここまで
        
        map.loadData(baseMap);//？なにこれ
        
        //タッチアクションの設定
        core.rootScene.on('touchstart',function(e){
                          if(time>0.1){
                          if(jump>-10){
                          if(jump<2){
                          jump +=1;
                          rr=0;
                          time_serval = 0;
                          serval.y-=1;
                          syosoku_serval = 38;
                          };
                          };
                          };
                          if(replay.y==0){
                          japaricoin.x=e.x;
                          japaricoin.y=e.y;
                          };
                          });//タッチアクションの設定ここまで
    };
    core.start();//？なにこれ
    //Coreコアとは https://scrapbox.io/Tanakake-memo/Core
};
