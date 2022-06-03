'use strict';
var dbConn=require('../../config/dbConnection');

const CONSULTA="SELECT a.nombre, a.apellido, a.tipoarte, a.biografia, a.formatoarte  FROM artista a";
const INSERT = "INSERT INTO artista set ?";
const UPDATE = "UPDATE artista SET nombre = ?, apellido = ?, tipoarte = ?, biografia = ?, formatoarte = ? WHERE correo = ?";
const DELETE = "DELETE FROM artista WHERE correo = ?";

//select * from obra o, catalogo c where o.fk_Catalogo=c.IdCatalogo and c.fk_artista="correo del artista"
//select * from obra where IdCatalogo="caltalogo a ver"

exports.readAll = function(result){
   dbConn.query (CONSULTA, function (err, res){
         if(err){
           console. log("error: ", err);
           result(null, err);
         }else{
           console.log('artista:',res);
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