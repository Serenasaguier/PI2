const express= require('express');
const router= express.Router();
const userController=  require('../controllers/userControler');

router.get('/register', userController.registro);
router.get('/login', userController.login);
router.get('/profile', userController.miPerfil);
router.get('/edit', userController.editarPerfil);
router.get('/detailUser', userController.detalleUsuario);

module.exports= router;