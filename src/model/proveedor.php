<?php

  # Incluimos la clase conexion para poder heredar los metodos de ella.
  require_once('conexion.php');


  class Proveedor extends Conexion
  {
    public function consultarProveedor($codigo)
    {
      parent::conectar();
      $consulta = 'select * from activos where Codigo="'.$codigo.'"';
      $verificar_equipos = parent::verificarRegistros($consulta);
      if($verificar_equipos > 0){
        $equipo = parent::consultaArreglo($consulta);     
      }else{
        echo '1000';
      }
      parent::cerrar();
    }

    public function select()
    {
      parent::conectar();
      $consulta = 'select NIT,nombre from proveedores';
      $select = parent::selectProveedor($consulta);
      echo $select;      
      parent::cerrar();
    }

    public function registroProveedor($nit, $nombre, $direccion,$telefono,$email)    {
      parent::conectar();
      $nit  = parent::filtrar($nit);
      $nombre = parent::filtrar($nombre);
      $direccion = parent::filtrar($direccion);
      $telefono = parent::filtrar($telefono);
      $email = parent::filtrar($email);


      // validar que el correo no exito
      $verificarCorreo = parent::verificarRegistros('select NIT from proveedores where NIT="'.$nit.'" ');
      if($verificarCorreo > 0){
        echo 'error_3';
      }else{
       // $sql='insert into proveedores(NIT, nombre, direccion, telefono,email) values("'.$nit.'", "'.$nombre.'", "'.$direccion.'", "'.$telefono.'", "'.$email.'"';
        parent::query('insert into proveedores(NIT, nombre, direccion, telefono,email) values("'.$nit.'", "'.$nombre.'", "'.$direccion.'", "'.$telefono.'", "'.$email.'")');        
        echo 'index.php?opt=proveedor';
        //echo $sql;
      }

      parent::cerrar();
    }

  }


?>
