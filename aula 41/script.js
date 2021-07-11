$(document).ready(iniciar);

 function iniciar(){
  $('p').click(function(){
    // add cor no primeiro item da lista
    $('ul li:first').addClass('cor1');

    // add cor ao item equivalente
    $('ul li:eq(2)').addClass('cor1');


  })
}