'use strict';

var catalogoDAO=require('../daos/catalogoDAO');

var catalogo=function(Catalogo){
    this.IdCatalogo=Catalogo.IdCatalogo;
    this.TipoDeArte=Catalogo.TipoDeArte;                    
    this.Precio=Catalogo.Precio;
    this.fk_artista=Catalogo.fk_artista; 
    this.IdObra=Catalogo.IdObra;
    this.ImagenObra=Catalogo.ImagenObra;
}

catalogo.readAll= (result) =>{
    catalogoDAO.readAll(function(err, res){
         if(err){
             console.log('error: ', err);
             result(null, err);
         }else{
             console.log('Catalogo:', res);
             result(null, res);
         }
    });
};

catalogo.create= (nuevoCatalogo)=>{
    console.log(nuevoCatalogo);
    var result=catalogoDAO.create(nuevoCatalogo); 
    return result;
};

catalogo.createObra= (nuevaObra)=>{
    console.log(nuevaObra);
    var result=catalogoDAO.createObra(nuevaObra); 
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