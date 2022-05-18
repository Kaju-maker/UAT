'use strict';

var productoDAO=require('../daos/productoDAO');

var producto=function(producto){
    this.idProducto=producto.idProducto;                    
    this.descripcion=producto.descripcion;
    this.costo=producto.costo;
}

producto.readAll= (result) =>{
    productoDAO.readAll(function(err, res){
         if(err){
             console.log('error: ', err);
             result(null, err);
         }else{
             console.log('producto:', res);
             result(null, res);
         }
    });
};

producto.create= (nuevoProducto)=>{
    console.log(nuevoProducto);
    var result=productoDAO.create(nuevoProducto); 
    return result;
};

producto.update= (Producto)=>{
    console.log(Producto);
    var result=productoDAO.update(Producto); 
    return result;
};

producto.delete= (Producto)=>{
    console.log(Producto);
    var result=productoDAO.delete(Producto); 
    return result;
};

module.exports= producto;