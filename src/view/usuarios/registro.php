<div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-4 col-md-offset-4">        
          <div class="spacing-1"></div>
          <form id="formulario_registro">           
            <fieldset>
              <legend class="center">Registro</legend>            
              <label class="sr-only" for="user">Nombre</label>
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-user"></i></div>
                <input type="text" class="form-control" name="name" placeholder="Ingresa tu nombre">
              </div>             
              <div class="spacing-2"></div>            
              <label class="sr-only" for="user">Email</label>
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-user"></i></div>
                <input type="text" class="form-control" name="email" placeholder="Ingresa tu email">
              </div>           
              <div class="spacing-2"></div>             
              <label class="sr-only" for="clave">Contraseña</label>
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-lock"></i></div>
                <input type="password" autocomplete="off" class="form-control" name="clave" placeholder="Ingresa tu clave">
              </div>            
              <div class="spacing-2"></div>             
              <label class="sr-only" for="clave">Verificar contraseña</label>
              <div class="input-group">
                <div class="input-group-addon"><i class="fa fa-lock"></i></div>
                <input type="password" autocomplete="off" class="form-control" name="clave2" placeholder="Verificar contraseña">
              </div>             
              <div class="row" id="load" hidden="hidden">
                <div class="col-xs-4 col-xs-offset-4 col-md-2 col-md-offset-5">
                  <img src="../img/load.gif" width="100%" alt="">
                </div>
                <div class="col-xs-12 center text-accent">
                  <span>Validando información...</span>
                </div>
              </div>   
              <div class="form-group m-4">
              <button type="button" class="btn btn-primary btn-block" onclick="registrarUsuario()" name="button" >Registrate</button>
              </div>         
              
            </fieldset>
          </form>
        </div>
      </div>
    </div>