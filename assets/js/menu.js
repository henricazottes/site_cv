$(document).ready(function() {
  $( ".showLeft" ).click( function() {
  	$( "#cbp-spmenu-s1" ).toggleClass('cbp-spmenu-open' );
  });

  postionButton();
});

$(window).resize(function(){
  postionButton();
});

$(window).scroll(function(){
  $("#showLeft").css("top", 35 + $(window).scrollTop());
});

function postionButton(){
    var position = $("#col1").position();
    $("#showLeft").css("top", position.top + 15);
    $("#showLeft").css("left", position.left + 15);
}
