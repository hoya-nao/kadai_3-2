var a = 0;
var tm1 = null;

$(function() {
     // スタートボタン
     $(".buttonA").click(function() {
          if(tm1 == null) { tm1 = setInterval("timer()",100); }
     });
     // ストップボタン
     $(".buttonB").click(function() {
          clearInterval(tm1); tm1 = null;
     });
     // リセットボタン
     $(".buttonC").click(function() {
          $("#youso1").text("0:0:0:0");
          a = 0;
     });
});

function timer() {
     a += 1;
     var sec = a % 10;
     var byo = Math.floor(a / 10) % 10;
     var fun = Math.floor(a / 100) % 10;
     var ji = Math.floor(a / 1000) % 10;

     // 時間の表示を更新している部分
   $("#youso1").text(('0' + ji).slice(-1) + ":" + ('0' + fun).slice(-1) + ":" + ('0' + byo).slice(-1) + ":" + sec);
}

