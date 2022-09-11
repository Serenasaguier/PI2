const express= require('express');
const { agregarPost } = require('../controllers/postController');
const router= express.Router();
const postController= require('../controllers/postController');

router.get('/agregarPost', postController.agregarPost);

router.get('/postDetail', postController.detallePost);

module.exports= router;