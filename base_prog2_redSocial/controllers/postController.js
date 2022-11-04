const posteos= require('../db/index')


const postController={

 agregarPost: function (req, res) {
    res.render('agregarPost')
 },
 
 detallePost: function (req, res) {
  
    res.render('detallePost', {
      
    })
 },

 obtenerPostId: function (req, res) {
   let id= req.params.id;
   let resultados= [];
   for (let i = 0; i < posteos.posteos.length; i++) {
    if (posteos.posteos[i].id == id) {
      resultados.push(posteos.posteos[i])
    }
      
   }
   return res.render('detallepost', {
      detalle:resultados,
      posteos: posteos.usuarios,
       comentarios: posteos.comentarios,
       posteosFoto: posteos.posteos

   })
 }
};


module.exports= postController;

/* SEGUNDA PARTE

const db =  require("../database/models");
let Post = db.Post;

 const postController = {
     detallePost: (req, res) => {
        Post.findAll().
                        then((resultados) => {
                            return res.render('detallePost', {posteo :resultados })
                        }).catch((error)=> {
                            console.log(error);
                        })
     }
 }

module.exports = postController;
*/
