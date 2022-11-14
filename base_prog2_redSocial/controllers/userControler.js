
/*SEGUNDA PARTE */

const db = require ('../database/models');
const bycript = require('bcryptjs');
const Post = require('../database/models/Post');
const usuario = db.Usuario

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
    loginUsuario: (req, res)=> {


    /* para encriptar la contrasenia que nose si esta bien o si ni siquiera hace falta por lo que hice abajo
    let passEncriptada = bcrypt.hashSync('monito123', 10);

    db.Usuario.create({
        name: "",
        username: "",
        password: passEncriptada
    });
    
    let contrasenia = bcrypt.hashSync(contrasenia, 10) */
        
       /*  let informacion = req.body;
        let criterio = { 
            where:[{email:informacion.email}]
        }
        usuario.findOne(criterio)
        .then((result)=>{
            if (result != null) {
                let passEncriptada= bycript.compareSync(info.contrasenia, result.contrasenia);
                if (passEncriptada) {
                    req.session.user = result.dataValues;
                    if (informacion.recordar != undefined) {
                        res.cookie('id', result.dataValues.id, {maxAge: 1000 * 60 * 5})
                    }
                    return res.redirect('/')
                } else {
                    return res.send('La clave no coincide')
                }
            }
        })
        .catch(error => console.log(error)) */
        return res.render('login')
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
               // {association:'posteos'},
               // {association:'usuarios'}

           ]
       };

        Post.findByPk(id, relaciones) // no funciona el findByPk
        .then((resultados)=> {
            return res.render('detallePost',{ posteo: resultados})
        })
        .catch((error)=>{
            return res.redirect('/')
        });

    },

    miPerfil: function (req, res) {
       return res.render('miPerfil')
        
    }


}



/* PRIMERA PARTE

const registro= require('../db/index');

    login: function (req, res) {
        res.render('login')
        /* para capturar la info con post
        
        (req, res) => {
            console.log(req.body)
            res.redirect('/miPerfil')
        }
    },

    miPerfil: function (req, res) {
        res.render('miPerfil', {
            detalle : registro.usuarios,
            detalleImagen : registro.posteos
        })
    },

    editarPerfil: function (req, res) {
       res.render('editarPerfil')
    },

    detalleUsuario: function (req, res) {
        
        res.render('detalleUsuario', {
                    detalle: registro.usuarios
                })
            }, 

    obtenerUserId: function (req, res) {
        let id = req.params.id;
        let resultados = [];
            for (let i = 0; i < registro.usuarios.length; i++) {
                if (registro.usuarios[i].id == id) {
                    resultados.push(registro.usuarios[i])
                }     
            };
        let resultadosPost = [];
            for (let i = 0; i < registro.posteos.length; i++) {
                if (registro.posteos[i].id_usuario == id) {
                    resultadosPost.push(registro.posteos[i])
                }
            };
               
        return res.render ('detalleUsuario',{
            detalle: resultados,
            detallePost: resultadosPost                  
        });
    },   
}
*/


    
module.exports= userController;

