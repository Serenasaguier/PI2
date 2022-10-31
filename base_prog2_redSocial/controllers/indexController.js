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
    }

};

module.exports = controlador;


/* SEGUNDA PARTE
 Me parece que hay que hacer esto para mostrar todos los posteos en el index

 const db = require('../database/models');
 const post = db.Post; 
 const op = db.Sequelize.Op;

const indexController = {
    index : function (req, res){
        post.findAll().
                then((resultados) => {
                    return res.render("index", { mascotasPost : resultados} )
                })
    },

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


esto es para la busqueda

sh

*/