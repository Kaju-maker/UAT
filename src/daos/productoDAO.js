'use strict';
var dbConn=require('../../config/dbConnection');

const CONSULTA="SELECT p.idProducto, p.descripcion, p.costo FROM producto p";
const INSERT = "INSERT INTO producto set ?";
const UPDATE = "UPDATE producto SET descripcion = ?, costo = ? WHERE idProducto = ?";
const DELETE = "DELETE FROM producto WHERE idProducto = ?";

exports.readAll = function(result){
   dbConn.query (CONSULTA, function (err, res){
         if(err){
           console. log("error: ", err);
           result(null, err);
         }else{
           console.log('producto:',res);
           result (null, res);
         }
         });
}

exports.create = (nuevoProducto)=>{
  console.log(nuevoProducto);
  var result="1"; 
  dbConn.query (INSERT, nuevoProducto, function (err, res){
    if(err){
      result="0";
    }
   });
  return result;
}

exports.update = (Producto)=>{
  console.log(Producto);
  var result="1"; 
  dbConn.query (UPDATE, [Producto.descripcion,Producto.costo,Producto.idProducto], function (err, res){
    if(err){
      result="0";
    }
   });
  return result;
}

exports.delete = (Producto)=>{
  console.log(Producto);
  var result="1"; 
  dbConn.query (DELETE,[Producto.idProducto], function (err, res){
    if(err){
      result="0";
    }
   });
  return result;
}