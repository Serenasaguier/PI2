//exporto la funcion
module.exports = function (sequelize, dataTypes) {

    //creo un alias para que sequelize sepa con que modelo debe conectarse
    let alias = " Comentario "; //nosotros vamos a tener 3 alias : post, comentarios, usuarios
    // el alias es el nombre con que sequelize va   identificar este modelo, si yo le puse Post, el archivo tiene que estar escrito IGUAL 
    // IMPORTANTE : el alias tiene que ser llamado desde el controlador

    //creo la variable con la estructura de la tabla ( en este caso de usuario)
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true, 
            type: dataTypes.INTEGER
        },
        id_posteo :{
            type: dataTypes.INTEGER
        },
        id_usuario : {
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
        }
    }

    //crear un obj lit con la configuracion de la tabla

    let config = {
        tableName : "comentarios",
        timestamps : true, 
        underscored : true //para determinar si la tabla tiene en su nombre un guion bajo
    }

    //crear el metodo define con los tres parametros
    let Pet = sequelize.define( alias, cols, config);

    //retornar el valor del modelo
    return Pet;
}