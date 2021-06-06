$(document).ready(iniciar);

function iniciar(){
    // o paragrafo posterior ao id teste sera marcado
    // $('p#teste').next().css('background','yellow');

    // todos os proximos serao marcados
    // $('p#teste').nextAll().css('background','yellow');

    // seleciona todos os anteriores ao id teste
    // $('p#teste').prevAll().css('background','yellow');

    // do segundo item pra frente sera marcado
    // $('p:eq(2)').nextAll().css('background','yellow');

    // marca de ate 
    $('p#teste').nextUntil('p#teste2').css('background','yellow');

}