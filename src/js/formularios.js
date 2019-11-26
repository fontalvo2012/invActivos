function formularios(){
    var tipo=$('#tipo').val();
    var menu=` <div class="container m-2">
    <ul class="nav nav-tabs">
      <li class="nav-item">
      <a class="nav-link " href="#" onclick="generarForm(1)"><i class="fa fa-address-card" aria-hidden="true"></i></a>
      </li>
      <li class="nav-item">
      <a class="nav-link active" href="#" onclick="validarEquipo(2)"><i class="fa fa-list-ol" aria-hidden="true"></i></a>
      </li> 
      <li class="nav-item">
      <a class="nav-link" href="#" onclick="validarEquipo(3)"><i class="fa fa-camera" aria-hidden="true"></i></a>
      </li>
    </ul>
    </div>`;
    switch (tipo) {
        //EQUIPOS DE SISTEMAS
        case 'CPU':
            $('#form').html(menu+`
                <div class='container'>
                    <div class='form-group'>
                        <input type='text' id='procesador' class='form-control form-control-sm'  placeholder='Proceosador'>                       
                    </div>
                    <div class='form-group'>
                        <input type='text' id='dicoduro' class='form-control form-control-sm'  placeholder='Disco Duro'>                       
                    </div>
                    <div class='form-group'>
                        <input type='text' id='memoria' class='form-control form-control-sm'  placeholder='Memoria'>                       
                    </div>
                    <div class='form-group'>
                        <input type='text' id='ip' class='form-control form-control-sm'  placeholder='Direccion Ip'>                       
                    </div>
                    <div class='form-group'>
                        <input type='text' id='mac' class='form-control form-control-sm'  placeholder='Direccion Mac'>                       
                    </div>
                    <div class='form-group'>
                        <select id="tipo2" class='form-control form-control-sm' >
                            <option value="">::Seleccion tipo2::</option>
                            <option value="server">Server</option>
                            <option value="todo en uno">Todo En Uno</option>
                            <option value="portatil">Portatil </option>
                            <option value="torre">Torre</option>
                        </select>
                    </div>
                    <div class='form-group'>
                        <label>Siguiente Mantenimiento</label>
                        <input type='date' id='fm' class='form-control form-control-sm'>                       
                    </div> 
                    <div class="form-group">
                        <button class="btn btn-success btn-block" onclick="registraEspesifico()"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Guardar</button>
                    </div>
                </div>
            `);            
            break;
        case 'MONITOR':
                $('#form').html(menu+`
                <div class='container'>
                    <div class='form-group'>
                        <input type='number' id='pulgadas' class='form-control form-control-sm'  placeholder='Pulgadas'>                       
                    </div>                    
                    <div class="form-group">
                        <button class="btn btn-success btn-block"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Guardar</button>
                    </div>
                </div>
            `); 
            break;
        case 'IMPRESORA':
                $('#form').html(menu+`
                <div class='container'>
                <div class='form-group'>
                    <select id="tipo2" class='form-control form-control-sm' >
                        <option value="">::Seleccion impresora::</option>
                        <option value="tinta">Tinta</option>
                        <option value="toner en uno">Toner</option>
                        <option value="tiket">Ticket</option>
                        <option value="termica">Termica</option>
                    </select>
                </div>
                <div class='form-group'>
                    <input type='text' id='referenca' class='form-control form-control-sm'  placeholder='Ref Insumo'>                       
                </div>   
                <div class='form-group'>
                    <label>Siguiente Mantenimiento</label>
                    <input type='date' id='fm' class='form-control form-control-sm'>                       
                </div>                  
                    <div class="form-group">
                        <button class="btn btn-success btn-block"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Guardar</button>
                    </div>
                </div>
            `);           
            break;
            //BIOMEDICOS
        case 'CENTRIFUGA':
            $('#form').html(menu+` 
            <div class='container'>
                <div class='form-group'>                    
                    <input type='number' id='rpm' class='form-control form-control-sm' placeholder="Rpm">                       
                </div>
                <div class='form-group'>                    
                    <input type='number' id='ntubos' class='form-control form-control-sm' placeholder="Nro Tubos">                       
                </div>
                <div class='form-group'>                    
                    <select id="tipo2" class='form-control form-control-sm' >
                        <option value="">::tipo2 ::</option>
                        <option value="digital">Digital</option>
                        <option value="manual en uno">Manual</option>                       
                    </select>
                </div>
                <div class='form-group'>
                    <label>Siguiente Mantenimiento</label>
                    <input type='date' id='fm' class='form-control form-control-sm'>                       
                </div>                    
                <div class="form-group">
                    <button class="btn btn-success btn-block"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Guardar</button>
                </div>
            </div>`);
            break;
        case 'EQUIPO DE OSCILACION':
                $('#form').html(menu+` 
                <div class='container'>
                    <div class='form-group'>                    
                        <input type='number' id='rpm' class='form-control form-control-sm' placeholder="Rpm">                       
                    </div>
                    <div class='form-group'>                    
                        <input type='number' id='ntubos' class='form-control form-control-sm' placeholder="Nro Tubos">                       
                    </div>                 
                    <div class='form-group'>
                        <label>Siguiente Mantenimiento</label>
                        <input type='date' id='fm' class='form-control form-control-sm'>                       
                    </div>                    
                    <div class="form-group">
                        <button class="btn btn-success btn-block"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Guardar</button>
                    </div>
                </div>`);
            break;
        case 'PROCESADOR DE TEJIDOS':
            $('#form').html(menu+` 
                <div class='container'>
                    <div class='form-group'>                    
                        <input type='number' id='ncasete' placeholder="Nro Casette" class='form-control form-control-sm'>                       
                    </div> 
                    <div class='form-group'>                    
                        <input type='number' id='ncanastillas' placeholder="Nro Canastilla" class='form-control form-control-sm'>                       
                    </div> 
                    <div class='form-group'>
                        <label>Siguiente Mantenimiento</label>
                        <input type='date' id='fm' class='form-control form-control-sm'>                       
                    </div>                    
                    <div class="form-group">
                        <button class="btn btn-success btn-block"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Guardar</button>
                    </div>
                </div>`);
            break;
        case 'PIPETAS':
                $('#form').html(menu+` 
                <div class='container'>
                    <div class='form-group'>                       
                        <input type='number' id='capacidad' placeholder="Capacidad" class='form-control form-control-sm'>                       
                    </div> 
                    <div class='form-group'>
                        <label>Siguiente Mantenimiento</label>
                        <input type='date' id='fm' class='form-control form-control-sm'>                       
                    </div>                    
                    <div class="form-group">
                        <button class="btn btn-success btn-block"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Guardar</button>
                    </div>
                </div>`);
            break;
            case 'BALANZAS':
                    $('#form').html(menu+` 
                    <div class='container'>
                        <div class='form-group'>                       
                            <input type='number' id='capacidad' placeholder="Capacidad" class='form-control form-control-sm'>                       
                        </div> 
                        <div class='form-group'>
                            <label>Siguiente Mantenimiento</label>
                            <input type='date' id='fm' class='form-control form-control-sm'>                       
                        </div>                    
                        <div class="form-group">
                            <button class="btn btn-success btn-block"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Guardar</button>
                        </div>
                    </div>`);
                break;
        case 'INCUBADORA':
                $('#form').html(menu+` 
                <div class='container'>
                    <div class='form-group'>                       
                        <input type='number' id='tmax' placeholder="Temperatura Maxima" class='form-control form-control-sm'>                       
                    </div> 
                    <div class='form-group'>                       
                        <input type='number' id='tmin' placeholder="Temperatura Minima" class='form-control form-control-sm'>                       
                    </div>
                    <div class='form-group'>                       
                        <input type='number' id='capacidad' placeholder="Capacidad" class='form-control form-control-sm'>                       
                    </div> 
                    <div class='form-group'>
                        <label>Siguiente Mantenimiento</label>
                        <input type='date' id='fm' class='form-control form-control-sm'>                       
                    </div>                    
                    <div class="form-group">
                        <button class="btn btn-success btn-block"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Guardar</button>
                    </div>
                </div>`);
            break;
            case 'HORNO':
                    $('#form').html(menu+` 
                    <div class='container'>
                        <div class='form-group'>                       
                            <input type='number' id='tmax' placeholder="Temperatura Maxima" class='form-control form-control-sm'>                       
                        </div> 
                        <div class='form-group'>                       
                            <input type='number' id='tmin' placeholder="Temperatura Minima" class='form-control form-control-sm'>                       
                        </div>
                        <div class='form-group'>                       
                            <input type='number' id='capacidad' placeholder="Capacidad" class='form-control form-control-sm'>                       
                        </div> 
                        <div class='form-group'>
                            <label>Siguiente Mantenimiento</label>
                            <input type='date' id='fm' class='form-control form-control-sm'>                       
                        </div>                    
                        <div class="form-group">
                            <button class="btn btn-success btn-block"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Guardar</button>
                        </div>
                    </div>`);
                break;
            case 'CRIOSTATO':
                $('#form').html(menu+` 
                <div class='container'>
                    <div class='form-group'>                       
                        <input type='number' id='tmax' placeholder="Temperatura Maxima" class='form-control form-control-sm'>                       
                    </div> 
                    <div class='form-group'>                       
                        <input type='number' id='tmin' placeholder="Temperatura Minima" class='form-control form-control-sm'>                       
                    </div>
                    <div class='form-group'>                       
                        <input type='number' id='capacidad' placeholder="Capacidad" class='form-control form-control-sm'>                       
                    </div> 
                    <div class='form-group'>
                        <label>Siguiente Mantenimiento</label>
                        <input type='date' id='fm' class='form-control form-control-sm'>                       
                    </div>                    
                    <div class="form-group">
                        <button class="btn btn-success btn-block"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Guardar</button>
                    </div>
                </div>`);
            break;
        case'MICROSCOPIO':
                $('#form').html(menu+` 
                <div class='container'>
                    <div class='form-group'>
                        <select id="tipo2oculares" class='form-control form-control-sm' >
                            <option value="">::tipo2 Oculares ::</option>
                            <option value="fijos">Fijos</option>
                            <option value="movibles">Movibles</option>                       
                        </select>
                    </div> 
                <div class='form-group'>
                    <select id="tipo2luz" class='form-control form-control-sm' >
                        <option value="">::tipo2 Luz ::</option>
                        <option value="led">Led</option>
                        <option value="alogena">Alogena</option>                       
                    </select>
                </div> 
                    <div class='form-group'>
                        <label>Siguiente Mantenimiento</label>
                        <input type='date' id='fm' class='form-control form-control-sm'>                       
                    </div>                    
                    <div class="form-group">
                        <button class="btn btn-success btn-block"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Guardar</button>
                    </div>
                </div>`);
            break;
        default:
            $('#form').html(menu+` 
            <div class='container'>
                <div class='form-group'>
                    <label>Siguiente Mantenimiento</label>
                    <input type='date' id='fm' class='form-control form-control-sm'>                       
                </div>                    
                <div class="form-group">
                    <button class="btn btn-success btn-block"><i class="fa fa-plus-square-o" aria-hidden="true"></i> Guardar</button>
                </div>
            </div>`);
            break;
    }
}