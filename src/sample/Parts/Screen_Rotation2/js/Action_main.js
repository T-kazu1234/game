document.addEventListener("DOMContentLoaded", function() {
    updateOrientation();
   });
   
   window.addEventListener('orientationchange', updateOrientation, false);
   
   function updateOrientation() {
    let disp = "";
   
    switch(window.orientation) {
     case 0:
      disp += "縦向き";
      break;
   
     case -90:
      disp += "横向き：右回転";
      break;
   
     case 90:
      disp += "横向き：左回転";
      break;
   
     case 180:
      disp += "縦向き：上下逆向きに回転";
      break;
   
    }
    document.getElementById('output').innerHTML =  disp + '(テスト）';
   }