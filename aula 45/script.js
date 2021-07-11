$(document).ready(iniciar);

 function iniciar(){
  $('button').click(function(){
    // add dentro do elemento
    $('.primeira').wrapInner('<div class="segunda" />');

  })
}