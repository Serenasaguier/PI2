const express= require('express');
const router= express.Router();

const postController= require('../controllers/postController');


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

router.post('/detailUser', upload.single('archivosubido') , userController.store)

//id
router.get('/detailPost/id/:id', postController.show)

router.get('/agregarPost', postController.agregarPost)

module.exports= router;


 
