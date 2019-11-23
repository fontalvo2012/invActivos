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

      $sql='insert into activos(Codigo,Nombre,Descripcion,Serial,Marca,Modelo,Dependencia,Dueno,Sede,fechacompra,Responsable,Estado,Proveedor) 
      values("'.$codigo.'","'.$nombre.'","'.$descripcion.'","'.$serial.'","'.$marca.'","'.$modelo.'","'.$dependencia.'","'.$dueno.'","'.$sede.'","'.$fcompra.'","'.$responsable.'","'.$estado.'","'.$proveedor.'")';
      $verificarCodigo = parent::verificarRegistros('select id from activos where codigo="'.$codigo.'"');
      if($verificarCodigo > 0){
        echo 'error_3';
      }else{
        parent::query($sql);    
        
      }
      parent::cerrar();
    }

  }


?>
