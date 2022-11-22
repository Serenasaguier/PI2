
  // SEGUNDA PARTE 

const { QueryError } = require("sequelize");
const db =  require("../database/models");
const comentar = db.Comentario;
const Post = db.Post;

 const postController = {
     show: (req, res) => {

      let id = req.params.id;
      Post.findByPk(id,{
                  include: {all:true, nested:true} // si ponemos include all no es necesario agregar uno por uno arriba
     }).then(result =>{    
      return res.render('detallePost', {mascotasDetalle: result})
     }).catch(error =>{
         res.send(error)
     });

     }, 
      // para eliminar posteos
       delete:(req,res)=>{
         
      
         Post.destroy({ where: { id: req.params.id } })
         .then(function() {
             res.redirect('/user/miPerfil')
         })
         .catch(function(error) {
             res.send(error);
         })
         },

      create : (req, res)=> {
         let info = req.body;
         let imgPost = req.file.filename;
         let post = {
            imagen: imgPost,
            caption: info.imagen,
            users_id: info.users_id
         }

         let filtro = {
            where: {
               id: req.params.id
            }
         };

         if(req.session.user.id == post.users_id) {
            post.create(post, filtro)
            .then((result) => {
               console.log(post.users_id);
               return res.redirect('/')
            }) .catch((error) => {
               console.log(error);
            });

         } else {
            console.log(post.users_id);
            return res.redirect('/user/profile')
         }
    },
  agregarPost: function (req, res) {
    res.render('agregarPost')
    let error = {
       errores: ""
    }
    if(req.body.caption === '' ){
       error.errores = 'Debes asignarle un caption al post'
       res.locals.error = error;
    } else if (req.file === undefined){
       error.errores = error.errores + 'Agregar imagen'
    }

    let datos = {
       caption: req.body.caption,
       imagen: req.file.filename,
    }

    Post.create(datos)
    .then((result)=>{
       return res.redirect('/')
    })
    .catch(error => console.log(error))

    // debemos almacenar el posteo subido y guardarlo en la base de datos
 },

   detallePost:  function (req, res) {
      Post.findByPk(req.params.id)
    res.render('detallePost', {  
    })
 },
 editarPost: (req, res)=> {
      id= req.params.id
      Post.findByPk(id,{
                   include: {all:true, nested:true} // si ponemos include all no es necesario agregar uno por uno arriba
      }).then(result =>{    
       return res.render('editarPost', {datos: result})
      }).catch(error =>{
          res.send(error)
      });
  },
  comments: (req, res) => {
   if(req.session.user == undefined){
      res.redirect('/user/login')
    }else{

   let info = req.body;
   let comentario = {
       comentario: info.comentario,
       id_usuarios: req.session.user.id,   
   }
   comentar.create(comentario)
   .then((result) => {
       return res.redirect('/user/detallePost')
   }).catch((error) => {
       console.log(error);
   });
   
}
}
 } 

module.exports = postController;  