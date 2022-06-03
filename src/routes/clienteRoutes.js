'use strict';
var clienteController=require('../controllers/clienteController');

exports.assignRoutes = function (app) {
    app.get('/getClientes', clienteController.readAll);
    app.get('/getCliente', clienteController.readOne);
    app.post('/createCliente', clienteController.create);
    app.put('/updateCliente', clienteController.update);
    app.delete('/deleteCliente', clienteController.delete);
}