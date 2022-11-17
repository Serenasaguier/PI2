var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')


/* GET home page. */
router.get('/', indexController.index);
router.get('/resultadoBusqueda', indexController.searchResults); 
router.get('/resultadoBusquedaEmail', indexController.searchResultsEmail)

// router.post('/', upload.single(''), indexController.store)

module.exports = router;
