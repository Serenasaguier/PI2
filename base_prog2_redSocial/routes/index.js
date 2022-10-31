var express = require('express');
var router = express.Router();
const controller = require('../controllers/indexController')


/* GET home page. */
router.get('/', controller.index);

/* ruta del buscador SEGUNDA PARTE 
router.get('/busqueda/:id', controller.showOne); */




module.exports = router;
