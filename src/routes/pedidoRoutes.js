'use strict';
var pedidoController=require('../controllers/pedidoController');

exports.assignRoutes = function (app) {
    app.get('/getPedidos', pedidoController.readAll);
    app.post('/createPedido', pedidoController.create);
    app.put('/updatePedido', pedidoController.update);
    app.delete('/deletePedido', pedidoController.delete);
}