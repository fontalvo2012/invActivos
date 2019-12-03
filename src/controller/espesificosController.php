<?php 
    @$procesador=$_POST['procesador'];
    @$dicoduro=$_POST['dicoduro'];
    @$memoria=$_POST['memoria'];
    @$ip=$_POST['ip'];
    @$mac=$_POST['mac'];
    @$nombre=$_POST['nombre'];
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

    switch ($nombre) {
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
        case 'CENTRIFUGA':
            $sql="UPDATE activos SET rpm =$rpm,nrotubos=$ntubos,tipo='$tipo',fmantenimiento='$fm' WHERE codigo='$codigo'";
            $equipo->ingresarActivo($sql);           
            echo 'success';
            break;
        case 'EQUIPO DE OSCILACION':
                $sql="UPDATE activos 
                    SET rpm =$rpm,
                    nrotubos=$ntubos,                   
                    fmantenimiento='$fm' 
                    WHERE codigo='$codigo'";
                $equipo->ingresarActivo($sql);           
                echo 'success';
            break;
        case 'PROCESADOR DE TEJIDOS':
                $sql="UPDATE activos 
                    SET nrocasette =$ncasete,
                    nrocanastillas=$ncanastillas,                   
                    fmantenimiento='$fm' 
                    WHERE codigo='$codigo'";
                $equipo->ingresarActivo($sql);           
                echo 'success';
            break;
        case 'PIPETAS':
            $sql="UPDATE activos 
                SET capacidad=$capacidad,                 
                fmantenimiento='$fm' 
                WHERE codigo='$codigo'";
            $equipo->ingresarActivo($sql);           
            echo 'success';
            break;     
        case 'BALANZAS':
                $sql="UPDATE activos 
                    SET capacidad=$capacidad,                 
                    fmantenimiento='$fm' 
                    WHERE codigo='$codigo'";
                $equipo->ingresarActivo($sql);           
                echo 'success';
            break;
        case 'INCUBADORA':
                $sql="UPDATE activos 
                    SET tempmax=$tmax,                 
                        tempmin=$tmin,
                        capacidad=$capacidad,
                        fmantenimiento='$fm'  
                    WHERE codigo='$codigo'";
                $equipo->ingresarActivo($sql);           
                echo 'success';
            break;   
        case 'HORNO':
                $sql="UPDATE activos 
                    SET tempmax=$tmax,                 
                        tempmin=$tmin,
                        capacidad=$capacidad,
                        fmantenimiento='$fm'  
                    WHERE codigo='$codigo'";
                $equipo->ingresarActivo($sql);           
                echo 'success';
            break;  
        case 'CRIOSTATO':
                $sql="UPDATE activos 
                    SET tempmax=$tmax,                 
                        tempmin=$tmin,
                        capacidad=$capacidad,
                        fmantenimiento='$fm'  
                    WHERE codigo='$codigo'";
                $equipo->ingresarActivo($sql);           
                echo 'success';
            break;
        case 'MICROSCOPIO':
            $sql="UPDATE activos 
                SET tipoluz='$tipoluz',                 
                    tipooculares='$tipooculares',
                    fmantenimiento='$fm'                     
                WHERE codigo='$codigo'";
            $equipo->ingresarActivo($sql);           
            echo 'success';
            
        break; 
        default:
            $sql="UPDATE activos 
            SET fmantenimiento='$fm'
            WHERE codigo='$codigo'";
            $equipo->ingresarActivo($sql);
            echo 'success';
            break;
    }


?>