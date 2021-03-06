//enchant.js(index.htmlで先に読み込んでいるライブラリからenchant()関数を呼び出して使う定型文）
enchant();                                                  

/**
 * モバイル版Safari(iPhone用)のサウンドを有効にする = 有効にする
 * https://qiita.com/codenameyu/items/a1b79bff45fba239f2f1
 */
enchant.Sound.enabledInMobileSafari = true;                 
                                                            

//もし、ロケーションプロトコルが'file:'に等しければ、
if(location.protocol == 'file:'){                           
//enchant.ENV.USE_WEBAUDIO = false;【コメントアウト】
    console.log('1');//コンソールログに('1')を出力する
}

/**
 * gameLoad
 * @param {*} width 幅
 * @param {*} height 高さ
 * @param Rectangle 【語源】ラテン語「まっすぐな角」の意　をEnchantクラス生成
 * @param initialize Rectangle初期化(x座標の値,y座標の値,幅,高さ)
  */
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
        var blocks = [
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 4, 4, 4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 2, 2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 3, 3, 3,-1,-1,-1,-1, 4, 4, 4, 4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 3, 3, 3,-1,-1,-1,-1, 3, 3, 3, 3, 4, 4, 4, 4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 2, 2, 2, 2,-1,-1,-1,-1,-1,-1,-1,-1,-1, 3, 3, 3,-1,-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [ 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,-1,-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 3, 3, 3,-1,-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1,-1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 4, 4, 4, 4, 4, 4, 3, 3, 3,-1,-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,-1,-1,-1,-1, 4, 4, 4, 4, 4, 4, 4,-1,-1, 2, 2,-1,-1, 2, 2,-1,-1, 2, 2,-1,-1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3,10,10,10,10, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,10,10,10,10, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
        ];
//↑ブロックの配置位置を指定？

          
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


/**
 * game.inputupをラベル表示しようとしたが、game.input.upがgame.onload内で未定義とのエラーが返ってきたので、一時コメントアウト。
 *//*/                                                                              
	var label_game_inputup = new Label();	    
	label.moveTo(20, 20);           
	label.on('enterframe',function()
	     label.text = "!game.input.up = " + !game.input.up;
		});                         
	game.rootScene.addChild(label_game_inputup);	
*/


                                                                                //
        var map = new Map(16, 16);                                              //マップの一マスを16×16に設定
        map.image = game.assets['map2.gif'];                                    // 画像の読み込み
        map.loadData(blocks);                                                   //マップデータの読み込み　読み込む値は54行目から始まる blocks
                                                                                //
        var rrr = 360;                                                          //追加分　回転に使用
                                                                                //
        var bear = new Sprite(32, 32);                                          //bear(クマ)　を新しいSpriteクラスで作成する。サイズは(32*32)
        bear.x = 8;                                                             //bearのx座標を8に
        bear.y = -32;                                                           //bearのy座標を-32に（自身のサイズを引いてる？)
        bear.vx = 0;                                                            //bearのvx(x方向のベクトルの意？）
        bear.vy = 0;                                                            //bearのvy(y方向のベクトルの意？）
                                                                                //http://www.ohshiro.tuis.ac.jp/~ohshiro/gamesoft/coordinate/index.html
		bear.ax = 0;                                                            //傾き用に使う変数？
        bear.ay = 0;                                                            //
        bear.pose = 0;                                                          //bearのポーズ　　　　　　　　　※注pauseでは無いので一時停止の意味ではない。ポーズだろう
        bear.jumping = true;                                                    //bearのジャンピングをtrue     (有効化)
        bear.jumpBoost = 0;                                                     //bearのジャンプブースト？ = 0 (初期化）
        bear.image = game.assets['mario.png'];                              //bearのイメージ　ゲームアセット toki_mini.png　を指定
        bear.addEventListener('enterframe', function(e) {                       //
            if(rrr<360){                                                        //追加文始め　回転ジャンプを機能追加
                              rrr +=30;                                         //
                              };                                                //
                              this.rotation = rrr;                              //追加文終わり
            var friction = 0;                                                   //フリクション　＝　 0 　擦るが　0?　・・・摩擦係数かコレ
            if (this.vx > 0.3) {                                                //this(bearにかかる?)　　vx(x方向ベクトル)が  0.3 より大きい時
                friction = -0.3;                                                //フリクション　＝　-0.3
            } else if (this.vx > 0) {                                           //this(bearにかかる?)vx(x方向ベクトル)が  0   より大きい時
                friction = -this.vx;                                            //フリクション　＝　-this.vx　（摩擦係数フリクションは-bear.vx　→　x方向ベクトルに0以上で進む際、摩擦はbearとは反対のxベクトルに対してかかる・・・ってなるのかなコレ）
            }                                                                   //
            if (this.vx < -0.3) {                                               //this(bearにかかる?)　　vx(x方向ベクトル)が -0.3 より小さい時
                friction = 0.3;                                                 //フリクション　＝　 0.3
            } else if (this.vx < 0) {                                           //this(bearにかかる?)　　vx(x方向ベクトル)が  0   より小さい時
                friction = -this.vx;                                            //フリクション　＝　-this.vx　（摩擦係数フリクションは常にbearのx方向ベクトル対し、反対のxベクトルに対してかかる）
            }
            
            
            
            
            
            if (this.jumping) {
                if (!game.input.up || --this.jumpBoost < 0) {                   //上矢印キー又は上十字キーが押されたらジャンプする（!game.input.upはブール関数（true/falseを返す）)
                    this.ay = 0;
            //        console.log('!game.input.up = ' + !game.input.up);
                    
                }
            } else {
                if (game.input.up) {
                    this.jumpBoost = 5;
                    this.ay = -5;
                    rrr     =  0;                                               //回転ジャンプ追加分
                    //game.assets['jump.wav'].clone().play();
                }
            }
            this.ax = 0;
            
            if (game.input.left){ 
                pad.frame = 5 , 
                pad.rotation = 270 ,
                this.ax -= 0.5;
            }
            if (!game.input.left){ 
                pad.frame = 0 , 
                pad.rotation = 0;
            } 
            if (game.input.right) {
                pad.frame = 5 , 
                pad.rotation = 90 ,
                this.ax += 0.5;
            }
            
            if (!game.input.right){ 
                pad.frame = 0 , 
                pad.rotation = 0;
            }
            

            if (this.ax > 0) this.scaleX = 1;
            if (this.ax < 0) this.scaleX = -1;
            if (this.ax != 0) {
                if (game.frame % 3 == 0) {
                    this.pose++;
                    this.pose %= 2;
                }
                this.frame = this.pose + 1;
            } else {
                this.frame = 0;
            }
            this.vx += this.ax + friction;
            this.vy += this.ay + 2 ; // 2 is gravity
            this.vx = Math.min(Math.max(this.vx, -10), 10);
            this.vy = Math.min(Math.max(this.vy, -10), 10);
            var dest = new Rectangle(
                this.x + this.vx + 5, this.y + this.vy + 2,
                this.width-10, this.height-2
            );
            this.jumping = true;
            if (dest.x < -stage.x) {
                dest.x = -stage.x;
                this.vx = 0;
            }
            while (true) {
                var boundary, crossing;
                var dx = dest.x - this.x - 5;
                var dy = dest.y - this.y - 2;
                if (dx > 0 && Math.floor(dest.right / 16) != Math.floor((dest.right - dx) / 16)) {
                    boundary = Math.floor(dest.right / 16) * 16;
                    crossing = (dest.right - boundary) / dx * dy + dest.y;
                    if ((map.hitTest(boundary, crossing) && !map.hitTest(boundary-16, crossing)) ||
                        (map.hitTest(boundary, crossing + dest.height) && !map.hitTest(boundary-16, crossing + dest.height))) {
                        this.vx = 0;
                        dest.x = boundary - dest.width - 0.01;
                        continue;
                    }
                } else if (dx < 0 && Math.floor(dest.x / 16) != Math.floor((dest.x - dx) / 16)) {
                    boundary = Math.floor(dest.x / 16) * 16 + 16;
                    crossing = (boundary - dest.x) / dx * dy + dest.y;
                    if ((map.hitTest(boundary-16, crossing) && !map.hitTest(boundary, crossing)) ||
                        (map.hitTest(boundary-16, crossing + dest.height) && !map.hitTest(boundary, crossing + dest.height))) {
                        this.vx = 0;
                        dest.x = boundary + 0.01;
                        continue;
                    }
                }
                if (dy > 0 && Math.floor(dest.bottom / 16) != Math.floor((dest.bottom - dy) / 16)) {
                    boundary = Math.floor(dest.bottom / 16) * 16;
                    crossing = (dest.bottom - boundary) / dy * dx + dest.x;
                    if ((map.hitTest(crossing, boundary) && !map.hitTest(crossing, boundary-16)) ||
                        (map.hitTest(crossing + dest.width, boundary) && !map.hitTest(crossing + dest.width, boundary-16))) {
                        this.jumping = false;
                        this.vy = 0;
                        dest.y = boundary - dest.height - 0.01;
                        continue;
                    }
                } else if (dy < 0 && Math.floor(dest.y / 16) != Math.floor((dest.y - dy) / 16)) {
                    boundary = Math.floor(dest.y / 16) * 16 + 16;
                    crossing = (boundary - dest.y) / dy * dx + dest.x;
                    if ((map.hitTest(crossing, boundary-16) && !map.hitTest(crossing, boundary)) ||
                        (map.hitTest(crossing + dest.width, boundary-16) && !map.hitTest(crossing + dest.width, boundary))) {
                        this.vy = 0;
                        dest.y = boundary + 0.01;
                        continue;
                    }
                }

                break;
            }
            this.x = dest.x-5;
            this.y = dest.y-2;

            /**
             * ゲームオーバー処理
             * キャラの位置が320より大きい（画面外に出た時）→　ゲームオーバー
             * //gameover.wav → gameover音を鳴らす
             * @param score スコア
             * @param fram フレーム
             * @param vy vy ? -20
             */
            if (this.y > 320) {                                                 
                //game.assets['gameover.wav'].play();                           
                var score = Math.round(bear.x);                                 
                this.frame = 3;                                                 
                this.vy = -20;                                                  
                this.addEventListener('enterframe', function() {
                    this.vy += 2;
                    this.y += Math.min(Math.max(this.vy, -10), 10);
                    if (this.y > 320) {
                        game.end(score, score + 'mで死にました');
                    }
                });
                this.removeEventListener('enterframe', arguments.callee);
            }

        });
        var stage = new Group();
        stage.addChild(map);
        stage.addChild(bear);
        stage.addEventListener('enterframe', function(e) {
            if (this.x > 64 - bear.x) { 
                this.x = 64 - bear.x;
            }
        });
       
console.log('wigth  = ' + game.width);
console.log('height = ' + game.height);      
        var pad = new Pad();
        pad.x = 0;
        pad.y = game.height - 100;
        game.rootScene.addChild(stage);
        game.rootScene.addChild(pad);
        game.rootScene.backgroundColor = 'rgb(182, 255, 255)';
console.log('pad.y = ' + pad.y);

/**
 * @instance pad2
 * @text 2個目のパッドを追加        
 * @param x 
 */
        var pad2 = new Pad();
        pad2.x = game.width  - 100;
        pad2.y = game.height - 100;
        game.rootScene.addChild(stage);
        game.rootScene.addChild(pad2);
        game.rootScene.backgroundColor = 'rgb(182, 255, 255)';
//	*/
    };
    game.start();
};
