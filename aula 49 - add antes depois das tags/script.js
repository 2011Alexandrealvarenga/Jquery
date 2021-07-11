$(document).ready(iniciar);

 function iniciar(){
$('button').click(function(){
  // add antes da ul 
  // $('ul').before('<p>este paragrafo esta  antes da lista</p>')

  // add na li antes de todas as li´s
  // $('li').before('<li>este paragrafo esta  antes da lista</li>')

  // add no primeiro item
  // $('li:first').before('<li>este paragrafo esta  antes da lista</li>')

  // elemento 2
  // $('li:eq(2)').before('<li>este paragrafo esta  antes da lista</li>')

  // after
  // $('li:eq(2)').after('<li>item depois</li>')

  // $('li:eq(2)').after('<li>item depois</li>')


  $('<li>item depois</li>').insertAfter('li:first')

  $('<li>item depois</li>').insertBefore('li:eq(3)')

})
 
}