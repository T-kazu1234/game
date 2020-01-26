
    
    YOUTUBE_ID = '3uRdxB6GdCc';
    
// 2.このコードはIFrame Player APIコードを非同期的にロードします。
      
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3.この関数は<iframe>（およびYouTubeプレーヤー）を作成します
// APIコードのダウンロード後
      
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: YOUTUBE_ID,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

// 4.ビデオプレーヤーの準備ができたらAPIがこの関数を呼び出します
      
      
      function onPlayerReady(event) {
        event.target.playVideo();
      }

// 5.プレーヤーの状態が変わると、APIはこの関数を呼び出します。
//この関数は、ビデオを再生するとき（状態= 1）、
//プレーヤーは6秒間プレーしてから停止します。
      
      
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }