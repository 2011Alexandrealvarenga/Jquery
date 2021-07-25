$(document).ready(iniciar);

 function iniciar(){
  $('#clique').click(function(){
    if($('div').is(':hidden'))
    {
      $('div').slideDown(500);
    }
    else
    {
      $('div').slideUp(500);
    }
  })
 
}