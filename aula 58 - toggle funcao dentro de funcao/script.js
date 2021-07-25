$(document).ready(iniciar);

 function iniciar(){
$('div').click(function(){
  
  // desaparece
  // $(this).fadeOut();

  // com intervalo
  $('#animar1').fadeOut(1000, function(){
    $('#animar2').fadeOut(3000, function(){
      $('#animar3').fadeOut(2000, function(){
        $('#info').text('terminou');
      })
    })
  });
});
 
}