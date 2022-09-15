let express = require('express');
let routes = express.Router();

// me parece que hay que poner los  posteos de cada usuario
const index = {
    usuarios: [

        {
            id: 1,
            nombreUsuario: 'toroloco',
            email: 'toroloco@gmail.com',
            contrasenia: 'Toro2012',
            fotoPerfil: '/images/canicheone.jpeg',
            cumpleanios: 12 - 12 - 2012
        }, {
            id: 2,
            nombreUsuario: 'tamakito',
            email: 'tamak@gmail.com',
            contrasenia: 'Tamak2022',
            fotoPerfil: '/images/gatoone.jpeg',
            cumpleanios: 15 - 02 - 2022
        }, {
            id: 3,
            nombreUsuario: 'mayo.nesa',
            email: 'mayo@gmail.com',
            contrasenia: 'Mayo2022',
            fotoPerfil: '/images/mayoone.jpeg',
            cumpleanios: 22 - 04 - 2022
        },
        {
            id: 4,
            nombreUsuario: 'pepita_jr',
            email: 'pepa@gmail.com',
            contrasenia: 'Pepa2013',
            fotoPerfil: '/images/pepaone.jpeg',
            cumpleanios: 30 - 07 - 2013
        }, {
            id: 5,
            nombreUsuario: 'quinto5',
            email: 'quinto@gmail.com',
            contrasenia: 'Quinto2017',
            fotoPerfil: '/images/quinto1.jpeg',
            cumpleanios: 12 - 05 - 2017
        }
    ],
    posteos: [
        {
            id: 1,
            id_usuario: 5,
            imagen: '/images/quinto2.jpeg',
            caption: 'Jugando con mamá',
            nombreUsuario: 'quinto5',
            fotoPerfil: '/images/quinto1.jpeg',
            comentarios : [ 
                {
                id_posteo: 1,
                comentario: 'Me encanta esta foto',
                autor: 'pepita_jr',
                fotoPerfil: '/images/pepatwo.jpeg'
            },{
                id_posteo: 1,
                comentario: 'Que copado',
                autor: 'mayo.nesa',
                fotoPerfil: '/images/mayoone.jpeg'
            },
        ]
        },
        {
            id: 6,
            id_usuario: 5,
            imagen: '/images/quinto3.jpeg',
            caption: 'En el parque',
            nombreUsuario: 'quinto5',
            fotoPerfil: '/images/quinto1.jpeg',
            comentarios : [ 
                {
                id_posteo: 6,
                comentario: 'Me encanta esta foto',
                autor: 'pepita_jr',
                fotoPerfil: '/images/pepatwo.jpeg'
            },{
                id_posteo: 6,
                comentario: 'Que copado',
                autor: 'mayo.nesa',
                fotoPerfil: '/images/mayoone.jpeg'
            },
        ]
        }, {
            id: 2,
            id_usuario: 3,
            imagen: '/images/mayo2.png',
            caption: 'primer plano', 
            nombreUsuario: 'mayo.nesa',
            fotoPerfil: '/images/mayoone.jpeg',
            comentarios : [ 
                {
                id_posteo: 2,
                comentario: 'Divino!',
                autor: 'quinto5',
                fotoPerfil: '/images/quinto1.jpeg'
            },{
                id_posteo: 2,
                comentario: 'Donde estas?',
                autor: 'tamakito',
                fotoPerfil: '/images/gatoone.jpeg'
            },
        ]

        },
        {
            id: 7,
            id_usuario: 3,
            imagen: '/images/mayo3.png',
            caption: 'primer plano', 
            nombreUsuario: 'mayo.nesa',
            fotoPerfil: '/images/mayoone.jpeg',
            comentarios : [ 
                {
                id_posteo: 7,
                comentario: 'Divino!',
                autor: 'quinto5',
                fotoPerfil: '/images/quinto1.jpeg'
            },{
                id_posteo: 7,
                comentario: 'Donde estas?',
                autor: 'tamakito',
                fotoPerfil: '/images/gatoone.jpeg'
            },
        ]

        }, {
            id: 3,
            id_usuario: 4,
            imagen: '/images/pepatwo.jpeg',
            caption: 'jajaja rockstar',
            nombreUsuario: 'pepita_jr',
            fotoPerfil: '/images/pepaone.jpeg',
            comentarios : [ 
                {
                id_posteo: 3,
                comentario: 'Wachi :)',
                autor: 'toroloco',
                fotoPerfil: '/images/canicheone.jpeg'
            },{
                id_posteo: 3,
                comentario: 'Que locura!',
                autor: 'mayo.nesa',
                fotoPerfil: '/images/mayoone.jpeg'
            },
        ]
        },{
            id: 8,
            id_usuario: 4,
            imagen: '/images/pepa3.jpeg',
            caption: 'jajaja rockstar',
            nombreUsuario: 'pepita_jr',
            fotoPerfil: '/images/pepaone.jpeg',
            comentarios : [ 
                {
                id_posteo: 8,
                comentario: 'Wachi :)',
                autor: 'toroloco',
                fotoPerfil: '/images/canicheone.jpeg'
            },{
                id_posteo: 8,
                comentario: 'Que locura!',
                autor: 'mayo.nesa',
                fotoPerfil: '/images/mayoone.jpeg'
            },
        ]
        }, {
            id: 4,
            id_usuario: 2,
            imagen: '/images/tamakitothree.png',
            caption: 'mirenme !!!', 
            nombreUsuario: 'tamakito',
            fotoPerfil: '/images/gatoone.jpeg',
            comentarios : [ 
                {
                id_posteo: 4,
                comentario: 'Me encanta esta !!',
                autor: 'pepita_jr',
                fotoPerfil: '/images/pepaone.jpeg'
            },{
                id_posteo: 4,
                comentario: ' nada mas lindo',
                autor: 'quinto5',
                fotoPerfil: '/images/quinto1.jpeg'
            },
        ]
        },{
            id: 9,
            id_usuario: 2,
            imagen: '/images/tamakito2.jpeg',
            caption: 'mirenme !!!', 
            nombreUsuario: 'tamakito',
            fotoPerfil: '/images/gatoone.jpeg',
            comentarios : [ 
                {
                id_posteo: 9,
                comentario: 'Me encanta esta !!',
                autor: 'pepita_jr',
                fotoPerfil: '/images/pepaone.jpeg'
            },{
                id_posteo: 9,
                comentario: ' nada mas lindo',
                autor: 'quinto5',
                fotoPerfil: '/images/quinto1.jpeg'
            },
        ]
        }, {
            id: 5,
            id_usuario: 1,
            imagen: '/images/toro2.jpeg',
            caption: 'fotooooo', 
            nombreUsuario: 'toroloco',
            fotoPerfil: '/images/canicheone.jpeg',
            comentarios : [ 
                {
                id_posteo: 5,
                comentario: 'Lovely <3',
                autor: 'pepita_jr',
                fotoPerfil: '/images/pepaone.jpeg'
            },{
                id_posteo: 5,
                comentario: 'Faaa',
                autor: 'quinto5',
                fotoPerfil: '/images/quinto1.jpeg'
            },
            
        ]
        },{
            id: 10,
            id_usuario: 1,
            imagen: '/images/toro3.jpeg',
            caption: 'fotooooo', 
            nombreUsuario: 'toroloco',
            fotoPerfil: '/images/canicheone.jpeg',
            comentarios : [ 
                {
                id_posteo: 10,
                comentario: 'Lovely <3',
                autor: 'pepita_jr',
                fotoPerfil: '/images/pepaone.jpeg'
            },{
                id_posteo: 10,
                comentario: 'Faaa',
                autor: 'quinto5',
                fotoPerfil: '/images/quinto1.jpeg'
            },
            
        ]
        }
    ],
    comentarios: [
        {
            id_posteo: 1,
            comentario: 'Me encanta esta foto',
            autor: 'pepita_jr',
            fotoPerfil: '/images/pepatwo.jpeg'
        },
        {
            id_posteo: 2,
            comentario: 'Que copado',
            autor: 'mayo.nesa',
            fotoPerfil: '/images/mayoone.jpeg'
        },
        {
            id_posteo: 1,
            comentario: 'Lovely <3',
            autor: 'pepita_jr',
            fotoPerfil: '/images/pepaone.jpeg'
        },
        {
            id_posteo: 2,
            comentario: 'Faaa',
            autor: 'quinto5',
            fotoPerfil: '/images/quinto1.jpeg'
        },
        {
            id_posteo: 1,
            comentario: 'Wachi :)',
            autor: 'toroloco',
            fotoPerfil: '/images/canicheone.jpeg'
        },{
            id_posteo: 2,
            comentario: 'Que locura!',
            autor: 'mayo.nesa',
            fotoPerfil: '/images/mayoone.jpeg'
        },
        {
            id_posteo: 1,
            comentario: 'Divino!',
            autor: 'quinto5',
            fotoPerfil: '/images/quinto1.jpeg'
        },{
            id_posteo: 2,
            comentario: 'Donde estas?',
            autor: 'tamakito',
            fotoPerfil: '/images/gatoone.jpeg'
        },
        {
            id_posteo: 1,
            comentario: 'Me encanta esta foto',
            autor: 'pepita_jr',
            fotoPerfil: '/images/pepatwo.jpeg'
        },{
            id_posteo: 2,
            comentario: 'Que copado',
            autor: 'mayo.nesa',
            fotoPerfil: '/images/mayoone.jpeg'
        },
        
        

    ]

}
module.exports = index;