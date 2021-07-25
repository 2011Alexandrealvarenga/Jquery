$(document).ready(iniciar);

 function iniciar(){
$('div').fadeTo(1,.4);

var intervalo = 1;
$('div').mouseenter(function(){
          $(this).fadeTo(intervalo, 1);
        })
        .mouseleave(function(){
          $(this).fadeTo(intervalo, .4);
        });
 
}