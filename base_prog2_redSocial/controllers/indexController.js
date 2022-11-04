
const db =  require("../database/models");
let Post = db.Post;
const op = db.Sequelize.Op;

 const indexController = {
     // mostrar todo el index
     index: (req, res) => {
        Post.findAll().
                        then((resultados) => {
                            return res.render('index', {mascotas :resultados })
                        }).catch((error)=> {
                            console.log(error);
                        })
     },

     //id
     show: (req, res)=>  {
         let id = req.params.id;

         Post.findByPk(id, relaciones)
         .then((resultados)=> {
             return res.render('detallePost',{ posteo: resultados})
         })
         .catch((error)=>{
             return res.redirect('/')
         });

     },

     //buscador
     showOne : (req, res) => {
        let busqueda = req.query.mascota;
        
        let criterios = {
            where : [ { nombreUsuario : {[op.like]: "% + busqueda + %"} }]
        }
        post.findOne(criterios).
            then((resultados) => {
                return res.render("detalleUsuario", { detalle : resultados} ) // esto creo que esta mal
            })
                .catch((err)=> {
                    return res.redirect("/")
                });
    }
}

 

module.exports = indexController;


 /* lo de la primera parte 

 const dataBase = require("../db/index");

 const controlador = {
    index: function (req, res) {
       res.render('index',  {
            mascotasPost: dataBase.posteos
            
       })
    },
    buscador: function (req, res) {
        res.render('resultadoBusqueda',{
            
        })    
/* Creo que esto es lo que hay que hacer para el buscador
buscador : (req ,res) => {
    console.log(req.query.mascota)
}

    }


};*/




/* SEGUNDA PARTE

para ????
db.models.findAll({
    include:[
        {association : "Usuario" },
        {association : "Post"},
        {association : "Comentario",
        include:[{association:'Usuario'}]}
    ]
}).then (resultados => {
    //el codigo
}) 


*/