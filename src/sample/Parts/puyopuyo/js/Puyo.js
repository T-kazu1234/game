class Puyo {

  /**
   * ぷよ１個を表すクラス
   * @constructor game
   * @instance puyoインスタンスを新しいSpriteクラスで作成する
   * @param CELL_SIZE (CELL_SIZE,CELL_SIZE) ぷよの幅,高さ
   * @param sprite.image puyoの画像を指定
   * @param sprite.x puyoのx座標
   * @param sprite.y puyoのy座標
   * @param sprite.scaleX puyoの幅　の倍率
   * @param sprite.scaleY puyoの高さの倍率
   * @param sprite.frame puyo画像フレームを指定
   * @param isAnimete bool型
  */
  constructor(game) {
    this.sprite = new Sprite(CELL_SIZE, CELL_SIZE);
    this.sprite.image = game.assets["images/resize/puyopuyo2_64.png"];
    this.sprite.x = 100;
    this.sprite.y = 100;
    this.sprite.frame = 0;
    this.isAnimate = false;
  }

  //行・列インデックスの設定
  setPosition(row, col) {
    let xyPos = GameContext.currnt().map.getXY(row, col);
    this.sprite.x = xyPos.x;
    this.sprite.y = xyPos.y;
    //this.sprite.scaleX;//spriteの幅　に倍率を掛ける
    //this.sprite.scaleY;//spriteの高さに倍率を掛ける
    //var xyPos.x = map.x;
    //var xyPos.y = map.y;
    console.clear();
    console.log('GameContext.current().map=',GameContext.currnt().map);
    console.log('test');
    console.log('xyPos.x = ' + xyPos.x,'xyPos.y = ' + xyPos.y);
    
  }

  //アニメーションしながら[ぷよ]を移動する
  moveWithAnimate(row, col, frameCount) {
    if (frameCount > 1) {
      this.isAnimate = true;
    }

    let xyPos = GameContext.currnt().map.getXY(row, col);
    this.sprite.tl
      .moveTo(xyPos.x, xyPos.y, frameCount)
      .then(() => {
        this.isAnimate = false;
      });
  }

  //ランダムな色のぷよを作成する
  static randamCreate(game) {
    var puyo = new Puyo(game);
    var random = Math.floor( Math.random() * 5 ) + 0;
    puyo.sprite.frame = random;
    return puyo;
  }
}

