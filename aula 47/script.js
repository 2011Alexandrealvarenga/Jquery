$(document).ready(iniciar);

 function iniciar(){
  $('button').click(function(){
    // html retorna a tag
    // alert($("div").html());

    // text retorna o texto dentro da tag
    // alert($("div").text());

    // add tag
    $('.primeiradiv').html('<p>add tag</p>');

  })
 
}