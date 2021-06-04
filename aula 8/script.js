$(document).ready(iniciar);
function iniciar(){
    // altera somente o texto com o name especifico
    $("p[name='texto']").css("background","yellow");

    // altera diferente do class 
    $("p[class!='texto']").css("background","lightblue")

    // altera classes que comecam com j
    $("[class^='j']").css("background","pink")
}