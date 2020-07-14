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

//ラベルを生成
  let label = [];
      label[1] = new Label();
      label[1].moveTo(20, 20);
      label[1].on('enterframe',function()
        {
          label[1].text = (game.input.up) + " : pad.game.input.up";
        });
      label[2] = new Label();	           
      label[2].moveTo(20, label[1].y + 20);                                                       
      label[2].on('enterframe',function()                                                                                 
        {
          label[2].text = (game.input.down) + " : pad.game.input.down";
        });
      label[3] = new Label();
      label[3].moveTo(20, label[2].y + 20);                                                       
      label[3].on('enterframe',function()                                                                                 
        {
          label[3].text = (game.input.left) + " : pad.game.input.left";
        });      	                                                                                            
      label[4] = new Label();	                                                                                            
      label[4].moveTo(20, label[3].y + 20);                                                       
      label[4].on('enterframe',function()                                                                                 
        {
          label[4].text = (game.input.right) + " : pad.game.input.right";
        });    	
      game.rootScene.addChild(label[1]);
      game.rootScene.addChild(label[2]);
      game.rootScene.addChild(label[3]);
      game.rootScene.addChild(label[4]);


console.log('wigth  = ' + game.width);
console.log('height = ' + game.height);    
/**
 * @instance pad
 * @text パッドを追加        
 * @param x 
 */  
        var pad = new Pad();
            pad.x = game.width  / 20;
            pad.y = game.height / 10;
            pad.addEventListener('enterframe', function(e) 
            {
              if(!game.input.up&&!game.input.down&&!game.input.left&&!game.input.right)
                  pad.frame = 0;
              if (game.input.up)   
                  pad.frame = 5 , 
                  pad.rotation = 0;
              //下
              if (game.input.down) 
                  pad.frame = 5 , 
                  pad.rotation = 180,
                  console.log('pad.rotation = ' + pad.rotation);
              //左
              if (game.input.left) 
                  pad.frame = 5 , 
                  pad.rotation = 270;
              //右
              if (game.input.right)
                  pad.frame = 5 , 
                  pad.rotation = 90;
            });
        game.rootScene.addChild(pad);
        game.rootScene.backgroundColor = 'rgb(182, 255, 255)';
    };

    


    game.start();
};