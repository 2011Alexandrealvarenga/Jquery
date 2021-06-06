$(document).ready(iniciar);

function iniciar(){

    $("p").mouseenter(function(){
        $(this).css('background','green')
    })
        .mouseleave(function(){
        $(this).css('background','lightblue')
        }
    )

};

