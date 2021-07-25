$(document).ready(iniciar);

 function iniciar(){
$('#caixa_selecao').change(
  function(){
    var valor = $(this).val();
    // retorna se selecionou o valor no select option
    if(valor == 'text 2')
    {
      $('#info').text('valor selecionado texto 2');
    }
  }
);
 
}