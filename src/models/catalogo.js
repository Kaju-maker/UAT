'use strict';

var catalogoDAO=require('../daos/catalogoDAO');

var catalogo=function(catalogo){
    this.IdCatalogo=catalogo.IdCatalogo;
    this.TipoDeArte=catalogo.TipoDeArte;                    
    this.NumeroObras=catalogo.NumeroObras;
    this.Precio=catalogo.Precio;
}

catalogo.readAll= (result) =>{
    catalogoDAO.readAll(function(err, res){
         if(err){
             console.log('error: ', err);
             result(null, err);
         }else{
             console.log('producto:', res);
             result(null, res);
         }
    });
};

catalogo.create= (nuevoCatalogo)=>{
    console.log(nuevoCatalogo);
    var result=catalogoDAO.create(nuevoCatalogo); 
    return result;
};

catalogo.update= (catalogo)=>{
    console.log(catalogo);
    var result=catalogoDAO.update(catalogo); 
    return result;
};

catalogo.delete= (catalogo)=>{
    console.log(catalogo);
    var result=catalogoDAO.delete(catalogo); 
    return result;
};

module.exports= catalogo;