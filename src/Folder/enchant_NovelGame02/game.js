enchant();// ライブラリの初期化


/*
    About Config

    背景画像のサイズについて
    320 * 180 で指定すること

    キャラクター画像について
    150,165で指定すること

*/


//プレイヤークラスと画像を分離させる必要がある
//というかプレイヤーは画像が必要ない・・・？

//このクラスは全てのシーンを表しますのでご注意ください
//おそらくこのファイルから操作すれば
//あらゆるenchantの関数が応用可能であるはず


class CurrentScene{

  //コンストラクタ
  constructor(){
    //特に処理なしにしています
  }



    //onpreload版PlayBGM(args)
    /*
     PlayBGM(args) {
               game.bgm.stop();
               game.bgm = Sound.load(args);
               game.bgm.volume = 0.3;
               game.bgm.play();
               game.bgm.loop = true;
               }
    */


    //////////////////////////////////////////////////////////////////////////
    //  youtube再生
    //////////////////////////////////////////////////////////////////////////
    PlayBGM(args) {
        let YOUTUBE_ID = [args];
            console.log("YOUTUBE_ID = " + YOUTUBE_ID);

        //console.log(i);
            //if (YOUTUBE_ID == "XLL68BLBLZk") {

        let video = new Entity()
            video.visible = true;
            video.opacity = 0.5;
            video.x = 10 //width  //動画設X置座標
            video.y = 10 //height //動画設置Y座標
            video._element = document.createElement('div')
            video._element.innerHTML = '<iframe src="https://www.youtube.com/embed/' + YOUTUBE_ID + '?enablejsapi=1&controls=0&showinfo=0&autoplay=0&rel=0&vq=small"  width="180" height="180" frameborder="0" id="player"></iframe>'
        game.rootScene.addChild(video);
        //videoLayer.addChild(video); // # 動画をシーンに追加
        //};
   //////////////////////////////////////////////////////////////////////////


}

  //背景画像をシーンに設定する
  SetBackGroundImage(args){
      let backImage = new Sprite(320,180);
      backImage.image = game.assets[args];
      backImage.x = 0;
      backImage.y = 0;
      //console.log('game.assets[args] = ' + game.assets[args])
      bgLayer.addChild(backImage);
  }
  
  //背景画像をシーンに設定する(フェードインver)
  SetBackGroundImage_fadeIN(args){
      let backImage  = new Sprite(320,180);
      backImage.image = game.assets[args];
      backImage.x = 0;
      backImage.y = 0;
      backImage.opacity = 0;
      backImage.tl.fadeIn(10);
      bgLayer.addChild(backImage);
  }

  //左側のキャラクターをシーンに設定する
  SetCharactorLeft(args){

      let charaImage = new Sprite(150,165);
      charaImage.image = game.assets[args];
      charaImage.x = 10;
      charaImage.y = 15;
      charaImage.opacity = 0;
      charaImage.tl.fadeIn(10);
      imageLayer.addChild(charaImage);


  }

  //右側のキャラクターをシーンに設定する
  SetCharactorRight(args){
    let charaImage = new Sprite(150,165);
    charaImage.image = game.assets[args];
    charaImage.x = 160;
    charaImage.y = 15;
    charaImage.opacity = 0;
    charaImage.tl.fadeIn(10);
    //charaImage.tl.moveTo(10, 15, 100);

    // ジグザグに移動するアニメーションを登録する
    /*
    charaImage.tl.moveTo(174, 30, 10, enchant.Easing.QUAD_EASEINOUT);     // x=174, y=30の地点?まで10フレームかけて移動させる
    charaImage.tl.moveTo(114, 90, 20, enchant.Easing.QUAD_EASEINOUT);     // x=114, y=90の地点?まで20フレームかけて移動させる
    charaImage.tl.moveTo(174, 150, 20, enchant.Easing.QUAD_EASEINOUT);     // x=174, y=150の地点?まで20フレームかけて移動させる
    charaImage.tl.moveTo(114, 210, 20, enchant.Easing.QUAD_EASEINOUT);     // x=114, y=210の地点?まで20フレームかけて移動させる
    charaImage.tl.moveTo(144, 240, 10, enchant.Easing.QUAD_EASEINOUT);     // x=144, y=240の地点?まで10フレームかけて移動させる
    charaImage.tl.moveTo(144, 0, 10, enchant.Easing.QUAD_EASEINOUT);      // x=144, y=0の地点?まで10フレームかけて移動させる
    charaImage.tl.loop();                 // 全て終わったら初めから繰り返す
    */
    imageLayer.addChild(charaImage);
  }


