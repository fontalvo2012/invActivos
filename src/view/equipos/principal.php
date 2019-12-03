<script>
  $( document ).ready(function() {
   $('#nombre').hide();
    
});
</script>
<div class="alert alert-success">
  <strong>Registro de Activos</strong> 
</div>
<div class="container mb-2">
<select name="activo" id="dependencia" onchange="selectEquipo()"  class="custom-select custom-select-sm">
    <option value="">.:Depedencia:.</option>
    <option value="sistemas">Sistemas</option>
    <option value="Biomedicos">Biomendicos</option>
    <option value="Mantenimiento">Mantenimiento</option>
  </select> 
</div>
<div class="container" id="t" >  
<select name="activo" id="tipo" class="custom-select custom-select-sm">
<option value="">.:Seleccione:.</option>
<option value="CPU">CPU</option>
</select>     
</div>
<div class="container mt-2">
<div id="nombre" class="form-control"></div>
</div>
<div id="form" class="container m-2">

  <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#" onclick="generarForm(1)"><i class="fa fa-address-card" aria-hidden="true"></i></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"  onclick="validarEquipo(2)"><i class="fa fa-list-ol" aria-hidden="true"></i></a>
      </li>
      <li class="nav-item">
    <a class="nav-link" href="#" onclick="validarEquipo(3)"><i class="fa fa-camera" aria-hidden="true"></i></a>
  </li>  
    </ul>
</div>

<div class="row" id="load" hidden="hidden">
  <div class="col-xs-4 col-xs-offset-4 col-md-2 col-md-offset-5">
    <img src="img/load.gif" width="100%" alt="">
  </div>
  <div class="col-xs-12 center text-accent">
    <span>Subiendo Foto...</span>
  </div>
</div>
