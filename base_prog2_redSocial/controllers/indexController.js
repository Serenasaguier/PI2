const dataBase = require("../db/index");

const controlador = {
    index: function (req, res) {
      //  let id = req.params.id
       res.render('index',  {
            mascotasPost: dataBase.posteos
            
       })
    }

};

module.exports = controlador;