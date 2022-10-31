const express= require('express');
const router= express.Router();

const postController= require('../controllers/postController');

router.get('/agregarPost', postController.agregarPost);
router.get('/postDetail', postController.detallePost);


// RUTA PARAM
router.get('/postDetail/id/:id', postController.obtenerPostId);

module.exports= router;