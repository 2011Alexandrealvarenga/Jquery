$(document).ready(iniciar);

 function iniciar(){
   $('button').click(function(){
    //  wrap add elemento
    $('.primeira').wrap('<div class="segunda" />');
   });
}