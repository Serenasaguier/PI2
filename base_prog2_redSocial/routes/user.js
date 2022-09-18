const express= require('express');
const router= express.Router();

const userController=  require('../controllers/userControler');
const registro = require('../db/index')

router.get('/register', userController.registro);
router.get('/login', userController.login);
router.get('/profile', userController.miPerfil);
router.get('/edit', userController.editarPerfil);
router.get('/detailUser', userController.detalleUsuario);

//ruta param
router.get('/detailUser/id/:id', userController.obtenerUserId)

module.exports= router;

// userController.detalleUsuario