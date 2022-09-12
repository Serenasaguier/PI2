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
            img: '../images/quinto1.jpeg',
            seguidores: 121,
            seguidos: 82,
            idPosteos: []
        }
    ],
    posteos: [
        {
            nombreDeUsuario: 'mayo.nesa',
            img1: '../images/mayo2.jpeg',
            img2: '../images/mayo3.jpeg'
            
        },{
            nombreDeUsuario: 'pepita_jr',
            img1: '../images/pepatwo.jpeg',
            img2: '../images/pepa3.jpeg'
        },
        {
            nombreDeUsuario: 'tamakito',
            img1: '../images/tamakito2.jpeg',
            img2: '../images/tamakitothree.jpeg'
        },
        {
            nombreDeUsuario: 'quinto5',
            img1: '../images/quinto2.jpeg',
            img2: '../images/quinto3.jpeg'
        },
        {
            nombreDeUsuario: 'toro',
            img1: '../images/toro2.jpeg',
            img2: '../images/toro3.jpeg'
        }
    ],
    comentarios: [
        {comentario1: 'Me encanta esta foto',
        comentario2: 'Deslumbrante loco',
         autor: 'pepita_jr'   
        },
        {comentario1: 'Crack amigo',
        comentario2: 'que lindo!',
            autor: 'toroloco',
        }    ,
        {comentario1: 'Que lindo!',
        comentario2: 'Faaaaaa',
        autor:' tamakito'},

        {comentario1: 'Capo',
        comentario2: ' que locura',
        autor: 'mayo.nesa'},
        {
            comentario1:' Waw! ',
            comentario2: 'esoooo',
            autor: 'quinto5 '
        }

    ]

}
module.exports = index;