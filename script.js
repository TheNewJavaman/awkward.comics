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
    var currentindex = $('#comicimg').attr("src").replace("comics/","").replace(".jpg","");
    var src = "comics/"+parseInt(parseInt(currentindex)+1)+".jpg";
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    var pair = vars[0].split("=");
    var latest = pair[1];
    if(latest>=parseInt(parseInt(currentindex)+2)){
      var newImg = $("<img src='"+src+"' width='50%' height='50%' id='comicimg'/>").fadeTo(0,0);
      $("#comicimg").fadeTo(500,0.5);
      $("#comic #comicimg").remove();
      $("#list #listp").remove();
      $("#comic").append(newImg);
      $("#list").append("<p class=\"paragraph\" id=\"listp\">"+parseInt(latest-(parseInt(currentindex)+2)+1)+"/"+latest+"</p>");
      $("#comicimg").fadeTo(500,1);
      if(src.includes(parseInt(latest-1))){
        $("#back").fadeTo(300,0.2);
      }
    }else{
      console.log("User is at the end of the comics list");
    };
    $("#next").fadeTo(300,1);
  });

  $("#next").click(function() {
    var currentindex = $('#comicimg').attr("src").replace("comics/","").replace(".jpg","");
    var src = "comics/"+parseInt(currentindex-1)+".jpg";
    if(!(src.includes("-1"))){
      var newImg = $("<img src='"+src+"' width='50%' height='50%' id='comicimg'/>").fadeTo(0,0);
      $("#comicimg").fadeTo(500,0.5);
      $("#comic #comicimg").remove();
      $("#list #listp").remove();
      $("#comic").append(newImg);
      $("#list").append("<p class=\"paragraph\" id=\"listp\">"+parseInt(latest-(parseInt(currentindex))+1)+"/"+latest+"</p>");
      $("#comicimg").fadeTo(500,1);
      if(src.includes("0")){
        $("#next").fadeTo(300,0.2);
      }
    }else{
      console.log("User is at the end of the comics list");
    };
    $("#back").fadeTo(300,1);
  });
});
