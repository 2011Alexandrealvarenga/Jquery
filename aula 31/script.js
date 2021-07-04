$(document).ready(iniciar);
var n = 0;
 function iniciar(){
   //  exibe mensagem se tiver erro na imagem
   // $('img').error(function(){
   //    alert('aconteceu um erro ao carregar a imagem')
   // })

   // exibe informacoes do redimensionamento da tela
   // $(window).resize(function(){
   //    $('#info').text(n++);
   // })

   // exibe mensagem ao dar scroll
   $(window).scroll(function(){
      alert('scroll')
   })
}