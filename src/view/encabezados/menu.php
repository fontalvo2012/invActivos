<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Activos. <span class="small ml-2 mr-3 text-danger text-uppercase">::<?php echo $_SESSION['nombre'] ?>::</span></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="index.php"><i class="fa fa-home" aria-hidden="true"></i> Inicio <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  href="index.php?opt=lectura"><i class="fa fa-qrcode" aria-hidden="true"></i> Leer Activo</a>
      </li>
      <li class="nav-item">
        <a class="nav-link"  href="index.php?opt=tabla"><i class="fa fa-table" aria-hidden="true"></i> Ver Activos</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="fa fa-plus" aria-hidden="true"></i> Registros
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="index.php?opt=proveedor"><i class="fa fa-shopping-cart" aria-hidden="true"></i> Proveedor</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="index.php?opt=proveedor"><i class="fa fa-map-marker" aria-hidden="true"></i> Sedes</a>    
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="index.php?opt=registro"><i class="fa fa-user-plus" aria-hidden="true"></i> Usuarios</a>    
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link"  href="controller/cerrarSesion.php"><i class="fa fa-sign-out" aria-hidden="true"></i> Salir</a>
      </li>
   
    </ul>
  </div>
</nav>