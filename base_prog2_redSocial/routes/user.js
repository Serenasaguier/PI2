const express= require('express');
const postController = require('../controllers/postController');
const router= express.Router();
const userController=  require('../controllers/userControler');


const multer = require('multer');
const path = require('path');

// para guardar la foto de perfil con multer
// me tira error el upload

// router.post('/editarPerfil', upload.single('fotoPerfil') , userController.editarPerfil)


let storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images'));
    },
    filename: (req, file, cb)=> {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
     }
});


let upload = multer({storage:storage});


router.get('/registracion', userController.create);
router.post('/registracion', userController.store);

router.get('/login', userController.login);
router.post('/login', userController.procesarLogin);

router.get('/miPerfil', userController.miPerfil);

/*ruta param*/
router.get('/detalleUsuario/id/:id', userController.show);
router.get('/editarPerfil', userController.updatePerfil)

router.get('/logout', userController.logout);

module.exports= router;