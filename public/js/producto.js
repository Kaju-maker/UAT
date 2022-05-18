// JQUERY consultar base de datos y mostrar en una tabla

$("#table-tab").click(function()
{
    submitConsulta();
});

// JQUERY Insertar base de datos y mostrar en una tabla
function cargarDatos(data){
    var rows = "";
    $("#dataTable tr").remove();
    $("#dataTable").append('<tr><td>idProducto</td>'+
    '<td>Descripción</td>' + 
    '<td>Costo</td>'+'<td class="text-center">Opciones</td>');
    for (x in data) {
        var idDes="D"+data[x].idProducto;
        var idCos="C"+data[x].idProducto;

        rows += `<tr><td>${data[x].idProducto}</td>
        <td><input type="text" id="${idDes}" value="${data[x].descripcion}" style="background-color:transparent;border:none;color:white;"></td>
        <td><input type="text" id="${idCos}" value="${data[x].costo}" style="background-color:transparent;border:none;color:white;"></td>
        <td class="text-center"><button onclick="submitFormUpdate(${data[x].idProducto})" class="btn btn-warning btn-sm">Actualizar</button>&emsp;
        <button onclick="submitFormDelete(${data[x].idProducto})" class="btn btn-danger btn-sm">Eliminar</button></td></tr>`;        
    }

    $("#dataTable").append(rows);
}



$(document).ready(function(){
        $("#productoForm").submit(function(event){
            //Cancels the from submission
            console.log("entro");
            event.preventDefault();
            submitFormInsert();
        });
});


function submitConsulta(){
	console.log("Entró a llamar");
	fetch('http://localhost:3000/getProductos',{
	method:	'GET',
	headers:{
		'Content-Type' : 'application/json'
	}
	}).then(response => response.json())
        .then(result => {
            if (result.length > 0) {
                cargarDatos(result);
            } else {
                console.log(JSON.stringify(result));
            }
        })
        .catch(error => console.log('error: ' + error));
}

function submitFormInsert(){
    var descripcion=$("#descripcion").val();
    var costo=$("#costo").val();

    var object={"descripcion":descripcion,"costo":costo};
    console.log(object);

    fetch('http://localhost:3000/createProducto',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object),
        cache: 'no-cache'
    })
        .then(function (response){
            console.log("Entró");
            return response.text();
        })
        .then(function(data){
            console.log(data);
            if(data === "1"){
                formSuccess("Insert");
            }else{
                alert("Error al insertar");
            }
        })
        .catch(function (err){
            console.error(err);
        });
} 

function submitFormUpdate(id_Producto){
    idDes="#D"+id_Producto;
    idCos="#C"+id_Producto;
    console.log(id_Producto);
    var descripcion=$(idDes).val();
    var costo=$(idCos).val();

    var object={"descripcion":descripcion,"costo":costo,"idProducto":id_Producto};
    console.log(object);

    fetch('http://localhost:3000/updateProducto',{
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object),
        cache: 'no-cache'
    })
        .then(function (response){
            console.log("Entró");
            return response.text();
        })
        .then(function(data){
            console.log(data);
            if(data === "1"){
                formSuccess("Update");
                submitConsulta();
            }else{
                alert("Error al actualizar");
            }
        })
        .catch(function (err){
            console.error(err);
        });       
} 

function submitFormDelete(id_Producto){
    console.log(id_Producto);
    var object={"idProducto":id_Producto};
    fetch('http://localhost:3000/deleteProducto',{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object),
        cache: 'no-cache'
    })
        .then(function (response){
            console.log("Entró");
            return response.text();
        })
        .then(function(data){
            console.log(data);
            if(data === "1"){
                formSuccess("Delete");
                submitConsulta();
            }else{
                alert("Error al eliminar");
            }
        })
        .catch(function (err){
            console.error(err);
        });       
} 

function formSuccess(proceso){
    if(proceso=="Insert"){
        alert("Producto registrado correctamente.");
    }
    if(proceso=="Update"){
        alert("Producto actualizado correctamente.");
    }
    if(proceso=="Delete"){
        alert("Producto eliminado correctamente.");
    }
	
}

    