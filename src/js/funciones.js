
      function sonar(){
        var snd = new Audio("tono.mp3");
        snd.play();
     }
   
       $(document).ready(function(){           
           $('#preview').hide();
           $('#d1').hide();
           $('#d2').hide();
           $('#d3').hide();
           $('#d4').hide();
         });

       function IniciarCamara(){
           $('#preview').show(1000);            
           let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
             scanner.addListener('scan', function (content) {                  
               //  $("#contenido").html("Resutado: "+content);
                 ConsultarEquipo(content);

             });
           Instascan.Camera.getCameras().then(function (cameras) {
             if (cameras.length > 0) {
               if(cameras.length > 1){
                 scanner.start(cameras[1]);
               }else{
                 scanner.start(cameras[0]);  
               }                  
                
             } else {
               console.error('No cameras found.');
             }
           }).catch(function (e) {
             console.error(e);
           });
       }


function registrarUsuario(){
  var form = $('#formulario_registro').serialize();
  $.ajax({
    method: 'POST',
    url: 'controller/registroController.php',
    data: form,
    beforeSend: function(){
      $('#load').show();
    },
    success: function(res){
      $('#load').hide();
      if(res == 'error_1'){
        swal('Error', 'Campos obligatorios, por favor llena el email y las claves', 'warning');
      }else if(res == 'error_2'){
        swal('Error', 'Las claves deben ser iguales, por favor intentalo de nuevo', 'error');
      }else if(res == 'error_3'){
        swal('Error', 'El correo que ingresaste ya se encuentra registrado', 'error');
      }else if(res == 'error_4'){
        swal('Error', 'Por favor ingresa un correo valido', 'warning');
      }else{
        window.location.href = res ;
      }
    }
  });
}


function ConsultarEquipo(codigo){
  
  $.ajax({
    method: 'POST',
    url: 'controller/equiposController.php',
    data:{
      eq:codigo
    }, 
    beforeSend: function(){
      $('#load').show();
    },
    success: function(res){
      $('#load').hide();
      sonar();
      $("#cod").val(codigo);
      if(res =='1000'){        
        $('#d1').show(1200); 
             
      }else{
        $('#d2').show(1400); 
        $('#d3').show(1600);
        $('#d4').show(1800);
      }
      
      
    }
  });
}
       
$('#registro').click(function(){
  var form = $('#formulario_registro').serialize();
  $.ajax({
    method: 'POST',
    url: 'controller/registroController.php',
    data: form,
    beforeSend: function(){
      $('#load').show();
    },
    success: function(res){
      $('#load').hide();
      if(res == 'error_1'){
        swal('Error', 'Campos obligatorios, por favor llena el email y las claves', 'warning');
      }else if(res == 'error_2'){
        swal('Error', 'Las claves deben ser iguales, por favor intentalo de nuevo', 'error');
      }else if(res == 'error_3'){
        swal('Error', 'El correo que ingresaste ya se encuentra registrado', 'error');
      }else if(res == 'error_4'){
        swal('Error', 'Por favor ingresa un correo valido', 'warning');
      }else{
        window.location.href = res ;
      }
    }
  });

});
