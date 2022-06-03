'use strict';

var pedidoDAO=require('../daos/pedidoDAO');

var pedido=function(pedido){
    this.IdPedido=pedido.IdPedido;                    
    this.Descripcion=pedido.Descripcion;
    this.Precio=pedido.Precio;
    this.Color1=pedido.Color1;
    this.Color2=pedido.Color2;
    this.Color3=pedido.Color3;
    this.Color4=pedido.Color4;
    this.Color5=pedido.Color5;
    this.Color5=pedido.Color5;
    this.FechaEntrega=pedido.FechaEntrega;
}

pedido.readAll= (result) =>{
    pedidoDAO.readAll(function(err, res){
         if(err){
             console.log('error: ', err);
             result(null, err);
         }else{
             console.log('producto:', res);
             result(null, res);
         }
    });
};

pedido.create= (nuevoPedido)=>{
    console.log(nuevoPedido);
    var result=pedidoDAO.create(nuevoPedido); 
    return result;
};

pedido.update= (Pedido)=>{
    console.log(Pedido);
    var result=pedidoDAO.update(Pedido); 
    return result;
};

pedido.delete= (Pedido)=>{
    console.log(Pedido);
    var result=pedidoDAO.delete(Pedido); 
    return result;
};

module.exports= pedido;