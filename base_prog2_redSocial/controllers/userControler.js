const registro= require('../db/index');
const router = require('../routes/user');
const routes = require('../routes/user');


const userController={
    registro: function (req, res) {
        res.render('registracion')
    },

    login: function (req, res) {
        res.render('login')
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
                    detalle: registro.usuarios,
                    detalleImagen : registro.posteos
                })
            },
        
            

            obtenerUserId: function (req, res) {
                let id = req.params.id;
                let resultados = [];
                for (let i = 0; i < registro.usuarios.length; i++) {
                    if (registro.usuarios[i].id == id) {
                        resultados.push(registro.usuarios[i])
                    }     
                }
               
                return res.render ('detalleUsuario',{
                    detalle: resultados,
                    detalleImagen: registro.posteos,
                    
                });
            }
}
   
    
module.exports= userController;