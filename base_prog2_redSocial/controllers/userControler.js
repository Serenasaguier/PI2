const registro= require('../db/mascotas');

const userController={
    registro: function (req, res) {
        res.render('registracion')
    },
    login: function (req, res) {
        res.render('login')
    },
    miPerfil: function (req, res) {
        res.render('miPerfil')
    }

    
}
module.exports= userController;