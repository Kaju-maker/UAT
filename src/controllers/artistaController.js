'use strict';
const artista = require('../models/artista');

exports.readAll = function (req, res){

  artista.readAll((err, data) =>{
    if (err)
      res.status(500).send({
        message:
           err.message || "Ocurrió un error al consultas los datos."
      });
    else res.send(data);
  });
};

exports.create = function (req, res){
  const artistaData=new artista(req.body);
  var result=artista.create(artistaData);
  res.send(result);
}

exports.update = function (req, res){
  const artistaData=new artista(req.body);
  var result=artista.update(artistaData);
  res.send(result);
}

exports.delete = function (req, res){
  const artistaData=new artista(req.body);
  var result=artista.delete(artistaData);
  res.send(result);
}