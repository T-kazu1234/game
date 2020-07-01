enchant();



    var ASSETS = {
        /*使用する画像やサウンドなど。*/
        'barImage':'asset/image/bar.png'
        ,'iconImage':'asset/image/icon0.png'
      };    

//var ASSETS = [
    /*使用する画像やサウンドなど。*/
    
//];

/*
   //ImagesKey-Path
   var resources = {
    'barImage':'asset/image/bar.png'
    ,'iconImage':'asset/image/icon0.png'
  };
*/
/*
window.onload = function() {
	game = new Core(320,320);
 
	var loadScene = new Scene();	
	game.loadingScene = loadScene;
 
	game.preload('barImage');
	loadScene.addEventListener('progress', function(e) {
		var progress = e.loaded / e.total;
		progress *= 100;
		progress = Math.round(progress);
 
		var loadImg = new Sprite(320,320);
		loadImg.image = game.assets['barImage'];
		loadScene.addChild(loadImg);
 
		var label = new Label();
		label.moveTo(200,290);
		label.text = "LOADING..." + progress;
		label.color = 'white';
		loadScene.addChild(label);
	});
	loadScene.addEventListener('load', function(e) {
		var core = enchant.Core.instance;
		core.removeScene(core.loadingScene);
		core.dispatchEvent(e);
	});
 
	game.preload(ASSETS);
	game.fps = 23;
 
	game.onload = function() {
		/*ゲームの内容*/
//	};
//	game.start();
//};


window.onload = function(){
    game = new Core(320, 320);
    //game = new Core(width, height);

    //ロードSceneを設定
    var loadScene = new Scene();	
	game.loadingScene = loadScene;

	game.preload('画像ファイル');
	loadScene.addEventListener('progress', function(e) {
		var progress = e.loaded / e.total;
		progress *= 100;
		progress = Math.round(progress);
 
		var loadImg = new Sprite(320,320);
		loadImg.image = game.assets['画像ファイル'];
		loadScene.addChild(loadImg);
 
		var label = new Label();
		label.moveTo(200,290);
		label.text = "LOADING..." + progress;
		label.color = 'white';
		loadScene.addChild(label);
	});
	loadScene.addEventListener('load', function(e) {
		var core = enchant.Core.instance;
		core.removeScene(core.loadingScene);
		core.dispatchEvent(e);
	});
 
	game.preload(ASSETS);
	game.fps = 23;


    //ImagesKey-Path
    var resources = {
      'barImage':'asset/image/bar.png'
      ,'iconImage':'asset/image/icon0.png'
    };
    //SettingPreload
    var resourcesList = new Array();
    for(var resourceKey in resources){
      resourcesList.push(resources[resourceKey]);
    }
    game.preload(resourcesList);

    game.fps = 30;
    game.onload = function(){
        game.rootScene.backgroundColor = "#ccccff";
      
      
        // MutableText
        var mutableText = new MutableText(20, 20, 300);
        mutableText.text= "Hello util 0";
        mutableText.on("enterframe", function() {
            if (this.age % 30 == 0) {
                this.text = "Hello util " + ~~(this.age/30);
            }
        });
        game.rootScene.addChild(mutableText);

        //説明文
        var label = new Label();
        label.x = 0;
        label.y = 0;
        label.text = "ブドウをタップするとボタンの文字が変わります";
        game.rootScene.addChild(label);
      
        //テストボタン
        var button = new Button("終了","light",30,100);
        button.on("touchstart",function(){
          location.href="../../other_index.html";
        });
        button.x = 100;
        button.y = 250;
        game.rootScene.addChild(button);
      
        // ScoreLabel
        var scoreLabel = new ScoreLabel(20, 40);
        scoreLabel.on("enterframe", function() {
            if (this.age % 30 == 0) {
                this.score += ~~(Math.random() * 1000);
            }
        });
        game.rootScene.addChild(scoreLabel);

        // TimeLabel
        var timeLabel = new TimeLabel(20, 60, 2);
        timeLabel.time = 0;
        game.rootScene.addChild(timeLabel);

        // LifeLabel
        var lifeLabel = new LifeLabel(20, 80, 10);
        lifeLabel.life = 10;
        lifeLabel.on("enterframe", function() {
            if (this.age % 30 == 0) {
                this.life = Math.random() * 10;
            }
        });
        game.rootScene.addChild(lifeLabel);

        // Bar
        var bar = new Bar(20, 100);
        bar.image = game.assets[resources['barImage']];
        bar.maxvalue = 200;
        bar.value = 0;
        bar.on("enterframe", function() {
            if (this.age % 60 == 0) {
                this.value = Math.random() * 200;
            }
        });
        game.rootScene.addChild(bar);

        // VirtualMap
        var virtualMap = new VirtualMap(16, 16);
        virtualMap.x = 20;
        virtualMap.y = 0;
        virtualMap.width = 280;
        virtualMap.height = 180;
        {
            var banana = new Sprite(16, 16);
            banana.image = game.assets[resources['iconImage']];
            banana.frame = 16;
            virtualMap.addChild(banana);
            banana.mx = 0;
            banana.my = 0;
        }
        {
            var apple = new Sprite(16, 16);
            apple.image = game.assets[resources['iconImage']];
            apple.frame = 15;
            virtualMap.addChild(apple);
            apple.scale(2,2);
            apple.mx = 10;
            apple.my = 1;
        }
        {
            var grape = new Sprite(16, 16);
            grape.image = game.assets[resources['iconImage']];
            grape.compositeOperation = "lighter";
            grape.frame = 17;
            virtualMap.addChild(grape);
            grape.scale(4,4);
            grape.mx = 10;
            grape.my = 10;
            grape.on("touchstart",function(){
              button.text = "ブドウが押されたよ！！";
            });
            grape.on("touchend",function(){
              button.text = "終了";
            });
        }
        virtualMap.on("enterframe", function() {
            if (this.age % 30 === 0) {
                banana.mx += 1;
            }
            if (this.age % 30 === 10) {
                apple.mx += 1;
            }
            if (this.age % 30 === 20) {
                //grape.mx -= 1;
            }
        });
        game.rootScene.addChild(virtualMap);
    }
    game.start();
}

