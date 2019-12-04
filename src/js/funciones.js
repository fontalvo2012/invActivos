
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
           OcultarBusqueda();
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
function selectProveedor(){    
  $.ajax({
    method: 'POST',
    url: 'controller/proveedorController.php',
    data: {      
      opcion:'select'
    },
    success: function(res){
      //console.log(res);
      $('#select').html(res);
    }
  });
}

function selectDueno(){    
  $.ajax({
    method: 'POST',
    url: 'controller/proveedorController.php',
    data: {      
      opcion:'dueno'
    },
    success: function(res){
     // console.log(res);
      $('#dueno').html(res);
    }
  });
}
function consultarActivo2(){    
  var codigo=$('#qrcode').val();
  $.ajax({
    method: 'POST',
    url: 'controller/consultarActivoController.php',      
    data: {      
      codigo:codigo
    },
    success: function(res){
      if(res!="Error_2"){
        var activo = JSON.parse(res);
        var f1= new Date(activo[0].fmantenimiento);
        var f2= new Date();
        let resta = f1.getTime() - f2.getTime()
        var res=Math.round(resta/ (1000*60*60*24));
        console.log(Math.round(resta/ (1000*60*60*24)))        
         $('#imag').html(`<img src="file/${activo[0].imagen}" class="img-thumbnail">`);
         $('#datos').html(`
              <div id="accordion">
              <div class="card">
                <div class="card-header-sm " id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-warning btn-block" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Datos Generales
                    </button>
                  </h5>
                </div>            
                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body m-1 small text-uppercase">

                  <table >
                      <tr>
                        <td><b>Nombre: </b>${activo[0].nombre}</td>
                        <td><b>marca: </b>${activo[0].marca}</td>                     
                      </tr> 
                      <tr>
                        <td colspan="2"><b>Descrion: </b>${activo[0].descripcion}</td>                                            
                      </tr> 
                      <tr>
                        <td><b>Serial:</b>${activo[0].serial}</td>
                        <td><b>Modelo:</b>${activo[0].model}</td>                     
                      </tr>
                      <tr>                       
                        <td colspan="2"><b>Dependencia:</b>${activo[0].dependencia}</td>                     
                      </tr>
                      <tr>                       
                        <td colspan="2"><b>Sede:</b>${activo[0].sede}</td>                     
                      </tr> 
                      <tr>
                      <td colspan="2"><b>Responsable:</b>${activo[0].responsable}</td>
                                          
                    </tr>                   
                  </table>
                                    
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header-sm" id="headingTwo">
                  <h5 class="mb-0">
                    <button class="btn btn-warning btn-block" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                     Datos Espesificos
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="card-body small text-uppercase">
                  <table >
                  <tr>
                    <td colspan="2"><b>Fecha Registro: </b>${activo[0].creacion}</td>                                   
                  </tr> 
                  <tr>
                    <td colspan="2"><b>Costo: </b>${activo[0].costo}</td>                                            
                  </tr>                 
                  <tr>                       
                    <td colspan="2"><b>Proximo Man. </b>${activo[0].fmantenimiento}</td>                     
                  </tr>
                  <tr>                       
                    <td colspan="2"><b>Sede:</b>${activo[0].sede}</td>                     
                  </tr> 
                                  
              </table>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header-sm" id="headingThree">
                  <h5 class="mb-0">
                    <button class="btn btn-warning btn-block" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Proximo Mantenimiento..
                    </button>
                  </h5>
                </div>
                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                  <div class="card-body small ">
                   <table>
                      <tr>
                        <td colspan="2"><b>QUEDAN</b>  ${res} DIAS</td>
                      </tr>
                   </table>
                  </div>
                </div>
              </div>
            </div>
         `);
      }
    
    }
  });
}

function consultarActivo(){    
  var codigo=$('#qrcode').val();
  $.ajax({
    method: 'POST',
    url: 'controller/consultarActivoController.php',      
    data: {      
      codigo:codigo
    },
    success: function(res){
      if(res!="Error_2"){
        var activo = JSON.parse(res);
        console.log(activo[0]);        
        $('#tipo').hide();
        $('#dependencia').hide();
        $('#nombre').show();
        $('#nombre').html(activo[0].nombre);
        $('#descripcion').val(activo[0].descripcion);
        $('#serial').val(activo[0].serial);
        $('#marca').val(activo[0].marca);
        $('#modelo').val(activo[0].model);
        $('#dep').val(activo[0].dependencia);
        $('#duenio').val(activo[0].dueno);
        $('#sede').val(activo[0].sede);
        $('#fcompra').val(activo[0].fcompra);
        $('#responsable').val(activo[0].responsable);
        $('#proveedor').val(activo[0].proveedor);
        $('#estado').val(activo[0].estado);
        $('#costo').val(activo[0].costo);
        $('#procesador').val(activo[0].procesador);
        $('#dicoduro').val(activo[0].disco);
        $('#memoria').val(activo[0].ram);
        $('#ip').val(activo[0].ip);
        $('#mac').val(activo[0].mac);
        $('#fm').val(activo[0].fmantenimiento);
        $('#tipo2').val(activo[0].tipo);
        $('#img').html(activo[0].imagen);
        $('#pulgadas').html(activo[0].pulgadas);
      }
    
    }
  });
}


