<?php
  require_once('conexion.php');
  class Equipo extends Conexion
  {
    public function consultarEquipo($codigo)
    {
      parent::conectar();
      $consulta = 'select * from activos where Codigo="'.$codigo.'"';
      $verificar_equipos = parent::verificarRegistros($consulta);
      if($verificar_equipos > 0){
        $equipo = parent::consultaArreglo($consulta);     
      }else{
        echo '1000';
      }
      parent::cerrar();
    }

    public function consultarCodigo($codigo){
      parent::conectar();
      $consulta = 'select * from activos where Codigo="'.$codigo.'"';
      $verificar_equipos = parent::verificarRegistros($consulta);
      if($verificar_equipos > 0){
        $equipo = parent::consultaArreglo($consulta);     
      }else{
        echo 'Error_2';
      }
     parent::cerrar();
    }

    public function consultarJson(){

      $mysqli = new mysqli('localhost', 'root', '', 'activosinv');
      $myArray = array();
        if ($result = $mysqli->query("SELECT * FROM activos WHERE codigo='ES-0003'")) {          
          while($row = $result->fetch_array(MYSQL_ASSOC)) {
            $myArray[] = $row;
          }
            echo json_encode($myArray);
        }

        $result->close();
        $mysqli->close();
      }


    public function consultarJsonCodigo($codigo){

      parent::conectar();
      $consulta = 'select * from activos where Codigo="'.$codigo.'"';
      $verificar_equipos = parent::verificarRegistros($consulta);
      if($verificar_equipos > 0){
       $equipo=parent::consultaArreglo($consulta);
       $array[]=array(
         "codigo"=>$equipo['Codigo'],
         "nombre"=>$equipo['Nombre'],
         "serial"=>$equipo['Serial'],
         "imagen"=>$equipo['Imagen'],
         "descripcion"=>$equipo['Descripcion'],
         "marca"=>$equipo['Marca'],
         "model"=>$equipo['Modelo'],
         "dependencia"=>$equipo['Dependencia'],
         "pertenencia"=>$equipo['Pertenencia'],
         "dueno"=>$equipo['Dueno'],
         "sede"=>$equipo['Sede'],
         "fcompra"=>$equipo['fechacompra'],
         "responsable"=>$equipo['Responsable'],
         "estado"=>$equipo['Estado'],
         "proveedor"=>$equipo['Proveedor'],
         "ram"=>$equipo['MemoriaRAM'],
         "procesador"=>$equipo['Procesador'],
         "ip"=>$equipo['DireccionIP'],
         "disco"=>$equipo['DiscoDuro'],
         "pulgadas"=>$equipo['pulgadas'],
         "recipiente"=>$equipo['recipiente'],
         "canalesdvr"=>$equipo['canales'],
         "resolucion"=>$equipo['resolucion'],
         "puertos"=>$equipo['puertosethernet'],
         "velocidad"=>$equipo['velocidad'],
         "kva"=>$equipo['kva'],
         "voltaje"=>$equipo['voltaje'],
         "rpm"=>$equipo['rpm'],
         "nrotubos"=>$equipo['nrotubos'],
         "nroprueabasporhora"=>$equipo['nropruebasporhora'],
         "tempmax"=>$equipo['tempmax'],
         "tempmin"=>$equipo['tempmin'],
         "capacidad"=>$equipo['capacidad'],
         "nrocasette"=>$equipo['nrocasette'],
         "nrocanastillas"=>$equipo['nrocanastillas'],
         "especifica"=>$equipo['especifica'],
         "ambiental"=>$equipo['ambiental'],
         "btu"=>$equipo['btu'],
         "librajes"=>$equipo['librajes'],
         "medidas"=>$equipo['medidas'],
         "material"=>$equipo['material'],
         "compartimientos"=>$equipo['compartimientos'],
         "peldanos"=>$equipo['peldanos'],
         "tipo"=>$equipo['tipo'],
         "creacion"=>$equipo['creacion'],
         "fmantenimiento"=>$equipo['fmantenimiento'],
         "costo"=>$equipo['costo'],
         "mac"=>$equipo['DireccionMAC'],
         "pulgadas"=>$equipo['pulgadas']

       );
        echo  json_encode($array);     
      }else{
        echo 'Error_2';
      }
     parent::cerrar();
    }

    public function registroEquipo($nombre,$codigo,$descripcion,$serial,$marca,$modelo,$dependencia,$dueno,$sede,$fcompra,$responsable,$proveedor,$estado,$costo){
      parent::conectar();
      $nombre=parent::filtrar($nombre);
      $codigo=parent::filtrar($codigo);
      $descripcion=parent::filtrar($descripcion);
      $serial=parent::filtrar($serial);
      $marca=parent::filtrar($marca);
      $modelo=parent::filtrar($modelo);
      $dependencia=parent::filtrar($dependencia);
      $dueno=parent::filtrar($dueno);
      $sede=parent::filtrar($sede);
      $fcompra=parent::filtrar($fcompra);
      $responsable=parent::filtrar($responsable);
      $proveedor=parent::filtrar($proveedor);
      $estado=parent::filtrar($estado);
      $costo=parent::filtrar($costo);

      $sql='insert into activos(Codigo,Nombre,Imagen,Descripcion,Serial,Marca,Modelo,Dependencia,Dueno,Sede,fechacompra,Responsable,Estado,Proveedor,costo) 
      values("'.$codigo.'","'.$nombre.'","default.png","'.$descripcion.'","'.$serial.'","'.$marca.'","'.$modelo.'","'.$dependencia.'","'.$dueno.'","'.$sede.'","'.$fcompra.'","'.$responsable.'","'.$estado.'","'.$proveedor.'","'.$costo.'")';
      $verificarCodigo = parent::verificarRegistros('select id from activos where codigo="'.$codigo.'"');

      if($verificarCodigo > 0){   
          $sql="UPDATE activos SET 
          nombre='$nombre',
          Descripcion='$descripcion',
          Serial='$serial',
          Marca='$marca',
          Modelo='$modelo',
          Dependencia='$dependencia',
          Dueno='$dueno',
          Sede='$sede',
          fechacompra='$fcompra',
          Responsable='$responsable',
          Estado='$estado',
          Proveedor='$proveedor',
          costo='$costo'
          WHERE codigo='$codigo'";
       parent::query($sql); 
       echo"update";

      }else{
        parent::query($sql); 
        echo"insert";       
      }
      parent::cerrar();
    }



    public function ingresarActivo($sql){
      parent::conectar();
      parent::query($sql);
      parent::cerrar();
    }
  public function selectEquipos($tipo)
  {
    parent::conectar();
    $consulta = 'select id,nombre from equipos WHERE tipo="'.$tipo.'" ORDER BY nombre';
    $select = parent::selectItem($consulta,"tipo","generarForm(4)");
    echo $select;      
    parent::cerrar();
  }
  public function UpdateImg($imagen,$codigo){
    parent::conectar();
    $sql="UPDATE activos SET Imagen='".$imagen."' WHERE Codigo='".$codigo."'";
    parent::query($sql); 
    echo $sql;     
    parent::cerrar();
  }



  }



?>
