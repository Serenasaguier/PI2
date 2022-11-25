CREATE SCHEMA pets_db;
USE pets_db;

CREATE TABLE usuarios (
id INT unsigned PRIMARY KEY auto_increment,
nombreUsuario varchar(255) NOT NULL,
email varchar(255) NOT NULL,
contrasenia varchar(255) NOT NULL,
fotoPerfil varchar(255),
cumpleanios DATE NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posteos (
id INT unsigned primary key auto_increment,
id_usuarios INT unsigned, 
imagen varchar(255) NOT NULL,
caption varchar(255) NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY(id_usuarios) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
id INT unsigned primary key auto_increment,
id_posteos INT unsigned,
id_usuarios INT unsigned,
comentario1 varchar(255) not null,
comentario2 varchar(255) not null,
autor varchar (255) not null,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (id_posteos) references posteos(id),
FOREIGN KEY (id_usuarios) REFERENCES usuarios(id)
);