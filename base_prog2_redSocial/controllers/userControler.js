
/*SEGUNDA PARTE */

const db = require ('../database/models');
const bycript = require('bcryptjs');
const usuario = db.Usuario

const userController = {
    
    /* para crear usuarios */
    create: (req, res) =>{

        return res.render('registracion')
    },
    store: (req, res)=> {

        // validacion

        let errors = {};

        if (req.body.password === "" || req.body.password < 3) {
            errors.mensaje = "El campo contraseña es obligatorio o tiene que tener mas que 3 caracteres";
            res.locals.errors = errors;
            return res.render('registracion');
        } else if (req.body.username === ""){
            errors.mensaje = "El campo nombre de usuario es obligatorio";
            res.locals.errors = errors;
            return res.render('registracion');
        } else if (req.body.useremail === "") {
            errors.mensaje = "El campo email es obligatorio";
            res.locals.errors = errors;
            return res.render('registracion');

        } else {
            // almacenar info
            let guardarUsuario = req.body;
            let fotoPerfil;
            let errors = {};
            if (!req.file) {
                fotoPerfil = 'https://tse1.mm.bing.net/th?id=OIP.ho7hCKNowRHh7u5wu1aMWQHaF9&pid=Api&P=0'
            } else {
                fotoPerfil = req.file.filename
            }
            /* para guardarlo en la base de datos */
            guardarUsuario.password = bycript.hashSync(guardarUsuario.password.toString(), 10)
            let user = {
                nombreUsuario: guardarUsuario.username,
                email: guardarUsuario.useremail,
                contrasenia: guardarUsuario.password,
                fotoPerfil: fotoPerfil,
                cumpleanios: guardarUsuario.cumpleanios
            }
            //Chequear que el email no exista en la base.
            usuario.findOne({
                where: {
                    email: req.body.useremail
                }
            })
                .then(function (otroUsuario) {
                    if (otroUsuario) {
                        errors.mensaje = "El email ya existe. Por favor, elija otro.";
                        res.locals.errors = errors;
                         res.render('registracion');
                    } else {
                         usuario.create(user)
                            .then((result) => {
                               
                                return res.redirect('/user/login')
                            })
                            .catch((error) => {
                                
                                console.log(error)
                            })
                    }
                })
                .catch(error => console.log(error))
            ;
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
                    console.log(result)
                    if(result != null){

                        let passEncript = bycript.compareSync(info.password, result.contrasenia);

                        if(passEncript) {

                            req.session.user= result;

                            if(req.body.rememberme != undefined){
                                res.cookie('userId', result.dataValues.id, { maxAge: 1000 * 60 * 100})
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
    //logout
    logout: function (req, res) {
       
       req.session.user= null ;
       res.clearCookie('userId');
       res.redirect('/user/login')
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
       
    usuario.findByPk(req.session.user.id, {include: {all: true, nested: true}})
    .then((result)=> {
        return res.render('miPerfil', {result: result})
    })
    .catch ((error)=> {
        console.log(error)
    })
        
    },

     /*updatePerfil:(req, res) =>{
         return res.render('editarPerfil',{
             edit : req.session.user
         })
    },*/

    editarPerfil: (req, res)=> {

        let rb = req.body;
        
        let user = {
            email: rb.useremail,
            nombreUsuario: rb.username,
           // contrasenia: bycript.hashSync(rb.contrasenia, 10),
           // fotoPerfil: req.file.filename
        }
        usuario.update(user, {
                where: {
                    id: req.session.user.id
                    // o {where: [{id: req.body.id}]}
                }
            })
            .then(function (data) {
                if (req.file) {
                    req.session.user.fotoPerfil = req.file.filename

                res.redirect('/user/editarPerfil')
                }
            })
            .catch(function (error) {
                console.log(error)
                res.send(error)
            })
    
            id= req.session.user.id

            usuario.findByPk(id,{
                        include: {all:true, nested:true} 
            }).then(result =>{    
            return res.render('editarPerfil', {result: result})
            }).catch(error =>{
                res.send(error)
            });
}
}
   
module.exports= userController;