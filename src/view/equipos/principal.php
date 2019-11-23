<div class="alert alert-success">
  <strong>Registro de Activos</strong> 
</div>
<div class="container " > 
<select name="activo" id="tipo" class="custom-select custom-select-sm">
<option value="">.:Seleccione:.</option>
    <option value="CPU">CPU</option>
     </select>
     
</div>
<div id="form" class="container m-2">
  <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#" onclick="generarForm(1)">Generales</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"  onclick="validarEquipo()">Espesificos</a>
      </li> 
    </ul>

    <div class="custom-file mt-2 mb-2">
    <input type="file" class="custom-file-input custom-file-input-sm mb-2" id="customFile">
    <label class="custom-file-label" for="customFile">Imagen</label>
    </div>
    <input type="text" id="" name="" class="form-control form-control-sm" placeholder="•	Descripción">
    <input type="text" id="" name="" class="form-control form-control-sm" placeholder="•	Serial ">
    <input type="text" id="" name="" class="form-control form-control-sm" placeholder="•	Marca">
    <input type="text" id="" name="" class="form-control form-control-sm" placeholder="•	Modelo">
    <input type="text" id="" name="" class="form-control form-control-sm" placeholder="•	Dependencia">
    <input type="text" id="" name="" class="form-control form-control-sm" placeholder="•	Dueño  ">
    <select name="cars" class="custom-select custom-select-sm">
    <option selected>Sede</option>
    <option value="volvo">Volvo</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
     </select>
    <input type="date" id="" name="" class="form-control form-control-sm">
    <input type="text" id="" name="" class="form-control form-control-sm" placeholder="•	Responsable">
    <input type="text" id="" name="" class="form-control form-control-sm" placeholder="•	Estado">
    <input type="text" id="" name="" class="form-control form-control-sm" placeholder="•	Costo">
    <select name="cars" class="custom-select custom-select-sm">
    <option selected>Proveedor</option>
    <option value="volvo">Volvo</option>
    <option value="fiat">Fiat</option>
    <option value="audi">Audi</option>
     </select>
     <div class="form-group">
        <button class="btn btn-success btn-block mt-3">Ingresar</button>
     </div>
</div>


