//enchant.js(index.htmlで先に読み込んでいるライブラリからenchant()関数を呼び出して使う定型文）
enchant();                                                  
/**
 * gameLoad
 * @param {*} width 幅
 * @param {*} height 高さ
 * @param Rectangle 【語源】ラテン語「まっすぐな角」の意　をEnchantクラス生成
 * @param initialize Rectangle初期化(x座標の値,y座標の値,幅,高さ)
  */
var width=window.innerWeight,height=window.innerHeight;

function gameLoad(width,height){                            
    //game = new コア(幅,高さ);
    game = new Core(width, height);                         
    var Rectangle = enchant.Class.create({                  
        initialize: function(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        },

/**
 * @method rigth 右
 * @param get 取得　関数 (:の意味合いがわからない）
 * @param return リターン値を返す　x座標の値　＋　幅
 */
        right: {                                            
            get: function() {                               
                return this.x + this.width;                 
            }
        },
/**
 * @method bottom 底辺（ボトム）
 * @param get 
 * @param return y座標の値 ＋ 高さ
 */
        bottom: {                                          
            get: function() {                              
                return this.y + this.height;               
            }
        }
    });


/**
 * グローバル
 * @function game 
 * @param fps frame per second を24に設定。秒間24フレーム動く
 * @param preload プレロード:画像読み込み
 */
   game.fps = 24;                                  
   game.preload('mario.png', 'map2.gif');
   game.onload = function() {

//値　ブロックス
//-1　の場合　空白（隙間を作る？）
var mapData = [
    [3, 5, 5 ,5 ,5 ,5, 5, 3, 5, 0 ], //1
    [3, 5, 5 ,5 ,5 ,5, 5, 3, 5, 0 ], //2
    [3, 5, 5 ,5 ,5 ,5, 5, 3, 3, 3 ], //3
    [3, 5, 5 ,5 ,5 ,5, 5, 3, 5, 0 ], //4
    [3, 5, 5 ,5 ,5 ,5, 5, 3, 5, 0 ], //5
    [3, 5, 5 ,5 ,5 ,5, 5, 3, 3, 3 ], //6
    [3, 5, 5 ,5 ,5 ,5, 5, 3, 2, 2 ], //7
    [3, 5, 5 ,5 ,5 ,5, 5, 3, 2, 2 ], //8
    [3, 5, 5 ,5 ,5 ,5, 5, 3, 2, 2 ], //9
    [3, 5, 5 ,5 ,5 ,5, 5, 3, 2, 2 ], //10
    [3, 5, 5 ,5 ,5 ,5, 5, 3, 2, 2 ], //11
    [3, 5, 5 ,5 ,5 ,5, 5, 3, 2, 2 ], //12
    [3, 3, 3 ,3 ,3 ,3, 3, 3, 2, 2 ], //13
  ];
//↑ブロックの配置位置を指定？

          
                                       



        /**
         * map
         * マップの一マスを16×16に設定
         * @param image 画像の読み込み
         * @param loadData マップデータの読み込み　読み込む値 blocks
         * @param map.x マップの配置位置 x座標
         * @param map.y マップの配置位置 y座標
         *  */                                                                        
        var map = new Map(16, 16); 
            map.image = game.assets['map2.gif'];             
            map.loadData(mapData);
            map.x =   game.width /  2 - (16 * 5);//game幅の半分の位置からmapの幅の半分(中央位置)を引く
            map.y = ( game.height - (16 * 13 ) )/ 2 ;                            
        var stage = new Group();
        stage.addChild(map);
        console.log(map);
         
        var pad = new Pad();
            pad.x = 0;
            pad.y = game.height - 100;
        game.rootScene.addChild(stage);
        game.rootScene.addChild(pad);
        game.rootScene.backgroundColor = 'rgb(182, 255, 255)';

/**
 * ラベルを生成
 * moveTo 位置を20,20へと移動する
 * on.enterframe　おまじない？ドットインストールのラベルにて解説。
 * text game(フレーム/fps)表示は小数点以下2桁まで（.toFixed(2))
 *      fixフィックスって確定した箇所って意味らしいが、なんで桁表示のことになるのかイマイチわっかんないや
 * ルートシーンに追加　→　このActionMain.js内ではcore.rootSceneではなく、game.rootSceneなので、継承している他の箇所（上記game.frame)なども全てcore　→　gameに書換えたら動いた。
 */
var label = new Label();	                                                
label.moveTo(20, 20);                                                       
label.on('enterframe',function(){                                           
    label.text = "PlayTime:" + (game.frame / game.fps).toFixed(2);          
    });                                                                     
game.rootScene.addChild(label);		 

var label2 = new Label();	                                                
label2.moveTo(20, 40);                                                       
label2.on('enterframe',function(){                                           
    label2.text = "game.width:" + game.width + "game.height:" + game.height;          
    });                                                                     
game.rootScene.addChild(label2);		  



    };
    game.start();
};
