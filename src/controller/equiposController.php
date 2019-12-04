<?php
  @$codigo = $_POST['eq'];
  @$opcion=$_POST['op'];
  @$nombre=$_POST['nombre'];
  @$tipo=$_POST['tipo'];
  session_start();
  $_SESSION['cod']=$codigo;
  require_once('../model/equipo.php');      
  $equipo = new Equipo();

  switch ($opcion) {
    case '1':
      if(empty($codigo)){
       echo 'error_1'; 
      }else{
        $equipo -> consultarEquipo($codigo);
      }      
    break;
    case '2':
      $equipo -> consultarCodigo($codigo);
      break;
    case '3':
        $descripcion=$_POST['descripcion'];        
        $serial=$_POST['serial'];
        $marca=$_POST['marca'];
        $modelo=$_POST['modelo'];
        $dependencia=$_POST['dependencia'];
        $dueno=$_POST['dueno'];
        $sede=$_POST['sede'];
        $fcompra=$_POST['fcompra'];
        $responsable=$_POST['responsable'];
        $proveedor=$_POST['proveedor'];
        $estado=$_POST['estado'];
        $costo=$_POST['costo'];
        $equipo->registroEquipo($nombre,$codigo,$descripcion,$serial,$marca,$modelo,$dependencia,$dueno,$sede,$fcompra,$responsable,$proveedor,$estado,$costo);       
        break;
    case '4':
      $equipo->selectEquipos($tipo);     
      break;
    case '5':
        $descripcion=$_POST['descripcion'];        
        $serial=$_POST['serial'];
        $marca=$_POST['marca'];
        $modelo=$_POST['modelo'];
        $dependencia=$_POST['dependencia'];
        $dueno=$_POST['dueno'];
        $sede=$_POST['sede'];
        $fcompra=$_POST['fcompra'];
        $responsable=$_POST['responsable'];
        $proveedor=$_POST['proveedor'];
        $estado=$_POST['estado'];
        $costo=$_POST['costo'];
        $equipo->updateEquipo($nombre,$codigo,$descripcion,$serial,$marca,$modelo,$dependencia,$dueno,$sede,$fcompra,$responsable,$proveedor,$estado,$costo);       
        break; 
    case '6':
        $equipo->crarTabla();      
      break;       
    default:
      echo "Registro default";
      break;
  }
 




?>
