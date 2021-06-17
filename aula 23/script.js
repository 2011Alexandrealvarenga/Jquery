$(document).ready(iniciar);
 
function iniciar(){
   $("#formulario").submit(function(){return false;});
   $("#teste").toggle(primeira, segunda);
      function primeira(){
         $(this).css("color", "red");
      }
      function segunda(){
         $(this).css("color", "blue");
      }
   
}


