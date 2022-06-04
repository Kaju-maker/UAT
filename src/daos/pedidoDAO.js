'use strict';
var dbConn=require('../../config/dbConnection');

//const CONSULTA="SELECT * FROM Pedido";
const CONSULTA="SELECT c.IdPedido, c.Descripcion, c.Precio, c.Color1, c.Color2, c.Color3,c.Color4 ,c.Color5 ,c.FechaEntrega FROM Pedido c";
const INSERT = "INSERT INTO Pedido set ?";
const UPDATE = "UPDATE Pedido SET Descripcion = ?, Precio = ?,Color1 = ?, Color2 = ?, Color3 = ?, Color4 = ?, Color5 = ?, FechaEntrega = ? WHERE fk_artista1 = ?";
const DELETE = "DELETE FROM Pedido WHERE IdPedido = ?";

//select * from obra o, catalogo c where o.fk_Catalogo=c.IdCatalogo and c.fk_artista="correo del artista"
//select * from obra where IdCatalogo="caltalogo a ver"

exports.readAll = function(result){
   dbConn.query (CONSULTA, function (err, res){
         if(err){
           console. log("error: ", err);
           result(null, err);
         }else{
           console.log('Pedido:',res);
           result (null, res);
         }
         });
}

exports.create = (nuevoPedido)=>{
  console.log(nuevoPedido);
  var result="1"; 
  dbConn.query (INSERT, nuevoPedido, function (err, res){
    if(err){
      result="0";
    }
   });
  return result;
}

exports.update = (Pedido)=>{
  console.log(Pedido);
  var result="1"; 
  dbConn.query (UPDATE, [Pedido.Descripcion,Pedido.Precio,Pedido.Color1,Pedido.Color2,Pedido.Color3,Pedido.Color4,Pedido.Color5,Pedido.FechaEntrega,Pedido.fk_artista1], function (err, res){
    if(err){
      result="0";
    }
   });
  return result;
}

exports.delete = (Pedido)=>{
  console.log(Pedido);
  var result="1"; 
  dbConn.query (DELETE,[Pedido.IdPedido], function (err, res){
    if(err){
      result="0";
    }
   });
  return result;
}