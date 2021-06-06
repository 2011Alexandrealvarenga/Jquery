$(document).ready(iniciar);
var numero = 0;
function iniciar(){
    // chamar o executar
    // $('#p1').hover(executar);

    // quando o mouse entra
    // $('#p1').mouseenter(executar);

    // quando o mouse sai
    // $('#p1').mouseleave(executar);
    
    // mover o mouse - chama a funcao mouse move
    $('#p1').mousemove(mousemove);

};
function executar(){
    $('#p2').toggle();
}
function mousemove(){
    // altera o texto
    // $('#p2').html("moveu o mouse");

    // acrescenta valor ao mover o mouse
    $('#p2').text(numero++);
}
