// ao iniciar a pagina
$(document).ready(iniciar);

function iniciar(){
    // altera a cor do p
    $("p").css("color","red");   
    // alterando propriedade do ID
    $("#id1").css("background","red")
             .css("color","white");
    $(".classe1").css("background","blue")
                .css("color","red");
}