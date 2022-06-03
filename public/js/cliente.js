//PEDIDOS
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

function submitConsulta(){
	console.log("Entró a llamar");
	fetch('http://localhost:3000/getPedidos',{
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



//PERFIL
function submitFormUpdate(correo){
    var nombre=$("#nombreusuario").val();
    var apellido=$("#apellidousuario").val();
    var fechaN=$("#fechaNusuario").val();
    var telefono=$("#telefonousuario").val();
    var direccion=$("#direccionusuario").val();

    var object={"Correo":correo,"Apellido":apellido,"Nombre":nombre,"Telefono":telefono,"Direccion":direccion,"FechaNacimiento":fechaN};
    console.log(object);

    fetch('http://localhost:3000/updateCliente',{
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
            }else{
                alert("Error al actualizar");
            }
        })
        .catch(function (err){
            console.error(err);
        });       
} 

function submitFormDelete(correo){
    console.log(correo);
    var object={"Correo":correo};
    fetch('http://localhost:3000/deleteCliente',{
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

    