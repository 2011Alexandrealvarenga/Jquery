
// $(document).ready()function(){
  // alert('test');
  // var width = $(window).width();
  // if (width < 768) {
  //     $(".hide-menu").hide();
  // }
  // var $drillDown = $("#drilldown");

// }

$(document).ready(function () {
 
  var width = $(window).width();
  if (width <= 420) {
    $('.mobile').remove();
  }
  else if(width >= 421){
    $('.desktop').remove();
  }

});

