/**
 * enchant.js(index.htmlで先に読み込んでいるライブラリからenchant()関数を呼び出して使う定型文）
 */
enchant();
//関数 gameLoad(幅,高さ)
function gameLoad(width,height){   
    //game = new コア(幅,高さ);                   
    game = new Core(width, height);
    /**
     * label
     * moveTo(20,20) ラベルの位置を20,20へと移動する
     * on.enterframe　おまじない？ドットインストールのラベルにて解説。
     */     	
    //ラベルを生成
	var label1 = new Label();	                                                
        label1.moveTo(20, 20);                                                       
        label1.on('enterframe',function()
            {                                           
                label1.text = "window.innerWidth:" + (window.innerWidth);
            });
    var label2 = new Label();	                                                
        label2.moveTo(20, 40);                                                       
        label2.on('enterframe',function(){                                           
            label2.text = "window.innerHeight:" + (window.innerHeight);          
            });

// ルートシーンに追加　→　このActionMain.js内ではcore.rootSceneではなく、game.rootSceneなので、継承している他の箇所（上記game.frame)なども全てcore　→　gameに書換えたら動いた。            
    game.rootScene.addChild(label1);		                                        
    game.rootScene.addChild(label2);		                                        
    game.rootScene.backgroundColor = 'rgb(182, 255, 255)';
    game.start();
};
