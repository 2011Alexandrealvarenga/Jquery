$(document).ready(iniciar);

function iniciar(){
    // o paragrafo posterior ao id teste sera marcado
    // $('p#teste').next().css('background','yellow');

    // todos os proximos serao marcados
    // $('p#teste').nextAll().css('background','yellow');

    $('p#teste').prevAll().css('background','yellow');

}