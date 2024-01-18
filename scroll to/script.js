

jQuery(document).ready(function(){

  // click no item do fluxo e va para o conteudo
  jQuery(".obj").click(function() {
    jQuery('html, body').animate({
        scrollTop: jQuery(".final").offset().top
    }, 1000);
  });

  // comece aqui - exibe e oculta conteudo
  jQuery('#class1').click(
    function(){
      jQuery('#content1').css('display','block');
      jQuery('#content2').css('display','none');
    }
  )

});