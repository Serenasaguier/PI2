const registro= require('../db/index');

const userController={
    registro: function (req, res) {
        res.render('registracion')
    },

    login: function (req, res) {
        res.render('login')
    },

    miPerfil: function (req, res) {
        res.render('miPerfil')
    },

    editarPerfil: function (req, res) {
       res.render('editarPerfil')
    }

    
};
module.exports= userController;