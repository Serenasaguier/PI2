
const db =  require("../database/models");
let Post = db.Post;
let Coments = db.Comentario;
const op = db.Sequelize.Op;
let usuario = db.Usuario;

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
            console.log(result)
 
            return res.render('index', {mascotasPost: result} )
        }).catch(error =>{
            res.send(error)
        }); 
        

    }, 
     
    searchResultsEmail : (req, res) => {
        let busqueda = req.query.usuario;
        console.log(busqueda)
      
        usuario.findAll({
                where: [{nombreUsuario: {[op.like]:"%"+busqueda+"%"}}],
                limit:10,
                include: {all: true, nested: true}
            } )
            .then((result)=>{
                   if (result != undefined || result != null) { 
                res.render("resultadoBusquedaEmail", {result :result})
            }else {
                res.render("resultadoBusquedaEmail", {result: [ ]})
            }
            })
            .catch ((error)=> {
                console.log(error)
            })
       
    },
     // TODO buscador, tiene que tener una opcion para que 
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