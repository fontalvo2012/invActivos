$('#login').click(function(){
  var user  = $('#user').val();
  var clave = $('#clave').val(); 
  $.ajax({
    method: 'POST',   
    url: 'controller/loginController.php',    
    data: {
        user_php: user,
        clave_php: clave
      },   
    beforeSend: function(){     
      $('#load').show();
    },    
    success: function(res){     
      $('#load').hide();     
      if(res == 'error_1'){     
        swal('Error', 'Por favor ingrese todos los campos', 'error');
      }else if(res == 'error_2'){        
        swal('Error', 'Por favor ingrese un email valido', 'warning');
      }else if(res == 'error_3'){
        swal('Error', 'El usuario y contraseña que ingresaste es incorrecto', 'error');
      }else{       
        window.location.href= res;
      }

    }
  });
});

