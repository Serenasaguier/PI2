var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')


/* GET home page. */
router.get('/', indexController.index);
router.get('/resultados', indexController.buscador)

/* ruta del buscador SEGUNDA PARTE 
router.get('/busqueda/:id', controller.showOne); */




module.exports = router;
