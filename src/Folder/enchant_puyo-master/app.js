let CELL_SIZE = 32;  //マスのサイズ
let COL_COUNT = 6;   //横のマス数
let ROW_COUNT = 12;  //縦のマス数

let context = null;

// enchant.js を使う前に必要な処理。
enchant();
//window.onload = function () {
    //関数 gameLoad(幅,高さ)
    function gameLoad(width,height){                            
    // Game オブジェクトを作成する
    let game = new Core(375,812);     
    // ゲームのFPS
    game.fps = 10;

    // 必要なファイルを相対パスで引数に指定する。 ファイルはすべて、ゲームが始まる前にロードされる。
    game.preload(
        "images/puyopuyo2.png", 
        "images/map0_aft.png",
        "images/gameover.png",
        "images/pad.png",
        "images/Button.png"
        );
    

    // ロードが完了したら、ゲームの処理を実行していく
    game.onload = function () {

        /**
         * 時間経過毎にぷよを下に落とすためのタイマー
        */
       /*
        game.addEventListener('enterframe',function(e){
            let PuyoDropTimeCounter = 0;
            for(var i = 0;  i < 100;  i++){
            PuyoDropTimeCounter = i;
            console.log("PuyoDropTimeCounter=",PuyoDropTimeCounter)
            let TimeCounter = new GameController();
            if(PuyoDropTimeCounter==99)
                TimeCounter.isGameInputDown = true,
                TimeCounter.padinput(),
                PuyoDropTimeCounter=0;
            };
        });
        */
        


        /**
        * バーチャルパッドの作成
        *  [images/pad.png]
        */
        //pad.scaleX = 2;//pad　幅　　の倍率
        //pad.scaleY = 2;//pad　高さ　の倍率
        //console.log('pad.x = ' + pad.x);
        //console.log('pad.y = ' + pad.y);      
        pad = new Pad();
        pad.x = 0;
        pad.y = game.height - 200;
        pad.addEventListener('enterframe', function(e) {    
            //論理演算子 or [||] and [&&]
            //boolean true　false 型　true if (boolean)
            //[images/CommentImage/PadControl.gif]
            //「方向キー」上下左右がどれも「押されていない」場合、パッドフレーム0セット
            console.log(game.input.up);
            //GameControllerClassからインスタンスpadinputを生成
            var padinput = new GameController();
                if(!game.input.up&&!game.input.down&&!game.input.left&&!game.input.right)pad.frame = 0;
                if (game.input.up)   pad.frame = 5 , pad.rotation = 0 ,console.log("パッドの上が押された");//上が「押されている」場合,padを0度回転
                    padinput.isGameInputUp = game.input.up;//インスタンスのisGameInputUP(ブール値：初期false)に対し、padのgame.input.upをセット
                if (game.input.down) pad.frame = 5 , pad.rotation = 180 ,console.log("パッドの下が押された");//下が「押されている」場合,padを180度回転
                    padinput.isGameInputDown = game.input.down;
                if (game.input.left) pad.frame = 5 , pad.rotation = 270 ,console.log("パッドの左が押された");//左が「押されている」場合,padを270度回転
                    padinput.isGameInputLeft = game.input.left;
                if (game.input.right)pad.frame = 5 , pad.rotation = 90 ,console.log("パッドの右が押された");//右が「押されている」場合,padを90度回転
                    padinput.isGameInputRight = game.input.right;
            
                    padinput.padinput();//インスタンスのMethod(padinput)を呼ぶ（上手く呼べたらpadinput内のconsole.logが反応)
                                        //結果：反応したがぷよの移動処理はされなかった→GameControllerのcontext()が取得できていないためと思われる。
                                        //できた
                    console.log("padinput.isGameInputUp=",padinput.isGameInputUp);
        
        });
        game.rootScene.addChild(pad);
        game.rootScene.backgroundColor = 'rgb(0, 0, 0)';
        //console.log("pad=",pad);
       // console.log(padinput);


       /**
         * Buttonの作成
         * [images/Button.png]
         */
        
        var button = new Button("　回転　","blue");
            button.x = 300;
            button.y = game.height-200;
            button.addEventListener("touchstart", function(){
                var InputA = new GameController();
                    InputA.isButtonInputA = true;
                        console.log(button.buttonpressd);
                    InputA.padinput();
            });
            game.rootScene.addChild(button);
    
            var button_light = new Button("　決定　", "light");
                button_light.x = 250;
                button_light.y = game.height-150;
                button_light.addEventListener("touchstart", function(){
                    var InputB = new GameController();
                    InputB.isButtonInputB = true;
                    InputB.padinput();
                });

                
            game.rootScene.addChild(button_light);
    /*
            var button_blue = new Button("Press me", "blue");
            game.rootScene.addChild(button);
        */


        //コンテキストクラスの作成
        //　context.controller を GameControllerクラスにpadの引数を渡し新規作成
        context = new GameContext(game);
        context.controller = new GameController();
        console.log("context.controller=",context.controller);
        context.map = new GameMap();

        /**
         * puyo.jsのぷよ座標をチェック
         * Puyo()Classのconstructorはgameを引数にしている？
         * constructor(game)
         * consoleを入れるとassetsのundefined(未定義)でエラーになる
    */
   //*
   game.addEventListener('enterframe',function(e){
    //var puyoxy = new Puyo();
    console.log("PuyoX=",context);
    
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

