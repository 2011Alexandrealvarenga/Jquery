$(document).ready(iniciar);
 var nunCliquesPrimeiro = 0;
 var nunCliquesSegundo = 0;

 function iniciar(){
   //  contagem de cliques no primeiro
   $('#primeiro').click(function(){
      nunCliquesPrimeiro++;
      $('#info1').text('clicou ' + nunCliquesPrimeiro + ' no primeiro');
   })
//  contagem de cliques no segundo
   $('#segundo').click(function(){
      nunCliquesSegundo++;
      $('#info2').text('clicou ' + nunCliquesSegundo + ' no Segundo');
      // executa a funcao relacionada ao id primeiro (trigger)
      $('#primeiro').trigger("click");
   })

}