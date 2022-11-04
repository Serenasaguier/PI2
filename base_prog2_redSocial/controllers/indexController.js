
const db =  require("../database/models");
let Post = db.Post;

 const indexController = {
     index: (req, res) => {
        Post.findAll().
                        then((resultados) => {
                            return res.render('index', {mascotas :resultados })
                        }).catch((error)=> {
                            console.log(error);
                        })
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

 const op = db.Sequelize.Op;


para las relaciones 
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

    ESTE DE SHOW SOLO NO ESTOY MUY SEGURA NI SI LO HICE BIEN NI COMO SIRVE NI NADA
    show : (req, res) => {
        let id = req.params.id;
        let relaciones = {
            include: [
                {all: true,
                nested: true}
            ]
        };
        post.findByPk(id, relaciones)
            .then((resultados) => {
                return res.render("detalleUsuario", { post : resultados})
            })
            .catch((err) => {
                return res.redirect("/")
            });
    },

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


*/