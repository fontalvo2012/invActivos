<?php
session_start();
@$codigo=$_SESSION['cod'];

require_once('../model/equipo.php');      
$equipo = new Equipo();

if ( 0 < $_FILES['file']['error'] ) {
    echo 'Error: ' . $_FILES['file']['error'] . '<br>';
}
else {
    move_uploaded_file($_FILES['file']['tmp_name'], '../file/' . $_FILES['file']['name']);
    $imagen=$_FILES['file']['name'];

    $equipo->UpdateImg($imagen,$codigo);
    
}



?>