function cargarimagen(){
  var codigo=$('#qrcode');
  var file_data = $('#foto').prop('files')[0];   
  var form_data = new FormData();                  
  form_data.append('file', file_data);
  form_data.append('codigo', codigo);
  console.log(form_data);
  $.ajax({
    url: 'controller/controllerFile.php', // point to server-side PHP script 
    dataType: 'text',  // what to expect back from the PHP script, if anything
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,                         
    type: 'post',
    beforeSend: function(){
      $('#load').show();
    },
    success: function(res){
      $('#load').hide();
      if(res =="error_1"){
        swal('Error', 'Seleccionar una imagen', 'warning');
      }else{       
        swal('Info', 'Imagen Subida', 'success');
        window.location.href ="index.php?opt=lectura" ;
      }        
    }
 });
}
function registrarEquipo(){    
  codigo=$('#qrcode').val();
  if($('#tipo').val()!=""){  
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
        dependencia:$('#dep').val(),
        dueno:$('#duenio').val(),
        sede:$('#sede').val(),
        fcompra:$('#fcompra').val(),
        responsable:$('#responsable').val(),
        proveedor:$('#proveedor').val(),
        estado:$('#estado').val(),
        costo:$('#costo').val()
      },    
      success: function(res){
          if(res=="insert"){
            swal('Info', 'Datos Insertados', 'success'); 
            generarForm(2);       
          }else if(res=="update"){
            swal('Info', 'Datos Actualizado', 'success');    
          }

      }
    });
  }else{
    swal('Alvertencia', 'Seleccione un Tipo de equipo', 'warning');        
  }
}
function tablaActivos(){ 
  $.ajax({
    method: 'POST',
    url: 'controller/equiposController.php',
    data:{      
      op:'6'
    },   
    success: function(res){
        console.log(res);
        $('#tabla').html(res);
     }
  });
}

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
        //$('#d4').show(1800);
      }
    }
  });
} 
function ConsultarEquipoBoton(){ 
  codigo=$('#qrcode').val();  
  if(codigo != ""){
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
        if(res =='1000'){        
          $('#d1').show(1200);              
        }else{
          $('#d2').show(1400); 
          $('#d3').show(1600);
          $('#d4').show(1800);
        }
      }
    });
  }else{
    swal('Alvertencia', 'Debe Leer o Escribir un codigo', 'warning');
  }
}   

//Valida el codigo del equipo
function validarEquipo(t){
  codigo=$('#qrcode').val();
  $.ajax({
    method: 'POST',
    url: 'controller/equiposController.php',
    data:{
      eq:codigo,
      op:'2'
    },    
    success: function(res){       
      if(res == 'Error_2'){
        swal('Alvertencia', 'Debe registrar los datos generales', 'warning');
        generarForm(1);
      }else{ 
      if(t==2){
        generarForm(2);
      }
      if(t==3){
        generarForm(3);
      }
    }
    }
  });
}    
function selectEquipo(){ 
  var tipo= $('#dependencia').val();
  console.log(tipo);
  $.ajax({
    method: 'POST',
    url: 'controller/equiposController.php',
    data:{     
      op:'4',
      tipo:tipo
    },    
    success: function(res){        
      $('#t').html(res);
      //console.log(res);

    }
  });
}   

