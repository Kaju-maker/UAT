'use strict';

var artistaDAO=require('../daos/artistaDAO');

var artista=function(artista){
    this.Correo=artista.Correo;                    
    this.Nombre=artista.Nombre;
    this.Apellido=artista.Apellido;
    this.NumeroIdentificacion=artista.NumeroIdentificacion;
    this.Contrasena=artista.Contrasena;
    this.Telefono=artista.Telefono;
    this.FechaNacimiento=artista.FechaNacimiento;
    this.TipoDeArte=artista.TipoDeArte;
    this.FormatoDeArte=artista.FormatoDeArte;
    this.Biografia=artista.Biografia;
}

artista.readAll= (result) =>{
    artistaDAO.readAll(function(err, res){
         if(err){
             console.log('error: ', err);
             result(null, err);
         }else{
             console.log('producto:', res);
             result(null, res);
         }
    });
};

artista.create= (nuevoArtista)=>{
    console.log(nuevoArtista);
    var result=artistaDAO.create(nuevoArtista); 
    return result;
};

artista.update= (Artista)=>{
    console.log(Artista);
    var result=artistaDAO.update(Artista); 
    return result;
};

artista.delete= (Artista)=>{
    console.log(Artista);
    var result=artistaDAO.delete(Artista); 
    return result;
};

module.exports= artista;