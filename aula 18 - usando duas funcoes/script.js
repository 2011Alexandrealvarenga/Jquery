$(document).ready(iniciar);

function iniciar(){

    $('input').focusin(fIn).focusout(fOut);
};
function fIn(){
    $(this).css('background','yellow')
}
function fOut(){
    $(this).css('background','lightblue')
}

