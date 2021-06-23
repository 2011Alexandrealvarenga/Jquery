$(document).ready(iniciar);
 
function iniciar(){

   $('#formulario').submit(function(){return false;})
   
   // pressiona uma tecla e exibe no id
   $('input:text').keypress(
      function(){
         $('#info').text('pressionou um tecla');
      }
   )
}


