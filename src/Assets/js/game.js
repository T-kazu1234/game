
/**
 * phi
 */
 
// --------------------------------
// 定数
// --------------------------------
var SCREEN_SIZE = 320;
var PLAYER_SIZE = 20;
var BULLET_SIZE = 5;
var ENEMY_SIZE  = 20;
 
// --------------------------------
// グローバル
// --------------------------------
var game    = null;
var player  = null;
var enemyList = null;
var bulletList= null;
var scoreLabel= null;
 
// --------------------------------
// おまじない
// --------------------------------
enchant();
 
 
// --------------------------------
// util
// --------------------------------
Array.prototype.erase = function(elm)
{
    var index = this.indexOf(elm);
    this.splice(index, 1);
    return this;
};
 
window.onload = function()
{
    game = new Game(SCREEN_SIZE, SCREEN_SIZE);
    game.fps = 30;
    
    game.onload = function() {
        var scene = game.rootScene;
        scene.backgroundColor = "black";
        
        scene.ontouchmove = function(e) {
            player.x = e.x - PLAYER_SIZE/2;
            player.y = e.y - PLAYER_SIZE/2;
        };
        
        // タッチ終了時に弾を飛ばす
        scene.ontouchend = function() {
            var bullet = new Bullet();
            bullet.x = player.x + PLAYER_SIZE/2 - BULLET_SIZE/2;
            bullet.y = player.y - 5;
            bulletList.push(bullet);
            scene.addChild(bullet);
        };
        
        scene.onenter = function() {
            game.frame = 0;
            game.score = 0;
            
            // プレイヤー生成
            player = new Player();
            player.x = SCREEN_SIZE/2 - PLAYER_SIZE/2;
            player.y = SCREEN_SIZE - 40;
            scene.addChild(player);
            
            // エネミーリスト生成
            enemyList = [];
            
            // 弾リスト生成
            bulletList = [];
            
            // スコア
            scoreLabel = new Label();
            scoreLabel.color = "white";
            scoreLabel.text = "";
            scene.addChild(scoreLabel);
        };
        
        scene.onenterframe = function() {
            // 敵生成
            if (game.frame%50 === 0) {
                var enemy = new Enemy();
                enemy.x = Math.random()*(SCREEN_SIZE-ENEMY_SIZE);
                enemy.y = -20;
                enemyList.push(enemy);
                scene.addChild(enemy);
            }
            
            // 衝突判定
            for (var i=0,len=enemyList.length; i<len; ++i) {
                var enemy = enemyList&#91;i&#93;;
                if (player.intersect(enemy) == true) {
                    gameOver("敵にぶつかりました");
                }
            }
            
            // 弾と敵の衝突判定
            for (var i=0,len=enemyList.length; i<len; ++i) {
                var enemy = enemyList&#91;i&#93;;
                for (var j=0,len2=bulletList.length; j<len2; ++j) {
                    var bullet = bulletList&#91;j&#93;;
                    // 敵と弾の衝突判定
                    if (bullet.intersect(enemy) == true) {
                        enemy.destroy = true;
                        bullet.destroy = true;
                        
                        game.score += 100;
                        break;
                    }
                }
            }
            
            // スコア表示更新
            scoreLabel.text = "SCORE : " + game.score;
        };
    };
    game.start();
};
 
 
var gameOver = function(msg)
{
    console.log(game.score, msg);
    game.end(game.score, msg);
};
 
// --------------------------------
// プレイヤークラス
// --------------------------------
var Player = Class.create(Sprite, {
    initialize: function() {
        Sprite.call(this, PLAYER_SIZE, PLAYER_SIZE);
        
        this.className = "player";
    }
});
 
 
 
// --------------------------------
// 敵クラスを作成
// --------------------------------
var Enemy = Class.create(Sprite, {
    initialize: function() {
        Sprite.call(this, ENEMY_SIZE, ENEMY_SIZE);
        
        this.className = "enemy";
        this.timer = Math.random()*360;
    },
    
    onenterframe: function() {
        this.x += Math.cos(this.timer*2 * Math.PI/180)*2;
        this.y += 1;
        
        if (this.x < 0) this.x = 0;
        if (this.x > SCREEN_SIZE-ENEMY_SIZE) this.x = SCREEN_SIZE-ENEMY_SIZE;
        
        if (this.destroy == true) {
            this.parentNode.removeChild(this);
            enemyList.erase(this);
        }
        
        if (this.y >= SCREEN_SIZE + 20) {
            gameOver("敵を見逃しました.");
        }
        
        ++this.timer;
    }
});
 
 
// --------------------------------
// 弾クラスを作成
// --------------------------------
var Bullet = Class.create(Sprite, {
    initialize: function() {
        Sprite.call(this, BULLET_SIZE, BULLET_SIZE);
        
        this.className = "bullet";
    },
    
    onenterframe: function() {
        this.y -= 8;
        
        if (this.destroy == true) {
            this.parentNode.removeChild(this);
            bulletList.erase(this);
        }
        
        if (this.y < -20) {
            gameOver("弾を外しました.");
        }
    }
});
&#91;/code&#93;</pre>
</section>
 
<section>
    <h2>Tips</h2>
    <section>
        <h3>enchant.js の特性を活かし, プログラムとデザインを分離</h3>
        <p>
            今回制作したサンプルでは, プログラムとデザインを分離した作りになっています.
        </p>
        <p>
            ゲーム制作の現場では, プログラム(処理の実装), デザイン(見た目の調整), データ(ゲームバランスの調整)をうまく分離して
            プログラマ, デザイナ, プランナーでそれぞれ効率良く作業分担できるようにするのが基本です.
        </p>
        <p>
            そして, これができるかどうかは根本部分を作るプログラマの重要な役割になります.
            優秀なプログラマほどこの仕組みを作るのが上手だったりします.
        </p>
        <p>
            今回制作したゲームでは script.js のコードがプログラム部, index.html の style タグの中身がデザイン部,
            script.js の一番上の定数の部分がデータ部にあたります.
        </p>
        <p>
            enchant.js の Sprite クラスや Label クラスといった Entity クラスを継承しているクラスは
            内部で DOM Element を抱えているのでプログラムとデザインの分離は簡単に行うことができます.
        </p>
        <p>
            やりかたはこんな感じ.
        </p>
        <h4>プログラム部分</h4>
        <pre class="prettyprint">
var player = new Sprite(10, 10);
player.className = "player";
