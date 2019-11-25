<?php
session_start();
@$codigo=$_SESSION['cod'];

require_once('../model/equipo.php');      
$equipo = new Equipo();

if ( @$_FILES['file']['name']==null ) {
    echo 'error_1';
}
else {
    move_uploaded_file($_FILES['file']['tmp_name'], '../file/' . $_FILES['file']['name']);
    $imagen=$_FILES['file']['name'];
    echo "success";
    $equipo->UpdateImg($imagen,$codigo);    
}



?>