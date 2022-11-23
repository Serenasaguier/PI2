
  // SEGUNDA PARTE 

const { QueryError } = require("sequelize");
const db =  require("../database/models");
const Usuario = require("../database/models/Usuario");
const Comment = db.Comentario;
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

   create: (req,res) => {
      return res.render('agregarPost')
   } ,
   store: (req, res) => {

      if(req.session.user == undefined){
         res.redirect('/user/login')
      }

      let posteo = {
         users_id: req.session.user.id,
         foto: req.file.filename,
         caption: req.body.caption
      };
      let errors = {};
         if (data.foto == "") {
            errors.message = 'A photo is required';
            res.locals.errors = errors;
            return res.render('agregarPost')

            
        } else if (data.caption == "") {
            errors.message = 'A caption is needed';
            res.locals.errors = errors;
            return res.render('agregarPost')


        }  else{ Post.create(posteo)
            .then((result) => {
                return res.redirect('/')
            }).catch((err) => {
                return res.send('Hay un error' + err)
            });}

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
  createComment: (req, res) => {
   return res.render('/user/detallePost')
  },
  storeComment: (req, res) => {
   if(req.session.user == undefined){
      res.redirect('/user/login')
    }else{

      let comentario = {
       comentario: req.body.comentario,
       id_usuarios: req.session.user.id,  
       autor: req.body.comentario.autor 
   };

   Comment.create(comentario)
   .then((result) => {
       return res.redirect('/user/detallePost')
   }).catch((error) => {
       console.log(error);
   });
   
   };
   },
   showComment: (req, res) => {
      let usuarioDelPost = req.params.id
      Comment.findAll({
         include: [
            {all: true, nested: true}
         ],
         where: [
            {id_usuarios: usuarioDelPost}
         ],
         order: [
            ['createdAt', 'DESC']
         ]
      }).then(result =>{    
         return res.render('detallePost', {comentado: result})
        }).catch(error =>{
            res.send(error)
        });
   }
 } 

module.exports = postController;  