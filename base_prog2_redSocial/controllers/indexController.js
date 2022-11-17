
const db =  require("../database/models");
let Post = db.Post;
let User = db.Usuario;
let Coments = db.Comentario;
const op = db.Sequelize.Op;

 const indexController = {
     // relaciones de los modelos, nose cual de todos esta bien
    index: (req, res) => {

        /* relaciones */
     //   let id = req.params.id;
        Post.findAll({
          /*  include:[{association : 'usuario'},
                     {association:'comentario'},
                     {association: 'post'}],*/
                     include: {all:true, nested:true}, //cuando ponemos all no tenemos la necesidad de agregar una por una
                     order:[
                         ['createdAt', 'DESC']
                     ]
        }).then(result =>{   
            console.log(result)
 
            return res.render('index', {mascotasPost: result} )
        }).catch(error =>{
            res.send(error)
        }); 
        

    }, 
     // TODO buscador, Buscar un posteo en base al caption y tiene que tener una opcion para que el usuario elija si qiere que aparezcan en orden ASC o DESC
     searchResults : (req, res) => {
        let busqueda = req.query.mascota;
        console.log(busqueda)
      
            Post.findAll({
                where: [{caption: {[op.like]:"%"+busqueda+"%"}}],
                order: [["createdAt", "DESC"]],
                limit:10,
                include: {all: true, nested: true}
            } )
            .then((resultados)=>{
                   if (resultados != undefined || resultados != null) { 
                res.render("resultadoBusqueda", {resultados :resultados})
            }else {
                res.render("resultadoBusqueda", {resultados: [ ]})
            }
            })
            .catch ((error)=> {
                console.log(error)
            })
       
    },
    // para que traiga los posteos de manera ASC O DESC
    create : (req, res)=> {
        Post.findAll({
            order: [ 
                [ "createdAt", "DESC"],
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