$(document).ready(function(){
      $("#cpfcnpj").keyup(function(){
          var valcpfcnpj = $('#cpfcnpj').val();
        //   var novacpfCnpj = formatarCampo(valcpfcnpj);
        // console.log(novacpfCnpj);
        if (valcpfcnpj.length <= 11) {
            // campoTexto.value = mascaraCpf(campoTexto);
            var novacpfcnpj = valcpfcnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
            console.log(novacpfcnpj);
            $('#cpfcnpj').val(novacpfcnpj);
        } else {
            var novacpfcnpj = valcpfcnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5");
            console.log(novacpfcnpj);
            $('#cpfcnpj').val(novacpfcnpj);
        
        }
      });  
      
      

      
    //   function formatarCampo(campoTexto) {
    //     // if (campoTexto.length <= 11) {
    //     //     campoTexto.value = mascaraCpf(campoTexto);
    //     // } else {
    //     //    campoTexto.value = mascaraCnpj(campoTexto);
    //     // }
    //   }
    //   function retirarFormatacao(campoTexto) {
    //     campoTexto.value = campoTexto.value.replace(/(\.|\/|\-)/g,"");
    //   }
    //   function mascaraCpf(valor) {
    //     return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
    //   }
    //   function mascaraCnpj(valor) {
    //     return valor.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5");
    //   }
      
    //   function validaCpfCnpj(val) {
        
    //       if (val.length == 14) {
    //           var cpf = val.trim();
           
    //           cpf = cpf.replace(/\./g, '');
    //           cpf = cpf.replace('-', '');
    //           cpf = cpf.split('');
              
    //           var v1 = 0;
    //           var v2 = 0;
    //           var aux = false;
              
    //           for (var i = 1; cpf.length > i; i++) {
    //               if (cpf[i - 1] != cpf[i]) {
    //                   aux = true;   
    //               }
    //           } 
              
    //           if (aux == false) {
    //               return false; 
    //           } 
              
    //           for (var i = 0, p = 10; (cpf.length - 2) > i; i++, p--) {
    //               v1 += cpf[i] * p; 
    //           } 
              
    //           v1 = ((v1 * 10) % 11);
              
    //           if (v1 == 10) {
    //               v1 = 0; 
    //           }
              
    //           if (v1 != cpf[9]) {
    //               return false; 
    //           } 
              
    //           for (var i = 0, p = 11; (cpf.length - 1) > i; i++, p--) {
    //               v2 += cpf[i] * p; 
    //           } 
              
    //           v2 = ((v2 * 10) % 11);
              
    //           if (v2 == 10) {
    //               v2 = 0; 
    //           }
              
    //           if (v2 != cpf[10]) {
    //               return false; 
    //           } else {   
    //               return true; 
    //           }
    //       } else if (val.length == 18) {
    //           var cnpj = val.trim();
              
    //           cnpj = cnpj.replace(/\./g, '');
    //           cnpj = cnpj.replace('-', '');
    //           cnpj = cnpj.replace('/', ''); 
    //           cnpj = cnpj.split(''); 
              
    //           var v1 = 0;
    //           var v2 = 0;
    //           var aux = false;
              
    //           for (var i = 1; cnpj.length > i; i++) { 
    //               if (cnpj[i - 1] != cnpj[i]) {  
    //                   aux = true;   
    //               } 
    //           } 
              
    //           if (aux == false) {  
    //               return false; 
    //           }
              
    //           for (var i = 0, p1 = 5, p2 = 13; (cnpj.length - 2) > i; i++, p1--, p2--) {
    //               if (p1 >= 2) {  
    //                   v1 += cnpj[i] * p1;  
    //               } else {  
    //                   v1 += cnpj[i] * p2;  
    //               } 
    //           } 
              
    //           v1 = (v1 % 11);
              
    //           if (v1 < 2) { 
    //               v1 = 0; 
    //           } else { 
    //               v1 = (11 - v1); 
    //           } 
              
    //           if (v1 != cnpj[12]) {  
    //               return false; 
    //           } 
              
    //           for (var i = 0, p1 = 6, p2 = 14; (cnpj.length - 1) > i; i++, p1--, p2--) { 
    //               if (p1 >= 2) {  
    //                   v2 += cnpj[i] * p1;  
    //               } else {   
    //                   v2 += cnpj[i] * p2; 
    //               } 
    //           }
              
    //           v2 = (v2 % 11); 
              
    //           if (v2 < 2) {  
    //               v2 = 0;
    //           } else { 
    //               v2 = (11 - v2); 
    //           } 
              
    //           if (v2 != cnpj[13]) {   
    //               return false; 
    //           } else {  
    //               return true; 
    //           }
    //       } else {
    //           return false;
    //       }
    //    }
  
  });