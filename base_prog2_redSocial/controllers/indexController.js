const dataBase = require("../db/index");

const controlador = {
    index: function (req, res) {
       res.render('index', {
            mascotas: dataBase.usuarios
       })
    }, // para mostrar o listar recursos
    
    show: function (req, res) {
        
    }, // para mostrar el detalle de un recurso
    
    create: function (req, res) {
        
    }, // para mostrar el formulario de creacion de un recurso

};

module.exports = controlador;