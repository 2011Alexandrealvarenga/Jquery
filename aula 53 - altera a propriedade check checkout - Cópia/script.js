$(document).ready(iniciar);

 function iniciar(){
$('button').click(function(){
  // verifica a propriedade 
  // $('#info').text($('#check1').prop('checked'));

  // altera a propriedade do atribuito ao clicar
  $('#check1').prop('checked', true);

});
 
}