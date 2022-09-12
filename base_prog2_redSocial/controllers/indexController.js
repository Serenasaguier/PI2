const dataBase = require("../db/index");

const controlador = {
    index: function (req, res) {
       res.render('index',  {
          
            mascotasPost: dataBase.posteos
       })
    }

};

module.exports = controlador;