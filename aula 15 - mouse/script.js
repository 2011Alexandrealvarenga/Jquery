$(document).ready(iniciar);

function iniciar(){
    // chamar o executar
    // $('#p1').hover(executar);

    // quando o mouse entra
    $('#p1').mouseenter(executar);


};
function executar(){
    $('#p2').toggle();
}
