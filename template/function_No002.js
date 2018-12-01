enchant();
 
 var SOUND_FILE_PATH = "http://enchantjs.com/assets/sounds/se1.wav";
 
 window.onload = function() {
     var game = new Game();
     game.preload(SOUND_FILE_PATH);
     game.onload = function() {
 	var scene = game.rootScene;
 	scene.backgroundColor = "black";
 	
 	// エンティティを生成, シーンに追加
 	var entity = new Entity();	// 生成
 	entity.width = 50;		// 幅を設定
 	entity.height= 50;		// 高さを設定
 	entity.moveTo(160-25, 160-25);	// 中央に移動
 	entity.backgroundColor = "red";	// 背景色を設定
 	scene.addChild(entity);		// シーンに追加
 	
 	// タッチ開始時に呼ばれる関数を登録
 	entity.addEventListener("touchstart", function() {
 	    var se = game.assets[SOUND_FILE_PATH].clone();
 	    se.play();
 	});
     };
     
     game.start();
 };
