'use strict';
var dbConn=require('../../config/dbConnection');

const CONSULTA="SELECT a.Correo, a.Nombre, a.Apellido, a.Contrasena, a.TipoDeArte, a.Biografia, a.FormatoDeArte  FROM Artista a";
const INSERT = "INSERT INTO Artista set ?";
const UPDATE = "UPDATE Artista SET Nombre = ?, Apellido = ?, TipoDeArte = ?, Biografia = ?, FormatoDeArte = ? WHERE Correo = ?";
const DELETE = "DELETE FROM Artista WHERE Correo = ?";

//select * from obra o, catalogo c where o.fk_Catalogo=c.IdCatalogo and c.fk_artista="correo del artista"
//select * from obra where IdCatalogo="caltalogo a ver"

exports.readAll = function(result){
   dbConn.query (CONSULTA, function (err, res){
         if(err){
           console. log("error: ", err);
           result(null, err);
         }else{
           console.log('Artista:',res);
           result (null, res);
         }
         });
}

exports.create = (nuevoArtista)=>{
  console.log(nuevoArtista);
  var result="1"; 
  dbConn.query (INSERT, nuevoArtista, function (err, res){
    if(err){
      result="0";
    }
   });
  return result;
}

exports.update = (Artista)=>{
  console.log(Artista);
  var result="1"; 
  dbConn.query (UPDATE, [Artista.nombre,Artista.apellido,Artista.tipoarte,Artista.biografia,Artista.formatoarte,Artista.correo], function (err, res){
    if(err){
      result="0";
    }
   });
  return result;
}

exports.delete = (Artista)=>{
  console.log(Artista);
  var result="1"; 
  dbConn.query (DELETE,[Artista.correo], function (err, res){
    if(err){
      result="0";
    }
   });
  return result;
}