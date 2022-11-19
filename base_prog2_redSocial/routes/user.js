const express= require('express');
const postController = require('../controllers/postController');
const router= express.Router();
const userController=  require('../controllers/userControler');

router.post('/registracion', userController.store);
router.get('/registracion', userController.create);

router.get('/login', userController.login);
router.post('/login', userController.procesarLogin);

router.get('/miPerfil', userController.miPerfil);

// para guardar la foto de perfil con multer
// me tira error el router
// router.post('/detalleUsuario', upload.single('fotoPerfil') , userControler.store)

const multer = require('multer');
const path = require('path');
const userControler = require('../controllers/userControler');

let storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/fotoPerfil'));
    },
    filename: (req, file, cb)=> {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
     }
});

let upload = multer({storage:storage});


// router.get('/resultadoBusquedaEmail', userController.searchResultsEmail)

/*ruta param*/
router.get('/detalleUsuario/id/:id', userControler.show)




/*
router.get('/login', userController.login);

router.get('/edit', userController.editarPerfil);
router.get('/detailUser', userController.detalleUsuario); */

//Ruta por post que procesa la info del formulario
router.post('/miPerfil', userControler.login)
module.exports= router;