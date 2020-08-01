//enchant.js(index.htmlで先に読み込んでいるライブラリからenchant()関数を呼び出して使う定型文）
enchant();                                                  
/**
 * gameLoad
 * @param {*} width 幅
 * @param {*} height 高さ
 * @param fps frame per second を24に設定。秒間24フレーム動く
 */
window.onload = function() {
   game = new Core(window.innerWidth, window.innerHeight);                         
   game.fps = 24;                                  
   game.onload = function() {

/**
 * @instance Button
 * @text Buttonを追加
 * @param x 
 */  
    var A_button = new Button("A","A_button");
        A_button.x = 60;
        A_button.y = 200;
        A_button.width = 40;
        A_button.height = 40;
        /*
        button.addEventListener("touchstart", function(){
          alert("ボタンが押された");
        });
        */
       var B_button = new Button("B","B_button");
       B_button.x = 120;
       B_button.y = 240;
       B_button.width = 40;
       B_button.height = 40;
       /*
       button.addEventListener("touchstart", function(){
         alert("ボタンが押された");
       });
       */
      var X_button = new Button("X","X_button");
      X_button.x = 180;
      X_button.y = 200;
      X_button.width = 40;
      X_button.height = 40;
      /*
      button.addEventListener("touchstart", function(){
        alert("ボタンが押された");
      });
      */
     var Y_button = new Button("Y","Y_button");
          Y_button.x = 120;
          Y_button.y = 160;
          Y_button.width = 40;
          Y_button.height = 40;
     /*
     button.addEventListener("touchstart", function(){
       alert("ボタンが押された");
     });
     */
    game.rootScene.addChild(A_button);
    game.rootScene.addChild(B_button);
    game.rootScene.addChild(X_button);
    game.rootScene.addChild(Y_button);
      }
    game.start();
};