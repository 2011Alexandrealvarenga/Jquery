$(document).ready(iniciar);
var num = 0;

 function iniciar(){
   // atribuir um evento click ao botao
   $('button').click(function(){

      // buscar os elementos 'p'
      $('p').each(function(){
         // atribui o test 'o novo valor é'
         $(this).text('o novo valor é:' + num++)
                  .css('color','red');

      });
   })
}