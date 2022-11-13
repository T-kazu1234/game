// Generated by CoffeeScript 1.6.2
(function() {
  enchant();

  window.onload = function() {
    var SPEED_INIT, SPEED_MAX, game;

    SPEED_INIT = 2;
    SPEED_MAX = 5;
    game = new Game(240, 320);
    game.fps = 24;
    game.preload(["images/pad.png", "images/ball.png", "images/block.png", "sound/se1.mp3", "sound/se2.mp3"]);
    game.rootScene.backgroundColor = "blue";
    game.onload = function() {
      var ball, blocks, mySounds, pad, resetBlocks, score, scoreLabel, _ref, _ref1, _ref2, _ref3;

      score = 0;
      mySounds = [game.assets["sound/se1.mp3"], game.assets["sound/se2.mp3"]];
      scoreLabel = new Label("SCORE : " + score);
      scoreLabel.font = "16px Tahoma";
      scoreLabel.color = "white";
      _ref = [10, 5], scoreLabel.x = _ref[0], scoreLabel.y = _ref[1];
      game.rootScene.addChild(scoreLabel);
      ball = new Sprite(16, 16);
      ball.image = game.assets["images/ball.png"];
      _ref1 = [0, 130], ball.x = _ref1[0], ball.y = _ref1[1];
      _ref2 = [1.5, 2.5], ball.dx = _ref2[0], ball.dy = _ref2[1];
      ball.speed = SPEED_INIT;
      game.rootScene.addChild(ball);
      pad = new Sprite(32, 16);
      pad.image = game.assets["images/pad.png"];
      _ref3 = [game.width / 2, game.height - 40], pad.x = _ref3[0], pad.y = _ref3[1];
      game.rootScene.addChild(pad);
      blocks = [];
      resetBlocks = function() {
        var blk, x, y, _i, _j, _ref4;

        blocks = [];
        for (y = _i = 0; _i < 5; y = ++_i) {
          for (x = _j = 0; _j < 7; x = ++_j) {
            blk = new Sprite(24, 12);
            blk.image = game.assets["images/block.png"];
            blk.frame = 0;
            _ref4 = [x * 32 + 12, y * 18 + 30], blk.x = _ref4[0], blk.y = _ref4[1];
            game.rootScene.addChild(blk);
            blocks.push(blk);
          }
        }
        return null;
      };
      game.rootScene.addEventListener(Event.ENTER_FRAME, function() {
        var hitCheck_block_ball, hitCheck_paddle_ball, moveBall, movePaddle;

        moveBall = function() {
          ball.x = ball.x + ball.dx * ball.speed;
          ball.y = ball.y + ball.dy * ball.speed;
          if ((ball.x < 0) || (ball.x > (game.width - ball.width))) {
            ball.dx = -ball.dx;
          }
          if (ball.y < 0) {
            ball.dy = -ball.dy;
          }
          if (ball.y > game.height) {
            game.stop();
            return alert("スコアは " + score + " 点でした");
          }
        };
        movePaddle = function() {
          var n;

          n = game.input.analogX / 4;
          if (game.input.left) {
            n = -6;
          }
          if (game.input.right) {
            n = 6;
          }
          if (isNaN(n)) {
            n = 0;
          }
          pad.x = pad.x + n;
          if (pad.x < 0) {
            pad.x = 0;
          }
          if (pad.x > (game.width - pad.width)) {
            return pad.x = game.width - pad.width;
          }
        };
        hitCheck_paddle_ball = function() {
          if (pad.intersect(ball)) {
            ball.dy = -ball.dy;
            ball.y = pad.y - ball.height - 1;
            score += 10;
            ball.speed = ball.speed + 0.025;
            if (ball.speed > SPEED_MAX) {
              ball.speed = SPEED_MAX;
            }
            return mySounds[1].play();
          }
        };
        hitCheck_block_ball = function() {
          var blk, idx, _i, _len;

          for (idx = _i = 0, _len = blocks.length; _i < _len; idx = ++_i) {
            blk = blocks[idx];
            if (ball.intersect(blk)) {
              ball.dy = -ball.dy;
              blk.parentNode.removeChild(blk);
              blocks.splice(idx, 1);
              score += 5;
              mySounds[0].play();
              break;
            }
          }
          if (blocks.length < 1) {
            return resetBlocks();
          }
        };
        moveBall();
        movePaddle();
        hitCheck_paddle_ball();
        hitCheck_block_ball();
        return scoreLabel.text = "SCORE : " + score;
      });
      resetBlocks();
      return window.addEventListener("deviceorientation", (function(evt) {
        return game.input.analogX = evt.gamma;
      }), false);
    };
    return game.start();
  };

}).call(this);
