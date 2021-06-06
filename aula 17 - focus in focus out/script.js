$(document).ready(iniciar);

function iniciar(){
    $('input').focusin(function(){
        $(this).css('background','lightgreen')
    })
    .focusout(function(){
        $(this).css('background','lightblue')

    })

};

