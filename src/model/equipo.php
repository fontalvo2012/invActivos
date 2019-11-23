<?php

  # Incluimos la clase conexion para poder heredar los metodos de ella.
  require_once('conexion.php');


  class Equipo extends Conexion
  {
    public function consultarEquipo($codigo)
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

    public function registroUsuario($name, $email, $clave)    {
      parent::conectar();
      $name  = parent::filtrar($name);
      $email = parent::filtrar($email);
      $clave = parent::filtrar($clave);
      // validar que el correo no exito
      $verificarCorreo = parent::verificarRegistros('select id from usuarios where email="'.$email.'" ');
      if($verificarCorreo > 0){
        echo 'error_3';
      }else{
        parent::query('insert into usuarios(nombre, email, clave, cargo) values("'.$name.'", "'.$email.'", MD5("'.$clave.'"), 2)');
        session_start();
        $_SESSION['nombre'] = $name;
        $_SESSION['cargo']  = 2;
        echo 'index.php';

      }
      parent::cerrar();
    }

  }


?>
