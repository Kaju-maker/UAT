
var correoLocal=localStorage.getItem("Correo");

//PEDIDOS
function cargarDatos(data){
    var rows = "";
    $("#dataTable tr").remove();
    $("#dataTable").append('<tr><td>idPedido</td>'+
    '<td>Descripción</td>' + 
    '<td>Precio</td>'+'<td>Fecha de Entrega</td>');
    for (x in data) {
        var idPed="D"+data[x].idPedido;
        var idCos="C"+data[x].idProducto;

        rows += `<tr><td>${data[x].idPedido}</td>
        <td>${data[x].Descripcion}</td>
        <td>${data[x].Precio}</td>
        <td>${data[x].FechaDeEntrega}</td></tr>`;        
    }

    $("#dataTable").append(rows);
}
function submitConsultaPedido(){
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
function submitFormInsertPedido(){
    var descripcion=document.getElementById("descripcionPedido").textContent;
    var precio="352222";
    var color1=$("#color1").val();
    var color2=$("#color2").val();
    var color3=$("#color3").val();
    var color4=$("#color4").val();
    var color5=$("#color5").val();
    let date = new Date();
    var FechaEntrega=date.getFullYear()+"-"+ String(date.getMonth() + 1).padStart(2, '0')+"-"+String(date.getDate()+10).padStart(2, '0') ;
    var IdPedido=0;
    var object={"IdPedido":IdPedido,"Descripcion":descripcion,"Precio":precio,"Color1":color1,"Color2":color2,"Color3":color3,"Color4":color4,"Color5":color5,"FechaEntrega":FechaEntrega};
    console.log(object);

    fetch('http://localhost:3000/createPedido',{
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
    $("#FormComprar").submit(function(event){
        //Cancels the from submission
        console.log("entro");        
        event.preventDefault();
        submitFormInsertPedido();
    });
});

$(document).ready(function(){
    $("#pedidoscliente-tab").click(function(event){
        //Cancels the from submission
        console.log("entro");        
        submitConsultaPedido();
    });
});


//PERFIL
function consultarCliente(){
	console.log("Entró a llamar");
	fetch('http://localhost:3000/getClientes',{
	method:	'GET',
	headers:{
		'Content-Type' : 'application/json'
	}
	}).then(response => response.json())
        .then(result => {
            if (result.length > 0) {
                cargarDatosCliente(result);
            } else {
                console.log(JSON.stringify(result));
            }
        })
        .catch(error => console.log('error: ' + error));
}
function cargarDatosCliente(data){
    for (x in data) {
        if(data[x].Correo==correoLocal){
            document.getElementById("dropdownEx").textContent=data[x].Nombre;
            document.getElementById("nombreusuario").value=data[x].Nombre;
            document.getElementById("apellidousuario").value=data[x].Apellido;
            var fecha=data[x].FechaNacimiento;
            document.getElementById("fechaNusuario").value=fecha.slice(0, 10);
            document.getElementById("telefonousuario").value=data[x].Telefono;
            document.getElementById("direccionusuario").value=data[x].Direccion;
        } 
    }
}
function submitFormUpdate(){
    var nombre=$("#nombreusuario").val();
    var apellido=$("#apellidousuario").val();
    var fechaN=$("#fechaNusuario").val();
    var telefono=$("#telefonousuario").val();
    var direccion=$("#direccionusuario").val();

    var object={"Correo":correoLocal,"Apellido":apellido,"Nombre":nombre,"Telefono":telefono,"Direccion":direccion,"FechaNacimiento":fechaN};
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
                consultarCliente();
            }else{
                alert("Error al actualizar");
            }
        })
        .catch(function (err){
            console.error(err);
        });       
} 
function submitFormDelete(){
    var object={"Correo":correoLocal};
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
                consultarCliente();
                location.href = "http://localhost:3000/index.html";
            }else{
                alert("Error al eliminar");
            }
        })
        .catch(function (err){
            console.error(err);
        });       
} 


//ALERTAS
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

//CERRAR SESIÓN
$(document).ready(function(){
    $("#cerrar").click(function(event){
        localStorage.removeItem('Correo');
    });
});

//CATALOGO
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
    $('#PerfilA').modal('show');
}
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
            rows +=`<td><button id="${data[x].fk_artista}" onclick="consultarArtistaPerfil('${data[x].fk_artista}','${data[x].ImagenObra}')" style="border:none; background-color:transparent;"><div class="card" style="width: 16rem; background-color: #FFFDEE;"><div class="card text-white"><img src="${data[x].ImagenObra}" class="card-img" alt="..."><div class="card-img-overlay"><h5 class="card-title">${data[x].TipoDeArte}</h5></div><div class="btncard-body rounded" style="margin:2%; background-color:#187F75;" ><h5 class="row justify-content-center align-items-center" style="color:#04253A">${" $"+Precio}</h5></div></div></div></button></td>`;
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

//ACTIVAR TAB PANE FADE
function activaTab(tab){
    console.log("Acá va");
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