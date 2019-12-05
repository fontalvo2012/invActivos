<script>
    function Buscar(opt,id) {
      var input, filter, table, tr, td, i, txtValue;
      input = document.getElementById(id);
      filter = input.value.toUpperCase();
      table = document.getElementById("myTable");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[opt];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }       
      }
    }

  $( document ).ready(function() {
    tablaActivos();
});
</script>
<style>
* {
  box-sizing: border-box;
}

#myInput {
  background-image: url('/css/searchicon.png');
  background-position: 10px 10px;
  background-repeat: no-repeat;
  width: 100%;
  font-size: 16px;
  padding: 12px 20px 12px 40px;
  border: 1px solid #ddd;
  margin-bottom: 12px;
}

#myTable {
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;
  font-size: 18px;
}

#myTable th, #myTable td {
  text-align: left;
  padding: 12px;
}

#myTable tr {
  border-bottom: 1px solid #ddd;
}

#myTable tr.header, #myTable tr:hover {
  background-color: #f1f1f1;
}
</style>

<div class="container overflow-auto">
<div class="row">
  <div class="col"><input type="text" id="nombre" class="form-control" onkeyup="Buscar(2,'nombre')" placeholder="Busca por Nombre"></div>
  <div class="col"><input type="text" id="sede" class="form-control" onkeyup="Buscar(8,'sede')" placeholder="Busca por Sede"></div>
</div>
<div id="tabla"></div>
</div>