

jQuery(document).ready(function(){
  jQuery(".obj").click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery(".final").offset().top
    }, 1000);
  });
});