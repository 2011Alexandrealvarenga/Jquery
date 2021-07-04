$(document).ready(iniciar);
 var nunCliquesPrimeiro = 0;
 var nunCliquesSegundo = 0;

 function iniciar(){
   $('#primeiro').bind('click',function(){ alert('alerta do primeiro')})
   $('#primeiro').bind("mouseEnter"), function(){$(this).css('background-color','yellow');}
   .bind("mouseout"), function(){$(this).css('background-color','white')}
   $('#segundo').click(function(){
      $('#primeiro').unbind('click');
   })


}