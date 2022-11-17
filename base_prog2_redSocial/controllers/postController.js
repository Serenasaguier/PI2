
  // SEGUNDA PARTE 

const db =  require("../database/models");

const post = db.Post;

 const postController = {
     show: (req, res) => {

      let id = req.params.id;
      post.findByPk(id,{
         include:[{association : 'usuario'},
                  {association:'comentario'},
                  {association: 'post'}],
                  include: {all:true, nested:true}
     }).then(result =>{    
         return res.render('detallePost', {mascotasDetalle: result} )
         console.log(result)
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

  /*      Post.findAll({
           include: {all:true, nested:true},
            order: [ 
                [ 'comentarios','createdAt', 'DESC'],
            ]
        }); */
    },
  agregarPost: function (req, res) {
    res.render('agregarPost')
 },
 detallePost: function (req, res) {
    res.render('detallePost', {  
    })
 }
 } 

module.exports = postController;  