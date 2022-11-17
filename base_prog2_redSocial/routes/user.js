const express= require('express');
const router= express.Router();
const userController=  require('../controllers/userControler');

router.post('/registracion', userController.store);
router.get('/registracion', userController.create);

router.get('/login', userController.login);

router.get('/miPerfil', userController.miPerfil);

/*ruta param*/
router.get('/detalleUsuario/id/:id', userController.show)

module.exports= router;



/*
router.get('/login', userController.login);

router.get('/edit', userController.editarPerfil);
router.get('/detailUser', userController.detalleUsuario); */



//Ruta por post que procesa la info del formulario
router.post('/miPerfil', userController.login)


//para configurar multer



