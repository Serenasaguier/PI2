
//exporto la funcion
module.exports = function (sequelize, dataTypes) {

    //creo un alias para que sequelize sepa con que modelo debe conectarse
    let alias = " Usuario "; 
    // el alias es el nombre con que sequelize va   identificar este modelo, si yo le puse Post, el archivo tiene que estar escrito IGUAL 
    // IMPORTANTE : el alias tiene que ser llamado desde el controlador

    //creo la variable con la estructura de la tabla ( en este caso de usuario)
    let cols = {
        id : {
            autoIncrement : true,
            primaryKey : true, 
            type: dataTypes.INTEGER
        },
        nombreUsuario : { 
            type: dataTypes.STRING
        }, 
        email : {
            type: dataTypes.STRING
        }, 
        contrasenia : { 
            type: dataTypes.STRING
        }, 
        fotoPerfil : { 
            type: dataTypes.STRING
        }, 
        cumpleanios : { 
            type: dataTypes.DATE
        } 
    }

    //crear un obj lit con la configuracion de la tabla

    let config = {
        tableName : "usuarios",
        timestamps : true, 
        underscored : false //para determinar si la tabla tiene en su nombre un guion bajo
    }

    //crear el metodo define con los tres parametros
    let Usuario = sequelize.define( alias, cols, config);

    /*crear las relaciones */
    Usuario.associate = function (models) {
       Usuario.hasMany(models.Post, { 
            as:'post', // este va a ser el alias que vamos a llamar cuando lo usemos en el controlador
            foreignKey: 'id_posteos '
           }),
        Usuario.hasMany(models.Comentario,{
            as:'comentario',
            foreignKey: 'id_comentarios'
        }) 
    } 

    //retornar el valor del modelo
    return Usuario;
}