//let express = require('express');
//let routes = express.Router();

// me parece que hay que poner los  posteos de cada usuario
const index = {
    usuarios : [
        { nombre: 'Sam',
        raza: 'Border Collie',
        edad: 3,
        cumpleanios: 15-05-2019,
        comentario: 'Que lindo!.',
        seguidores: 100  ,
        seguidos:90 },
        {nombre: 'Popi',
        raza: 'Caniche Toy',
        edad: 5,
        cumpleanios: 04-04-2017,
        comentario: 'Guapo!',
        seguidores: 19  ,
        seguidos:80 },
        {nombre: 'Capitán',
        raza: 'Pastor Alemán',
        edad: 4,
        cumpleanios: 02-07-2018,
        comentario: 'Me encanta esta foto',
        seguidores: 1020  ,
        seguidos:10 },
        {nombre: 'Diana',
        raza: 'Galgo',
        edad: 6,
        cumpleanios: 29-07-2016,
        comentario: 'Capo',
        seguidores: 190  ,
        seguidos:320 },
        {nombre: 'Pepa',
        raza: 'Jack Russel',
        edad: 9,
        cumpleanios: 10-02-2013,
        comentario: 'Crack amigo',
        seguidores: 121  ,
        seguidos:82 }
    ],
    posteos : [
        {
            nombreDeUsuario: 'sammito15',
            foto: '',
            comentarios: 'Que lindo!'
        }       
    ]
    
}
module.exports = index.usuarios;