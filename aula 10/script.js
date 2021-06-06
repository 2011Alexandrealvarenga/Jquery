$(document).ready(iniciar);

function iniciar(){
    // o paragrafo posterior ao id teste sera marcado
    $('p#teste').next().css('background','yellow')
}