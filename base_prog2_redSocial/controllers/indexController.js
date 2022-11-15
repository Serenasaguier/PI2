
const db =  require("../database/models");
let Post = db.Post;
let User = db.Usuario;
let Coments = db.Comentario;
const op = db.Sequelize.Op;

 const indexController = {
     // relaciones de los modelos, nose cual de todos esta bien
    index: (req, res) => {
       /*  Post.findAll({
            include : [
                {
                    all : true,
                    nested: true
                }
            ],
            order: [
                ['createdAt', 'DESC']
            ]
        })*/

        /* relaciones, esta esta bien???


        let relaciones = {
            include : [
                {
                    all : true,
                    nested: true
                }
            ]
        };
        Post.findAll(relaciones)
        .then(result =>{    
            return res.render('index', {mascotasPost: result} )
            console.log(result)
        }).catch(error =>{
            res.send(error)
        });*/

        /* relaciones, esta esta bien ?*/
        Post.findAll({
            include:[{association : 'usuarios'},
                     {association:'comentarios'},
                     {association: 'posteos'}],
                     include: {all:true, nested:true}
        }).then(result =>{    
            return res.render('index', {mascotasPost: result} )
            console.log(result)
        }).catch(error =>{
            res.send(error)
        }); 
        

/* nose si poner esto aca o en el show mas abajo
        let id = req.params.id;

        Post.findByPk(id, relaciones)
        .then((resultados)=> {
            return res.render('detallePost',{ posteo: resultados})
        })
        .catch((error)=>{
            return res.redirect('/')
        }); */
        


    }, 
     //id, relaciones (nose cual esta bien)
     show: (req, res)=>  {
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


     // TODO buscador, Buscar un posteo en base al caption y tiene que tener una opcion para que el usuario elija si qiere que aparezcan en orden ASC o DESC
     showOne : (req, res) => {
        let busqueda = req.query.mascota;
        let encontrado = db.showOne(encontrado)
        if (encontrado != undefined && null) {
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