  //テキストをシーンに設定する
  SetText(args){
    //フラグ用使いまわします。
      let i = 1;
    　  //引数例　["ねね","あっ！進！","おはよう","今日は転校生が来るんだよね！","噂だと女の子なんだって！"],
    　  //iは初期値1なのは、発言者だからです。
        //発言者がいない場合は無視する
        if(args[0] != ""){
        let whosay = new Label("「" + args[0] + "」");
        whosay.font  = "16px monospace";
        whosay.color = "rgb(0, 0, 0)";
        whosay.y     = 180;
        whosay.x = 10;
        whosay.width = 300;
        whosay.height = 120;
        whosay.opacity = 0;
        whosay.tl.fadeIn(0);

        textLayer.addChild(whosay);

      }

        //発言内容を表示する
        let text = new Label( args[i] );
        text.font  = "16px monospace";
        text.color = "rgb(0, 0, 0)";
        text.y     = 200;
        text.x = 10;
        text.width = 300;
        text.height = 120;

        text.opacity = 0;
        text.tl.fadeIn(0);

        textLayer.addChild(text);

        //次へボタン
        let nextlabel = new Label("< 次 >");
        nextlabel.font  = "16px monospace";
        nextlabel.color = "rgb(0, 0, 0)";
        nextlabel.y     = 280;
        nextlabel.x = 270;
        nextlabel.opacity = 0;
        nextlabel.tl.fadeIn(0);
        textLayer.addChild(nextlabel);

        //戻るボタン
        let backLabel = new Label("< 前 >");
        backLabel.font  = "16px monospace";
        backLabel.color = "rgb(0, 0, 0)";
        backLabel.y     = 280;
        backLabel.x = 0;
        backLabel.opacity = 0;
        backLabel.tl.fadeIn(0);
        textLayer.addChild(backLabel);



        //次へボタン
        //配列に要素があればラベルを書き換える
        nextlabel.addEventListener('touchstart',function(e){
            if(i != args.length -1){
                i++;
                text.text = args[i];
              }else{
                //セリフの配列が空になった時に次のシーンへ飛ばす
                executeNext(eval(getNextSceneName()));
              }
        });

        //戻るボタン
        backLabel.addEventListener('touchstart',function(e){
          if(i != 1){
              i--;
              text.text = args[i];
          }else{
            //処理なし
          }
        });


    }//end SetText



  SetNextSceneName(name){
      this.nextSceneName = name;
  }


  //次のシーンへ遷移する
  GoNextScene(args){


    //テキストと次へボタンを削除する
    textLayer.removeChild(textLayer.firstChild);
    textLayer.removeChild(textLayer.firstChild);
    textLayer.removeChild(textLayer.lastChild);
    textLayer.removeChild(textLayer.lastChild);
    textLayer.removeChild(textLayer.firstChild);


    //ここで関数名と引数のセットを持ってきています
      for(let val in args){
          _currentScene[val](args[val]);
      }

  }






/*       選択肢のある画面です             */

SetChoiceScene(args){
  //選択肢１
  let text = new Label(args[0]);
  text.font  = "16px monospace";
  text.color = "rgb(0, 0, 0)";
  text.y     = 200;
  text.x = 10;
  text.width = 300;
  text.height = 120;

  textLayer.addChild(text);

  //シーン名が渡されます
  text.addEventListener('touchstart',function(e){
        executeNext(eval(args[1]));
  });

  //選択肢２
  let text2 = new Label(args[2]);
  text2.font  = "16px monospace";
  text2.color = "rgb(0, 0, 0)";
  text2.y     = 220;
  text2.x = 10;
  text2.width = 300;
  text2.height = 120;

  textLayer.addChild(text2);

  //シーン名が渡されます
  text2.addEventListener('touchstart',function(e){
      executeNext(eval(args[3]));
  });

  //選択肢3
  let text3 = new Label(args[4]);
  text3.font  = "16px monospace";
  text3.color = "rgb(0, 0, 0)";
  text3.y     = 240;
  text3.x = 10;
  text3.width = 300;
  text3.height = 120;

  textLayer.addChild(text3);

  //シーン名が渡されます
  text3.addEventListener('touchstart',function(e){
      executeNext(eval(args[5]));
  });//


}


//関数名おかしいですが・・・
//スコアポイント系に使えます
AddPlayerStatusPlane(args){
    //ただポイントを付与するだけです。
    player.status[args[0]] += args[1];
}

//フラグ系に使います
AddPlayerStatusFlag(args){
    player.status[args[0]] = args[1];
}


DeleteBG(){
  //背景を削除する
  bgLayer.removeChild(bgLayer.firstChild);
}

DeleteCharactor(){
  //キャラクターを削除する
  imageLayer.removeChild(imageLayer.firstChild);
  imageLayer.removeChild(imageLayer.lastChild);
}

DeleteCharactorf(){
  //キャラクターを削除する
  imageLayer.removeChild(imageLayer.firstChild);
}

DeleteCharactorl(){
  //キャラクターを削除する
imageLayer.removeChild(imageLayer.lastChild);
}


//条件(int)によって処理を変えるメソッド
//主にプレイヤーのポイントによって処理を変えるメソッドをここに追加します
//引数例　 ['miyapoint >=7','kokihinto3','scene74a']
SelectMethod(args){

      var prop = args[0].split(' ');
      var siki = player.status[prop[0]] + prop[1];

    if(eval(siki)){
      this.GoNextScene(eval(args[1]));
    }else{
      this.GoNextScene(eval(args[2]));
    }
}


//条件式(bool)によって遷移先のシーンを変えることができます
//引数例　['みやがスパイの話を聞いた ==true','scene38A','scene38B']
SelectMethodHasTrue(args){

      var prop = args[0].split(' ');
      var siki = player.status[prop[0]] + prop[1];

      if(eval(siki)){
        this.GoNextScene(eval(args[1]));
      }else{
        this.GoNextScene(eval(args[2]));
    }

}



} //End Class






