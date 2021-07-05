$(document).ready(iniciar);

 function iniciar(){
   // perder foco
   $('#clique').click(function(){
      $("input:text[name='texto1']").blur();
   });
   $("input:text[name='texto1']").mouseenter(function(){
      $(this).blur();
   });
   // altera a cor ao cliquer no texto
   $("input:text[name='texto2']").focus(function(){
      $("#clique").css('background','green');
   });
}