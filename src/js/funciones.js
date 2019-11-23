
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
           $('#btqr').hide(1000);
           let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
             scanner.addListener('scan', function (content) {                  
               //  $("#contenido").html("Resutado: "+content);
                 ConsultarEquipo(content);
                 $('#btqr').show(1000);
                 $('#preview').hide(1000); 
                 scanner.stop();
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
function registrarProveedor(){  
  var form = $('#formproveedor').serialize();
  $.ajax({
    method: 'POST',
    url: 'controller/proveedorController.php',
    data: form,
    beforeSend: function(){
      $('#load').show();
    },
    success: function(res){
      $('#load').hide();      
      if(res == 'error_1'){
        swal('Error', 'Campos obligatorios, por favor llenar', 'warning');      
      }else{
       window.location.href = res ;
      }
    }
  });
}
function registrarEquipo(){  
  var form = $('#formproveedor').serialize();
  $.ajax({
    method: 'POST',
    url: 'controller/proveedorController.php',
    data: form,
    beforeSend: function(){
      $('#load').show();
    },
    success: function(res){
      $('#load').hide();      
      if(res == 'error_1'){
        swal('Error', 'Campos obligatorios, por favor llenar', 'warning');      
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
      //$("#cod").val(codigo);
      $("#qrcode").val(codigo);
     // prompt("dato",res);
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
//========================================================================================
function generarForm(opt){

  espesificos=` <div class="container m-2">
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" href="#" onclick="generarForm(1)">Generales</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" onclick="generarForm(2)">Espesificos</a>
    </li> 
  </ul>
  <div class="custom-file mt-2 mb-2">
  <input type="file" class="custom-file-input custom-file-input-sm mb-2" id="customFile">
  <label class="custom-file-label" for="customFile">Imagen</label>
  </div>
  <input type="text" id="" name="" class="form-control form-control-sm" placeholder="•	Descripción">
  <input type="text" id="" name="" class="form-control form-control-sm" placeholder="•	Serial ">
  <input type="text" id="" name="" class="form-control form-control-sm" placeholder="•	Marca">
  <input type="text" id="" name="" class="form-control form-control-sm" placeholder="•	Modelo">
  <input type="text" id="" name="" class="form-control form-control-sm" placeholder="•	Dependencia">
  <input type="text" id="" name="" class="form-control form-control-sm" placeholder="•	Dueño  ">
  <select name="cars" class="custom-select custom-select-sm">
  <option selected>Sede</option>
  <option value="volvo">Volvo</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
   </select>
  <input type="date" id="" name="" class="form-control form-control-sm">
  <input type="text" id="" name="" class="form-control form-control-sm" placeholder="•	Responsable">
  <input type="text" id="" name="" class="form-control form-control-sm" placeholder="•	Estado">
  <input type="text" id="" name="" class="form-control form-control-sm" placeholder="•	Costo">
  <select name="cars" class="custom-select custom-select-sm">
  <option selected>Proveedor</option>
  <option value="volvo">Volvo</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
   </select>
   <div class="form-group">
        <button class="btn btn-success btn-block mt-3">Ingresar</button>
     </div>
  </div> `;

generales=` <div class="container m-2">
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link " href="#" onclick="generarForm(1)" >Generales</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#" onclick="generarForm(2)">Espesificos</a>
  </li> 
</ul>
</div>`;


if (opt==1) {
  $('#form').html(espesificos);
}else{
  $.ajax({
    method: 'POST',
    url: 'controller/formulariosController.php',
    data:{
      tipo:$('#tipo').val()
    }, 
    success: function(res){
      $('#form').html(generales+res);
    }
  });
  

}

}

