<?php

  @$op=$_POST['opcion'];
  @$nit   = $_POST['nit'];
  @$nombre  = $_POST['nombre'];
  @$direccion  = $_POST['direccion'];
  @$telefono = $_POST['telefono'];
  @$email = $_POST['email'];

    # Incluimos la clase usuario
    require_once('../model/proveedor.php');
    # Creamos un objeto de la clase usuario
    $proveedor = new Proveedor();

  switch ($op) {
    case 'registrar':
    if(empty($nit) || empty($nombre) || empty($direccion))
    {
    echo 'error_1'; // Un campo esta vacio y es obligatorio
    }else{     
        # Llamamos al metodo login para validar los datos en la base de datos
        $proveedor -> registroProveedor($nit, $nombre, $direccion,$telefono,$email);
    }
      break;
    case 'select':
      $proveedor ->select("proveedor");
      break;
    case 'dueno':
        $proveedor ->select("duenio");
        break;
    default:
      # code...
      break;
  }
  


?>
