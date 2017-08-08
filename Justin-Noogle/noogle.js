
var w = $(window).width();
var h = $(window).height();

$(window).resize(function(){
var w = $(window).width();
var h = $(window).height();
});

$('chrome').click(function() {

  $('<div class="bullet"><img src = "https://pbs.twimg.com/media/CuHsvi-XgAEPCzn.jpg" ></img></div>').appendTo($('body')).animate({top:h}, 400, function() {$(this).remove();});
  $('<div class="bullet"><img src = "https://pbs.twimg.com/media/CuHsvi-XgAEPCzn.jpg" ></img></div>').appendTo($('body')).animate({top: h-w}, 400, function() {$(this).remove();});
  $('<div class="bullet"><img src = "https://pbs.twimg.com/media/CuHsvi-XgAEPCzn.jpg" ></img></div>').appendTo($('body')).animate({left:w}, 400, function() {$(this).remove();});
  $('<div class="bullet"><img src = "https://pbs.twimg.com/media/CuHsvi-XgAEPCzn.jpg" ></img></div>').appendTo($('body')).animate({left:-w}, 400, function() {$(this).remove();});
});


$('chrome').hover(function(){
$('body').toggleClass("on");
});

setInterval(function(){
 var r = Math.floor((Math.random() * 145) -100);
  $('<div class="bullet"><img src = "https://pbs.twimg.com/media/CuHsvi-XgAEPCzn.jpg" ></img></div>').appendTo($('body')).animate({top:h,left:+r}, 4400, function() {$(this).remove();});

},5000);

 $('chrome').hover (function() {
    $('body').append('<audio controls autoplay> <source src="02-green-hill-zone.mp3"> </audio> ')
 
});