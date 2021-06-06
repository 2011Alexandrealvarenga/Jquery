$(document).ready(iniciar);

function iniciar(){
    $("input:text").bind("focusin", {e: true}, funcao)
               .bind("focusout", {e: false}, funcao);
};
function funcao(arg)
{
    if(arg.data.e)
        $(this).css('background','yellow');
    else
        $(this).css('background','lightblue');
}