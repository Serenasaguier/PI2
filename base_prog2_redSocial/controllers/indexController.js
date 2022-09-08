const mascotas = require("../db/mascotas");

const controlador = {
    index: function (req, res) {
       res.render('index', {
            mascotas: mascotas
       })
    }, // para mostrar o listar recursos
    
    show: function (req, res) {
        
    }, // para mostrar el detalle de un recurso
    
    create: function (req, res) {
        
    }, // para mostrar el formulario de creacion de un recurso

};

module.exports = controlador;