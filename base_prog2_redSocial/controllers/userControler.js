const registro= require('../db/index');
/*SEGUNDA PARTE */

const db = require ('../database/models');
const bycipt = require('bycriptjs')

const userController = {
    create: (req, res) =>{
        return res.render('registracion')
    },
    store: (req, res)=> {
        let guardarUsuario = req.body
        let imagenPerfil = req.file.filename;

        /* para guardarlo en la base de datos */
        let user = {
            nombreUsuario: guardarUsuario.nombreUsuario,
            email: guardarUsuario.email,
            contrasenia: bycript.hashSync(guardarUsuario.contrasenia, 10),
            fotoPerfil: guardarUsuario.fotoPerfil
        }
        user.create(user)
        .then((result)=>{
            return res.redirect('/user/login')
        })
        .catch((error))
    }
}



/* PRIMERA PARTE


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

