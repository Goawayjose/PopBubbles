
$(document).ready(function(){
  /*
  function moveAround() {
    var elem = $('.bubble');
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        elem.css('top', pos + 'px');
      }
    }

    console.log(pos);
  }
  */

  var bubble = $('.bubble');


  bubble.click(function() {
    $(this).toggleClass('playing');
    if($(this).siblings().hasClass('playing')){
      $(this).siblings().removeClass('playing')
    }
  });


  bubble.mouseover(function() {
    $(this).children().css('display', 'block');
    if($(this).width() < 200){
      $(this).addClass('smallBub');
    }
  });
  bubble.mouseleave(function() {
    $(this).children().css('display', 'none');
    if($(this).hasClass('smallBub')){
      $(this).removeClass('smallBub');
    }
  });


});
