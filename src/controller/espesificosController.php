<?php 
    @$procesador=$_POST['procesador'];
    @$dicoduro=$_POST['dicoduro'];
    @$memoria=$_POST['memoria'];
    @$ip=$_POST['ip'];
    @$mac=$_POST['mac'];
    @$tipo=$_POST['tipo'];
    @$fm=$_POST['fm'];
    @$pulgadas=$_POST['pulgadas'];
    @$referenca=$_POST['referenca'];
    @$rpm=$_POST['rpm'];
    @$ntubos=$_POST['ntubos'];
    @$ncasete=$_POST['ncasete'];
    @$ncanastillas=$_POST['ncanastillas'];
    @$capacidad=$_POST['capacidad'];
    @$tmax=$_POST['tmax'];
    @$tmin=$_POST['tmin'];
    @$tipooculares=$_POST['tipooculares'];
    @$tipoluz=$_POST['tipoluz'];
    @$tipo=$_POST['tipo'];
    @$codigo=$_POST['codigo'];
    require_once('../model/equipo.php');      
    $equipo = new Equipo();

    switch ($tipo) {
        case 'CPU':
            $sql="UPDATE activos 
            SET 
            procesador='$procesador',
            MemoriaRAM='$memoria',
            DiscoDuro='$dicoduro',
            DireccionIP='$ip',
            DireccionMAC='$mac',
            tipo='$tipo',
            fmantenimiento='$fm'
            WHERE codigo='$codigo'";
            $equipo->ingresarActivo($sql);
            echo 'success';
            break;        
        default:
            # code...
            break;
    }


?>