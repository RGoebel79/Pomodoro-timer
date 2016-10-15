$(".document").ready(function() {
  $(".b2").hide();
  $(".b1").hide();
  
  var butt = 0;
  var inc = 25;
  var pinc = 5;
  var minute = 2;
  var seconds;
  var pseconds;
  var min;
  var sec;
  var var1;
  var b = true;
  var high;
  $(".timer").text(inc + ":00");

  $(".incre").text(inc + ":00");
  $(".increment").click(function() {
    inc++;
    $(".incre").text(inc + ":00");
    $(".timer").text(inc + ":00");
    if (inc >= 0) {
      document.getElementById("decrement").disabled = false;
    }
  });
  $(".decrement").click(function() {
    if (inc > 1) {
    inc--;
    $(".incre").text(inc + ":00");
    $(".timer").text(inc + ":00");
    
    }
  });
  $(".pincre").text(pinc + ":00");
  $(".pincrement").click(function() {
    pinc += 1;
    $(".pincre").text(pinc + ":00");
   
  });
  $(".pdecrement").click(function() {
    if (pinc > 1) {
    pinc -= 1;
    $(".pincre").text(pinc + ":00");
    
      //document.getElementById("pdecrement").disabled = true;
    }
  });

  $(".start").click(function() {
    butt++;
    //clearInterval(var1);
    clearInterval(var1);
    var1 = setInterval(timers, 1000);
    //seconds = 0;
    seconds = inc * 60;
    pseconds = pinc * 60;
    var vis = $(".b1");
    var isVis = vis.is(":visible");
    if (butt === 1) {
      $(".b2").show();
    }
    b = true;
    
    if (isVis === false) {
      
      $(".b1").toggle();
      $(".b2").toggle();
    }              
  });
  $(".stop").click(function() {
    clearInterval(var1);
    $(".b1").toggle();
    $(".b2").toggle();
  });
  $(".resume").click(function() {
    var1 = setInterval(timers, 1000);
    $(".b1").toggle();
    $(".b2").toggle();
  });

  function timers() {

    seconds--;
    min = Math.floor((seconds / 60) % 60);
    sec = ("0" + Math.floor(seconds % 60)).slice(-2);
    $(".timer").text(min + ":" + sec);
    if (b == true) {
      $(".fill").css("background-color", "#99CC00")
      high = (((inc * 60) - seconds) * 100) / (inc * 60);
      //$(".fill").css("height", high+"%");
      $(".fill").animate({
        height: high + "%"
      });
    } else if (b == false) {
      $(".fill").css("background-color", "#FF4444")
      high = (((pinc * 60) - seconds) * 100) / (pinc * 60);
      $(".fill").animate({
        height: high + "%"
      });
    }
    if (seconds == 0 && b == true) {
      seconds = pseconds;
      b = false;
      $(".status").text("Break");
    } else if (seconds == 0 && b == false) {
      seconds = inc * 60;
      b = true;
      $(".status").text("Session");
    }
  }

});
