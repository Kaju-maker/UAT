'use strict';

var pedidoDAO=require('../daos/pedidoDAO');

var pedido=function(Pedido){
    this.IdPedido=Pedido.IdPedido;                    
    this.Descripcion=Pedido.Descripcion;
    this.Precio=Pedido.Precio;
    this.Color1=Pedido.Color1;
    this.Color2=Pedido.Color2;
    this.Color3=Pedido.Color3;
    this.Color4=Pedido.Color4;
    this.Color5=Pedido.Color5;
    this.Color5=Pedido.Color5;
    this.FechaEntrega=Pedido.FechaEntrega;
}

pedido.readAll= (result) =>{
    pedidoDAO.readAll(function(err, res){
         if(err){
             console.log('error: ', err);
             result(null, err);
         }else{
             console.log('Pedido:', res);
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