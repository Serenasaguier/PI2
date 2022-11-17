CREATE SCHEMA programacion2;
USE programacion2;

CREATE TABLE usuarios (
id INT unsigned PRIMARY KEY auto_increment,
nombreUsuario varchar(50) NOT NULL,
email varchar(50) NOT NULL,
contrasenia varchar(25) NOT NULL,
fotoPerfil varchar(100),
cumpleanios DATE NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posteos (
id INT unsigned primary key auto_increment,
id_usuario INT unsigned, 
imagen varchar(50) NOT NULL,
caption varchar(150) NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY(id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
id_posteo INT unsigned,
id_usuario INT unsigned,
comentario1 varchar(200) not null,
comentario2 varchar(200) not null,
autor varchar (50) not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (id_posteo) references posteos(id),
FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

/* insertando valores en usuarios */
INSERT INTO usuarios VALUES (default, 'toroloco', 'toroloco@gmail.com', 'Toro2012', '../images/canicheone.jpeg', '2012-12-12', default, default, default);
INSERT INTO usuarios VALUES (default, 'tamakito', 'tamak@gmail.com', 'Tamak2022', '../images/gatoone.jpeg', '2022-02-15', default, default, default);
INSERT INTO usuarios VALUES (default, 'mayo.nesa', 'mayo@gmail.com', 'Mayo2022', '../images/mayoone.jpeg', '2022-04-22', default, default, default);
INSERT INTO usuarios VALUES (default, 'pepita_jr', 'pepa@gmail.com', 'Pepa2013', '../images/pepaone.jpeg', '2012-12-12', default, default, default);
INSERT INTO usuarios VALUES (default, 'quinto5', 'quinto@gmail.com', 'Quinto2017', '../images/quinto1.jpeg', '2017-05-12', default, default, default);

/* insertando valores en posteos */
INSERT INTO posteos VALUES (default, default, '../images/mayo2.jpeg', 'Jugando con mamá', default, default, default);
INSERT INTO posteos VALUES (default, default, '../images/mayo3.jpeg', 'primer plano', default, default, default);
INSERT INTO posteos VALUES (default, default, '../images/pepatwo.jpeg', 'jajaja rockstar', default, default, default);
INSERT INTO posteos VALUES (default, default, '../images/pepa3.jpeg', 'mirenme de bebé!!!', default, default, default);
INSERT INTO posteos VALUES (default, default, '../images/tamakito2.jpeg', 'foto desde arriba por Joaco', default, default, default);
INSERT INTO posteos VALUES (default, default, '../images/tamakitothree.jpeg', 'Una foto que me sacó un fotografo el otro dia.', default, default, default);
INSERT INTO posteos VALUES (default, default, '../images/quinto2.jpeg', 'mamá me saco esta foto cuando le pedía un pedazo de torta.', default, default, default);
INSERT INTO posteos VALUES (default, default, '../images/quinto3.jpeg', 'DALE BOCA CAMPEON', default, default, default);
INSERT INTO posteos VALUES (default, default, '../images/toro2.jpeg', 'mojado :(', default, default, default);
INSERT INTO posteos VALUES (default, default, '../images/toro3.jpeg', 'aahhh cuando me pelaron jajaa', default, default, default);

/* insertando valores en comentarios */
INSERT INTO comentarios VALUES (default, default, 'Me encanta esta foto', 'Deslumbrante loco', 'pepita_jr', default, default, default);
INSERT INTO comentarios VALUES (default, default, 'Crack amigo', 'que lindo!', 'toroloco', default, default, default);
INSERT INTO comentarios VALUES (default, default, 'Que lindo!', 'Faaaaaa', 'tamakito', default, default, default);
INSERT INTO comentarios VALUES (default, default, 'Capo', ' que locura', 'mayo.nesa', default, default, default);
INSERT INTO comentarios VALUES (default, default, ' Waw! ', 'esoooo', 'quinto5', default, default, default);

