'use strict';
var dbConn=require('../../config/dbConnection');

const CONSULTA="SELECT c.Correo, c.Nombre, c.Apellido, c.Contrasena, c.FechaNacimiento, c.Telefono, c.Direccion  FROM Cliente c";
const CONSULTAESP="SELECT c.Nombre, c.Apellido, c.FechaNacimiento, c.Telefono, c.Direccion  FROM Cliente c WHERE correo = ?";
const INSERT = "INSERT INTO Cliente set ?";
const UPDATE = "UPDATE Cliente SET Nombre = ?, Apellido = ?,FechaNacimiento = ?,Telefono = ?,Direccion = ? WHERE correo = ?";
const DELETE = "DELETE FROM Cliente WHERE correo = ?";

//select * from obra o, catalogo c where o.fk_Catalogo=c.IdCatalogo and c.fk_artista="correo del artista"
//select * from obra where IdCatalogo="caltalogo a ver"

exports.readAll = function(result){
   dbConn.query (CONSULTA, function (err, res){
         if(err){
           console. log("error: ", err);
           result(null, err);
         }else{
           console.log('cliente:',res);
           result (null, res);
         }
         });
}

exports.readOne = function(Cliente,result){
    dbConn.query (CONSULTAESP, Cliente, function (err, res){
      if(err){
        console. log("error: ", err);
        result(null, err);
      }else{
        console.log('cliente:',res);
        result (null, res);
      }
     });
    return result;
  }


exports.create = (nuevoCliente)=>{
  console.log(nuevoCliente);
  var result="1"; 
  dbConn.query (INSERT, nuevoCliente, function (err, res){
    if(err){
      result="0";
    }
   });
  return result;
}

exports.update = (Cliente)=>{
  console.log(Cliente);
  var result="1"; 
  dbConn.query (UPDATE, [Cliente.Nombre,Cliente.Apellido,Cliente.FechaNacimiento,Cliente.Telefono,Cliente.Direccion,Cliente.Correo], function (err, res){
    if(err){
      result="0";
    }
   });
  return result;
}

exports.delete = (Cliente)=>{
  console.log(Cliente);
  var result="1"; 
  dbConn.query (DELETE,[Cliente.Correo], function (err, res){
    if(err){
      result="0";
    }
   });
  return result;
}