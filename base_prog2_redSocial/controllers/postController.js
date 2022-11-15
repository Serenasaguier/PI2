
  // SEGUNDA PARTE 

const db =  require("../database/models");
let Post = db.Post;

 const postController = {
     show: (req, res) => {

    let id = req.params.id;
    let relaciones = {
        include : [
            {
              all : true,
              nested: true
                 }
        ]
   };
                  
     Post.findByPk(id, relaciones)
      .then((resultados)=> {
        return res.render('detallePost',{ posteo: resultados})
            })
        .catch((error)=>{
        return res.redirect('/')
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
        Post.findAll({
            order: [ 
                [ 'comentario', 'DESC'],
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
