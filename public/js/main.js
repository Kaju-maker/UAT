
// CLIENTE
function verificarDatos(data){
    var correo=$("#correoinicio").val();
    var contra=$("#claveinicio").val();
    var existe=false;
    var claveIncorrecta=false;
    var correoIncorrecto=false;
    for (x in data) {      
        if(data[x].Correo == correo && data[x].Contrasena == contra){
            existe=true;
            claveIncorrecta=false;
            correoIncorrecto=false;
            break;
        }
        if(data[x].Correo != correo ){
            correoIncorrecto=true;
        }
        if(data[x].Contrasena != contra ){
            claveIncorrecta=true;
        }
    }
    if(correoIncorrecto==true){
        var inputcorreo=document.getElementById("correoinicio");
        inputcorreo.style.borderColor="#FF0000";
    }else{
        var inputcorreo=document.getElementById("correoinicio");
        inputcorreo.reset();
        inputcorreo.className="form-control";
    }
    if(claveIncorrecto==true){
        var inputclave=document.getElementById("claveinicio");
        inputclave.style.borderColor="#FF0000";
    }else{
        var inputclave=document.getElementById("claveinicio");
        inputclave.reset();
        inputclave.className="form-control";
    }
    return existe;
}

function consultarCliente(event){
	console.log("Entró a llamar");
	fetch('http://localhost:3000/getClientes',{
	method:	'GET',
	headers:{
		'Content-Type' : 'application/json'
	}
	}).then(response => response.json())
        .then(result => {
            if (result.length > 0) {
                var confirma=cargarDatos(result);
                if(confirma != true){
                    event.cancelable;
                }
            } else {
                console.log(JSON.stringify(result));
            }
        })
        .catch(error => console.log('error: ' + error));
}

$(document).ready(function(){
        $("#FormRegistro").submit(function(event){
            //Cancels the from submission
            console.log("entro");
            event.preventDefault();
            submitFormInsert();
        });
});

function submitFormInsert(){
    var nombre=$("#nombre").val();
    var apellido=$("#apellido").val();
    var correo=$("#correo").val();
    var telefono=$("#telefono").val();
    var fNacimiento=$("#fechaN").val();
    var direccion=$("#direccion").val();
    var clave=$("#clave").val();
    
    var object={"Correo":correo,"Apellido":apellido,"Nombre":nombre,"Contrasena":clave,"Telefono":telefono,"Direccion":direccion,"FechaNacimiento":fNacimiento,};
    console.log(object);

    fetch('http://localhost:3000/createCliente',{
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

// ARTISTA
function consultarArtista(event){
	console.log("Entró a llamar");
	fetch('http://localhost:3000/getArtistas',{
	method:	'GET',
	headers:{
		'Content-Type' : 'application/json'
	}
	}).then(response => response.json())
        .then(result => {
            if (result.length > 0) {
                var confirma=cargarDatos(result);
                if(confirma != true){
                    event.cancelable;
                }
            } else {
                console.log(JSON.stringify(result));
            }
        })
        .catch(error => console.log('error: ' + error));
}

// SWITCH INICIO DE SESIÓN
function formIniciaraction(checkbox){
    if(checkbox.checked){
        document.getElementById("FormInicio").action = checkbox.value;
        document.getElementById("crearCuentaBoton").style.display="none";
        document.getElementById('formInicio-submit').onclick = "consultarArtista('event')";
    }else{
        document.getElementById("FormInicio").action = "indexCliente.html";
        document.getElementById("crearCuentaBoton").style.display="block";
        document.getElementById('formInicio-submit').onclick = "consultarCliente('event')";
    }
}

// CATALOGOS
$("#Catalogos-tab").click(function()
{
    submitConsulta();
});

$("#estilo").on('change',function()
{
    submitConsulta();
});

function cargarDatos(data){
    var rows = "";
    var estilo=document.getElementById("estilo");
    var estiloselected = estilo.options[estilo.selectedIndex].text;

    $("#listaCatalogos").remove();
    if(estiloselected=="Todos"){
        for (x in data) {
            /* var idDes="D"+data[x].idProducto;
             var idCos="C"+data[x].idProducto;
     
             rows += `<tr><td>${data[x].idProducto}</td>
             <td><input type="text" id="${idDes}" value="${data[x].descripcion}" style="background-color:transparent;border:none;color:white;"></td>
             <td><input type="text" id="${idCos}" value="${data[x].costo}" style="background-color:transparent;border:none;color:white;"></td>
             <td class="text-center"><button onclick="submitFormUpdate(${data[x].idProducto})" class="btn btn-warning btn-sm">Actualizar</button>&emsp;
             <button onclick="submitFormDelete(${data[x].idProducto})" class="btn btn-danger btn-sm">Eliminar</button></td></tr>`;  */
             rows +='<div class="card" style="width: 16rem; background-color: #FFFDEE;"><div class="card bg-dark text-white"><img src="datoObra" class="card-img" alt="..."><div class="card-img-overlay"><h5 class="card-title" id="idcatalogo">nombreartista</h5></div></div></div>'
         }
    }else{
        for (x in data) {
            if(data[x].TipoArte==estiloselected){
                rows +='<div class="card" style="width: 16rem; background-color: #FFFDEE;"><div class="card bg-dark text-white"><img src="datoObra" class="card-img" alt="..."><div class="card-img-overlay"><h5 class="card-title" id="idcatalogo">nombreartista</h5></div></div></div>'
            }
            /* var idDes="D"+data[x].idProducto;
             var idCos="C"+data[x].idProducto;
     
             rows += `<tr><td>${data[x].idProducto}</td>
             <td><input type="text" id="${idDes}" value="${data[x].descripcion}" style="background-color:transparent;border:none;color:white;"></td>
             <td><input type="text" id="${idCos}" value="${data[x].costo}" style="background-color:transparent;border:none;color:white;"></td>
             <td class="text-center"><button onclick="submitFormUpdate(${data[x].idProducto})" class="btn btn-warning btn-sm">Actualizar</button>&emsp;
             <button onclick="submitFormDelete(${data[x].idProducto})" class="btn btn-danger btn-sm">Eliminar</button></td></tr>`;  */             
         }
    }

    

    $("#listaCatalogos").append(rows);
}

function submitConsulta(){
	console.log("Entró a llamar");
	fetch('http://localhost:3000/getCatalogos',{
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

// VER CATÁLOGO ESPECÍFICO


// ALERTAS
function formSuccess(proceso){
    if(proceso=="Insert"){
        alert("Registrado correctamente.");
    }
	
}

//BOTÓN COMPRARAHORA
function activaTab(tab){
    $('.navbar-nav a[href="#' + tab + '"]').tab('show');
};

$("#buttonComprarAhora").click(function()
{
    activaTab("Catalogos");
});
$("#buttonComprarAhoraSN").click(function()
{
    activaTab("Catalogos");
});
