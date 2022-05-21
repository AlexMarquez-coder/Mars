$(window).on("scroll", function () {
    $(".section-container").css("bottom", $(window).scrollTop() * -1);
  });

  var c = document.getElementById("body");
    var ctx = c.getContext("2d");
    ctx.translate(50, 50); // move to (50, 50)
    ctx.moveTo(0,0);
    ctx.lineTo(200,100);
    ctx.stroke();