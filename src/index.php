<!DOCTYPE html>
<html>
  <head>
    <title>InvActivos</title>
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="js/instascan.min.js"></script>
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

   
    <link rel="stylesheet" href="../css/font-awesome.min.css"> 
    <link rel="stylesheet" href="../css/sweetalert.css"> 
    <link rel="stylesheet" href="../css/style.css">
    <script src="js/formularios.js"></script>
    <script src="js/funciones.js"></script>
    
  </head>

  <body >
    <?php 
      session_start();      
      include('view/redirec.php');
      include('view/encabezados/menu.php');
    ?>
      <div class="alert alert-primary m-2">
        <div class="row" id="busqueda">
          <div class="col ml-2 pr-0"><input type="text" id="qrcode" style="width:120px;" placeholder="Codigo" value="<?php echo @$_SESSION['cod']?>" class="form-control" name="qrcode"></div>
          <div class="col pl-2"><button class="btn btn-warning m-0" onclick="ConsultarEquipoBoton()"><i class="fa fa-search" aria-hidden="true"></i></button></div>
          <div class="col pl-0 pr-5" ><button class="btn btn-dark " onclick="IniciarCamara()"><span ><i class='fas fa-qrcode'  style='font-size:20px'></i></span></button></div>
        </div>

        </div>
        <div class="row ml-5" id="mcodigo">
          <div class="col"><h3>
          <?php
            if(isset($_SESSION['cod']))
            echo "Codigo:".@$_SESSION['cod']
          ?></h3></div>
        </div>

      </div>
      
    <?php 
     redirec(@$_GET['opt']);
    ?>


    <!-- SweetAlert js -->
    <script src="js/jquery.js"></script>  
    <script src="../js/sweetalert.min.js"></script>
    <!-- Js personalizado -->
  
  </body>
</html>