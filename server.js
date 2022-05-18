'use strict';
var express = require('express');
var bodyparser=require('body-parser');
var routes=require('./src/routes/productoRoutes');

var app=express();

app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json({limit: '10mb'}));

app.use(express.static(__dirname+ '/public'));

routes.assignRoutes(app);

app.listen(3000);

console.log( 'Server listening on port 3000');

