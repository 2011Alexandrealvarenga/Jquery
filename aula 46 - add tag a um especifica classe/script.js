$(document).ready(iniciar);

 function iniciar(){
  $('button').click(function(){
    $('.primeira').append('<p>primeira</p>');

  })
  $('button').click(function(){
    $('<p>primeira</p>').appendTo('.primeira');

  })
}