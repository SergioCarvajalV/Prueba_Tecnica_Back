Dependencias utilizadas en la aplciacion:
-Express.js
-nodemon
-dotenv
-promise-mysql
-babel
-cors

para instalarlas automaticamente ejecutar npm i

script creacion db en mysql:
CREATE DATABASE db_pt;
USE db_pt;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

Cambiar credenciales de acceso a la bd en el archivo .env
Para ejecutar back usar npm run dev
