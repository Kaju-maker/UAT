INSERT INTO Cliente(Correo,Apellido,Nombre,Contrasena,Telefono,Direccion,FechaNacimiento)
VALUES ("pepe@gmail.com","Perez","Pepe","123456",319548316,"Cra 11 A, 205-4","2006/05/06");
#SET FOREIGN_KEY_CHECKS=0;
INSERT INTO Artista(Correo,Nombre,Apellido,NumeroIdentificacion,Contrasena,Telefono,FechaNacimiento,TipoDeArte,FormatoDeArte,Biografia)
VALUES ("pepea@gmail.com","Pepe","Perez","123456","12345678",319548316,"2006/05/06","Abstracto","Digital","nadita");
INSERT INTO Catalogo(IdCatalogo,TipoDeArte,Precio,fk_artista)
VALUES (1,"Abstracto",352222,"pepea@gmail.com");
INSERT INTO Obra(fk_Catalogo,ImagenObra)
VALUES (1,"https://pbs.twimg.com/media/Er4qE8eXcAE75R7.jpg");
SELECT * FROM Catalogo, Obra WHERE fk_Catalogo=IdCatalogo;
SELECT * FROM Catalogo;
SELECT * FROM Obra;

INSERT INTO Pedido(IdPedido,Descripcion,Precio,Color1,Color2,Color3,Color4,Color5,FechaEntrega,fk_artista1,fk_cliente1)
VALUES (1,"xdOjalafuncione",352222,"#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","2022-06-16","pepe@gmail.com","pepea@gmail.com");
INSERT INTO Pedido(IdPedido,Descripcion,Precio,Color1,Color2,Color3,Color4,Color5,FechaEntrega)
VALUES (1,"xdOjalafuncione",352222,"#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","#FFFFFF","2022-06-16");