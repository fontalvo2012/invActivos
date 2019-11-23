<?php 

    $tipo=$_POST['tipo'];
    $CPU="        
        <div class='container'>
        <div class='form-group'>
            <input type='text' id='procesador' class='form-control form-control-sm'  placeholder='Proceosador'>
            <input type='text' id='Memoria' class='form-control form-control-sm' placeholder='Memoria'>
            <input type='text' id='Disco' class='form-control form-control-sm' placeholder='Disco Duro'>     
        </div>
        </div>
    ";

    switch ($tipo) {
        case 'CPU':
                echo $CPU;
            break;
        
        default:
            # code...
            break;
    }



?>
