
const db =  require("../database/models");
let Post = db.Post;
let User = db.Usuario;
let Coments = db.Comentario;
const op = db.Sequelize.Op;

 const indexController = {
     // relaciones de los modelos, nose cual de todos esta bien
    index: (req, res) => {

        /* relaciones */
        let id = req.params.id;
        Post.findAll({
            include:[{association : 'usuario'},
                     {association:'comentario'},
                     {association: 'post'}],
                     include: {all:true, nested:true},
                     order:[
                         ['createdAt', 'DESC']
                     ]
        }).then(result =>{    
            return res.render('index', {mascotasPost: result} )
            console.log(result)
        }).catch(error =>{
            res.send(error)
        }); 
        

    }, 
     // TODO buscador, Buscar un posteo en base al caption y tiene que tener una opcion para que el usuario elija si qiere que aparezcan en orden ASC o DESC
     searchResults : (req, res) => {
        let busqueda = req.query.mascota;
        if (Post != undefined && null) {
            Post.findAll({
                where: [{caption: {[op.like]:"%" + busqueda + "%"}}],
                order: [["imagen","createdAt", "DESC"]],
                limit:10,
                include: {all: true, nested: true}
            } )
            .then((resultados)=>{
                res.render("resultadoBusqueda", {resultados :resultados})
            })
            .catch ((error)=> {
                console.log(error)
            })
        } else {
            console.log("No hay resultados para su criterio de búsqueda")
        }
       
    },
    // para que traiga los posteos de manera ASC O DESC
    create : (req, res)=> {
        Post.findAll({
            order: [ 
                [ "imagen","createdAt", "DESC"],
            ]
        });
    },
    comentarios: (req, res) => {
        db.findAll({
            order: [
                ['comentarios', 'DESC']
            ]
        })
    },

}

module.exports = indexController;