
//exporto la funcion
module.exports = (sequelize, dataTypes) => {

    let alias = "Post"; 

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
        underscored : false 
    }

    //crear el metodo define con los tres parametros
    const Post = sequelize.define(alias, cols, config);

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