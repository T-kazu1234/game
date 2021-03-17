//let CELL_SIZE = screen.width / 10;
let CELL_SIZE = 32;  //マスのサイズ
let COL_COUNT = 6;   //横のマス数
let ROW_COUNT = 12;  //縦のマス数
let context = null;

// enchant.js を使う前に必要な処理。
enchant();
window.onload = function () {
    //関数 gameLoad(幅,高さ)

    /**
     * 画面の幅・高さ
     
    screen.width;
    screen.height;
    console.log("screen.width",screen.width);
    console.log("screen.height",screen.height);
    let Width=null;
    let Height=null;
    if(screen.width>screen.height){let Width=screen.width,Height=screen.height;console.log("log1=",Width,Height);}
    else{let Width=screen.height,Height=screen.width;console.log("log2=",Width,Height);};
    */
    let game = new Core(window.screen.width,window.screen.height );// Game オブジェクトを作成する
    //let game = new Core(375,812);// Game オブジェクトを作成する
    console.log("screen.width=",screen.width);
    console.log("screen.height=",screen.height);
    //console.log("CELL_SIZE=",CELL_SIZE);
    //let CELL_SIZE = screen.width / 10;
    


    // ゲームのFPS
    game.fps = 10;

    // 必要なファイルを相対パスで引数に指定する。 ファイルはすべて、ゲームが始まる前にロードされる。
    game.preload(
        "images/puyopuyo2.png", 
        "images/map0_aft.png",
        "images/gameover.png",
        "images/pad.png",
        "images/Button.png",
        "sound/PuyoPuyo.mp3"
        );

    // ロードが完了したら、ゲームの処理を実行していく
    game.onload = function () {
        /**  
         * AudioElement を作成
         * サウンドファイルまでの URL アドレスを指定
        */
        var audio = new Audio();
        audio.src = "sound/PuyoPuyo.mp3";
        MusicPlay();

        function MusicPlay(){
            //audio.play();// 再生を開始する
            console.log("MusicPlayを呼び出された");
        };

        function MusicStop(){
            audio.pause();
            audio.currentTime = 0;
        };
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
        *  [images/pad.png]
        */
        pad = new Pad();
        pad.x = 0;
        pad.y = game.height - 200;
        pad.addEventListener('enterframe', function(e) {               
        /**
        * GameControllerClassからインスタンスpadinputを生成
        *  [images/CommentImage/PadControl.gif]
        * @param {boolean} game.input.up 上方向キーが押されたか
        * @param {boolean} isGameInputUp 
        *  boolean (true:押された/false:押されていない)
        * 「方向キー」
        
        * pad.rotation padの回転角度(0,180,270,90:上,下,左,右)
        * pad.frame = 5 パッドが押された画像にパッドフレームを変更
        * 
        */
            var padinput = new GameController();
                // 上下左右が「どれも押されていない」場合、パッドフレーム0セット
                //console.log("何も押されていない");
                if(!game.input.up&&!game.input.down&&!game.input.left&&!game.input.right)
                    pad.frame = 0;
                /**上が「押されている」場合:
                * Class(GameController)のInstance(padinput)のMethod(isGameInputUP(引数=ブール値：初期false)に対し、
                * padのgame.input.upをセット
                */
                if (game.input.up)   
                    pad.frame = 5 , 
                    pad.rotation = 0,
                    padinput.isGameInputUp = game.input.up;
                    //console.log("MusicPlayをコールした"),
                    //MusicPlay();
                //下
                if (game.input.down) 
                    pad.frame = 5 , 
                    pad.rotation = 180,
                    padinput.isGameInputDown = game.input.down;
                    //console.log("MusicStopをコールした"),
                    //MusicStop();
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
        game.rootScene.addChild(pad);
        game.rootScene.backgroundColor = 'rgb(0, 0, 0)';

       /**
         * 回転ボタンの作成
         * [images/Button.png]
         * @param {Number} button.x 回転ボタンX座標
         * @param {Number} button.y 回転ボタンy座標
         * @param {boolean} InputA 回転ボタンが押されたかの判定
         */
        var button = new Button("　回転　","blue",80,80);
            button.x = game.width-60;
            button.y = game.height-200;
            button.addEventListener("touchstart", function(){
                 var InputA = new GameController();
                    InputA.isButtonInputA = true;
                    InputA.padinput();
            });
            game.rootScene.addChild(button);

        var button_light = new Button("　決定　", "light",80,80);
            button_light.x = game.width-120;
            button_light.y = game.height-100;
            button_light.addEventListener("touchstart", function(){
                var InputB = new GameController();
                InputB.isButtonInputB = true;
                InputB.padinput();
                });                
            game.rootScene.addChild(button_light);


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
//*/     

        game.scale = 1;

        // マップの作成
        game.rootScene.addChild(GameMap.createEnchantMap());

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

