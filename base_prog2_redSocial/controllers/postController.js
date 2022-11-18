
  // SEGUNDA PARTE 

const db =  require("../database/models");

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
     store: (req, res)=> {
      
      // para editar posteos o perfiles
      db.update(
         {// nombre del campo a modificar : valor editado
         },
         {//where: id del registro a editar
         } )
      },
        
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
  }
 } 

module.exports = postController;  