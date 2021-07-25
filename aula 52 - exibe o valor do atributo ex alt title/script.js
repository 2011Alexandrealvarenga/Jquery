$(document).ready(iniciar);

 function iniciar(){
$('button').click(function(){
  // exibe o valor do atribuito ex. alt title 
  $('#info').text(
    $('#teste').attr('alt')
    );
})
 
}