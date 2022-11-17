
//exporto la funcion
module.exports = (sequelize, dataTypes) => {

    //creo un alias para que sequelize sepa con que modelo debe conectarse
    let alias = "Post"; //nosotros vamos a tener 3 alias : post, comentarios, usuarios
    // el alias es el nombre con que sequelize va   identificar este modelo, si yo le puse Post, el archivo tiene que estar escrito IGUAL 
    // IMPORTANTE : el alias tiene que ser llamado desde el controlador

    //creo la variable con la estructura de la tabla ( en este caso de usuario)
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true, 
            type: dataTypes.INTEGER
        },
        id_usuarios:{
            type: dataTypes.INTEGER
        },
        imagen:{
            type: dataTypes.STRING// nose si esta bien poner varchar ahi
        },
        caption:{
            type: dataTypes.STRING // nose si esta bien poner varchar ahi
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        }
    }

    //crear un obj lit con la configuracion de la tabla

    let config = {
        tableName : "posteos",
        timestamps : true, 
        underscored : false //para determinar si la tabla tiene en su nombre un guion bajo
    }

    //crear el metodo define con los tres parametros
    let Post = sequelize.define(alias, cols, config);

    /*crear las relaciones*/
    Post.associate = function (models) {
       Post.belongsTo(models.Usuario, { 
            as:'usuario',
            foreignKey: 'id_usuarios'
        });
        Post.hasMany(models.Comentario, {
            as: 'comentario',
            foreignKey : 'id_posteos'
        });
    };

    //retornar el valor del modelo
    return Post;
}