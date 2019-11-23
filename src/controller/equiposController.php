<?php
  $codigo = $_POST['eq'];
  session_start();
  $_SESSION['cod']=$codigo;


  if(empty($codigo))
  {
    echo 'error_1'; 
  }else{      
        require_once('../model/equipo.php');      
        $equipo = new Equipo();
        $equipo -> consultarEquipo($codigo);
  }




?>
