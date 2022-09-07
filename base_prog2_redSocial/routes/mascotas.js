const express = require('express');
const router = express.Router();
const mascotasControllers = require('../controllers/mascotasController');
const mascotas = require('../db/mascotas')

//RUTA

router.get('/', mascotasControllers.index) // lo mismo con show y create



module.exports = router;