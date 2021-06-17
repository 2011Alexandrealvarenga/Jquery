$(document).ready(iniciar);

function iniciar(){
    $("input:text").bind("click", info);
 };
 function info(event)
 {
    //retorna o tipo de elemento
    //  $('#info').text(event.currentTarget);

    // mostra onde o cursor clicou no input
    //  $('#info').text(event.pageX + " x " + event.pageY);

    // retorna o tipo de evento
    $('#info').text(event.type);
  }

