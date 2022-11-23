const express= require('express');
const router = express.Router();

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



//id
//mostrar posts
router.get('/detallePost/id/:id', postController.show)

// crear post
router.get('/create', postController.create);
router.post('/store', upload.single('foto'), postController.store)

// editar post
router.get('/editarPost/id/:id', postController.editarPost)

//comentario
router.get('/detallePost/createComment', postController.createComment)
router.post('/detallePost/storeComment', postController.storeComment);
// mostrar comentarios
router.get('/detallePost/showComment', postController.showComment);

//borrar post
router.post('/detallepost/id/:id/delete', postController.delete);


module.exports= router;


 
