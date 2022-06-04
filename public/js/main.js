// CLIENTE
function verificarDatos(data){
    var correo=$("#correoinicio").val();
    var contra=$("#claveinicio").val();
    console.log(correo,contra);
    var existe=false;
    var claveIncorrecta=true;
    var correoIncorrecto=true;
    for (x in data) {      
        console.log(data[x].Correo);
        if(data[x].Correo == correo && data[x].Contrasena == contra){
            console.log("entra Acá");
            existe=true;
            claveIncorrecta=false;
            correoIncorrecto=false;
            break;
        }else if(data[x].Correo == correo ){
            correoIncorrecto=false;
        }else if(data[x].Contrasena == contra ){
            claveIncorrecta=false;
        }
    }
    if(correoIncorrecto==true){
        var inputcorreo=document.getElementById("correoinicio");
        inputcorreo.style.borderColor="#FF0000";
    }else{
        var inputcorreo=document.getElementById("correoinicio");
        inputcorreo.style.borderColor=""
        inputcorreo.className="form-control";
    }
    if(claveIncorrecta==true){
        var inputclave=document.getElementById("claveinicio");
        inputclave.style.borderColor="#FF0000";
    }else{
        var inputclave=document.getElementById("claveinicio");
        inputclave.style.borderColor=""
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
                var confirma=verificarDatos(result);
                if(confirma != true){
                    event.preventDefault();
                }else{
                    setStorage();
                    const form = document.getElementById('FormInicio');
                    form.action = 'http://localhost:3000/indexCliente.html';
                    form.submit();
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

$(document).ready(function(){
    $("#FormInicio").submit(function(event){
        //Cancels the from submission
        console.log("entro");        
        event.preventDefault();
        formIniciaraction(event)
    });
});


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
                var confirma=verificarDatos(result);
                if(confirma != true){
                    event.preventDefault();
                }else{
                    setStorage();
                    const form = document.getElementById('FormInicio');
                    form.action = 'http://localhost:3000/indexArtista.html';
                    form.submit();
                }
            } else {
                console.log(JSON.stringify(result));
            }
        })
        .catch(error => console.log('error: ' + error));
}

function consultarArtistaPerfil(fk_artista,imagen){
	console.log("Entró a llamar");
	fetch('http://localhost:3000/getArtistas',{
	method:	'GET',
	headers:{
		'Content-Type' : 'application/json'
	}
	}).then(response => response.json())
        .then(result => {
            if (result.length > 0) {
                cargarPerfil(result,fk_artista,imagen);
            } else {
                console.log(JSON.stringify(result));
            }
        })
        .catch(error => console.log('error: ' + error));
}
function cargarPerfil(data,fk_artista,imagen){
    console.log("Entro A carga perfil");
    for (x in data) {
        if(data[x].Correo==fk_artista){
            document.getElementById("ImagenCatalogo1").src=imagen;
            document.getElementById("nombreartista").textContent=data[x].Nombre+" "+data[x].Apellido;    
            document.getElementById("estilodearte").textContent= data[x].TipoDeArte;            
            document.getElementById("formatodearte").textContent= data[x].FormatoDeArte;
            document.getElementById("descripcionArtista").textContent=data[x].Biografia;
            break;
        } 
    }
    activaTab("PerfilArtista");
}


// SWITCH INICIO DE SESIÓN
function formIniciaraction(event){
    var checkbox=document.getElementById("esartista");
    if(checkbox.checked){
        consultarArtista(event);     
    }else{
        consultarCliente(event);
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
    $("#dataTableCatalogos tr").remove();
    if(estiloselected=="Todos"){
        console.log("Entro a todos");
        var cont=1;
        
        for (x in data) {            
            var Precio=data[x].Precio;
            if(cont=1){            
                rows += "<tr>";
            }
            rows +=`<td><button id="${data[x].fk_artista}" onclick="consultarArtistaPerfil(${data[x].fk_artista},${data[x].ImagenObra});" style="border:none; background-color:transparent;"><div class="card" style="width: 16rem; background-color: #FFFDEE;"><div class="card text-white"><img src="${data[x].ImagenObra}" class="card-img" alt="..."><div class="card-img-overlay"><h5 class="card-title">${data[x].TipoDeArte}</h5></div><div class="btncard-body rounded" style="margin:2%; background-color:#187F75;" ><h5 class="row justify-content-center align-items-center" style="color:#04253A">${" $"+Precio}</h5></div></div></div></button></td>`;
            if(cont>=4){       
                console.log("Entro a cerrar");     
                rows += "</tr>";
                console.log(rows);
                cont=0;
            }
            cont+=1;
         }
    }else{
        console.log("Entro a otros");
        for (x in data) {
            if(data[x].TipoDeArte==estiloselected){
                var Precio=data[x].Precio;
                rows +=`<div class="card" style="width: 16rem; background-color: #FFFDEE;"><div class="card bg-dark text-white"><img src="${data[x].ImagenObra}" class="card-img" alt="..."><div class="card-img-overlay"><a class="card-title" id="${data[x].fk_artista}">${Precio}</a></div></div></div>`;
            }             
         }
    }

    $("#dataTableCatalogos").append(rows);
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



// ALERTAS
function formSuccess(proceso){
    if(proceso=="Insert"){
        alert("Registrado correctamente.");
    }
	
}

//ACTIVAR TAB PANE FADE
function activaTab(tab){
    $('.navbar-nav a[href="#' + tab + '"]').tab('show');
};

//BOTÓN COMPRARAHORA
$("#buttonComprarAhora").click(function()
{
    activaTab("Catalogos");
});
$("#buttonComprarAhoraSN").click(function()
{
    activaTab("Catalogos");
});

//GUARDAR INFO DEL CORREO 
function setStorage(){
	var correo=document.getElementById("correoinicio").value;
	console.log(correo);
	localStorage.setItem("Correo", correo);
}