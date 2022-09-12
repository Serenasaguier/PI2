const posteos= require('../db/index')

const postController={

 agregarPost: function (req, res) {
    res.render('agregarPost')
 },
 
 detallePost: function (req, res) {
  
    res.render('detallePost', {
       posteos: posteos.usuarios,
       comentarios: posteos.comentarios,
    })
 }

};
module.exports= postController;