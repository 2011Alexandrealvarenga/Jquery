$(document).ready(iniciar);

 function iniciar(){
$('button').click(
  function(){
    // exibe o valor selecionado no select
    $('#info').text($('#caixa_selecao').val());
  }
);
 
}