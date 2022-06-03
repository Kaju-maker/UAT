'use strict';
var express = require('express');
var bodyparser=require('body-parser');
var aRoutes=require('./src/routes/artistaRoutes');
var cRoutes=require('./src/routes/clienteRoutes');
var caRoutes=require('./src/routes/catalogoRoutes');
var pRoutes=require('./src/routes/pedidoRoutes');

var app=express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json({limit: '10mb'}));

app.use(express.static(__dirname+ '/public'));

aRoutes.assignRoutes(app);
cRoutes.assignRoutes(app);
caRoutes.assignRoutes(app);
pRoutes.assignRoutes(app);

app.listen(3000);

console.log( 'Server listening on port 3000');

