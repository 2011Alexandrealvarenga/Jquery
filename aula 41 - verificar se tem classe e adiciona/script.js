$(document).ready(iniciar);

 function iniciar(){
  $('p').click(function(){
    // add cor no primeiro item da lista
    // $('ul li:first').addClass('cor1');
    // $('ul li:first').addClass('cor1 fundo');

    // add cor ao item equivalente
    // $('ul li:eq(2)').addClass('cor1');

    // verificar se elemento html tem a classe
    $('p').click(function(){
      var contem = $('li:first').hasClass('cor1');
      if(contem)
        alert('sim');
      else
        alert('nao');
    });

  })
}