    var music = new Audio();
    function init() {
            music.preload = "auto";
            music.src = "SoundEffect/powerup02.mp3";
            music.load();
        
            music.addEventListener("ended", function () 
                {
                    music.currentTime = 0;
                    music.play();
                }, false);
    }   
  
    function play() {
      music.loop = true;
      music.play();
    }
  
    function stop() {
      music.pause();
      music.currentTime = 0;
    }
  
init();