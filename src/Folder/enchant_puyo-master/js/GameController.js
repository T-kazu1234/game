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
    this.isGameInputUp = false;
    this.isGameInputDown = false;
    this.isGameInputLeft = false;
    this.isGameInputLeft = false;
    this.isGameInputRight = false;
  }

  /** コンテキストクラスの取得 */
  context() {
    console.log(this.context);
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
      console.log(this.context());
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
}

  /** イベントハンドラの初期化 */
  setupEventHandler() {
    //KeyDown
    //alert(this.context());
    this.context().game.addEventListener("keydown", (e) => {
    this.handleKeyEvent(e.keyCode);
    //console.log(`keypress:${e}`);
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

