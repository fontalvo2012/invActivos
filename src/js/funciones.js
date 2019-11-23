
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
  codigo=$('#qrcode').val();  
  $.ajax({
    method: 'POST',
    url: 'controller/equiposController.php',
    data: {    
      op:'3',
      eq:codigo,
      nombre:$('#tipo').val(),
      descripcion:$('#descripcion').val(),
      serial:$('#serial').val(),
      marca:$('#marca').val(),
      modelo:$('#modelo').val(),
      dependencia:$('#dependencia').val(),
      dueno:$('#dueno').val(),
      sede:$('#sede').val(),
      fcompra:$('#fcompra').val(),
      responsable:$('#responsable').val(),
      proveedor:$('#proveedor').val(),
      estado:$('#estado').val(),
      costo:$('#costo').val()
    },    
    success: function(res){
      if(res == 'Error_2'){
        swal('Alvertencia', 'El Codigo ya existe', 'warning');        
      }else{
        window.location.href = res ;
      }   
    }
  });
}

//Consulta por el codigo del equipo y muestra los los botones si existe o no el producto.
function ConsultarEquipo(codigo){  
  $.ajax({
    method: 'POST',
    url: 'controller/equiposController.php',
    data:{
      eq:codigo,
      op:'1'
    }, 
    beforeSend: function(){
      $('#load').show();
    },
    success: function(res){
      $('#load').hide();
      sonar();     
      $("#qrcode").val(codigo);     
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

//Valida el codigo del equipo
function validarEquipo(){
  codigo=$('#qrcode').val();
  $.ajax({
    method: 'POST',
    url: 'controller/equiposController.php',
    data:{
      eq:codigo,
      op:'2'
    },    
    success: function(res){ 
      //prompt("datos",res);
      if(res == 'Error_2'){
        swal('Alvertencia', 'Campos obligatorios, por favor llenarlos', 'warning');
        generarForm(1);
      }else{
        generarForm(2);
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
  espesificos=` 

  <div class="container m-2">
  <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link active" href="#" onclick="generarForm(1)">Generales</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" onclick="validarEquipo()">Espesificos</a>
    </li> 
  </ul>
  <div class="custom-file mt-2 mb-2">
  <input type="file" name="foto" class="custom-file-input custom-file-input-sm mb-2" id="customFile">
  <label class="custom-file-label" for="customFile">Imagen</label>
  </div>
  <input type="text" id="descripcion" name="descripcion" class="form-control form-control-sm" placeholder="•	Descripción">
  <input type="text" id="serial" name="serial" class="form-control form-control-sm" placeholder="•	Serial ">
  <input type="text" id="marca" name="marca" class="form-control form-control-sm" placeholder="•	Marca">
  <input type="text" id="modelo" name="modelo" class="form-control form-control-sm" placeholder="•	Modelo">
  <input type="text" id="dependencia" name="dependencia" class="form-control form-control-sm" placeholder="•	Dependencia">
  <input type="text" id="dueno" name="dueno" class="form-control form-control-sm" placeholder="•	Dueño  ">
  <select name="sede" id="sede" class="custom-select custom-select-sm">
  <option selected>Sede</option>
  <option value="bocagrande">Bocagrande</option>
  <option value="ejecutivos">Ejecutivos</option>
  <option value="amberes">Amberes</option>
   </select>
  <input type="date" id="fcompra" name="fcompra" class="form-control form-control-sm">
  <input type="text" id="responsable" name="responsable" class="form-control form-control-sm" placeholder="•	Responsable">
  <input type="text" id="estado" name="estado" class="form-control form-control-sm" placeholder="•	Estado">
  <input type="text" id="costo" name="costo" class="form-control form-control-sm" placeholder="•	Costo">
  <select name="proveedor" id="proveedor" class="custom-select custom-select-sm">
  <option selected>Proveedor</option>
  <option value="Compulago">Compulago</option> 
   </select>
   <div class="form-group">
        <button class="btn btn-success btn-block mt-3" onclick="registrarEquipo()">Ingresar</button>
     </div>
  </div> 
 
  `;

generales=` <div class="container m-2">
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link " href="#" onclick="generarForm(1)" >Generales</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" href="#" onclick="validarEquipo()">Espesificos</a>
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

