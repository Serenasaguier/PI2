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
            id_usuario: 3,
            imagen: '/images/mayo2.png',
            caption: 'Jugando con mamá',
            nombreUsuario: 'quinto5',
            fotoPerfil: '/images/quinto1.jpeg',
            comentarios : [ 
                {
                id_posteo: 1,
                comentario: 'Me encanta esta foto',
                autor: 'pepita_jr',
                foto: '/images/mayoone.jpeg'
            },{
                id_posteo: 2,
                comentario: 'Me encanta esta foto nada mas',
                autor: 'pepita_jr',
                foto: '/images/mayoone.jpeg'
            },
        ]
        }, {
            id: 2,
            id_usuario: 3,
            imagen: '/images/mayo3.png',
            caption: 'primer plano', 
            nombreUsuario: 'quinto5',
            fotoPerfil: '/images/quinto1.jpeg',
            comentarios : [ 
                {
                id_posteo: 1,
                comentario: 'Me encanta esta foto',
                autor: 'pepita_jr',
                foto: '/images/mayoone.jpeg'
            },{
                id_posteo: 2,
                comentario: 'Me encanta esta foto nada mas',
                autor: 'pepita_jr',
                foto: '/images/mayoone.jpeg'
            },
        ]

        }, {
            id: 3,
            id_usuario: 4,
            imagen: '/images/pepatwo.jpeg',
            caption: 'jajaja rockstar',
            nombreUsuario: 'quinto5',
            fotoPerfil: '/images/quinto1.jpeg',
            comentarios : [ 
                {
                id_posteo: 1,
                comentario: 'Me encanta esta foto',
                autor: 'pepita_jr',
                foto: '/images/mayoone.jpeg'
            },{
                id_posteo: 2,
                comentario: 'Me encanta esta foto nada mas',
                autor: 'pepita_jr',
                foto: '/images/mayoone.jpeg'
            },
        ]
        }, {
            id: 4,
            id_usuario: 4,
            imagen: '/images/pepa3.jpeg',
            caption: 'mirenme de bebé!!!', nombreUsuario: 'quinto5',
            fotoPerfil: '/images/quinto1.jpeg',
            comentarios : [ 
                {
                id_posteo: 1,
                comentario: 'Me encanta esta foto',
                autor: 'pepita_jr',
                foto: '/images/mayoone.jpeg'
            },{
                id_posteo: 2,
                comentario: 'Me encanta esta foto nada mas',
                autor: 'pepita_jr',
                foto: '/images/mayoone.jpeg'
            },
        ]
        }, {
            id: 5,
            id_usuario: 2,
            imagen: '/images/tamakito2.jpeg',
            caption: 'foto desde arriba por Joaco', nombreUsuario: 'quinto5',
            fotoPerfil: '/images/quinto1.jpeg',
            comentarios : [ 
                {
                id_posteo: 1,
                comentario: 'Me encanta esta foto',
                autor: 'pepita_jr',
                foto: '/images/mayoone.jpeg'
            },{
                id_posteo: 2,
                comentario: 'Me encanta esta foto nada mas',
                autor: 'pepita_jr',
                foto: '/images/mayoone.jpeg'
            },
        ]
        }
    ],
    comentarios: [
        {
            id_posteo: 1,
            comentario: 'Me encanta esta foto',
            autor: 'pepita_jr',
            foto: '/images/mayoone.jpeg'
        },
        {
            id_posteo: 1,
            comentario: 'Me encanta esta fotaasdasdasdo',
            autor: 'pepita_asdasdasd',
            foto: '/images/mayoone.jpeg'
        },

    ]

}
module.exports = index;