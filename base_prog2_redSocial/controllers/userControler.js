
/*SEGUNDA PARTE */

const db = require ('../database/models');
const bycript = require('bcryptjs');
const usuario = db.Usuario

const userController = {
   
    /* para crear usuarios */
    create: (req, res) =>{
        /*db.create( { 
            mail: ,
            contrasenia: ,
            nombreDeUsuario:
        } ); */

        return res.render('registracion')
    }, 
    store: (req, res)=> {

        // validacion

        let errors = {};
        if (req.body.useremail == " " ) {
            errors.mensaje = "El campo email es obligatorio ";
            res.locals.errors = errors;
            return res.render('registracion');

         } else if( req.body.contrasenia == " " && req.body.useremail < 3  ) {
            errors.mensaje = "El campo contraseña es obligatorio o tiene que tener mas que 3 caracteres";
            res.locals.errors = errors;
            return res.render('registracion');
         } else {
             // almacenar info
        let guardarUsuario = req.body;
        let fotoPerfil = req.file.filename;

        /* para guardarlo en la base de datos */
        let user = {
            nombreUsuario: guardarUsuario.nombreUsuario,
            email: guardarUsuario.email,
            contrasenia: bycript.hashSync(guardarUsuario.contrasenia, 10),
            fotoPerfil: fotoPerfil
        }
        usuario.create(usuario)
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
        
        let informacion = req.body;
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
        .catch(error => console.log(error))
    }


}



/* PRIMERA PARTE

const registro= require('../db/index');
const userController={
    registro: function (req, res) {
        res.render('registracion')
    },

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

