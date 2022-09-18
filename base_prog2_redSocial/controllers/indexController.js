const dataBase = require("../db/index");

const controlador = {
    index: function (req, res) {
       res.render('index',  {
            mascotasPost: dataBase.posteos
            
       })
    },
    buscador: function (req, res) {
        res.render('resultadoBusqueda',{
            
        })
    }

};

module.exports = controlador;