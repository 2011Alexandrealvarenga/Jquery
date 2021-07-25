$(document).ready(iniciar);

 function iniciar(){
$('button').click(function(){
  // troca por 
  $('#info').text(
    $('#teste').attr('alt')
    );
})
 
}