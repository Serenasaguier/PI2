const express= require('express');
const router= express.Router();

const postController= require('../controllers/postController');


//para configurar multer para posteos
const multer = require('multer');
const path = require('path');

let storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/posteos'));
    },
    filename: (req, file, cb)=> {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
     }
});

let upload = multer({storage:storage});

router.post('/agregarPost', upload.single('archivosubido') , postController.agregarPost)


//id
//mostrar posts
router.get('/detallePost/id/:id', postController.show)

// agregar post
router.get('/agregarPost', postController.agregarPost)

// editar post
router.get('/editarPost/id/:id', postController.editarPost)

//comentario
router.post('/detallePost/id/:id', postController.comments);

//borrar post
router.post('/detallepost/id/:id/delete', postController.delete);


module.exports= router;


 
