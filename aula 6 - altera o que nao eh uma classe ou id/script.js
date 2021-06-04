// ao iniciar a pagina
$(document).ready(iniciar);

function iniciar(){

    // altera todos elementos exceto com id p1
$("div p:not(#p1)").css("background","yellow")

// altera todos exceto com a classe
$("div p:not(.classe1").css("background","green")

$("div p.outra").css("background","lightblue")

}