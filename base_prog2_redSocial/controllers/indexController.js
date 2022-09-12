const dataBase = require("../db/index");

const controlador = {
    index: function (req, res) {
       res.render('index', {
            mascotas: dataBase.usuarios,
            mascotasComent: dataBase.comentarios,
            mascotasPost: dataBase.posteos
       })
    }

};

module.exports = controlador;