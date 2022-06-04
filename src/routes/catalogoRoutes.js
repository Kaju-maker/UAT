'use strict';
var catalogoController=require('../controllers/catalogoController');

exports.assignRoutes = function (app) {
    app.get('/getCatalogos', catalogoController.readAll);
    app.post('/createCatalogo', catalogoController.create);
    app.post('/createObra', catalogoController.createObra);
    app.put('/updateCatalogo', catalogoController.update);
    app.delete('/deleteCatalogo', catalogoController.delete);
}