function registraEspesifico(){ 
 
  $.ajax({
    method: 'POST',
    url: 'controller/espesificosController.php',
    data:{     
      op:'4',
      nombre:$('#tipo').val(),
      codigo:$('#qrcode').val(),
      procesador:$('#procesador').val(),
      dicoduro:$('#dicoduro').val(),
      memoria:$('#memoria').val(),
      ip:$('#ip').val(),
      mac:$('#mac').val(),
      tipo:$('#tipo2').val(),
      fm:$('#fm').val(),
      pulgadas:$('#pulgadas').val(),
      referenca:$('#referenca').val(),
      rpm:$('#rpm').val(),
      ntubos:$('#ntubos').val(),
      ncasete:$('#ncasete').val(),
      ncanastillas:$('#ncanastillas').val(),
      capacidad:$('#capacidad').val(),
      tmax:$('#tmax').val(),
      tmin:$('#tmin').val(),
      tipooculares:$('#tipooculares').val(),
      tipoluz:$('#tipoluz').val(),
      ncanales:$('#ncanales').val(),
      referencia:$('#referencia').val(),
      resolucion:$('#resolucion').val(),
      kva:$('#kva').val(),
      voltaje:$('#voltaje').val(),
      nrou:$('#nrou').val()
    },    
    success: function(res){ 
      //console.log(res);
      if(res=='success'){
        swal('Informacion','Datos Guardados','success');
        generarForm(3);
      }else{
         console.log(res);
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
      <a class="nav-link active" href="#" onclick="generarForm(1);"><i class="fa fa-address-card" aria-hidden="true"></i></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" onclick="validarEquipo(2)"><i class="fa fa-list-ol" aria-hidden="true"></i></a>
    </li> 
    <li class="nav-item">
    <a class="nav-link" href="#" onclick="validarEquipo(3)"><i class="fa fa-camera" aria-hidden="true"></i></a>
   </li> 

  </ul>  
  <input type="text" id="descripcion" name="descripcion" class="form-control form-control-sm" placeholder="•	Descripción">
  <input type="text" id="serial" name="serial" class="form-control form-control-sm" placeholder="•	Serial ">
  <input type="text" id="marca" name="marca" class="form-control form-control-sm" placeholder="•	Marca">
  <input type="text" id="modelo" name="modelo" class="form-control form-control-sm" placeholder="•	Modelo">
  <input type="text" id="dep" name="dependencia" class="form-control form-control-sm" placeholder="•	Dependencia">
  <div id="dueno"></div>
  <select name="sede" id="sede" class="custom-select custom-select-sm">
  <option selected>.::Sede::.</option>
  <option value="bocagrande">Bocagrande</option>
  <option value="ejecutivos">Ejecutivos</option>
  <option value="amberes">Amberes</option>
   </select>
   <div class="input-group">
   <div class="input-group-prepend">
     <span class="input-group-text" id="basic-addon1">F.Compra</span>
   </div>
   <input type="date" id="fcompra" name="fcompra" class="form-control">   
 </div>
  <input type="text" id="responsable" name="responsable" class="form-control form-control-sm" placeholder="•	Responsable">
  <select name="estado" id="estado" class="custom-select custom-select-sm">
  <option selected>.::Estado::.</option>
  <option value="bueno">En condicion</option>
  <option value="malo">En No condicion</option>  
   </select>
  <input type="text" id="costo" name="costo" class="form-control form-control-sm" placeholder="•	Costo">
  <div id="select">
  </div>  
   <div class="form-group">
        <button class="btn btn-success btn-block mt-3" onclick="registrarEquipo()">Ingresar</button>
     </div>
  </div>  
  `;

generales=
`<div class="container m-2">
 <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class="nav-link " href="#" onclick="generarForm(1);"><i class="fa fa-address-card" aria-hidden="true"></i></a>
    </li>
    <li class="nav-item">
      <a class="nav-link active" href="#" onclick="validarEquipo(2)"><i class="fa fa-list-ol" aria-hidden="true"></i></a>
    </li> 
    <li class="nav-item">
     <a class="nav-link" href="#" onclick="validarEquipo(3)"><i class="fa fa-camera" aria-hidden="true"></i></a>
  </li>
</ul>
</div>`;

photo=`
<div class="container m-2">
<ul class="nav nav-tabs">
  <li class="nav-item">
  <a class="nav-link " href="#" onclick="generarForm(1);"><i class="fa fa-address-card" aria-hidden="true"></i></a>
  </li>
  <li class="nav-item">
  <a class="nav-link" href="#" onclick="validarEquipo(2)"><i class="fa fa-list-ol" aria-hidden="true"></i></a>
  </li> 
  <li class="nav-item">
  <a class="nav-link active" href="#" onclick="validarEquipo(3)"><i class="fa fa-camera" aria-hidden="true"></i></a>
  </li>
</ul>
</div>
    <div class="custom-file mt-2 mb-2">
    <input type="file" name="foto" id="foto" class="custom-file-input custom-file-input-sm mb-2" id="customFile">
    <label class="custom-file-label" for="customFile" id="img">Imagen</label>
    </div>
    <div class="form-group">
      <botton class="btn btn-success btn-block" onclick="cargarimagen()" ><i class="fa fa-upload" aria-hidden="true"></i> Subir</botton>
    </div>
`;
  if (opt==1) {
    if($('#tipo').val()!=""){
    $('#form').html(espesificos);
    selectProveedor();
    selectDueno();
    consultarActivo()
    }else{
      swal('Error', 'Debe Seleccionar Un Producto', 'warning');
    }
  }else if(opt==2){
    if($('#tipo').val()!=""){
      formularios();
      consultarActivo()
    }
  }else if(opt==3){
    if($('#tipo').val()!=""){
      $('#form').html(photo);
      consultarActivo()
    }
  }else{
    selectProveedor();
    selectDueno();
    $('#form').html(espesificos);
  }

}



function MostrarBusqueda(){
  $("#busqueda").show();
  $("#mcodigo").hide();
}
function OcultarBusqueda(){
  $("#busqueda").hide();
  $("#mcodigo").show();
}