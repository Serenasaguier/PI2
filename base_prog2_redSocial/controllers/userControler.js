
/*SEGUNDA PARTE */

const db = require ('../database/models');
const bycript = require('bcryptjs');
const op = db.Sequelize.Op;
/* 
const { post } = require('../routes/user');
const Post = db.Post */
const usuario = db.Usuario
const posteo = db.Post;

const userController = {
    
    /* para crear usuarios */
    create: (req, res) =>{

        return res.render('registracion')
    },
    store: (req, res)=> {

        // validacion

        let errors = {};

        if (req.body.useremail === "" ) {
            errors.mensaje = "El campo email es obligatorio ";
            res.locals.errors = errors;
            return res.render('registracion');

         } else if( req.body.password === "" || req.body.password < 3  ) {
            errors.mensaje = "El campo contraseña es obligatorio o tiene que tener mas que 3 caracteres";
            res.locals.errors = errors;
            return res.render('registracion');
            
         } else {
             // almacenar info
        
        let guardarUsuario = req.body;
        let fotoPerfil;
        if (!req.file) {
            fotoPerfil= 'https://tse1.mm.bing.net/th?id=OIP.ho7hCKNowRHh7u5wu1aMWQHaF9&pid=Api&P=0'
        } else {
            fotoPerfil= req.file.filename
        }

        /* para guardarlo en la base de datos */
        let user = {
            nombreUsuario: guardarUsuario.username,
            email: guardarUsuario.useremail,
            contrasenia: bycript.hashSync(guardarUsuario.password, 10),
            fotoPerfil: fotoPerfil,
            cumpleanios: guardarUsuario.cumpleanios
        }
        usuario.create(user)
        .then((result)=>{
            return res.redirect('/user/login')
        })
        .catch((error)=>{
            return console.log(error)
        })
        }
    },
    
    //login
    login: function(req, res){
        return res.render('login')
    },
    // procesar el login
    procesarLogin: function(req, res) {
        let info = req.body
        let filtrar = {
            where: [{
                email: info.email
            }]
        };
        // validar email
        let error = {};

        if(info.email == "") {
            error.message = 'The email box is empty';
            res.locals.error = error;
            return res.render('login')
        } else if(info.contrasenia.length < 3){
            error.message = 'Passwords require more than 3 letters';
            res.locals.error = error;
            return res.render('login')
        }

        else{

            user.findOne(filtrar)
                .then((result) => {

                    if(result != null){

                        let passEncript = bcrypt.compareSync(info.contrasenia, result.contrasenia);

                        if(passEncript) {

                            req.session.user = result.dataValues;

                            if(req.body.rememberme != undefined){
                                res.cookie('userId', result.dataValues.id, { maxAge: 100 * 50 * 100})
                            }

                            return res.redirect('/');

                        } else {
                            error.message = 'Incorrect password';
                            res.locals.error = error;
                            return res.render('login');
                        }

                    } else {
                        error.message = 'Incorrect email';
                        res.locals.error = error;
                        return res.render('login');
                    }

                }) .catch((error) => {
                    console.log(error);
                })
        }
    },
    //id
    show: (req, res)=>  {
        let id = req.params.id;
        let relaciones = {
           include : [
               {
                   all : true,
                   nested: true
               }
           ]
       };

        usuario.findByPk(id, relaciones)
      
            .then((resultados)=> {
                res.render('detalleUsuario',{ detalle: resultados})
            })
           
        .catch(error => {
            console.log(error, 'el error es')
        })
        
       /* lo que hizo sere es casi igual a lo de arriba pero en vez de la info de usuario, la info de post
       
        let id = req.params.id

         posteo.findByPk( {
            include:[{association : 'usuario'},
                     {association:'comentario'},
                     {association: 'post'}],
                     include: {all:true, nested:true}
        }).then(result =>{    
            return res.render('detalleUsuario', {mascotasDetalle: result} )
            console.log(result)
        }).catch(error =>{
            res.send(error)
        }); */

    },

    miPerfil: function (req, res) {
       return res.render('miPerfil')
        
    }


}
   
module.exports= userController;

