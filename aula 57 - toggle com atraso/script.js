$(document).ready(iniciar);

 function iniciar(){
$('button').click(function(){
  
 
  // tira os efeitos
  // jquery.fx.off = true;


  // efeito com delay
  // $('#animar').toggle(1000);

  var intervalo = 3000;
  $('#animar').toggle(intervalo);
});
 
}