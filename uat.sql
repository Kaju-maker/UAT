CREATE TABLE Administrador (
IdAdministrador integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
Correo varchar(60) NOT NULL,
Contrasena varchar(20) NOT NULL,
Nombre varchar(60) NOT NULL,
Apellido varchar(60) NOT NULL
);

CREATE TABLE Artista (
Correo varchar(60)PRIMARY KEY NOT NULL,
Nombre varchar(60) NOT NULL,
Apellido varchar(60) NOT NULL,
NumeroIdentificacion integer NOT NULL,
Contrasena varchar(20) NOT NULL,
Telefono varchar(12) NOT NULL,
FechaNacimiento datetime NOT NULL,
TipoDeArte varchar(60) NOT NULL,
FormatoDeArte varchar(60) NOT NULL,
Biografia varchar(500) NOT NULL
);

CREATE TABLE Cliente(
Correo varchar(60) PRIMARY KEY NOT NULL,
Apellido varchar(60) NOT NULL,
Nombre varchar(60) NOT NULL,
Contrasena varchar(20) NOT NULL,
Telefono varchar(12) NOT NULL,
Direccion varchar(60),
FechaNacimiento datetime NOT NULL
);

CREATE TABLE AdministradorArtista (
IdAdministradorArtista integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
fk_Administrador integer NOT NULL,
fk_Artista varchar(60) NOT NULL,
CONSTRAINT FOREIGN KEY (fk_Administrador) REFERENCES Administrador(IdAdministrador),
CONSTRAINT FOREIGN KEY (fk_Artista) REFERENCES Artista(Correo)
);

CREATE TABLE AdministradorCliente (
IdAdministradorCliente integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
fk_administrador integer NOT NULL,
fk_cliente varchar(60)  NOT NULL,
CONSTRAINT FOREIGN KEY (fk_administrador) REFERENCES Administrador(IdAdministrador),
CONSTRAINT FOREIGN KEY (fk_cliente) REFERENCES Cliente(Correo)
);

CREATE TABLE Catalogo(
IdCatalogo integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
TipoDeArte varchar(60) NOT NULL,
Precio float NOT NULL,
fk_artista varchar(60) NOT NULL,
CONSTRAINT FOREIGN KEY (fk_artista) REFERENCES Artista(Correo)
);

CREATE TABLE Obra(
IdObra integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
ImagenObra varchar(150) NOT NULL,
fk_Catalogo integer NOT NULL,
CONSTRAINT FOREIGN KEY (fk_Catalogo) REFERENCES Catalogo(IdCatalogo)
);

CREATE TABLE Pedido(
IdPedido integer PRIMARY KEY NOT NULL AUTO_INCREMENT,
Descripcion varchar(60) NOT NULL,
Precio float NOT NULL,
Color1 varchar(7) NOT NULL,
Color2 varchar(7),
Color3 varchar(7),
Color4 varchar(7),
Color5 varchar(7),
FechaEntrega datetime NOT NULL,
fk_artista1 varchar(60) NOT NULL,
fk_cliente1 varchar(60) NOT NULL,
CONSTRAINT FOREIGN KEY (fk_artista1) REFERENCES Artista(Correo),
CONSTRAINT FOREIGN KEY (fk_cliente1 ) REFERENCES Cliente(Correo)
);
