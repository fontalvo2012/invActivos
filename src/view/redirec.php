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
        case 'actualizar':
                include('view/equipos/actualizar.php');
                break;
        case 'proveedor':
            include('view/provedores/ingreso.php');
            break;      
        case 'consultaequipos':
                include('view/equipos/consultasEquipos.php');
                break; 
        default:
            # code...
            break;
    }
    
}


?>