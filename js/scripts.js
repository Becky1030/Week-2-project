$(document).ready(function () {
  // day & night switch
  $(".switch").on("click", function () {
    $(".toggle-btn").toggleClass("active");
    $("body").toggleClass("dark");
  });

  // image slider
  $(".next").on("click", function () {
    var currentImg = $(".active");
    var nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      nextImg.addClass("active").css("z-index", 10);
    }
  });

  $(".prev").on("click", function () {
    var currentImg = $(".active");
    var prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass("active").css("z-index", -10);
      prevImg.addClass("active").css("z-index", 10);
    }
  });
});
