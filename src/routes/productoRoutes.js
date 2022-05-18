'use strict';
var productoController=require('../controllers/productoController');

exports.assignRoutes = function (app) {
    app.get('/getProductos', productoController.readAll);
    app.post('/createProducto', productoController.create);
    app.put('/updateProducto', productoController.update);
    app.delete('/deleteProducto', productoController.delete);
}