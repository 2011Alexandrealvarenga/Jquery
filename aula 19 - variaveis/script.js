$(document).ready(iniciar);

function iniciar(){
    var e = $("#info");
    $("input:text[name='texto1']").click(function(){
        e.text("clicou")
    })

};
