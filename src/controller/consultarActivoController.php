<?php 
    require_once('../model/equipo.php'); 
         
    $equipo = new Equipo();
    $codigo=$_POST['codigo'];
    $equipo->consultarJsonCodigo($codigo);

    
    


?>