
  // SEGUNDA PARTE 

const db =  require("../database/models");
let Post = db.Post;

 const postController = {
     show: (req, res) => {

      
      Post.findByPk({
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
/* 
    let id = req.params.id;

   Post.findByPk(id,{
      include: [{
         association: 'usuario'
      }, {
         association: 'comentarios',
         include: [{
            association:'usuarios'
         }]
      }]
   })
   .then((resultados)=>{
      return res.render('detailpost', {detalle:resultados})
   })
   .catch((error)=>{
      console.log(error)
      return res.send(error);
   })*/
   /*           relaciones    
     Post.findByPk(id, relaciones)
      .then((resultados)=> {
        return res.render('detallePost',{ posteo: resultados})
            })
        .catch((error)=>{
        return res.redirect('/')
            });

         let relaciones = {
        include : [
            {
              all : true,
              nested: true
                 }
        ]
   };
            */
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
        Post.findAll({
           include: {all:true, nested:true},
            order: [ 
                [ 'comentarios','createdAt', 'DESC'],
            ]
        });
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