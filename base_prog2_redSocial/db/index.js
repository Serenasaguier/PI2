let express = require('express');
let routes = express.Router();

// me parece que hay que poner los  posteos de cada usuario
const index = {
    usuarios: [

        {
            id: 1,
            nombreUsuario: 'toroloco',
            img: '../images/canicheone.jpeg',
            seguidores: 100,
            seguidos: 90,
            idPosteos: []
        },

        {
            id: 2,
            nombreUsuario: 'tamakito',
            img: '../images/gatoone.jpeg',
            seguidores: 19,
            seguidos: 80,
            idPosteos: []
        },
        {
            id: 3,
            nombreUsuario: 'mayo.nesa',
            img: '../images/mayoone.jpeg',
            seguidores: 1020,
            seguidos: 10,
            idPosteos: []
        },
        {
            id: 4,
            nombreUsuario: 'pepita_jr',
            img: '../images/pepaone.jpeg',
            seguidores: 190,
            seguidos: 320,
            idPosteos: []
        },
        {
            id: 5,
            nombreUsuario: 'quinto5',
            img: '../images/pugone.jpeg',
            seguidores: 121,
            seguidos: 82,
            idPosteos: []
        }
    ],
    posteos: [
        {
            nombreDeUsuario: 'mayo.nesa',
            foto: '',
            
        }
    ],
    comentarios: [
        {comentario: 'Me encanta esta foto',
         autor: ''   
        },
        {comentario: 'Crack amigo',
            autor: '',
        }    ,
        {comentarios: 'Que lindo!'},
        {comentario: 'Capo'},
    ]

}
module.exports = index;