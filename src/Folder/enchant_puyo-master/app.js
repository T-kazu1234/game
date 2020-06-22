let CELL_SIZE = 16;  //マスのサイズ
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
    game.fps = 15;

    // 必要なファイルを相対パスで引数に指定する。 ファイルはすべて、ゲームが始まる前にロードされる。
    game.preload(
        "images/puyopuyo2.png", 
        "images/map0.png",
        "images/gameover.png",
        "images/pad.png",
        "images/Button.png"
        );

    // ロードが完了したら、ゲームの処理を実行していく
    game.onload = function () {

        /**
        * バーチャルパッドの作成
        *  [images/pad.png]
        */
        //pad.scaleX = 2;//pad　幅　　の倍率
        //pad.scaleY = 2;//pad　高さ　の倍率
        //console.log('pad.x = ' + pad.x);
        //console.log('pad.y = ' + pad.y);      
        pad = new Pad();
        pad.x = 50;
        pad.y = game.height - 200;
        pad.addEventListener('enterframe', function(e) {    
            //論理演算子 or [||] and [&&]
            //boolean true　false 型　true if (boolean)
            //[images/CommentImage/PadControl.gif]
            //「方向キー」上下左右がどれも「押されていない」場合、パッドフレーム0セット
            if(!game.input.up&&!game.input.down&&!game.input.left&&!game.input.right)pad.frame = 0;
            if (game.input.up)   pad.frame = 5 , pad.rotation = 0 ;//上が「押されている」場合,padを0度回転
            
            /*
            padinputインスタンスを作成し、動作確認→エラーとなったNG
            Padinput = new GameController()
            console.log("Padinput=",Padinput);    
            */
           
            if (game.input.down) pad.frame = 5 , pad.rotation = 180 ;//下が「押されている」場合,padを180度回転
            if (game.input.left) pad.frame = 5 , pad.rotation = 270 ;//左が「押されている」場合,padを270度回転
            if (game.input.right)pad.frame = 5 , pad.rotation = 90 ;//右が「押されている」場合,padを90度回転
        });
        game.rootScene.addChild(pad);
        game.rootScene.backgroundColor = 'rgb(0, 0, 0)';
        //console.log("pad=",pad);

        /**
         * Buttonの作成
         * [images/Button.png]
         */
        var button = new Button("Press me");
            button.x = 200;
            button.y = game.height-200;
            //button.addEventListener("touchstart", function(){ ... })
            game.rootScene.addChild(button);
    
            var button_light = new Button("Press me", "light");
            game.rootScene.addChild(button);
    
            var button_blue = new Button("Press me", "blue");
            game.rootScene.addChild(button);



        //コンテキストクラスの作成
        //　context.controller を GameControllerクラスにpadの引数を渡し新規作成
        context = new GameContext(game);
        context.controller = new GameController();
        console.log("context.controller=",context.controller);
        context.map = new GameMap();

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

