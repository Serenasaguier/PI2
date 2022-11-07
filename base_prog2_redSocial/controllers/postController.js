 /*
 
 PRIMERA PARTE
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

 SEGUNDA PARTE 

const db =  require("../database/models");
let Post = db.Post;

 const postController = {
     show: (req, res) => {
        Post.findAll().
                        then((resultados) => {
                            return res.render('detallePost', {posteo :resultados })
                        }).catch((error)=> {
                            console.log(error);
                        })
     },
     store: (req, res)=> {
      
      // para editar posteos o perfiles
      db.update(
         {// nombre del campo a modificar : valor editado
         },
         {//where: id del registro a editar
         } )
        
      // para eliminar posteos
       destroy:(req,res)=>{
         let id = req.body.id;
         let filtro = {
            where:[{
                  id:id
            }]
         }
         db.destroy(filtro)
         .then((result)=>{
            return res.redirect('/')
         })
         .catch((err)=>{
            console.log(err);
            return res.redirect('/')
         })
      }
         }
 } 

module.exports = postController; */


