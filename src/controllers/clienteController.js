'use strict';
const cliente = require('../models/cliente');

exports.readAll = function (req, res){

  producto.readAll((err, data) =>{
    if (err)
      res.status(500).send({
        message:
           err.message || "Ocurrió un error al consultas los datos."
      });
    else res.send(data);
  });
};

exports.create = function (req, res){
  const clienteData=new cliente(req.body);
  var result=producto.create(clienteData);
  res.send(result);
}

exports.update = function (req, res){
  const clienteData=new cliente(req.body);
  var result=producto.update(clienteData);
  res.send(result);
}

exports.delete = function (req, res){
  const clienteData=new cliente(req.body);
  var result=producto.delete(clienteData);
  res.send(result);
}