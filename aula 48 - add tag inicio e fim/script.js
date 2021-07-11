$(document).ready(iniciar);

 function iniciar(){
$('button').click(function(){
  // add tag
  // $('p').append('<p>item 2</p>')

  // add antes
  // $('p').prepend('<p>item 3</p>');

  $('<p>prepend to</p>').prependTo('p');
})
 
}