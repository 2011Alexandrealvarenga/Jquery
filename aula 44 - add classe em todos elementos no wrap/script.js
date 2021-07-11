$(document).ready(iniciar);

 function iniciar(){
  $('button').click(function(){
    // add em todos elementos
    $('p').wrapAll('<div class="primeira" />');

  })
}