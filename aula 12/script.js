$(document).ready(iniciar);

function iniciar(){
    // altera o id a apos o
    // $('p#b + p#a').css('background','yellow')

    // altera o span apos o id b
    $('p#b ~ span').css('background','yellow')
}