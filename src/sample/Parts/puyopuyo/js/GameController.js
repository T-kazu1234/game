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
 */
class GameController {

  /**
   * コンストラクタ
   */
  constructor() {
    this.isStart = false;
    this.direction = 0;
    this.setupEventHandler();
    this.isGameInputUp = false;//上ボタン:バーチャルパッド入力
    this.isGameInputDown = false;//下
    this.isGameInputLeft = false;//左
    this.isGameInputRight = false;//右
    this.isButtonInputA = false;//ボタン１
    this.isButtonInputB = false;//ボタン２
    this.isTimerCount = false;//一定時間毎に落下フラグをオンに
  }

  /** コンテキストクラスの取得 */
  context() {
    //console.log(this.context);
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
 * 一定時間毎ぷよを一つ下へ移動
 * @param {*} keyCode 
 */
  TimerCount()
  {
    if(this.isTimerCount)
    {
     this.context().dropingPuyoPair.moveBottom();      
      
       // 下へ移動できなければ位置確定して次のぷよを降らせる
        if(this.context.dropingPuyoPair.moveBottom()==false)
        this.context().fixDrop();      
        console.log("timercount箇所",this.context().dropingPuyoPair.moveBottom());
      
     //処理が完了したらフラグを元に戻す
     this.isTimerCount = false;
    }
  }


  /** キーボードイベントの処理 */
  handleKeyEvent(keyCode) {
    if (!this.acceptKeybordEvent()) {
      return;
    }
    if (keyCode == KEY_CODE.LEFT) {
      //左キー
      this.context().dropingPuyoPair.moveLeft();
    } else if (keyCode == KEY_CODE.RIGHT) {
      //右キー
      this.context().dropingPuyoPair.moveRight();
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

  /**
   * バーチャルパッドの処理
   * 
   */
  padinput(){
    //バーチャルパッドの上が押された時
    if(this.isGameInputUp){
      this.context().dropingPuyoPair.moveTop();
      console.log("padinputが呼ばれinputupがTrueの判定がされた");
      //console.log(this.context());
    }
    //バーチャルパッドの下が押された時
    if(this.isGameInputDown){
      this.context().dropingPuyoPair.moveBottom();
      }
    //バーチャルパッドの左が押された時
    if(this.isGameInputLeft){
      this.context().dropingPuyoPair.moveLeft();
      }
    //バーチャルパッドの右が押された時
    if(this.isGameInputRight){
      this.context().dropingPuyoPair.moveRight();
      }
          //回転ボタンが押された時
    if(this.isButtonInputA){
      this.context().dropingPuyoPair.rotation();
      //console.log("回転ボタンが押された");
      }
          //バーチャルパッド2の下が押された時
    if(this.isButtonInputB){
      this.context().dropingPuyoPair.moveBottomLast();
      this.context().fixDrop();
      }
}

  /** イベントハンドラの初期化 */
  setupEventHandler() {
    //KeyDown
    //alert(this.context());
    this.context().game.addEventListener("keydown", (e) => {
    this.handleKeyEvent(e.keyCode);
    ////console.log(`keypress:${e}`);
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

