//let CELL_SIZE = screen.width / 10;
let CELL_SIZE = 64;  //マスのサイズ
let COL_COUNT = 6;   //横のマス数
let ROW_COUNT = 12;  //縦のマス数
let context = null;


enchant();


/**
 * gameLoad 
 * @param {*} width 幅
 * @param {*} height 高さ
 * @param Rectangle 【語源】ラテン語「まっすぐな角」の意　をEnchantクラス生成
 * @param initialize Rectangle初期化(x座標の値,y座標の値,幅,高さ)
 **/
 function gameLoad(width,height){                            
    console.log("width=",width);
    console.log("height=",height);
    
  //game = new コア(幅,高さ);    
    game = new Core(width, height);                         
    var Rectangle = enchant.Class.create({                  
        initialize: function(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }});




    /**
     * ゲームのFPS
     */
    game.fps = 10;

    /**
     * 必要なファイルを相対パスで引数に指定する。 
     * ファイルはすべてゲームが始まる前にロードされる。
     */
    game.preload(
        "images/resize/puyopuyo2_64.png", 
        "images/resize/map0_64.png",
        "images/gameover.png",
        "images/pad.png",
        "images/Button.png",
        "SoundEffect/powerup02.mp3"
        );

    /** 
     *ロードが完了したら、ゲームの処理を実行していく
     */
    game.onload = function () {


/**
 * 時間経過毎にぷよを下に落とすためのタイマー
                            
game.addEventListener('enterframe',function(e){
    let PuyoDropTimeCounter = 0;
    for(var i = 0;  i < 10000;  i++){
            PuyoDropTimeCounter = i;
            let TimeCounter = new GameController();
            if(PuyoDropTimeCounter==9999)
                TimeCounter.isTimerCount = true,
                TimeCounter.TimerCount(),
                PuyoDropTimeCounter=0;
                console.log("PuyoDropTimeCounter=",PuyoDropTimeCounter)
            };
            
        });
*/
//ゲームスコアラベルを生成
        let label = [];
        label[1] = new Label();
        label[1].moveTo(20 , game.height - 220);
        label[1].on('enterframe',function()
      {
        label[1].text = "SCORE : ";
      });
        game.rootScene.addChild(label[1]);


/**
* バーチャルパッドの作成
* 「方向キー」[images/pad.png]
*/
        pad = new Pad();
        pad.x = 0;
        pad.y = game.height - 200;
        pad.addEventListener('enterframe', function(e) {               
/**
* GameControllerClassからインスタンスpadinputを生成
*  [images/CommentImage/PadControl.gif]
* @param {boolean} isGameInputUp 上方向キーが押されたか
*  boolean (true:押された/false:押されていない)
* @method rotation padの回転角度　(0,180,270,90:上,下,左,右)
* @param pad.frame = 0 上下左右が「どれも押されていない」
* @param pad.frame = 5 :パッドが押された画像にパッドフレームを変更)

* Class(GameController)のInstance(padinput)のMethod(isGameInputUP(引数=ブール値：初期false)に対し、
* padのgame.input.upをセット
*/
var padinput = new GameController();
    if(!game.input.up&&!game.input.down&&!game.input.left&&!game.input.right)
        pad.frame = 0;
//上が「押されている」場合:
    if (game.input.up)  
    pad.frame = 5 , 
    pad.rotation = 0,
    padinput.isGameInputUp = game.input.up;
//下
    if (game.input.down) 
        pad.frame = 5 , 
        pad.rotation = 180,
        padinput.isGameInputDown = game.input.down;
//左
    if (game.input.left) 
        pad.frame = 5 , 
        pad.rotation = 270,
        padinput.isGameInputLeft = game.input.left;
//右
    if (game.input.right)
        pad.frame = 5 , 
        pad.rotation = 90,
        padinput.isGameInputRight = game.input.right;
//インスタンス(padinput)のMethod(padinput)を呼ぶ。上手く呼べたらpadinput内の//console.logが反応
        padinput.padinput();
});


/**
 * 回転ボタンの作成
 * @param {Number} button.x 回転ボタンX座標
 * @param {Number} button.y 回転ボタンy座標
 * @param {boolean} InputA 回転ボタンが押されたかの判定
 */
        var B_Button = new Button("B","B_button",100,100);
            B_Button.x = game.width-B_Button.width;
            B_Button.y = game.height-B_Button.height;
            B_Button.addEventListener("touchstart", function(){
                 var InputA = new GameController();
                    InputA.isButtonInputA = true;
                    InputA.padinput();
            });


        var A_Button = new Button("A", "A_button",100,100);
            A_Button.x = B_Button.x - A_Button.width;
            A_Button.y = game.height-200;
            A_Button.addEventListener("touchstart", function(){
                var InputB = new GameController();
                InputB.isButtonInputB = true;
                InputB.padinput();
                });                
            //game.rootScene.addChild(A_Button);

        //var ScoreLabel = new ScoreLabel(10,10);

        /**
         * Groupクラス
        /* ボタングループを作成してそこにボタンを追加
        var ButtonGroup = new Group();
            ButtonGroup.addChild(button);
            ButtonGroup.addChild(A_Button);
            ButtonGroup.x =　10;    
            button.x = 0;
            A_Button.x = button.x - A_Button.width;
        */

        //コンテキストクラスの作成
        context = new GameContext(game);
        context.controller = new GameController();
        context.map = new GameMap();

        /**
         * puyo.jsのぷよ座標をチェック
         * Puyo()Classのconstructorはgameを引数にしている？
         * constructor(game)
         * consoleを入れるとassetsのundefined(未定義)でエラーになる
    */
   //*
   game.addEventListener('enterframe',function(e){


});

label[2] = new Label();
label[2].moveTo(20 , game.height - 400);
label[2].text = "screen.width=" + screen.width;
label[2].color = "red";
label[2].font = "30px monospace"; 

label[3] = new Label();
label[3].moveTo(20 , game.height - 350);
label[3].text = "screen.height=" + screen.height;
label[3].color = "red";
label[3].font = "30px monospace"; 

label[4] = new Label();
label[4].moveTo(20 , game.height - 300);
label[4].text = "game.width=" + game.width;
label[4].color = "red";
label[4].font = "30px monospace"; 

label[5] = new Label();
label[5].moveTo(20 , game.height - 250);
label[5].text = "game.height=" + game.height;
label[5].color = "red";
label[5].font = "30px monospace"; 




//*/     

        game.scale = 1;
        

        // マップの作成
        game.rootScene.addChild(GameMap.createEnchantMap());
        //game.rootScene.addChild(ButtonGroup);
        //game.rootScene.addChild(ScoreLabel);
        game.rootScene.addChild(B_Button);
        game.rootScene.addChild(A_Button);
        game.rootScene.addChild(pad);
        /*
        game.rootScene.addChild(label[2]);
        game.rootScene.addChild(label[3]);
        game.rootScene.addChild(label[4]);
        game.rootScene.addChild(label[5]);
        */

        game.rootScene.backgroundColor = 'rgb(0, 0, 0)';        

        // フレームが描画される前の処理 
        game.addEventListener("enterframe", enterFrame);

        // 開始処理 
        context.startGame();
    };

    //ゲームを開始する
    game.start();

};

/**
 * フレームが描画される前の処理
 */
function enterFrame() {


    //ゲーム状態に応じて処理を振り分ける
    if (GameContext.currnt().state == GAME_STATE.WAIT_NEXT) {
        //次のぷよの落下待ちの場合
        if (GameContext.currnt().map.isGameOver()) {
            //ゲームオーバーの場合
            //alert("gameover");
            GameContext.currnt().endGame();
        } else {
            //次の[ぷよ]を降らせる
            GameContext.currnt().popNext();
        }
    } else if (GameContext.currnt().state == GAME_STATE.FIXED) {
        //落下中の[ぷよ]の配置が確定した場合
        //連鎖アニメーション処理
        GameContext.currnt().rensaAnimation();

    }
}

/**
 * ゲームオーバ画面の表示
 */
function pushGameOverScene() {

}