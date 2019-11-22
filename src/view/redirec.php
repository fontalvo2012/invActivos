<?php 

function redirec($opt){

    switch ($opt) {

        case 'registro':
            include('view/usuarios/registro.php');
            break;

        case 'lectura':
            include('view/consultas/lectura.php');
            break;

        case 'equipos':
            include('view/equipos/principal.php');
            break;
        
        default:
            # code...
            break;
    }
    
}


?>