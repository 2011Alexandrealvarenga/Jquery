$(function() {
	$(window).scroll(function () {
  // comece aqui - exibe e oculta conteudo
  jQuery('#class1').click(
    function(){
      jQuery('#content1').css('display','block');
      jQuery('#content2').css('display','none');
    }
  )
	});
})

// scroll the page to see effect