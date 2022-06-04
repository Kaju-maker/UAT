'use strict';
var artistaController=require('../controllers/artistaController');

exports.assignRoutes = function (app) {
    app.get('/getArtistas', artistaController.readAll);
    app.post('/createArtista', artistaController.create);
    app.put('/updateArtista', artistaController.update);
    app.delete('/deleteArtista', artistaController.delete);
}