// シナリオを実行する関数
//あくまでも、インスタンス化された後ならば
//ここでこの変数名を使用することができる
//じゃあなんでコールバックで使えねんだ？^^;
function executeNext(args) {
  _currentScene.GoNextScene(args);
}

function getNextSceneName(){
  return _currentScene.nextSceneName;
}










//////////////////////////////////////
// 各種設定等
//////////////////////////////////////
/*
imglist = [
"./image/Character/mio1.png",
"./image/BackGround/title.png",
]
*/

imglist = [
"Charactor01_01.png",
"Charactor02_01.jpg",
"think_item_00.png",
"mio1.png",
"mio2.png",
"mio3.png",
"aine1.png",
"aine2.png",
"koko0.png",
"koko1.png",
"koko2.png",
"koko3.png",
"koko4.png",
"koko5.png",
"koko6.png",
"koko7.png",
"koko8.png",
"koko9.png",
"koko10.png",
"koko11.png",
"koko12.png",
"koko13.png",
"koko14.png",
"koko15.png",
"koko16.png",
"mirai.png",
"karen.png",
"ema.png",
"maika.png",
"BackGround_00_00.jpg",
"BackGround_01_00.png",
"BackGround_01_01.jpg",
"BackGround_02_00.jpg",
"BackGround_03_00.jpg",
"BackGround_04_00.png",
"BackGround_05_00.png",
"BackGround_06_00.png"
]

//
bgmlist = [
"QqYsu2SshyQ",
"-tKVN2mAKRI",
"XLL68BLBLZk",
]
//

//
//bgmlist = ["book_sound.mp3"]


// シーンを生成する
let _currentScene = new CurrentScene();
//プレイヤーを作成する
var player = new MainPlayer();



//////////////////////////////////////
// 初期化処理
//////////////////////////////////////
window.onload = function() {


  game = new Core(330, 320);
  game.fps = 16;
  //使用する画像をプリロードする(配列を渡せばOK)
  game.preload(imglist);
//game.preload(bgmlist);

//game.bgm = Sound.load('book_sound.mp3');

  //ここで初期化処理が始まる
  game.onload = function() {


 //   game.bgm.volume = 0.3;
 //   game.bgm.play();
 //   game.bgm.loop = true;


      //レイヤーで管理する



      bgLayer = new Group();
      game.rootScene.addChild(bgLayer);

      imageLayer = new Group();
      game.rootScene.addChild(imageLayer);

      textLayer = new Group();
      game.rootScene.addChild(textLayer);




      /*これが最初のシーンです */
      _currentScene.SetBackGroundImage("BackGround_00_00.jpg");
      //引数リスト
      //選択肢１　遷移先１　選択肢２　遷移先２
      //最初は選択肢のあるシーンを作成しています。
      _currentScene.SetChoiceScene(["▶︎ ゲームスタート",scene1,"▶︎ 説明",aboutscene,"▶︎ デバック用",dbscene]);


  }

  game.start();

}
