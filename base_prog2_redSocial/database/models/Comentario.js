//exporto la funcion
module.exports = function (sequelize, dataTypes) {

    let alias = "Comentario"; 
    // el alias es el nombre con que sequelize va identificar este modelo, si yo le puse Post, el archivo tiene que estar escrito IGUAL 
    // IMPORTANTE : el alias tiene que ser llamado desde el controlador

    //creo la variable con la estructura de la tabla ( en este caso de usuario)
    let cols = {
         id: {
            autoIncrement : true,
            primaryKey : true, 
            type: dataTypes.INTEGER
        },
        id_posteos :{
            type: dataTypes.INTEGER
        },
        id_usuarios : {
            type: dataTypes.INTEGER
        },
        comentario1 : {
            type: dataTypes.STRING // nose si esta bien poner varchar
        },
        comentario2 : {
            type: dataTypes.STRING // nose si esta bien poner varchar
        },
        autor : {
            type: dataTypes.STRING // nose si esta bien poner varchar
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
        tableName : "comentarios",
        timestamps : true, 
        underscored : false //para determinar si la tabla tiene en su nombre un guion bajo
    }

    //crear el metodo define con los tres parametros
    let Comentario = sequelize.define( alias, cols, config);

/*  para relacionar */
Comentario.associate = function (models) {
    
    Comentario.belongsTo(models.Usuario, { 
        as:'usuario',
        foreignKey: 'id_usuarios'
        });
     Comentario.belongsTo(models.Post, { 
        as:'post',
        foreignKey: 'id_posteos'

    });

 }     

    //retornar el valor del modelo
    return Comentario;
}