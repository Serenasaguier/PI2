const express= require('express');
const router= express.Router();

const postController= require('../controllers/postController');

router.get('/agregarPost', postController.agregarPost);
router.get('/postDetail', postController.detallePost);

//para configurar multer
const multer = require('multer');
const path = require('path');
const userController = require('../controllers/userControler');

let storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/posteos'));
    },
    filename: (req, file, cb)=> {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
     }
});

let upload = multer({storage:storage});

router.post('/detalleUsuario', upload.single('archivosubido') , userController.store)

// RUTA PARAM
router.get('/postDetail/id/:id', postController.obtenerPostId);

module.exports= router;


 
