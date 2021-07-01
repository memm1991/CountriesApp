![LandingCountries](https://user-images.githubusercontent.com/72989632/123967026-52a31380-d98c-11eb-9bc1-ca56773185d9.png)

![home](https://user-images.githubusercontent.com/72989632/123967561-ce04c500-d98c-11eb-87f4-c0f063a7f0e9.png)

![ActivitiesCountries](https://user-images.githubusercontent.com/72989632/123967855-17edab00-d98d-11eb-9146-f60101a287a5.png)

Countries APP
En esta aplicación podrás ver distintos paises junto con información relevante de los mismos :

Buscar Paises
Filtrarlos / Ordenarlos
Agregar nuevas actividades


Comenzando 🚀
Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

IMPORTANTE: Para poder correr esta APP deberas instalar postgres SQL, y crear y configurar el archivo .env y usar el nombre de las variables que se encuentran en el cliente se sequelize, la API que se usa es publica asi que no deberas preocuparte por eso. 

El archivo .env (carpeta api) debe tener la siguiente forma:

DB_USER=usuariodepostgres


DB_PASSWORD=passwordDePostgres


DB_HOST=localhost


DB_NAME=el nombre de la base de dato que hayas creado para usar con esta app


PORT=3001


Adicionalmente será necesario que crees desde psql una base de datos llamada videogames



Instalación 🔧


Clona el repo


git clone https://github.com/memm1991/CountriesApp.git


Instala los paquetes


npm install


Inicia tanto el back (carpeta api), como el front (carpeta client)


npm start


Construido con 🛠️


 React
 
 
 Redux
 
 
 Express
 
 
 Sequelize - Postgres
 
 
Licencia 📄


Este proyecto fue creado con fines educativos, no tiene fines de lucro - sientete libre de usarlo
