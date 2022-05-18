'use strict';
const producto = require('../models/producto');

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
  const productoData=new producto(req.body);
  var result=producto.create(productoData);
  res.send(result);
}

exports.update = function (req, res){
  const productoData=new producto(req.body);
  var result=producto.update(productoData);
  res.send(result);
}

exports.delete = function (req, res){
  const productoData=new producto(req.body);
  var result=producto.delete(productoData);
  res.send(result);
}