
const db =  require("../database/models");
let Post = db.Post;
let User = db.Usuario;
let Coments = db.Comentario;
const op = db.Sequelize.Op;

 const indexController = {
     // mostrar todo el index
     index: (req, res) => {
        
       /* Post.findAll()
                        .then((resultados) => {
                            return res.render('index', {mascotasPost :resultados })
                        }).catch((error)=> {
                            console.log(error);
                        }),

        User.findAll()
                        .then((resultados)=>{
                            return res.render('index', {mascotasUser : resultados})
                        })
                        .catch((error)=>{
                            console.log(error)
                        }),
        Coments.findAll()
                        .then((resultados)=>{
                            return res.render('index', {mascotasComents:resultados})
                        }) */
        Post.findAll({
            include: {all: true, nested: true}
        })
            .then((resultados) => {
                return res.render('index', {mascotasPost: resultados})
            })
            .catch((error)=> {
                console.log(error);
            })
     },

     //id
     show: (req, res)=>  {
         let id = req.params.id;
         let relaciones = {
            include : [
                {
                    all : true,
                    nested: true
                }
                // {association:'posteos'},
                // {association:'usuarios'}

            ]
        };

         db.findByPk(id, relaciones)
         .then((resultados)=> {
             return res.render('detallePost',{ posteo: resultados})
         })
         .catch((error)=>{
             return res.redirect('/')
         });

     },

     // TODO buscador
     showOne : (req, res) => {
        let busqueda = req.query.mascota;
        

        let encontrado = db.showOne(encontrado)
        
         if (encontrado.length > 0) {
             let criterios = {
             where : [{nombreUsuario : {[op.like]: "%" + busqueda + "%"}}],
             order : [["imagen", "DESC"]],
             limit : 10 
             }
             Post.findOne(criterios)
                     .then((resultados) => {
            return res.render("resultadoBusqueda", { detalle : resultados} ) // esto creo que esta mal
       })
           .catch((err)=> {
               return res.redirect("/")
           });
                    return res.send(encontrado)
         } else {
                    return res.send('No hay resultados para su criterio de búsqueda');
        }
    },
    // para que traiga los posteos de manera ASC O DESC
    create : (req, res)=> {
        Post.findAll({
            order: [ 
                [ 'createdAt', 'DESC'],
            ]
        });
    },

    // para hacer las relaciones de los modelos, cambiar el store
    store: (req, res) => {
        Post.findAll({
            include: [
                {association: "usuario"/* , include: [ {association:"post"}, {association: "comentario"}]*/ },
                {association: "post" /*, include: [ {association:"usuario"}, {association: "comentario"}]*/ },
                {association: "comentario" /*, include: [ {association:"usuario"}, {association:"post"}]*/ }
            ]
        })
    }
}

 

module.exports = indexController;