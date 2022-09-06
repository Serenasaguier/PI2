//let express = require('express');
//let routes = express.Router();

const index = {
    usuarios : [
        { nombre: 'Sam',
        raza: 'Border Collie',
        edad: 3,
        cumpleanios: 15-05-2019,
        descripcion: 'Alegre y muy cariñoso.' },
        {nombre: 'Popi',
        raza: 'Caniche Toy',
        edad: 5,
        cumpleanios: 04-04-2017,
        descripcion: 'Tranquila, pero no le gustan los gatos.' },
        {nombre: 'Capitán',
        raza: 'Pastor Alemán',
        edad: 4,
        cumpleanios: 02-07-2018,
        descripcion: 'Muy guardian y le encantan los niños.' },
        {nombre: 'Diana',
        raza: 'Galgo',
        edad: 6,
        cumpleanios: 29-07-2016,
        descripcion: 'Muy activa, le gusta salir a pasear 3 veces por día.' },
        {nombre: 'Pepa',
        raza: 'Jack Russel',
        edad: 9,
        cumpleanios: 10-02-2013,
        descripcion: 'Muy simpatica y cariñosa' }
    ],
    posteos : [
        {
            nombreDeUsuario: 'sammito15',
            foto: '',
            comentarios: 'Que lindo!'
        }       
    ]
    
}
module.exports= index;