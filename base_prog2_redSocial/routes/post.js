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

router.post('/detalleUsuario', upload.single('archivosubido') , postController.agregarPost)


//id
router.get('/detallePost/id/:id', postController.show)
router.get('/agregarPost', postController.agregarPost)

router.get('/editarPost/id/:id', postController.editarPost)
module.exports= router;


 
