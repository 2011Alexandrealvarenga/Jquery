$(document).ready(iniciar);

function iniciar(){
    
    // clica e mostra o alert
    $('#p1').click( function(){
        // recua para cima
        $('#p2').slideUp();

        // efeito de 2s
        $('#p2').slideUp(2000);

        // $('#p2').slideDown();
    })

};
