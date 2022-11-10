const express= require('express');
const router= express.Router();

const userController=  require('../controllers/userControler');


router.post('/registracion', userController.store);

router.get('/registracion', userController.create)

router.get('/login', userController.loginUsuario)

module.exports= router;

/*
router.get('/login', userController.login);
router.get('/profile', userController.miPerfil);
router.get('/edit', userController.editarPerfil);
router.get('/detailUser', userController.detalleUsuario); */

/*ruta param*/
router.get('/detailUser/id/:id', userController.show)

/* Ruta por post que procesa la info del formulario
router.post('/miPerfil', userController.login)
*/