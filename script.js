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

});
