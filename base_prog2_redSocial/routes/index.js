var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')


/* GET home page. */
router.get('/', indexController.index);


//router.get('/', indexController.create)
 router.get('/resultadoBusqueda', indexController.searchResults); 

// router.post('/', upload.single(''), indexController.store)

module.exports = router;
