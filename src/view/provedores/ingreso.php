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
  <div class="container">
      <div class="form-group">
          <input type="text" id="nit" name="nit" placeholder="Nit">
      </div>
      <div class="form-group">
          <input type="text" id="nombre" name="nombre" placeholder="Nombre">
      </div>
      <div class="form-group">
          <input type="text" id="direccion" name="direccion" placeholder="Direccion">       
      </div>
      <div class="form-group">
          <input type="text" id="email" name="email" placeholder="Email">
      </div>
      <div class="form-group">
          <input type="text" id="telefono" name="telefono" placeholder="Telefono">
      </div>    
      <div class="form-group">
        <button class="btn btn-success btn-block" id="regProveedor" onclick="registrarProveedor()">Ingresar</button>
      </div>
  </div>
  </fieldset>
</form>