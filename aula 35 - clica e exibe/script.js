$(document).ready(iniciar);

 function iniciar(){
   // exibe valor dos inputs no paragrafo ao clicar
   $("#clique").click(function(){
      $('#info').text($('form').serialize());
   })

   //exibe no console 
   // $("#clique").click(function(){
   //    console.log($('form').serialize());
   // })

   // Exibe no console
   // $("#clique").click(function(){
   //    console.log($('form').serialize());
   // })

}