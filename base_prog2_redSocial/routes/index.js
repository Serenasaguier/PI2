var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')


/* GET home page. */
router.get('/', indexController.index);

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

router.get('/', indexController.create)
router.get('/detallePost', indexController.show)
router.get('/busqueda', indexController.showOne) /* router.get('/busqueda/:id', indexController.showOne); */

// router.post('/', upload.single(''), indexController.store)

module.exports = router;
