$(document).ready(iniciar);

 function iniciar(){
   //  ao digitar valor, vai para outro input
   $('input:text[name="texto1"]').change(function(){
      $('input:text[name="texto2"]').val($(this).val());
   });

   // insere valor ao selecionar
   $('input:text').select(function(){
      $('#clique').text("selecionou");
   })
}