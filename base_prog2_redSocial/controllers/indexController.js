
const db =  require("../database/models");
let Post = db.Post;
let Coments = db.Comentario;
const op = db.Sequelize.Op;

 const indexController = {
     // relaciones de los modelos, nose cual de todos esta bien
    index: (req, res) => {

        /* relaciones */
        Post.findAll({
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
     // TODO buscador, tiene que tener una opcion para que 
     // el usuario elija si quiere que aparezcan en orden ASC o DESC
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
    comentarios: (req, res) => {
        Coments.findAll({
            order: [
                ['comentarios', 'DESC']
            ]
        })
    },

}

module.exports = indexController;