'use strict';
var dbConn=require('../../config/dbConnection');

const CONSULTA="SELECT c.correo, c.nombre, c.apellido, c.FechaNacimiento, c.Telefono, c.Direccion  FROM cliente c";
const INSERT = "INSERT INTO cliente set ?";
const UPDATE = "UPDATE cliente SET nombre = ?, apellido = ?,FechaNacimiento = ?,Telefono = ?,Direccion = ? WHERE correo = ?";
const DELETE = "DELETE FROM cliente WHERE correo = ?";

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
  dbConn.query (UPDATE, [Cliente.nombre,Cliente.apellido,Cliente.FechaNacimiento,Cliente.Telefono,Cliente.Direccion,Cliente.correo], function (err, res){
    if(err){
      result="0";
    }
   });
  return result;
}

exports.delete = (Cliente)=>{
  console.log(Cliente);
  var result="1"; 
  dbConn.query (DELETE,[Cliente.correo], function (err, res){
    if(err){
      result="0";
    }
   });
  return result;
}