<script>
  $( document ).ready(function() {
    MostrarBusqueda();
  });
</script>
<div class="container p-4"> 
        <!-- <div class="form-group"> 
            <button id="btqr" class="btn btn-success btn-block" onclick="IniciarCamara()"><span ><i class='fas fa-qrcode ml-2'  style='font-size:20px'></i></span>  Leer Codigo</button>               
        </div>   -->
        <div class="row" id="load" hidden="hidden">
                <div class="col-xs-4 col-xs-offset-4 col-md-2 col-md-offset-5">
                  <img src="../img/load.gif" width="100%" alt="">
                </div>
                <div class="col-xs-12 center text-accent">
                  <span>Validando información...</span>
                </div>
              </div>      
        
        <div class="form-group">     
            <video id="preview" style="width: 80%; height: 50%; margin-left: 10%;"></video>       
        </div>
        <div class="form-group">
          <a href="index.php?opt=equipos" class="btn btn-warning btn-block" id="d1"> Registrar Activo</a>
        </div>
        <div class="form-group">
          <a href="index.php?opt=consultaequipos" class="btn btn-warning btn-block" id="d2"> Consultar</a>
        </div>
        <div class="form-group">
          <a href="index.php?opt=actualizar" class="btn btn-warning btn-block" id="d3"> Actualizar</a>
        </div>
        <div class="form-group">
          <a href="" class="btn btn-warning btn-block" id="d4"> Dato 4</a>
        </div>
    </div>