'use strict';
const catalogo = require('../models/catalogo');

exports.readAll = function (req, res){

    catalogo.readAll((err, data) =>{
    if (err)
      res.status(500).send({
        message:
           err.message || "Ocurrió un error al consultas los datos."
      });
    else res.send(data);
  });
};

exports.create = function (req, res){
  const catalogoData=new catalogo(req.body);
  var result=catalogo.create(catalogoData);
  res.send(result);
}

exports.createObra = function (req, res){
  const catalogoData=new catalogo(req.body);
  var result=catalogo.createObra(catalogoData);
  res.send(result);
}

exports.update = function (req, res){
  const catalogoData=new catalogo(req.body);
  var result=catalogo.update(catalogoData);
  res.send(result);
}

exports.delete = function (req, res){
  const catalogoData=new catalogo(req.body);
  var result=catalogo.delete(catalogoData);
  res.send(result);
}