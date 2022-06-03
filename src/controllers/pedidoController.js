'use strict';
const pedido = require('../models/pedido');

exports.readAll = function (req, res){

  pedido.readAll((err, data) =>{
    if (err)
      res.status(500).send({
        message:
           err.message || "Ocurrió un error al consultas los datos."
      });
    else res.send(data);
  });
};

exports.create = function (req, res){
  const pedidoData=new pedido(req.body);
  var result=pedido.create(pedidoData);
  res.send(result);
}

exports.update = function (req, res){
  const pedidoData=new pedido(req.body);
  var result=pedido.update(pedidoData);
  res.send(result);
}

exports.delete = function (req, res){
  const pedidoData=new pedido(req.body);
  var result=pedido.delete(pedidoData);
  res.send(result);
}