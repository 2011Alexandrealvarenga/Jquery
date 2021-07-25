$(document).ready(iniciar);

 function iniciar(){
  $('button').click(function(){
    $('div').animate(
      {
        opacity: 0.2,
        height: '200px'
      }, 500
    );
  })
 
}