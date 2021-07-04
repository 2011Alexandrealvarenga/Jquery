$(document).ready(iniciar);
 
function iniciar(){
//  adicionar o evento ao primeiro
$('#primeiro').click(function(){alert('ola')})

// retirar o evento ao primeiro
$('#segundo').click(function(){
   alert('retirar evento do primeiro');
   $('#primeiro').off();
})

}


