const registro= require('../db/index');
const routes = require('../routes/user')

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
            }
            
        }
    
module.exports= userController;