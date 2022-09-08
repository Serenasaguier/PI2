const posteos= require('../db/index')

const postController={

 agregarPost: function (req, res) {
    res.render('agregarPost')
 },
 
 detallePost: function (req, res) {
    res.render('detallePost')
 }

};
module.exports= postController;