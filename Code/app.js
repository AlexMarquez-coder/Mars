$(window).on("scroll", function () {
    $(".section-container").css("bottom", $(window).scrollTop() * -1);
  });
