'use strict';
var dbConn=require('../../config/dbConnection');

const CONSULTA="SELECT c.IdCatalogo, c.TipoDeArte, c.Precio, c.fk_artista, o.IdObra, o.ImagenObra FROM Catalogo c, Obra o WHERE o.fk_Catalogo=c.IdCatalogo";
const INSERT = "INSERT INTO Catalogo set ?";
const INSERTOBRA = "INSERT INTO Obra set ?";
const UPDATE = "UPDATE Catalogo SET TipoDeArte = ?,Precio = ? WHERE fk_artista = ?";
const DELETE = "DELETE FROM Catalogo WHERE fk_artista = ?";

//select * from obra o, catalogo c where o.fk_Catalogo=c.IdCatalogo and c.fk_artista="correo del artista"
//select * from obra where IdCatalogo="caltalogo a ver"

exports.readAll = function(result){
   dbConn.query (CONSULTA, function (err, res){
         if(err){
           console. log("error: ", err);
           result(null, err);
         }else{
           console.log('Catalogo:',res);
           result (null, res);
         }
         });
}

exports.create = (nuevoCatalogo)=>{
  console.log(nuevoCatalogo);
  var result="1"; 
  dbConn.query (INSERT, nuevoCatalogo, function (err, res){
    if(err){
      result="0";
    }
   });
  return result;
}

exports.createObra = (nuevaObra)=>{
  console.log(nuevaObra);
  var result="1"; 
  dbConn.query (INSERTOBRA, nuevaObra, function (err, res){
    if(err){
      result="0";
    }
   });
  return result;
}

exports.update = (Catalogo)=>{
  console.log(Catalogo);
  var result="1"; 
  dbConn.query (UPDATE, [Catalogo.TipoDeArte,Catalogo.Precio,Catalogo.fk_artista], function (err, res){
    if(err){
      result="0";
    }
   });
  return result;
}

exports.delete = (Catalogo)=>{
  console.log(Catalogo);
  var result="1"; 
  dbConn.query (DELETE,[Catalogo.fk_artista], function (err, res){
    if(err){
      result="0";
    }
   });
  return result;
}