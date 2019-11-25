function formularios(){
    var tipo=$('#tipo').val();
    switch (tipo) {
        case 'CPU':
            $('#form').html(`
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
                        <select id="tipo" class='form-control form-control-sm' >
                            <option value="">::Seleccion Tipo::</option>
                            <option value="server">Server</option>
                            <option value="todo en uno">Todo En Uno</option>
                            <option value="torre">Torre</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-success"><i class="fa fa-plus-square-o" aria-hidden="true"></i>Guardar</button>
                    </div>
                </div>
            `);            
            break;
    
        default:
            break;
    }
}