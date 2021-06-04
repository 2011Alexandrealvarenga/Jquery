// ao iniciar a pagina
$(document).ready(iniciar);

function iniciar(){

// altera texto do primeiro item
// $("ul li:first").html("alterados")

// altera o primeiro item da lista
$("ul li:first").html("alterado")
                .css("background","red"); 

// alterado no final
$("ul li:last").html("alterado no final")
                .css("background","yellow"); 

// alterar todos os itens  
// $("ul li").css("background","blue");

// altera os elementos pares
// $("ul li:even").css("background","blue");

// altera os elementos impar
// $("ul li:odd").css("background","yellow");

}