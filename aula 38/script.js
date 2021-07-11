$(document).ready(iniciar);
var num = 0;
var valores = ['red','green','yellow','black','blue','gray'];
 function iniciar(){
   // atribuir um evento click ao botao
   $('button').click(function(){

      // buscar os elementos 'p'
      $('p').each(function(){
         // atribui o test 'o novo valor é'
         $(this).css('color',valores[num]);
         num++;                  

      });
   })
}