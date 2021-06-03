// ao iniciar a pagina
$(document).ready(iniciar);

function iniciar(){
    // altera a cor do p
    $("p").css("color","red");   
    // alterando propriedade do ID
    $("#id1").css("background","red")
             .css("color","white");
            //  alterando propriedade classe
    $(".class1").css("background","red")
                .css("color","yellow");
    $("div p").css("color","greeen");

    // evento ao clicar (click)
    // hide oculta
    $("div p").hide();
    $("span").click(function(){
        // show mostra
        $("div p").show();
    })

    
}