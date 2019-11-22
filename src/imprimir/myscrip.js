
// auto completar ajax

function probar(){
  $('#cedula').val('probando');
}




function consultarPaciente() {
  var paciente = $('#paciente').val()
  $.ajax({
    url: '/pacientequery/' + paciente,
    type: 'GET',
    datatype: 'json',
    success: (data) => {
      if (data != 0) {
        $('#nombres').val(data.nombre);
        $("#btn").attr("disabled", false);
        console.log(data);
      } else {
        $("#btn").attr("disabled", true);
        var r = confirm("El usuario no existe!!, Desea Crearlo ?");
        if (r)
          location.href = "/regpac"
      }


    }
  });
}
// RECOJER MUESTRA

function recojerMuestra(id) {
  var r = confirm("La muestra pasara a estado Recojida!");
  if (r) {
    $.ajax({
      url: '/recojer/' + id,
      type: 'GET',
      datatype: 'json',
      success: (data) => {
        console.log(data);
        location.href="/listarclinicas/"+data.fk_clinica;
      }
    });
  }
}


function labIn(id) {
  var r = confirm("Ya Recibio la Muestra?");
  if (r) {
    $.ajax({
      url: '/labin/' + id,
      type: 'GET',
      datatype: 'json',
      success: (data) => {
        console.log(data);
         location.href="/listalab";
      }
    });
  }
}

function reIngresar(id){
  $.ajax({
    url: '/reingresar/' + id,
    type: 'GET',
    datatype: 'json',
    success: (data) => {
      console.log(data);
      location.href="/lisarsolicitudes";
    }
  });
}

function tablaConsulta(){
  var estado=$('#estado').val();
  $.ajax({
    url: '/tablaconsulta/' + estado,
    type: 'GET',
    datatype: 'json',
    success: (data) => {
      console.log(data);
      cadena=` 
      <table id="myTable">
      <tr class="header">
          <th>ID</th>            
          <th>Patologia</th>
          <th>Paciente</th>
          <th>Cedula</th>
          <th>Descripcion</th>
          <th>Mensajero</th>
          <th>Fecha Silicitud</th>
          <th>Fecha Regida</th>
          <th>Fecha Ingreso</th>
      </tr>`;
      data.forEach(element => {
        cadena+=`
        <tr">
            <td>${element.id}</td>           
            <td>${element.patologia}</td>
            <td>${element.paciente}</td>
            <td>${element.cedula}</td>
            <td> <b>Clinica:</b> ${element.descripcion} <br><b> Devolucion:</b> ${element.des_devolucion} <br> Muestra devuelta el: ${element.fecha_devolucion}</td>
            <td>${element.mensa_nombre}</td>
            <td>${element.fecha_peticion}</td>
            <td>${element.fecha_recogida}</td>
            <td>${element.fecha_ingreso}</td>
        </tr>  `; 
      });       
     
      $('#tabla').html(cadena);
    }
  });
}


function tablaConsultaadmin(){
  var estado=$('#estado').val();
  $.ajax({
    url: '/tablaconsultaadmin/' + estado,
    type: 'GET',
    datatype: 'json',
    success: (data) => {
      console.log(data);
      cadena=` 
      <table id="myTable">
      <tr class="header">
          <th>ID</th>
          <th>Clinica</th>             
          <th>Patologia</th>
          <th>Paciente</th>
          <th>Cedula</th>
          <th>Descripcion</th>
          <th>Mensajero</th>
          <th>Fecha Silicitud</th>
          <th>Fecha Regida</th>
          <th>Fecha Ingreso</th>
      </tr>`;
      data.forEach(element => {
        cadena+=`
        <tr">
            <td>${element.id}</td>           
            <td>${element.razonsocial}</td>           
            <td>${element.patologia}</td>
            <td>${element.paciente}</td>
            <td>${element.cedula}</td>
            <td> <b>Clinica:</b> ${element.descripcion} <br><b> Devolucion:</b> ${element.des_devolucion} <br> Muestra devuelta el: ${element.fecha_devolucion}</td>
            <td>${element.mensa_nombre}</td>
            <td>${element.fecha_peticion}</td>
            <td>${element.fecha_recogida}</td>
            <td>${element.fecha_ingreso}</td>
        </tr>  `; 
      });       
     
      $('#tabla').html(cadena);
    }
  });
}
