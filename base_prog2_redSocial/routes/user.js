const express= require('express');
const postController = require('../controllers/postController');
const router= express.Router();
const userController=  require('../controllers/userControler');



router.get('/editarPerfil',userController.renderEPerfil )
router.post('/editarPerfil', userController.editarPerfil)

router.get('/registracion', userController.create);
router.post('/registracion', userController.store);

router.get('/login', userController.login);
router.post('/login', userController.procesarLogin);

router.get('/miPerfil', userController.miPerfil);

router.get('/detalleUsuario/id/:id', userController.show);
 router.get('/editarPerfil', userController.editarPerfil)

router.get('/logout', userController.logout);

module.exports= router;