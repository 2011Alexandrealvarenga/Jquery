$(document).ready(iniciar);

 function iniciar(){
   //  atribuição de valores a um elemento HTML
$('#clique').click(function(){
   $('#info').data('v1',100)
            .data('v2',200);
});

// apresenta os valores atribuidos
$('#apresentar').click(function(){
   console.log($('#info').data('v1'));
   console.log($('#info').data('v2'));
})
}