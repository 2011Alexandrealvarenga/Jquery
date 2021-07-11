$(document).ready(iniciar);

 function iniciar(){
  //  $('button').click(function(){
  //   //  wrap add elemento
  //   $('.primeira').wrap('<div class="segunda" />');
  //  });

   $('button').toggle(
     function(){$('.primeira').wrap('<div class="segunda" />');},
     function(){$('.primeira').unwrap();}

   );   
}

