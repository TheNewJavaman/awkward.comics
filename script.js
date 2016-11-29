$(document).ready(function() {

  $(".logo, .link1").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  $(".link2, #jumbutton").click(function() {
    $('html, body').animate({
        scrollTop: $(".s1").offset().top
    }, 1000);
  });

  $(".link3").click(function() {
    $('html, body').animate({
        scrollTop: $(".s2").offset().top
    }, 1000);
  });

  $(".link4").click(function() {
    $('html, body').animate({
        scrollTop: $(".s3").offset().top
    }, 1000);
  });

  $("#back").click(function() {
    var $img = $("#comicimg");
    var currentindex = parseInt($img.attr("src").replace(".jpg", "").replace("comics/", ""));
    var img = new Image();
    img.src = "comics/"+parseInt(currentindex+1)+".jpg";
    if(img.height != 0) {
      $("#comicimg").attr("src","comics/"+parseInt(currentindex+1)+".jpg");
    }
    $("#comicimg").hide();
    $("#comicimg").show();
  });

  $("#next").click(function() {
    var $img = $("#comicimg");
    var currentindex = parseInt($img.attr("src").replace(".jpg", "").replace("comics/", ""));
    var img = new Image();
    img.src = "comics/"+parseInt(currentindex-1)+".jpg";
    if(img.height != 0) {
      $("#comicimg").attr("src","comics/"+parseInt(currentindex-1)+".jpg");
    }
    $("#comicimg").hide();
    $("#comicimg").show();
  });

});
