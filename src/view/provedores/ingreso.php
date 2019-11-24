<div class="alert alert-success">
  <strong>Registro de Proveedores</strong> 
</div>
<div class="row" id="load" hidden="hidden">
    <div class="col-xs-4 col-xs-offset-4 col-md-2 col-md-offset-5">
      <img src="../img/load.gif" width="100%" alt="">
    </div>
    <div class="col-xs-12 center text-accent">
      <span>Validando información...</span>
    </div>
</div>   
<form id="formproveedor"> 
<fieldset>
  <input type="hidden" value="registrar" name="opcion">
  <div class="container">
      <div class="form-group">
          <input type="text" id="nit" class='form-control form-control-sm' name="nit" placeholder="Nit">
      </div>
      <div class="form-group">
          <input type="text" id="nombre" class='form-control form-control-sm' name="nombre" placeholder="Nombre">
      </div>
      <div class="form-group">
          <input type="text" id="direccion" class='form-control form-control-sm' name="direccion" placeholder="Direccion">       
      </div>
      <div class="form-group">
          <input type="text" id="email" class='form-control form-control-sm' name="email" placeholder="Email">
      </div>
      <div class="form-group">
          <input type="text" id="telefono" class='form-control form-control-sm' name="telefono" placeholder="Telefono">
      </div>    
      <div class="form-group">
        <button class="btn btn-success btn-block" class='form-control form-control-sm' id="regProveedor" onclick="registrarProveedor()">Ingresar</button>
      </div>
      
      
  </div>
  </fieldset>
</form>

<button onclick='selectProveedor()'>probar</button>