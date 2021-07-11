$(document).ready(iniciar);

 function iniciar(){
// adicionar valores
$('#d1').click(function(){
  $('#contentor').data('valor1',100).data('valor2', 200);
});

$('#d2').click(function(){
  console.log($('#contentor').data('valor1'));
  console.log($('#contentor').data('valor2'));
});

$('#d3').click(function(){
  $('#contentor').removeData('valor1');
});
}