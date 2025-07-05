$(document).ready(function (){
    //new DataTable('#example');
    $('#example').DataTable({
      ajax:{
        url:'https://jsonplaceholder.typicode.com/users',
        dataSrc:''
      },
      columns:[
        {data:'id'},
        {data:'name'},
        {data:'username'},
        {data:'email'},
        {data:'phone'},
        {data:'website'},
      ],
      language:{
        decimal: "",
        emptyTable: "No hay información",
        info: "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
        infoEmpty: "Mostrando 0 to 0 of 0 Entradas",
        infoFiltered: "(Filtrado de _MAX_ total entradas)",
        thousands: ",",
        lengthMenu: "Mostrar _MENU_ Entradas",
        loadingRecords: "Cargando...",
        processing: "Procesando...",
        search: "Buscar:",
        zeroRecords: "Sin resultados encontrados",
        paginate: {
            first: "Primero",
            last: "Ultimo",
            next: "Siguiente",
            previous: "Anterior"
        }
      }
    });
});
 
