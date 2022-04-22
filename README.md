<h1>SOCCER TEST</h1>
  Esta apliacion nos permite crear nuestros equipos de futbol, crear los futbolistas y asisnarlos a los equipos, ademas podemos editar, eliminar y buscar por jugador 
  o equipo
  

Para poder tener acceso a la aplicacion debes seguir las siguientes indicaciones
  
  <h2>HAZ FORK AL REPOSITORIO Y CLONALO EN TU MAQUINA</h2>

Aclaraciones: Para poder ejecutar esta app debes tener instalado en tu equipo postgreSQL

<h3>BACKEND</h3>
 
1. Desde la consola o el terminal nos dirijimos a la carpeta del test e ingresamos a la carpeta "api"
2. Ejecutamos el comando "npm install" (Con el objetivo de instalar todas las dependencias)
3. Dentro de api creamos un archivo ".env" y dentro de el colocaremos la siguiente información
  <ul>
  <li>DB_USER= YOUR_DB_USER</li>
  <li>DB_PASSWORD= YOUR_DB_PASSWORD</li>
  <li>DB_HOST= localhost</li>
  </ul>
  
4. Desde la terminal de SQL ejecutamos el comando "CREATE DATABASE soccer;"
5. Ejecutamos "npm start", en algunos casos saltan errores al conectarse con la base de datos, para ello ejecutaremos el comando "$env:OPENSSL_CONF = ''"
  en nuestra consola y volvemos a ejecutar "npm start"
  
 <h5>NOTA:</h5>
 Utilizaremos el puerto 3002
  
  <h3>FRONTEND</h3>
  
  1. Desde la consola o el terminal nos dirigimos a la carpeta del test e ingresamos a la carpeta "client"
  2. Ejecutamos el comando "npm install" (Con el objetivo de instalar todas las dependencias)
  3. Ejecutaremos "npm start" y ya podremos navegar por toda la aplicación

<h5>NOTA:</h5>
 Utilizaremos el puerto 3000
