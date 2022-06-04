'use strict';

var clienteDAO=require('../daos/clienteDAO');

var cliente=function(cliente){
    this.Correo=cliente.Correo;
    this.Apellido=cliente.Apellido;                    
    this.Nombre=cliente.Nombre;
    this.Contrasena=cliente.Contrasena;
    this.Telefono=cliente.Telefono;
    this.Direccion=cliente.Direccion;
    this.FechaNacimiento=cliente.FechaNacimiento;
    
}

cliente.readAll= (result) =>{
    clienteDAO.readAll(function(err, res){
         if(err){
             console.log('error: ', err);
             result(null, err);
         }else{
             console.log('Clientes:', res);
             result(null, res);
         }
    });
};

cliente.create= (nuevoCliente)=>{
    console.log(nuevoCliente);
    var result=clienteDAO.create(nuevoCliente); 
    return result;
};

cliente.update= (Cliente)=>{
    console.log(Cliente);
    var result=clienteDAO.update(Cliente); 
    return result;
};

cliente.delete= (Cliente)=>{
    console.log(Cliente);
    var result=clienteDAO.delete(Cliente); 
    return result;
};

module.exports= cliente;