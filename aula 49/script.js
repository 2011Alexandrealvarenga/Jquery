$(document).ready(iniciar);

 function iniciar(){
$('button').click(function(){
  $('ul').before('<p>este paragrafo esta  antes da lista</p>')
})
 
}