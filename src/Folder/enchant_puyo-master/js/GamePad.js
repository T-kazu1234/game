var KEY_CODE = {
  UP: 38,
  LEFT: 37,
  RIGHT: 39,
  DOWN: 40,
  SPACE: 32,
  ENTER: 13
};

/**
 * コントローラクラス
 * gamecontrollerを元に作成
 */
class GamePad {

  /**
   * コンストラクタ
   */
  constructor() {
    this.isStart = false;
    this.direction = 0;
    this.setupEventHandler();
  }

  /** コンテキストクラスの取得 */
  context() {
    return GameContext.currnt();
  }

  /** 現在キーボードイベントを受け付けているかを取得します。 */
  acceptKeybordEvent() {
    if (this.isStart) {
      if (this.context().dropingPuyoPair != null) {
        return true;
      }
    }
    return false;
  }

  /**
   *  バーチャルパッドイベントの処理 
   */
  handleKeyEvent(keyCode) {
    if (!this.acceptKeybordEvent()) {
      return;
    }
  //論理演算子 or [||] and [&&]
  //boolean true　false 型　true if (boolean)
  //[images/CommentImage/PadControl.gif]
  //「方向キー」上下左右がどれも「押されていない」場合、パッドフレーム0セット
  if(!game.input.up&&!game.input.down&&!game.input.left&&!game.input.right)pad.frame = 0;
  if (game.input.up)   pad.frame = 5 , pad.rotation = 0 ;//上が「押されている」場合,padを0度回転
  if (game.input.down) pad.frame = 5 , pad.rotation = 180 ;//下が「押されている」場合,padを180度回転            
  //左が「押されている」場合,padを270度回転
  if (game.input.left) {
    pad.frame = 5 , 
    pad.rotation = 270 , 
    this.context().dropingPuyoPair.moveLeft();
  }
  //右が「押されている」場合,padを90度回転
  else if (game.input.right){
    pad.frame = 5 ,
    pad.rotation = 90 ;
    this.context().dropingPuyoPair.moveRight();  
  }        
            

            } else if (keyCode == KEY_CODE.DOWN) {
              //下キー
              this.context().dropingPuyoPair.moveBottom();
            } else if (keyCode == KEY_CODE.UP) {
              //上キー
              this.context().dropingPuyoPair.moveTop();
            } else if (keyCode == KEY_CODE.SPACE) {
              //スペースキー
              this.context().dropingPuyoPair.rotation();
            } else if (keyCode == KEY_CODE.ENTER) {
              //Enterキー
              this.context().dropingPuyoPair.moveBottomLast();
              this.context().fixDrop();
            }

  }


  /** イベントハンドラの初期化 */
  setupEventHandler() {
    //KeyDown
    // /alert(this.context());
    //this.context().game.addEventListener("keydown", (e) => {
    //this.handleKeyEvent(e.keyCode);
    this.context().game.addEventListener('enterframe', function(e) {    
    });
  }

  /** 入力イベントの受付を開始します */
  start() {
    this.isStart = true;
  }

  /** 入力イベントの受付を停止します */
  stop() {
    this.isStart = false;
  }

}




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
        

        });
