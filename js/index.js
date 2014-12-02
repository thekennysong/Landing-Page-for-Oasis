$("section").hover(function() {
    $(this).addClass("hover");
    $(this).siblings().addClass("unhover");
  }, function() {
    $(this).removeClass("hover");
    $(this).siblings().removeClass("unhover");
  }
);

$("section").click(function(){
  $(this).addClass("click");
  $(this).children('div').delay(300).fadeIn(150);
  $(this).siblings().addClass("unclick");
  $(this).siblings().children("p").fadeOut(50);
});

$(".x").click(function(event){
  event.stopPropagation();
  $("section").removeClass("click unclick");
  $("section").siblings().children('div').fadeOut(150);
  $("section").siblings().children('p').fadeIn(50);
});

$(document).keydown(function (e) {
    switch (e.which) {
    case 27:
        reset();
        break;
    case 49:
        open(1);
        break;
    case 50:
        open(2);
        break;
    case 51:
        open(3);
        break;
    case 52:
        open(4);
        break;
    default:
        return;
    }
    e.preventDefault();
});

function open(nr) {
  var t = $("section:nth-child("+nr+")");
  reset();
  t.toggleClass("click");
  t.children('div').delay(300).fadeToggle(300);
  t.siblings().toggleClass("unclick");
  t.siblings().children("p").fadeToggle(50);
}

function reset() {
  $("section").removeClass("click unclick");
  $("section").siblings().children('div').fadeOut(150);
  $("section").siblings().children('p').fadeIn(50);
}