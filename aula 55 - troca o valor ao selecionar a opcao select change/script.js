$(document).ready(iniciar);

 function iniciar(){
$('#caixa_selecao').change(
  function(){
    // troca o valor ao selecionar a opção
    $('#info').text($(this).val());
  }
);
 
}