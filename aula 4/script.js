// ao iniciar a pagina
$(document).ready(iniciar);

function iniciar(){
// altera o primeiro item da lista
$("ul li:first").html("alterado")
                .css("background","red"); 

// alterado no final
$("ul li:last").html("alterado no final")
                .css("background","yellow"); 

// alterar todos os itens  
// $("ul li").css("background","blue");

}