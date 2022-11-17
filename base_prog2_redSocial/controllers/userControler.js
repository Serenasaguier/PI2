
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
            contrasenia: bycript.hashSync(guardarUsuario.password, 100),
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
            where: {
                email: info.email
            }
        };
        // validar email
        let error = {};

        if(info.email == "") {
            error.message = 'The email box is empty';
            res.locals.error = error;
            return res.render('login')
        } else if(info.password.length < 3){
            error.message = 'Passwords require more than 3 letters';
            res.locals.error = error;
            return res.render('login')
        }

        else{

            usuario.findOne(filtrar)
                .then((result) => {

                    if(result != null){

                        let passEncript = bycript.compareSync(info.password, result.contrasenia);

                        if(passEncript) {

                            req.session.user = result;

                            if(req.body.rememberme){
                                res.cookie('userId', result.dataValues.id, { maxAge: 100 * 50 * 100})
                            }

                            res.redirect('/');

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
    //logout
    logout: function (req, res) {
       
        if (req.cookies.userId !== undefined) {
            res.clearCookie('userId')
        }
        return res.redirect('/')
    },
    //id
    show: (req, res)=>  {
        let id = req.params.id;
        let relaciones = {
           include : 
               {
                   all : true,
                   nested: true
               },
               // order: ['createdAt', 'DESC']
           
       };

        usuario.findByPk(id, relaciones)
      
            .then((resultados)=> {
                res.render('detalleUsuario',{ detalle: resultados})
            })
           
        .catch(error => {
            console.log(error, 'el error es')
        })

    },

    miPerfil: function (req, res) {
       
       posteo.findAll({
        order: [["createdAt", "DESC"]],
        include: {all: true, nested: true}
    } )
    .then((result)=>{
        res.render("miPerfil", {result: result})
    })
    .catch ((error)=> {
        console.log(error)
    })
        
    },


}
   
module.exports= userController;

