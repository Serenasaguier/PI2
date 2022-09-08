const express= require('express');
const router= express.Router();
const userController=  require('../controllers/userControler');

router.get('/register', userController.registro);
router.get('/login', userController.login);

module.exports= router;