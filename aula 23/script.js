$(document).ready(iniciar);

function iniciar(){
   $('#formulario').submit(
      function(){
         return false
      }
   );
   $('#teste').toggle(
      function(){
         $(this).css("color","red")
      },
      function(){
         $(this).css("color","blue")
      }
   )
         
};


